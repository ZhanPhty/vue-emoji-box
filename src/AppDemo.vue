<template>
  <div id="app">
    <div class="title">VueEmojiBox-Demo</div>
    <div class="container">
      <h4>选择的表情数据</h4>
      <div class="code">
        <p>data: {{ changeEmoji.data }}</p>
        <p>category: {{ changeEmoji.category }}</p>
        <p>type: {{ changeEmoji.type }}</p>
        <p>text: {{ changeEmoji.text }}</p>
        <p>textPattern: {{ changeEmoji.textPattern }}</p>
        <p>imgData: <span v-if="changeEmoji.type === 'image'" v-html="changeEmoji.imgData"></span></p>
      </div>
      <div class="html" v-html="renewHtml(textareaVal, cCategories, cEmojis, baseUrl)"></div>
      <div>
        <textarea id="demoText" rows="3" class="demo-text" />
      </div>
      <VueEmojiBox
        :baseUrl="baseUrl"
        :customEmojis="cEmojis"
        :customCategories="cCategories"
        height="200px"
        @change="bindChange"
        targetId="demoText"
        label="😀表情"
        :visible="true"
        v-model="textareaVal"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { VueEmojiBox, renewHtml } from './index'
import { emojiCategory, emojis } from '@/assets/emoji/emoji'

Vue.use(VueEmojiBox)

@Component({
  methods: {
    renewHtml
  }
})
export default class App extends Vue {
  baseUrl = '/emoji/'
  changeEmoji: object = {}
  textareaVal = 'zhegeshi @(茶杯)@(便便)哦的是@(不高兴)@(嘚瑟)@(红领巾)hahahaha'
  cEmojis = emojis
  cCategories = emojiCategory

  bindChange(item) {
    this.changeEmoji = item
  }
}
</script>

<style lang="less">
.title {
  border-bottom: 1px solid #e0e0e0;
  line-height: 2;
  margin-bottom: 10px;
}

.container {
  padding: 20px;
}

.code {
  background-color: #f3f6f9;
  margin-bottom: 30px;
  padding: 20px;
  line-height: 1;

  img {
    width: 30px;
  }
}

.html {
  margin-bottom: 20px;
}

.demo-text {
  width: 280px;
  min-height: 60px;
  padding: 10px 20px;

  &:focus,
  &:active {
    box-shadow: none;
    outline: none;
  }
}
</style>
