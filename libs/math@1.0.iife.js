var ViteMath = function(exports) {
  "use strict";
  const index_vue_vue_type_style_index_0_scoped_a55a688a_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main = {
    props: {
      email: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        message: "Math"
      };
    }
  };
  const _hoisted_1 = { class: "vite-math" };
  const _hoisted_2 = { class: "vite-math__content" };
  const _hoisted_3 = { class: "red" };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
      Vue.createElementVNode("div", _hoisted_2, [
        Vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
        Vue.createElementVNode("h1", _hoisted_3, Vue.toDisplayString($data.message) + " - " + Vue.toDisplayString($props.email), 1)
      ])
    ]);
  }
  const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a55a688a"]]);
  exports.ViteMath = index;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({});
