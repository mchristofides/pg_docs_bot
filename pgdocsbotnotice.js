var url = new URL(document.location);
var redirectedURL = decodeURIComponent(url.searchParams.get('pg-docs-bot-redirected'));
if (redirectedURL) {
    var redirectedURL = new URL(redirectedURL);
}
var redirectedPath = redirectedURL.pathname;
var redirectedVersion = redirectedPath.split('/');
console.log(`${redirectedVersion[2]}`);
if (redirectedURL !== 'null') { 
    var hover = document.createElement('Hover');
    hover.innerHTML = `<div id="pgdocsbotHover" style="font-size: 14px;color: #0D0A0B;position: fixed;bottom: 30px;right: 30px;padding: 15px 30px 15px 15px;max-width: 350px;background: #BBCED9;border-radius: 5px;z-index: 100;box-shadow: 5px 5px 5px rgba(0,0,0,0.2)">Redirected by pg_docs_bot from: <a href="${redirectedURL}"><u>${redirectedVersion[2]}</u></a><button type="button" id="closeNotice" style="background: none;-webkit-appearance: none;border: none;position: absolute;right: 5px;top: 5px;line-height: 10px;color: #2c3e50;font-size: 18px;padding: 5px;cursor:pointer;">×</button></div>`;
    document.body.appendChild(hover);
    function closeButton () {
        document.getElementById("pgdocsbotHover").remove()
      }
    document.getElementById("closeNotice").addEventListener("click", closeButton); 
};
