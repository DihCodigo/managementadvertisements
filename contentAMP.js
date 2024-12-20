console.log("Olá Mundo! Console para AMP.");

var adsContainer = document.getElementById('ads');

if (adsContainer) {
    console.log("Div 'ads' encontrada. Adicionando o <amp-ad>...");

    var ampAd = document.createElement('amp-ad');
    ampAd.setAttribute('width', '320');
    ampAd.setAttribute('height', '50');
    ampAd.setAttribute('type', 'doubleclick');
    ampAd.setAttribute('data-slot', '/7542/parceiros/amomeupet');
    ampAd.setAttribute('data-multi-size', '320x50');
    ampAd.setAttribute('data-lazy-fetch', 'true');
    ampAd.setAttribute('data-loading-strategy', '1');
    ampAd.setAttribute('data-enable-refresh', '45');
    
    adsContainer.appendChild(ampAd);

    console.log("<amp-ad> adicionado com sucesso.");
} else {
    console.log("Div 'ads' não encontrada.");
}
