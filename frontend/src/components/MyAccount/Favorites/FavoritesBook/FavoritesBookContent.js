import BookItem from "../../../Home/Books/BookItem";
import "../FavoritesBook/FavoritesBookContent.scss";
import { useSelector } from "react-redux";

const FavoritesBook = () => {
  let { favouriteItems } = useSelector((state) => state.favourite);
  console.log(favouriteItems);

  // console.log(item.title);

  return (
    <div style={{ textAlign: "center" }}>
      {favouriteItems.length === 0 ? (
        <div>
          <img
            className="empty-wrapper"
            src="https://drive.google.com/uc?id=1k2nXiRoCsJ2gKuRmL9FoFwkTgSpW_4n_"
            alt="no item favorites"
          />
          <p>
            <b>Không có cuốn sách nào trong mục này </b>
          </p>
        </div>
      ) : (
        <div className="category-books row row-cols-3 ">
          {favouriteItems.map((item, index) => {
            return (
              <BookItem
                key={index}
                id={item.book}
                title={item.name}
                author={item.author}
                img={item.image}
                price={item.price}
              />
            );
          })}
        </div>
      )}
      {/* {favouriteItems.map((item, index) => {
        return (
          <BookItem
            key={index}
            title={item.title}
            author={item.author}
            img={item.image}
            price={item.price}
          />
        );
      })} */}
    </div>
  );
};

export default FavoritesBook;
