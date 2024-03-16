import { URL } from '../app/(home)/page';
import style from '../styles/movie-info.module.css';

export async function getMovieInfo(id) {
  const res = await fetch(`${URL}/${id}`);
  return res.json();
}

export default async function MovieInfo({ id }) {
  const info = await getMovieInfo(id);
  const posterPath = info.poster_path;
  const title = info.title;
  const voteAverage = info.vote_average;
  const overview = info.overview;
  const homepageLink = info.homepage;
  return (
    <div className={style.container}>
      <img className={style.poster} src={posterPath} alt={title} />
      <div className={style.info}>
        <h1 className={style.title}>{title}</h1>
        <h3>👍{voteAverage.toFixed(1)}</h3>
        <p>{overview}</p>
        <a href={homepageLink} target='_blank'>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
