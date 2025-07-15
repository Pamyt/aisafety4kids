// ToolsPage.js
import React from "react"
import { FaShieldAlt, FaBrain, FaUsers, FaTools, FaDownload, FaExternalLinkAlt, FaPlay, FaCode, FaBook, FaGraduationCap, FaChartBar, FaCog, FaRocket, FaHandshake, FaLightbulb, FaBell, FaShieldAlt as FaShieldAlt2 } from "react-icons/fa"

const ToolCard = ({ icon: Icon, title, description, features, link, linkText, gradient, status, demoLink }) => (
  <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${gradient}`}>
    <div className="flex items-start justify-between mb-6">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl">
        <Icon />
      </div>
      {status && (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${status === 'Available' ? 'bg-green-100 text-green-800' :
          status === 'Coming Soon' ? 'bg-yellow-100 text-yellow-800' :
            'bg-blue-100 text-blue-800'
          }`}>
          {status}
        </span>
      )}
    </div>

    <h3 className="text-xl font-bold text-blue-950 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed mb-6">
      {description}
    </p>

    {features && (
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="text-blue-500 mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    )}

    <div className="flex space-x-3">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors duration-200"
      >
        <FaDownload className="mr-2" />
        {linkText}
      </a>
      {demoLink && (
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 font-medium transition-colors duration-200"
        >
          <FaPlay className="mr-2" />
          Demo
        </a>
      )}
    </div>
  </div>
)

const ToolsPage = () => {
  const tools = [
    {
      icon: FaShieldAlt,
      title: "YouthSafe Model",
      description: "Our flagship AI safety model trained on the YAIR dataset to detect and prevent harmful content in youth-AI interactions.",
      features: [
        "Real-time risk detection",
        "99.2% detection rate",
        "Context-aware analysis",
        "Youth-specific training"
      ],
      link: "#",
      linkText: "Download Model",
      demoLink: "#",
      status: "Available",
      gradient: "hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100"
    },
    {
      icon: FaBrain,
      title: "Risk Assessment Tool",
      description: "Interactive tool for evaluating AI systems against our comprehensive risk taxonomy and safety standards.",
      features: [
        "Automated risk scoring",
        "Detailed analysis reports",
        "Benchmark comparisons",
        "Actionable recommendations"
      ],
      link: "#",
      linkText: "Access Tool",
      demoLink: "#",
      status: "Available",
      gradient: "hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100"
    },
    {
      icon: FaUsers,
      title: "Parent Dashboard",
      description: "Comprehensive monitoring and control interface for parents to oversee their children's AI interactions safely.",
      features: [
        "Real-time monitoring",
        "Content filtering",
        "Usage analytics",
        "Safety alerts"
      ],
      link: "#",
      linkText: "Try Dashboard",
      demoLink: "#",
      status: "Available",
      gradient: "hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100"
    },
    {
      icon: FaTools,
      title: "Developer SDK",
      description: "Software development kit for integrating youth safety features into existing AI applications and platforms.",
      features: [
        "Easy integration",
        "Multiple language support",
        "Comprehensive documentation",
        "Community support"
      ],
      link: "#",
      linkText: "Get SDK",
      demoLink: "#",
      status: "Coming Soon",
      gradient: "hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-100"
    },
    {
      icon: FaBook,
      title: "Educational Resources",
      description: "Curated collection of guides, tutorials, and best practices for AI safety education and awareness.",
      features: [
        "Age-appropriate content",
        "Interactive learning modules",
        "Expert-curated materials",
        "Regular updates"
      ],
      link: "#",
      linkText: "Browse Resources",
      demoLink: "#",
      status: "Available",
      gradient: "hover:bg-gradient-to-br hover:from-indigo-50 hover:to-indigo-100"
    },
    {
      icon: FaChartBar,
      title: "Analytics Platform",
      description: "Advanced analytics and reporting platform for researchers and organizations to track AI safety metrics.",
      features: [
        "Comprehensive metrics",
        "Custom dashboards",
        "Data visualization",
        "Export capabilities"
      ],
      link: "#",
      linkText: "Access Platform",
      demoLink: "#",
      status: "Coming Soon",
      gradient: "hover:bg-gradient-to-br hover:from-pink-50 hover:to-pink-100"
    }
  ]

  const useCases = [
    {
      icon: FaCog,
      title: "AI Developers",
      description: "Integrate safety measures into your AI systems and ensure compliance with youth protection standards.",
      benefits: ["Easy integration", "Comprehensive testing", "Safety compliance"]
    },
    {
      icon: FaUsers,
      title: "Parents & Educators",
      description: "Monitor and guide children's AI interactions while providing educational resources for digital safety.",
      benefits: ["Real-time monitoring", "Educational content", "Peace of mind"]
    },
    {
      icon: FaRocket,
      title: "Researchers",
      description: "Access our datasets, models, and tools to advance the field of AI safety for youth.",
      benefits: ["Open access", "Research collaboration", "Latest tools"]
    },
    {
      icon: FaHandshake,
      title: "Organizations",
      description: "Implement comprehensive AI safety policies and tools across your platforms and services.",
      benefits: ["Enterprise solutions", "Custom deployment", "Ongoing support"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
            Family Monitoring Platform
          </h1>
          <p className="text-xl mb-8 text-gray-600 max-w-4xl mx-auto">
            Our comprehensive family monitoring platform helps parents protect their children in AI interactions.
            Monitor, analyze, and manage your family's AI safety with our powerful tools and real-time insights.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-indigo-300 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold mb-2 text-indigo-600">4</div>
              <div className="text-gray-600">Core Tools</div>
            </div>
            <div className="bg-white border-2 border-pink-300 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold mb-2 text-pink-600">1</div>
              <div className="text-gray-600">Chrome Extension</div>
            </div>
            <div className="bg-white border-2 border-teal-300 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold mb-2 text-teal-600">100%</div>
              <div className="text-gray-600">Constant Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Available Functions</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Chrome Extension Card */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-200">
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Family Management Extension</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Deploy our Chrome extension across all family devices. Parents simply log in once, and our platform automatically monitors and analyzes AI chat interactions across all websites and applications.</p>
              <div className="flex items-center text-sm text-indigo-600">
                <span className="bg-indigo-100 px-3 py-1 rounded-full font-medium">Browser Tool</span>
                <span className="ml-3">Family monitoring</span>
              </div>
            </div>

            {/* Dashboard Card */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-200">
              <div className="w-14 h-14 bg-gradient-to-r from-pink-400 to-rose-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Analytics Dashboard</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive analytics and reporting tools that provide detailed insights into AI safety patterns and trends across all family members, with customizable alerts and notifications.</p>
              <div className="flex items-center text-sm text-pink-600">
                <span className="bg-pink-100 px-3 py-1 rounded-full font-medium">Analytics</span>
                <span className="ml-3">Detailed insights</span>
              </div>
            </div>

            {/* Risky Reports Card */}
            <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-200">
              <div className="w-14 h-14 bg-gradient-to-r from-red-400 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Risky Reports</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Intelligent risk assessment system that automatically analyzes each child's AI chat interactions in real-time, providing detailed risk classifications and actionable insights.</p>
              <div className="flex items-center text-sm text-red-600">
                <span className="bg-red-100 px-3 py-1 rounded-full font-medium">Risk Analysis</span>
                <span className="ml-3">Auto-detection</span>
              </div>
            </div>

            {/* Conversation History Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200">
              <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Conversation History</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Privacy-focused conversation tracking that maintains comprehensive chat summaries while protecting sensitive content. All interactions are chronologically organized for easy review and analysis.</p>
              <div className="flex items-center text-sm text-green-600">
                <span className="bg-green-100 px-3 py-1 rounded-full font-medium">History</span>
                <span className="ml-3">Privacy-safe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-950 text-center mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            Perfect for Every Family
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 text-white">
                <FaUsers />
              </div>
              <h3 className="text-lg font-bold text-blue-950 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                Parents & Guardians
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Monitor and guide your children's AI interactions while maintaining their privacy and digital safety.
              </p>
              <ul className="space-y-1">
                <li className="flex items-center text-xs text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Real-time monitoring
                </li>
                <li className="flex items-center text-xs text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Privacy protection
                </li>
                <li className="flex items-center text-xs text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Peace of mind
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 text-white">
                <FaGraduationCap />
              </div>
              <h3 className="text-lg font-bold text-blue-950 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                Families with Multiple Children
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Manage multiple children's AI interactions from a single dashboard with individual profiles and settings.
              </p>
              <ul className="space-y-1">
                <li className="flex items-center text-xs text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Multi-child support
                </li>
                <li className="flex items-center text-xs text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Individual profiles
                </li>
                <li className="flex items-center text-xs text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Centralized management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-950 text-center mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            Getting Started
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="text-center flex-1">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-semibold">
                1
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-4">Set Up Your Family</h3>
              <p className="text-gray-600 leading-relaxed">
                Add your children to your parent account, install our Chrome extension on family devices, and simply select which child is using each device.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="text-center flex-1">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-semibold">
                2
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-4">Start Protecting</h3>
              <p className="text-gray-600 leading-relaxed">
                That's it! Our system automatically begins protecting your family with real-time monitoring and insights across all devices.
              </p>
            </div>
          </div>

          {/* Mobile arrow for responsive design */}
          <div className="md:hidden flex justify-center mt-8">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Demo Platform Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-950 text-center mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            Try Our Demo Platform
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Experience Family Monitoring in Action</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Visit our interactive demo platform to see how our family monitoring system works in real-time. Test the monitoring features, explore the dashboard, and experience firsthand how we protect your family in AI interactions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our demo platform showcases the complete family monitoring system, allowing you to understand how it works before setting it up for your own family.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Real-time</div>
                  <div className="text-gray-600">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Interactive</div>
                  <div className="text-gray-600">Dashboard</div>
                </div>
              </div>

              <div className="flex justify-center">
                <a
                  href="https://preview.teen-ai.salt-lab.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold transition-colors duration-200"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Visit Demo Platform
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-blue-950 mb-4">Platform Features</h4>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <FaShieldAlt className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Live Monitoring:</span>
                    <p className="text-sm">See real-time safety detection in action</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaChartBar className="text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Analytics Dashboard:</span>
                    <p className="text-sm">Explore usage patterns and safety metrics</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaBell className="text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Alert System:</span>
                    <p className="text-sm">Experience instant safety notifications</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCog className="text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Customization:</span>
                    <p className="text-sm">Configure settings for your specific needs</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default ToolsPage
