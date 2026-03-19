import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, Building2, Briefcase, FileText, ScanSearch, MapPin, GraduationCap, Globe, ExternalLink, Crown, Shield, Award, Star, MessageCircle, CheckCircle, XCircle } from "lucide-react";
import api from "../../../lib/axios";
import toast from "react-hot-toast";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
}

interface AchievementItem {
  id: string;
  title: string;
  description: string;
  date?: string;
}

interface UserDetail {
  id: number;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  isProfilePublic: boolean;
  isVerified: boolean;
  contactNo?: string;
  profilePic?: string;
  coverImage?: string;
  resumes?: string[];
  company?: string;
  designation?: string;
  // Subscription
  subscriptionPlan: string;
  subscriptionStatus: string;
  subscriptionStartDate?: string;
  subscriptionEndDate?: string;
  // Student profile
  bio?: string;
  college?: string;
  graduationYear?: number;
  skills: string[];
  location?: string;
  jobStatus?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  leetcodeUrl?: string;
  projects: ProjectItem[];
  achievements: AchievementItem[];
  createdAt: string;
  updatedAt: string;
  _count: {
    applications: number;
    postedJobs: number;
    atsScores: number;
    companyReviews: number;
    contributions: number;
    usageLogs: number;
    studentBadges: number;
    skillTestAttempts: number;
    verifiedSkills: number;
  };
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

  const projects = (Array.isArray(user.projects) ? user.projects : []) as ProjectItem[];
  const achievements = (Array.isArray(user.achievements) ? user.achievements : []) as AchievementItem[];

