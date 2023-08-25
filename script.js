document.addEventListener("DOMContentLoaded", function() {
  // Set the target time (12:00 AM)
  const targetTime = new Date();
  targetTime.setHours(0);
  targetTime.setMinutes(0);
  targetTime.setSeconds(0);

  // Calculate the time until the target time
  const now = new Date();
  const timeUntilTarget = targetTime - now;

  if (timeUntilTarget > 0) {
    setTimeout(function() {
      const messageContainer = document.querySelector(".message");
      messageContainer.style.display = "block";
    }, timeUntilTarget);
  }
});
