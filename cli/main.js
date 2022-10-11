#!/usr/bin/env node

const convertCpbitmapToPng  = require('../index');

const main = async () => {
    if (process.argv.length < 4) {
        console.log('Need at least two args: input filename and result filename [--ios-version iOS version]')
        console.log(`Example: ${process.argv[0]} ${process.argv[1]} HomeBackground.cpbitmap HomeBackground.png [--ios-version 12]`)
        return
    }

    const inpFileName = process.argv[2]
    const outFileName = process.argv[3]
    if (process.argv[4] === '--ios-version') {
        await convertCpbitmapToPng(inpFileName, outFileName, parseInt(process.argv[5], 10))
    } else {
        await convertCpbitmapToPng(inpFileName, outFileName)
    }

    console.log('Done')
}

main()
