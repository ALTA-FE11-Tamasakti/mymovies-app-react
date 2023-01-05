import React, { Component } from "react";
import DetailMovie from "../Pages/DetailMovies";
import Button from "./Button";
interface CardProps {
  title: string;
  image: string;
  id: number;
  onClickFav: () => void;
}

export default class Card extends Component<CardProps> {
  onClickDetail() {
    console.log(this.props.id);
  }
  render() {
    return (
      <div className="card card-compact bg-base-100">
        <figure onClick={() => this.onClickDetail()}>
          <img
            className="mx-auto"
            src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
            alt={this.props.title}
          />
        </figure>
        <div className="card-body items-center justify-between">
          <h2
            className="card-title text-center"
            onClick={() => this.onClickDetail()}
          >
            {this.props.title}
          </h2>
          <div className="card-actions w-full justify-center">
            <label htmlFor="my-modal" className="btn">
              Synopsis Movie
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <DetailMovie />
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn">
                    Close
                  </label>
                </div>
              </div>
            </div>
            <button className="btn gap-2">
              Favourites
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
