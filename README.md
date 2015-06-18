# template-parser

## Installation
    npm install template-parser --save

### Features
With this module you can use templates with handlebars to load data dynamically, imagine you have a help.hbs file and have a file with the same name help.json, you can use the data that you have stored in help.json and parse it into help.hbs

### Example
* project_folder
* templates
    * hbs
        * help.hbs
    * json
        * help.json
* main.js
* package.json

*help.json*
```json
    { "name" : "Joel" }
```
*help.hbs*
```html
    My name is : {{name}}
```

```javascript
var template = require('template-parser');

var test = template.parse('help');
console.log(test);
```

## Using another template folder?
```javascript
var template = require('template-parser');

var test = template.parse('help', { template_dir : 'other' });
console.log(test);
```

## Using another hbs folder?
```javascript
var template = require('template-parser');

var test = template.parse('help', { hbs_dir : 'other' });
console.log(test);
```

## Using another json folder?
```javascript
var template = require('template-parser');

var test = template.parse('help', { json_dir : 'other' });
console.log(test);
```

## Want to contribute?

> All help are more than welcome!

#### Pre-requesites

 - [node.js](http://nodejs.org/).
 - [Gulp](http://gulpjs.com/).
 - [Mocha](http://mochajs.org/) it's fun.

#### Development Workflow

 1. **[Fork](https://github.com/jblandino/gulp-all-tasks/fork)** this respository.
 2. **Clone** your fork and create a feature branch from develop.
        git clone git@github.com:<your-username>/template-parser.git
        git fetch origin
        git checkout dev
        git checkout -b feature-<new_feature>
 3. **Install** development dependencies.
        npm install
 4. **Code** and be happy!
 5. **Test** your code using Mocha.
 6. Submit a **pull request** and thanks.

Questions? [Hit me](https://github.com/jblandino/).

## Tests

To run all tests:

    npm test

### Credits

**template-parser** was created by [Joel A. Jaime](http://github.com/jblandino) for the world.