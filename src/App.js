import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaShieldAlt,
  FaChartBar,
  FaGraduationCap,
  FaUsers,
  FaArrowRight,
  FaPlay,
  FaBook,
  FaTools,
  FaEye,
  FaBell,
  FaComments,
  FaDatabase,
  FaFileAlt,
  FaBrain,
  FaHeart,
  FaLock,
  FaExclamationTriangle,
} from "react-icons/fa"
import BrickBackground from "./BrickBackground"
import ResourcesPage from "./ResourcesPage"
import TaxonomyPage from "./TaxonomyPage"
import ToolsPage from "./ToolsPage"
/* -------------------------------------------------------------------------- */
/*                               Team Data                                    */
/* -------------------------------------------------------------------------- */
import yamanImg from "./assets/yaman.jpg"
import yirenImg from "./assets/yiren.jpg"
import yunImg from "./assets/yun.jpg"
import yangImg from "./assets/yang.jpg"

// ===== Google Fonts (Inter / Open Sans / Raleway) =====
const inter = document.createElement("link")
inter.href =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
inter.rel = "stylesheet"
document.head.appendChild(inter)
const openSans = document.createElement("link")
openSans.href =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Open+Sans:wght@400;600;700&family=Raleway:wght@500;600;700&display=swap"
openSans.rel = "stylesheet"
document.head.appendChild(openSans)

const team = [
  {
    img: yamanImg,
    name: "Yaman Yu",
    role: "University of Illinois Urbana‑Champaign",
    links: {
      website: "https://yaman-yu.github.io",
      github: "https://github.com/yaman-yu",
      linkedin: "https://linkedin.com/in/yaman-yu",
    },
  },
  {
    img: yirenImg,
    name: "Yiren Liu",
    role: "University of Illinois Urbana‑Champaign",
    links: {
      website: "https://yirenliu.github.io",
      github: "https://github.com/yirenliu",
      linkedin: "https://linkedin.com/in/yiren-liu",
    },
  },
  {
    img: yunImg,
    name: "Yun Huang",
    role: "University of Illinois Urbana‑Champaign",
    links: {
      website: "https://yunhuang.github.io",
      github: "https://github.com/yunhuang",
      linkedin: "https://linkedin.com/in/yun-huang",
    },
  },
  {
    img: yangImg,
    name: "Yang Wang",
    role: "University of Illinois Urbana‑Champaign",
    links: {
      website: "https://yangwang.github.io",
      github: "https://github.com/yangwang",
      linkedin: "https://linkedin.com/in/yang-wang",
    },
  },
]

const researchAssistants = [
  {
    name: "Melinda Hu",
    role: "Research Assistant",
    links: {
      github: "https://github.com/melindahu",
      linkedin: "https://linkedin.com/in/melinda-hu",
    },
  },
  {
    name: "Justin Wang",
    role: "Research Assistant",
    links: {
      github: "https://github.com/justinwang",
      linkedin: "https://linkedin.com/in/justin-wang",
    },
  },
  {
    name: "Jacky Zhang",
    role: "Research Assistant",
    links: {
      github: "https://github.com/jackyzhang",
      linkedin: "https://linkedin.com/in/jacky-zhang",
    },
  },
  {
    name: "Tanusree Sharma",
    role: "Research Assistant",
    links: {
      github: "https://github.com/tanusreesharma",
      linkedin: "https://linkedin.com/in/tanusree-sharma",
    },
  },
]

