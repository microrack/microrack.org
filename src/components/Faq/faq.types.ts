export type FAQItemType = {
  question: string;
  answer: string;
};

export type FAQData = FAQItemType[];

export type FAQProps = {
  className?: string;
  faqData: FAQData;
};
