[![Build Status](https://travis-ci.org/marcobuschini/parking-widget.svg?branch=master)](https://travis-ci.org/marcobuschini/parking-widget)
[![Coverage Status](https://coveralls.io/repos/github/marcobuschini/parking-widget/badge.svg)](https://coveralls.io/github/marcobuschini/parking-widget)

# Parking Widget

## Specificaions

The goal is to show a collection of parking slots and let the user buy one. This must be a "Widget" because it should be an independent module that can be embedded in any Web application. I am an Angular developer, therefore I will write a reusable component.
 
The widget is composed of:
 - a vendor area
 - a parking slots area. 
 
The *vendor* area should list the features of the vendor in a togglable manner. It should act as a filter for parking slots.

The *parking slot* area contains all the parking slots.

1. You should design parking slots as "blocks" aligned differently between desktop and mobile devices: horizontally on desktop devices and vertically on mobile ones.
1. Inside each parking slot you can insert the info about the parking slot itself.
1. A parking slot should be selectable by the user.
1. Clicking one of the parking slots in the Widget will add the parking slot to the shopping cart of the host Web app.
1. Add a button show/hide details (the map and the features list) of the selected parking slot

Building
========

To build the widget issue the following command from the root of the repository structure:
```
ng build widget
```

The project will be build in the ```dist/widget``` directory.

Installing
==========

To install the widgt just built in a different project, issue the following command from the root of the project you want to install the package into:
```cp -R <widget-root>/dist/widget node_modules```
