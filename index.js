const fs = require('fs')
const sharp = require('sharp')

const convertCpbitmapToPng = async (inpFileName, outFileName, iOSVersion = 12) => {
    let offset = 16;
    if (iOSVersion < 10) {
        offset = 4;
    } else if (iOSVersion < 12) {
        offset = 8;
    }

    const cpbmp = await fs.promises.readFile(inpFileName)
    const width = cpbmp.readInt32LE(cpbmp.length - 4 * 5)
    const height = cpbmp.readInt32LE(cpbmp.length - 4 * 4)
    const image = Buffer.alloc(width * height * 4)

    const calcOffsetInCpbmp = (x, y, width) => {
        const lineSize = Math.ceil(width / offset) * offset
        return x * 4 + y * lineSize * 4
    }

    const calcOffsetInImage = (x, y, width) => {
        return x * 4 + y * width * 4
    }

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const sourceOffset = calcOffsetInCpbmp(x, y, width)
            const targetOffset = calcOffsetInImage(x, y, width)

            image[targetOffset] = cpbmp[sourceOffset + 2]
            image[targetOffset + 1] = cpbmp[sourceOffset + 1]
            image[targetOffset + 2] = cpbmp[sourceOffset]
            image[targetOffset + 3] = cpbmp[sourceOffset + 3]
        }
    }

    await sharp(image, {
        raw: {
            width,
            height,
            channels: 4
        }
    }).png().toFile(outFileName)

    return outFileName
}

module.exports = convertCpbitmapToPng
