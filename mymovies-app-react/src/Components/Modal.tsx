import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { LoadingAnimation } from "../Components/Loading";
import Carousel from "../Components/Carousel";
import Layout from "../Components/Layout";
import { MovieType, VideosType } from "../Utils/movie";
import { useTitle } from "../Utils/Hooks/useTitle";
import Footer from "../Components/Footer";

const Modal = () => {
  const { id_movie } = useParams();
  // const params = useParams(); // params.id_movie
  const [data, setData] = useState<MovieType>({});
  const [videos, setVideos] = useState<VideosType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useTitle(`${data.title}- Cinephile`);
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(
      `https://api.themoviedb.org/3/movie/${id_movie}?api_key=a8644e3a9f5212bdb57ae9031e4a6cbf&language=en-US&append_to_response=videos`,
      { method: "GET" }
    )
      .then((response) => response.json()) // untuk mengkonversi response menjadi json
      .then((data) => {
        // dia akan masuk ke then jikalau dia berstatus OK atau berhasil
        setData(data);
        setVideos(data.videos?.results);
      })
      .catch((error) => {
        // masuk catch ketika server mengirimkan status tidak berhasil
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  }

  return (
    <Layout>
      <Carousel
        datas={videos.slice(0, 5)}
        content={(data) => (
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${data.key}`}
            title={data.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      />
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          {/*Fragment*/}
          <div className="card lg:card-side bg-white shadow-xl">
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
              />
            </figure>
            <div className="card-body">
              <p>Title: {data.title}</p>

              <p>Runtime: {data.runtime}</p>
              <p>
                Genre:{" "}
                {data.genres
                  ?.map((genre) => {
                    return genre.name;
                  })
                  .join(", ")}
              </p>
              <p>Release Date : {data.release_date}</p>
              <p>Tagline : {data.tagline}</p>
              <p className="text-justify">Overview: {data.overview}</p>
              <p>Vote : {data.vote_average}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </Layout>
  );
};

export default Modal;
