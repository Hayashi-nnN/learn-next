import { URL } from '../app/(home)/page';

async function getMovieVideos(id) {
  console.log(`Feching videos: ${Date.now()}`);
  await new Promise(resolve => setTimeout(resolve, 3000));
  throw new Error(`something broke...`);
  //const res = await fetch(`${URL}/${id}/videos`);
  //return res.json();
}

export default async function MovieVideos({ id }) {
  const videos = await getMovieVideos(id);
  return <p>{JSON.stringify(videos)}</p>;
}
