export default function About() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100/80 rounded-full text-indigo-600 font-medium mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></span>
            About Our Mission
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Meet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
              FinDev
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of finance professionals who believe that
            financial literacy shouldn't be locked behind complex jargon and
            intimidating textbooks. Our mission is to democratize finance
            education through engaging, practical, and accessible content.
          </p>
        </div>

        {/* Main Content Cards */}
        <div className="grid gap-8 lg:grid-cols-3 mb-20">
          <div className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🎬</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors">
              Video Content
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              YouTube-first, concept-focused videos that break down complex
              financial topics into digestible, engaging content that you can
              watch anytime, anywhere.
            </p>
            <div className="flex items-center text-indigo-600 font-medium group-hover:translate-x-2 transition-transform">
              Coming Soon <span className="ml-2">⏱</span>
            </div>
          </div>

          <div className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors">
              Case Studies
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Real-world company breakdowns, business model analyses, and
              financial deep-dives that help you understand how successful
              businesses actually work.
            </p>
            <div className="flex items-center text-indigo-600 font-medium group-hover:translate-x-2 transition-transform">
              Coming Soon <span className="ml-2">⏱</span>
            </div>
          </div>

          <div className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors">
              Structured Courses
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Comprehensive learning paths with hands-on projects, assignments,
              and real-world applications to take you from beginner to
              finance-savvy professional.
            </p>
            <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform">
              Coming Soon <span className="ml-2">⏱</span>
            </div>
          </div>
        </div>

        {/* Stats Section
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100">
            <div className="text-3xl lg:text-4xl font-bold text-indigo-600 mb-2">
              50+
            </div>
            <div className="text-gray-600 font-medium">Video Lessons</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100">
            <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">
              25+
            </div>
            <div className="text-gray-600 font-medium">Case Studies</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
              10K+
            </div>
            <div className="text-gray-600 font-medium">Students</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
            <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">
              4.8★
            </div>
            <div className="text-gray-600 font-medium">Rating</div>
          </div>
        </div> */}

        {/* Philosophy Section */}
        {/* <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl p-12 text-center backdrop-blur-sm border border-white/50">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Philosophy
            </span>
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Finance doesn't have to be boring or intimidating. We believe in
            learning through stories, real examples, and practical applications.
            Whether you're managing your personal finances, starting a business,
            or building your investment portfolio, we're here to guide you every
            step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white/80 rounded-full text-gray-700 font-medium shadow-sm">
              Simple Explanations
            </span>
            <span className="px-6 py-3 bg-white/80 rounded-full text-gray-700 font-medium shadow-sm">
              Real-World Focus
            </span>
            <span className="px-6 py-3 bg-white/80 rounded-full text-gray-700 font-medium shadow-sm">
              Practical Learning
            </span>
            <span className="px-6 py-3 bg-white/80 rounded-full text-gray-700 font-medium shadow-sm">
              Community Driven
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
