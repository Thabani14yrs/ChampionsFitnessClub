// Hamburger navigation links
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked (for smooth mobile navigation)
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// display picture and click next or previous
let currentSlide = 0;
  const slides = document.querySelectorAll("#team .slide");

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  function changeSlide(step) {
    showSlide(currentSlide + step);
  }

  // Initialize
  showSlide(0);

// Shopping Champion's Fitness Club items 
let cart = {};

    function addToCart(product, price, sizeId) {
      const size = document.getElementById(sizeId).value;
      const key = product + " (" + size + ")";
      if (cart[key]) {
        cart[key].quantity += 1;
      } else {
        cart[key] = { price: price, quantity: 1 };
      }
      updateCart();
    }

    function removeFromCart(product) {
      for (let key in cart) {
        if (key.startsWith(product)) {
          if (cart[key].quantity > 1) {
            cart[key].quantity -= 1;
          } else {
            delete cart[key];
          }
          break;
        }
      }
      updateCart();
    }

    function updateCart() {
      const cartItems = document.getElementById("cart-items");
      cartItems.innerHTML = "";
      let total = 0;
      for (let key in cart) {
        const item = cart[key];
        total += item.price * item.quantity;
        cartItems.innerHTML += `<p>${key} x${item.quantity} = R${item.price * item.quantity}</p>`;
      }
      document.getElementById("total").textContent = total;
    }

    function buyNow() {
      if (Object.keys(cart).length === 0) {
        alert("Your cart is empty!");
      } else {
        alert("Thank you for your purchase!");
        cart = {};
        updateCart();
      }
    }

document.getElementById("gymForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Clear old errors
    document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");

    let valid = true;

    // Name Validation
    const name = document.getElementById("name").value.trim();
    if (name.length < 3) {
      document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
      valid = false;
    }

    // Email Validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email address.";
      valid = false;
    }

    // Phone Validation
    const phone = document.getElementById("phone").value.trim();
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
      valid = false;
    }

    // Gender Validation
    const gender = document.getElementById("gender").value;
    if (gender === "") {
      document.getElementById("genderError").textContent = "Please select gender.";
      valid = false;
    }

    // Goals Validation
    const goals = document.getElementById("goals").value;
    if (goals === "") {
      document.getElementById("goalsError").textContent = "Please select your goal.";
      valid = false;
    }

    // Payment Validation
    const payment = document.getElementById("payment").value;
    if (payment === "" || payment <= 0) {
      document.getElementById("paymentError").textContent = "Enter a valid payment amount.";
      valid = false;
    }

    // Show Success
    if (valid) {
      document.getElementById("successMsg").style.display = "block";
      setTimeout(() => {
        document.getElementById("successMsg").style.display = "none";
        document.getElementById("gymForm").reset();
      }, 3000);
    }
  });
