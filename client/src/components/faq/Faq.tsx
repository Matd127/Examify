import { FC, useState } from "react";
import { questions } from "./questions";

const Faq: FC = () => {
  const [accordionItems, setAccordionItems] = useState(questions);

  const toggleAccordionItem = (id: number) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, isOpen: !item.isOpen }
          : { ...item, isOpen: false }
      )
    );
  };

  return (
    <section className="faq bg-light py-5" id="faq">
      <div className="accordion container py-5" id="accordionExample">
        <h2 className="h2 text-center mb-5">Frequently Asked Questions</h2>
        {accordionItems.map((item) => (
          <div className="accordion-item" key={item.id}>
            <h2 className="accordion-header" id={`heading${item.id}`}>
              <button
                className={`accordion-button py-4 ${item.isOpen ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleAccordionItem(item.id)}
                aria-expanded={item.isOpen}
                aria-controls={`collapse${item.id}`}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={`collapse${item.id}`}
              className={`accordion-collapse collapse ${
                item.isOpen ? "show" : ""
              }`}
              aria-labelledby={`heading${item.id}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body py-4">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;