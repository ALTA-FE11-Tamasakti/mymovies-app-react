import { Component } from "react";
import axios from "axios";

import Loading from "../Components/Loading";
import Carousel from "../Components/Carousel";
import Layout from "../Components/Layout";
import Card from "../Components/Card";
import Footer from "../Components/Footer";

interface DatasType {
  id: number;
  title: string;
  poster_path: string;
}

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: DatasType[];
  page: number;
}

export default class Index extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      // state: default value
      datas: [],
      loading: true,
      page: 1,
    };
  }
  // Constructor end

  // side effect
  componentDidMount() {
    // Jika dilakukan perubahan nilai dari sebuah state didalam side effect, maka akan dilakukan rerender
    this.fetchData();
  }

  fetchData() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=a8644e3a9f5212bdb57ae9031e4a6cbf&language=en-US&page=1"
      )
      .then((data) => {
        // apapun outputnya entah dia berhasil atau gagal, dimana terlihat ada jawaban dari backend, akan masuk ke then
        const { results } = data.data; // destructuring
        this.setState({ datas: results });
      })
      .catch((error) => {
        // akan masuk ke catch jikalau sama sekali tidak menerima jawaban dari backend, tidak di response dari backend, biasanya server down
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  nextpage() {
    const newPage = this.state.page + 1;
    this.setState({ page: newPage }, () => console.log(this.state.page));
  }

  prevPage() {
    const newPage = this.state.page - 1;
    this.setState({ page: newPage });
  }

  handleFavorite(data: DatasType) {
    //Cek apakah film yang dipilih sudah ditambahkan atau belum, push jika belim ada, jika sudah ada kasih alert, jika tidak silahkan push datanya ke local storahe
    const checkExist = localStorage.getItem("favMovie");
    console.log(checkExist);

    if (checkExist) {
      let parseFav: DatasType[] = JSON.parse(checkExist);
      parseFav.push(data);
      localStorage.setItem("favMovie", JSON.stringify(parseFav));
    } else {
      localStorage.setItem("favMovie", JSON.stringify([data]));
      alert("Succes added movie to favorite");
    }
  }

  render() {
    return (
      <Layout>
        {!this.state.loading && (
          <Carousel
            datas={this.state.datas.slice(0, 5)}
            content={(data) => (
              <div
                className="w-full h-full flex justify-center items-center bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url(https://image.tmdb.org/t/p/original${data.poster_path})`,
                }}
              >
                <p className="text-white tracking-widest font-bold break-words text-2xl">
                  {data.title}
                </p>
              </div>
            )}
          />
        )}
        <div className="grid grid-cols-4 gap-3 p-3">
          {this.state.loading
            ? [...Array(20).keys()].map((data) => <Loading key={data} />)
            : this.state.datas.map((data) => (
                <Card
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                  id={data.id}
                  onClickFav={() => this.handleFavorite(data)}
                />
              ))}
        </div>
        <Footer />
      </Layout>
    );
  }
}
