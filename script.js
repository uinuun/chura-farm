document.addEventListener('DOMContentLoaded', function() {
    // ドロップダウンメニューを制御する要素を取得
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    
    // 「商品案内」にマウスが入ったとき
    dropdown.addEventListener('mouseenter', function() {
      dropdownMenu.style.display = 'block';  // メニューを表示
    });
  
    // 「商品案内」からマウスが離れたとき
    dropdown.addEventListener('mouseleave', function() {
      dropdownMenu.style.display = 'none';  // メニューを非表示
    });
  });
  