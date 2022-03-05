# Node

- is NOT language or library or framework
- is a JS runtime environment

- Created By: Ryan Dhal
- Contains JS Engine -> V8 (Chrome), SpiderMonkey (Firefox), Chakra (Edge)
- JS engine executes JS

Browser -> document, window
Node -> 'global' object
provides modules: process, console, fs, event

V8 -> JS engine -> JIT (Compilation)

# Modules

- logic is encapsulated

# Exit Node

- use process.exit()

# Environment Variables

- Access using process.env.VARIABLE_NAME

# NPM

- can be used to install dependencies
- Version: Major.Minor.Patch (1.0.0)

- ~ -> Only Patch allowed
- ^ -> Minor and patch allowed

- Dependency: npm install --save-dev/-S
- Dev Dependency: npm install --dev/-D

Useful npm commands

- npm init
- npm install -g <package_name>
- npm install --save-dev <package_name>
- npm uninstall <package_name>
- npm update
- npm install

# Event Loop

Synchronous/Blocking - executed sequentially
Asynchronous/Non-blocking - x time

task 1
task 2 - x second
task 3
task 4

- JS is synchronous and is single-threaded
- Node is asynchronous

# Typescript

- programming language, superset set of JS
- is strongly typed
- Typescript files have to be "transpiled" to JS

# Express

- web development framework for Node.js
- server-side/backend framework which is used for API or rendering apps
