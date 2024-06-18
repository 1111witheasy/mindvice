document.addEventListener("DOMContentLoaded", function () {
  const circle = document.getElementById("circle");
  const photos = document.querySelectorAll(".illustps");
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

  // 사진들을 원 주위에 배치하고 회전하는 함수
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
});

/**
document.addEventListener("DOMContentLoaded"),
  function () {
    const container = document.querySelector(".container");

    function scrollRotate() {
      //제발 스크롤할 때 이미지 회전하게 해주세요
      const container = document.querySelector(".container");
      let image = document.querySelector(".illustps");
      for (var i = 0; i < image.length; i++) {
        image[i].style.transform = "rotate(" + container.scrollY / 7 + "deg)";
      }
    }
  };

$(".container").scroll(function () {
  var scrollTop = $(".container").scrollTop();
  var degrees = scrollTop / 5;
  $(".illustps").css(("transform", "rotate(" + degrees + "deg)"));
});
*/
function toggleBtn1() {
  // 토글 할 버튼 선택 (btn1)
  var btn1 = document.getElementById("부적");

  // btn1 숨기기 (display: none)
  if (btn1.style.display !== "none") {
    btn1.style.display = "none";
  }
  // btn` 보이기 (display: block)
  else {
    btn1.style.display = "block";
  }
}
