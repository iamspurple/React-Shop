import ProductCard from "../components/ProductCard";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import SideBar from "../components/SideBar";
import ScrollToTop from "../config";

const AllProducts = ({ data }) => {
  ScrollToTop();

  const params = useParams();
  const category = params.category;
  const [searchParams] = useSearchParams();
  const searchQueryText = searchParams.get("search");
  const sortQueryText = searchParams.get("sort");

  const filtered = useMemo(() => {
    if (!searchQueryText && !category && !sortQueryText) return data;

    if (searchQueryText)
      return data?.filter((prod) =>
        prod.title.toLowerCase().includes(searchQueryText.toLowerCase())
      );

    if (category) return data?.filter((prod) => prod.category === category);

    if (sortQueryText) return data?.filter((prod) => prod[sortQueryText]);
  }, [data, searchQueryText, sortQueryText, category]);

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
