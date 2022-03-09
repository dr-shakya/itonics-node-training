# Node

- is NOT language or library or framework
- is a JS runtime environment
- written by: Ryan Dhal in 2009
- contains JS Engine - V8 (Chrome), SpiderMonkey (Firefox), Chakra (Edge)
- JS Engine executes JS using JIT compilation

Browser includes: `document`, `window` objects

Node includes:

- `global` object
- provides modules: process, console, fs, event

## Modules

- logic/code is encapsulated

To exit node: `process.exit()`

## Environment Variables

- provided either using `.env` file or from terminal as `VARIABLE_NAME=VARIABLE_VALUE node file.js`
- accessed as `process.env.VARIABLE_NAME`

## NPM

- can be used to manage dependencies
- Semantic Versioning (SemVer) Convention: Major.Minor.Patch (1.0.0)
  - ~ = update future Patch versions
  - ^ = update future Minor/Patch versions
- Dependency [required for runtime]: `npm install --save-dev/-S <package_name>`
- Dev Dependency [required for development]: `npm install --dev/-D <package_name>`

NPM commands:

```
npm init
npm install -g <package_name>
npm install --save-dev/-S <package_name>
npm install --dev/-D <package_name>
npm uninstall <package_name>
npm update
npm install
npm ci
```

## Event Loop

- **Synchronous/Blocking** - tasks are executed one at a time and sequentially after previous one is complete
- **Asynchronous/Non-blocking** - tasks maybe not be completed in exact time so other tasks are executed before previous task
- JS is **synchronous** and is **single-threaded**
- Node is **asynchronous**

# Typescript

- strongly typed programming language, superset set of JS
- Typescript code have to be **transpiled** to JS

# Express

- web development framework for Node.js
- server-side/backend framework which is used for API or rendering apps

# Database - postgres/mysql

# ORM - typeorm/sequelize
