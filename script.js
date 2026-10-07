document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // ۱. انیمیشن تایپ خودکار (Typewriter Effect)
  // ==========================================
  const titleElement = document.querySelector(".hero-intro h1");
  if (titleElement) {
    const text = "Full-Stack Developer";
    titleElement.textContent = "";
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        titleElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    }
    setTimeout(typeWriter, 500);
  }

  // ==========================================
  // ۲. فیلتر کردن هوشمند نمونه کارها (Portfolio Tabs)
  // ==========================================
  const tabButtons = document.querySelectorAll(".tab-btn");
  const portfolioCards = document.querySelectorAll(".portfolio-card");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // حذف کلاس active از تمام دکمه‌ها
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      // اضافه کردن کلاس active به دکمه کلیک شده
      button.classList.add("active");

      // گرفتن نام دسته‌بندی از متن دکمه
      const filterValue = button.textContent.trim().toLowerCase();

      portfolioCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        // اگر دکمه "All" انتخاب شده باشد یا دسته‌بندی کارت با دکمه یکی باشد
        if (filterValue === "all") {
          card.style.display = "block";
        } else if (filterValue === "web apps" && cardCategory === "web-apps") {
          card.style.display = "block";
        } else if (
          filterValue === "mobile apps" &&
          cardCategory === "mobile-apps"
        ) {
          card.style.display = "block";
        } else if (
          filterValue === "ui/ux designs" &&
          cardCategory === "ui-ux"
        ) {
          card.style.display = "block";
        } else if (filterValue === "apis" && cardCategory === "apis") {
          card.style.display = "block";
        } else {
          card.style.display = "none"; // مخفی کردن بقیه کارت‌ها
        }
      });
    });
  });

  // ==========================================
  // ۳. اسکرول نرم و روان (Smooth Scrolling)
  // ==========================================
  const menuLinks = document.querySelectorAll(
    ".nav-menu a, .header-action a, .hero-buttons a",
  );
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");

      if (targetId.startsWith("#") && targetId !== "#") {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          // محاسبه موقعیت هدر چسبان (Sticky) برای اینکه اسکرول دقیق انجام شود
          const headerHeight =
            document.querySelector(".site-header").offsetHeight;
          const targetPosition = targetSection.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // ==========================================
  // ۴. مدیریت فرم تماس و پیام موفقیت‌آمیز
  // ==========================================
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");

      if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
        alert("Please fill in all required fields!");
        return;
      }

      alert(
        `Thank you ${nameInput.value}! Your message has been sent successfully.`,
      );
      contactForm.reset();
    });
  }
});
