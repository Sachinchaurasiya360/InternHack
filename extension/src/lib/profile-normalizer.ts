import type { ExtensionProfile, NormalizedProfile } from "./types";

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function splitName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || "",
    lastName: parts.slice(1).join(" "),
  };
}

export function normalizeProfile(profile: ExtensionProfile): NormalizedProfile {
  const legalName = profile.applicationProfile?.legalName || profile.user.name;
  const preferred = profile.applicationProfile?.preferredName || legalName;
  const name = splitName(preferred);
  const customFields = Object.fromEntries(
    Object.entries(profile.applicationProfile?.customFields ?? {})
      .map(([key, value]) => [key, asString(value)])
      .filter(([, value]) => value),
  );

  return {
    firstName: name.firstName,
    lastName: name.lastName,
    fullName: preferred,
    email: profile.user.email,
    phone: profile.user.contactNo || "",
    location: profile.user.location || "",
    linkedinUrl: profile.user.linkedinUrl || "",
    githubUrl: profile.user.githubUrl || "",
    portfolioUrl: profile.user.portfolioUrl || "",
    leetcodeUrl: profile.user.leetcodeUrl || "",
    school: profile.user.college || "",
    graduationYear: profile.user.graduationYear ? String(profile.user.graduationYear) : "",
    skills: profile.user.skills.join(", "),
    resumeUrl: profile.user.resumes[0] || "",
    bio: profile.user.bio || "",
    customFields,
  };
}

