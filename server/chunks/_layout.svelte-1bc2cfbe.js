import { c as create_ssr_component, v as validate_component } from './ssr-7369fb3e.js';

const css$1 = {
  code: "header.svelte-11f7tlj.svelte-11f7tlj{align-items:center;justify-content:center;color:#182036;background-color:rgba(240, 217, 249, 0.4);padding:10px;border-radius:20px;position:fixed;top:0;z-index:999;position:fixed}nav.svelte-11f7tlj ul.svelte-11f7tlj{list-style-type:none}nav.svelte-11f7tlj ul li.svelte-11f7tlj{display:inline-block;margin-right:10px}nav.svelte-11f7tlj ul li a.svelte-11f7tlj{color:#182036;text-decoration:none}nav.svelte-11f7tlj a.svelte-11f7tlj{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-11f7tlj.svelte-11f7tlj:hover{color:var(--color-theme-1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="svelte-11f7tlj" data-svelte-h="svelte-1qk30z0"><nav class="svelte-11f7tlj"><ul class="svelte-11f7tlj"><li class="svelte-11f7tlj"><a href="/" class="svelte-11f7tlj">Home</a></li> <li class="svelte-11f7tlj"><a href="/#bio" class="svelte-11f7tlj">Bio</a></li> <li class="svelte-11f7tlj"><a href="/#quote" class="svelte-11f7tlj">Quote</a></li> <li class="svelte-11f7tlj"><a href="/Comic" class="svelte-11f7tlj">Comic</a></li> <li class="svelte-11f7tlj"><a href="/#contact" class="svelte-11f7tlj">Contact</a></li></ul></nav> </header>`;
});
const css = {
  code: ".app.svelte-a08u1e{display:flex;flex-direction:column;min-height:100vh}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-a08u1e">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> </div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-1bc2cfbe.js.map
