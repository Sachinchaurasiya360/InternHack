import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, Building2, Briefcase, FileText, ScanSearch } from "lucide-react";
import api from "../../../lib/axios";
import toast from "react-hot-toast";

interface UserDetail {
  id: number;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  contactNo?: string;
  profilePic?: string;
  resume?: string;
  company?: string;
  designation?: string;
  createdAt: string;
  updatedAt: string;
  _count: { applications: number; postedJobs: number; atsScores: number };
  adminProfile?: { tier: string; isActive: boolean } | null;
}

export default function UserDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/admin/users/${id}`).then((res) => {
      setUser(res.data.user);
      setLoading(false);
    }).catch(() => {
      toast.error("User not found");
      setLoading(false);
    });
  }, [id]);

  const toggleStatus = async () => {
    if (!user) return;
    try {
      await api.patch(`/admin/users/${user.id}/status`, { isActive: !user.isActive });
      setUser({ ...user, isActive: !user.isActive });
      toast.success(`User ${user.isActive ? "deactivated" : "activated"}`);
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      toast.error(error.response?.data?.message || "Failed to update user");
    }
  };

  const deleteUser = async () => {
    if (!user) return;
    if (!confirm(`Are you sure you want to delete ${user.name}? This cannot be undone.`)) return;
    try {
      await api.delete(`/admin/users/${user.id}`);
      toast.success("User deleted");
      navigate("/admin/users");
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      toast.error(error.response?.data?.message || "Failed to delete user");
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-64 text-gray-400">Loading user...</div>;
  }

  if (!user) {
    return <div className="text-center text-gray-400">User not found</div>;
  }

  return (
    <div>
      <button onClick={() => navigate("/admin/users")} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Users
      </button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        {/* Header */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <div className="flex items-center gap-3 mt-2">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getRoleBadge(user.role)}`}>
                  {user.role}
                </span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${user.isActive ? "bg-green-900/50 text-green-400" : "bg-red-900/50 text-red-400"}`}>
                  {user.isActive ? "Active" : "Inactive"}
                </span>
                {user.adminProfile && (
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-400">
                    {user.adminProfile.tier}
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={toggleStatus}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  user.isActive
                    ? "bg-yellow-900/30 text-yellow-400 hover:bg-yellow-900/50"
                    : "bg-green-900/30 text-green-400 hover:bg-green-900/50"
                }`}
              >
                {user.isActive ? "Deactivate" : "Activate"}
              </button>
              <button
                onClick={deleteUser}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-red-900/30 text-red-400 hover:bg-red-900/50 transition-colors"
              >
                Delete User
              </button>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Contact Information</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-gray-500" />
                {user.email}
              </div>
              {user.contactNo && (
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-gray-500" />
                  {user.contactNo}
                </div>
              )}
              {user.company && (
                <div className="flex items-center gap-3 text-gray-300">
                  <Building2 className="w-4 h-4 text-gray-500" />
                  {user.company} {user.designation && `- ${user.designation}`}
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Activity Stats</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-2xl font-bold text-white">{user._count.applications}</p>
                <p className="text-xs text-gray-400">Applications</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-2xl font-bold text-white">{user._count.postedJobs}</p>
                <p className="text-xs text-gray-400">Jobs Posted</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <ScanSearch className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-2xl font-bold text-white">{user._count.atsScores}</p>
                <p className="text-xs text-gray-400">ATS Scores</p>
              </div>
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Account Details</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">User ID</span>
              <p className="text-gray-300">{user.id}</p>
            </div>
            <div>
              <span className="text-gray-500">Joined</span>
              <p className="text-gray-300">{new Date(user.createdAt).toLocaleString()}</p>
            </div>
            <div>
              <span className="text-gray-500">Last Updated</span>
              <p className="text-gray-300">{new Date(user.updatedAt).toLocaleString()}</p>
            </div>
            {user.resume && (
              <div>
                <span className="text-gray-500">Resume</span>
                <p className="text-indigo-400">Uploaded</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function getRoleBadge(role: string) {
  switch (role) {
    case "STUDENT": return "bg-blue-900/50 text-blue-400";
    case "RECRUITER": return "bg-purple-900/50 text-purple-400";
    case "ADMIN": return "bg-red-900/50 text-red-400";
    default: return "bg-gray-800 text-gray-400";
  }
}
