import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import { movies } from "../data"; 

function Home() {
  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
}

export default Home;

// import { useEffect, useState } from "react";

// function Home() {
//   return (
//     <>
//       <header>
//         {/* What component should go here? */}
//       </header>
//       <main>
//         {/* Info goes here! */}
//       </main>
//     </>
//   );
// };

// export default Home;

