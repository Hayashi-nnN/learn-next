// movie info page

import { Suspense } from 'react';
import MovieInfo, { getMovieInfo } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

export async function generateMetadata({ params }) {
  const info = await getMovieInfo(params.id);
  return {
    title: info.title,
  };
}

export default function MovieDetailPage({ params }) {
  const id = params.id;

  return (
    <div className='movieInfoPage'>
      <Suspense fallback={<div></div>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading... Movie Videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
