// FAQSection.jsx

import { Disclosure } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

// Add your FAQ data here
const faqs: { question: string; answer: string }[] = [
  {
    question: "What is a hair transplant?",
    answer: `A hair transplant is a surgical procedure that moves hair follicles from a donor area (usually
                        the back or sides of the scalp) to areas with thinning or no hair. It is a permanent solution
                        for hair loss.`,
  },
  {
    question: "  Is a hair transplant permanent?",
    answer: `Yes, transplanted hair is typically permanent because it retains the characteristics of the
                        donor area. However, natural hair loss may continue in untreated areas.`,
  },
  {
    question: "Does the procedure hurt?",
    answer: `The procedure is performed under local anesthesia, so you should not feel pain during the
                        surgery. Some mild discomfort or soreness may occur after the procedure, but it is usually
                        manageable with medication.`,
  },
  {
    question: "How long is the recovery time?",
    answer: `Most patients can return to work within a few days. Full recovery and hair growth results may
                        take several months.`,
  },
  {
    question: "Are there any risks or side effects?",
    answer: ` As with any surgery, there are risks such as infection, bleeding, or scarring. Choosing an
                        experienced clinic minimizes these risks.`,
  },
  {
    question: "What skin treatments do you offer?",
    answer: `We offer a wide range of skin treatments including chemical peels, laser therapy, PRP,
                        microneedling, anti-aging solutions, acne scar treatments, and more. Each treatment is
                        personalized to your skin type and goals.`,
  },
  {
    question: "Are cosmetic procedures safe?",
    answer: ` Yes, all our cosmetic procedures are performed by qualified professionals using advanced, safe
                        techniques and equipment. We follow strict hygiene and safety protocols.`,
  },
  {
    question: "How do I know which treatment is right for me?",
    answer: `  Our experts will assess your skin and discuss your goals during a consultation, then recommend
                        the most suitable treatments for your needs.`,
  },
  {
    question: "Is there any downtime after skin or facial cosmetic procedures?",
    answer: ` Many treatments have minimal or no downtime. Some procedures may cause temporary redness or
                        swelling, but you can usually resume normal activities soon after.`,
  },
  {
    question: "How do I book a consultation?",
    answer: `  You can book a consultation by calling us, using our website appointment form, or visiting our
                        clinic. Our team will guide you through the process.`,
  },
];

export default function FAQSection() {
  return (
    <div className="w-full max-w-4xl mx-auto my-8 bg-white/60  rounded text-body-text shadow">
      <ul>
        {faqs.map((faq, idx) => (
          <Disclosure
            key={idx}
            as="li"
            className="border-b border-body-text/10 bg-white/60"
          >
            {({ open }) => (
              <>
                <Disclosure.Button className="flex font-body bg-white/60 cursor-pointer justify-between w-full py-4 text-left px-4 focus:outline-none">
                  <span className="font-medium">{faq.question.trim()}</span>
                  {!open ? (
                    <PlusIcon className="h-5 w-5 ml-4 transform transition-transform duration-300" />
                  ) : (
                    <MinusIcon className="h-5 w-5 ml-4 transform transition-transform duration-300" />
                  )}
                </Disclosure.Button>
                <AnimatePresence>
                  {open && (
                    <Disclosure.Panel static>
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-4 pt-2 text-body-text/80 font-body font-normal bg-white/60"
                      >
                        {faq.answer.trim()}
                      </motion.div>
                    </Disclosure.Panel>
                  )}
                </AnimatePresence>
              </>
            )}
          </Disclosure>
        ))}
      </ul>
    </div>
  );
}
