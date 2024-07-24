'use client'

const enhanceFAQ = () => {
  const faqItems = document.querySelectorAll('.faqItem');
  faqItems.forEach(item => {
    const summary = item.querySelector('summary');
    const toggle = summary?.querySelector('.faqToggle');
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

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceFAQ);
  } else {
    enhanceFAQ();
  }
}