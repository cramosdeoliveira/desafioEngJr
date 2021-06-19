export interface Animal {
  id: number
  postDate: Date
  url: string
  allowComments: boolean
  likes: number
  comments: number
  userId: number
}


export type Animais = Array<Animal>
