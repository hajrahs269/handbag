// Thumbnail selection
const thumbnails = document.querySelectorAll(".prod-thumbnail");
const mainImage = document.getElementById("prod-mainDisplay");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    thumbnails.forEach(t => t.classList.remove("prod-active"));
    thumb.classList.add("prod-active");
    mainImage.src = thumb.src;
  });
});

// Wishlist toggle
const likesDisplay = document.getElementById("prod-likes");
let liked = false;



document.querySelectorAll('.prod-meta-accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const isActive = button.classList.contains('active');
    
    document.querySelectorAll('.prod-meta-accordion-header').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.prod-meta-accordion-content').forEach(content => content.style.display = 'none');
    
    if (!isActive) {
      button.classList.add('active');
      button.nextElementSibling.style.display = 'block';
    }
  });
});

const commentInput = document.getElementById('cmnt-input');
const sendButton = document.getElementById('cmnt-send');

commentInput.addEventListener('input', () => {
  if (commentInput.value.trim().length > 0) {
    sendButton.disabled = false;
    sendButton.style.cursor = 'pointer';
    sendButton.style.backgroundColor = '#000';
  } else {
    sendButton.disabled = true;
    sendButton.style.cursor = 'not-allowed';
    sendButton.style.backgroundColor = '#ccc';
  }
});

document.getElementById('cmnt-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Your comment has been submitted for review.");
  commentInput.value = '';
  sendButton.disabled = true;
  sendButton.style.cursor = 'not-allowed';
  sendButton.style.backgroundColor = '#ccc';
});

document.querySelector('.prod-add-to-bag').addEventListener('click', function () {
    // Show the "Added" message
    const msg = document.getElementById('added-msg');
    msg.style.display = 'block';

    // Wait 2 seconds, then redirect to cart page
    setTimeout(function () {
      window.location.href = 'cart.html'; // Change this to your actual cart page URL
    }, 2000);
  });