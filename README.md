[![Build Status](https://travis-ci.org/marcobuschini/parking-widget.svg?branch=master)](https://travis-ci.org/marcobuschini/parking-widget)
[![Coverage Status](https://coveralls.io/repos/github/marcobuschini/parking-widget/badge.svg)](https://coveralls.io/github/marcobuschini/parking-widget)

# Parking Widget

## Specificaions

The goal is to show a collection of parking slots and let the user buy one. This must be a "Widget" because it should be an independent module that can be embedded in any Web application. I am an Angular developer, therefore I will write a reusable component.

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

## Making it available
### The easy way
Copy the `dist/widget` folder in the `node_modules` folder of the destination project.
The demo project is already setup to get the package from that folder.

### The hard way
Install a local copy of Verdaccio from https://verdaccio.org/, and start it. Run the following command to make your local repository available to the project you are using the widget in:

```
npm set registry http://localhost:4873
```

Then run the following commands from the main `dist/widget` directory:

```
npm unpublish --force --registry http://localhost:4873 widget@0.0.1
npm publish --force --registry http://localhost:4873
```

### Results of publishing
The test proejct it at https://github.com/marcobuschini/interview-november-2019.
At present the widget tests correctly but some configuration is wrong and when
installed it cannot find the widget properties (perhaps the widget is null?).
