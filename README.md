# Wazza Linktree

Static Linktree-style landing page for Wazza's channels and projects.

## Local preview

From this folder, start the temporary preview server:

```powershell
node .\preview-server.js
```

The server listens only on the local machine. Open <http://127.0.0.1:4173/> in
a browser and stop it with `Ctrl+C` when finished.

The older Python command remains available if required:

```powershell
& 'C:\Users\Warren\AppData\Local\Programs\Python\Python312\python.exe' -m http.server 4173
```

## Validation

The visitor counter script can be syntax-checked with:

```powershell
node --check .\visitor-counter.js
node --check .\preview-server.js
```

The production deployment target is managed separately from this public source repository.

## Licensing

The source code is available under the [MIT License](LICENSE). Original site
content and creative assets are available under the [Creative Commons
Attribution 4.0 International licence](CONTENT-LICENSE.md), subject to the
third-party material exclusions described there.
