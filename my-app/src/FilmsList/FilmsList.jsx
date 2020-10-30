import React from "react";
import Movie from "../Movie";

function FilmsList(props) {
  let { films, findedFilm, selectFilm } = props;

  let listOfFilms = films
    .filter(
      (film) => (!findedFilm ? true : film.name.toLowerCase() === findedFilm) //for input
    )
    .reduce((res, film) => { //for likes
      if (film.like) {
        res.unshift(film);
        return res;
      } else {
        res.push(film);
        return res;
      }
    }, [])
    .map((film) => (
      <Movie film={film} key={film.id} selectFilm={() => selectFilm(film.id)} />
    ));

  return <div className="films__list">{listOfFilms}</div>;
}

export default FilmsList;
