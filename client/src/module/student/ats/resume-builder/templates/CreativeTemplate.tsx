import type { ResumeData } from "../types";

export default function CreativeTemplate({ data }: { data: ResumeData }) {
  const { personalInfo, summary, experience, education, skills, projects, certifications } = data;

  return (
    <div className="w-full bg-white text-gray-800 font-sans text-[11px] leading-relaxed flex">
      {/* Left Accent Strip */}
      <div className="w-[30%] bg-gradient-to-b from-violet-600 to-indigo-700 text-white p-5 shrink-0">
        {/* Avatar placeholder */}
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto">
          {personalInfo.fullName ? personalInfo.fullName.charAt(0).toUpperCase() : "?"}
        </div>

        {/* Contact */}
        <div className="mb-5">
          <h2 className="text-[9px] font-bold uppercase tracking-widest text-violet-200 mb-2">Contact</h2>
          <div className="space-y-1.5 text-[10px] text-violet-100">
            {personalInfo.email && <p>{personalInfo.email}</p>}
            {personalInfo.phone && <p>{personalInfo.phone}</p>}
            {personalInfo.location && <p>{personalInfo.location}</p>}
            {personalInfo.linkedIn && <p>{personalInfo.linkedIn}</p>}
            {personalInfo.portfolio && <p>{personalInfo.portfolio}</p>}
          </div>
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-5">
            <h2 className="text-[9px] font-bold uppercase tracking-widest text-violet-200 mb-2">Skills</h2>
            <div className="space-y-1.5">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-300 shrink-0" />
                  <span className="text-[10px] text-violet-100">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div>
            <h2 className="text-[9px] font-bold uppercase tracking-widest text-violet-200 mb-2">Certifications</h2>
            {certifications.map((cert) => (
              <div key={cert.id} className="mb-2">
                <p className="font-bold text-white text-[10px]">{cert.name}</p>
                <p className="text-violet-200 text-[9px]">
                  {cert.issuer}{cert.date ? ` | ${cert.date}` : ""}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6">
        {/* Name */}
        <div className="mb-5">
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">
            {personalInfo.fullName || "Your Name"}
          </h1>
          {summary && <p className="text-gray-500 mt-2 leading-relaxed">{summary}</p>}
        </div>

        {/* Experience */}
        {experience.length > 0 && (
          <div className="mb-5">
            <h2 className="text-xs font-bold text-violet-700 uppercase tracking-wider mb-3 pb-1 border-b border-violet-100">
              Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-3 relative pl-4">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-violet-500" />
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-gray-900">{exp.title}</h3>
                  <span className="text-[9px] text-violet-500 font-medium shrink-0 ml-2">
                    {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                <p className="text-violet-600 text-[10px] font-medium">{exp.company}</p>
                {exp.description && (
                  <ul className="mt-1 space-y-0.5 text-gray-600 text-[10px]">
                    {exp.description.split("\n").filter(Boolean).map((line, i) => (
                      <li key={i} className="flex gap-1.5">
                        <span className="text-violet-400 shrink-0">-</span>
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
          <div className="mb-5">
            <h2 className="text-xs font-bold text-violet-700 uppercase tracking-wider mb-3 pb-1 border-b border-violet-100">
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-2 pl-4 relative">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-violet-500" />
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-gray-900">
                    {edu.degree}{edu.field ? ` in ${edu.field}` : ""}
                  </h3>
                  <span className="text-[9px] text-violet-500 shrink-0 ml-2">{edu.endDate}</span>
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
          <div>
            <h2 className="text-xs font-bold text-violet-700 uppercase tracking-wider mb-3 pb-1 border-b border-violet-100">
              Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="mb-3 pl-4 relative">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-violet-500" />
                <div className="flex items-baseline gap-2">
                  <h3 className="font-bold text-gray-900">{proj.name}</h3>
                  {proj.link && <span className="text-[9px] text-violet-500">{proj.link}</span>}
                </div>
                {proj.techStack && <p className="text-[9px] text-violet-500 font-medium">{proj.techStack}</p>}
                {proj.description && <p className="text-gray-600 text-[10px] mt-0.5">{proj.description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
