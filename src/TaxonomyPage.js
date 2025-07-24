// TaxonomyPage.js
import React from "react"
import TaxonomyTable from "./TaxonomyTable"
import { FaChartBar, FaShieldAlt, FaBrain, FaExclamationTriangle, FaLock, FaUsers, FaEye, FaTools, FaArrowRight, FaDownload, FaExternalLinkAlt } from "react-icons/fa"

const RiskCategoryCard = ({ icon: Icon, title, description, count, color, examples }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
    <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4 text-white`}>
      <Icon />
    </div>
    <h3 className="text-lg font-bold text-blue-950 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
      {title}
    </h3>
    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
      {description}
    </p>
    <div className="flex items-center justify-between mb-4">
      <span className="text-2xl font-bold text-blue-600">{count}</span>
      <span className="text-sm text-gray-500">instances</span>
    </div>
    {examples && (
      <div className="bg-gray-50 p-3 rounded-lg">
        <p className="text-xs text-gray-600 font-medium mb-2">Examples:</p>
        <ul className="text-xs text-gray-600 space-y-1">
          {examples.map((example, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-1">•</span>
              {example}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
)

const TaxonomyPage = () => {
  const riskCategories = [
    {
      icon: FaExclamationTriangle,
      title: "Privacy & Data",
      description: "Risks related to personal information exposure and data collection",
      count: "2,847",
      color: "bg-red-500",
      examples: ["Personal info sharing", "Location tracking", "Data misuse"]
    },
    {
      icon: FaBrain,
      title: "Mental Health",
      description: "Psychological impacts and emotional manipulation risks",
      count: "1,923",
      color: "bg-orange-500",
      examples: ["Emotional manipulation", "Self-harm content", "Anxiety triggers"]
    },
    {
      icon: FaLock,
      title: "Safety & Security",
      description: "Physical safety threats and security vulnerabilities",
      count: "1,654",
      color: "bg-yellow-500",
      examples: ["Physical harm advice", "Dangerous activities", "Security breaches"]
    },
    {
      icon: FaUsers,
      title: "Social Risks",
      description: "Interpersonal harm and social manipulation",
      count: "1,432",
      color: "bg-green-500",
      examples: ["Bullying content", "Social manipulation", "Relationship harm"]
    },
    {
      icon: FaEye,
      title: "Content Exposure",
      description: "Inappropriate or harmful content exposure",
      count: "1,298",
      color: "bg-blue-500",
      examples: ["Violent content", "Sexual material", "Hate speech"]
    },
    {
      icon: FaTools,
      title: "Misinformation",
      description: "False information and deceptive content",
      count: "987",
      color: "bg-purple-500",
      examples: ["False facts", "Conspiracy theories", "Misleading advice"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
            Risk Taxonomy & Fine-tuned Model
          </h1>
          <p className="text-xl mb-8 text-gray-600 max-w-4xl mx-auto">
            To help AI developers and researchers, we created a comprehensive taxonomy of generative AI risks for youth.
            This hierarchy distills <b>6 high-level </b>categories, <b>11 medium-level</b> categories and <b>91 granular risk types</b>, covering everything from privacy and misinformation to self-harm and sexual content.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-red-300 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold mb-2 text-red-600">6</div>
              <div className="text-gray-600">Main Categories</div>
            </div>
            <div className="bg-white border-2 border-orange-300 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold mb-2 text-orange-600">90+</div>
              <div className="text-gray-600">Risk Types</div>
            </div>
            <div className="bg-white border-2 border-yellow-300 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold mb-2 text-yellow-600">12K+</div>
              <div className="text-gray-600">Annotated Samples</div>
            </div>
          </div>
        </div>
      </section>


      {/* Interactive Table Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-950 text-center mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            Taxonomy Distribution
          </h2>
          <p className="text-xl text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            The table below shows the frequency of each risk category in our YAIR dataset, providing insights into the most common safety concerns in youth-AI interactions.
          </p>

          <div className="text-center mb-8">
            <a
              href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQUHPzz_M_zxMRlK6ZtcLFOU6e-6wqBUSn0ozmtYhI1dv6IE3q5WDK_OiqHKAmDaYi1HhQZejeOS19_/pubhtml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold transition-colors duration-200 shadow-lg"
            >
              <FaExternalLinkAlt className="mr-2" />
              View Complete Taxonomy Document
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <TaxonomyTable />
            <p className="text-sm text-gray-600 mt-4 text-center">
              *YAIR = Youth AI Risk dataset. The table shows the frequency of each risk category in the dataset.
            </p>
          </div>
        </div>
      </section>

      {/* YouthSafe Model Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-950 text-center mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            YouthSafe Fine-tuned Model
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-6">AI Safety Benchmark & Safeguard</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Alongside the taxonomy, we are developing a <b>fine-tuned safety model</b> called <i>YouthSafe</i>.
                This model is trained on the YAIR dataset and is designed to automatically detect unsafe or high-risk content in AI responses.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                It serves as a benchmark and a safeguard: AI practitioners can use the YouthSafe model to evaluate how well their generative AI systems adhere to safety standards for youth.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">0.943</div>
                  <div className="text-gray-600">AUPRC</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">88.7%</div>
                  <div className="text-gray-600">Recall</div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold transition-colors duration-200"
                >
                  <FaDownload className="mr-2" />
                  Download Model
                </a>
                <a
                  href="#"
                  className="inline-flex items-center bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 font-semibold transition-colors duration-200"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Try Demo
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-blue-950 mb-4">Model Capabilities</h4>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <FaShieldAlt className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Real-time Detection:</span>
                    <p className="text-sm">Instantly identifies potentially harmful content in AI responses</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaBrain className="text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Context Awareness:</span>
                    <p className="text-sm">Understands conversation context for more accurate risk assessment</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaUsers className="text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Youth-Specific:</span>
                    <p className="text-sm">Trained specifically on youth-AI interaction patterns</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-950 text-center mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            Implementation Guide
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl">
                1
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-4">Audit Your System</h3>
              <p className="text-gray-600 leading-relaxed">
                Use our taxonomy to identify potential risks in your AI system and understand where safety measures are needed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl">
                2
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-4">Evaluate with YouthSafe</h3>
              <p className="text-gray-600 leading-relaxed">
                Test your AI system using our YouthSafe benchmark model to measure safety performance and identify areas for improvement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl">
                3
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-4">Implement Safeguards</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrate the YouthSafe model into your system to provide real-time protection and safer AI interactions for youth.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default TaxonomyPage
