// assets/js/main.js
import Alpine from 'alpinejs';

document.addEventListener('alpine:init', () => {
  window.Alpine = Alpine; // Ensure Alpine is globally available

  Alpine.data('productCarousel', () => ({
    images: [], // Initialize empty
    current: 0,

    init() {
      // 'this.$el' refers to the element with x-data
      // Read the JSON string from data-images
      const imagesJsonString = this.$el.dataset.images;
      if (imagesJsonString) {
        try {
          this.images = JSON.parse(imagesJsonString);
        } catch (e) {
          console.error("Error parsing images JSON:", e, imagesJsonString);
          this.images = []; // Fallback to empty array on error
        }
      }
      // Optional: Auto-advance (if needed)
      // setInterval(() => {
      //   this.next();
      // }, 3000);
    },

    next() {
      this.current = (this.current + 1) % this.images.length;
    },

    prev() {
      this.current = (this.current - 1 + this.images.length) % this.images.length;
    }
  }));
});

Alpine.start();