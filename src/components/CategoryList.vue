<template>
  <div class="vemoji-categories">
    <span
      class="vemoji-categories--item"
      v-for="(item, index) in categoryData"
      :key="`${item.id}-${index}`"
      :class="{ 'vemoji-categories--item__active': item.id === current.id }"
      @click="bindChange(item)"
      >{{ item.icon || item.name || item.id }}</span
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
import { Category } from '../models/Category'

@Component
export default class CategoryList extends Vue {
  // 分类数据
  @Prop({}) categoryData!: Category[]
  // 当前选择的分类
  @Prop({}) current!: Category

  // 切换分类
  @Emit('select')
  bindChange(item: Category) {
    return item
  }
}
</script>

<style scoped lang="less">
.vemoji-categories {
  margin: 0;
  padding: 0;

  &--item {
    display: inline-block;
    padding-left: 12px;
    padding-right: 12px;
    cursor: pointer;

    &:hover,
    &__active {
      background-color: #fff;
    }
  }
}
</style>
