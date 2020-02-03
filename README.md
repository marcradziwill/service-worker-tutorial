# service-worker-tutorial

[![Greenkeeper badge](https://badges.greenkeeper.io/marcradziwill/service-worker-tutorial.svg)](https://greenkeeper.io/)

This is a little tutorial to illustrate the usage of service workers

## Deployment

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://codesandbox.io/s/github/marcradziwill/service-worker-tutorial)

## Edit online

[![Edit remark-codesandbox demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/marcradziwill/service-worker-tutorial)

## What is included

### Registration of the service worker

See `main.js` unter `/js/main.js` for the registration of the service worker.

### Lifecycle events

The lifecycle events `install` and `activate` are implemented with some dummy code. Please change it to your needs.

### Functional events

Currently only the functional event `fetch` is implemented in order to see that caching is working.