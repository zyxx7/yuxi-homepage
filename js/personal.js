/* Menu state and concept demonstrations. No image model runs here. */
const toggle=document.querySelector('.s-header__menu-toggle');
const nav=document.querySelector('.s-header__nav-wrap');
function syncMenu(){if(!toggle||!nav)return;const mobile=matchMedia('(max-width:900px)').matches;const open=document.body.classList.contains('menu-is-open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'关闭导航':'打开导航');nav.inert=mobile&&!open;}
if(toggle){
 if(document.body.classList.contains('practice-page')){
  document.documentElement.classList.replace('no-js','js');
  toggle.addEventListener('click',e=>{e.preventDefault();toggle.classList.toggle('is-clicked');document.body.classList.toggle('menu-is-open');});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{document.body.classList.remove('menu-is-open');toggle.classList.remove('is-clicked');syncMenu();}));
 }
 toggle.addEventListener('click',syncMenu);
 toggle.addEventListener('keydown',e=>{if(e.key===' '){e.preventDefault();toggle.click();}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.classList.contains('menu-is-open')){document.body.classList.remove('menu-is-open');toggle.classList.remove('is-clicked');syncMenu();toggle.focus();}});
 new MutationObserver(syncMenu).observe(document.body,{attributes:true,attributeFilter:['class']});
 window.addEventListener('resize',()=>{if(innerWidth>900){document.body.classList.remove('menu-is-open');toggle.classList.remove('is-clicked');}syncMenu();});syncMenu();
}
const segmentImage=document.querySelector('#segment-image');
document.querySelectorAll('[data-mode]').forEach(button=>button.addEventListener('click',()=>{
 segmentImage.src='images/'+button.dataset.mode+'.svg';segmentImage.alt=button.dataset.mode==='labels'?'地物类别示意图，非模型输出':'用于语义分割概念演示的合成影像';
 document.querySelectorAll('[data-mode]').forEach(item=>{const active=item===button;item.setAttribute('aria-pressed',String(active));item.classList.toggle('btn--primary',active);item.classList.toggle('btn--stroke',!active);});
}));
const range=document.querySelector('#compare-range');if(range)range.addEventListener('input',()=>{document.querySelector('#comparison').style.setProperty('--split',range.value+'%');document.querySelector('#compare-output').value=range.value+'%';});
