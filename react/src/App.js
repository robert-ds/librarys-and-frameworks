const movies = [
  {
    name: "Avengers",
    available: 3
  },
  {
    name: "Tres Mosqueteros",
    available: 2
  },
  {
    name: "Barbie",
    available: 3
  }
];

export default function App() {
  return (
    <div>
      <h2>Movies</h2>
      {movies.map(movie => {
        <form>
          <h3>{movie.name}</h3>
        <button type="button">-</button>
        </form>
      })}
    </div>
  );
}