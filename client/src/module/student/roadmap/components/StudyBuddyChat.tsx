import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, MessageCircle, UserCircle2, Sparkles } from "lucide-react";
import { useSocketStore } from "../../../../lib/socket.store";
import { useAuthStore } from "../../../../lib/auth.store";

export function StudyBuddyChat() {
  const { messages, sendMessage, buddyOnline, activeRoom } = useSocketStore();
  const { user } = useAuthStore();
  
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  if (!activeRoom) return null;

  const unreadCount = isOpen ? 0 : messages.filter(m => m.senderId !== user?.id).length;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-lime-400 hover:bg-lime-500 text-stone-900 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ maxHeight: "calc(100vh - 120px)", height: "500px" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-stone-50 dark:bg-stone-950/50 border-b border-stone-200 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-stone-500">
                    <UserCircle2 className="w-6 h-6" />
                  </div>
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-stone-900 ${buddyOnline ? "bg-green-500" : "bg-stone-400"}`} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50">Study Buddy</h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1">
                    {buddyOnline ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 rounded-full hover:bg-stone-200 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="text-center p-4 bg-lime-50 dark:bg-lime-400/10 rounded-xl border border-lime-100 dark:border-lime-400/20">
                <Sparkles className="w-6 h-6 text-lime-600 dark:text-lime-400 mx-auto mb-2" />
                <p className="text-xs text-lime-800 dark:text-lime-300 font-medium leading-relaxed">
                  You are now connected with your Study Buddy. Say hi!
                </p>
              </div>

              {messages.map((msg, i) => {
                const isMe = msg.senderId === user?.id;
                const showName = !isMe && (i === 0 || messages[i - 1].senderId !== msg.senderId);

                return (
                  <div key={i} className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
                    {showName && (
                      <span className="text-[10px] text-stone-400 mb-1 ml-1">{msg.senderName}</span>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                        isMe
                          ? "bg-lime-400 text-stone-900 rounded-br-none"
                          : "bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-100 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-white/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (draft.trim()) {
                    sendMessage(draft.trim());
                    setDraft("");
                  }
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-stone-100 dark:bg-stone-800 border-none rounded-full px-4 py-2.5 text-sm focus:ring-2 focus:ring-lime-400 text-stone-900 dark:text-stone-50 placeholder-stone-400"
                />
                <button
                  type="submit"
                  disabled={!draft.trim() || !buddyOnline}
                  className="p-2.5 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full hover:bg-stone-800 dark:hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4 translate-x-[-1px] translate-y-[1px]" />
                </button>
              </form>
              {!buddyOnline && (
                <p className="text-[10px] text-center text-stone-400 mt-2">
                  Buddy is currently offline. They will receive your messages when they return.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
