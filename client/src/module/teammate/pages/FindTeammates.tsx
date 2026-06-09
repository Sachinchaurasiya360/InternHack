import {
  useEffect,
  useState,
} from "react";

import TeammateCard from "../component/TeammateCard";

import {
  getTeammates,
  sendInvitation,
} from "../services/Teammate.api";

export default function FindTeammates() {
  const [profiles, setProfiles] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadProfiles();
  }, []);

  const loadProfiles =
    async () => {
      try {
        const data =
          await getTeammates();

        setProfiles(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  const handleInvite =
    async (receiverId: number) => {
      try {
        await sendInvitation(
          1,
          receiverId,
        );

        alert(
          "Invitation sent successfully",
        );
      } catch (error) {
        console.error(error);

        alert(
          "Failed to send invitation",
        );
      }
    };

  if (loading) {
    return (
      <div className="p-6">
        Loading teammates...
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">
        Find Teammates
      </h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {profiles.map((profile) => (
          <TeammateCard
            key={profile.id}
            profile={profile}
            onInvite={handleInvite}
          />
        ))}
      </div>
    </div>
  );
}