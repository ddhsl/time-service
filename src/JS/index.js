// 모달 여닫기
const goToPractice = document.querySelector(".goToPractice");
const modal = document.querySelector("dialog");
const closeModal = document.querySelector(".closeModal");

goToPractice.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

// 시간계산 결과 띄우기
const result = document.querySelector(".result");
const practice = document.querySelector(".practice");
const training = document.querySelector(".training");
const calculator = document.querySelector(".calculator");
const expertInput = document.querySelector("#expert");
const timeInput = document.querySelector("#time");
const expertField = document.querySelector(".expertField");
const calculatedDays = document.querySelector(".calculatedDays");

// 입력필드 유효성 검사
calculator.addEventListener("click", () => {
  if (expertInput.value.trim().length > 10) {
    alert("분야는 10자 이하로 입력해주세요.");
    return;
  }
  const dailyHours = Number(timeInput.value);
  if (isNaN(dailyHours) || dailyHours > 24 || dailyHours <= 0) {
    alert("시간은 1부터 24 사이의 숫자만 입력 가능합니다.");
    return;
  }

  // 계산 및 결과 표시
  if (expertInput.value.trim() !== "" && timeInput.value.trim() !== "") {
    const totalDaysValue = Math.ceil(10000 / dailyHours); // 계산된 값을 다른 변수로 저장
    training.style.display = "block";
    expertField.innerHTML = `${expertInput.value}`;
    calculatedDays.innerHTML = `${totalDaysValue}`; // calculatedDays를 업데이트
  } else {
    alert("입력 필드는 필수입니다.");
  }
});

//공유하기
const shareButton = document.querySelector(".shareBtn");
shareButton.addEventListener("click", () => {
  const currentUrl = window.location.href; // 현재 페이지의 URL 가져오기
  // URL을 클립보드에 복사
  navigator.clipboard
    .writeText(currentUrl)
    .then(() => {
      alert("URL이 복사되었습니다!");
    })
    .catch((error) => {
      alert("URL 복사에 실패했습니다. 다시 시도해 주세요.");
    });
});
