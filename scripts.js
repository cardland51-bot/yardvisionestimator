 <script>
    const input = document.getElementById('photoUpload');
    const canvas = document.getElementById('previewCanvas');
    const ctx = canvas.getContext('2d');

    input.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const img = new Image();
          img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
          }
          img.src = e.target.result;
        }
        reader.readAsDataURL(file);
      }
    });
  </script>
