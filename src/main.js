import * as THREE from 'three';
import * as dat from 'dat.gui';

const GUI = dat.GUI;

export { GUI };
// import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js';

export { THREE };

export { default as MatisOrientationParser } from './parsers/MatisOrientationParser';
export { default as MicmacOrientationParser } from './parsers/MicmacOrientationParser';
export { default as PhotogrammetricCamera } from './cameras/PhotogrammetricCamera';
export { default as FilesSource } from './sources/FilesSource';
export { default as FetchSource } from './sources/FetchSource';
export { default as OrientedImageMaterial } from './materials/OrientedImageMaterial';
export { default as MultipleOrientedImageMaterial } from './materials/MultipleOrientedImageMaterial';

import { OrbitControls, MapControls } from './controls/OrbitControls';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';

import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader';

import { CopyShader } from 'three/examples/jsm/shaders/CopyShader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

export { OrbitControls, MapControls, FirstPersonControls };
export { PLYLoader };
export { CopyShader, EffectComposer, RenderPass, ShaderPass };

export { default as imageVS } from './materials/imageVS.glsl';
export { default as imageFS } from './materials/imageFS.glsl';
export { default as viewFS } from './materials/viewFS.glsl';
export { default as multipleVS } from './materials/multipleVS.glsl';
export { default as multipleFS } from './materials/multipleFS.glsl';
export { default as footprintFS } from './materials/footprintFS.glsl';
export { default as distortVS } from './materials/distortVS.glsl';
export { default as distortFS } from './materials/distortFS.glsl';
export { default as sceneVS } from './materials/sceneVS.glsl';
export { default as sceneFS } from './materials/sceneFS.glsl';