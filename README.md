[![Build Status](https://travis-ci.org/marcobuschini/parking-widget.svg?branch=master)](https://travis-ci.org/marcobuschini/parking-widget)
[![Coverage Status](https://coveralls.io/repos/github/marcobuschini/parking-widget/badge.svg)](https://coveralls.io/github/marcobuschini/parking-widget)

# Parking Widget

## Specificaions

The goal is to show a collection of parking slots and let the user buy one. This must be a "Widget" because it should be an independent module that can be embedded in any Web application. I am an Angular developer, therefore I will write a reusable component for an Angular application.

The widget is composed of:

- a vendor area
- a parking slots area.

The _vendor_ area should list the features of the vendor in a togglable manner. It should act as a filter for parking slots.

The _parking slot_ area contains all the parking slots.

1. You should design parking slots as "blocks" aligned differently between desktop and mobile devices: horizontally on desktop devices and vertically on mobile ones.
1. Inside each parking slot you can insert the info about the parking slot itself.
1. A parking slot should be selectable by the user.
1. Clicking one of the parking slots in the Widget will add the parking slot to the shopping cart of the host Web app.
1. Add a button show/hide details (the map and the features list) of the selected parking slot

## Building

To build the widget issue the following command from the root of the repository structure:

```
ng build widget
```

The project will be built in the `dist/widget` directory.

## Documentation
The API for the widget can be generated with:

```
npm run compodoc
```

The generated documentation will be in the `docs` folder for interoperability
with GitHub Pages.

## Making it available
### The public way
Issue the command ```npm publish``` command after testing, and building the widget to
have it published in the default npm registry. You must be logged in the default
registry for this to work.

Then run ```npm install parking-widget``` to install in any project.

### The easy way
Copy the `dist/widget` folder in the `node_modules` folder of the destination project.
The demo project is already setup to get the package from that folder. Don't symlink it,
as it will not work that way!

### The hard way
You could install a local copy of an NPM registry (like Verdaccio from https://verdaccio.org/),
configure it, and start it. It must act as an NPM registry proxy, too. This is still work in progress.

### Results of publishing
The test proejct it at https://github.com/marcobuschini/interview-november-2019. It the widget was
installed "the easy way" described above.
