import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";

import {
  useLazyGetProductsByPageQuery,
  useLazyGetProductsByTitleAndPageQuery,
  useLazyGetProductsByPropAndPageQuery,
} from "../../store/slices/productsApi";

import style from "./AllProducts.module.scss";
import ProductsList from "./ProductsList";

const AllProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  const propParam = params.prop;
  const titleParam = searchParams.get("search");
  const pageParam = searchParams.get("page");

  console.log(titleParam);

  const [currentPage, setCurrentPage] = useState(pageParam ?? 1);

  const [getProductsByPage, { data: products, isLoading: isProductsLoading }] =
    useLazyGetProductsByPageQuery();

  const [
    getProductsByProp,
    { data: productsByProp, isLoading: isProductsByPropLoading },
  ] = useLazyGetProductsByPropAndPageQuery();

  const [
    getProductsByTitle,
    { data: productsByTitle, isLoading: isProductsByTitleLoading },
  ] = useLazyGetProductsByTitleAndPageQuery();

  useEffect(() => {
    if (!propParam && !titleParam) {
      getProductsByPage({ page: currentPage });
      console.log("Запрос");
      return;
    }

    if (titleParam) {
      getProductsByTitle({ title: titleParam, page: currentPage });
      console.log("Запрос по названию", titleParam);
      return;
    }

    if (propParam) {
      getProductsByProp({ prop: propParam, page: currentPage });
    }
  }, [
    currentPage,
    propParam,
    titleParam,
    getProductsByProp,
    getProductsByPage,
    getProductsByTitle,
  ]);

  console.log(productsByTitle);

  const data = useMemo(() => {
    if (!propParam && !titleParam) {
      return products;
    }

    if (titleParam) {
      return productsByTitle;
    }

    if (propParam) {
      return productsByProp;
    }
  }, [propParam, titleParam, products, productsByTitle, productsByProp]);

  const isLoading =
    isProductsByPropLoading || isProductsLoading || isProductsByTitleLoading;

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

  const {
    items,
    meta: { total_pages },
  } = data;

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
      {total_pages > 1 ? (
        <ul className={style.pagination}>
          {Array(total_pages)
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

export default AllProducts;
