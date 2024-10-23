import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.C-748mc3.js","_app/immutable/chunks/scheduler.Bg6Y_62U.js","_app/immutable/chunks/index.CP4QyBkv.js","_app/immutable/chunks/Underline.svelte_svelte_type_style_lang.CriQQKyr.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/app.B9fN36mZ.js","_app/immutable/chunks/index.3PLN5Qwk.js","_app/immutable/chunks/Underline.DnN8owJC.js"];
export const stylesheets = ["_app/immutable/assets/Nav.BjCCCStx.css","_app/immutable/assets/Underline.CH8stYw-.css","_app/immutable/assets/app.DO7qhHiZ.css"];
export const fonts = [];
