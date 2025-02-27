import ProductCard from "../components/ProductCard";
import {
  Link,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { useMemo } from "react";
import SideBar from "../components/SideBar";
import ScrollToTop from "../config";

const AllProducts = ({ data }) => {
  ScrollToTop();

  const params = useParams();
  const category = params.category;

  const location = useLocation();

  const [searchParams] = useSearchParams();
  const searchQueryText = searchParams.get("search");

  const filtered = useMemo(() => {
    if (
      !searchQueryText &&
      !category &&
      location.pathname !== "/products/sale" &&
      location.pathname !== "/products/popular"
    )
      return data;

    if (searchQueryText)
      return data?.filter((prod) =>
        prod.title.toLowerCase().includes(searchQueryText.toLowerCase())
      );

    if (category) return data?.filter((prod) => prod.category === category);

    if (location.pathname === "/products/sale")
      return data?.filter((prod) => prod.onSale);

    if (location.pathname === "/products/popular")
      return data?.filter((prod) => prod.popular);
  }, [data, searchQueryText, category, location]);

  return (
    <div className="container">
      <div className="products-container">
        <SideBar />
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
    </div>
  );
};

export default AllProducts;
