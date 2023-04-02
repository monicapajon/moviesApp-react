export type User = {
    id: string
    name: string
    lastname: string
    email: string
    password: string
    birthdate: Date
}

export type SignUpForm = Omit<User, 'id'>

export type Category = {
    id: string
    name: string
    color: string
}

export type AddCategoryForm = Omit<Category, 'id'>

export type Task = {
    id: string
    title: string
    date: Date
    category: Category
    description: string
    status: string
}

export type SliderBanner = {
    items: [] | any
}


export type SliderPosters = {
    items: [] | any
    text: string
}
//type para grilla de Movies Populares, Better Movies
export type GridCardPosters = {
    items: [] | any
    text: string
}
