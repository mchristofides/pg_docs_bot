### Intro
pg_docs_bot is a [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/pg_docs_bot/) for getting to the current Postgres docs by default.


### Benefits
When you search for Postgres documentation an old version if often indexed. Avoid the annoyance of having to click "Current" when you get there, or the frustration of having read the whole page before realising it's an old version!

### Fixing the root causes
Naturally, this extension doesn't help solve the root cause(s) of this issue.

There have been at least two ([first](https://www.postgresql.org/message-id/flat/38c68b83-30ae-c039-acd0-9e853997edc4@2ndquadrant.com), [second](https://www.postgresql.org/message-id/flat/CALWCfdKLed3RJVa8AtTqYw1GzjRbGzeZL7G4TxVA8vEmLxm96g%40mail.gmail.com)) good conversations on the mailing lists about how to teach the search engines which version to link to. Please continue to encourage people to link to the "current" version around the web, which will gradually help.

### Features

* Redirects old version links to the "current" version
* Don't get redirected when on the docs site itself, so you can still check old versions (the main problem with generic redirectors)

...that's it for now.

### Limitations

* Works for the English language docs only, for now
* Works for version 7.2 links upwards, for now

### Examples

Here is an example of a [search for "postgresql create index"](https://duckduckgo.com/?q=postgresql+create+index). At the time of writing, the 9.1 version of the docs is the first search result (the "current" version is 12).


### Requests, issues, PRs

There are some feature ideas in the Issues. Bug reports and PRs super welcome.

