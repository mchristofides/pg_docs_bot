var test123 = 'testNotice';
browser.storage.local.get("test123").then( function (value) {
    test123 = value.test123;
    resolve(test123);
});
var hover = document.createElement('Hover');
hover.innerHTML = `<div style="font-size: 14px;color: #0D0A0B;position: fixed;bottom: 30px;right: 30px;padding: 20px 20px 20px 20px;max-width: 300px;background: #BBCED9;border-radius: 5px;z-index: 100;box-shadow: 5px 5px 5px rgba(0,0,0,0.2)">You have <a href="https://github.com/mchristofides/pg_docs_bot/" target="_blank" style="color: #336791;"><u>pg_docs_bot</u></a> installed.<br/>The last page redirected from was: ${test123} </div>`;
document.body.appendChild(hover);
