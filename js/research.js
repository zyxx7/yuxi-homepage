/* Progressive enhancement: original-image links also work without JavaScript. */
(() => {
  const viewer = document.querySelector('#figure-viewer');
  if (!viewer || typeof viewer.showModal !== 'function') return;
  const viewport = viewer.querySelector('.figure-viewer-viewport');
  const stage = viewer.querySelector('.figure-viewer-stage');
  const image = stage.querySelector('img');
  const scaleOutput = viewer.querySelector('#figure-viewer-scale');
  const info = viewer.querySelector('#figure-viewer-info');
  const minus = viewer.querySelector('[data-viewer-minus]');
  const plus = viewer.querySelector('[data-viewer-plus]');
  let opener, scale = 1, fitMode = true, previousOverflow = '';

  const fitScale = () => Math.min(viewport.clientWidth / image.naturalWidth,
    viewport.clientHeight / image.naturalHeight, 1);

  function render(next, preserveCenter = false) {
    if (!image.naturalWidth || !viewer.open) return;
    // Preserve the image location at the viewport center while changing zoom.
    const centerX = (viewport.scrollLeft + viewport.clientWidth / 2 - Math.max(0, (viewport.clientWidth - image.width) / 2)) / scale;
    const centerY = (viewport.scrollTop + viewport.clientHeight / 2 - Math.max(0, (viewport.clientHeight - image.height) / 2)) / scale;
    scale = Math.min(3, Math.max(Math.min(.1, fitScale()), next));
    image.style.width = `${image.naturalWidth * scale}px`;
    image.style.height = `${image.naturalHeight * scale}px`;
    stage.style.width = `${Math.max(viewport.clientWidth, image.naturalWidth * scale)}px`;
    stage.style.height = `${Math.max(viewport.clientHeight, image.naturalHeight * scale)}px`;
    scaleOutput.value = `${Math.round(scale * 100)}%`;
    minus.disabled = scale <= Math.min(.1, fitScale()) + .001;
    plus.disabled = scale >= 3;
    viewport.scrollLeft = preserveCenter ? centerX * scale - viewport.clientWidth / 2 : 0;
    viewport.scrollTop = preserveCenter ? centerY * scale - viewport.clientHeight / 2 : 0;
  }

  function fit() { fitMode = true; render(fitScale()); }
  function zoom(factor) { fitMode = false; render(scale * factor, true); }
  function original() { fitMode = false; render(1, true); }

  document.querySelectorAll('[data-research-image]').forEach(link => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      viewer.querySelector('#figure-viewer-title').textContent = link.dataset.title;
      viewer.querySelector('[data-viewer-source]').href = link.href;
      info.textContent = '正在载入原图…';
      image.alt = link.querySelector('img').alt;
      image.style.visibility = 'hidden';
      minus.disabled = plus.disabled = true;
      image.onload = () => {
        if (!viewer.open) return;
        info.textContent = `${image.naturalWidth} × ${image.naturalHeight} 像素 · 完整原图`;
        fit();
        image.style.visibility = '';
      };
      image.onerror = () => { info.textContent = '图片未能载入，请使用“打开原图”重试。'; };
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      viewer.showModal();
      viewer.querySelector('[data-viewer-close]').focus();
      image.src = link.href;
    });
  });
  viewer.querySelector('[data-viewer-close]').addEventListener('click', () => viewer.close());
  viewer.querySelector('[data-viewer-fit]').addEventListener('click', fit);
  viewer.querySelector('[data-viewer-original]').addEventListener('click', original);
  minus.addEventListener('click', () => zoom(1 / 1.25));
  plus.addEventListener('click', () => zoom(1.25));
  viewer.addEventListener('keydown', event => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    const actions = { '0': fit, '1': original, '+': () => zoom(1.25), '=': () => zoom(1.25), '-': () => zoom(1 / 1.25) };
    if (actions[event.key]) { event.preventDefault(); actions[event.key](); }
  });
  viewer.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    opener?.focus({preventScroll: true});
  });
  window.addEventListener('resize', () => {
    if (viewer.open && image.naturalWidth) fitMode ? fit() : render(scale, true);
  });
})();
