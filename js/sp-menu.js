// スマホ用ハンバーガーメニュー
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const spNav = document.getElementById("spNav");

  if (!hamburger || !spNav) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    spNav.classList.toggle("active");
  });

  // メニュークリックで自動的に閉じる
  const links = spNav.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      spNav.classList.remove("active");
    });
  });
});
