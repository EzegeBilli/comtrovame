import { useState } from "react";
import "./Faq.css";

// Replace these questions and answers with your real content
const FAQS = [
  {
    question: "What is Comtrova?",
    answer:
      "Comtrova is an estate management platform that brings access control, utility payments, security logs, notices, and resident communication into one web and mobile dashboard.",
  },
  {
    question: "How do residents pay for electricity, water, and gas?",
    answer:
      "Residents pay directly from the app through integrated vending. Every payment is recorded, and estate admins can see payment reports in the dashboard.",
  },
  {
    question: "How are guests and vendors approved?",
    answer:
      "Residents register their guests in the app and receive an access code. Security teams verify the code at the gate, and every entry is logged with a time stamp.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free demo. We'll help you register your estate, set up blocks and units, and invite your admins and residents.",
  },
];

function Chevron() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Faq() {
  // The first question starts open, like the Figma design
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="faq" className="faq section">
      <div className="container faq__inner">
        <h2 className="faq__title">Frequently Asked Questions</h2>

        <div className="faq__list">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`faq__item ${isOpen ? "faq__item--open" : ""}`}
              >
                <h3 className="faq__heading">
                  <button
                    type="button"
                    className="faq__question"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                  >
                    <span>{item.question}</span>
                    <span className="faq__icon">
                      <Chevron />
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className="faq__panel"
                >
                  <div className="faq__panel-inner">
                    <p className="faq__answer">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}