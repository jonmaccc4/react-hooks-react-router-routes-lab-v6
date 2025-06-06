import NavBar from "../components/NavBar";
import { actors } from "../data";

function Actors() {
  return (
    <>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map(movie => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Actors;

// import { useEffect, useState } from "react";

// function Actors() {
//   return (
//     <>
//       <header>
//         {/* What component should go here? */}
//       </header>
//       <main>
//         {/* Actor info here! */}
//       </main>
//     </>
//   );
// };

// export default Actors;
