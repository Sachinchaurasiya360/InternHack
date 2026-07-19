import { useState } from "react";
import { toast } from "react-hot-toast";
import { RefreshCw, Code2 } from "lucide-react";
import api from "../../../../lib/axios";
import { useAuthStore } from "../../../../lib/auth.store";

/** Only rendered by the parent when `user.leetcodeUrl` is already set — never asks for it inline. */
export const LeetCodeSync = ({
  onSyncSuccess,
}: {
  onSyncSuccess: () => void;
}) => {
  const { user } = useAuthStore();
  const [isSyncing, setIsSyncing] = useState(false);

  const leetcodeUsername = user?.leetcodeUrl
    ?.split("leetcode.com/")
    .pop()
    ?.replace(/^\/?u\//, "")
    .replace(/\/$/, "");

  const handleSync = async () => {
    if (!leetcodeUsername) return;

    setIsSyncing(true);
    try {
      const { data } = await api.post("/dsa/sync/leetcode", {
        leetcodeUsername,
      });
      const result = data.data;
      if (result.syncedCount > 0) {
        toast.success(
          `Synced ${result.syncedCount} problem${result.syncedCount > 1 ? "s" : ""} from LeetCode!`,
        );
        onSyncSuccess();
      } else {
        toast("Synced! No new matching problems found.", { icon: "ℹ️" });
      }
    } catch (err: unknown) {
      const e = err as { response?: { data?: { message?: string } } };
      toast.error(e.response?.data?.message || "Sync failed");
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl shadow-sm mb-8 transition-all hover:border-stone-300 dark:hover:border-white/20">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-white/5 flex items-center justify-center shrink-0">
          <Code2 className="w-5 h-5 text-lime-600 dark:text-lime-400" />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Sync LeetCode Progress
          </h4>
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 truncate">
            Syncing for: {leetcodeUsername}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto">
        <button
          onClick={handleSync}
          disabled={isSyncing}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all shrink-0 ${
            isSyncing
              ? "bg-stone-200 dark:bg-white/10 text-stone-400 cursor-not-allowed"
              : "bg-lime-400 hover:bg-lime-300 text-stone-950 shadow-sm hover:shadow-lime-400/20"
          }`}
        >
          <RefreshCw
            className={`w-4 h-4 ${isSyncing ? "animate-spin" : ""}`}
          />
          <span>{isSyncing ? "Syncing..." : "Sync Now"}</span>
        </button>
      </div>
    </div>
  );
};
