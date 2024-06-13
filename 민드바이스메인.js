const circle = document.getElementById("중앙원");
const images = document.querySelectorAll(".일러프사");

let scrollMax = document.body.scrollHeight - window.innerHeight;
let scrollPos = window.scrollY;
let circleRotation = 0;

window.addEventListener("스크롤", function () {
  // 스크롤 위치 계산
  scrollPos = window.scrollY;
  // 스크롤 끝에 도달하면 다시 맨 위로
  if (scrollPos >= scrollMax) {
    window.scrollTo(0, 0);
    scrollPos = 0;
  }
  // 원의 회전 각도 계산
  circleRotation = (scrollPos / scrollMax) * 360;
  // 원과 이미지 회전 적용
  circle.style.transform = `translate(-50%, -50%) rotate(${circleRotation}deg)`;
  images.forEach((image, index) => {
    const imageRotation = -circleRotation * (index + 1); // 이미지 회전 각도
    image.style.transform = `rotate(${imageRotation}deg) translate(-100px) rotate(${-imageRotation}deg)`;
    // 특정 스크롤 위치에 따라 특정한 이미지 opacity 설정
    if (
      scrollPos > (scrollMax * (index + 1)) / 5 &&
      scrollPos <= (scrollMax * (index + 2)) / 5
    ) {
      image.style.opacity = 1;
    } else {
      image.style.opacity = 0.5;
    }
  });
});
