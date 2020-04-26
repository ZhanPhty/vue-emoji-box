import { Emoji } from '@/models/Emoji'
import { Category } from '@/models/Category'

/**
 * 格式化emoji数据
 *
 * @param  {string}  imgUrl  categoty.type === image是
 * @param  {object}  category  当前emoji的分类
 * @param  {object}  emojis  选择的emoji数据
 */
export const formatEmoji = (imgUrl: string | undefined, category: Category, emojis: Emoji) => {
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
  let resultHtml = html
  category.map(cate => {
    if (cate.type === 'image' && cate.textPattern !== '') {
      const patternStr: string[] = cate.textPattern.split('${value}')
      if (patternStr.length !== 2) {
        throw new TypeError(
          'prop [customCategories.textPattern] Format error, must contain "${value}", for example "@({$value})"'
        )
      }

      // 正则规则提取
      let patternStart = patternStr[0].replace(new RegExp('', 'g'), '\\')
      let patternEnd = patternStr[1].replace(new RegExp('', 'g'), '\\')
      patternStart = patternStart.substring(0, patternStart.lastIndexOf('\\'))
      patternEnd = patternEnd.substring(0, patternEnd.lastIndexOf('\\'))

      // 查找textPattern对应的字符
      const regExp = new RegExp(`${patternStart}(.+?)${patternEnd}`, 'g')
      const result = html.match(regExp) || []

      // 实行替换对应的图片
      result.map((item: string) => {
        const resStr = item
          .replace(new RegExp(patternStart, 'g'), '')
          .replace(new RegExp(patternEnd, 'g'), '')
        const resEmoji: any = emojis.find(item => {
          return item.text === resStr && item.category === cate.id
        })
        resultHtml = resultHtml.replace(
          new RegExp(`${patternStart}${resStr}${patternEnd}`, 'g'),
          `<img src="${baseUrl}${resEmoji.data}" alt="${resEmoji.text}" class="vemoji-image" />`
        )
      })
    }
  })
  return resultHtml
}
