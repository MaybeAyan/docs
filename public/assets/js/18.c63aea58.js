(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{633:function(t,a,s){"use strict";s.r(a);var n=s(8),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"vue-指令相关的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-指令相关的使用"}},[t._v("#")]),t._v(" Vue 指令相关的使用")]),t._v(" "),s("hr"),t._v(" "),s("p",[s("code",[t._v("v-model")]),t._v(" 其实是一个语法糖，背后的本质包含两个操作：")]),t._v(" "),s("ul",[s("li",[t._v("1、v-bind 是绑定一个 value 属性")]),t._v(" "),s("li",[t._v("2、v-on 指令给当前元素绑定 input 事件")])]),t._v(" "),s("div",{staticClass:"language-Html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 本质上等同于下列代码 --\x3e")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("message = $event.target.value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("hr"),t._v(" "),s("h3",{attrs:{id:"插槽-slot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插槽-slot"}},[t._v("#")]),t._v(" 插槽 slot")]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[s("p",[t._v("组件中的插槽：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("组件的插槽能使我们封装的组件更加具有拓展性")])]),t._v(" "),s("li",[s("p",[t._v("让使用者可以决定组件内部的展示内容")])])])]),t._v(" "),s("li",[s("p",[t._v("插槽的使用：")]),t._v(" "),s("p",[t._v("-在组件中添加 "),s("code",[t._v("<slot></slot>")]),t._v(" 标签")]),t._v(" "),s("p",[t._v("-插槽的默认值 "),s("code",[t._v("<slot> xxx </slot>")])]),t._v(" "),s("p",[t._v("-如果有多个值，同时放入到组件进行替换时，一起作为替换元素")])])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"nexttick-callback-的使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nexttick-callback-的使用场景"}},[t._v("#")]),t._v(" $nextTick(callback) 的使用场景")]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[s("p",[t._v("前提：Vue 是依靠数据驱动视图更新的，更新的过程是异步的")])]),t._v(" "),s("li",[s("p",[t._v("作用：获取更新之后的 DOM")])]),t._v(" "),s("li",[s("p",[t._v("应用场景：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("1、如果要在 created()钩子函数中进行的 DOM 操作，由于 created()钩子函数中还未对 DOM 进行任何渲染，所以无法直接操作，需要通过$nextTick()来完成。")])]),t._v(" "),s("li",[s("p",[t._v("2、更新数据后，想要使用 js 对新的视图进行操作时。")])]),t._v(" "),s("li",[s("p",[t._v("3、在使用某些第三方插件、组件时 ，这些插件需要 dom 动态变化后重新应用该插件，这时候就需要使用$nextTick()来重新应用插件的方法。")])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);