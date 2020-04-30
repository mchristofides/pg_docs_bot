var url = new URL(document.location);
var redirectedURL = decodeURIComponent(url.searchParams.get('redirectedURL'));
if (redirectedURL !== 'null') { 
    var hover = document.createElement('Hover');
    hover.innerHTML = `<div style="font-size: 14px;color: #0D0A0B;position: fixed;bottom: 30px;right: 30px;padding: 20px 20px 20px 20px;max-width: 300px;background: #BBCED9;border-radius: 5px;z-index: 100;box-shadow: 5px 5px 5px rgba(0,0,0,0.2)">Redirected by pg_docs_bot from: <a href="${redirectedURL}" style="color: #336791;"><u>${redirectedURL}</u></a></div>`;
    document.body.appendChild(hover);
};
