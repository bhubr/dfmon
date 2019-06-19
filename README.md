# `dfmon`

A tiny, quick'n'dirty Node.js-based disk space monitor.

* Runs `df -m` at given interval
* If disk space gets below given threshold, sends an email to whoever needs to know

Usage:

First, clone this repo, then copy `settings.sample.js` to `settings.js` and modify the settings accordingly.

Lastly, run:
```
npm install
npm install -g pm2
pm2 start ecosystem.config.js
```