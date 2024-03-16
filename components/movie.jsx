'use client';

import Link from 'next/link';
import style from '../styles/movie.module.css';
import { useRouter } from 'next/navigation';

export default function Movie(props) {
  const title = props.movie.title;
  const posterPath = props.movie.poster_path;
  const id = props.movie.id;

  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={style.movie}>
      <img src={posterPath} alt={title} onClick={onClick} />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}
