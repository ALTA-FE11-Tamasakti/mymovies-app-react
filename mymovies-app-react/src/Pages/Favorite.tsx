import React, { Component } from "react";

import { LoadingAnimation } from "../Components/Loading";
import Layout from "../Components/Layout";
import Card from "../Components/Card";
import { MovieType } from "../Utils/movie";

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: MovieType[];
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

  removeFavorite(data: MovieType) {
    if (window.confirm("Are you sure want to remove from favorites")) {
      const returnArray = this.state.datas.filter((fav) => fav.id !== data.id);
      localStorage.setItem("FavMovie", JSON.stringify(returnArray));
    } else {
      return null;
    }
    /*
    Menghapus data (object) di dalam sebuah array of object.
    TODO: Update tampilan ketika data sudah berhasil dihapus
    TODO: Tambahkan konfirmasi ulang sebelum melakukan penghapusan data untuk mencegah terjadinya salah klik
    */
  }

  render() {
    return (
      <Layout>
        <div className="grid grid-cols-4 gap-3 p-3">
          {this.state.loading
            ? [...Array(20).keys()].map((data) => (
                <LoadingAnimation key={data} />
              ))
            : this.state.datas.map((data) => (
                <Card
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                  id={data.id}
                  labelButton="REMOVE FROM FAVORITE"
                  onClickFav={() => this.removeFavorite(data)}
                />
              ))}
        </div>
      </Layout>
    );
  }
}
