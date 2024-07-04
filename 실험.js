/**
document.addEventListener("DOMContentLoaded", function () {
  const circle = document.getElementById("circle");
  const photos = document.querySelectorAll(".photo");
  const container = document.querySelector(".container");

  // 사진들을 원 주위에 배치하는 함수
  function arrangePhotos() {
    const centerX = circle.offsetLeft + circle.offsetWidth / 2;
    const centerY = circle.offsetTop + circle.offsetHeight / 2;
    const radius = 250;
    const photoCount = photos.length;
    const angleIncrement = (2 * Math.PI) / photoCount;

    photos.forEach((photo, index) => {
      const angle = index * angleIncrement;
      const x = centerX + radius * Math.cos(angle) - photo.offsetWidth / 2;
      const y = centerY + radius * Math.sin(angle) - photo.offsetHeight / 2;

      photo.style.left = `${x}px`;
      photo.style.top = `${y}px`;
    });
  }

  // 초기 사진 배치
  arrangePhotos();

  // 스크롤 이벤트 리스너 추가
  container.addEventListener("scroll", function () {
    const scrollFraction =
      container.scrollTop / (container.scrollHeight - container.clientHeight);

    photos.forEach((photo, index) => {
      // 사진이 더 천천히 돌게 하려면 각도를 크게 나누어줍니다.
      const angle = (scrollFraction * 360) / 5 + index * (360 / photos.length);
      const centerX = circle.offsetLeft + circle.offsetWidth / 2;
      const centerY = circle.offsetTop + circle.offsetHeight / 2;
      const radius = 250;
      const x =
        centerX +
        radius * Math.cos((angle * Math.PI) / 180) -
        photo.offsetWidth / 2;
      const y =
        centerY +
        radius * Math.sin((angle * Math.PI) / 180) -
        photo.offsetHeight / 2;

      photo.style.left = `${x}px`;
      photo.style.top = `${y}px`;

      // Adjust opacity based on angle
      const angleDiff = Math.abs((angle % 360) - 180);
      photo.style.opacity = angleDiff < 90 ? 1 : 0.5;
    });
  });

  // 창 크기 변경 시 사진들 재배치
  window.addEventListener("resize", arrangePhotos);
});
*/
/** 
document.addEventListener("DOMContentLoaded", function () {
  const circle = document.getElementById("circle");
  const photos = document.querySelectorAll(".photo");
  const container = document.querySelector(".container");

  // 초기 사진 배치 및 회전 설정
  arrangePhotos();

  // 스크롤 이벤트 리스너
  container.addEventListener("scroll", function () {
    // 스크롤 위치에 따른 회전 각도 계산
    const totalScrollHeight = 2000 - container.clientHeight; // 전체 스크롤 가능 높이
    const scrollFraction = container.scrollTop / totalScrollHeight; // 스크롤 위치의 비율
    const rotationAngle = scrollFraction * 360; // 360도를 한 바퀴로 설정

    // 각 사진들에게 회전 애니메이션 적용
    photos.forEach((photo, index) => {
      const angle = rotationAngle + index * (360 / photos.length);
      const centerX = circle.offsetLeft + circle.offsetWidth / 2;
      const centerY = circle.offsetTop + circle.offsetHeight / 2;
      const radius = 220;
      const x =
        centerX +
        radius * Math.cos((angle * Math.PI) / 180) -
        photo.offsetWidth / 2;
      const y =
        centerY +
        radius * Math.sin((angle * Math.PI) / 180) -
        photo.offsetHeight / 2;

      photo.style.left = `${x}px`;
      photo.style.top = `${y}px`;

      // Adjust opacity based on angle
      const angleDiff = Math.abs((angle % 360) - 180);
      photo.style.opacity = angleDiff < 90 ? 1 : 0.5;
    });
  });

  // 창 크기 변경 시 사진들 재배치
  window.addEventListener("resize", arrangePhotos);

  // 사진들을 원 주위에 배치하고 회전하는 함수
  function arrangePhotos() {
    const centerX = circle.offsetLeft + circle.offsetWidth / 2;
    const centerY = circle.offsetTop + circle.offsetHeight / 2;
    const radius = 220;
    const photoCount = photos.length;
    const angleIncrement = (2 * Math.PI) / photoCount;

    photos.forEach((photo, index) => {
      const angle = index * angleIncrement;
      const x = centerX + radius * Math.cos(angle) - photo.offsetWidth / 2;
      const y = centerY + radius * Math.sin(angle) - photo.offsetHeight / 2;
      photo.style.left = `${x}px`;
      photo.style.top = `${y}px`;
    });
  }
});
*/
/**
let slideWidth = 900;
const ul = document.querySelector(".mainlist");
const firstItemClone = ul.firstElementChild.cloneNode(true); // 첫번째 슬라이드 복사하기
ul.appendChild(firstItemClone); // 맨 뒤에 첫번째 슬라이드 추가하기

function move() {
  let curIndex = 0;

  setInterval(function () {
    ul.style.transition = "10s"; // 0.2초동안 슬라이드 이동
    ul.style.transform =
      "translate3d(-" + slideWidth * (curIndex + 1) + "px, 0px, 0px)";

    curIndex++;

    if (curIndex === 5) {
      // 마지막 복사본 슬라이드가 자리잡자마자 (200ms 후) 원래는 1초 후에 두번째 슬라이드로 이동해야 하지만 그전에 재빠르게(200ms 후) 트랜지션 효과를 끄고 첫번째 슬라이드로 이동함
      setTimeout(function () {
        ul.style.transition = "0s";
        ul.style.transform = "translate3d(0px, 0px, 0px)";
      }, 201);
      curIndex = 0;
    }
  }, 6000); // 1초동안 슬라이드 정지
}

document.addEventListener("DOMContentLoaded", function () {
  move();
});



let pages = 0; //현재 인덱스 번호
let positionValue = 0; //images 위치값
const DIV_WIDTH = 900; //한번 이동 시 IMAGE_WIDTH만큼 이동한다.
//DOM
const backBtn = document.querySelector(".back");
const nextBtn = document.querySelector(".next");
const images = document.querySelector(".mainlist");

function next() {
  if (pages < 2) {
    backBtn.removeAttribute("disabled"); //뒤로 이동해 더이상 disabled가 아니여서 속성을 삭제한다.
    positionValue -= IMAGE_WIDTH; //IMAGE_WIDTH의 증감을 positionValue에 저장한다.
    images.style.transform = `translateX(${positionValue}px)`;
    //x축으로 positionValue만큼의 px을 이동한다.
    pages += 1; //다음 페이지로 이동해서 pages를 1증가 시킨다.
  }
  if (pages === 2) {
    //
    nextBtn.setAttribute("disabled", "true"); //마지막 장일 때 next버튼이 disabled된다.
  }
}

function back() {
  if (pages > 0) {
    nextBtn.removeAttribute("disabled");
    positionValue += IMAGE_WIDTH;
    images.style.transform = `translateX(${positionValue}px)`;
    pages -= 1; //이전 페이지로 이동해서 pages를 1감소 시킨다.
  }
  if (pages === 0) {
    backBtn.setAttribute("disabled", "true"); //마지막 장일 때 back버튼이 disabled된다.
  }
}

function init() {
  //초기 화면 상태
  backBtn.setAttribute("disabled", "true"); //속성이 disabled가 된다.
  backBtn.addEventListener("click", back); //클릭시 다음으로 이동한다.
  nextBtn.addEventListener("click", next); //클릭시 이전으로 이동한다.
}
init();

*/

let btn = document.querySelectorAll("button");
let 슬라이드 = document.querySelectorAll(".container .mainlist");
console.log(슬라이드);

console.log(btn);

btn.forEach((btnEl) => {
  btnEl.addEventListener("click", () => {
    render(btnEl);
    console.log(btnEl);
  });
});

function render(btnEl) {
  슬라이드.forEach((divEl) => {
    if (btnEl.id == 1) {
      divEl.style.transform = "translatey(0)";
    } else if (btnEl.id == 2) {
      divEl.style.transform = "translatey(-500px)";
    } else {
      divEl.style.transform = "translatey(-1000px)";
    }
  });
}
