import { Emoji } from '@/models/Emoji'
import { Category } from '@/models/Category'

/**
 * 格式化emoji数据
 *
 * @param  {string}  imgUrl  categoty.type === image是
 * @param  {object}  category  当前emoji的分类
 * @param  {object}  emojis  选择的emoji数据
 */
export const formatEmoji = (imgUrl: string, category: Category, emojis: Emoji) => {
  return {
    ...emojis,
    imgData: `<img src="${imgUrl}" alt="${emojis.text}" class="vemoji-image" />`,
    type: category.type,
    text: category.textPattern.replace('${value}', emojis.text) || emojis.text
  }
}

/**
 * 将文本表情恢复成图片表情，用于显示
 *
 * @param  {string}  html  需要处理的html
 * @param  {object[]}  category  全部的分类数据，用于获取所有的textPattern
 * @param  {object[]}  emojis  选择的emoji数据
 * @param  {string}  baseUrl  categoty.type === image是
 */

/*eslint no-useless-escape: "off"*/
export const renewHtml = (html: string, category: Category[], emojis: Emoji[], baseUrl = '/') => {
  console.log(html)
  console.log(baseUrl)
  category.map(cate => {
    if (cate.type === 'image' && cate.textPattern !== '') {
      const patternStr = cate.textPattern.split('${value}')
      console.log(patternStr)
      const reg = new RegExp(`\\@\\((.+?)\\)`, 'g')
      console.log(reg)
      const regex = /\@\((.+?)\)/g
      const result = html.match(reg)

      console.log(result)
    }
  })
  return html
}
