const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","No-Image-Placeholder.svg","favicon.png","project-img1.png","project-img2.png","project-img3.png","project-img4.jpg","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.dfcbc3dd.js","app":"_app/immutable/entry/app.7b771093.js","imports":["_app/immutable/entry/start.dfcbc3dd.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.d927090a.js","_app/immutable/entry/app.7b771093.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.bf3f3f8e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-b3a07b72.js')),
			__memo(() => import('./chunks/1-708033d7.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/","/Comic"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
