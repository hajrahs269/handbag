document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".checkout-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const cardNumber = form.querySelector('input[name="cardnumber"]').value.trim();
    const expiry = form.querySelector('input[name="expiry"]').value.trim();
    const cvv = form.querySelector('input[name="cvv"]').value.trim();

    if (cardNumber.length < 13 || cardNumber.length > 19 || !/^\d+$/.test(cardNumber)) {
      alert("Please enter a valid card number.");
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      alert("Expiry must be in MM/YY format.");
      return;
    }

    if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
      alert("CVV must be a 3-digit number.");
      return;
    }

    alert("Order placed successfully!");
    form.reset();
  });
});