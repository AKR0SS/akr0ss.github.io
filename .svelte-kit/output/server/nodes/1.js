

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5fd21277.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.67206439.js","_app/immutable/chunks/singletons.0dc1d179.js"];
export const stylesheets = [];
export const fonts = [];
