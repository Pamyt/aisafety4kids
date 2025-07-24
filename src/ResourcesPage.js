// ResourcesPage.js
import React from "react"
import { FaDatabase, FaFileAlt, FaExternalLinkAlt, FaDownload, FaBook, FaGraduationCap, FaUsers, FaShieldAlt } from "react-icons/fa"

// Publications data with actual links
const publications = [
  {
    title: "Exploring Parent‑Child Perceptions on Safety in Generative AI: Concerns, Mitigation Strategies, and Design Implications",
    authors: "Yaman Yu · Tanusree Sharma · Melinda Hu · Justin Wang · Yang Wang",
    pdf: "https://arxiv.org/pdf/2406.10461",    // Placeholder - update with actual PDF link
    arxiv: "https://arxiv.org/abs/2406.10461",  // Placeholder - update with actual arXiv link
    conference: "2025 IEEE Symposium on Security and Privacy (SP)",
    abstract: "This paper investigates how parents and children perceive safety in generative AI interactions, identifying key concerns and proposing design strategies for safer AI systems."
  },
  {
    title: "Youth-Centered GAI Risks (YAIR): A Taxonomy of Generative AI Risks from Empirical Data",
    authors: "Yaman Yu · Yiren Liu · Jacky Zhang · Yun Huang · Yang Wang",
    pdf: "https://arxiv.org/pdf/2502.16383",    // Placeholder - update with actual PDF link
    arxiv: "https://arxiv.org/abs/2502.16383",  // Placeholder - update with actual arXiv link
    conference: "SOUPS 2025",
    abstract: "We present a comprehensive taxonomy of generative AI risks for youth based on analysis of over 12,000 conversation snippets, providing a framework for understanding and mitigating these risks."
  },
  {
    title: "YouthSafe: A Youth‑Centric Safety Benchmark and Safeguard Model for Large Language Models",
    authors: "Yaman Yu · Yiren Liu · Jacky Zhang · Yun Huang · Yang Wang",
    pdf: "https://arxiv.org/pdf/2401.54321",    // Placeholder - update with actual PDF link
    arxiv: "https://arxiv.org/abs/2401.54321",  // Placeholder - update with actual arXiv link
    conference: "CCS 2025",
    abstract: "We introduce YouthSafe, a safety benchmark and safeguard model specifically designed for youth-AI interactions, trained on our YAIR dataset to detect and prevent harmful content."
  },
]

const ResourceCard = ({ icon: Icon, title, description, link, linkText, gradient, stats }) => (
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
    {stats && (
      <div className="grid grid-cols-2 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    )}
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 group"
    >
      {linkText}
      <FaExternalLinkAlt className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
    </a>
  </div>
)

const PublicationCard = ({ publication }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-blue-950 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
          {publication.title}
        </h3>
        <p className="text-gray-600 mb-2 font-medium">{publication.authors}</p>
        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
          {publication.conference}
        </span>
        <p className="text-gray-600 leading-relaxed mb-6">
          {publication.abstract}
        </p>
      </div>
    </div>
    <div className="flex space-x-4">
      <a
        href={publication.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors duration-200"
      >
        <FaFileAlt className="mr-2" />
        PDF
      </a>
      <a
        href={publication.arxiv}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 font-medium transition-colors duration-200"
      >
        <FaExternalLinkAlt className="mr-2" />
        arXiv
      </a>
    </div>
  </div>
)

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
            Resources for Researchers
          </h1>
          <p className="text-xl mb-8 text-gray-600 max-w-4xl mx-auto">
            Our research provides a strong empirical foundation for understanding youth and Generative AI.
            We offer the <b>YAIR dataset</b> and several <b>peer‑reviewed publications</b> that together shed light on the full spectrum of risks and safety challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-blue-300 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold mb-2 text-blue-600">12,000+</div>
              <div className="text-gray-600">Conversation Snippets</div>
            </div>
            <div className="bg-white border-2 border-purple-300 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold mb-2 text-purple-600">90+</div>
              <div className="text-gray-600">Risk Categories</div>
            </div>
            <div className="bg-white border-2 border-green-300 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold mb-2 text-green-600">3</div>
              <div className="text-gray-600">Published Papers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dataset Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-950 text-center mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            YAIR Dataset
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Youth-AI Risks Dataset</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The <b>Youth-AI Risks (YAIR) dataset</b> contains over <b>12,000 conversation snippets</b> between youth and generative AI systems.
                Each snippet is annotated with one or more risk labels from our taxonomy (e.g., privacy issues, toxicity, self-harm).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                This multi-label dataset provides researchers with a rich resource to analyze how and where AI interactions might be unsafe for children and teens.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">12,000+</div>
                  <div className="text-gray-600">Conversations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">90+</div>
                  <div className="text-gray-600">Risk Labels</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-blue-950 mb-4">Dataset Features</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <FaDatabase className="text-blue-500" />
                  <span>Multi-label risk annotations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaShieldAlt className="text-green-500" />
                  <span>Privacy-preserving format</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaUsers className="text-purple-500" />
                  <span>Diverse youth demographics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaBook className="text-orange-500" />
                  <span>Comprehensive documentation</span>
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href="mailto:yamanyu2@illinois.edu?subject=YAIR Dataset Access Request&body=Hello,%0D%0A%0D%0AI would like to request access to the YAIR (Youth-AI Risks) dataset for research purposes.%0D%0A%0D%0APlease include the following information:%0D%0A- Your name and affiliation%0D%0A- Research purpose and objectives%0D%0A- How you plan to use the dataset%0D%0A- Any specific requirements or questions%0D%0A%0D%0AThank you for your consideration.%0D%0A%0D%0ABest regards,"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold transition-colors duration-200"
                >
                  <FaDownload className="mr-2" />
                  Request Access
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Publications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-950 text-center mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            Publications
          </h2>
          <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
            Below are our latest published papers that provide in-depth analyses of generative AI risks for youth and potential safeguards:
          </p>
          <div className="space-y-8">
            {publications.map((publication, index) => (
              <PublicationCard key={index} publication={publication} />
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}

export default ResourcesPage
