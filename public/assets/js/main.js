  function fpScrollRight() {
    document.getElementById('fp-carousel').scrollBy({ left: 300, behavior: 'smooth' });
  }

   let sliderIndex = 0;
  const totalSlides = $('.slider-slide').length;
  const autoplayInterval = 5000; // 5 seconds

  function updateSlider(index) {
    const slideWidth = $('.slider-slide').outerWidth();
    $('.slider-track').css('transform', 'translateX(' + (-index * slideWidth) + 'px)');
    $('.slider-dot').removeClass('active').eq(index).addClass('active');
  }

  $('#slider-next').click(function () {
    sliderIndex = (sliderIndex + 1) % totalSlides;
    updateSlider(sliderIndex);
  });

  $('#slider-prev').click(function () {
    sliderIndex = (sliderIndex - 1 + totalSlides) % totalSlides;
    updateSlider(sliderIndex);
  });

  // Autoplay Function
  function startAutoplay() {
    setInterval(() => {
      sliderIndex = (sliderIndex + 1) % totalSlides;
      updateSlider(sliderIndex);
    }, autoplayInterval);
  }

  $(document).ready(function () {
    startAutoplay();
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
