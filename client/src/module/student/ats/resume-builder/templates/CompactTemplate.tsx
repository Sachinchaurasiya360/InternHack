import type { ResumeData } from "../types";

export default function CompactTemplate({ data }: { data: ResumeData }) {
  const { personalInfo, summary, experience, education, skills, projects, certifications } = data;

  return (
    <div className="w-full bg-white text-gray-800 font-sans text-[10px] leading-snug p-6">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-gray-200 pb-2 mb-3">
        <div>
          <h1 className="text-lg font-bold text-gray-900">
            {personalInfo.fullName || "Your Name"}
          </h1>
          {summary && <p className="text-gray-500 text-[9px] mt-1 max-w-[75%]">{summary}</p>}
        </div>
        <div className="text-right text-[9px] text-gray-500 shrink-0 space-y-0.5">
          {personalInfo.email && <p>{personalInfo.email}</p>}
          {personalInfo.phone && <p>{personalInfo.phone}</p>}
          {personalInfo.location && <p>{personalInfo.location}</p>}
          {personalInfo.linkedIn && <p>{personalInfo.linkedIn}</p>}
          {personalInfo.portfolio && <p>{personalInfo.portfolio}</p>}
        </div>
      </div>

      {/* Skills - compact inline */}
      {skills.length > 0 && (
        <div className="mb-3">
          <h2 className="text-[9px] font-bold text-gray-900 uppercase tracking-wider mb-1">Skills</h2>
          <p className="text-gray-600 text-[9px]">{skills.join(" · ")}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-3">
          <h2 className="text-[9px] font-bold text-gray-900 uppercase tracking-wider mb-1.5">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-2">
              <div className="flex justify-between items-baseline">
                <span>
                  <span className="font-bold text-gray-900">{exp.title}</span>
                  <span className="text-gray-400 mx-1">@</span>
                  <span className="text-gray-600">{exp.company}</span>
                </span>
                <span className="text-[8px] text-gray-400 shrink-0 ml-2">
                  {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                </span>
              </div>
              {exp.description && (
                <ul className="mt-0.5 space-y-0 list-disc list-inside text-gray-600 text-[9px]">
                  {exp.description.split("\n").filter(Boolean).slice(0, 3).map((line, i) => (
                    <li key={i}>{line.replace(/^[-•]\s*/, "")}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        {/* Education */}
        {education.length > 0 && (
          <div className="mb-2">
            <h2 className="text-[9px] font-bold text-gray-900 uppercase tracking-wider mb-1.5">Education</h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-1.5">
                <p className="font-bold text-gray-900 text-[10px]">
                  {edu.degree}{edu.field ? `, ${edu.field}` : ""}
                </p>
                <p className="text-gray-500 text-[9px]">
                  {edu.institution} | {edu.endDate}
                  {edu.gpa ? ` | GPA: ${edu.gpa}` : ""}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="mb-2">
            <h2 className="text-[9px] font-bold text-gray-900 uppercase tracking-wider mb-1.5">Certifications</h2>
            {certifications.map((cert) => (
              <div key={cert.id} className="mb-1">
                <p className="text-gray-700 text-[9px]">
                  <span className="font-bold">{cert.name}</span>
                  {cert.issuer ? ` — ${cert.issuer}` : ""}
                  {cert.date ? ` (${cert.date})` : ""}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Projects */}
      {projects.length > 0 && (
        <div>
          <h2 className="text-[9px] font-bold text-gray-900 uppercase tracking-wider mb-1.5">Projects</h2>
          <div className="grid grid-cols-2 gap-2">
            {projects.map((proj) => (
              <div key={proj.id} className="mb-1">
                <div className="flex items-baseline gap-1">
                  <span className="font-bold text-gray-900">{proj.name}</span>
                  {proj.link && <span className="text-[8px] text-gray-400">{proj.link}</span>}
                </div>
                {proj.techStack && <p className="text-[8px] text-gray-400">{proj.techStack}</p>}
                {proj.description && <p className="text-gray-600 text-[9px]">{proj.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
