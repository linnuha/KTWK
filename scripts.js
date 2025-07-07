document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuToggle");
  const menu = document.getElementById("mainNavCollapse");
  const links = document.querySelectorAll("#mainNavCollapse .nav-link");

  // Toggle menu saat klik tombol
  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  // Tutup menu saat klik isi menu (khusus mobile)
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992 && menu.classList.contains("show")) {
        menu.classList.remove("show");
      }
    });
  });
});

window.onload = function () {
  const container = document.getElementById('programCarousel');
  const nextBtn = document.getElementById('nextProgram');
  const prevBtn = document.getElementById('prevProgram');
  const scrollAmount = 320;

  nextBtn.onclick = function () {
    container.scrollLeft += scrollAmount;
  };

  prevBtn.onclick = function () {
    container.scrollLeft -= scrollAmount;
  };
};
<!-- JS -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const typedTextEl = document.getElementById('typedText');
    const text = "Bersama membangun generasi muda yang aktif, kreatif, dan peduli sosial.";
    let index = 0;

    function typeEffect() {
      if (index < text.length) {
        typedTextEl.textContent += text[index];
        index++;
        setTimeout(typeEffect, 40);
      }
    }

    typeEffect();
  });
</script>