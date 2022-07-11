(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{258:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"设置单位贴图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置单位贴图"}},[s._v("#")]),s._v(" 设置单位贴图")]),s._v(" "),t("div",{staticClass:"language-jass line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jass"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" SetUnitTexture "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("takes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("handle")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" texture, "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("integer")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("nothing")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h1",{attrs:{id:"描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),t("p",[s._v("设置单位贴图 替换单位身上的 id 贴图 例如队伍颜色的 id 贴图是 0 队伍光晕 id 是 1")]),s._v(" "),t("h1",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("名字")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("单位")]),s._v(" "),t("td",[s._v("handle")]),s._v(" "),t("td",[s._v("要修改的单位 handle")])]),s._v(" "),t("tr",[t("td",[s._v("字符串")]),s._v(" "),t("td",[s._v("texture")]),s._v(" "),t("td",[s._v("贴图路径")])]),s._v(" "),t("tr",[t("td",[s._v("整数")]),s._v(" "),t("td",[s._v("id")]),s._v(" "),t("td",[s._v("贴图 id")])])])]),s._v(" "),t("h1",{attrs:{id:"例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),t("div",{staticClass:"language-jass line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jass"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("call")]),s._v(" SetUnitTexture(GetTriggerUnit(), "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xx.blp"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(")\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-lua line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-lua"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" japi "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jass.japi'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" jass "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jass.common'")]),s._v("\n\njapi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetUnitTexture")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("jass"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetTriggerUnit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xx.blp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);