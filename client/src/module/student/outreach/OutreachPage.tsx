import { useState } from "react";
import TemplateLibrary from "./TemplateLibrary.js";
import OutreachTracker from "./OutreachTracker.js";

export default function OutreachPage() {
  const [tab, setTab] = useState<"templates" | "tracker">("templates");

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">Outreach</h1>
      <p className="text-stone-500 mb-6">Templates and tracker for cold outreach to recruiters and alumni.</p>

      <div className="flex gap-4 mb-6 border-b">
        <button
          onClick={() => setTab("templates")}
          className={`pb-2 px-1 font-medium ${tab === "templates" ? "border-b-2 border-lime-600 text-lime-600" : "text-stone-500 dark:text-stone-400"}`}
        >
          Template Library
        </button>
        <button
          onClick={() => setTab("tracker")}
          className={`pb-2 px-1 font-medium ${tab === "tracker" ? "border-b-2 border-lime-600 text-lime-600" : "text-stone-500 dark:text-stone-400"}`}
        >
          Outreach Tracker
        </button>
      </div>

      {tab === "templates" ? <TemplateLibrary /> : <OutreachTracker />}
    </div>
  );
}