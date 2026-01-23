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

const track = document.getElementById('newsTrack');
const prev = document.getElementById('newsPrev');
const next = document.getElementById('newsNext');

let index = 0;

function isSP() {
  return window.innerWidth <= 768;
}

next.addEventListener('click', () => {
  if (!isSP()) return;

  if (index < track.children.length - 1) {
    index++;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
});

prev.addEventListener('click', () => {
  if (!isSP()) return;

  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
});

/* 画面サイズ変更時リセット */
window.addEventListener('resize', () => {
  if (!isSP()) {
    index = 0;
    track.style.transform = 'none';
  }
});
