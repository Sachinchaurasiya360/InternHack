type Props = {
  profile: {
    id: number;
    skills: string[];
    preferredRole: string;
    techStack: string[];
    availability: string;
    experienceLevel: string;
    user: {
      id: number;
      name: string;
    };
  };

  onInvite: (
    receiverId: number,
  ) => void;
};

export default function TeammateCard({
  profile,
  onInvite,
}: Props) {
  return (
    <div className="rounded-xl border p-4 shadow-sm">
      <h3 className="text-lg font-semibold">
        {profile.user.name}
      </h3>

      <p className="mt-2 text-sm">
        Role: {profile.preferredRole}
      </p>

      <p className="text-sm">
        Experience:
        {" "}
        {profile.experienceLevel}
      </p>

      <p className="text-sm">
        Availability:
        {" "}
        {profile.availability}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <span
            key={skill}
            className="rounded bg-blue-100 px-2 py-1 text-xs"
          >
            {skill}
          </span>
        ))}
      </div>

      <button
        onClick={() =>
          onInvite(profile.user.id)
        }
        className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
      >
        Send Invitation
      </button>
    </div>
  );
}