import { URL } from '../app/constants';
import style from '../styles/movie-videos.module.css';

async function getMovieVideos(id) {
  const res = await fetch(`${URL}/${id}/videos`);
  return res.json();
}

export default async function MovieVideos({ id }) {
  const videos = await getMovieVideos(id);
  return (
    <div className={style.container}>
      {videos.map(video => (
        <div key={video.id}>
          <iframe
            src={`https://youtube.com/embed/${video.key}`}
            title={video.name}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}
