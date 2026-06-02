import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, GitPullRequest } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";

type Contributor = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
};

export default function ContributorsPage() {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [allContributors, setAllContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        let page = 1;
        let allData: Contributor[] = [];

        while (true) {
          const response = await fetch(
            `https://api.github.com/repos/Sachinchaurasiya360/InternHack/contributors?per_page=100&page=${page}`
          );

          if (!response.ok) break;

          const data: Contributor[] = await response.json();

          if (!Array.isArray(data) || data.length === 0) break;

          allData = [...allData, ...data];

          if (data.length < 100) break;
          page++;
        }

        setAllContributors(allData);

        // Only show contributors with more than 5 contributions
        const filteredContributors = allData.filter(
          (contributor) => contributor.contributions > 5
        );

        setContributors(filteredContributors);
      } catch (error) {
        console.error("Failed to fetch contributors", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  const totalContributions = useMemo(() => {
    return allContributors.reduce(
      (acc, curr) => acc + curr.contributions,
      0
    );
  }, [allContributors]);

  return (
    <>
      <SEO
        title="Contributors"
        description="Meet the open-source contributors who built InternHack."
      />
      <Navbar />

      <section className="min-h-screen bg-white text-stone-900 transition-colors duration-300 dark:bg-stone-950 dark:text-stone-50">
        <div className="max-w-7xl mx-auto px-6 py-24">

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-20"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
              open source community
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-none">
              Built by contributors.
              <span className="block text-stone-500 dark:text-stone-400 mt-2">
                Powered by community.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed max-w-2xl text-stone-600 dark:text-stone-400">
              InternHack is shaped by developers, students, and open-source
              contributors from around the world.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-stone-500 dark:text-stone-400">
              <Github className="w-4 h-4" />
              Live GitHub contributor data
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">

            {/* Contributors */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-stone-200 bg-stone-50/80 backdrop-blur-sm p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]"
            >
              <p className="text-sm text-stone-500 dark:text-stone-400 mb-2">
                Contributors
              </p>

              <h2 className="text-4xl font-bold">
                {allContributors.length}+
              </h2>
            </motion.div>

            {/* Contributions */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-stone-200 bg-stone-50/80 backdrop-blur-sm p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="flex items-center gap-2 mb-2">
                <GitPullRequest className="w-4 h-4 text-lime-500" />

                <p className="text-sm text-stone-500 dark:text-stone-400">
                  Total Contributions
                </p>
              </div>

              <h2 className="text-4xl font-bold">
                {totalContributions}+
              </h2>
            </motion.div>

            {/* Repo */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-stone-200 bg-stone-50/80 backdrop-blur-sm p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]"
            >
              <p className="text-sm text-stone-500 dark:text-stone-400 mb-3">
                Repository
              </p>

              <a
                href="https://github.com/Sachinchaurasiya360/InternHack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lime-600 hover:text-lime-500 dark:text-lime-400 dark:hover:text-lime-300 transition-colors duration-300"
              >
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Loading Skeleton / Error / Grid */}
          {error ? (
            <p className="text-center text-stone-500 dark:text-stone-400 py-20">
              Could not load contributors. Please try again later.
            </p>
          ) : loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, idx) => (
                <div
                  key={idx}
                  className="h-72 rounded-2xl border border-stone-200 bg-stone-100 animate-pulse dark:border-white/10 dark:bg-white/[0.03]"
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {contributors.map((contributor) => (
                <motion.a
                  key={contributor.id}
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.45,
                      },
                    },
                  }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-stone-50/80 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] no-underline"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-lime-400/10 via-transparent to-transparent" />

                  <div className="relative z-10">
                    <img
                      src={contributor.avatar_url}
                      alt={contributor.login}
                      className="w-20 h-20 rounded-full border border-stone-200 dark:border-white/10 object-cover"
                    />

                    <div className="mt-6">
                      <h3 className="text-xl font-semibold">
                        {contributor.login}
                      </h3>

                      <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
                        {contributor.contributions} contributions
                      </p>
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-lime-600 dark:text-lime-400">
                      GitHub Profile
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
