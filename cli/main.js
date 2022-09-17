#!/usr/bin/env node

const convertCpbitmapToPng  = require('../index');

const main = async () => {
    if (process.argv.length != 4) {
        console.log('Need two args: input filename and result filename')
        console.log(`Example: ${process.argv[0]} ${process.argv[1]} HomeBackground.cpbitmap HomeBackground.png`)
        return
    }

    const inpFileName = process.argv[2]
    const outFileName = process.argv[3]

    await convertCpbitmapToPng(inpFileName, outFileName);

    console.log('Done')
}

main()
