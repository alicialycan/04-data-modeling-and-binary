'use strict';

const args = process.argv;
const transform = require('.lib/bitmap').bitmap;

transform(args);