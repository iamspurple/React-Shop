import { useState } from "react";
import { useGetProductsByCategoryAndPageQuery } from "../../store/slices/productsApi";
import { useParams, useSearchParams } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import ProductsList from "./ProductsList";
import ScrollToTop from "../../config";
import style from "./AllProducts.module.scss";

const ProductsByCategory = () => {
  ScrollToTop();

  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get("page");
  const params = useParams();
  const category = params.category;

  const [currentPage, setCurrentPage] = useState(pageParam ?? 1);

  const { data, isLoading } = useGetProductsByCategoryAndPageQuery({
    category,
    page: currentPage,
  });

  if (isLoading === true) {
    return (
      <div className="container">
        <div className={style.container}>
          <SideBar setCurrentPage={setCurrentPage} />
          <ProductsList isLoading={isLoading} />
        </div>
      </div>
    );
  }

  if (isLoading === false && !data?.items) {
    return null;
  }

  const items = data?.items;

  const pages = data?.meta.total_pages;

  const handlePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setSearchParams({ page });
  };

  return (
    <div className="container">
      <div className={style.container}>
        <SideBar setCurrentPage={setCurrentPage} />
        <ProductsList items={items} isLoading={isLoading} />
      </div>
      {pages > 1 ? (
        <ul className={style.pagination}>
          {Array(pages)
            .fill(1)
            .map((n, index) => {
              const page = index + 1;

              return (
                <li
                  onClick={() => handlePage(page)}
                  key={page}
                  className={
                    currentPage == page
                      ? `${style.page} ${style.current}`
                      : style.page
                  }
                >
                  {page}
                </li>
              );
            })}
        </ul>
      ) : null}
    </div>
  );
};

export default ProductsByCategory;
