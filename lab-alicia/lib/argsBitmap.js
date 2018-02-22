'use strict';

const transform = require('./transform').transform;
const readBitmap = require('./readBitmap').readBitmap;

let argsBitmap = (args) => {
    if (arg.length < 5) {
        return 'Error';
    }
    const inputFile = args[2];
    const 
}
                // const reversePixels = (newBuffer) => {
                //     if (transform !== undefined) {
                //         if (transform === 'mirror') {
                //             let mirrorImage = [];
                //             console.log('bitmap pixel array=', bitmap.pixelArray.length);
                //             for (let i = bitmap.pixelArray.length - 1; i > 0; i--) {
                //                 mirrorImage.push(bitmap.pixelArray[i]);
                //             }
                //         }
                //     }
                        // if (transform === 'greyscale') {
                        //     let mirrorImage = [];
                        //     console.log('bitmap pixel array=', bitmap.pixelArray.length);
                        //     for (let i = bitmap.pixelArray.length - 1; i > 0; i--) {
                        //         mirrorImage.push(bitmap.pixelArray[i]);
                        //     }
                        //     console.log('buffer', buffer);
                        //     let newBuffer = data.slice(0, bitmap.offsetToPixelArray) + mirrorImage;
                        //     return newBuffer;
                        // }
                    // },
                    // do transform here
                    // reversePixels(bitmap);
                    // greyscale(bitmap);
                    // // write newBuffer here
                    // fs.writeFile(outputFilePath, newBuffer, err => {
                    //     if (err) return console.log(err);
                // function greyscale(outputFilePath, bitmap) {
                //     for (let i = 0, n = bitmap.colorTable.length; i < n; i += 4) {
                //         let color = bitmap.colorTable.slice(i, i + 4);
                //         let avgColor = ((color[0] + color[1] + color[2]) / 3);
                //         color[0] = color[1] = color[2] = avgColor;
                //         color[3] = 0;
                //     }
                // }

module.exports.argsBitmap = argsBitmap;