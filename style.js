document.addEventListener("DOMContentLoaded", () => {

  const dropdown = document.getElementById("menuDropdown");
  const menu = document.getElementById("dropdownMenu");

  /* ▼ メニュー内容をJSで管理 */
  menu.innerHTML = `
    <a href="menu_lunch.html">昼メニュー</a>
    <a href="menu.html">夜メニュー</a>
    <a href="menu_drink.html">ドリンク</a>
  `;


  let isInside = false;


  /* ▼ 中に入った */
  dropdown.addEventListener("mouseenter", () => {
    isInside = true;
    menu.style.display = "block";
  });


  /* ▼ 外に出た */
  dropdown.addEventListener("mouseleave", () => {
    isInside = false;

    // 少し待ってから閉じる（誤判定防止）
    setTimeout(() => {
      if (!isInside) {
        menu.style.display = "none";
      }
    }, 150);
  });

});
