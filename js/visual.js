/* Reveal only when animation is requested; content stays readable without JS. */
(()=>{'use strict';if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-seen');observer.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll('.profile-entry,.folio-item,.project-detail,.practice-row').forEach(el=>{el.classList.add('reveal-ready');observer.observe(el);});
})();
