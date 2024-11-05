document
.getElementById("clickButton")
.addEventListener("click", function() {
    alert("ボタンがクリックされました！");
  });
document
.getElementById("hoverDiv")
.addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightblue";
  });
  document
  .getElementById("contactForm")
  .addEventListener("submit", function(event) {
    if (!confirm("送信してもよろしいですか？")) {
      event.preventDefault();
    }
  });