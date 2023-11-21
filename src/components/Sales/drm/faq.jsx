import React from "react";
import FaqQuestion from "./faq-questions";

const Faq = () => {
  return (
    <div className="top-content-padding">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="title-text-size">Frequently</div>
        <div className="title-text-size pt-3 pb-8">asked questions</div>
        <div>
          <FaqQuestion
            question="How can the DRM help improve developer retention?"
            answer="Lorem ipsum"
          />
          <FaqQuestion
            question="How does the DRMs metric system work to analyze developer activities?"
            answer="Lorem ipsum"
          />
          <FaqQuestion
            question="What features in the DRM allow for efficient resource allocation?"
            answer="Lorem ipsum"
          />
          <FaqQuestion
            question="Do you have an API I can integrate with my existing CRM?"
            answer="Lorem ipsum"
          />
          <FaqQuestion
            question="What if projects are closed source?"
            answer="Lorem ipsum"
          />
          <FaqQuestion
            question="Can I import my spreadsheet or airtable?"
            answer="Lorem ipsum"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
