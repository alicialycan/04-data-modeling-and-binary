'use strict';

const fs = require('fs');

const transform = {

    writeFile: (outputFilePath, newBuffer, err) => {
            fs.writeFile(outputFilePath, newBuffer, (err) => {
                if (err) throw err;
            });
    },

    greyscale: (err, outputFilePath, bitmap, buffer) => {
        if (err) console.error(err);

        let result = [];
        for (let i = bitmap.pixelArr.length - 1; i > 0; i--) {
            result.push(bitmap.pixelArr[i]);
        }
        let newBuffer = buffer.slice(0, bitmap.offsetPixelArr) + result;
        transform.writeFile(outputFilePath, newBuffer, err);
    },

    // invert: (err, outputFilePath, bitmap, buffer) => {
    //     if (err) console.error(err);

    //     let result = [];
    //     for (let i = bitmap.pixelArr.length - 1; i > 0; i --) {
    //         result.push(pixelArr[i]);
    //     }
    //     let newBuffer = buffer.slice(0, bitmap.offsetPixelArr) + result;
    //     transform.writeFile(outputFilePath, newBuffer, err);
    // },

};

module.exports.transform = transform;