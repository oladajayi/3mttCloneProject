import React, { useState } from "react";

const FrequentQuestion = () => {
  const questionAndAnswers = [
    { question: "Are these the only skills that will be covered?", answer: "No, more will be added in future phases." },
    { question: "How long will the training programs run?", answer: "Average length is three (3) months." },
    { question: "Is physical attendance mandatory?", answer: "The training is hybrid (online + in-person)." },
    { question: "Will I be required to write an entry assessment?", answer: "Yes, there will be an entry assessment." },
    { question: "Is there a commitment fee?", answer: "No, there is no fee at all for this phase." },
    { question: "Will there be financial support?", answer: "Only the cost of training will be covered." },
    { question: "Who is eligible for the program?", answer: "Anyone interested and qualified can apply." },
    { question: "Can I apply for more than one skill?", answer: "You may apply, but selection is for one skill." },
    { question: "Will I receive a certificate?", answer: "Yes, certificates will be issued after completion." },
    { question: "Where will the in-person sessions hold?", answer: "In designated training centers nationwide." },
    { question: "Can I defer my admission?", answer: "Yes, deferment is possible with valid reasons." },
    { question: "Is the program only for Nigerians?", answer: "Yes, it is specifically for Nigerians." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  // Split into groups of 3
  const groupsOfThree = [];
  for (let i = 0; i < questionAndAnswers.length; i += 3) {
    groupsOfThree.push(questionAndAnswers.slice(i, i + 3));
  }

  // Split into 2 sub-containers, each holding 2 groups
  const subContainers = [];
  for (let i = 0; i < groupsOfThree.length; i += 2) {
    subContainers.push(groupsOfThree.slice(i, i + 2));
  }

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="container my-4">
      <h1>FAQs</h1>
      <div className="row m-4">
        {subContainers.map((sub, subIndex) => (
          <div key={subIndex} className="col-md-6 mb-4">
            {sub.map((group, gIndex) => (
              <div key={gIndex} className="accordion mb-3">
                {group.map((item, i) => {
                  const uniqueId = `${subIndex}-${gIndex}-${i}`;
                  const isOpen = openIndex === uniqueId;
                  return (
                    <div className="accordion-item" key={uniqueId}>
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button d-flex align-items-center"
                          type="button"
                          onClick={() => toggleAccordion(uniqueId)}
                        >
                          {/* icon first */}
                          <i
                            aria-hidden="true"
                            className={`fa-accordion-icon fas me-2 ${
                              isOpen ? "fa-minus" : "fa-plus"
                            }`}
                          ></i>
                          <span>{item.question}</span>
                        </button>
                      </h2>
                      {isOpen && (
                        <div className="accordion-collapse show">
                          <div className="accordion-body">{item.answer}</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentQuestion;
