
import { useState } from "react"
import { motion } from "framer-motion"

const ALL_USER_FIELDS = ["id", "name", "email", "avatar", "bio", "createdAt", "role", "plan", "verified", "country", "phone", "updatedAt", "lastSeen", "postsCount", "followersCount", "followingCount", "website", "timezone", "language", "preferences"]
const ALL_POST_FIELDS = ["id", "title", "content", "excerpt", "tags", "imageUrl", "createdAt", "updatedAt", "views", "likes", "commentsCount", "authorId", "slug", "status", "readTime"]

export default function Anim6D() {
  const [numPosts, setNumPosts] = useState(3)
  const [numFields, setNumFields] = useState(3)

  // REST: fetches all fields of user + all fields of each post
  const restUserBytes = ALL_USER_FIELDS.length * 14      // rough bytes per field
  const restPostsBytes = ALL_POST_FIELDS.length * 18 * numPosts
  const restTotal = restUserBytes + restPostsBytes

  // GraphQL: fetches only name + last N posts' titles
  const gqlUserBytes = "name".length + 2
  const gqlPostBytes = "title".length * numPosts
  const gqlTotal = gqlUserBytes + gqlPostBytes + 40 // query overhead

  const savings = Math.round((1 - gqlTotal / restTotal) * 100)

  const neededUserFields = ALL_USER_FIELDS.slice(0, numFields)
  const neededPostFields = ["title"]

  return (
    <div className="bg-[#0F172A] p-5 flex flex-col gap-5 min-h-[460px]">

      {/* sliders */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] text-stone-400">Posts to fetch: <span className="text-lime-300 font-mono">{numPosts}</span></label>
          <input type="range" min={1} max={10} value={numPosts} onChange={e => setNumPosts(+e.target.value)} className="accent-lime-500" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] text-stone-400">User fields needed: <span className="text-lime-300 font-mono">{numFields}</span></label>
          <input type="range" min={1} max={ALL_USER_FIELDS.length} value={numFields} onChange={e => setNumFields(+e.target.value)} className="accent-lime-500" />
        </div>
      </div>

      {/* side by side comparison */}
      <div className="grid grid-cols-2 gap-4 flex-1">

        {/* REST */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-300 font-display">REST</span>
            <span className="text-[9px] text-stone-500">2 requests</span>
          </div>

          {/* Request 1 */}
          <div className="bg-[#1E293B] rounded-xl border border-blue-800/40 p-3 text-[9px] font-mono">
            <div className="text-blue-400 mb-1">GET /users/42</div>
            <div className="text-stone-500 mb-2">→ returns all {ALL_USER_FIELDS.length} fields:</div>
            <div className="flex flex-wrap gap-1">
              {ALL_USER_FIELDS.map(f => (
                <span key={f}
                  className="px-1 py-0.5 rounded text-[7px]"
                  style={{
                    backgroundColor: neededUserFields.includes(f) ? "#1E40AF33" : "#1E293B",
                    color: neededUserFields.includes(f) ? "#93C5FD" : "#334155",
                    border: neededUserFields.includes(f) ? "1px solid #1E40AF55" : "1px solid #1E293B",
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
            <div className="mt-2 text-stone-600">
              <span className="text-stone-500">{ALL_USER_FIELDS.length - numFields} fields</span> unused / over-fetched
            </div>
          </div>

          {/* Request 2 */}
          <div className="bg-[#1E293B] rounded-xl border border-blue-800/40 p-3 text-[9px] font-mono">
            <div className="text-blue-400 mb-1">GET /users/42/posts</div>
            <div className="text-stone-500 mb-2">→ returns {numPosts} posts × {ALL_POST_FIELDS.length} fields:</div>
            <div className="flex flex-wrap gap-1">
              {ALL_POST_FIELDS.map(f => (
                <span key={f}
                  className="px-1 py-0.5 rounded text-[7px]"
                  style={{
                    backgroundColor: neededPostFields.includes(f) ? "#1E40AF33" : "#1E293B",
                    color: neededPostFields.includes(f) ? "#93C5FD" : "#334155",
                    border: neededPostFields.includes(f) ? "1px solid #1E40AF55" : "1px solid #1E293B",
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
            <div className="mt-2 text-stone-600">
              <span className="text-stone-500">{(ALL_POST_FIELDS.length - 1) * numPosts} fields</span> per {numPosts} posts unused
            </div>
          </div>

          <motion.div
            animate={{ width: "100%" }}
            className="flex items-center justify-between px-3 py-2 bg-blue-900/20 border border-blue-700/30 rounded-xl"
          >
            <span className="text-[10px] text-blue-400">Total transferred</span>
            <span className="text-xs font-bold font-mono text-blue-300">~{restTotal} B</span>
          </motion.div>
        </div>

        {/* GraphQL */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-lime-300 font-display">GraphQL</span>
            <span className="text-[9px] text-stone-500">1 request</span>
          </div>

          {/* Single query */}
          <div className="bg-[#1E293B] rounded-xl border border-lime-800/40 p-3 text-[9px] font-mono flex-1">
            <div className="text-lime-400 mb-1">POST /graphql</div>
            <pre className="text-stone-300 text-[8px] leading-relaxed whitespace-pre-wrap">{`query {
  user(id: 42) {
${neededUserFields.map(f => `    ${f}`).join("\n")}
    posts(last: ${numPosts}) {
      title
    }
  }
}`}</pre>
            <div className="mt-2 border-t border-[#334155] pt-2 text-stone-500">
              Response: exactly <span className="text-lime-300">{numFields + numPosts}</span> fields
            </div>
          </div>

          <motion.div
            animate={{ width: "100%" }}
            className="flex items-center justify-between px-3 py-2 bg-lime-900/20 border border-lime-700/30 rounded-xl"
          >
            <span className="text-[10px] text-lime-400">Total transferred</span>
            <span className="text-xs font-bold font-mono text-lime-300">~{gqlTotal} B</span>
          </motion.div>
        </div>
      </div>

      {/* savings */}
      <div className="flex items-center gap-3 pt-2 border-t border-[#334155]">
        <span className="text-[10px] text-stone-500">GraphQL savings:</span>
        <div className="flex-1 h-3 bg-[#1E293B] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500 rounded-full"
            animate={{ width: `${Math.max(0, savings)}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className="text-xs font-bold font-mono text-emerald-300">{Math.max(0, savings)}% less data</span>
      </div>
    </div>
  )
}
