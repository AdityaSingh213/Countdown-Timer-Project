let timer;

function startCountdown() {
  clearInterval(timer); // Clear existing timers

  const targetInput = document.getElementById("datetime").value;
  const targetTime = new Date(targetInput).getTime();

  if (!targetInput || isNaN(targetTime)) {
    alert("Please enter a valid future date and time.");
    return;
  }

  timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance <= 0) {
      clearInterval(timer);
      document.getElementById("timerDisplay").innerHTML = "00 Days 00 Hours 00 Minutes 00 Seconds";
      document.getElementById("message").textContent = "⏰ Time's up!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = formatNum(days);
    document.getElementById("hours").textContent = formatNum(hours);
    document.getElementById("minutes").textContent = formatNum(minutes);
    document.getElementById("seconds").textContent = formatNum(seconds);
    document.getElementById("message").textContent = "";
  }, 1000);
}

function formatNum(num) {
  return num < 10 ? "0" + num : num;
}
