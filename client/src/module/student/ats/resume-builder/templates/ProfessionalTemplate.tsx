import type { ResumeData } from "../types";

export default function ProfessionalTemplate({ data }: { data: ResumeData }) {
  const { personalInfo, summary, experience, education, skills, projects, certifications } = data;

  return (
    <div className="w-full bg-white text-gray-800 font-sans text-[11px] leading-relaxed">
      {/* Dark Header */}
      <div className="bg-gray-900 text-white px-8 py-5">
        <h1 className="text-xl font-bold tracking-wide">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <div className="flex items-center gap-3 mt-1.5 text-[10px] text-gray-300 flex-wrap">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedIn && <span>{personalInfo.linkedIn}</span>}
          {personalInfo.portfolio && <span>{personalInfo.portfolio}</span>}
        </div>
      </div>

      <div className="px-8 py-6">
        {/* Summary */}
        {summary && (
          <div className="mb-5">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1 h-4 bg-gray-900 rounded-full inline-block" />
              Professional Summary
            </h2>
            <p className="text-gray-600 pl-3">{summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="mb-5">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1 h-4 bg-gray-900 rounded-full inline-block" />
              Professional Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-3 pl-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-gray-900">{exp.title}</h3>
                  <span className="text-[9px] text-gray-400 shrink-0 ml-2 bg-gray-100 px-2 py-0.5 rounded">
                    {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                <p className="text-gray-500 text-[10px] font-medium">{exp.company}</p>
                {exp.description && (
                  <ul className="mt-1 space-y-0.5 list-disc list-inside text-gray-600 text-[10px]">
                    {exp.description.split("\n").filter(Boolean).map((line, i) => (
                      <li key={i}>{line.replace(/^[-•]\s*/, "")}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-5">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1 h-4 bg-gray-900 rounded-full inline-block" />
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-1.5 pl-3">
              {skills.map((skill, i) => (
                <span key={i} className="px-2.5 py-0.5 bg-gray-100 text-gray-700 rounded text-[10px] font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="mb-5">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1 h-4 bg-gray-900 rounded-full inline-block" />
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-2 pl-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-gray-900">
                    {edu.degree}{edu.field ? ` in ${edu.field}` : ""}
                  </h3>
                  <span className="text-[9px] text-gray-400 shrink-0 ml-2 bg-gray-100 px-2 py-0.5 rounded">
                    {edu.startDate} — {edu.endDate}
                  </span>
                </div>
                <p className="text-gray-500 text-[10px]">
                  {edu.institution}{edu.gpa ? ` | GPA: ${edu.gpa}` : ""}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div className="mb-5">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1 h-4 bg-gray-900 rounded-full inline-block" />
              Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="mb-2 pl-3">
                <div className="flex items-baseline gap-2">
                  <h3 className="font-bold text-gray-900">{proj.name}</h3>
                  {proj.link && <span className="text-[9px] text-gray-400">{proj.link}</span>}
                </div>
                {proj.techStack && (
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {proj.techStack.split(",").map((t, i) => (
                      <span key={i} className="px-1.5 py-0 bg-gray-50 text-gray-500 rounded text-[9px]">
                        {t.trim()}
                      </span>
                    ))}
                  </div>
                )}
                {proj.description && <p className="text-gray-600 text-[10px] mt-0.5">{proj.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div>
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1 h-4 bg-gray-900 rounded-full inline-block" />
              Certifications
            </h2>
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between items-baseline mb-1 pl-3">
                <span className="text-gray-700">
                  <span className="font-bold">{cert.name}</span>
                  {cert.issuer ? ` — ${cert.issuer}` : ""}
                </span>
                {cert.date && <span className="text-[10px] text-gray-400">{cert.date}</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
