function showPage(pageId) {
    // 1. Get all pages and remove active class
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none';
    });
    
    // 2. Get all nav items and remove active-link highlight
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    // 3. Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
        // Delay to allow 'display: block' to register before animation starts
        setTimeout(() => {
            selectedPage.classList.add('active');
        }, 50);
    }
    
    // 4. Highlight the clicked sidebar icon
    // Using a selector to find the anchor tag that called this ID
    const activeLink = document.querySelector(`[onclick="showPage('${pageId}')"]`);
    if (activeLink) activeLink.classList.add('active');
    
    // 5. Update URL hash for browser history
    window.location.hash = pageId;
}

// Handle browser "Back" button and initial load
window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    showPage(hash);
});

// 1. AUTO-REDIRECT LOGIC
// Get the name from storage
/**const savedName = localStorage.getItem('firstName');
  
  // Check if name exists and isn't just empty spaces
  if (savedName && savedName.trim() !== "") {
      // Use replace so they can't click "back" to this login screen
      window.location.replace('resources.html');
  }
  
  // 2. FORM SUBMISSION LOGIC
  // Matches your HTML id="nameform" (all lowercase)
  const nameForm = document.getElementById('nameform');
  
  if (nameForm) {
      nameForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get value from the input with id="first"
          const firstInput = document.getElementById('first').value;
          
          if (firstInput.trim() !== "") {
              localStorage.setItem('firstName', firstInput);
              window.location.href = 'resources.html';
          } else {
              alert("Please enter your name to continue your journey!");
          }
      });
  }
  
  // 3. SIDEBAR NAVIGATION LOGIC*/
