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
    else if (/6\.3|6\.4|6\.5|7\.0|7\.1|7\.2|7\.3|7\.4|8\.0|8\.1|8\.2|8\.3|8\.4/.test(details.url)) {
        //Don't redirect super old versions that are rarely indexed and sometimes deprecated
        return {cancel: false};
    }
    else if (/recovery-config|app-createlang|app-droplang/.test(details.url)) {
        //Avoid 404s by not redirecting deprecated features for now
        return {cancel: false};
    }
    else if (/manuals|faq|online-resources|books|release/.test(details.url)) {
        //Avoid redirecting these non-versioned docs pages
        return {cancel: false};
    } 
    else if (details.url === 'https://www.postgresql.org/docs/') {
        //Avoid infinite redirect on root docs page
        return {cancel: false};
    } 
    else {
        console.log('pg_docs_bot: checking link');
        details.url = details.url.replace(/current|9\.0|9\.1|9\.2|9\.3|9\.4|9\.5|9\.6|10|11|12|13/, pgdocsversion);
        return {redirectUrl: details.url};
    }
  };

browser.webRequest.onBeforeRequest.addListener(redirectdocs,{urls: ['https://www.postgresql.org/docs/*']},['blocking']);
