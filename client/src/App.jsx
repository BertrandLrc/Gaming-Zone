import { useLoaderData } from "react-router-dom";
import "./App.css";

function App() {
  const games = useLoaderData();
  console.info(games);

  return (
    <main>
      <h1>Bienvenu</h1>
    </main>
  );
}

export default App;
