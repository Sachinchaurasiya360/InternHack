import { useEffect, useState, useCallback } from "react";
import {
  Users,
  Search,
  SlidersHorizontal,
  Inbox,
  Send,
  X,
  CheckCircle2,
  XCircle,
  Clock,
  ChevronDown,
  UserPlus,
  Loader2,
} from "lucide-react";
import toast from "../../../components/ui/toast";
import TeammateCard from "../component/TeammateCard";
import {
  getTeammates,
  sendInvitation,
  getReceivedInvitations,
  getSentInvitations,
  acceptInvitation,
  rejectInvitation,
  getMyTeammateProfile,
  createTeammateProfile,
  type TeammateProfile,
  type Invitation,
} from "../services/Teammate.api";

// ── Constants ─────────────────────────────────────────────────────────────────

const TABS = [
  { id: "browse", label: "Browse", icon: Users },
  { id: "received", label: "Received", icon: Inbox },
  { id: "sent", label: "Sent", icon: Send },
  { id: "profile", label: "My Profile", icon: UserPlus },
] as const;

type TabId = (typeof TABS)[number]["id"];

const SKILLS_OPTIONS = [
  "React", "TypeScript", "Node.js", "Python", "Java", "C++",
  "Go", "Rust", "Vue", "Angular", "Next.js", "GraphQL",
  "Docker", "Kubernetes", "AWS", "Firebase", "MongoDB", "PostgreSQL",
];

const STACK_OPTIONS = [
  "MERN", "MEAN", "Next.js", "Django", "FastAPI", "Spring Boot",
  "Flutter", "React Native", "Electron", "Tauri",
];

const ROLE_OPTIONS = [
  "Frontend Developer", "Backend Developer", "Full Stack",
  "ML Engineer", "Designer", "DevOps", "Mobile Developer", "Data Scientist",
];

const EXP_OPTIONS = ["Beginner", "Intermediate", "Advanced"];
const AVAIL_OPTIONS = ["Weekends", "Weekdays", "Full-time", "Part-time", "Flexible"];

// ── Helper ────────────────────────────────────────────────────────────────────

