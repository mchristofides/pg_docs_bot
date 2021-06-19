### Intro
pg_docs_bot is a browser extension for getting to the current Postgres docs by default.
* [Firefox addon](https://addons.mozilla.org/en-US/firefox/addon/pg_docs_bot/)
* [Chrome extension](https://chrome.google.com/webstore/detail/pgdocsbot/hkbfkapgdfedgidpfbhlogecohcnaeod?hl=en-GB)
* It is also trivial to install manually, if you prefer

### Benefits
When you search for Postgres related things, an old version of the documentation is often indexed. Similarly, some answers on sites like Stack Overflow link to old versions of the documentation. pg_docs_bot helps you avoid the annoyance of having to click "Current" when you get there, the frustration of having read the whole page before realising it was an old version, or even worse, not realising that it was an out of date version at all.

### Fixing the root cause
Naturally, this extension doesn't help solve the root cause(s) of this issue.

There have been many conversations on the PostgreSQL mailing lists about how to teach search engines which version to link to. (June 2021 update: there is a [new thread](https://www.postgresql.org/message-id/flat/CABUevEyGwaZE8KJg%3D-K4f7moUo%3DUbV3AFbnmtTB-c31ojNn2Vg%40mail.gmail.com#611b31dcdc09aba835ef561ad15bed69) that seems promising). Please also continue to encourage people (eg on Stack Overflow or in blog posts) to link to the `current` version, which should gradually help.

### Features of pg_docs_bot
* Redirects links to the `current` version
* After redirecting, displays a notice (including a link to the page you were redirected from)
* Avoids redirecting some deprecated features (to avoid 404s)
* Doesn't redirect when coming from another page in the docs, so you can still check old versions (the main problem with generic redirectors)

### Limitations
* Only supports redirecting to `current` (request [support for other versions](https://github.com/mchristofides/pg_docs_bot/issues/1))
* Works for the English language docs
* Works for version 7.0 links upwards
* Chrome extension works on a limited list of search engines and Stack Exchange sites (to avoid needing <all_urls> permission)

### Examples
Here is an example of a [search for "postgresql create index"](https://duckduckgo.com/?q=postgresql+create+index). At the time of writing, the 9.1 version of the docs is the first search result (the "current" version is 12).

### Requests, issues, PRs
There are some feature ideas in the [issues](https://github.com/mchristofides/pg_docs_bot/issues). Bug reports and PRs super welcome.

![alt text](https://github.com/mchristofides/pg_docs_bot/blob/trunk/slonik_in_glasses_128.png)
