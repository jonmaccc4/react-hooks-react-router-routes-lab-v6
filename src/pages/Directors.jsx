import NavBar from "../components/NavBar";
import { directors } from "../data";

function Directors() {
  return (
    <>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map(director => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map(movie => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Directors;

// import { useEffect, useState } from "react";

// function Directors() {
//   return (
//     <>
//       <header>
//         {/* What component should go here? */}
//       </header>
//       <main>
//         {/* Director info here! */}
//       </main>
//     </>
//   );
// };

// export default Directors;