/* ------------------------------ Components ------------------------------ */
const TeamGrid = () => (
  <div className="grid md:grid-cols-4 gap-8">
    {team.map((m) => (
      <div
        key={m.name}
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 border-4 border-white overflow-hidden mb-4 mx-auto shadow-lg">
          <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
        </div>
        <h3
          className="text-xl font-semibold mb-1 text-blue-950 text-center"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {m.name}
        </h3>
        <p className="text-gray-600 mb-4 font-medium text-center">{m.role}</p>
        <div className="flex space-x-3 text-xl text-blue-600 mt-auto justify-center">
          <a
            href={m.links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 transition-colors duration-200"
          >
            🌐
          </a>
          <a
            href={m.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href={m.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    ))}
  </div>
)

const ResearchAssistantsGrid = () => (
  <div className="grid md:grid-cols-4 gap-8">
    {researchAssistants.map((ra) => (
      <div
        key={ra.name}
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-100 to-teal-100 border-4 border-white overflow-hidden mb-4 mx-auto shadow-lg flex items-center justify-center">
          <div className="text-4xl text-green-600 font-bold">
            {ra.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        <h3
          className="text-xl font-semibold mb-1 text-blue-950 text-center"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {ra.name}
        </h3>
        <p className="text-gray-600 mb-4 font-medium text-center">{ra.role}</p>
        <div className="flex space-x-3 text-xl text-blue-600 mt-auto justify-center">
          <a
            href={ra.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href={ra.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    ))}
  </div>
)

const FeatureCard = ({ icon: Icon, title, description, link, linkText, gradient }) => (
  <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${gradient}`}>
    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl">
      <Icon />
    </div>
    <h3 className="text-xl font-bold text-blue-950 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed mb-6">
      {description}
    </p>
    <Link
      to={link}
      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 group"
    >
      {linkText}
      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
    </Link>
  </div>
)

const StatCard = ({ icon: Icon, number, label, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100">
    <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4 mx-auto text-white`}>
      <Icon />
    </div>
    <div className="text-3xl font-bold text-blue-950 mb-2">{number}</div>
    <div className="text-gray-600 font-medium">{label}</div>
  </div>
)

/* ----------------------------- Home Page ----------------------------- */
const HomePage = () => (
  <>
    {/* Hero Section */}
    <section className="relative pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <BrickBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            AI Safety for Youth
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed max-w-4xl mx-auto">
            We study how children and teens use Generative AI, map out the
            full spectrum of <span className="text-red-600 font-bold">risks & wellbeing concerns</span>,
            and build evidence-based safeguards—from open datasets for researchers to
            real-time companion platform for families.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <StatCard
            icon={FaDatabase}
            number="12,000+"
            label="Conversation Snippets"
            color="bg-blue-500"
          />
          <StatCard
            icon={FaChartBar}
            number="90+"
            label="Risk Categories"
            color="bg-purple-500"
          />
          <StatCard
            icon={FaShieldAlt}
            number="100%"
            label="Real-time Protection"
            color="bg-green-500"
          />
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/resources"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaBook className="inline mr-2" />
            Explore Resources
          </Link>
          <Link
            to="/taxonomy"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl hover:from-purple-700 hover:to-pink-700 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaChartBar className="inline mr-2" />
            View Taxonomy
          </Link>
          <Link
            to="/tools"
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-8 rounded-xl hover:from-green-700 hover:to-blue-700 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaPlay className="inline mr-2" />
            Try the Platform
          </Link>
        </div>
      </div>
    </section>

    {/* Mission Section */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-950 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
          Our Mission
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12">
          We are dedicated to understanding, evaluating, and improving the safety of AI systems for youth through research, education, and practical tools. Our work spans across three key areas, providing comprehensive solutions for AI developers, researchers, and families.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl">
              <FaEye />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-4">Understanding</h3>
            <p className="text-gray-600">
              Investigating youth-AI interactions and identifying potential risks and concerns through comprehensive research. We study how young users interact with AI systems and what safety measures are needed.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl">
              <FaChartBar />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-4">Risk Taxonomy & Benchmark</h3>
            <p className="text-gray-600">
              Developing a comprehensive risk framework and standardized evaluation metrics for youth AI safety. Our benchmarks help identify and measure potential risks in AI systems.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl">
              <FaTools />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-4">Platform Design</h3>
            <p className="text-gray-600">
              Creating practical safety tools, educational resources, and monitoring systems for youth AI interactions. We develop solutions that can be implemented by AI developers and educators.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-950 text-center mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
          Our Contributions & Solutions
        </h2>
        <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
          Explore our practical tools and solutions designed to make AI safer for youth and provide families with the resources they need.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <FeatureCard
            icon={FaDatabase}
            title="YAIR Dataset"
            description="A dataset containing over 12,000 conversation snippets between youth and AI systems, each annotated with risk labels, providing researchers with rich resources to analyze potential risks in AI interactions for children and teens."
            link="/resources"
            linkText="View Dataset"
            gradient="hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100"
          />

          <FeatureCard
            icon={FaChartBar}
            title="Risk Taxonomy System"
            description="A classification system with 11 medium-level categories and over 90 granular risk types, covering everything from privacy and misinformation to self-harm and sexual content, providing practical tools for AI behavior auditing."
            link="/taxonomy"
            linkText="Explore Taxonomy"
            gradient="hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100"
          />

          <FeatureCard
            icon={FaShieldAlt}
            title="YouthSafe Fine-tuned Model"
            description="A safety benchmark and safeguard model for Large Language Models specifically designed for youth interactions, helping identify and mitigate risks in AI conversations and providing safety standards for AI developers."
            link="/tools"
            linkText="Learn About Model"
            gradient="hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100"
          />

          <FeatureCard
            icon={FaBell}
            title="Monitoring Platform"
            description="A comprehensive Chrome browser extension and family dashboard that monitors AI chat interactions in real-time, providing instant safety alerts, usage analytics, and insights for safer AI interactions."
            link="/tools"
            linkText="Try Demo"
            gradient="hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100"
          />
        </div>
      </div>
    </section>

    {/* Why It Matters Section */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-950 text-center mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
          Why This Matters
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-blue-950 mb-6">Protecting the Next Generation's Digital Safety</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                  <FaExclamationTriangle />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Privacy Risks</h4>
                  <p className="text-gray-600">AI may collect and share youth's personal information, requiring special protection measures.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                  <FaBrain />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mental Health Impact</h4>
                  <p className="text-gray-600">Inappropriate AI content may affect youth's mental health and emotional development.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                  <FaLock />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Safety Boundaries</h4>
                  <p className="text-gray-600">Youth need clear digital safety boundaries and guidance principles.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
            <h4 className="text-xl font-bold text-blue-950 mb-4">Our Solutions</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center space-x-3">
                <FaHeart className="text-red-500" />
                <span>Evidence-based safety framework</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaShieldAlt className="text-blue-500" />
                <span>Real-time monitoring and protection tools</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaGraduationCap className="text-green-500" />
                <span>Educational resources and guidance</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaUsers className="text-purple-500" />
                <span>Family-friendly interfaces</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-950 mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
          Our Team
        </h2>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Research team from the University of Illinois Urbana-Champaign, dedicated to creating a safer AI environment for youth
        </p>

        {/* Principal Researchers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-950 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
          </h3>
          <TeamGrid />
        </div>

        {/* Research Assistants */}
        <div>
          <h3 className="text-2xl font-bold text-blue-950 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            Research Assistants
          </h3>
          <ResearchAssistantsGrid />
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Join Our Mission</h2>
        <p className="text-xl mb-8 text-gray-600">
          Help us build a safer AI future for youth. Get involved in our research, try our tools, or contribute to our mission.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/tools"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-8 rounded-xl hover:from-blue-600 hover:to-purple-600 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaPlay className="inline mr-2" />
            Try Now
          </Link>
          <a
            href="mailto:contact@aisafety4kids.org"
            className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-4 px-8 rounded-xl hover:from-green-600 hover:to-teal-600 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaUsers className="inline mr-2" />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  </>
)

/* ------------------------------ App Shell ----------------------------- */
export default function App () {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Router basename="/aisafety4kids">
      <div
        className="relative text-gray-800"
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        {/* Header */}
        <header className="bg-white/95 backdrop-blur-md text-blue-900 sticky top-0 z-50 border-b border-blue-200 shadow-sm">
          <div className="container mx-auto flex items-center justify-between px-4 py-4">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{ fontFamily: "'Raleway', sans-serif" }}>
              AI Safety for Youth
            </Link>
            <nav
              className={`${navOpen ? "flex" : "hidden"
                } md:flex flex-col md:flex-row gap-4 md:gap-6 absolute md:static bg-white md:bg-transparent top-16 left-0 w-full md:w-auto border-t md:border-none shadow md:shadow-none p-4 md:p-0`}
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              <Link
                to="/resources"
                className="hover:text-blue-600 font-medium transition-colors duration-200"
                onClick={() => setNavOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/taxonomy"
                className="hover:text-blue-600 font-medium transition-colors duration-200"
                onClick={() => setNavOpen(false)}
              >
                Taxonomy
              </Link>
              <Link
                to="/tools"
                className="hover:text-blue-600 font-medium transition-colors duration-200"
                onClick={() => setNavOpen(false)}
              >
                Platform
              </Link>
            </nav>
            <button
              className="md:hidden text-2xl hover:text-blue-600 transition-colors duration-200"
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Toggle navigation"
            >
              <FaBars />
            </button>
          </div>
        </header>

        {/* Routes */}
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/taxonomy" element={<TaxonomyPage />} />
          <Route path="/tools" element={<ToolsPage />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 text-center space-y-6">
            <div className="flex justify-center space-x-6 text-2xl">
              <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors duration-200">
                <FaTwitter />
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-blue-400 transition-colors duration-200">
                <FaGithub />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors duration-200">
                <FaLinkedin />
              </a>
            </div>
            <p className="text-lg font-medium">
              Contact: {" "}
              <a
                href="mailto:contact@aisafety4kids.org"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                contact@aisafety4kids.org
              </a>
            </p>
            <p className="font-medium text-gray-400">© 2025 AI Safety for Youth. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}
