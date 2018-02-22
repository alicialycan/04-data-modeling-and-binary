'use strict'; 

const fs = require('fs');

let inputFilePath = `${__dirname}/test/assets/blob.bmp`;
let outputFilePath = `${__dirname}/test/assets/newAssets/blobOutput.bmp`;

let readBitmap = (inputFilePath, outputFilePath, cb) => {
    fs.readFile(inputFilePath, (err, buffer) => {
        if (err) {
            cb(err);
        }
            const bitmap = {
                bitmapHeader: {
                        type: buffer.slice(0, 2).toString(),
                        fileSize: buffer.slice(2, 6).readUInt16LE(),
                        offsetToPixelArr: buffer.slice(10, 14).readUInt32LE(),
                },
                dibHeader: {
                        width: buffer.slice(18, 22).readUInt32LE(),
                        height: buffer.slice(22, 24).readUInt16LE(),
                        bitsPerPixel: buffer.slice(26, 28).readUInt16LE(),
                    },
                    colorTable: buffer.slice(48, 52).readUInt32LE(),
                    // pixelArray: data.slice(10,14).readUInt32LE(),
                    pixelArray: buffer.slice(this.offsetToPixelArr),
                }
                cb(null, outputFilePath, bitmap, buffer);
            });
        };

module.exports.readBitmap = readBitmap;
