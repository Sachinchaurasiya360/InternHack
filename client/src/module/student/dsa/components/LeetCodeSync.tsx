import React, { useState } from 'react';
import { toast } from 'react-hot-toast'; // or whatever toast library the project uses
import api from '../../../../lib/axios';

export const LeetCodeSync = ({ onSyncSuccess }: { onSyncSuccess: () => void }) => {
    const [username, setUsername] = useState("");
    const [isSyncing, setIsSyncing] = useState(false);

    const handleSync = async () => {
        if (!username.trim()) return toast.error("Please enter a username");

        setIsSyncing(true);
        try {
            const { data } = await api.post("/dsa/sync/leetcode", { leetcodeUsername: username });
            const result = data.data;
            if (result.syncedCount > 0) {
                toast.success(`Synced ${result.syncedCount} problem${result.syncedCount > 1 ? "s" : ""} from LeetCode!`);
                onSyncSuccess();
            } else {
                toast("Synced! No new matching problems found.", { icon: "ℹ️" });
            }
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Sync failed");
        } finally {
            setIsSyncing(false);
        }
    };

    return (
        <div className="flex items-center gap-3 p-4 bg-white border rounded-xl shadow-sm mb-6">
            <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-700">Sync LeetCode Progress</h4>
                <p className="text-xs text-gray-500">Automatically mark solved problems as completed.</p>
            </div>
            <input
                type="text"
                placeholder="LeetCode Username"
                className="px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button
                onClick={handleSync}
                disabled={isSyncing}
                className={`px-4 py-2 rounded-lg text-sm font-medium text-white transition-all ${isSyncing ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"
                    }`}
            >
                {isSyncing ? "Syncing..." : "Sync Now"}
            </button>
        </div>
    );
};