function toggleBtn1() {
  // 토글 할 버튼 선택 (btn1)
  var btn1 = document.getElementsByClassName("사진");

  // btn1 숨기기 (display: none)
  for (var i = 0; i < btn1.length; i++) {
    if (btn1[i].style.display !== "none") {
      btn1[i].style.display = "none";
    }
    // btn` 보이기 (display: block)
    else {
      btn1[i].style.display = "block";
    }
  }
}

function toggleBtn2() {
  // 토글 할 버튼 선택 (btn1)
  var btn2 = document.getElementsByClassName("설명");

  // btn1 숨기기 (display: none)
  for (var i = 0; i < btn2.length; i++) {
    if (btn2[i].style.display !== "none") {
      btn2[i].style.display = "none";
    }
    // btn` 보이기 (display: block)
    else {
      btn2[i].style.display = "block";
    }
  }
}

function toggleBtn3() {
  // 토글 할 버튼 선택 (btn1)
  var btn3 = document.getElementsByClassName("카톡창");

  // btn1 숨기기 (display: none)
  for (var i = 0; i < btn3.length; i++) {
    if (btn3[i].style.display !== "none") {
      btn3[i].style.display = "none";
    }
    // btn` 보이기 (display: block)
    else {
      btn3[i].style.display = "block";
    }
  }
}

function toggleBtn4() {
  // 토글 할 버튼 선택 (btn1)
  var btn4 = document.getElementsByClassName("버튼");

  // btn1 숨기기 (display: none)
  for (var i = 0; i < btn4.length; i++) {
    if (btn4[i].style.display !== "none") {
      btn4[i].style.display = "none";
    }
    // btn` 보이기 (display: block)
    else {
      btn4[i].style.display = "block";
    }
  }
}

let offsetX,
  offsetY,
  isDragging = false;

function startDragging(event) {
  isDragging = true;
  let target = event.target;
  if (target.classList.contains("draggable")) {
    offsetX = event.clientX - target.getBoundingClientRect().left;
    offsetY = event.clientY - target.getBoundingClientRect().top;
  }
}

function dragging(event) {
  if (isDragging) {
    event.preventDefault();
    let target = event.target;
    if (target.classList.contains("draggable")) {
      let container = document.getElementById("사진");
      let x = event.clientX - offsetX - container.getBoundingClientRect().left;
      let y = event.clientY - offsetY - container.getBoundingClientRect().top;
      target.style.left = x + "px";
      target.style.top = y + "px";
    }
  }
}

function stopDragging(event) {
  isDragging = false;
}
