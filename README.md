# MeerCADWeb

The MeerCAD site, at [vjigouline.github.io/MeerCADWeb](https://vjigouline.github.io/MeerCADWeb/). Its home page presents [SceneEditor](https://github.com/VJigouline/SceneEditor) and the MeerCAD libraries, with links to their live pages, documentation and code:

- SceneEditor libraries: [mc-step-import](https://github.com/VJigouline/mc-step-import), [mc-ifc-import](https://github.com/VJigouline/mc-ifc-import), [mc-dxf-import](https://github.com/VJigouline/mc-dxf-import), [mc-blender-import](https://github.com/VJigouline/mc-blender-import), [mc-ogre-import](https://github.com/VJigouline/mc-ogre-import) and [mc-raytracer](https://github.com/VJigouline/mc-raytracer)
- CAD geometry libraries: [mc-curves](https://github.com/VJigouline/mc-curves), [mc-surfaces](https://github.com/VJigouline/mc-surfaces) and [mc-solids](https://github.com/VJigouline/mc-solids)

It's an Angular 22 application prerendered to static HTML, so the page shows without JavaScript and needs no server.

## Running it

```bash
npm ci
npm start          # http://localhost:4200/
npm test           # unit tests, with Vitest
npm run build      # static site in dist/meercad-web/browser/
```

It needs Node.js 22.22, 24.15, or 26 and later, as Angular 22 does.

## Changing the content

The projects, their descriptions and links are in [`src/app/projects.ts`](src/app/projects.ts). The home page layout is in [`src/app/home/`](src/app/home/), and each library card is [`src/app/project-card/`](src/app/project-card/). Colours, for light and dark mode, are at the top of [`src/styles.scss`](src/styles.scss).

## Deploying

Every push to `main` tests and builds the site and deploys it to GitHub Pages, with the [Deploy to GitHub Pages](.github/workflows/deploy-pages.yml) workflow. To redeploy without a push, run the workflow from the repository's Actions tab.

GitHub Pages serves the site at https://vjigouline.github.io/MeerCADWeb/, so the workflow builds it with `--base-href /MeerCADWeb/`.

To serve it at www.meercad.com instead:

1. At the DNS provider, make `www.meercad.com` a CNAME record pointing to `vjigouline.github.io`.
2. In the workflow, build with `npx ng build` (base href `/`), and add a `public/CNAME` file containing `www.meercad.com`.
3. In the repository's Settings → Pages, set the custom domain to `www.meercad.com`, and enforce HTTPS once GitHub has issued the certificate.
4. Change the `https://vjigouline.github.io/MeerCADWeb/` addresses in [`src/index.html`](src/index.html) to `https://www.meercad.com/`.
