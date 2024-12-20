var middleContent = document.querySelector("body > main > div:nth-child(3)");
    if(middleContent) {
      var middleContentDiv = document.createElement('div');
      middleContentDiv.id = 'middle-content';

      var middlePage1DesktopDiv = document.createElement('div');
      middlePage1DesktopDiv.id = 'r7_middle';

      
      middleContentDiv.appendChild(middlePage1DesktopDiv);
      middleContent.insertAdjacentElement("afterend", middleContentDiv);
  }else {
    console.log("caminho não encontrado!");
  }