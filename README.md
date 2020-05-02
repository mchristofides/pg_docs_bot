### Intro
pg_docs_bot is a browser extension for getting to the current Postgres docs by default.
* [Firefox addon](https://addons.mozilla.org/en-US/firefox/addon/pg_docs_bot/)
* [Chrome extension](https://chrome.google.com/webstore/detail/pgdocsbot/hkbfkapgdfedgidpfbhlogecohcnaeod?hl=en-GB)


### Benefits
When you search for Postgres documentation an old version is often indexed. Avoid the annoyance of having to click "Current" when you get there, or the frustration of having read the whole page before realising it was an old version!

### Fixing the root causes
Naturally, this extension doesn't help solve the root cause(s) of this issue.

There have been at least two ([first](https://www.postgresql.org/message-id/flat/38c68b83-30ae-c039-acd0-9e853997edc4@2ndquadrant.com), [second](https://www.postgresql.org/message-id/flat/CALWCfdKLed3RJVa8AtTqYw1GzjRbGzeZL7G4TxVA8vEmLxm96g%40mail.gmail.com)) good conversations on the mailing lists about how to teach the search engines which version to link to. Please continue to encourage people to link to the "current" version around the web, which will gradually help.

### Features
* Redirects links to the "current" version
* After redirecting, displays a notice (including a link to the page you were redirected from)
* Avoids redirecting some deprecated features (to avoid 404s)
* Doesn't redirect when coming from another page in the docs, so you can still check old versions (the main problem with generic redirectors)

...that's it for now.

### Limitations
* Works for the English language docs only, for now
* Works for version 9.0 links upwards, for now (older versions seem rarely indexed, and helps to avoid redirecting deprecated features)
* Chrome extension works on a limited list of search engines and stack exchange sites (to avoid needing <all_urls> permission)

### Examples
Here is an example of a [search for "postgresql create index"](https://duckduckgo.com/?q=postgresql+create+index). At the time of writing, the 9.1 version of the docs is the first search result (the "current" version is 12).

### Requests, issues, PRs
There are some feature ideas in the [issues](https://github.com/mchristofides/pg_docs_bot/issues). Bug reports and PRs super welcome.

![alt text](https://github.com/mchristofides/pg_docs_bot/blob/master/slonik_in_glasses_128.png)
