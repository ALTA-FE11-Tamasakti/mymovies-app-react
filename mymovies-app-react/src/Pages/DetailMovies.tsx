import { Component } from "react";

type GenreType = {
  id?: number;
  name?: string;
};

interface DataType {
  id?: number;
  title?: string;
  poster_path?: string;
  overview?: string;
  release_date?: string;
  runtime?: number;
  genres?: GenreType[];
}

interface PropsType {}

interface StateType {
  loading: boolean;
  data: DataType;
}

export default class DetailMovie extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      // state: default value
      data: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(
      "https://api.themoviedb.org/3/movie/683328?api_key=a8644e3a9f5212bdb57ae9031e4a6cbf&language=en-US",

      { method: "GET" }
    )
      .then((response) => response.json()) // untuk mengkonversi response menjadi json
      .then((data) => {
        // dia akan masuk ke then jikalau dia berstatus OK atau berhasil
        this.setState({ data }); // this.setState({ data: data });
      })
      .catch((error) => {
        // masuk catch ketika server mengirimkan status tidak berhasil
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <div className="flex w-full h-[50vh] ">
        <img
          src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`}
          alt={this.state.data.title}
        />
        <div className="p-5">
          <p>Title: {this.state.data.title}</p>

          <p>Runtime: {this.state.data.runtime}</p>
          <p>
            Genre:{" "}
            {this.state.data.genres
              ?.map((genre) => {
                return genre.name;
              })
              .join(", ")}
          </p>
          <p className="text-justify">Overview: {this.state.data.overview}</p>
        </div>
      </div>
    );
  }
}
