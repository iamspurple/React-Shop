import { useGetProductsByCategoryQuery } from "../../store/slices/productsApi";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../ProductCard/ProductCardSkeleton";
import { Link } from "react-router-dom";

const Similar = ({ category, id, brand }) => {
  const { data, isLoading } = useGetProductsByCategoryQuery(category);

  const similarCat = data?.filter((prod) => prod.id !== id);
  const similarBrand = similarCat?.filter((prod) => prod.brand === brand);

  const similar = similarBrand?.concat(similarCat).slice(0, 4);

  return (
    <div className="similar">
      <h2 className="similar-title">Similar Products</h2>
      <ul className="similar-list">
        {isLoading &&
          Array(4)
            .fill(0)
            .map((item) => (
              <li key={item}>
                <ProductCardSkeleton />
              </li>
            ))}
        {data &&
          similar?.map((prod) => (
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

export default Similar;
