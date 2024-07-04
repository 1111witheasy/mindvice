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

//설정창 > 홈, 메세지 버튼
function toggleBtn4() {
  // 토글 할 버튼 선택 (btn1)
  var btn4 = document.getElementById("홈");

  // btn1 숨기기 (display: none)
  if (btn4.style.display !== "none") {
    btn4.style.display = "none";
  }
  // btn` 보이기 (display: block)
  else {
    btn4.style.display = "block";
  }
}

function toggleBtn5() {
  // 토글 할 버튼 선택 (btn1)
  var button1 = document.getElementById("vj");

  // btn1 숨기기 (display: none)
  if (button1.style.display !== "none") {
    button1.style.display = "none";
  }
  // btn` 보이기 (display: block)
  else {
    button1.style.display = "block";
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

function toggleBtnscroll1() {
  var slide = document.getElementById("uu");
  slide.style.top = "0px";
}

function toggleBtnscroll2() {
  var slide = document.getElementById("uu");
  slide.style.top = "-560px";
}

function toggleBtnscroll3() {
  var slide = document.getElementById("uu");
  slide.style.top = "-1120px";
}

function toggleBtnscroll4() {
  var slide = document.getElementById("uu");
  slide.style.top = "-1680px";
}

function toggleBtnscroll5() {
  var slide = document.getElementById("uu");
  slide.style.top = "-2240px";
}

/**
function toggleBtn5() {
  // 토글 할 버튼 선택 (btn1)
  var button1 = document.getElementById("설정");

  // btn1 숨기기 (display: none)
  if (button1.style.display !== "none") {
    button1.style.display = "none";
  }
  // btn` 보이기 (display: block)
  else {
    button1.style.display = "block";
  }
}
*/

function toggleBtnevent1() {
  var vj = document.getElementsByClassName("부적22");
  var one = document.getElementById("어변성룡도3d");
  var onevj = document.getElementById("어변성룡도부적메세지");
  for (var i = 0; i < vj.length; i++) {
    if (vj[i].style.display !== "none") {
      vj[i].style.display = "block";
      one.style.display = "block";
      onevj.style.display = "block";
    }
  }
}

function toggleBtnevent2() {
  var vj = document.getElementsByClassName("부적22");
  var two = document.getElementById("화조도3d");
  var twovj = document.getElementById("화조도부적메세지");
  for (var i = 0; i < vj.length; i++) {
    if (vj[i].style.display !== "none") {
      vj[i].style.display = "block";
      two.style.display = "block";
      twovj.style.display = "block";
    }
  }
}

function toggleBtnevent3() {
  var vj = document.getElementsByClassName("부적22");
  var three = document.getElementById("호작도3d");
  var threevj = document.getElementById("호작도부적메세지");
  for (var i = 0; i < vj.length; i++) {
    if (vj[i].style.display !== "none") {
      vj[i].style.display = "block";
      three.style.display = "block";
      threevj.style.display = "block";
    }
  }
}
function toggleBtnevent4() {
  var vj = document.getElementsByClassName("부적22");
  var four = document.getElementById("십장생도3d");
  var fourvj = document.getElementById("십장생도부적메세지");
  for (var i = 0; i < vj.length; i++) {
    if (vj[i].style.display !== "none") {
      vj[i].style.display = "block";
      four.style.display = "block";
      fourvj.style.display = "block";
    }
  }
}
function toggleBtnevent5() {
  var vj = document.getElementsByClassName("부적22");
  var five = document.getElementById("책가도3d");
  var fivevj = document.getElementById("책가도부적메세지");
  for (var i = 0; i < vj.length; i++) {
    if (vj[i].style.display !== "none") {
      vj[i].style.display = "block";
      five.style.display = "block";
      fivevj.style.display = "block";
    }
  }
}
