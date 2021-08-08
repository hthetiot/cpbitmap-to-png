# cpbitmap-to-png

A CLI to convert cpbitmap image file to png format.

> cpbitmap-to-png is a Command Line Interface tools to convert cpbitmap image file to png file.


### Installing

```node
$ npm install -g cpbitmap-to-png
```

Optionally, create a global symlink for a dependency.

```node
npm link
```

### How to use

```
  Usage: cpbitmap-to-png input.cpbitmap output.png

  Example: cpbitmap-to-png LockBackground.cpbitmap lock.png
```

## Usage for converting Home and Lock screen images from iOS device backup

1. Perform iOS device backup using Itunes without encryption enabled or other compatible software.
2. Extracted backup content using [imobax](https://github.com/Siguza/imobax/) in a direcrory or other software.
3. Locate `/HomeDomain/Library/SpringBoard/` direcrory in the extracted backup direcrory and copy `OriginalHomeBackground.cpbitmap`, `HomeBackground.cpbitmap` and `LockBackground.cpbitmap` files.

Finally convert cpbitmap files to PNG images.

```bash
cpbitmap-to-png OriginalHomeBackground.cpbitmap home-original.png
cpbitmap-to-png HomeBackground.cpbitmap home.png
cpbitmap-to-png LockBackground.cpbitmap lock.png
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

[**Harold Thetiot**](https://github.com/hthetiot)

Original source from `dr15` user on stackoverflow [How can I convert the .cpbitmap images to .png or common images type ?](https://stackoverflow.com/a/48158807/1293612).


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
