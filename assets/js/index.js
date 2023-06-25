function changeImage() {
    let displayImage = document.getElementById('image1');
    if (displayImage.src.match('assets/images/banner1.png')) {
      displayImage.src = 'assets/images/new updates.png';
    } else {
      displayImage.src = 'assets/images/banner1.png';
    }
  }
  