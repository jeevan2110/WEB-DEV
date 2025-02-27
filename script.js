const seats = document.querySelectorAll('.seat');
const selectedSeatsDisplay = document.getElementById('selectedSeats');
const bookButton = document.getElementById('bookButton');
const phoneModal = document.getElementById('phoneModal');
const phoneNumberInput = document.getElementById('phoneNumber');
const confirmBooking = document.getElementById('confirmBooking');

let selectedSeatsCount = 0;

// Toggle seat selection
seats.forEach((seat) => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
        updateSelectedSeats();
    });
});

// Update selected seats count
function updateSelectedSeats() {
    selectedSeatsCount = document.querySelectorAll('.seat.selected').length;
    selectedSeatsDisplay.textContent = `Selected Seats: ${selectedSeatsCount}`;
}

// Handle booking
bookButton.addEventListener('click', () => {
    if (selectedSeatsCount > 0) {
        phoneModal.style.display = 'flex';
    } else {
        alert('Please select at least one seat to book.');
    }
});

// Confirm booking and simulate message
confirmBooking.addEventListener('click', () => {
    const phoneNumber = phoneNumberInput.value;

    if (phoneNumber) {
        phoneModal.style.display = 'none';
        alert(`Booking confirmed for ${selectedSeatsCount} ticket(s). A message will be sent to ${phoneNumber}.`);
        // Here you can integrate SMS sending logic with a backend service like Twilio or Firebase.
    } else {
        alert('Please enter a valid phone number.');
    }
});
