import CategoriesList from "../components/CategoriesList";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AllProducts = ({ data }) => {
  const search = useSelector((state) => state.search.search);
  console.log(search);

  let filtered = data;
  if (search) {
    filtered = data?.filter((prod) =>
      prod.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="container">
      <CategoriesList />
      <ul className="all-products">
        {filtered?.map((prod) => (
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            key={prod.id}
            to={`/products/${prod.id}`}
          >
            <li>
              <ProductCard product={prod} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
