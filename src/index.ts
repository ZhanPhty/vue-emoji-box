import { PluginObject } from 'vue'
import _VueEmojiBox from './VueEmojiBox.vue'

import { renewHtml } from './utils/format';
// import { emojisDefault } from './utils/emojis'; 

const VueEmojiBox: PluginObject<_VueEmojiBox> = {
  install(Vue) {
    Vue.component(_VueEmojiBox.name, _VueEmojiBox)
  }
}

export { VueEmojiBox, renewHtml }
export default _VueEmojiBox
