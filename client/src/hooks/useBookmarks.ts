import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "../lib/axios";
import { useAuthStore } from "../store/authStore";

export type BookmarkType = "JOB" | "HACKATHON" | "COMPANY" | "EXTERNAL_JOB";

export interface Bookmark {
  id: number;
  userId: number;
  entityId: string;
  entityType: BookmarkType;
  title?: string;
  url?: string;
  data?: any;
  createdAt: string;
}

const LOCAL_STORAGE_KEY = "internhack_bookmarks";

export const useBookmarks = (typeFilter?: BookmarkType) => {
  const { user, isAuthenticated } = useAuthStore();
  const queryClient = useQueryClient();
  const [localBookmarks, setLocalBookmarks] = useState<Bookmark[]>([]);

  // Load from local storage initially
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        setLocalBookmarks(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to parse local bookmarks", e);
    }
  }, []);

  // Sync local to DB when user logs in
  useEffect(() => {
    if (isAuthenticated && localBookmarks.length > 0) {
      axios
        .post("/student/bookmarks/sync", { localBookmarks })
        .then(() => {
          localStorage.removeItem(LOCAL_STORAGE_KEY);
          setLocalBookmarks([]);
          queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
        })
        .catch((e) => console.error("Failed to sync bookmarks", e));
    }
  }, [isAuthenticated, localBookmarks, queryClient]);

  // Query DB if authenticated
  const { data: dbBookmarks = [], isLoading } = useQuery({
    queryKey: ["bookmarks", typeFilter],
    queryFn: async () => {
      if (!isAuthenticated) return [];
      const url = typeFilter ? `/student/bookmarks?type=${typeFilter}` : "/student/bookmarks";
      const { data } = await axios.get<Bookmark[]>(url);
      return data;
    },
    enabled: isAuthenticated,
  });

  // Combine local and DB bookmarks depending on auth state
  const bookmarks = isAuthenticated ? dbBookmarks : localBookmarks.filter(b => !typeFilter || b.entityType === typeFilter);

  const isBookmarked = (entityId: string, entityType: BookmarkType) => {
    return bookmarks.some((b) => b.entityId === entityId && b.entityType === entityType);
  };

  const toggleMutation = useMutation({
    mutationFn: async ({
      entityId,
      entityType,
      title,
      url,
      data,
    }: {
      entityId: string;
      entityType: BookmarkType;
      title?: string;
      url?: string;
      data?: any;
    }) => {
      if (!isAuthenticated) {
        // Handle locally
        return new Promise<void>((resolve) => {
          setLocalBookmarks((prev) => {
            const exists = prev.some((b) => b.entityId === entityId && b.entityType === entityType);
            let next;
            if (exists) {
              next = prev.filter((b) => !(b.entityId === entityId && b.entityType === entityType));
            } else {
              next = [
                {
                  id: Date.now(), // dummy id
                  userId: 0,
                  entityId,
                  entityType,
                  title,
                  url,
                  data,
                  createdAt: new Date().toISOString(),
                },
                ...prev,
              ];
            }
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(next));
            return next;
          });
          resolve();
        });
      }

      // Handle remotely
      await axios.post("/student/bookmarks/toggle", {
        entityId,
        entityType,
        title,
        url,
        data,
      });
    },
    onMutate: async (newBookmark) => {
      if (!isAuthenticated) return;

      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["bookmarks"] });

      // Snapshot the previous value
      const previousBookmarks = queryClient.getQueryData<Bookmark[]>(["bookmarks", typeFilter]);

      // Optimistically update to the new value
      queryClient.setQueryData<Bookmark[]>(["bookmarks", typeFilter], (old) => {
        if (!old) return [];
        const exists = old.find((b) => b.entityId === newBookmark.entityId && b.entityType === newBookmark.entityType);
        if (exists) {
          return old.filter((b) => !(b.entityId === newBookmark.entityId && b.entityType === newBookmark.entityType));
        } else {
          return [
            {
              id: Date.now(), // dummy id for optimistic update
              userId: user?.id || 0,
              entityId: newBookmark.entityId,
              entityType: newBookmark.entityType,
              title: newBookmark.title,
              url: newBookmark.url,
              data: newBookmark.data,
              createdAt: new Date().toISOString(),
            },
            ...old,
          ];
        }
      });

      // Return a context object with the snapshotted value
      return { previousBookmarks };
    },
    onError: (err, newBookmark, context) => {
      if (context?.previousBookmarks && isAuthenticated) {
        queryClient.setQueryData(["bookmarks", typeFilter], context.previousBookmarks);
      }
    },
    onSettled: () => {
      if (isAuthenticated) {
        queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
      }
    },
  });

  return {
    bookmarks,
    isLoading: isAuthenticated ? isLoading : false,
    isBookmarked,
    toggleBookmark: toggleMutation.mutate,
    isToggling: toggleMutation.isPending,
  };
};
