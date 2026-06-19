import { useState } from "react";
import TemplateLibrary from "./TemplateLibrary.js";
import OutreachTracker from "./OutreachTracker.js";

export default function OutreachPage() {
  const [tab, setTab] = useState<"templates" | "tracker">("templates");

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">Outreach</h1>
      <p className="text-gray-500 mb-6">Templates and tracker for cold outreach to recruiters and alumni.</p>

      <div className="flex gap-4 mb-6 border-b">
        <button
          onClick={() => setTab("templates")}
          className={`pb-2 px-1 font-medium ${tab === "templates" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}
        >
          Template Library
        </button>
        <button
          onClick={() => setTab("tracker")}
          className={`pb-2 px-1 font-medium ${tab === "tracker" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}
        >
          Outreach Tracker
        </button>
      </div>

      {tab === "templates" ? <TemplateLibrary /> : <OutreachTracker />}
    </div>
  );
}