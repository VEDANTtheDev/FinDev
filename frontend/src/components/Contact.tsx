export default function Contact() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50 pt-2 pb-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100/80 rounded-full text-purple-600 font-medium mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
              Connect
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Have questions about finance? Want to collaborate? Or just want to
            say hello? We'd love to hear from you and help you on your financial
            learning journey.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 lg:p-10 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h3>
            <p className="text-gray-600 mb-8">
              Fill out our form and we'll get back to you within 24 hours. We're
              here to help!
            </p>

            {/* Google Form Embed */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📝</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Quick Contact Form
                </h4>
                <p className="text-gray-600 text-sm">
                  Click below to open our contact form
                </p>
              </div>

              {/* Replace this URL with your actual Google Form URL */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe-jTTjEwKi11D8xGRQ5Epi32M55FI0NniQDUt4JRDuyBlGog/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-medium text-center hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Open Contact Form →
              </a>
            </div>

            {/* Quick Contact Options */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center p-4 bg-gray-50/80 rounded-xl hover:bg-gray-100/80 transition-colors">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-indigo-600">📧</span>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">Email</h5>
                  <p className="text-gray-600 text-sm">hello@findev.com</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50/80 rounded-xl hover:bg-gray-100/80 transition-colors">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-purple-600">🐦</span>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">Social Media</h5>
                  <p className="text-gray-600 text-sm">@FinDevLearning</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50/80 rounded-xl hover:bg-gray-100/80 transition-colors">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-purple-600">🐦</span>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">YouTube</h5>
                  <p className="text-gray-600 text-sm">@FinDevLearning</p>
                </div>
              </div>
            </div>

            {/* Why Connect */}
            <div className="mt-8 flex-1 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white flex flex-col justify-between">
              {/* Header */}
              <div>
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl">💡</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Why Connect With Us?</h4>
                <p className="text-indigo-200 text-sm mb-6">
                  We're a student-driven platform built to make finance
                  approachable and practical for everyone.
                </p>
              </div>

              {/* Points */}
              <ul className="space-y-4 flex-1">
                <li className="flex items-start space-x-3">
                  <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-yellow-300 text-xs">✦</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">
                      Student-Friendly Learning
                    </p>
                    <p className="text-indigo-200 text-xs mt-0.5">
                      Financial concepts broken down in simple, clear language —
                      no jargon.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-yellow-300 text-xs">✦</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">
                      Real-World Insights
                    </p>
                    <p className="text-indigo-200 text-xs mt-0.5">
                      Case studies, market analysis, and investment research
                      curated for learners.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-yellow-300 text-xs">✦</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">
                      Quick Response
                    </p>
                    <p className="text-indigo-200 text-xs mt-0.5">
                      Collaborate, share ideas, or just say hello — we reply
                      within 24 hours.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-yellow-300 text-xs">✦</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">
                      Built by Students, for Students
                    </p>
                    <p className="text-indigo-200 text-xs mt-0.5">
                      We understand the challenges of learning finance from
                      scratch — because we've been there.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-yellow-300 text-xs">✦</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">
                      Community Learning
                    </p>
                    <p className="text-indigo-200 text-xs mt-0.5">
                      Learn alongside like-minded students, share knowledge, and
                      grow together in a collaborative space.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-yellow-300 text-xs">✦</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">
                      Bite-Sized Learning
                    </p>
                    <p className="text-indigo-200 text-xs mt-0.5">
                      Access bite-sized lessons designed to fit your busy
                      schedule and maximize learning efficiency.
                    </p>
                  </div>
                </li>
              </ul>

              {/* Footer tag */}
              <div className="mt-6 pt-5 border-t border-white/20">
                <p className="text-indigo-200 text-xs text-center">
                  🎓 MMS Finance Students · Thakur Institute of Management
                  Studies & Research · Mumbai
                </p>
              </div>
            </div>
          </div>

          {/* Team Info */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h3>

              {/* Team Member 1 */}
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl mb-6 border border-indigo-100">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  V
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Vedant Narlawar
                  </h4>
                  <p className="text-indigo-600 font-medium mb-2">
                    Tech & Finance Enthusiast
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    B.Tech in Artificial Intelligence & Data Science, currently
                    pursuing MMS in Finance. Passionate about combining
                    technology with financial insights to build practical
                    solutions.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="https://www.linkedin.com/in/vedantnarlawar/"
                      className="text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl mb-6 border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  L
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Lavina Jain
                  </h4>
                  <p className="text-blue-600 font-medium mb-2">
                    Finance Student
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    B.Com graduate, currently pursuing MMS in Finance.
                    Interested in financial analysis, investment strategies, and
                    understanding market trends.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl mb-6 border border-purple-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  H
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Harshita Chandak
                  </h4>
                  <p className="text-purple-600 font-medium mb-2">
                    Finance Student
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    B.Com graduate, pursuing MMS in Finance. Focused on
                    corporate finance and developing strong analytical and
                    problem-solving skills.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl mb-6 border border-teal-100">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  R
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Rishi Deore
                  </h4>
                  <p className="text-teal-600 font-medium mb-2">
                    Finance Student
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    B.Com graduate, currently pursuing MMS in Finance. Keen on
                    learning financial markets, portfolio management, and
                    practical applications of finance.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Team Member 5 */}
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl border border-rose-100">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  K
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Khushbu Chandak
                  </h4>
                  <p className="text-rose-600 font-medium mb-2">
                    Finance Student
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    B.Com graduate, pursuing MMS in Finance. Interested in
                    financial planning, business analysis, and gaining
                    real-world finance experience.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-rose-600 hover:text-rose-700 transition-colors"
                    >
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl mb-6 border border-indigo-100">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  V
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Saakshi Gala
                  </h4>
                  <p className="text-indigo-600 font-medium mb-2">
                    Finance Student
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    B.Com graduate, currently pursuing MMS in Finance.
                    Interested in financial analysis, investment strategies, and
                    understanding market trends.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="https://www.linkedin.com/in/saakshi-gala-242a1b389/"
                      className="text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Info */}
            {/* <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Office
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-indigo-50 rounded-xl">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-indigo-600">📍</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">Location</h5>
                    <p className="text-gray-600 text-sm">San Francisco, CA</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-purple-600">⏰</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">Response Time</h5>
                    <p className="text-gray-600 text-sm">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl p-12 backdrop-blur-sm border border-white/50">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Start Learning?
            </span>
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't wait to improve your financial literacy. Join thousands of
            learners who are already mastering finance with FinDev.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Start Learning Today
            </button>
            <button className="px-8 py-4 bg-white/80 text-gray-700 rounded-xl font-medium border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300">
              Watch Free Videos
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
