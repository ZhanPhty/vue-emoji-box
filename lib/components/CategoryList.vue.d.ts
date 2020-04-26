import { Vue } from 'vue-property-decorator';
import { Category } from '../models/Category';
export default class CategoryList extends Vue {
    categoryData: Category[];
    current: Category;
    bindChange(item: Category): Category;
}
//# sourceMappingURL=CategoryList.vue?rollup-plugin-vue=script.d.ts.map