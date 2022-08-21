chrome.webRequest.onBeforeRequest.addListener(function(details){
    var pgdocsversion = 'docs\/current\/';
    //Firefox uses details.originUrl, Chrome uses details.initiator
    if (details.originUrl) {
        var origin = details.originUrl;
    }
    else {
        var origin = details.initiator;
    }
    if (origin.startsWith('https://www.postgresql.org')) {
        //Do not redirect when coming from postgresql.org, to allow people to deliberately view older versions
        return {cancel: false};
    }
    else if (/\/(archive-recovery-settings|recovery-target-settings|app-createlang|app-droplang|indexcost|inherit|manage|start-manage-db|failure|failure-disk-failed|programmer-client|developer|part-developer)\.html/.test(details.url)) {
        //Avoid 404s by not redirecting deprecated pages
        return {cancel: false};
    }
    else if (/\/release/.test(details.url)) {
        //Avoid redirecting release pages that sometimes redirect from current back to their own version, and seem better to not redirect in any case
        return {cancel: false};
    }
    else { 
        //Replace version numbers 7+ as notice now makes 404s less bad. Should probably also replace devel once people can set a default.
        var redirectUrl = details.url.replace(/docs\/(current\/|7|7\.0|7\.1|7\.2|7\.3|7\.4|8|8\.0|8\.1|8\.2|8\.3|8\.4|9|9\.0|9\.1|9\.2|9\.3|9\.4|9\.5|9\.6|10|11|12|13)\//, pgdocsversion); 
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
  }, {urls: ['https://www.postgresql.org/docs/*']},['blocking']);
