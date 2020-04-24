export interface IEmoji {
  data: string
  category: string
  text: string
}

export class Emoji implements IEmoji {
  constructor(public data: string, public category: string, public text: string) {}
}
