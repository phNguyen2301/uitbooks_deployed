import "../Favorites/FavoritesNav/FavoritesNav";
import FavoritesNav from "./FavoritesNav/FavoritesNav";
import FavoritesBookContent from "./FavoritesBook/FavoritesBookContent";

function FavoritesBook() {
  return (
    <div className="order-process col-8">
      <FavoritesNav />
      <FavoritesBookContent />
    </div>
  );
}

export default FavoritesBook;
