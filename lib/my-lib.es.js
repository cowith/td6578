import { openBlock as c, createElementBlock as a, createElementVNode as r, renderSlot as l, toDisplayString as _ } from "vue";
const d = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of o)
    t[n] = s;
  return t;
}, i = {
  props: {
    email: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      message: "Hello World"
    };
  }
}, p = { class: "vite-alert" }, f = { class: "vite-alert__content" }, u = { class: "red" };
function m(e, o, t, n, s, v) {
  return c(), a("div", p, [
    r("div", f, [
      l(e.$slots, "default", {}, void 0, !0),
      r("h1", u, _(s.message) + " - " + _(t.email), 1)
    ])
  ]);
}
const h = /* @__PURE__ */ d(i, [["render", m], ["__scopeId", "data-v-eefe9e52"]]);
export {
  h as ViteAlert
};
