console.log("Olá Mundo! Console para AMP.");

var adsContainer = document.getElementById('ads');
if (adsContainer) {
    console.log("Div 'ads' encontrada. Adicionando o <amp-ad>...");

    var ampAd = document.createElement('amp-ad');
    ampAd.setAttribute('width', '300');
    ampAd.setAttribute('height', '250');
    ampAd.setAttribute('type', 'doubleclick');
    ampAd.setAttribute('data-slot', '/7542/parceiros/amomeupet');
    ampAd.setAttribute('data-multi-size', '300x250');
    ampAd.setAttribute('data-lazy-fetch', 'true');
    ampAd.setAttribute('data-loading-strategy', '1');
    ampAd.setAttribute('data-enable-refresh', '45');
    
    adsContainer.appendChild(ampAd);

    console.log("<amp-ad> adicionado com sucesso.");
} else {
    console.log("Div 'ads' não encontrada.");
}

//////////////////////////

var adsContainer1 = document.getElementById('middle');
if (adsContainer1) {
    console.log("Div 'middle' encontrada. Adicionando o <amp-ad>...");

    var ampAd1 = document.createElement('amp-ad');
    ampAd1.setAttribute('width', '320');
    ampAd1.setAttribute('height', '50');
    ampAd1.setAttribute('type', 'doubleclick');
    ampAd1.setAttribute('data-slot', '/7542/parceiros/amomeupet');
    ampAd1.setAttribute('data-multi-size', '320x50');
    ampAd1.setAttribute('data-lazy-fetch', 'true');
    ampAd1.setAttribute('data-loading-strategy', '1');
    ampAd1.setAttribute('data-enable-refresh', '45');
    
    adsContainer1.appendChild(ampAd1);

    console.log("<amp-ad> adicionado com sucesso.");
} else {
    console.log("Div 'middle' não encontrada.");
}
