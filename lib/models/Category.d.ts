export interface ICategory {
    id: string;
    name: string;
    icon: string;
    textPattern: string;
    type: '' | 'emoticon' | 'image';
}
export declare class Category implements ICategory {
    id: string;
    name: string;
    icon: string;
    textPattern: string;
    type: '' | 'emoticon' | 'image';
    constructor(id: string, name: string, icon: string, textPattern: string, type: '' | 'emoticon' | 'image');
}
//# sourceMappingURL=Category.d.ts.map