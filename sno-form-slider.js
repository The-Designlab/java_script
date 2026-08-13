(function () {
  const root = document.querySelector('[data-component="form-panel"]');
  if (!root) return;

  const panel = root.querySelector('[data-form-panel-panel]');
  const openTriggers = document.querySelectorAll('[data-form-panel-open]');

  // Content to lock — must NOT contain the panel
  const mainContent =
    document.querySelector('[data-page-content]') ||
    document.querySelector('main') ||
    document.querySelector('.page-wrapper');

  const FOCUSABLE =
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

  let lastFocusedElement = null;

  const isOpen = () => root.classList.contains('is-open');

  // Never inert a wrapper that contains the panel
  const canInertMain = mainContent && !mainContent.contains(root);

  function getFocusableElements() {
    return [...panel.querySelectorAll(FOCUSABLE)].filter(
      (el) => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true'
    );
  }

  function trapFocus(e) {
    if (!isOpen() || e.key !== 'Tab') return;
    const focusable = getFocusableElements();
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function lockScroll() {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
  }

  function unlockScroll() {
    const scrollY = Math.abs(parseInt(document.body.style.top || '0', 10));
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollY);
  }

  function setMainInert(active) {
    if (!canInertMain) return;

    if (active) {
      mainContent.setAttribute('aria-hidden', 'true');
      mainContent.inert = true;
    } else {
      mainContent.removeAttribute('aria-hidden');
      mainContent.inert = false;
    }
  }

  function openPanel(trigger) {
    if (isOpen()) return;

    lastFocusedElement = trigger || document.activeElement;

    root.classList.add('is-open');
    root.setAttribute('aria-hidden', 'false');
    openTriggers.forEach((btn) => btn.setAttribute('aria-expanded', 'true'));

    setMainInert(true);
    lockScroll();

    requestAnimationFrame(() => {
      const closeBtn = root.querySelector('[data-form-panel-close]');
      const firstField = panel.querySelector(
        'input:not([type="hidden"]), textarea, select'
      );
      (firstField || closeBtn || panel).focus();
    });

    document.addEventListener('keydown', onKeydown);
  }

  function closePanel() {
    root.classList.remove('is-open');
    root.setAttribute('aria-hidden', 'true');
    openTriggers.forEach((btn) => btn.setAttribute('aria-expanded', 'false'));

    setMainInert(false);
    unlockScroll();
    document.removeEventListener('keydown', onKeydown);

    if (lastFocusedElement?.focus) lastFocusedElement.focus();
  }

  function onKeydown(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closePanel();
    }
    trapFocus(e);
  }

  // Open triggers
  openTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openPanel(trigger);
    });
  });

  // Close — button, icon inside button, or backdrop
  root.addEventListener('click', (e) => {
    if (
      e.target.closest('[data-form-panel-close]') ||
      e.target.closest('[data-form-panel-backdrop]')
    ) {
      e.preventDefault();
      closePanel();
    }
  });
})();
