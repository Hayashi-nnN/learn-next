// root page

import Movie from '../../components/movie';
import style from '../../styles/home.module.css';
export const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

export const metadata = {
  title: 'Home',
};

async function getMovies() {
  //return fetch(URL).then(res => res.json())

  const res = await fetch(URL);
  //const res = await fetch(URL, { cache: 'no-store' });

  const json = await res.json();
  return json;
}

export default async function RootPage() {
  const movies = await getMovies();
  return (
    <div className={style.home}>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
