import React, { Component } from "react";

import Layout from "../Components/Layout";
import Card from "../Components/Card";
import { MoviesType } from "../Utils/Types/movie";

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: MoviesType[];
}

export default class Favorite extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      // state: default value
      datas: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const getFavorite = localStorage.getItem("FavMovie");
    if (getFavorite) {
      this.setState({ datas: JSON.parse(getFavorite) });
    }
    this.setState({ loading: false });
  }

  removefavorite(data: MoviesType) {
    /*
    Menghapus data (object) di dalam sebuah array of object.
    TODO: Update tampilan ketika data sudah berhasil dihapus
    BONUS: Tambahkan konfirmasi ulang sebelum melakukan penghapusan data untuk mencegah terjadinya salah klik
    */
    let dupeData: MoviesType[] = this.state.datas.slice();
    const filterData = dupeData.filter((item) => item.id !== data.id);
    localStorage.setItem("FavMovie", JSON.stringify(filterData));
    alert(`Delete ${data.title} from favorite list`);
  }

  render() {
    return (
      <Layout>
        <div className="grid grid-cols-4 gap-3">
           this.state.datas.map((data) => (
                <Card
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                  id={data.id}
                />
              ))}
        </div>
      </Layout>
    );
  }
}
