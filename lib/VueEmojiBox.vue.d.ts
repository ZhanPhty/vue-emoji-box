import { Vue } from 'vue-property-decorator';
import { IEmoji } from './models/Emoji';
import { ICategory } from './models/Category';
export default class VueEmojiBox extends Vue {
    value: string;
    private readonly baseUrl;
    className: string;
    targetId: string;
    visible: boolean;
    label: string | boolean;
    width: string;
    height: string;
    customEmojis: IEmoji[];
    customCategories: ICategory[];
    currentCategory: ICategory;
    showBox: boolean;
    targetEl: any;
    targetType: any;
    resHtml: any;
    caret: any;
    mounted(): void;
    onWatchVisible(val: boolean): void;
    bindChangeEmoji(emoji: IEmoji): {
        html: any;
        data: string;
        category: string;
        text: string;
    };
    bindChangeCategory(item: ICategory): void;
    bindBoxVisible(): void;
    initTarget(): void;
    addClickEvent(): void;
    insertEmoji(emoji: IEmoji): void;
}
//# sourceMappingURL=VueEmojiBox.vue?rollup-plugin-vue=script.d.ts.map