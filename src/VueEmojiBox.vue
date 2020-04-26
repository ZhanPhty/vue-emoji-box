<template>
  <div class="vemoji-main" :class="className">
    <div class="vemoji-main--target" v-if="label" @click="bindBoxVisible">
      <span v-if="$slots.label">
        <slot name="label" />
      </span>
      <span>{{ label }}</span>
    </div>
    <div v-if="showBox" class="vemoji-main--content" :style="{ width: width }">
      <div class="vemoji-main--content__head" :style="{ height: height }">
        <emoji-list
          :base-url="baseUrl"
          :emoji-data="customEmojis"
          :category="currentCategory"
          @select="bindChangeEmoji"
        />
      </div>
      <div class="vemoji-main--content__footer">
        <category-list
          :category-data="customCategories"
          :current="currentCategory"
          @select="bindChangeCategory"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator'
import CategoryList from '@/components/CategoryList.vue'
import EmojiList from '@/components/EmojiList.vue'

import { IEmoji } from '@/models/Emoji'
import { ICategory } from '@/models/Category'

import { emojisDefault } from '@/utils/emojis'
import { categoriesDefault } from '@/utils/categories'

@Component({
  components: { CategoryList, EmojiList },
  mounted() {
    // 判断HTMLDivElement是否存在
    if (this.targetId) {
      this.$nextTick(() => {
        this.targetEl = document.getElementById(this.targetId)
        this.initTarget()
      })
    }
  }
})
export default class VueEmojiBox extends Vue {
  @Prop() value!: string
  // 使用服务器emoji图片素材时，默认本地路径@/asstes/emoji路径
  @Prop({ default: '/' }) private readonly baseUrl!: string
  // 定制样式
  @Prop() className!: string
  // 输入框target节点
  @Prop() targetId!: string
  // 控制显示
  @Prop({ default: false }) visible!: boolean
  // 可点击标签
  @Prop({ default: '表情' }) label!: string | boolean
  // 视图宽度
  @Prop({ default: '380px' }) width!: string
  // 视图高度
  @Prop({ default: '200px' }) height!: string
  // 自定义标签
  @Prop({ default: () => emojisDefault }) customEmojis!: IEmoji[]
  // 自定义分类
  @Prop({ default: () => categoriesDefault }) customCategories!: ICategory[]

  // 当前选中的分类
  currentCategory = this.customCategories[0] || {}
  showBox: boolean = this.visible
  targetEl: any = null
  targetType: any = null
  resHtml: any = null
  caret: any = 0

  // 检测
  @Watch('visible')
  onWatchVisible(val: boolean) {
    this.showBox = val
  }

  // 选择emoji标签
  @Emit('change')
  bindChangeEmoji(emoji: IEmoji) {
    // this.showBox = false
    this.targetType && this.insertEmoji(emoji)
    // v-model
    this.$emit('input', this.resHtml)
    return { ...emoji, html: this.resHtml }
  }

  // 切换分类
  bindChangeCategory(item: ICategory) {
    this.currentCategory = item
  }

  // 切换显示
  bindBoxVisible() {
    this.showBox = !this.showBox
  }

  // 初始化target
  initTarget() {
    this.targetType = Object.prototype.toString.call(this.targetEl).slice(8, -1)
    if (
      this.targetType !== 'HTMLDivElement' &&
      this.targetType !== 'HTMLTextAreaElement' &&
      this.targetType !== 'HTMLInputElement'
    ) {
      throw new TypeError('prop [target] must be the element of input or div with contenteditable')
    }
    this.targetEl.setAttribute('contenteditable', true)
    this.addClickEvent()
  }

  // 监控事件，记录
  addClickEvent() {
    this.targetEl.addEventListener('click', () => {
      this.caret = this.targetEl.selectionStart || (document as any).getSelection().anchorOffset
    })
    this.targetEl.addEventListener('keyup', () => {
      this.caret = this.targetEl.selectionStart || (document as any).getSelection().anchorOffset
    })
  }

  // 插入数据处理
  insertEmoji(emoji: IEmoji) {
    const htmlVal = this.targetEl.value || this.targetEl.innerHTML
    this.resHtml = `${htmlVal.substr(0, this.caret)}${emoji.text}${htmlVal.substr(this.caret)}`
    this.caret += emoji.text.length

    if (this.targetType === 'HTMLDivElement') {
      this.targetEl.innerHTML = this.resHtml
    } else {
      this.targetEl.value = this.resHtml
    }
  }
}
</script>

<style lang="less" scoped>
@footerHeigth: 30px;

.vemoji-main {
  position: relative;
  display: inline-block;

  &--target {
    cursor: pointer;
    user-select: none;
  }

  &--content {
    position: absolute;
    margin-top: 8px;
    left: 0;
    border: 1px solid #eee;
    width: 380px;
    padding-bottom: @footerHeigth;
    border-radius: 3px;
    box-shadow: 0 2px 8px rgba(110, 110, 110, 0.2);
    overflow: hidden;

    &__head {
      max-height: 600px;
      word-break: break-all;
      overflow: auto;
      padding: 12px 16px;
    }

    &__footer {
      height: @footerHeigth;
      line-height: @footerHeigth;
      position: absolute;
      width: 100%;
      bottom: 0;
      background-color: #f2f4f7;
      font-size: 14px;
      color: #555;
    }
  }
}
</style>
