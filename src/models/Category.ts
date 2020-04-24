export interface ICategory {
  id: string
  name: string
  icon: string
  textPattern: string
  type: '' | 'emoticon' | 'image'
}

export class Category implements ICategory {
  constructor(
    public id: string,
    public name: string,
    public icon: string,
    public textPattern: string,
    public type: '' | 'emoticon' | 'image'
  ) {}
}
