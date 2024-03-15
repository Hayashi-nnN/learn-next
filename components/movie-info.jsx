import { URL } from '../app/(home)/page';

async function getMovieInfo(id) {
  console.log(`Feching movies: ${Date.now()}`);
  await new Promise(resolve => setTimeout(resolve, 1000));
  const res = await fetch(`${URL}/${id}`);

  return res.json();
}

export default async function MovieInfo({ id }) {
  const info = await getMovieInfo(id);
  return <h3>{JSON.stringify(info)}</h3>;
}
