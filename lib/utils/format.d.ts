import { Emoji } from '@/models/Emoji';
import { Category } from '@/models/Category';
/**
 * 格式化emoji数据
 *
 * @param  {string}  imgUrl  categoty.type === image是
 * @param  {object}  category  当前emoji的分类
 * @param  {object}  emojis  选择的emoji数据
 */
export declare const formatEmoji: (imgUrl: string | undefined, category: Category, emojis: Emoji) => {
    imgData: string;
    type: "" | "emoticon" | "image";
    text: string;
    data: string;
    category: string;
};
/**
 * 将文本表情恢复成图片表情，用于显示
 *
 * @param  {string}  html  需要处理的html
 * @param  {object[]}  category  全部的分类数据，用于获取所有的textPattern
 * @param  {object[]}  emojis  选择的emoji数据
 * @param  {string}  baseUrl  categoty.type === image是
 */
export declare const renewHtml: (html: string, category: Category[], emojis: Emoji[], baseUrl?: string) => string;
//# sourceMappingURL=format.d.ts.map