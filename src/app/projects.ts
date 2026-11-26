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
      text: 'glTF and GLB, Collada, STL, STEP (AP203, AP214, AP242), IFC (IFC2X3 and the IFC4 line), IGES, Rhino 3DM, DXF, Blender, FBX, OBJ, 3DS, PLY, 3MF, SVG, USD, USDZ, CityJSON, VRML, X3D, AMF, OFF, KMZ, Draco, G-code toolpaths, LAS/LAZ, E57, XYZ and PCD point clouds, Ogre, and HDR and EXR environment maps. Drop files on the view or open them from the Scene tab.',
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
      title: 'Saves in common formats',
      text: 'Save the edited scene as glTF or GLB, with Draco compression if wished, OBJ with materials, STL and 3MF for 3D printing, PLY for meshes and point clouds, or USDZ for AR Quick Look.',
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
    name: 'mc-dxf-import',
    summary:
      'Reads AutoCAD DXF drawings, ASCII or binary, into three.js. Lines, curves, hatches, 3D faces ' +
      'and meshes in their layers and colours, with blocks expanded where they are inserted.',
    tags: ['DXF R12–2018', 'Blocks', 'Hatches', 'Binary DXF'],
    repository: `${github}/mc-dxf-import`,
    documentation: docs('mc-dxf-import'),
    gettingStarted: doc('mc-dxf-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-dxf-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-blender-import',
    summary:
      'Reads Blender .blend files into three.js without Blender, from version 2.5 to 5.x. Builds the ' +
      'scene’s objects, meshes, node materials with textures, lights and cameras.',
    tags: ['.blend', 'Blender 2.5–5.x', 'Principled BSDF'],
    repository: `${github}/mc-blender-import`,
    documentation: docs('mc-blender-import'),
    gettingStarted: doc('mc-blender-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-blender-import', 'SceneEditor.md') }],
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
    name: 'mc-iges-import',
    summary:
      'Reads IGES CAD files into three.js. Tessellates trimmed NURBS and analytic surfaces and B-rep solids, with free curves, colours, levels and units.',
    tags: ['IGES 5.3', 'Trimmed surfaces', 'B-rep', 'NURBS'],
    repository: `${github}/mc-iges-import`,
    documentation: docs('mc-iges-import'),
    gettingStarted: doc('mc-iges-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-iges-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-3dm-import',
    summary:
      'Reads Rhino .3dm files into three.js with rhino3dm: meshes, Breps, extrusions, SubDs, curves and block instances, by layer, with materials and units.',
    tags: ['Rhino 5–8', 'SubD', 'Blocks', 'Layers'],
    repository: `${github}/mc-3dm-import`,
    documentation: docs('mc-3dm-import'),
    gettingStarted: doc('mc-3dm-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-3dm-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-obj-import',
    summary:
      'Reads Wavefront OBJ models into three.js with their MTL material libraries and textures, loose or zipped.',
    tags: ['.obj', '.mtl', 'Textures'],
    repository: `${github}/mc-obj-import`,
    documentation: docs('mc-obj-import'),
    gettingStarted: doc('mc-obj-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-obj-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-fbx-import',
    summary:
      'Reads binary and ASCII FBX files into three.js: meshes, materials, embedded or external textures, skinning, morphs and animations, in metres.',
    tags: ['FBX 7.x', 'Animations', 'Skinning'],
    repository: `${github}/mc-fbx-import`,
    documentation: docs('mc-fbx-import'),
    gettingStarted: doc('mc-fbx-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-fbx-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-3mf-import',
    summary:
      'Reads 3D Manufacturing Format packages into three.js: objects, components, build items, colours and textures, in their units.',
    tags: ['3D printing', 'Colours', 'Build items'],
    repository: `${github}/mc-3mf-import`,
    documentation: docs('mc-3mf-import'),
    gettingStarted: doc('mc-3mf-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-3mf-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-ply-import',
    summary:
      'Reads Stanford PLY files, ASCII or binary, into three.js as meshes or point clouds, with normals, colours and texture coordinates.',
    tags: ['ASCII', 'Binary', 'Point clouds'],
    repository: `${github}/mc-ply-import`,
    documentation: docs('mc-ply-import'),
    gettingStarted: doc('mc-ply-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-ply-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-3ds-import',
    summary:
      'Reads Autodesk 3D Studio .3ds files into three.js with their meshes, materials and textures.',
    tags: ['.3ds', 'Textures'],
    repository: `${github}/mc-3ds-import`,
    documentation: docs('mc-3ds-import'),
    gettingStarted: doc('mc-3ds-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-3ds-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-svg-import',
    summary:
      'Turns SVG drawings into flat three.js shapes: filled areas and stroked outlines, in their colours, the right way up.',
    tags: ['Fills', 'Strokes', 'CSS styles'],
    repository: `${github}/mc-svg-import`,
    documentation: docs('mc-svg-import'),
    gettingStarted: doc('mc-svg-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-svg-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-usd-import',
    summary:
      'Reads Universal Scene Description stages, text or binary crate, into three.js with their referenced layers, preview materials and textures.',
    tags: ['USDA', 'USDC', 'Variants'],
    repository: `${github}/mc-usd-import`,
    documentation: docs('mc-usd-import'),
    gettingStarted: doc('mc-usd-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-usd-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-usdz-import',
    summary:
      'Reads USDZ packages, the zipped USD of AR Quick Look, into three.js, checking them against the USDZ specification.',
    tags: ['USDZ', 'AR Quick Look'],
    repository: `${github}/mc-usdz-import`,
    documentation: docs('mc-usdz-import'),
    gettingStarted: doc('mc-usdz-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-usdz-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-cityjson-import',
    summary:
      'Reads CityJSON and CityJSONSeq 3D city models into three.js: city objects with semantic surfaces, levels of detail, materials and attributes.',
    tags: ['CityJSON 1.0–2.0', 'LoD', 'Semantics'],
    repository: `${github}/mc-cityjson-import`,
    documentation: docs('mc-cityjson-import'),
    gettingStarted: doc('mc-cityjson-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-cityjson-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-gcode-import',
    summary:
      'Draws G-code toolpaths in three.js: CNC programs by tool, with rapids, arcs, helices and drilling cycles, and 3D-printer programs by layer.',
    tags: ['CNC', '3D printing', 'Arcs', 'Drilling cycles'],
    repository: `${github}/mc-gcode-import`,
    documentation: docs('mc-gcode-import'),
    gettingStarted: doc('mc-gcode-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-gcode-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-vrml-import',
    summary:
      'Reads VRML 2.0 (VRML97) worlds, plain or gzipped, into three.js, with their shapes, materials, textures and transforms.',
    tags: ['VRML97', '.wrl', 'Textures'],
    repository: `${github}/mc-vrml-import`,
    documentation: docs('mc-vrml-import'),
    gettingStarted: doc('mc-vrml-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-vrml-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-x3d-import',
    summary:
      'Reads X3D scenes in the XML and classic encodings into three.js, rewriting X3D 4 nodes as their VRML equivalents.',
    tags: ['X3D 4', 'XML', 'Classic VRML'],
    repository: `${github}/mc-x3d-import`,
    documentation: docs('mc-x3d-import'),
    gettingStarted: doc('mc-x3d-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-x3d-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-hdr-import',
    summary:
      'Reads Radiance HDR images as environment maps that light three.js scenes and show behind them.',
    tags: ['RGBE', 'Image-based lighting'],
    repository: `${github}/mc-hdr-import`,
    documentation: docs('mc-hdr-import'),
    gettingStarted: doc('mc-hdr-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-hdr-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-exr-import',
    summary:
      'Reads OpenEXR images, with any compression three.js decodes, as environment maps for image-based lighting.',
    tags: ['OpenEXR', 'PIZ', 'DWA', 'Image-based lighting'],
    repository: `${github}/mc-exr-import`,
    documentation: docs('mc-exr-import'),
    gettingStarted: doc('mc-exr-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-exr-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-las-import',
    summary:
      'Reads LAS and LAZ LiDAR point clouds into three.js, coloured by colour, intensity, classification or height.',
    tags: ['LAS 1.0–1.4', 'LAZ', 'LiDAR'],
    repository: `${github}/mc-las-import`,
    documentation: docs('mc-las-import'),
    gettingStarted: doc('mc-las-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-las-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-e57-import',
    summary:
      'Reads E57 3D scan files into three.js: each scan a point cloud placed by its pose, with colours and intensity.',
    tags: ['ASTM E57', 'Laser scans', 'Checksums'],
    repository: `${github}/mc-e57-import`,
    documentation: docs('mc-e57-import'),
    gettingStarted: doc('mc-e57-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-e57-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-xyz-import',
    summary:
      'Reads text point clouds into three.js, working out the colour, intensity and normal columns.',
    tags: ['.xyz', '.pts', 'Point clouds'],
    repository: `${github}/mc-xyz-import`,
    documentation: docs('mc-xyz-import'),
    gettingStarted: doc('mc-xyz-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-xyz-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-pcd-import',
    summary:
      'Reads Point Cloud Library .pcd files, ASCII, binary or compressed, into three.js point clouds.',
    tags: ['PCL', 'Point clouds'],
    repository: `${github}/mc-pcd-import`,
    documentation: docs('mc-pcd-import'),
    gettingStarted: doc('mc-pcd-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-pcd-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-amf-import',
    summary:
      'Reads Additive Manufacturing Format files, plain or zipped, into three.js, with materials and units.',
    tags: ['3D printing', 'Zipped AMF'],
    repository: `${github}/mc-amf-import`,
    documentation: docs('mc-amf-import'),
    gettingStarted: doc('mc-amf-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-amf-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-off-import',
    summary:
      'Reads Object File Format meshes and their colour, normal and texture variants into three.js.',
    tags: ['OFF', 'COFF', 'Geomview'],
    repository: `${github}/mc-off-import`,
    documentation: docs('mc-off-import'),
    gettingStarted: doc('mc-off-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-off-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-kmz-import',
    summary:
      'Reads Google Earth KMZ archives into three.js: the Collada models their placemarks place, with textures.',
    tags: ['KML', 'Collada', 'SketchUp'],
    repository: `${github}/mc-kmz-import`,
    documentation: docs('mc-kmz-import'),
    gettingStarted: doc('mc-kmz-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-kmz-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-draco-import',
    summary:
      'Decodes Google Draco compressed meshes and point clouds into three.js, in Node or the browser.',
    tags: ['Draco', 'Compression'],
    repository: `${github}/mc-draco-import`,
    documentation: docs('mc-draco-import'),
    gettingStarted: doc('mc-draco-import', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-draco-import', 'SceneEditor.md') }],
  },
  {
    name: 'mc-gltf-export',
    summary:
      'Writes three.js scenes as glTF: binary GLB or text glTF, optionally with Draco mesh compression.',
    tags: ['GLB', 'Draco', 'KHR_draco_mesh_compression'],
    repository: `${github}/mc-gltf-export`,
    documentation: docs('mc-gltf-export'),
    gettingStarted: doc('mc-gltf-export', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-gltf-export', 'SceneEditor.md') }],
  },
  {
    name: 'mc-obj-export',
    summary:
      'Writes three.js scenes as Wavefront OBJ with MTL materials and PNG textures, in one zip.',
    tags: ['.obj', '.mtl', 'Textures'],
    repository: `${github}/mc-obj-export`,
    documentation: docs('mc-obj-export'),
    gettingStarted: doc('mc-obj-export', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-obj-export', 'SceneEditor.md') }],
  },
  {
    name: 'mc-stl-export',
    summary:
      'Writes three.js meshes as binary or ASCII STL for 3D printing, in millimetres and Z up.',
    tags: ['3D printing', 'Binary', 'ASCII'],
    repository: `${github}/mc-stl-export`,
    documentation: docs('mc-stl-export'),
    gettingStarted: doc('mc-stl-export', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-stl-export', 'SceneEditor.md') }],
  },
  {
    name: 'mc-3mf-export',
    summary:
      'Writes three.js meshes as 3MF packages for 3D printing, with colours, units and metadata.',
    tags: ['3D printing', 'Colours', 'Units'],
    repository: `${github}/mc-3mf-export`,
    documentation: docs('mc-3mf-export'),
    gettingStarted: doc('mc-3mf-export', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-3mf-export', 'SceneEditor.md') }],
  },
  {
    name: 'mc-ply-export',
    summary:
      'Writes three.js meshes and point clouds as PLY, with normals, colours and texture coordinates.',
    tags: ['Point clouds', 'Binary', 'ASCII'],
    repository: `${github}/mc-ply-export`,
    documentation: docs('mc-ply-export'),
    gettingStarted: doc('mc-ply-export', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-ply-export', 'SceneEditor.md') }],
  },
  {
    name: 'mc-usdz-export',
    summary:
      'Writes three.js scenes as USDZ for AR Quick Look, with physically based materials and textures.',
    tags: ['AR Quick Look', 'UsdPreviewSurface'],
    repository: `${github}/mc-usdz-export`,
    documentation: docs('mc-usdz-export'),
    gettingStarted: doc('mc-usdz-export', 'GettingStarted.md'),
    links: [{ label: 'In SceneEditor', url: doc('mc-usdz-export', 'SceneEditor.md') }],
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
