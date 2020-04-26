import { Vue } from 'vue-property-decorator';
import { Emoji } from '../models/Emoji';
import { Category } from '../models/Category';
export default class EmojiList extends Vue {
    baseUrl: string;
    emojiData: Emoji[];
    category: Category;
    current: string;
    get dataFilter(): Emoji[];
    /**
     * 切换分类
     *
     * @param   {[type]}  select  [select description]
     * @return
     */
    bindSelect(item: any): {
        imgData: string;
        type: "" | "emoticon" | "image";
        text: string;
        data: string;
        category: string;
    };
    /**
     * 获取img本地路径
     */
    getImgUrl(emoji: any): string | undefined;
}
//# sourceMappingURL=EmojiList.vue?rollup-plugin-vue=script.d.ts.map