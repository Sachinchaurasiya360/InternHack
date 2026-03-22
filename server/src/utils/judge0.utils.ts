const JUDGE0_HOST = "judge0-ce.p.rapidapi.com";
const JUDGE0_URL = `https://${JUDGE0_HOST}/submissions?base64_encoded=true&wait=true`;

export const LANGUAGE_IDS: Record<string, number> = {
  python: 71,
  cpp: 54,
  java: 62,
};

function getRandomApiKey(): string {
  const keys = [
    process.env.JUDGE0_RAPIDAPI_KEY_1,
    process.env.JUDGE0_RAPIDAPI_KEY_2,
    process.env.JUDGE0_RAPIDAPI_KEY_3,
    process.env.JUDGE0_RAPIDAPI_KEY_4,
  ].filter(Boolean) as string[];
  if (keys.length === 0) throw new Error("No Judge0 API keys configured");
  return keys[Math.floor(Math.random() * keys.length)];
}

export interface Judge0Result {
  stdout: string | null;
  stderr: string | null;
  compile_output: string | null;
  status: { id: number; description: string };
  time: string | null;
  memory: number | null;
}

export async function executeCode(
  sourceCode: string,
  languageId: number,
  stdin: string,
  timeLimitSecs = 5,
  memoryLimitKb = 256000,
): Promise<Judge0Result> {
  const apiKey = getRandomApiKey();

  const response = await fetch(JUDGE0_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": JUDGE0_HOST,
    },
    body: JSON.stringify({
      language_id: languageId,
      source_code: Buffer.from(sourceCode).toString("base64"),
      stdin: Buffer.from(stdin).toString("base64"),
      cpu_time_limit: timeLimitSecs,
      memory_limit: memoryLimitKb,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Judge0 API error: ${response.status} - ${text}`);
  }

  const data = await response.json();
  return {
    stdout: data.stdout ? Buffer.from(data.stdout, "base64").toString() : null,
    stderr: data.stderr ? Buffer.from(data.stderr, "base64").toString() : null,
    compile_output: data.compile_output
      ? Buffer.from(data.compile_output, "base64").toString()
      : null,
    status: data.status,
    time: data.time,
    memory: data.memory,
  };
}
