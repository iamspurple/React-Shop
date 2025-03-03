import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../store/slices/productsApi";
import Similar from "./Similar";
import ScrollToTop from "../../config";
import SingleProductCard from "./SingleProductCard";
import SkeletonCard from "./SingleProductCardSkeleton";

const SingleProduct = () => {
  const params = useParams();

  const { data, isLoading } = useGetProductByIdQuery(params.id);

  ScrollToTop();

  return (
    <div className="container">
      {isLoading && <SkeletonCard />}
      {data && <SingleProductCard data={data?.[0]} />}
      <Similar
        isLoading={isLoading}
        category={data?.[0].category}
        brand={data?.[0].brand}
        id={data?.[0].id}
      />
    </div>
  );
};

export default SingleProduct;
