'use client'

const enhanceCollapsibles = () => {
  const enhanceItems = (selector: string, toggleSelector: string) => {
    const items = document.querySelectorAll(selector);
    items.forEach(item => {
      const summary = item.querySelector('summary');
      const toggle = summary?.querySelector(toggleSelector);
      if (summary && toggle) {
        summary.addEventListener('click', (e) => {
          e.preventDefault();
          if (item.hasAttribute('open')) {
            item.removeAttribute('open');
            toggle.textContent = '+';
          } else {
            item.setAttribute('open', '');
            toggle.textContent = '×';
          }
        });
      }
    });
  };

  // Enhance FAQ items
  enhanceItems('.faqItem', '.faqToggle');

  // Enhance Kit items
  enhanceItems('.kitDetails', '.kitToggle');
};

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceCollapsibles);
  } else {
    enhanceCollapsibles();
  }
}