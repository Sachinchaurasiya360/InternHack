interface Props {
  studentName: string;
  guideName: string;
  completionDate: string;
}

export default function GuideCertificateCard({
  studentName,
  guideName,
  completionDate,
}: Props) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white text-stone-900 rounded-md border-2 border-stone-900 p-1.5 shadow-lg">
      <div className="relative rounded-md border border-lime-400 px-8 py-10 sm:px-12 sm:py-12 text-center">
        {/* Corner accents */}
        <span
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-lime-400"
        />
        <span
          aria-hidden
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-lime-400"
        />
        <span
          aria-hidden
          className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-lime-400"
        />
        <span
          aria-hidden
          className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-lime-400"
        />
        <span
          aria-hidden
          className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-lime-400"
        />
        <span
          aria-hidden
          className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-lime-400"
        />

        {/* Brand */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <img
            src="/logo.png"
            alt="InternHack"
            className="w-10 h-10 rounded-md object-contain"
          />
          <span className="text-xl font-bold tracking-tight text-stone-900">
            InternHack
          </span>
        </div>

        {/* Label */}
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
          <span className="h-1.5 w-1.5 bg-lime-400" />
          certificate of completion
        </div>

        <p className="text-sm text-stone-500 mb-2">Presented to</p>

        <p className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-6 wrap-break-word leading-tight">
          {studentName}
        </p>

        <div className="w-16 h-1 bg-lime-400 mx-auto mb-6" />

        <p className="text-sm text-stone-500 mb-1">
          for successfully completing the
        </p>
        <p className="relative inline-block text-xl font-bold text-stone-900 mb-6">
          <span className="relative z-10">{guideName}</span>
          <span
            aria-hidden
            className="absolute bottom-0.5 left-0 right-0 h-2 bg-lime-400 z-0"
          />
        </p>

        <p className="text-sm text-stone-500">{completionDate}</p>

        <p className="absolute bottom-6 left-0 right-0 text-xs font-mono uppercase tracking-widest text-stone-400">
          InternHack · Open Source Learning
        </p>
      </div>
    </div>
  );
}
