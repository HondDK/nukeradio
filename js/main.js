// Прикрепление блока к нижней части страницы
window.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector("main");
  const footer = document.querySelector('footer');

  function adjustFooterPosition() {
    const wrapperHeight = wrapper.offsetHeight;
    const footerHeight = footer.offsetHeight;
    const windowHeight = window.innerHeight;

    if (wrapperHeight + footerHeight < windowHeight) {
      footer.style.position = 'fixed';
      footer.style.bottom = '0';
    } else {
      footer.style.position = 'static';
    }
  }

  window.addEventListener('resize', adjustFooterPosition);
  adjustFooterPosition();
});
