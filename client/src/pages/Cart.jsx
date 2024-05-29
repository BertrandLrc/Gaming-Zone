import { useLoaderData } from "react-router-dom";
import CartComponent from "../components/CartComponent";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../components/CartComponent.css";
import "../App.css";

function Cart() {
  const games = useLoaderData();

  return (
    <main>
      <Navigation />
      <h1>Mon panier</h1>
      <section className="cartMainContainer">
        {games.map((game) => (
          <CartComponent
            key={game.id}
            title={game.title}
            image={game.image}
            price={game.price}
          />
        ))}
      </section>
      <Footer/>
    </main>
  );
}

export default Cart;
