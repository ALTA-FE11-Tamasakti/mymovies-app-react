import { useState, useEffect, FC } from "react";

import { LoadingAnimation } from "../Components/Loading";
import Layout from "../Components/Layout";
import Card from "../Components/Card";
import { MovieType } from "../Utils/movie";
import { useTitle } from "../Utils/Hooks/useTitle";

const Favorite = () => {
  useTitle("Filmku - Favorites");
  const [datas, setDatas] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const getFavorite = localStorage.getItem("FavMovie");
    if (getFavorite) {
      setDatas(JSON.parse(getFavorite));
    }
    setLoading(false);
  }

  function removeFavorite(data: MovieType) {
    let dupeDatas: MovieType[] = datas.slice();
    const filterData = dupeDatas.filter((item) => item.id !== data.id);
    localStorage.setItem("FavMovie", JSON.stringify(filterData));
    alert(`Delete ${data.title} from favorite list`);
  }

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-3 p-3">
        {loading
          ? [...Array(20).keys()].map((data) => <LoadingAnimation key={data} />)
          : datas.map((data) => (
              <Card
                key={data.id}
                title={data.title}
                image={data.poster_path}
                id={data.id}
                labelButton="REMOVE FROM FAVORITE"
                onClickFav={() => removeFavorite(data)}
              />
            ))}
      </div>
    </Layout>
  );
};

export default Favorite;
