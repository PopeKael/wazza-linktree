# Wazza Linktree

Static Linktree-style landing page for Wazza's channels and projects.

## Local preview

From this folder, start the temporary preview server:

```powershell
& 'C:\Users\Warren\AppData\Local\Programs\Python\Python312\python.exe' -m http.server 4173
```

Open <http://127.0.0.1:4173/> in a browser. Stop the server with `Ctrl+C` when finished.

## Validation

The visitor counter script can be syntax-checked with:

```powershell
node --check .\visitor-counter.js
```

The production deployment target is managed separately from this public source repository.

## Licensing

The source code is available under the [MIT License](LICENSE). Original site
content and creative assets are available under the [Creative Commons
Attribution 4.0 International licence](CONTENT-LICENSE.md), subject to the
third-party material exclusions described there.
