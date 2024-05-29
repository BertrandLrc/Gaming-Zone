import { useCart } from "../context/CartContext";
import CartComponent from "../components/CartComponent";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../components/CartComponent.css";
import "../App.css";

function Cart() {
  const { cart } = useCart();
  const total = cart.reduce((acc, game) => acc + game.price, 0);

  return (
    <main className="bgColorMain">
      <Navigation />
      <h1 className="styleTitleH1">Mon panier</h1>
      <section className="cartMainContainer">
        {cart.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          cart.map((game) => (
            <CartComponent
              key={game.id}
              id={game.id}
              title={game.title}
              image={game.image}
              price={game.price}
            />
          ))
        )}
        <h2>Total: {total} €</h2>
      </section>
      <Footer />
    </main>
  );
}

export default Cart;
