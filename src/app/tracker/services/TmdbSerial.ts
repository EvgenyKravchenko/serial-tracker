export class TmdbSerial {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;

  created_by: Person[];
  episode_run_time: number[];
  genres: Genre[];
  homepage: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  production_companies: ProductionCompany[];
  seasons: Season[];
  status: string; // move to enum
  type: string; // possibly enum
}


export class Person {
  id: number;
  name: string;
  profile_path: string;
}

export class Genre {
  id: number;
  name: string;
}

export class Network {
  id: number;
  name: string;
}

export class ProductionCompany {
  id: number;
  name: string;
}

export class Season {
  air_date: string;
  episode_count: number;
  id: number;
  poster_path: string;
  season_number: number;
}
