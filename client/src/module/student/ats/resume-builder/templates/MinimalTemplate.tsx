import type { ResumeData } from "../types";

export default function MinimalTemplate({ data }: { data: ResumeData }) {
  const { personalInfo, summary, experience, education, skills, projects, certifications } = data;

  return (
    <div className="w-full bg-white text-gray-800 font-sans text-[11px] leading-relaxed p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-light text-gray-900 tracking-tight">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <div className="flex items-center gap-3 mt-2 text-[10px] text-gray-400 flex-wrap">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedIn && <span>{personalInfo.linkedIn}</span>}
          {personalInfo.portfolio && <span>{personalInfo.portfolio}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-6">
          <p className="text-gray-500 leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em] mb-3">
            Experience
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-medium text-gray-900">{exp.title}</span>
                  <span className="text-gray-400 mx-1.5">at</span>
                  <span className="text-gray-600">{exp.company}</span>
                </div>
                <span className="text-[10px] text-gray-400 shrink-0 ml-2">
                  {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                </span>
              </div>
              {exp.description && (
                <ul className="mt-1.5 space-y-0.5 text-gray-600">
                  {exp.description.split("\n").filter(Boolean).map((line, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-gray-300 shrink-0">—</span>
                      <span>{line.replace(/^[-•]\s*/, "")}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em] mb-3">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-2 flex justify-between items-baseline">
              <div>
                <span className="font-medium text-gray-900">
                  {edu.degree}{edu.field ? `, ${edu.field}` : ""}
                </span>
                <span className="text-gray-400 mx-1.5">—</span>
                <span className="text-gray-600">{edu.institution}</span>
                {edu.gpa && <span className="text-gray-400 text-[10px] ml-1.5">GPA: {edu.gpa}</span>}
              </div>
              <span className="text-[10px] text-gray-400 shrink-0 ml-2">{edu.endDate}</span>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em] mb-3">
            Skills
          </h2>
          <p className="text-gray-600">{skills.join(", ")}</p>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em] mb-3">
            Projects
          </h2>
          {projects.map((proj) => (
            <div key={proj.id} className="mb-3">
              <div className="flex items-baseline gap-2">
                <span className="font-medium text-gray-900">{proj.name}</span>
                {proj.techStack && <span className="text-[9px] text-gray-400">{proj.techStack}</span>}
              </div>
              {proj.description && <p className="text-gray-600 mt-0.5">{proj.description}</p>}
              {proj.link && <p className="text-[9px] text-gray-400 mt-0.5">{proj.link}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div>
          <h2 className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em] mb-3">
            Certifications
          </h2>
          {certifications.map((cert) => (
            <div key={cert.id} className="flex justify-between items-baseline mb-1">
              <span className="text-gray-700">
                {cert.name}{cert.issuer ? ` — ${cert.issuer}` : ""}
              </span>
              {cert.date && <span className="text-[10px] text-gray-400">{cert.date}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
