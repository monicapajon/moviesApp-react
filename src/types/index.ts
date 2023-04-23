export type User = {
    id: string
    name: string
    lastname: string
    email: string
    password: string
    birthdate: Date
    token?: string | null;
}

export type LoginForm = {
    email: string;
    pass: string;
  };

  export type SignUpForm = Omit<User, 'id' | 'birthdate'> & { birthdate: Date}
  export type SignUpPayload = SignUpForm

  export type Movie = {
    title: string;
    id: number;
    poster_path: string;
    overview: string;
    backdrop_path?: string | null;
    budget: string;
    homepage: string;
    release_date: string;
    vote_count: number;
};

//  Banner
export type InfoMovies = {
    items: Partial<Movie>[]
    text?: string
};

// Search
export type FormsFields = {
    query: string
};

//------------------------
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
    text?: string
}

export type GDescript = {
    items: [] | any
}






  