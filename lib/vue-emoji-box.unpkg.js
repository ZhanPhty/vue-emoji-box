var VueEmojiBox=(function(exports,vuePropertyDecorator){'use strict';/*! *****************************************************************************
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
}var CategoryList = /** @class */ (function (_super) {
    __extends(CategoryList, _super);
    function CategoryList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 切换分类
    CategoryList.prototype.bindChange = function (item) {
        return item;
    };
    __decorate([
        vuePropertyDecorator.Prop({})
    ], CategoryList.prototype, "categoryData", void 0);
    __decorate([
        vuePropertyDecorator.Prop({})
    ], CategoryList.prototype, "current", void 0);
    __decorate([
        vuePropertyDecorator.Emit('select')
    ], CategoryList.prototype, "bindChange", null);
    CategoryList = __decorate([
        vuePropertyDecorator.Component
    ], CategoryList);
    return CategoryList;
}(vuePropertyDecorator.Vue));function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
const __vue_script__ = CategoryList;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vemoji-categories"},_vm._l((_vm.categoryData),function(item,index){return _c('span',{key:((item.id) + "-" + index),staticClass:"vemoji-categories--item",class:{ 'vemoji-categories--item__active': item.id === _vm.current.id },on:{"click":function($event){return _vm.bindChange(item)}}},[_vm._v(_vm._s(item.icon || item.name || item.id))])}),0)};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-33dd68da_0", { source: ".vemoji-categories[data-v-33dd68da]{margin:0;padding:0}.vemoji-categories--item[data-v-33dd68da]{display:inline-block;padding-left:12px;padding-right:12px;cursor:pointer}.vemoji-categories--item[data-v-33dd68da]:hover,.vemoji-categories--item__active[data-v-33dd68da]{background-color:#fff}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-33dd68da";
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
 * 格式化emoji数据
 *
 * @param  {string}  imgUrl  categoty.type === image是
 * @param  {object}  category  当前emoji的分类
 * @param  {object}  emojis  选择的emoji数据
 */
var formatEmoji = function (imgUrl, category, emojis) {
    return __assign(__assign({}, emojis), { imgData: "<img src=\"" + imgUrl + "\" alt=\"" + emojis.text + "\" class=\"vemoji-image\" />", type: category.type, text: category.textPattern.replace('${value}', emojis.text) || emojis.text });
};
/**
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
                resultHtml = resultHtml.replace(new RegExp("" + patternStart_1 + resStr + patternEnd_1, 'g'), "<img src=\"" + baseUrl + (baseUrl.lastIndexOf('/') === baseUrl.length - 1 ? '' : '/') + resEmoji.data + "\" alt=\"" + resEmoji.text + "\" class=\"vemoji-image\" />");
            });
        }
    });
    return resultHtml;
};var EmojiList = /** @class */ (function (_super) {
    __extends(EmojiList, _super);
    function EmojiList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EmojiList.prototype, "dataFilter", {
        // 过滤数据
        get: function () {
            var id = this.category.id;
            var data = this.emojiData.filter(function (item) { return item.category === id; }) || [];
            return data;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 切换分类
     *
     * @param   {[type]}  select  [select description]
     * @return
     */
    EmojiList.prototype.bindSelect = function (item) {
        return formatEmoji(this.category.type === 'image' ? this.getImgUrl(item) : '', this.category, item);
    };
    /**
     * 获取img本地路径
     */
    EmojiList.prototype.getImgUrl = function (emoji) {
        if (this.baseUrl && this.baseUrl !== '') {
            return "" + this.baseUrl + (this.baseUrl.lastIndexOf('/') === this.baseUrl.length - 1 ? '' : '/') + emoji.data;
        }
    };
    __decorate([
        vuePropertyDecorator.Prop()
    ], EmojiList.prototype, "baseUrl", void 0);
    __decorate([
        vuePropertyDecorator.Prop({})
    ], EmojiList.prototype, "emojiData", void 0);
    __decorate([
        vuePropertyDecorator.Prop({})
    ], EmojiList.prototype, "category", void 0);
    __decorate([
        vuePropertyDecorator.Prop({})
    ], EmojiList.prototype, "current", void 0);
    __decorate([
        vuePropertyDecorator.Emit('select')
    ], EmojiList.prototype, "bindSelect", null);
    EmojiList = __decorate([
        vuePropertyDecorator.Component
    ], EmojiList);
    return EmojiList;
}(vuePropertyDecorator.Vue));/* script */
const __vue_script__$1 = EmojiList;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vemoji-emojis"},_vm._l((_vm.dataFilter),function(item,index){return _c('div',{key:((item.text) + "-" + index),staticClass:"vemoji-emojis--item",class:{ 'vemoji-emojis--item__text': _vm.category.type !== 'image' },on:{"click":function($event){return _vm.bindSelect(item)}}},[(_vm.category.type === 'image')?_c('img',{staticClass:"vemoji-emojis--image",attrs:{"src":_vm.getImgUrl(item),"alt":item.text,"data-emoji":item.text}}):_c('span',{domProps:{"innerHTML":_vm._s(item.data)}})])}),0)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-30cf9e5a_0", { source: ".vemoji-emojis[data-v-30cf9e5a]{margin:0;padding:0}.vemoji-emojis--item[data-v-30cf9e5a]{width:40px;line-height:1;text-align:center;box-sizing:border-box;border-radius:4px;transition:background .2s;display:inline-block;padding:5px 6px 4px 6px;margin:4px;cursor:pointer;user-select:none}.vemoji-emojis--item__text[data-v-30cf9e5a]{min-height:28px;font-size:20px;line-height:26px}.vemoji-emojis--item img[data-v-30cf9e5a]{width:100%}.vemoji-emojis--item[data-v-30cf9e5a]:hover{background:#f0f2f4;transition:background .2s;box-shadow:0 2px 2px 0 rgba(0,0,0,.14)}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-30cf9e5a";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    createInjector,
    undefined,
    undefined
  );var emojisDefault = [
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
        this.showBox = false;
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
        vuePropertyDecorator.Prop()
    ], VueEmojiBox.prototype, "value", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ default: '/' })
    ], VueEmojiBox.prototype, "baseUrl", void 0);
    __decorate([
        vuePropertyDecorator.Prop()
    ], VueEmojiBox.prototype, "className", void 0);
    __decorate([
        vuePropertyDecorator.Prop()
    ], VueEmojiBox.prototype, "targetId", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ default: false })
    ], VueEmojiBox.prototype, "visible", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ default: '表情' })
    ], VueEmojiBox.prototype, "label", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ default: '380px' })
    ], VueEmojiBox.prototype, "width", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ default: '200px' })
    ], VueEmojiBox.prototype, "height", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ default: function () { return emojisDefault; } })
    ], VueEmojiBox.prototype, "customEmojis", void 0);
    __decorate([
        vuePropertyDecorator.Prop({ default: function () { return categoriesDefault; } })
    ], VueEmojiBox.prototype, "customCategories", void 0);
    __decorate([
        vuePropertyDecorator.Watch('visible')
    ], VueEmojiBox.prototype, "onWatchVisible", null);
    __decorate([
        vuePropertyDecorator.Emit('change')
    ], VueEmojiBox.prototype, "bindChangeEmoji", null);
    VueEmojiBox = __decorate([
        vuePropertyDecorator.Component({
            components: { CategoryList: __vue_component__, EmojiList: __vue_component__$1 }
        })
    ], VueEmojiBox);
    return VueEmojiBox;
}(vuePropertyDecorator.Vue));/* script */
const __vue_script__$2 = VueEmojiBox;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vemoji-main",class:_vm.className},[(_vm.label)?_c('div',{staticClass:"vemoji-main--target",on:{"click":_vm.bindBoxVisible}},[(_vm.$slots.label)?_c('span',[_vm._t("label")],2):_c('span',[_vm._v(_vm._s(_vm.label))])]):_vm._e(),_vm._v(" "),(_vm.showBox)?_c('div',{staticClass:"vemoji-main--content",style:({ width: _vm.width })},[_c('div',{staticClass:"vemoji-main--content__head",style:({ height: _vm.height })},[_c('emoji-list',{attrs:{"base-url":_vm.baseUrl,"emoji-data":_vm.customEmojis,"category":_vm.currentCategory},on:{"select":_vm.bindChangeEmoji}})],1),_vm._v(" "),_c('div',{staticClass:"vemoji-main--content__footer"},[_c('category-list',{attrs:{"category-data":_vm.customCategories,"current":_vm.currentCategory},on:{"select":_vm.bindChangeCategory}})],1)]):_vm._e()])};
var __vue_staticRenderFns__$2 = [];

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-12d304e5_0", { source: ".vemoji-main[data-v-12d304e5]{position:relative;display:inline-block}.vemoji-main--target[data-v-12d304e5]{cursor:pointer;user-select:none}.vemoji-main--content[data-v-12d304e5]{position:absolute;margin-top:8px;left:0;border:1px solid #eee;width:380px;background-color:#fff;padding-bottom:30px;border-radius:3px;box-shadow:0 2px 8px rgba(110,110,110,.2);overflow:hidden;z-index:99}.vemoji-main--content__head[data-v-12d304e5]{max-height:600px;word-break:break-all;overflow:auto;padding:12px 16px;text-align:left}.vemoji-main--content__footer[data-v-12d304e5]{height:30px;line-height:30px;text-align:left;position:absolute;width:100%;bottom:0;background-color:#f2f4f7;font-size:14px;color:#555}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = "data-v-12d304e5";
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    createInjector,
    undefined,
    undefined
  );var VueEmojiBox$1 = {
    install: function (Vue) {
        Vue.component(__vue_component__$2.name, __vue_component__$2);
    }
};exports.VueEmojiBox=VueEmojiBox$1;exports.default=__vue_component__$2;exports.renewHtml=renewHtml;return exports;}({},vuePropertyDecorator));