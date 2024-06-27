/**
function toggleBtn1() {
  // 토글 할 버튼 선택 (btn1)
  var button1 = document.getElementById("부적");

  // btn1 숨기기 (display: none)
  if (button1.style.display !== "none") {
    button1.style.display = "none";
  }
  // btn` 보이기 (display: block)
  else {
    button1.style.display = "block";
  }
}

function toggleBtnscroll1() {
  var slide = document.getElementsByClassName("uu");
  slide.style.top = "top(0px)";
}

function toggleBtnscroll2() {
  var slide = document.getElementsByClassName("UU");
  slide.style.top = "top(-500px)";
}

function toggleBtnscroll3() {
  var slide = document.getElementsByClassName("UU");
  slide.style.top = "top(-1000px)";
}

function toggleBtnscroll4() {
  var slide = document.getElementsByClassName("UU");
  slide.style.top = "top(-1500px)";
}

function toggleBtnscroll5() {
  var slide = document.getElementsByClassName("mainlist");
  slide.style.top = "top(-2000px)";
}

/** 
let btn = document.getElementsByClassName("button");
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
    }
    if (btnEl.id == 2) {
      divEl.style.transform = "translatey(-500px)";
    }
    if (btnEl.id == 3) {
      divEl.style.transform = "translatey(-1000px)";
    }
    if (btnEl.id == 4) {
      divEl.style.transform = "translatey(-1500px)";
    } else {
      divEl.style.transform = "translatey(-2000px)";
    }
  });
}
*/

/**
  // 토글 할 버튼 선택 (btn1)
  let list = document.getElementsByClassName("mainlist");
  let btn = document.getElementsByClassName("button");

  // btn1 숨기기 (display: none)
  if (btn.id == 1) {
    list.style.top = "0px";
  }
  if (btn.id == 2) {
    list.style.top = "500px";
  }
  if (btn.id == 3) {
    list.style.top = "1000px";
  }
  if (btn.id == 4) {
    list.style.top = "1500px";
  } else {
    list.style.top = "2000px";
  }
}

let btn = document.getElementsByClassName("button");
let slide = document.getElementsByClassName("mainlist");

btn.forEach((btnEl) => {
  btnEl.addEventListener("click", () => {
    render(btnEl);
  });
});

function render(btnEl) {
  slide.forEach((divEl) => {
    if (btnEl.id == 1) {
      divEl.style.transform = "translatey(0)";
    }
    if (btnEl.id == 2) {
      divEl.style.transform = "translatey(-500px)";
    }
    if (btnEl.id == 3) {
      divEl.style.transform = "translatey(-1000px)";
    }
    if (btnEl.id == 4) {
      divEl.style.transform = "translatey(-1500px)";
    } else {
      divEl.style.transform = "translatey(-2000px)";
    }
  });
}
*/