function InvitationBadge({ status }: { status: Invitation["status"] }) {
  const map = {
    PENDING: { label: "Pending", cls: "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300", Icon: Clock },
    ACCEPTED: { label: "Accepted", cls: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300", Icon: CheckCircle2 },
    REJECTED: { label: "Rejected", cls: "bg-rose-50 text-rose-700 dark:bg-rose-900/20 dark:text-rose-300", Icon: XCircle },
  };
  const { label, cls, Icon } = map[status];
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${cls}`}>
      <Icon className="w-3 h-3" />
      {label}
    </span>
  );
}

function InvitationCard({
  inv,
  mode,
  onAccept,
  onReject,
}: {
  inv: Invitation;
  mode: "received" | "sent";
  onAccept?: (id: number) => void;
  onReject?: (id: number) => void;
}) {
  const person = mode === "received" ? inv.senderProfile : inv.receiverProfile;
  const name =
    person?.user?.name ??
    (mode === "received" ? inv.sender?.name : inv.receiver?.name) ??
    "Unknown";
  const role = person?.preferredRole ?? "—";
  const skills = person?.skills ?? [];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900">
      {/* Avatar */}
      <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-lime-400 to-emerald-500 flex items-center justify-center">
        <span className="text-sm font-bold text-white">
          {name.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase()}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-stone-900 dark:text-stone-50 truncate">{name}</p>
        <p className="text-xs text-stone-500 mt-0.5">{role}</p>
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1.5">
            {skills.slice(0, 4).map((s: string) => (
              <span key={s} className="px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-xs text-stone-600 dark:text-stone-400">
                {s}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <InvitationBadge status={inv.status} />
        {mode === "received" && inv.status === "PENDING" && (
          <>
            <button
              id={`accept-inv-${inv.id}`}
              onClick={() => onAccept?.(inv.id)}
              className="px-3 py-1.5 rounded-lg bg-lime-500 hover:bg-lime-600 text-white text-xs font-semibold transition-colors"
            >
              Accept
            </button>
            <button
              id={`reject-inv-${inv.id}`}
              onClick={() => onReject?.(inv.id)}
              className="px-3 py-1.5 rounded-lg border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:border-rose-400 hover:text-rose-500 text-xs font-semibold transition-colors"
            >
              Decline
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ── Profile Setup Form ────────────────────────────────────────────────────────

function ProfileForm({ existing, onSaved }: { existing: TeammateProfile | null; onSaved: (p: TeammateProfile) => void }) {
  const [skills, setSkills] = useState<string[]>(existing?.skills ?? []);
  const [techStack, setTechStack] = useState<string[]>(existing?.techStack ?? []);
  const [preferredRole, setPreferredRole] = useState(existing?.preferredRole ?? "");
  const [experienceLevel, setExperienceLevel] = useState(existing?.experienceLevel ?? "");
  const [availability, setAvailability] = useState(existing?.availability ?? "");
  const [lookingForTeam, setLookingForTeam] = useState(existing?.lookingForTeam ?? true);
  const [saving, setSaving] = useState(false);

  const toggleItem = (list: string[], setList: (v: string[]) => void, item: string) => {
    setList(list.includes(item) ? list.filter((x) => x !== item) : [...list, item]);
  };

  const handleSave = async () => {
    if (!preferredRole || !experienceLevel || !availability) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSaving(true);
    try {
      const profile = await createTeammateProfile({
        skills,
        preferredRole,
        techStack,
        availability,
        experienceLevel,
        lookingForTeam,
      });
      onSaved(profile);
      toast.success("Profile saved!");
    } catch {
      toast.error("Failed to save profile.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 p-6 space-y-5">
        {/* Role */}
        <div>
          <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
            Preferred Role <span className="text-rose-500">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {ROLE_OPTIONS.map((r) => (
              <button
                key={r}
                onClick={() => setPreferredRole(r)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
                  preferredRole === r
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-transparent"
                    : "border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:border-stone-400"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Level */}
        <div>
          <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
            Experience Level <span className="text-rose-500">*</span>
          </label>
          <div className="flex gap-2">
            {EXP_OPTIONS.map((e) => (
              <button
                key={e}
                onClick={() => setExperienceLevel(e)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                  experienceLevel === e
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-transparent"
                    : "border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:border-stone-400"
                }`}
              >
                {e}
              </button>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
          <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
            Availability <span className="text-rose-500">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {AVAIL_OPTIONS.map((a) => (
              <button
                key={a}
                onClick={() => setAvailability(a)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
                  availability === a
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-transparent"
                    : "border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:border-stone-400"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">Skills</label>
          <div className="flex flex-wrap gap-2">
            {SKILLS_OPTIONS.map((s) => (
              <button
                key={s}
                onClick={() => toggleItem(skills, setSkills, s)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors border ${
                  skills.includes(s)
                    ? "bg-lime-500 text-white border-transparent"
                    : "border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:border-lime-400"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">Tech Stack</label>
          <div className="flex flex-wrap gap-2">
            {STACK_OPTIONS.map((t) => (
              <button
                key={t}
                onClick={() => toggleItem(techStack, setTechStack, t)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors border ${
                  techStack.includes(t)
                    ? "bg-indigo-500 text-white border-transparent"
                    : "border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:border-indigo-400"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Looking for team toggle */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-white/10">
          <div>
            <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">Looking for a team</p>
            <p className="text-xs text-stone-500 mt-0.5">Make your profile visible to others</p>
          </div>
          <button
            onClick={() => setLookingForTeam((v) => !v)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              lookingForTeam ? "bg-lime-500" : "bg-stone-300 dark:bg-stone-600"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
                lookingForTeam ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        <button
          id="save-teammate-profile"
          onClick={handleSave}
          disabled={saving}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 font-semibold text-sm hover:opacity-80 transition-opacity disabled:opacity-50"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
          {saving ? "Saving…" : "Save Profile"}
        </button>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function FindTeammates() {
  const [tab, setTab] = useState<TabId>("browse");

  // Browse state
  const [profiles, setProfiles] = useState<TeammateProfile[]>([]);
  const [loadingProfiles, setLoadingProfiles] = useState(false);
  const [sentIds, setSentIds] = useState<Set<number>>(new Set());

  // Filter state
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filterSkills, setFilterSkills] = useState("");
  const [filterExp, setFilterExp] = useState("");
  const [filterAvail, setFilterAvail] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Invitations state
  const [received, setReceived] = useState<Invitation[]>([]);
  const [sent, setSent] = useState<Invitation[]>([]);
  const [loadingInvs, setLoadingInvs] = useState(false);

  // Profile state
  const [myProfile, setMyProfile] = useState<TeammateProfile | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(false);

  // ── Data loaders ────────────────────────────────────────────────────────────

  const loadProfiles = useCallback(async () => {
    setLoadingProfiles(true);
    try {
      const data = await getTeammates({
        preferredRole: filterRole || undefined,
        skills: filterSkills || undefined,
        experienceLevel: filterExp || undefined,
        availability: filterAvail || undefined,
      });
      setProfiles(data);
    } catch {
      toast.error("Failed to load teammates.");
    } finally {
      setLoadingProfiles(false);
    }
  }, [filterRole, filterSkills, filterExp, filterAvail]);

  const loadInvitations = useCallback(async () => {
    setLoadingInvs(true);
    try {
      const [recv, snt] = await Promise.all([getReceivedInvitations(), getSentInvitations()]);
      setReceived(recv);
      setSent(snt);
      // Track already-invited user IDs
      const invitedIds = snt.map((i) => i.receiverProfile?.user?.id ?? i.receiver?.id ?? -1);
      setSentIds(new Set(invitedIds));
    } catch {
      toast.error("Failed to load invitations.");
    } finally {
      setLoadingInvs(false);
    }
  }, []);

  const loadMyProfile = useCallback(async () => {
    setLoadingProfile(true);
    try {
      const p = await getMyTeammateProfile();
      setMyProfile(p);
    } catch {
      // 404 is fine — no profile yet
    } finally {
      setLoadingProfile(false);
    }
  }, []);

  useEffect(() => {
    if (tab === "browse") loadProfiles();
    if (tab === "received" || tab === "sent") loadInvitations();
    if (tab === "profile") loadMyProfile();
  }, [tab, loadProfiles, loadInvitations, loadMyProfile]);

  // Re-fetch when filters change (browse tab)
  useEffect(() => {
    if (tab === "browse") loadProfiles();
  }, [filterRole, filterSkills, filterExp, filterAvail]);

  // ── Handlers ────────────────────────────────────────────────────────────────

  const handleInvite = async (receiverId: number) => {
    try {
      await sendInvitation(1, receiverId);
      setSentIds((prev) => new Set([...prev, receiverId]));
      toast.success("Invitation sent!");
    } catch {
      toast.error("Failed to send invitation.");
    }
  };

  const handleAccept = async (id: number) => {
    try {
      await acceptInvitation(id);
      setReceived((prev) => prev.map((i) => (i.id === id ? { ...i, status: "ACCEPTED" } : i)));
      toast.success("Invitation accepted!");
    } catch {
      toast.error("Failed to accept invitation.");
    }
  };

  const handleReject = async (id: number) => {
    try {
      await rejectInvitation(id);
      setReceived((prev) => prev.map((i) => (i.id === id ? { ...i, status: "REJECTED" } : i)));
      toast.success("Invitation declined.");
    } catch {
      toast.error("Failed to decline invitation.");
    }
  };

  const clearFilters = () => {
    setFilterRole("");
    setFilterSkills("");
    setFilterExp("");
    setFilterAvail("");
    setSearch("");
  };

  const hasFilters = filterRole || filterSkills || filterExp || filterAvail;

  // Client-side search on top of server filters
  const filteredProfiles = search.trim()
    ? profiles.filter(
        (p) =>
          p.user.name.toLowerCase().includes(search.toLowerCase()) ||
          p.preferredRole.toLowerCase().includes(search.toLowerCase()) ||
          p.skills.some((s) => s.toLowerCase().includes(search.toLowerCase())) ||
          p.techStack.some((t) => t.toLowerCase().includes(search.toLowerCase())),
      )
    : profiles;

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 pb-16">
      {/* Page Header */}
      <div className="bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-white/10 px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-50 flex items-center gap-2">
            <Users className="w-6 h-6 text-lime-500" />
            Find Teammates
          </h1>
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            Discover collaborators for your next hackathon, connect, and form your dream team.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-6">
        {/* Tab Bar */}
        <div className="flex items-center gap-1 border-b border-stone-200 dark:border-white/10 mb-6 overflow-x-auto no-scrollbar">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              id={`tab-${id}`}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                tab === id
                  ? "border-lime-500 text-lime-600 dark:text-lime-400"
                  : "border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
              {id === "received" && received.filter((i) => i.status === "PENDING").length > 0 && (
                <span className="ml-1 px-1.5 py-0.5 rounded-full bg-lime-500 text-white text-[10px] font-bold">
                  {received.filter((i) => i.status === "PENDING").length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── BROWSE TAB ── */}
        {tab === "browse" && (
          <div>
            {/* Search + Filter row */}
            <div className="flex gap-3 mb-4 flex-wrap">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  id="search-teammates"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name, role, skill…"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-lime-400/40 transition"
                />
                {search && (
                  <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <button
                id="toggle-filters"
                onClick={() => setShowFilters((v) => !v)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors ${
                  showFilters || hasFilters
                    ? "border-lime-400 text-lime-600 dark:text-lime-400 bg-lime-50 dark:bg-lime-900/20"
                    : "border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 bg-white dark:bg-stone-900"
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {hasFilters && (
                  <span className="ml-0.5 w-2 h-2 rounded-full bg-lime-500" />
                )}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showFilters ? "rotate-180" : ""}`} />
              </button>
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-rose-200 dark:border-rose-800 text-rose-500 text-sm font-medium hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  Clear
                </button>
              )}
            </div>

            {/* Filter Panel */}
            {showFilters && (
              <div className="mb-5 p-4 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1.5">Role</label>
                  <select
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-800 text-sm text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-lime-400/40"
                  >
                    <option value="">All roles</option>
                    {ROLE_OPTIONS.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1.5">Skills</label>
                  <select
                    value={filterSkills}
                    onChange={(e) => setFilterSkills(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-800 text-sm text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-lime-400/40"
                  >
                    <option value="">All skills</option>
                    {SKILLS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1.5">Experience</label>
                  <select
                    value={filterExp}
                    onChange={(e) => setFilterExp(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-800 text-sm text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-lime-400/40"
                  >
                    <option value="">Any level</option>
                    {EXP_OPTIONS.map((e) => <option key={e} value={e}>{e}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1.5">Availability</label>
                  <select
                    value={filterAvail}
                    onChange={(e) => setFilterAvail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-800 text-sm text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-lime-400/40"
                  >
                    <option value="">Any time</option>
                    {AVAIL_OPTIONS.map((a) => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
              </div>
            )}

            {/* Grid */}
            {loadingProfiles ? (
              <div className="flex flex-col items-center justify-center py-24 gap-3 text-stone-400">
                <Loader2 className="w-8 h-8 animate-spin text-lime-500" />
                <span className="text-sm">Finding teammates…</span>
              </div>
            ) : filteredProfiles.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 gap-3 text-stone-400">
                <Users className="w-10 h-10 text-stone-300" />
                <p className="text-sm font-medium">No profiles found.</p>
                {hasFilters && (
                  <button onClick={clearFilters} className="text-xs text-lime-600 hover:underline">
                    Clear filters
                  </button>
                )}
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProfiles.map((profile) => (
                  <TeammateCard
                    key={profile.id}
                    profile={profile}
                    onInvite={handleInvite}
                    alreadyInvited={sentIds.has(profile.user.id)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── RECEIVED INVITATIONS TAB ── */}
        {tab === "received" && (
          <div className="max-w-2xl">
            {loadingInvs ? (
              <div className="flex justify-center py-16">
                <Loader2 className="w-6 h-6 animate-spin text-lime-500" />
              </div>
            ) : received.length === 0 ? (
              <div className="flex flex-col items-center py-20 text-stone-400 gap-2">
                <Inbox className="w-10 h-10 text-stone-300" />
                <p className="text-sm">No invitations received yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {received.map((inv) => (
                  <InvitationCard
                    key={inv.id}
                    inv={inv}
                    mode="received"
                    onAccept={handleAccept}
                    onReject={handleReject}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── SENT INVITATIONS TAB ── */}
        {tab === "sent" && (
          <div className="max-w-2xl">
            {loadingInvs ? (
              <div className="flex justify-center py-16">
                <Loader2 className="w-6 h-6 animate-spin text-lime-500" />
              </div>
            ) : sent.length === 0 ? (
              <div className="flex flex-col items-center py-20 text-stone-400 gap-2">
                <Send className="w-10 h-10 text-stone-300" />
                <p className="text-sm">You haven't sent any invitations yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {sent.map((inv) => (
                  <InvitationCard key={inv.id} inv={inv} mode="sent" />
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── MY PROFILE TAB ── */}
        {tab === "profile" && (
          <div>
            {loadingProfile ? (
              <div className="flex justify-center py-16">
                <Loader2 className="w-6 h-6 animate-spin text-lime-500" />
              </div>
            ) : (
              <>
                {myProfile && (
                  <div className="mb-5 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    You already have a profile. Update it below.
                  </div>
                )}
                <ProfileForm existing={myProfile} onSaved={setMyProfile} />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}