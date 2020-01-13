#!/bin/sh

ng build
mkdir -p dist/widget/lib/assets/i18n
cp -R projects/widget/src/lib/assets/i18n/*.json dist/widget/lib/assets/i18n