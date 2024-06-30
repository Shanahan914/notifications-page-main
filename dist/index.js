document.addEventListener("DOMContentLoaded", function () {
  btn = document.getElementsByTagName("button")[0];
  elements = document.getElementsByTagName("section");
  count = document.getElementById("notifications-count");
  badges = document.getElementsByName("notification-badge");

  let removeBackground = () => {
    for (i = 0; i < elements.length; i++) {
      if (elements[i].dataset.status === "unread") {
        elements[i].classList.remove("bg-blue-100");
        elements[i].dataset.status = "read";
      }
    }
  };

  let removeBadges = () => {
    for (i = 0; i < badges.length; i++) {
      badges[i].style.display = "none";
    }
  };

  btn.addEventListener("click", function () {
    removeBackground();
    removeBadges();
    count.innerHTML = 0;
  });
});
