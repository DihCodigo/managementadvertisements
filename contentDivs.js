var middleContent = document.querySelector("body > main > section.featured-page-section.section-tempo");
    if(middleContent) {
      var middleContentDiv = document.createElement('div');
      middleContentDiv.id = 'middle-content';

      var middlePage1DesktopDiv = document.createElement('div');
      middlePage1DesktopDiv.id = 'middle-page-1-desktop';

      var middlePage1MobileDiv = document.createElement('div');
      middlePage1MobileDiv.id = 'middle-page-1-mobile';
      
      middleContentDiv.appendChild(middlePage1DesktopDiv);
      middleContentDiv.appendChild(middlePage1MobileDiv);
      middleContent.insertAdjacentElement("beforebegin", middleContentDiv);
  }else {
    console.log("caminho não encontrado!");
  }