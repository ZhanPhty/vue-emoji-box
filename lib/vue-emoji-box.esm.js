import {Prop,Watch,Emit,Component,Vue}from'vue-property-decorator';import CategoryList from'@/components/CategoryList.vue';import EmojiList from'@/components/EmojiList.vue';/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}var emojisDefault = [
    { data: '😀', text: '😀', category: 'face' },
    { data: '😁', text: '😁', category: 'face' },
    { data: '😂', text: '😂', category: 'face' },
    { data: '😃', text: '😃', category: 'face' },
    { data: '😄', text: '😄', category: 'face' },
    { data: '😅', text: '😅', category: 'face' },
    { data: '😆', text: '😆', category: 'face' },
    { data: '😇', text: '😇', category: 'face' },
    { data: '😈', text: '😈', category: 'face' },
    { data: '😉', text: '😉', category: 'face' },
    { data: '😊', text: '😊', category: 'face' },
    { data: '😋', text: '😋', category: 'face' },
    { data: '😌', text: '😌', category: 'face' },
    { data: '😍', text: '😍', category: 'face' },
    { data: '😎', text: '😎', category: 'face' },
    { data: '😏', text: '😏', category: 'face' },
    { data: '😐', text: '😐', category: 'face' },
    { data: '😑', text: '😑', category: 'face' },
    { data: '😒', text: '😒', category: 'face' },
    { data: '😓', text: '😓', category: 'face' },
    { data: '😔', text: '😔', category: 'face' },
    { data: '😕', text: '😕', category: 'face' },
    { data: '😖', text: '😖', category: 'face' },
    { data: '😗', text: '😗', category: 'face' },
    { data: '😘', text: '😘', category: 'face' },
    { data: '😙', text: '😙', category: 'face' },
    { data: '😚', text: '😚', category: 'face' },
    { data: '😛', text: '😛', category: 'face' },
    { data: '😜', text: '😜', category: 'face' },
    { data: '😝', text: '😝', category: 'face' },
    { data: '😞', text: '😞', category: 'face' },
    { data: '😟', text: '😟', category: 'face' },
    { data: '😠', text: '😠', category: 'face' },
    { data: '😡', text: '😡', category: 'face' },
    { data: '😢', text: '😢', category: 'face' },
    { data: '😣', text: '😣', category: 'face' },
    { data: '😤', text: '😤', category: 'face' },
    { data: '😥', text: '😥', category: 'face' },
    { data: '😦', text: '😦', category: 'face' },
    { data: '😧', text: '😧', category: 'face' },
    { data: '👆', text: '👆', category: 'hand' },
    { data: '👇', text: '👇', category: 'hand' },
    { data: '👈', text: '👈', category: 'hand' },
    { data: '👉', text: '👉', category: 'hand' },
    { data: '👊', text: '👊', category: 'hand' },
    { data: '👋', text: '👋', category: 'hand' },
    { data: '👌', text: '👌', category: 'hand' },
    { data: '👍', text: '👍', category: 'hand' },
    { data: '👎', text: '👎', category: 'hand' },
    { data: '👏', text: '👏', category: 'hand' },
    { data: '👐', text: '👐', category: 'hand' },
    { data: '🐭', text: '🐭', category: 'animal' },
    { data: '🐮', text: '🐮', category: 'animal' },
    { data: '🐯', text: '🐯', category: 'animal' },
    { data: '🐰', text: '🐰', category: 'animal' },
    { data: '🐱', text: '🐱', category: 'animal' },
    { data: '🐲', text: '🐲', category: 'animal' },
    { data: '🐳', text: '🐳', category: 'animal' },
    { data: '🐴', text: '🐴', category: 'animal' },
    { data: '🐵', text: '🐵', category: 'animal' },
    { data: '🐶', text: '🐶', category: 'animal' },
    { data: '🐷', text: '🐷', category: 'animal' },
    { data: '🐸', text: '🐸', category: 'animal' },
    { data: '🐹', text: '🐹', category: 'animal' },
    { data: '🐺', text: '🐺', category: 'animal' },
    { data: '🐻', text: '🐻', category: 'animal' },
    { data: '🐼', text: '🐼', category: 'animal' },
    { data: '🐽', text: '🐽', category: 'animal' }
];var categoriesDefault = [
    {
        id: 'face',
        name: '😀',
        icon: '',
        textPattern: '',
        type: 'emoticon'
    },
    {
        id: 'hand',
        name: '👌',
        icon: '',
        textPattern: '',
        type: 'emoticon'
    },
    {
        id: 'animal',
        name: '🐵',
        icon: '',
        textPattern: '',
        type: 'emoticon'
    }
];var VueEmojiBox = /** @class */ (function (_super) {
    __extends(VueEmojiBox, _super);
    function VueEmojiBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 当前选中的分类
        _this.currentCategory = _this.customCategories[0] || {};
        _this.showBox = _this.visible;
        _this.targetEl = null;
        _this.targetType = null;
        _this.resHtml = null;
        _this.caret = 0;
        return _this;
    }
    VueEmojiBox.prototype.mounted = function () {
        var _this = this;
        // 判断HTMLDivElement是否存在
        if (this.targetId) {
            this.$nextTick(function () {
                _this.targetEl = document.getElementById(_this.targetId);
                _this.initTarget();
            });
        }
    };
    // 检测
    VueEmojiBox.prototype.onWatchVisible = function (val) {
        this.showBox = val;
    };
    // 选择emoji标签
    VueEmojiBox.prototype.bindChangeEmoji = function (emoji) {
        // this.showBox = false
        this.targetType && this.insertEmoji(emoji);
        // v-model
        this.$emit('input', this.resHtml);
        return __assign(__assign({}, emoji), { html: this.resHtml });
    };
    // 切换分类
    VueEmojiBox.prototype.bindChangeCategory = function (item) {
        this.currentCategory = item;
    };
    // 切换显示
    VueEmojiBox.prototype.bindBoxVisible = function () {
        this.showBox = !this.showBox;
    };
    // 初始化target
    VueEmojiBox.prototype.initTarget = function () {
        this.targetType = Object.prototype.toString.call(this.targetEl).slice(8, -1);
        if (this.targetType !== 'HTMLDivElement' &&
            this.targetType !== 'HTMLTextAreaElement' &&
            this.targetType !== 'HTMLInputElement') {
            throw new TypeError('prop [target] must be the element of input or div with contenteditable');
        }
        this.targetEl.setAttribute('contenteditable', true);
        this.addClickEvent();
    };
    // 监控事件，记录
    VueEmojiBox.prototype.addClickEvent = function () {
        var _this = this;
        this.targetEl.addEventListener('click', function () {
            _this.caret = _this.targetEl.selectionStart || document.getSelection().anchorOffset;
        });
        this.targetEl.addEventListener('keyup', function () {
            _this.caret = _this.targetEl.selectionStart || document.getSelection().anchorOffset;
        });
    };
    // 插入数据处理
    VueEmojiBox.prototype.insertEmoji = function (emoji) {
        var htmlVal = this.targetEl.value || this.targetEl.innerHTML;
        this.resHtml = "" + htmlVal.substr(0, this.caret) + emoji.text + htmlVal.substr(this.caret);
        this.caret += emoji.text.length;
        if (this.targetType === 'HTMLDivElement') {
            this.targetEl.innerHTML = this.resHtml;
        }
        else {
            this.targetEl.value = this.resHtml;
        }
    };
    __decorate([
        Prop()
    ], VueEmojiBox.prototype, "value", void 0);
    __decorate([
        Prop({ default: '/' })
    ], VueEmojiBox.prototype, "baseUrl", void 0);
    __decorate([
        Prop()
    ], VueEmojiBox.prototype, "className", void 0);
    __decorate([
        Prop()
    ], VueEmojiBox.prototype, "targetId", void 0);
    __decorate([
        Prop({ default: false })
    ], VueEmojiBox.prototype, "visible", void 0);
    __decorate([
        Prop({ default: '表情' })
    ], VueEmojiBox.prototype, "label", void 0);
    __decorate([
        Prop({ default: '380px' })
    ], VueEmojiBox.prototype, "width", void 0);
    __decorate([
        Prop({ default: '200px' })
    ], VueEmojiBox.prototype, "height", void 0);
    __decorate([
        Prop({ default: function () { return emojisDefault; } })
    ], VueEmojiBox.prototype, "customEmojis", void 0);
    __decorate([
        Prop({ default: function () { return categoriesDefault; } })
    ], VueEmojiBox.prototype, "customCategories", void 0);
    __decorate([
        Watch('visible')
    ], VueEmojiBox.prototype, "onWatchVisible", null);
    __decorate([
        Emit('change')
    ], VueEmojiBox.prototype, "bindChangeEmoji", null);
    VueEmojiBox = __decorate([
        Component({
            components: { CategoryList: CategoryList, EmojiList: EmojiList }
        })
    ], VueEmojiBox);
    return VueEmojiBox;
}(Vue));function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}/* script */
const __vue_script__ = VueEmojiBox;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vemoji-main",class:_vm.className},[(_vm.label)?_c('div',{staticClass:"vemoji-main--target",on:{"click":_vm.bindBoxVisible}},[(_vm.$slots.label)?_c('span',[_vm._t("label")],2):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.label))])]):_vm._e(),_vm._v(" "),(_vm.showBox)?_c('div',{staticClass:"vemoji-main--content",style:({ width: _vm.width })},[_c('div',{staticClass:"vemoji-main--content__head",style:({ height: _vm.height })},[_c('emoji-list',{attrs:{"base-url":_vm.baseUrl,"emoji-data":_vm.customEmojis,"category":_vm.currentCategory},on:{"select":_vm.bindChangeEmoji}})],1),_vm._v(" "),_c('div',{staticClass:"vemoji-main--content__footer"},[_c('category-list',{attrs:{"category-data":_vm.customCategories,"current":_vm.currentCategory},on:{"select":_vm.bindChangeCategory}})],1)]):_vm._e()])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-f8abb2ea_0", { source: ".vemoji-main[data-v-f8abb2ea]{position:relative;display:inline-block}.vemoji-main--target[data-v-f8abb2ea]{cursor:pointer;user-select:none}.vemoji-main--content[data-v-f8abb2ea]{position:absolute;margin-top:8px;left:0;border:1px solid #eee;width:380px;padding-bottom:30px;border-radius:3px;box-shadow:0 2px 8px rgba(110,110,110,.2);overflow:hidden}.vemoji-main--content__head[data-v-f8abb2ea]{max-height:600px;word-break:break-all;overflow:auto;padding:12px 16px}.vemoji-main--content__footer[data-v-f8abb2ea]{height:30px;line-height:30px;position:absolute;width:100%;bottom:0;background-color:#f2f4f7;font-size:14px;color:#555}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-f8abb2ea";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );/**
 * 将文本表情恢复成图片表情，用于显示
 *
 * @param  {string}  html  需要处理的html
 * @param  {object[]}  category  全部的分类数据，用于获取所有的textPattern
 * @param  {object[]}  emojis  选择的emoji数据
 * @param  {string}  baseUrl  categoty.type === image是
 */
