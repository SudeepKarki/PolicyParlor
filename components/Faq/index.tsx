"use client";
import { useState } from "react";

function Faq() {
  const [activeTab, setActiveTab] = useState("term");
  const [expandedQuestion, setExpandedQuestion] = useState<
    number | string | null
  >(null);

  const tabs = [
    { id: "whole", label: "Whole Life" },
    { id: "term", label: "Term Insurance" },
    { id: "claim", label: "Claim" },
  ];

  const questions = [
    {
      id: 1,
      question: "Does this help in your economy growth?",
      answer:
        "The Company was a wholly owned subsidiary of The Oriental Government Security Life Assurance Company Ltd. adasij ddioasd adiasdsad jsdisd siddsiodasdasodad sdad asdasidas d asdjasi",
    },
    {
      id: 2,
      question: "Does this help in your economy growth?",
      answer:
        "The Company was a wholly owned subsidiary of The Oriental Government Security Life Assurance Company Ltd.",
    },
    {
      id: 3,
      question: "Does this help in your economy growth?",
      answer:
        "The Company was a wholly owned subsidiary of The Oriental Government Security Life Assurance Company Ltd.",
    },
    {
      id: 4,
      question: "Does this help in your economy growth?",
      answer:
        "The Company was a wholly owned subsidiary of The Oriental Government Security Life Assurance Company Ltd.",
    },
  ];

  const toggleQuestion = (id: number | string) => {
    if (expandedQuestion === id) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(id);
    }
  };

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-5xl text-gray-800 text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="">
          <div className="flex mb-10 gap-4 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-8 py-3 rounded-full text-center transition-colors duration-300 ${
                  activeTab === tab.id
                    ? "bg-green-500 text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="bg-gray-50 p-8 rounded">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">
              Does this help in your economy growth?
            </h3>
            <p className="text-gray-600 mb-6">
              The Company was a wholly owned subsidiary of The Oriental
              Government Security Life Assurance Company Ltd. adasij ddioasd
              adiasdsad jsdisd siddsio
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition duration-300">
              Contact Us
            </button>
          </div>
        </div>

        <div>
          {questions.map((q) => (
            <div
              key={q.id}
              className="border-b border-gray-200 last:border-b-0"
            >
              <div
                className={`py-5 px-4 flex justify-between items-center cursor-pointer ${
                  expandedQuestion === q.id ? "pb-2" : ""
                }`}
                onClick={() => toggleQuestion(q.id)}
              >
                <h3 className="text-lg font-medium text-gray-800">
                  {q.question}
                </h3>
                {expandedQuestion === q.id ? (
                  <button className="text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                ) : (
                  <button className="text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </button>
                )}
              </div>
              {expandedQuestion === q.id && (
                <div className="py-2 px-4 pb-5 text-gray-600">
                  <p>{q.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
