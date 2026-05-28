function parseResponse(text) {
  console.log("[LatexChat] Raw AI length:", text.length, "| has <reply>:", text.includes("<reply>"), "| has <latex>:", text.includes("<latex>"), "| has </latex>:", text.includes("</latex>"));

  const hasXmlTags = text.includes("<reply>") || text.includes("<latex>");

  if (hasXmlTags) {
    const replyMatch = text.match(/<reply>([\s\S]*?)<\/reply>/);
    let replyText = replyMatch ? replyMatch[1].trim() : "";

    if (!replyMatch && text.includes("<reply>")) {
      const startIdx = text.indexOf("<reply>") + "<reply>".length;
      const endIdx = text.indexOf("<latex>");
      if (endIdx > startIdx) {
        replyText = text.slice(startIdx, endIdx).trim();
      } else {
        replyText = text.slice(startIdx).trim();
      }
    }

    const latexMatch = text.match(/<latex>([\s\S]*)<\/latex>/);
    let latexCode;

    if (latexMatch) {
      latexCode = latexMatch[1].trim();
    } else if (text.includes("<latex>")) {
      const idx = text.indexOf("<latex>") + "<latex>".length;
      const raw = text.slice(idx).trim();
      if (raw.length > 20) {
        latexCode = raw;
      }
    }

    if (latexCode?.startsWith("```")) {
      latexCode = latexCode.replace(/^```(?:latex)?\n?/, "").replace(/\n?```$/, "");
    }

    return {
      reply: replyText || "Here is your updated resume.",
      updatedLatex: latexCode || undefined,
    };
  }

  return { reply: "Fallback JSON used." }; // Mock fallback
}

// Case 1: Missing </reply>
console.log("Case 1:", parseResponse("<reply>Sure, here is the resume. <latex>\\documentclass{article} \\begin{document} hello \\end{document}</latex>"));

// Case 2: Truncated <latex>
console.log("Case 2:", parseResponse("<reply>Here is the fix</reply>\\n<latex>\\documentclass{article} \\begin{document} half written"));

// Case 3: Proper formatting
console.log("Case 3:", parseResponse("<reply>Perfect</reply><latex>\\documentclass{article} \\begin{document} nice \\end{document}</latex>"));