/*eslint no-useless-escape: "off"*/
var renewHtml = function (html, category, emojis, baseUrl) {
    if (baseUrl === void 0) { baseUrl = '/'; }
    console.log(html);
    console.log(baseUrl);
    var resultHtml = html;
    category.map(function (cate) {
        if (cate.type === 'image' && cate.textPattern !== '') {
            var patternStr = cate.textPattern.split('${value}');
            if (patternStr.length !== 2) {
                throw new TypeError('prop [customCategories.textPattern] Format error, must contain "${value}", for example "@({$value})"');
            }
            // 正则规则提取
            var patternStart_1 = patternStr[0].replace(new RegExp('', 'g'), '\\');
            var patternEnd_1 = patternStr[1].replace(new RegExp('', 'g'), '\\');
            patternStart_1 = patternStart_1.substring(0, patternStart_1.lastIndexOf('\\'));
            patternEnd_1 = patternEnd_1.substring(0, patternEnd_1.lastIndexOf('\\'));
            // 查找textPattern对应的字符
            var regExp = new RegExp(patternStart_1 + "(.+?)" + patternEnd_1, 'g');
            var result = html.match(regExp) || [];
            // 实行替换对应的图片
            result.map(function (item) {
                var resStr = item
                    .replace(new RegExp(patternStart_1, 'g'), '')
                    .replace(new RegExp(patternEnd_1, 'g'), '');
                var resEmoji = emojis.find(function (item) {
                    return item.text === resStr && item.category === cate.id;
                });
                resultHtml = resultHtml.replace(new RegExp("" + patternStart_1 + resStr + patternEnd_1, 'g'), "<img src=\"" + baseUrl + resEmoji.data + "\" alt=\"" + resEmoji.text + "\" class=\"vemoji-image\" />");
            });
        }
    });
    return resultHtml;
};var VueEmojiBox$1 = {
    install: function (Vue) {
        Vue.component(__vue_component__.name, __vue_component__);
    }
};export default __vue_component__;export{VueEmojiBox$1 as VueEmojiBox,renewHtml};