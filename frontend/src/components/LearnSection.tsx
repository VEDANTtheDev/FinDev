"use client";

import { useState } from "react";

type ContentType = "Case Study" | "Article" | "Quiz";

type Item = {
  id: number;
  title: string;
  type: ContentType;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  href?: string;
  emoji: string;
};

const content: Item[] = [
  {
    id: 1,
    title: "Tesla: Moat, Margins & Myths",
    type: "Case Study",
    description:
      "Is Tesla a car company or a tech company? We break down its revenue streams, gross margins, and whether its valuation makes any sense.",
    duration: "12 min read",
    level: "Intermediate",
    emoji: "⚡",
  },
  {
    id: 2,
    title: "Why Startups Burn Cash",
    type: "Article",
    description:
      "Burning cash isn't reckless — sometimes it's the strategy. Learn how startups think about CAC, LTV, and the race to capture market share.",
    duration: "7 min read",
    level: "Beginner",
    emoji: "🔥",
  },
  {
    id: 3,
    title: "Zomato vs Swiggy: Unit Economics",
    type: "Case Study",
    description:
      "Two companies, one market. We compare delivery costs, take rates, and whether either business can ever turn sustainably profitable.",
    duration: "10 min read",
    level: "Advanced",
    emoji: "🍔",
  },
  {
    id: 4,
    title: "Mutual Funds vs ETFs",
    type: "Article",
    description:
      "Both track markets, but they work very differently. This article cuts through the noise on expense ratios, tax efficiency, and which suits you.",
    duration: "6 min read",
    level: "Beginner",
    emoji: "💼",
  },
  {
    id: 5,
    title: "How to Read a Balance Sheet",
    type: "Quiz",
    description:
      "Think you understand assets, liabilities, and equity? Test yourself with 10 questions based on real Indian company filings.",
    duration: "10 questions",
    level: "Intermediate",
    emoji: "📊",
  },
  {
    id: 6,
    title: "Reliance Industries: Empire Analysis",
    type: "Case Study",
    description:
      "From petrochemicals to Jio to retail — how Mukesh Ambani built a conglomerate that touches every Indian's daily life. A full business breakdown.",
    duration: "15 min read",
    level: "Advanced",
    emoji: "🌐",
  },
];

const TYPE_COLORS: Record<
  ContentType,
  { bg: string; text: string; dot: string; activeBorder: string }
> = {
  "Case Study": {
    bg: "bg-amber-50",
    text: "text-amber-600",
    dot: "bg-amber-400",
    activeBorder: "border-amber-300",
  },
  Article: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    dot: "bg-emerald-400",
    activeBorder: "border-emerald-300",
  },
  Quiz: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    dot: "bg-violet-400",
    activeBorder: "border-violet-300",
  },
};

const LEVEL_COLORS: Record<string, string> = {
  Beginner: "text-emerald-600 bg-emerald-50 border-emerald-200",
  Intermediate: "text-amber-600 bg-amber-50 border-amber-200",
  Advanced: "text-red-600 bg-red-50 border-red-200",
};

const ALL_TYPES: ContentType[] = ["Case Study", "Article", "Quiz"];

const TYPE_ICONS: Record<ContentType, string> = {
  "Case Study": "📋",
  Article: "📰",
  Quiz: "❓",
};

export default function LearnSection() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<ContentType | "All">("All");

  const filtered = content.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = activeFilter === "All" || item.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* ── Header ── */}
        <div className="mb-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 rounded-full text-indigo-600 text-xs font-semibold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
            Knowledge Hub
          </div>

          {/* Title row with stats */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Learn{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                  Finance
                </span>
              </h2>
              <p className="mt-3 text-gray-500 text-base max-w-lg leading-relaxed">
                Case studies, articles & quizzes — all explained in plain,
                student-friendly language.
              </p>
            </div>

            {/* Stats strip */}
            <div className="flex items-center gap-5 shrink-0 bg-white border border-gray-100 rounded-2xl px-6 py-4 shadow-sm self-start">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">6</p>
                <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-wide">
                  Resources
                </p>
              </div>
              <div className="w-px h-10 bg-gray-100" />
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-wide">
                  Formats
                </p>
              </div>
              <div className="w-px h-10 bg-gray-100" />
              <div className="text-center">
                <p className="text-2xl font-bold text-indigo-600">Free</p>
                <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-wide">
                  Always
                </p>
              </div>
            </div>
          </div>

          {/* ── Search + Filter toolbar ── */}
          <div className="flex flex-col sm:flex-row items-stretch gap-2 bg-white border border-gray-200 rounded-2xl p-2 shadow-sm">
            {/* Search input */}
            <div className="relative flex-1 min-w-0">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none select-none">
                🔍
              </span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search topics, companies, concepts..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:bg-white transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-500 text-xs flex items-center justify-center transition"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Vertical divider */}
            <div className="hidden sm:block w-px bg-gray-100 my-1" />

            {/* Filter tabs */}
            <div className="flex items-center gap-1 flex-wrap">
              <button
                onClick={() => setActiveFilter("All")}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeFilter === "All"
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                }`}
              >
                All
                <span
                  className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                    activeFilter === "All"
                      ? "bg-indigo-500 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {content.length}
                </span>
              </button>

              {ALL_TYPES.map((type) => {
                const count = content.filter((c) => c.type === type).length;
                const colors = TYPE_COLORS[type];
                const isActive = activeFilter === type;
                return (
                  <button
                    key={type}
                    onClick={() => setActiveFilter(type)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? `${colors.bg} ${colors.text} border ${colors.activeBorder}`
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                    }`}
                  >
                    <span className="text-xs">{TYPE_ICONS[type]}</span>
                    {type}
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                        isActive
                          ? `${colors.bg} ${colors.text}`
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results count */}
        {(search || activeFilter !== "All") && (
          <p className="text-sm text-gray-400 mb-5">
            Showing{" "}
            <span className="font-semibold text-gray-700">
              {filtered.length}
            </span>{" "}
            result{filtered.length !== 1 ? "s" : ""}
            {search && (
              <>
                {" "}
                for "
                <span className="text-indigo-600 font-medium">{search}</span>"
              </>
            )}
          </p>
        )}

        {/* ── Cards Grid ── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item) => {
              const colors = TYPE_COLORS[item.type];
              return (
                <a
                  key={item.id}
                  href={item.href || "#"}
                  className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Top accent line */}
                  <div className={`h-1 w-full ${colors.dot}`} />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Emoji + Type badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl border border-gray-100">
                        {item.emoji}
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}
                        />
                        {item.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-indigo-700 transition-colors leading-snug mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                      {item.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <span className="text-gray-400 text-xs flex items-center gap-1">
                        ⏱ {item.duration}
                      </span>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full border ${LEVEL_COLORS[item.level]}`}
                      >
                        {item.level}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              No results found
            </h3>
            <p className="text-gray-400 text-sm">
              Try a different keyword or clear the filter.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveFilter("All");
              }}
              className="mt-4 px-5 py-2 bg-indigo-600 text-white text-sm rounded-xl hover:bg-indigo-700 transition"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
