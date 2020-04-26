'use strict';Object.defineProperty(exports,'__esModule',{value:true});var vuePropertyDecorator=require('vue-property-decorator');/*! *****************************************************************************
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

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}let CategoryList = class CategoryList extends vuePropertyDecorator.Vue {
    // 切换分类
    bindChange(item) {
        return item;
    }
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
var script = CategoryList;function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
const __vue_script__ = script;

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
const formatEmoji = (imgUrl, category, emojis) => {
    return {
        ...emojis,
        imgData: `<img src="${imgUrl}" alt="${emojis.text}" class="vemoji-image" />`,
        type: category.type,
        text: category.textPattern.replace('${value}', emojis.text) || emojis.text
    };
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
const renewHtml = (html, category, emojis, baseUrl = '/') => {
    let resultHtml = html;
    category.map(cate => {
        if (cate.type === 'image' && cate.textPattern !== '') {
            const patternStr = cate.textPattern.split('${value}');
            if (patternStr.length !== 2) {
                throw new TypeError('prop [customCategories.textPattern] Format error, must contain "${value}", for example "@({$value})"');
            }
            // 正则规则提取
            let patternStart = patternStr[0].replace(new RegExp('', 'g'), '\\');
            let patternEnd = patternStr[1].replace(new RegExp('', 'g'), '\\');
            patternStart = patternStart.substring(0, patternStart.lastIndexOf('\\'));
            patternEnd = patternEnd.substring(0, patternEnd.lastIndexOf('\\'));
            // 查找textPattern对应的字符
            const regExp = new RegExp(`${patternStart}(.+?)${patternEnd}`, 'g');
            const result = html.match(regExp) || [];
            // 实行替换对应的图片
            result.map((item) => {
                const resStr = item
                    .replace(new RegExp(patternStart, 'g'), '')
                    .replace(new RegExp(patternEnd, 'g'), '');
                const resEmoji = emojis.find(item => {
                    return item.text === resStr && item.category === cate.id;
                });
                resultHtml = resultHtml.replace(new RegExp(`${patternStart}${resStr}${patternEnd}`, 'g'), `<img src="${baseUrl}${resEmoji.data}" alt="${resEmoji.text}" class="vemoji-image" />`);
            });
        }
    });
    return resultHtml;
};let EmojiList = class EmojiList extends vuePropertyDecorator.Vue {
    // 过滤数据
    get dataFilter() {
        const { id } = this.category;
        const data = this.emojiData.filter(item => item.category === id) || [];
        return data;
    }
    /**
     * 切换分类
     *
     * @param   {[type]}  select  [select description]
     * @return
     */
    bindSelect(item) {
        return formatEmoji(this.category.type === 'image' ? this.getImgUrl(item) : '', this.category, item);
    }
    /**
     * 获取img本地路径
     */
    getImgUrl(emoji) {
        if (this.baseUrl && this.baseUrl !== '') {
            return `${this.baseUrl}${emoji.data}`;
        }
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
var script$1 = EmojiList;/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vemoji-emojis"},_vm._l((_vm.dataFilter),function(item,index){return _c('div',{key:((item.text) + "-" + index),staticClass:"vemoji-emojis--item",class:{ 'vemoji-emojis--item__text': _vm.category.type !== 'image' },on:{"click":function($event){return _vm.bindSelect(item)}}},[(_vm.category.type === 'image')?_c('img',{staticClass:"vemoji-emojis--image",attrs:{"src":_vm.getImgUrl(item),"alt":item.text,"data-emoji":item.text}}):_c('span',{domProps:{"innerHTML":_vm._s(item.data)}})])}),0)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-0ce1be2e_0", { source: ".vemoji-emojis[data-v-0ce1be2e]{margin:0;padding:0}.vemoji-emojis--item[data-v-0ce1be2e]{width:40px;line-height:1;text-align:center;box-sizing:border-box;border-radius:4px;transition:background .2s;display:inline-block;padding:5px 6px 4px 6px;margin:4px;cursor:pointer;user-select:none}.vemoji-emojis--item__text[data-v-0ce1be2e]{min-height:28px;font-size:20px;line-height:26px}.vemoji-emojis--item img[data-v-0ce1be2e]{width:100%}.vemoji-emojis--item[data-v-0ce1be2e]:hover{background:#f0f2f4;transition:background .2s;box-shadow:0 2px 2px 0 rgba(0,0,0,.14)}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-0ce1be2e";
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
  );const emojisDefault = [
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
];const categoriesDefault = [
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
];let VueEmojiBox = class VueEmojiBox extends vuePropertyDecorator.Vue {
    constructor() {
        super(...arguments);
        // 当前选中的分类
        this.currentCategory = this.customCategories[0] || {};
        this.showBox = this.visible;
        this.targetEl = null;
        this.targetType = null;
        this.resHtml = null;
        this.caret = 0;
    }
    mounted() {
        // 判断HTMLDivElement是否存在
        if (this.targetId) {
            this.$nextTick(() => {
                this.targetEl = document.getElementById(this.targetId);
                this.initTarget();
            });
        }
    }
    // 检测
    onWatchVisible(val) {
        this.showBox = val;
    }
    // 选择emoji标签
    bindChangeEmoji(emoji) {
        // this.showBox = false
        this.targetType && this.insertEmoji(emoji);
        // v-model
        this.$emit('input', this.resHtml);
        return { ...emoji, html: this.resHtml };
    }
    // 切换分类
    bindChangeCategory(item) {
        this.currentCategory = item;
    }
    // 切换显示
    bindBoxVisible() {
        this.showBox = !this.showBox;
    }
    // 初始化target
    initTarget() {
        this.targetType = Object.prototype.toString.call(this.targetEl).slice(8, -1);
        if (this.targetType !== 'HTMLDivElement' &&
            this.targetType !== 'HTMLTextAreaElement' &&
            this.targetType !== 'HTMLInputElement') {
            throw new TypeError('prop [target] must be the element of input or div with contenteditable');
        }
        this.targetEl.setAttribute('contenteditable', true);
        this.addClickEvent();
    }
    // 监控事件，记录
    addClickEvent() {
        this.targetEl.addEventListener('click', () => {
            this.caret = this.targetEl.selectionStart || document.getSelection().anchorOffset;
        });
        this.targetEl.addEventListener('keyup', () => {
            this.caret = this.targetEl.selectionStart || document.getSelection().anchorOffset;
        });
    }
    // 插入数据处理
    insertEmoji(emoji) {
        const htmlVal = this.targetEl.value || this.targetEl.innerHTML;
        this.resHtml = `${htmlVal.substr(0, this.caret)}${emoji.text}${htmlVal.substr(this.caret)}`;
        this.caret += emoji.text.length;
        if (this.targetType === 'HTMLDivElement') {
            this.targetEl.innerHTML = this.resHtml;
        }
        else {
            this.targetEl.value = this.resHtml;
        }
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
    vuePropertyDecorator.Prop({ default: () => emojisDefault })
], VueEmojiBox.prototype, "customEmojis", void 0);
__decorate([
    vuePropertyDecorator.Prop({ default: () => categoriesDefault })
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
var script$2 = VueEmojiBox;/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vemoji-main",class:_vm.className},[(_vm.label)?_c('div',{staticClass:"vemoji-main--target",on:{"click":_vm.bindBoxVisible}},[(_vm.$slots.label)?_c('span',[_vm._t("label")],2):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.label))])]):_vm._e(),_vm._v(" "),(_vm.showBox)?_c('div',{staticClass:"vemoji-main--content",style:({ width: _vm.width })},[_c('div',{staticClass:"vemoji-main--content__head",style:({ height: _vm.height })},[_c('emoji-list',{attrs:{"base-url":_vm.baseUrl,"emoji-data":_vm.customEmojis,"category":_vm.currentCategory},on:{"select":_vm.bindChangeEmoji}})],1),_vm._v(" "),_c('div',{staticClass:"vemoji-main--content__footer"},[_c('category-list',{attrs:{"category-data":_vm.customCategories,"current":_vm.currentCategory},on:{"select":_vm.bindChangeCategory}})],1)]):_vm._e()])};
var __vue_staticRenderFns__$2 = [];

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-40683e67_0", { source: ".vemoji-main[data-v-40683e67]{position:relative;display:inline-block}.vemoji-main--target[data-v-40683e67]{cursor:pointer;user-select:none}.vemoji-main--content[data-v-40683e67]{position:absolute;margin-top:8px;left:0;border:1px solid #eee;width:380px;padding-bottom:30px;border-radius:3px;box-shadow:0 2px 8px rgba(110,110,110,.2);overflow:hidden}.vemoji-main--content__head[data-v-40683e67]{max-height:600px;word-break:break-all;overflow:auto;padding:12px 16px}.vemoji-main--content__footer[data-v-40683e67]{height:30px;line-height:30px;position:absolute;width:100%;bottom:0;background-color:#f2f4f7;font-size:14px;color:#555}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = "data-v-40683e67";
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
  );const VueEmojiBox$1 = {
    install(Vue) {
        Vue.component(__vue_component__$2.name, __vue_component__$2);
    }
};exports.VueEmojiBox=VueEmojiBox$1;exports.default=__vue_component__$2;exports.renewHtml=renewHtml;