# SmartWire

bash
# install the project's dependencies
$ npm install

# start the servers
$ npm run start
Will start two nodemon and ng serve 
In order to start the project use:

Watches your node and ng files for a live dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# build the dist code
$ npm run build
Will build the distribution files which can be run solely under node without ng serve, or you can distribute to a server

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
