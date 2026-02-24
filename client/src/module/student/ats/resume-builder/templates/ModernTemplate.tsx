import type { ResumeData } from "../types";

export default function ModernTemplate({ data }: { data: ResumeData }) {
  const { personalInfo, summary, experience, education, skills, projects, certifications } = data;

  return (
    <div className="w-full bg-white text-gray-800 font-sans text-[11px] leading-relaxed flex">
      {/* Left Sidebar */}
      <div className="w-[35%] bg-indigo-900 text-white p-6 shrink-0">
        <div className="mb-6">
          <h1 className="text-lg font-bold leading-tight">
            {personalInfo.fullName || "Your Name"}
          </h1>
        </div>

        {/* Contact */}
        <div className="mb-6">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 mb-2">
            Contact
          </h2>
          <div className="space-y-1.5 text-[10px] text-indigo-100">
            {personalInfo.email && <p>{personalInfo.email}</p>}
            {personalInfo.phone && <p>{personalInfo.phone}</p>}
            {personalInfo.location && <p>{personalInfo.location}</p>}
            {personalInfo.linkedIn && <p>{personalInfo.linkedIn}</p>}
            {personalInfo.portfolio && <p>{personalInfo.portfolio}</p>}
          </div>
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 mb-2">
              Skills
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, i) => (
                <span key={i} className="px-2 py-0.5 bg-indigo-800 rounded text-[9px] text-indigo-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 mb-2">
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-3">
                <p className="font-bold text-white text-[10px]">
                  {edu.degree}{edu.field ? ` in ${edu.field}` : ""}
                </p>
                <p className="text-indigo-200 text-[9px]">{edu.institution}</p>
                <p className="text-indigo-300 text-[9px]">
                  {edu.startDate} — {edu.endDate}
                  {edu.gpa ? ` | GPA: ${edu.gpa}` : ""}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 mb-2">
              Certifications
            </h2>
            {certifications.map((cert) => (
              <div key={cert.id} className="mb-2">
                <p className="font-bold text-white text-[10px]">{cert.name}</p>
                <p className="text-indigo-200 text-[9px]">
                  {cert.issuer}{cert.date ? ` — ${cert.date}` : ""}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6">
        {/* Summary */}
        {summary && (
          <div className="mb-5">
            <h2 className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2">
              About Me
            </h2>
            <p className="text-gray-600">{summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="mb-5">
            <h2 className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2">
              Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-3 pl-3 border-l-2 border-indigo-200">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-gray-900 text-[11px]">{exp.title}</h3>
                  <span className="text-[9px] text-gray-400 shrink-0 ml-2">
                    {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                <p className="text-indigo-600 text-[10px] font-medium">{exp.company}</p>
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

        {/* Projects */}
        {projects.length > 0 && (
          <div>
            <h2 className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2">
              Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="mb-3 pl-3 border-l-2 border-indigo-200">
                <div className="flex items-baseline gap-2">
                  <h3 className="font-bold text-gray-900 text-[11px]">{proj.name}</h3>
                  {proj.link && <span className="text-[9px] text-indigo-500">{proj.link}</span>}
                </div>
                {proj.techStack && (
                  <p className="text-[9px] text-indigo-500 font-medium">{proj.techStack}</p>
                )}
                {proj.description && <p className="text-gray-600 text-[10px] mt-0.5">{proj.description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
