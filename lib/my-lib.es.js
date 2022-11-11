import { openBlock as r, createElementBlock as a, createElementVNode as n, toDisplayString as _ } from "vue";
const i = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [c, s] of o)
    e[c] = s;
  return e;
}, l = {
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
}, d = { class: "vite-alert" }, p = { class: "vite-alert__content" }, m = { class: "red" };
function v(t, o, e, c, s, u) {
  return r(), a("div", d, [
    n("div", p, [
      n("h1", m, _(s.message) + " - " + _(e.email), 1)
    ])
  ]);
}
const g = /* @__PURE__ */ i(l, [["render", v], ["__scopeId", "data-v-a0c35605"]]);
export {
  g as ViteAlert
};
