interface University {
  name: string;
  country: string;
  "state-province": string | null;
}

const DATA_URL =
  "https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json";

let cache: University[] | null = null;
let loadingPromise: Promise<University[]> | null = null;

async function loadData(): Promise<University[]> {
  if (cache) return cache;
  if (loadingPromise) return loadingPromise;

  loadingPromise = fetch(DATA_URL)
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to fetch university data: ${res.status}`);
      return res.json() as Promise<University[]>;
    })
    .then((data) => {
      cache = data;
      loadingPromise = null;
      return data;
    })
    .catch((err) => {
      loadingPromise = null;
      throw err;
    });

  return loadingPromise;
}

export async function searchUniversities(query: string, limit = 8): Promise<University[]> {
  const data = await loadData();
  const q = query.toLowerCase();

  const seen = new Set<string>();
  const results: University[] = [];

  for (const u of data) {
    const key = u.name.toLowerCase();
    if (!key.includes(q)) continue;
    if (seen.has(key)) continue;
    seen.add(key);
    results.push({ name: u.name, country: u.country, "state-province": u["state-province"] });
    if (results.length >= limit) break;
  }

  return results;
}
