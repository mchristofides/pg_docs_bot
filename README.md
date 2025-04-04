### Intro
pg_docs_bot is a browser extension for getting to the current Postgres docs by default.
* [Chrome extension](https://chrome.google.com/webstore/detail/pgdocsbot/hkbfkapgdfedgidpfbhlogecohcnaeod?hl=en-GB)
* [Firefox addon](https://addons.mozilla.org/en-US/firefox/addon/pg_docs_bot/)
* It is also possible to install extensions locally, if you prefer

### Benefits
When you search for Postgres related things, an old version of the documentation is sometimes top of the list (although this was far more of a problem several years ago). Similarly, some links on sites like Stack Overflow are to old versions of the documentation.

pg_docs_bot helps you avoid having to click "Current" when you get there, or the frustration of reading the information before realising it's out of date, or (even worse) not realising at all.

### Fixing the root cause
There have been many conversations on the PostgreSQL mailing lists about how to teach search engines which version to link to. In 2022 a [huge improvement](https://www.postgresql.org/message-id/flat/3e53d4b1-ad8d-27e6-631a-59d3d21ba6c6%40postgresql.org#3e35032e6a67b6ca0a1a1f508663e134) was made to the docs to let search engines know that the `current` version should be considered canonical, which has helped tremendously.

For the likes of Stack Overflow and blog posts, please do link to the `current` version whenever you aren't specifically referencing something version-specific.

### Features of pg_docs_bot
* Redirects links to the `current` version
* After redirecting, displays a notice (including a link to the page you were redirected from)
* Avoids redirecting some deprecated features (to avoid 404s)
* Doesn't redirect when coming from another page in the docs, so you can still check old versions (the main problem with generic redirectors)

### Limitations
* Only supports redirecting to `current` (here's [an alternative that supports picking a version](https://github.com/dougharris/unified_docs_switcher))
* Works for the English language docs
* Works for version v7.0 through v17 links
* The Chrome extension only works on a limited set of search engines and Stack Exchange sites (to avoid needing the <all_urls> permission)

![alt text](https://github.com/mchristofides/pg_docs_bot/blob/trunk/slonik_in_glasses_128.png)
