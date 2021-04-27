export interface IMovie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface IMovieListResp {
    Search: IMovie[];
    Response: 'True' | 'False';
    totalResults: string;
}

export interface IMovieDetail extends IMovie {
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    imdbRating: string;
    imbdVotes: string;
    Response: 'True' | 'False';
}