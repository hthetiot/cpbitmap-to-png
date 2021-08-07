# cpbitmap-to-png
Convert cpbitmap file to png.

## Usage for converting Home and Lock screen images from iOS device. 

1. Perform ios backup using Itunes without encryption enabled or other comptable software.
2. Dump backup content using imobax in a direcrory (https://github.com/Siguza/imobax/) 
3. Locate /HomeDomain/Library/SpringBoard/ direcrory in the backup direcrory and copy OriginalHomeBackground.cpbitmap, HomeBackground.cpbitmap and LockBackground.cpbitmap files.

Then finally convert to PNG.

```js
node cli.js OriginalHomeBackground.cpbitmap home-original.png
node cli.js HomeBackground.cpbitmap home.png
node cli.js LockBackground.cpbitmap home.png        
```
> node cli.js HomeBackground.cpbitmap home.png

## Author

Original source from stackoverflow anwser https://stackoverflow.com/a/48158807/1293612

## Licence 

MIT
