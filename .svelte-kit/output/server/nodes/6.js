

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resume/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.343247c0.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.67206439.js"];
export const stylesheets = [];
export const fonts = [];
