import CategoriesList from "../components/CategoriesList";
import ProductCard from "../components/ProductCard";
import { Link, useSearchParams } from "react-router-dom";
import { useMemo } from "react";

const AllProducts = ({ data }) => {
  const [searchParams] = useSearchParams();

  const searchQueryText = searchParams.get("search");

  const filtered = useMemo(() => {
    if (!searchQueryText) return data;

    return data?.filter((prod) =>
      prod.title.toLowerCase().includes(searchQueryText.toLowerCase())
    );
  }, [data, searchQueryText]);

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
