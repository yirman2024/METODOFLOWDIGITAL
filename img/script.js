
  
    // Año dinámico
    document.getElementById("year").textContent = new Date().getFullYear();

    // Countdown: 3 días desde que la persona entra
    const countdownTarget = new Date();
    countdownTarget.setDate(countdownTarget.getDate() + 3);

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = countdownTarget.getTime() - now;

      if (distance <= 0) {
        document.getElementById("cd-days").textContent = "00";
        document.getElementById("cd-hours").textContent = "00";
        document.getElementById("cd-minutes").textContent = "00";
        document.getElementById("cd-seconds").textContent = "00";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      document.getElementById("cd-days").textContent = String(days).padStart(2, "0");
      document.getElementById("cd-hours").textContent = String(hours).padStart(2, "0");
      document.getElementById("cd-minutes").textContent = String(minutes).padStart(2, "0");
      document.getElementById("cd-seconds").textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
