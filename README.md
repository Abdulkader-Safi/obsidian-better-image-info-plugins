# better-image-info

Open an image in Obsidian and the status bar tells you what it is:

```
1.24 MB  1920×1080  PNG
```

That line is the file size, then width × height in pixels, then the format. Open a note and it disappears.

It works with `png` `jpg` `jpeg` `webp` `gif` `bmp` `svg` `avif`. An SVG without a fixed width and height has no pixel size, so you only see its file size and format.

Desktop only in practice. Obsidian mobile has no status bar.

## Install manually

1. Run `npm install`, then `npm run build`.
2. Copy `main.js` and `manifest.json` into `<Vault>/.obsidian/plugins/better-image-info/`.
3. Reload Obsidian.
4. Turn on **Better Image Info** in Settings → Community plugins.

## Development

`npm run dev` rebuilds on every save. `npm run build` makes the release build, and `npm run lint` runs ESLint. The whole plugin is about 40 lines in `src/main.ts`.

## License

0-BSD
