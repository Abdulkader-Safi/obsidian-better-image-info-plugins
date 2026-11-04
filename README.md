# better-image-info

An Obsidian plugin that shows details about the image you have open in the status bar:

```
1.24 MB  1920×1080  PNG
```

You get the file size (B, KB or MB), the pixel dimensions and the format. When you open a note instead, the text goes away.

Supported formats: `png` `jpg` `jpeg` `webp` `gif` `bmp` `svg` `avif`. An SVG with no fixed width or height shows only size and format.

The status bar is not shown on mobile, so the plugin only does something on desktop.

## Install manually

1. Run `npm install` and `npm run build`.
2. Copy `main.js` and `manifest.json` into `<Vault>/.obsidian/plugins/better-image-info/`.
3. Reload Obsidian and turn on **Better Image Info** in **Settings → Community plugins**.

## Development

- `npm run dev` rebuilds on every change.
- `npm run build` makes a production build.
- `npm run lint` runs ESLint.

All the code is in `src/main.ts`.

## License

0-BSD
