import { Plugin, TFile } from 'obsidian';

const IMAGE_EXTS = new Set(['png', 'jpg', 'jpeg', 'webp', 'gif', 'bmp', 'svg', 'avif']);

export function formatSize(bytes: number): string {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
	return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

export default class BetterImageInfo extends Plugin {
	private el!: HTMLElement;
	private current: string | null = null;

	onload() {
		this.el = this.addStatusBarItem();
		this.registerEvent(this.app.workspace.on('file-open', (f) => this.update(f)));
		this.app.workspace.onLayoutReady(() => this.update(this.app.workspace.getActiveFile()));
	}

	private update(file: TFile | null) {
		const ext = file?.extension.toLowerCase();
		if (!file || !ext || !IMAGE_EXTS.has(ext)) {
			this.current = null;
			this.el.setText('');
			return;
		}
		this.current = file.path;
		const base = `${formatSize(file.stat.size)}  ${ext.toUpperCase()}`;
		this.el.setText(base);

		const img = new Image();
		img.onload = () => {
			// Ignore late loads after the user switched files.
			if (this.current !== file.path || !img.naturalWidth) return;
			this.el.setText(`${formatSize(file.stat.size)}  ${img.naturalWidth}×${img.naturalHeight}  ${ext.toUpperCase()}`);
		};
		img.src = this.app.vault.getResourcePath(file);
	}
}
