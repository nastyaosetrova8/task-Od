const elements = {
    googleImage: document.querySelector('#google-img'),
    oddityLink: document.querySelector('#oddity-link'),
    oddityIcon: document.querySelector('#oddity-icon'),
    changeLogoBtn: document.querySelector('.change-logo-btn'),
  };
  
  elements.changeLogoBtn.addEventListener('click', changeLogo);
  
  function changeLogo() {
    elements.googleImage.style.display = 'none';
    elements.oddityLink.style.display = 'block';
    elements.oddityIcon.style.display = 'block';
  }
  