# couch-paint

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.



## Working example

[https://my.couchcluster.com/paint/_design/couch-paint/_rewrite/](https://my.couchcluster.com/paint/_design/couch-paint/_rewrite/)


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd couch-paint`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

To deploy to your CouchDB cluster

* `ember deploy production` (Set your credentials in the `.env.deploy.production` file

For the free [CloudStation](https://cloudstation.com) you have to create an User and a Database and specify them in this file.
Also change the database in ember config from 'paint' to your database name.

## Further Reading / Useful Links

* [ember-pouch](https://github.com/pouchdb-community/ember-pouch)
* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
