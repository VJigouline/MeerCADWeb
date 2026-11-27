# MeerCADWeb

The MeerCAD site, at [vjigouline.github.io/MeerCADWeb](https://vjigouline.github.io/MeerCADWeb/). Its home page presents [SceneEditor](https://github.com/VJigouline/SceneEditor) and the MeerCAD libraries, with links to their live pages, documentation and code:

- SceneEditor libraries: [mc-step-import](https://github.com/VJigouline/mc-step-import), [mc-ifc-import](https://github.com/VJigouline/mc-ifc-import), [mc-dxf-import](https://github.com/VJigouline/mc-dxf-import), [mc-blender-import](https://github.com/VJigouline/mc-blender-import), [mc-ogre-import](https://github.com/VJigouline/mc-ogre-import), [mc-iges-import](https://github.com/VJigouline/mc-iges-import), [mc-3dm-import](https://github.com/VJigouline/mc-3dm-import), [mc-obj-import](https://github.com/VJigouline/mc-obj-import), [mc-fbx-import](https://github.com/VJigouline/mc-fbx-import), [mc-3mf-import](https://github.com/VJigouline/mc-3mf-import), [mc-ply-import](https://github.com/VJigouline/mc-ply-import), [mc-3ds-import](https://github.com/VJigouline/mc-3ds-import), [mc-svg-import](https://github.com/VJigouline/mc-svg-import), [mc-usd-import](https://github.com/VJigouline/mc-usd-import), [mc-usdz-import](https://github.com/VJigouline/mc-usdz-import), [mc-cityjson-import](https://github.com/VJigouline/mc-cityjson-import), [mc-gcode-import](https://github.com/VJigouline/mc-gcode-import), [mc-vrml-import](https://github.com/VJigouline/mc-vrml-import), [mc-x3d-import](https://github.com/VJigouline/mc-x3d-import), [mc-hdr-import](https://github.com/VJigouline/mc-hdr-import), [mc-exr-import](https://github.com/VJigouline/mc-exr-import), [mc-las-import](https://github.com/VJigouline/mc-las-import), [mc-e57-import](https://github.com/VJigouline/mc-e57-import), [mc-xyz-import](https://github.com/VJigouline/mc-xyz-import), [mc-pcd-import](https://github.com/VJigouline/mc-pcd-import), [mc-amf-import](https://github.com/VJigouline/mc-amf-import), [mc-off-import](https://github.com/VJigouline/mc-off-import), [mc-kmz-import](https://github.com/VJigouline/mc-kmz-import), [mc-draco-import](https://github.com/VJigouline/mc-draco-import), [mc-gltf-export](https://github.com/VJigouline/mc-gltf-export), [mc-obj-export](https://github.com/VJigouline/mc-obj-export), [mc-stl-export](https://github.com/VJigouline/mc-stl-export), [mc-3mf-export](https://github.com/VJigouline/mc-3mf-export), [mc-ply-export](https://github.com/VJigouline/mc-ply-export), [mc-usdz-export](https://github.com/VJigouline/mc-usdz-export) and [mc-raytracer](https://github.com/VJigouline/mc-raytracer)
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

The same push also deploys the site to Azure Static Web Apps, on the Free plan, with the [Deploy to Azure Static Web Apps](.github/workflows/deploy-azure.yml) workflow. Azure serves it at https://www.meercad.com/ (and at https://white-smoke-0844be003.3.azurestaticapps.net/), from the root, so that workflow builds it with `--base-href /`.

- **Azure resources:** the static web app `meercad-web`, in the resource group `meercad-web-rg`, West Europe.
- **Deployment token:** the repository secret `AZURE_STATIC_WEB_APPS_API_TOKEN`. To replace it, reset the token in the Azure portal (the app's **Overview → Manage deployment token**) and save the new one as that secret.
- **Unknown paths:** [`public/staticwebapp.config.json`](public/staticwebapp.config.json) sends them to `index.html`, whose router shows the home page.
- **Canonical address:** the pages still name the GitHub Pages address as canonical, so search engines index one copy.

**www.meercad.com** is a custom domain of the Azure static web app. Its DNS, at IONOS, is a CNAME record from `www` to `white-smoke-0844be003.3.azurestaticapps.net`, and Azure issues and renews its HTTPS certificate. To make it the site's main address, change the `https://vjigouline.github.io/MeerCADWeb/` addresses in [`src/index.html`](src/index.html) to `https://www.meercad.com/`.
