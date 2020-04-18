function redirectdocs(details) {
    var pgdocsversion = 'current';
    if (details.originUrl.startsWith('https://www.postgresql.org/')) {
        console.log('pg_docs_bot: do nothing on postgresql.org');
        return {cancel: false};
    } 
    else if (details.url.includes(pgdocsversion)) {
        console.log(`pg_docs_bot: directing to ${pgdocsversion}`);
        return {cancel: false};
    } 
    else {
        console.log('pg_docs_bot: checking link');
        details.url = details.url.replace(/current|7\.2|7\.3|7\.4|8\.0|8\.1|8\.2|8\.3|8\.4|9\.0|9\.1|9\.2|9\.3|9\.4|9\.5|9\.6|10|11|12|13/, pgdocsversion);
        return {redirectUrl: details.url};
    }
  };

browser.webRequest.onBeforeRequest.addListener(redirectdocs,{urls: ['https://www.postgresql.org/docs/*']},['blocking']);
