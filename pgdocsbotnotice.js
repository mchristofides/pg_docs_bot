function showRedirectNotice() {
  const url = new URL(document.location);
  const redirectedURLParam = url.searchParams.get('pg-docs-bot-redirected');  
  // Avoid errors when not redirecting
  if (redirectedURLParam) {
    try {
      const redirectedURL = new URL(decodeURIComponent(redirectedURLParam));
      const redirectedPath = redirectedURL.pathname;
      const redirectedVersion = redirectedPath.split('/');
      
      if (String(redirectedURL).startsWith('https://www.postgresql.org/docs/')) { 
        const hover = document.createElement('div');
        hover.id = 'pgdocsbotHover';
        hover.style = `font-size: 14px;color: #0D0A0B;position: fixed;bottom: 30px;right: 30px;padding: 15px 30px 15px 15px;max-width: 350px;background: #BBCED9;border-radius: 5px;z-index: 100;box-shadow: 5px 5px 5px rgba(0,0,0,0.2)`;
        hover.innerHTML = `Redirected by pg_docs_bot from: <a href="${redirectedURL}"><u>${redirectedVersion[2]}</u></a><button type="button" id="closeNotice" style="background: none;-webkit-appearance: none;border: none;position: absolute;right: 5px;top: 5px;line-height: 10px;color: #2c3e50;font-size: 18px;padding: 5px;cursor:pointer;">×</button>`;
        document.body.appendChild(hover);
        document.getElementById("closeNotice").addEventListener("click", function() {
          document.getElementById("pgdocsbotHover").remove();
        });
      }
    } catch (e) {
      // If there's an error, log it and don't show a notice
      console.log('pg_docs_bot: Error processing redirected URL', e);
    }
  }
}
// Only run when the DOM is finished loading
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', showRedirectNotice);
} else {
  showRedirectNotice();
}