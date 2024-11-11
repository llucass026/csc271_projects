// Function to toggle the sticky header class
// This function adds a 'sticky' class to the header element when the page is scrolled down.
// The 'sticky' class can be used to apply specific styles to the header when the user scrolls.
function toggleStickyHeader() {
	const header = document.querySelector("header"); // Selects the header element
	window.addEventListener("scroll", () => {
	  // Adds or removes the 'sticky' class based on the scroll position
	  header.classList.toggle("sticky", window.scrollY > 0);
	});
  }
  
  // Function to toggle the mobile menu
  // This function toggles the appearance of the mobile menu when the menu icon is clicked.
  function toggleMobileMenu() {
	const menu = document.querySelector('#menu-icon'); // Selects the menu icon element
	const navlist = document.querySelector('.navlist'); // Selects the navigation list element
  
	// Toggles the 'bx-x' class on the menu icon and 'open' class on the navlist when the menu is clicked
	menu.onclick = () => {
	  menu.classList.toggle('bx-x');
	  navlist.classList.toggle('open');
	};
  
	// Ensures the mobile menu and icon reset when the page is scrolled
	window.onscroll = () => {
	  menu.classList.remove('bx-x');
	  navlist.classList.remove('open');
	};
  }
  
  // Function to reveal elements with ScrollReveal
  // This function initializes ScrollReveal and applies animation effects to specified elements.
  function revealElements() {
	const sr = ScrollReveal({
	  distance: '30px', // Distance the elements move when revealed
	  duration: 2600,   // Duration of the animation in milliseconds
	  reset: true       // Ensures that elements are revealed again if scrolled back into view
	});
  
	// Reveals the home text with a specific delay and animation origin
	sr.reveal('.home-text', { delay: 280, origin: 'bottom' });
  
	// Reveals other sections such as featured, CTA, and contact with a different delay
	sr.reveal('.featured,.cta,.new,.brand,.contact', { delay: 200, origin: 'bottom' });
  }
  


  // Function with parameters (e.g., function to calculate discounted price)
  // This function calculates the final price after applying a discount and logs the details.
  // Note: This function will be integrated once the pricing feature on the website is ready.
  function calculateDiscountedPrice(originalPrice, discountPercentage) {
	const discount = (originalPrice * discountPercentage) / 100; // Calculates the discount amount
	const finalPrice = originalPrice - discount; // Calculates the final price after discount
	console.log(`Original Price: $${originalPrice}, Discount: ${discountPercentage}%, Final Price: $${finalPrice}`);
	return finalPrice; // Returns the calculated final price
  }
  
  // Function that returns a value (e.g., total items in cart)
  // This function returns the number of items in a cart array.
  // Note: This function will be fully functional once the cart feature is implemented.
  function getTotalItemsInCart(cart) {
	return cart.length; // Returns the length of the cart array
  }
  
  // Call the functions to initialize the features on the site
  toggleStickyHeader(); // Initialize the sticky header functionality
  toggleMobileMenu(); // Initialize the mobile menu functionality
  revealElements(); // Initialize element reveal animations
  displayWelcomeMessage(); // Call the basic function to display a welcome message
  