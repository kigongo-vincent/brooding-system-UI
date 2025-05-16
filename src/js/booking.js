// Booking modal logic
// Select all elements with id="open-booking-form"
const openBookingBtns = document.querySelectorAll("#open-booking-form");
const bookingModal = document.getElementById("booking-modal");
const closeBookingBtn = document.getElementById("close-booking-form");
const bookingForm = document.getElementById("booking-form");
const bookingSuccess = document.getElementById("booking-success");

// Add event listener to all open booking buttons
openBookingBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    bookingModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });
});

closeBookingBtn.addEventListener("click", () => {
  bookingModal.classList.add("hidden");
  document.body.style.overflow = "";
  bookingForm.reset();
  bookingSuccess.classList.add("hidden");
});

bookingModal.addEventListener("click", (e) => {
  if (e.target === bookingModal) {
    bookingModal.classList.add("hidden");
    document.body.style.overflow = "";
    bookingForm.reset();
    bookingSuccess.classList.add("hidden");
  }
});

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Here you would send the form data to your backend or email service
  bookingSuccess.classList.remove("hidden");
  setTimeout(() => {
    bookingModal.classList.add("hidden");
    document.body.style.overflow = "";
    bookingForm.reset();
    bookingSuccess.classList.add("hidden");
  }, 2000);
});
