import type { ResumeData } from "../types";

export default function ClassicTemplate({ data }: { data: ResumeData }) {
  const { personalInfo, summary, experience, education, skills, projects, certifications } = data;

  return (
    <div className="w-full bg-white text-gray-800 font-serif text-[11px] leading-relaxed p-8">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-3 mb-4">
        <h1 className="text-2xl font-bold text-gray-900 tracking-wide uppercase">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <div className="flex items-center justify-center gap-2 mt-1.5 text-[10px] text-gray-600 flex-wrap">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.email && personalInfo.phone && <span>|</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.phone && personalInfo.location && <span>|</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
        <div className="flex items-center justify-center gap-2 mt-0.5 text-[10px] text-gray-500 flex-wrap">
          {personalInfo.linkedIn && <span>{personalInfo.linkedIn}</span>}
          {personalInfo.linkedIn && personalInfo.portfolio && <span>|</span>}
          {personalInfo.portfolio && <span>{personalInfo.portfolio}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-4">
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
            Work Experience
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-gray-900">{exp.title}</h3>
                <span className="text-[10px] text-gray-500 shrink-0 ml-2">
                  {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                </span>
              </div>
              <p className="text-gray-600 italic text-[10px]">{exp.company}</p>
              {exp.description && (
                <ul className="mt-1 space-y-0.5 list-disc list-inside text-gray-700">
                  {exp.description.split("\n").filter(Boolean).map((line, i) => (
                    <li key={i}>{line.replace(/^[-•]\s*/, "")}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-2">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-gray-900">
                  {edu.degree}{edu.field ? ` in ${edu.field}` : ""}
                </h3>
                <span className="text-[10px] text-gray-500 shrink-0 ml-2">
                  {edu.startDate} — {edu.endDate}
                </span>
              </div>
              <p className="text-gray-600 text-[10px]">
                {edu.institution}{edu.gpa ? ` — GPA: ${edu.gpa}` : ""}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
            Skills
          </h2>
          <p className="text-gray-700">{skills.join(" • ")}</p>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
            Projects
          </h2>
          {projects.map((proj) => (
            <div key={proj.id} className="mb-2">
              <div className="flex items-baseline gap-2">
                <h3 className="font-bold text-gray-900">{proj.name}</h3>
                {proj.link && <span className="text-[10px] text-gray-500">{proj.link}</span>}
              </div>
              {proj.techStack && (
                <p className="text-[10px] text-gray-500 italic">{proj.techStack}</p>
              )}
              {proj.description && <p className="text-gray-700 mt-0.5">{proj.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div>
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
            Certifications
          </h2>
          {certifications.map((cert) => (
            <div key={cert.id} className="flex justify-between items-baseline mb-1">
              <span className="text-gray-700">
                <span className="font-bold">{cert.name}</span>
                {cert.issuer ? ` — ${cert.issuer}` : ""}
              </span>
              {cert.date && <span className="text-[10px] text-gray-500">{cert.date}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
