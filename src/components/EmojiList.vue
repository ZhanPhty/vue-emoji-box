<template>
  <div class="vemoji-emojis">
    <div
      class="vemoji-emojis--item"
      :class="{ 'vemoji-emojis--item__text': category.type !== 'image' }"
      v-for="(item, index) in dataFilter"
      :key="`${item.text}-${index}`"
      @click="bindSelect(item)"
    >
      <img
        v-if="category.type === 'image'"
        :src="getImgUrl(item)"
        :alt="item.text"
        :data-emoji="item.text"
        class="vemoji-emojis--image"
      />
      <span v-else v-html="item.data"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
import { Emoji } from '../models/Emoji'
import { Category } from '../models/Category'
import { formatEmoji } from '../utils/format'

@Component
export default class EmojiList extends Vue {
  @Prop() baseUrl!: string
  // emoji数据
  @Prop({}) emojiData!: Emoji[]
  // 分类数据
  @Prop({}) category!: Category
  // 当前选择的分类
  @Prop({}) current!: string

  // 过滤数据
  get dataFilter() {
    const { id } = this.category
    const data = this.emojiData.filter(item => item.category === id) || []

    return data
  }

  /**
   * 切换分类
   *
   * @param   {[type]}  select  [select description]
   * @return
   */
  @Emit('select')
  bindSelect(item: any) {
    return formatEmoji(this.category.type === 'image' ? this.getImgUrl(item) : '', this.category, item)
  }

  /**
   * 获取img本地路径
   */
  getImgUrl(emoji: any) {
    if (this.baseUrl && this.baseUrl !== '') {
      return `${this.baseUrl}${emoji.data}`
    }
  }
}
</script>

<style scoped lang="less">
.vemoji-emojis {
  margin: 0;
  padding: 0;

  &--item {
    display: inline-block;
    width: 40px;
    line-height: 1;
    text-align: center;
    box-sizing: border-box;
    border-radius: 4px;
    transition: background 0.2s;
    display: inline-block;
    padding: 5px 6px 4px 6px;
    margin: 4px;
    cursor: pointer;
    user-select: none;

    &__text {
      min-height: 28px;
      font-size: 20px;
      line-height: 26px;
    }

    img {
      width: 100%;
    }

    &:hover {
      background: #f0f2f4;
      transition: background 0.2s;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
    }
  }
}
</style>
