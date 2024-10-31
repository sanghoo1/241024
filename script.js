const swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true
});

// 카드에 마우스 호버 시 기울어짐 및 빛 효과 추가
document.querySelectorAll('.card').forEach((card, index) => {
  const light = document.getElementById(`light${index + 1}`);

  card.addEventListener("mousemove", (e) => {
    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    card.style.transform = `perspective(1000px) rotateX(${y / 10}deg) rotateY(${-x / 10}deg)`;
    card.style.boxShadow = `${x / 20}px ${y / 20}px 20px rgba(0, 0, 0, 0.2)`;

    light.style.backgroundImage = `
      radial-gradient(circle at ${x + width / 2}px ${y + height / 2}px, rgba(255,255,255,0.5), transparent)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = '';
    card.style.boxShadow = '';
    light.style.backgroundImage = '';
  });
});