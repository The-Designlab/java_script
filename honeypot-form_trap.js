<script>
document.addEventListener("DOMContentLoaded", function() {
  // Grab the submit button and the honeypot field using their IDs
  const submitBtn = document.querySelector("#submit-btn");
  const honeypot = document.querySelector("#work-email");

  if (honeypot && submitBtn) {
    // Listen for any text being entered into the honeypot
    honeypot.addEventListener("input", function () {
      if (honeypot.value.trim() !== "") {
        // If the field has text, disable the submit button
        submitBtn.disabled = true;
      }
    });
  }
});
</script>