  return (
    <div>
      <button onClick={() => navigate("/admin/users")} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Users
      </button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        {/* Header */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              {user.profilePic ? (
                <img src={user.profilePic} alt={user.name} className="w-16 h-16 rounded-xl object-cover" />
              ) : (
                <div className="w-16 h-16 rounded-xl bg-gray-800 flex items-center justify-center text-white text-xl font-bold">
                  {user.name.charAt(0)}
                </div>
              )}
              <div>
                <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                {user.bio && <p className="text-sm text-gray-400 mt-1 max-w-lg">{user.bio}</p>}
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getRoleBadge(user.role)}`}>
                    {user.role}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${user.isActive ? "bg-green-900/50 text-green-400" : "bg-red-900/50 text-red-400"}`}>
                    {user.isActive ? "Active" : "Inactive"}
                  </span>
                  {user.isVerified && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-900/50 text-blue-400 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Verified
                    </span>
                  )}
                  {!user.isVerified && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-400 flex items-center gap-1">
                      <XCircle className="w-3 h-3" /> Unverified
                    </span>
                  )}
                  {user.isProfilePublic && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-900/50 text-cyan-400">Public Profile</span>
                  )}
                  {user.adminProfile && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-400">
                      {user.adminProfile.tier}
                    </span>
                  )}
                </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact & Profile */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Contact & Profile</h2>
            <div className="space-y-3">
              <InfoRow icon={Mail} label="Email" value={user.email} />
              {user.contactNo && <InfoRow icon={Phone} label="Phone" value={user.contactNo} />}
              {user.company && <InfoRow icon={Building2} label="Company" value={`${user.company}${user.designation ? ` - ${user.designation}` : ""}`} />}
              {user.location && <InfoRow icon={MapPin} label="Location" value={user.location} />}
              {user.college && <InfoRow icon={GraduationCap} label="College" value={user.college} />}
              {user.graduationYear && <InfoRow icon={GraduationCap} label="Graduation Year" value={String(user.graduationYear)} />}
              {user.jobStatus && <InfoRow icon={Briefcase} label="Job Status" value={user.jobStatus} />}
            </div>
          </div>

          {/* Subscription */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Subscription</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Crown className={`w-4 h-4 ${user.subscriptionPlan !== "FREE" ? "text-yellow-400" : "text-gray-500"}`} />
                <div>
                  <span className="text-gray-500 text-xs block">Plan</span>
                  <span className={`text-sm font-medium ${user.subscriptionPlan !== "FREE" ? "text-yellow-400" : "text-gray-400"}`}>
                    {user.subscriptionPlan}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className={`w-4 h-4 ${user.subscriptionStatus === "ACTIVE" ? "text-green-400" : "text-gray-500"}`} />
                <div>
                  <span className="text-gray-500 text-xs block">Status</span>
                  <span className={`text-sm font-medium ${user.subscriptionStatus === "ACTIVE" ? "text-green-400" : "text-gray-400"}`}>
                    {user.subscriptionStatus}
                  </span>
                </div>
              </div>
              {user.subscriptionStartDate && (
                <div className="text-sm">
                  <span className="text-gray-500">Start: </span>
                  <span className="text-gray-300">{new Date(user.subscriptionStartDate).toLocaleDateString()}</span>
                </div>
              )}
              {user.subscriptionEndDate && (
                <div className="text-sm">
                  <span className="text-gray-500">End: </span>
                  <span className="text-gray-300">{new Date(user.subscriptionEndDate).toLocaleDateString()}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Skills */}
        {user.skills.length > 0 && (
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-indigo-900/30 text-indigo-400 rounded-lg text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        {(user.linkedinUrl || user.githubUrl || user.portfolioUrl || user.leetcodeUrl) && (
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {user.linkedinUrl && <LinkItem label="LinkedIn" url={user.linkedinUrl} />}
              {user.githubUrl && <LinkItem label="GitHub" url={user.githubUrl} />}
              {user.portfolioUrl && <LinkItem label="Portfolio" url={user.portfolioUrl} />}
              {user.leetcodeUrl && <LinkItem label="LeetCode" url={user.leetcodeUrl} />}
            </div>
          </div>
        )}

        {/* Activity Stats */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Activity Stats</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            <StatItem icon={FileText} value={user._count.applications} label="Applications" color="text-blue-400" />
            <StatItem icon={Briefcase} value={user._count.postedJobs} label="Jobs Posted" color="text-purple-400" />
            <StatItem icon={ScanSearch} value={user._count.atsScores} label="ATS Scores" color="text-green-400" />
            <StatItem icon={Star} value={user._count.companyReviews} label="Reviews" color="text-yellow-400" />
            <StatItem icon={MessageCircle} value={user._count.contributions} label="Contributions" color="text-cyan-400" />
            <StatItem icon={Award} value={user._count.studentBadges} label="Badges" color="text-orange-400" />
            <StatItem icon={Shield} value={user._count.verifiedSkills} label="Verified Skills" color="text-emerald-400" />
            <StatItem icon={CheckCircle} value={user._count.skillTestAttempts} label="Test Attempts" color="text-pink-400" />
            <StatItem icon={Globe} value={user._count.usageLogs} label="Usage Logs" color="text-gray-400" />
          </div>
        </div>

        {/* Projects */}
        {projects.length > 0 && (
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Projects ({projects.length})</h2>
            <div className="space-y-4">
              {projects.map((p) => (
                <div key={p.id} className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                  {p.description && <p className="text-xs text-gray-400 mt-1">{p.description}</p>}
                  {p.techStack?.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {p.techStack.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded text-[11px]">{t}</span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-3 mt-2">
                    {p.repoUrl && <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-400 hover:underline">Repo</a>}
                    {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-400 hover:underline">Live</a>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Achievements ({achievements.length})</h2>
            <div className="space-y-3">
              {achievements.map((a) => (
                <div key={a.id} className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-white">{a.title}</h3>
                  {a.description && <p className="text-xs text-gray-400 mt-1">{a.description}</p>}
                  {a.date && <p className="text-xs text-gray-500 mt-1">{a.date}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resumes & Media */}
        {((user.resumes && user.resumes.length > 0) || user.coverImage) && (
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Files & Media</h2>
            {user.coverImage && (
              <div className="mb-4">
                <span className="text-gray-500 text-xs block mb-2">Cover Image</span>
                <img src={user.coverImage} alt="Cover" className="w-full max-w-md h-32 object-cover rounded-lg" />
              </div>
            )}
            {user.resumes && user.resumes.length > 0 && (
              <div>
                <span className="text-gray-500 text-xs block mb-2">Resumes ({user.resumes.length})</span>
                <div className="space-y-2">
                  {user.resumes.map((url, i) => (
                    <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-indigo-400 hover:underline">
                      <FileText className="w-4 h-4" /> Resume {i + 1}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Account Details */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Account Details</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
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
            <div>
              <span className="text-gray-500">Profile Visibility</span>
              <p className="text-gray-300">{user.isProfilePublic ? "Public" : "Private"}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <Icon className="w-4 h-4 text-gray-500 shrink-0" />
      <div>
        <span className="text-gray-500 text-xs block">{label}</span>
        <span className="text-gray-300">{value}</span>
      </div>
    </div>
  );
}

function LinkItem({ label, url }: { label: string; url: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
      <ExternalLink className="w-3.5 h-3.5" />
      {label}
    </a>
  );
}

function StatItem({ icon: Icon, value, label, color }: { icon: typeof FileText; value: number; label: string; color: string }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-2">
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-gray-400">{label}</p>
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
