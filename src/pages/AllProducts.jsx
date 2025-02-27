import ProductCard from "../components/ProductCard";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import SideBar from "../components/SideBar";
import { useGetProductsByCategoryQuery } from "../store/slices/productsApi";

const AllProducts = ({ data }) => {
  const params = useParams();
  const category = params.category;
  const [searchParams] = useSearchParams();
  const getByCat = useGetProductsByCategoryQuery(category);
  const categoryFiltered = getByCat.data;

  const searchQueryText = searchParams.get("search");

  const filtered = useMemo(() => {
    if (!searchQueryText && !category) return data;

    if (searchQueryText)
      return data?.filter((prod) =>
        prod.title.toLowerCase().includes(searchQueryText.toLowerCase())
      );

    if (category) return categoryFiltered;
  }, [data, searchQueryText, category, categoryFiltered]);

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
