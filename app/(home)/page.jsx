import Link from 'next/link';

export const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

export const metadata = {
  title: 'Home',
};

async function getMovies() {
  //return fetch(URL).then(res => res.json())

  const res = await fetch(URL);
  //const res = await fetch(URL, { cache: "no-store" })

  const json = await res.json();
  return json;
}

export default async function RootPage() {
  const movies = await getMovies();

  return (
    <div>
      <p>root page file</p>
      {movies.map(m => (
        <li key={m.id}>
          <Link href={`/movies/${m.id}`}>{m.title}</Link>
        </li>
      ))}
    </div>
  );
}
