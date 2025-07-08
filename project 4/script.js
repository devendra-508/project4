let currentStep = 1;
const totalSteps = 4;

const steps = document.querySelectorAll(".form-step");
const sideSteps = document.querySelectorAll(".sidebar .step");

const nextBtn = document.getElementById("nextBtn");

function showStep(step) {
  steps.forEach((s) => s.classList.remove("active"));
  sideSteps.forEach((s) => s.classList.remove("active"));

  document.querySelector(`.form-step[data-step="${step}"]`).classList.add("active");
  document.querySelector(`.sidebar .step[data-step="${step}"]`).classList.add("active");

  nextBtn.textContent = step === totalSteps ? "Submit" : "Next Step";
}

nextBtn.addEventListener("click", () => {
  if (currentStep < totalSteps) {
    currentStep++;
    showStep(currentStep);
  } else {
    alert("Form submitted!");
  }
});
