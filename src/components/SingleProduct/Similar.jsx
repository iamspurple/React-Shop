import { useGetProductsByCategoryQuery } from "../../store/slices/productsApi";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../ProductCard/ProductCardSkeleton";
import { Link } from "react-router-dom";

import style from "./SingleProduct.module.scss";

const Similar = ({ category, id, brand }) => {
  const { data, isLoading } = useGetProductsByCategoryQuery(category);

  const similarCat = data?.filter((prod) => prod.id !== id);
  const similarBrand = similarCat?.filter((prod) => prod.brand === brand);

  const similar = similarBrand?.concat(similarCat).slice(0, 4);

  return (
    <div className={style.similar}>
      <h2 className={style.title}>Similar Products</h2>
      <ul className={style.list}>
        {isLoading &&
          Array(4)
            .fill(0)
            .map((item, index) => (
              <li key={index}>
                <ProductCardSkeleton />
              </li>
            ))}
        {data &&
          similar?.map((prod) => (
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              key={prod.id}
              to={`/products/${prod.category}/${prod.id}`}
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
