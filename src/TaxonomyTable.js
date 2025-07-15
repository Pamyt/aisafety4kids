import React, { useState } from "react"
import { FiChevronDown, FiChevronRight } from "react-icons/fi"
import { AnimatePresence, motion } from "framer-motion"

const taxonomy = [
  {
    high: "Behavioral & Social Developmental Risk",
    medium: [
      { id: "O11", name: "Developmental, Social, & Learning Harm", types: 8, yair: 667 },
      { id: "O10", name: "Undue Influence & Manipulation", types: 7, yair: 1065 },
    ],
  },
  {
    high: "Misuse & Exploitation Risk",
    medium: [
      { id: "O9", name: "Identity Abuse & Impersonation", types: 1, yair: 43 },
      { id: "O8", name: "User Misuse of GAI", types: 10, yair: 395 },
    ],
  },
  {
    high: "Privacy",
    medium: [
      { id: "O7", name: "Misinformation, Hallucination, Inappropriate Advice", types: 8, yair: 950 },
      { id: "O6", name: "Privacy & Data Exploitation", types: 8, yair: 685 },
    ],
  },
  {
    high: "Mental Well‑being Risk",
    medium: [
      { id: "O5", name: "Self‑Harm, Grooming, Mental‑Health", types: 11, yair: 1173 },
    ],
  },
  {
    high: "Toxicity",
    medium: [
      { id: "O4", name: "Toxic / Abusive Language & Behaviour", types: 6, yair: 478 },
      { id: "O3", name: "Violence, Threats, Aggression", types: 5, yair: 359 },
    ],
  },
  {
    high: "Sexual & Intimate Boundary Violations",
    medium: [
      { id: "O2", name: "Sexual Content & Boundary Violations", types: 19, yair: 1714 },
    ],
  },
  {
    high: "Bias / Discrimination",
    medium: [
      { id: "O1", name: "Bias, Stereotyping, Discrimination", types: 8, yair: 624 },
    ],
  },
]

const TaxonomyTable = () => {
  const [open, setOpen] = useState({})
  const toggle = (k) => setOpen((o) => ({ ...o, [k]: !o[k] }))
  const sumYair = (g) => g.medium.reduce((s, m) => s + m.yair, 0)

  const colPattern = "grid-cols-[40%_55%_5%]"

  return (
    <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-sm text-left text-gray-700">
          <colgroup>
            <col style={{ width: "40%" }} />
            <col style={{ width: "50%" }} />
            <col style={{ width: "10%" }} />
          </colgroup>

          <thead className="text-xs uppercase bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <tr>
              <th className="py-4 px-6 font-semibold tracking-wider">High-level Category</th>
              <th className="py-4 px-6 font-semibold tracking-wider">Medium-level Category (types)</th>
              <th className="py-4 px-6 font-semibold tracking-wider text-right">YAIR Count</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {taxonomy.map((g, index) => (
              <React.Fragment key={g.high}>
                {/* High-level row */}
                <motion.tr
                  className={`hover:bg-gray-50 cursor-pointer select-none transition-colors duration-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  onClick={() => toggle(g.high)}
                  whileHover={{ backgroundColor: "#f8fafc" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <td className="py-4 px-6 font-semibold text-blue-900 flex items-center gap-2 whitespace-nowrap">
                    <motion.div
                      animate={{ rotate: open[g.high] ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiChevronRight className="text-blue-600" />
                    </motion.div>
                    <span className="text-lg">{g.high}</span>
                  </td>
                  <td className="py-4 px-6" />
                  <td className="py-4 px-6 text-right font-bold text-blue-600 whitespace-nowrap">
                    {sumYair(g).toLocaleString()}
                  </td>
                </motion.tr>

                {/* Expandable sub-rows */}
                <tr>
                  <td colSpan={3} className="p-0">
                    <AnimatePresence initial={false}>
                      {open[g.high] && (
                        <motion.div
                          initial={{ maxHeight: 0, opacity: 0 }}
                          animate={{ maxHeight: g.medium.length * 64, opacity: 1 }}
                          exit={{ maxHeight: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden bg-gray-50"
                        >
                          {g.medium.map((m, subIndex) => (
                            <motion.div
                              key={m.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.1 }}
                              className={`grid ${colPattern} border-t border-gray-200 items-center hover:bg-gray-100 transition-colors duration-200`}
                            >
                              <div className="py-4 px-6" />
                              <div className="py-4 px-6 whitespace-normal">
                                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-mono mr-3">
                                  {m.id}
                                </span>
                                <span className="font-medium text-gray-900">{m.name}</span>
                                <span className="text-gray-500 ml-2">({m.types} types)</span>
                              </div>
                              <div className="py-4 pr-6 pl-0 flex justify-end">
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                                  {m.yair.toLocaleString()}
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </td>
                </tr>
              </React.Fragment>
            ))}

            {/* Summary rows */}
            <motion.tr
              className="bg-red-50 border-t-2 border-red-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <td className="py-4 px-6 font-bold text-red-800" colSpan={2}>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  Unsafe Total
                </div>
              </td>
              <td className="py-4 px-6 text-right font-bold text-red-800">
                {taxonomy.reduce((sum, g) => sum + sumYair(g), 0).toLocaleString()}
              </td>
            </motion.tr>

            <motion.tr
              className="bg-green-50 border-t border-green-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <td className="py-4 px-6 font-bold text-green-800" colSpan={2}>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  Safe (no-risk)
                </div>
              </td>
              <td className="py-4 px-6 text-right font-bold text-green-800">
                4,830
              </td>
            </motion.tr>
          </tbody>
        </table>
      </div>

      {/* Table footer with additional info */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              Unsafe interactions
            </span>
            <span className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              Safe interactions
            </span>
          </div>
          <div className="text-right">
            <p className="font-medium">Total Dataset: 12,449 conversations</p>
            <p className="text-xs text-gray-500">Click categories to expand details</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaxonomyTable   