
  function fpScrollRight() {
    document.getElementById('fp-carousel').scrollBy({ left: 300, behavior: 'smooth' });
  }
  document.querySelectorAll('.fp-filter-button').forEach(button => {
      button.addEventListener('click', function (e) {
        const dropdown = this.nextElementSibling;
        document.querySelectorAll('.fp-filter-dropdown').forEach(menu => {
          if (menu !== dropdown) menu.style.display = 'none';
        });
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      });
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.fp-filter-group')) {
        document.querySelectorAll('.fp-filter-dropdown').forEach(menu => {
          menu.style.display = 'none';
        });
      }
    });

      document.addEventListener("DOMContentLoaded", function () {
    const thumbs = document.querySelectorAll('.fp-thumb');
    
    if (thumbs.length > 0) {
      thumbs.forEach(img => {
        const original = img.src;
        const hover = img.getAttribute('data-hover');
        
        if (hover) {
          img.addEventListener('mouseover', () => img.src = hover);
          img.addEventListener('mouseout', () => img.src = original);
        }
      });
    }
  });

