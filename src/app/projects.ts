/** A link shown on a project card. */
export interface ProjectLink {
  label: string;
  url: string;
}

/** One of the MeerCAD open-source projects shown on the home page. */
export interface Project {
  /** Repository and package name. */
  name: string;
  /** One-line summary. */
  summary: string;
  /** A few short facts shown as tags. */
  tags: string[];
  repository: string;
  /** Folder of Markdown documentation in the repository. */
  documentation?: string;
  /** The getting started guide. */
  gettingStarted?: string;
  /** Further links, such as how SceneEditor uses the library. */
  links: ProjectLink[];
}

const github = 'https://github.com/VJigouline';
const docs = (repo: string) => `${github}/${repo}/tree/main/Documentation`;
const doc = (repo: string, file: string) => `${github}/${repo}/blob/main/Documentation/${file}`;

/** SceneEditor, the primary project. */
export const sceneEditor = {
  name: 'SceneEditor',
  summary:
    'A three.js scene editor that runs in the browser. Open CAD, BIM and 3D models, ' +
    'edit their lights and materials, and render photorealistic images.',
  app: 'https://vjigouline.github.io/SceneEditor/',
  repository: `${github}/SceneEditor`,
  guide: `${github}/SceneEditor/wiki`,
  readme: `${github}/SceneEditor#readme`,
  features: [
    {
      title: 'Opens CAD, BIM and 3D files',
      text: 'glTF and GLB, Collada, STL, STEP (AP203, AP214, AP242), IFC (IFC2X3 and the IFC4 line) and Ogre. Drop files on the view or open them from the Scene tab.',
    },
    {
      title: 'Edits lights and materials',
      text: 'Adjust the lights and materials of any model, take materials from loaded files, and save lights and materials as libraries to reuse.',
    },
    {
      title: 'Photorealistic rendering',
      text: 'The Photorealistic tab ray traces the scene progressively in Web Workers, with shadows, reflections and global illumination, and saves the image as PNG.',
    },
    {
      title: 'Exports glTF',
      text: 'Save the edited scene as glTF to use it in other three.js applications.',
    },
  ],
} as const;

/** Libraries SceneEditor uses to open files and render images. */
export const sceneEditorLibraries: Project[] = [
  {
    name: 'mc-step-import',
    summary:
      'Reads STEP (ISO 10303-21) files into three.js, in TypeScript with no WebAssembly. ' +
      'Tessellates B-rep solids into watertight meshes, with the assembly structure, colours and units.',
    tags: ['AP203', 'AP214', 'AP242', 'NURBS', 'Assemblies'],
    repository: `${github}/mc-step-import`,
    documentation: docs('mc-step-import'),
    gettingStarted: doc('mc-step-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-step-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-ifc-import',
    summary:
      'Reads IFC building models into three.js, in TypeScript with no WebAssembly. ' +
      'Meshes with colours, the spatial structure, and each element’s attributes and property sets.',
    tags: ['IFC2X3', 'IFC4', 'IFC4X3', 'Property sets'],
    repository: `${github}/mc-ifc-import`,
    documentation: docs('mc-ifc-import'),
    gettingStarted: doc('mc-ifc-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-ifc-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-ogre-import',
    summary:
      'Reads Ogre 3D resources into three.js: binary and XML meshes, material scripts and dotScene ' +
      'scenes, loose or zipped. Builds meshes, materials, textures, lights and cameras.',
    tags: ['.mesh', '.material', 'dotScene', 'Zip'],
    repository: `${github}/mc-ogre-import`,
    documentation: docs('mc-ogre-import'),
    gettingStarted: doc('mc-ogre-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-ogre-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-raytracer',
    summary:
      'Ray traces three.js scenes with shadows, reflections, refraction and global illumination. ' +
      'Shades like three.js, renders progressively in Web Workers, and runs headless in Node.js.',
    tags: ['Progressive', 'Web Workers', 'Drop-in renderer'],
    repository: `${github}/mc-raytracer`,
    documentation: docs('mc-raytracer'),
    gettingStarted: doc('mc-raytracer', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-raytracer', 'SceneEditor.md') }],
  },
];

/** The CAD geometry libraries, each built on the one before. */
export const geometryLibraries: Project[] = [
  {
    name: 'mc-curves',
    summary:
      'CAD curves in TypeScript. Lines, conics, splines, NURBS, spirals and roulettes share one ' +
      'ICurve interface to evaluate, measure, tessellate, intersect, trim, transform and save them.',
    tags: ['NURBS', 'Conics', 'No dependencies'],
    repository: `${github}/mc-curves`,
    documentation: docs('mc-curves'),
    gettingStarted: doc('mc-curves', 'GettingStarted.md'),
    links: [{ label: 'Curves', url: doc('mc-curves', 'Curves.md') }],
  },
  {
    name: 'mc-surfaces',
    summary:
      'CAD surfaces in TypeScript. Planes, quadrics, NURBS, and swept, lofted and blended surfaces ' +
      'share one ISurface interface. Any mc-curves curve can be extruded, revolved, lofted or swept.',
    tags: ['NURBS', 'Sweeps', 'Lofts', 'Built on mc-curves'],
    repository: `${github}/mc-surfaces`,
    documentation: docs('mc-surfaces'),
    gettingStarted: doc('mc-surfaces', 'GettingStarted.md'),
    links: [{ label: 'Surfaces', url: doc('mc-surfaces', 'Surfaces.md') }],
  },
  {
    name: 'mc-solids',
    summary:
      'CAD solids in boundary representation. Primitives, polyhedra, and extruded, revolved, swept ' +
      'and lofted solids, with volume and inertia, closed meshes, sections and boolean operations.',
    tags: ['B-rep', 'Booleans', 'Built on mc-surfaces'],
    repository: `${github}/mc-solids`,
    documentation: docs('mc-solids'),
    gettingStarted: doc('mc-solids', 'GettingStarted.md'),
    links: [{ label: 'Solids', url: doc('mc-solids', 'Solids.md') }],
  },
];

export const githubProfile = github;
