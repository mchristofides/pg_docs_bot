function redirectdocs(details) {
    var pgdocsversion = 'docs\/current\/';
    if (details.originUrl.startsWith('https://www.postgresql.org/')) {
        //Do not redirect when coming from postgresql.org, to allow people to deliberately view older versions
        return {cancel: false};
    }
    else if (/recovery-config|app-createlang|app-droplang/.test(details.url)) {
        //Avoid 404s by not redirecting deprecated features for now
        return {cancel: false};
    }
    else if (/\/release/.test(details.url)) {
        //Avoid redirecting release pages that sometimes redirect from current back to their own version, and seem better to not redirect in any case
        return {cancel: false};
    }
    else { 
        //Replace version numbers 9+ as older rarely indexed and several now deprecated
        var redirectUrl = details.url.replace(/docs\/(current\/|9\/|9\.1\/|9\.2\/|9\.3\/|9\.4\/|9\.5\/|9\.6\/|10\/|11\/|12\/|13\/)/, pgdocsversion); 
        if (redirectUrl === details.url) {
            return {cancel: false};
        } 
        else { 
            var url = new URL(redirectUrl);
            url.searchParams.append('pg-docs-bot-redirected', details.url);
            console.log(`pg_docs_bot: redirecting to ${pgdocsversion}`); 
            return {redirectUrl: encodeURI(url)};
        }
    }
  };

browser.webRequest.onBeforeRequest.addListener(redirectdocs,{urls: ['https://www.postgresql.org/docs/*']},['blocking']);
