import { useSearchParams, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import SideBar from "../components/SideBar";

import {
  useLazyGetProductsByPageQuery,
  useLazyGetProductsByTitleAndPageQuery,
} from "../store/slices/productsApi";

import { ProductsList } from "../components/ProductsList";

const AllProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParam = searchParams.get("page");

  const { category } = useParams()

  const [currentPage, setCurrentPage] = useState(pageParam)

  const [data, setData] = useState(null)

  const [
    getProductsByPage,
    {
      isLoading: isProductsLoading,
    }
  ] = useLazyGetProductsByPageQuery();

  const [
    getProductsByTitleAndPage,
    {
      isLoading: isSearchDataLoading,
    }
   ] = useLazyGetProductsByTitleAndPageQuery();

   useEffect(() => {
    if (!pageParam) {
      setCurrentPage(1)
    }
   }, [pageParam])

   useEffect(() => {
    const searchParam = searchParams.get("search");

    if (!searchParam) {
      getProductsByPage(currentPage).then((res) => {
        setData(res.data)
      })
    }
  }, [currentPage, getProductsByPage, searchParams])

  useEffect(() => {
    const searchParam = searchParams.get("search");

    if (searchParam) {
      getProductsByTitleAndPage({ title: searchParam, page: currentPage }).then((res) => {
        setData(res.data)
      })
    }
  }, [currentPage, getProductsByTitleAndPage, searchParams])

  const isLoading = isProductsLoading || isSearchDataLoading

  if (isLoading === true) {
    return <h1>Loading...</h1>
  }

  if (isLoading === false && !data?.items) {
    return null
  }

  const { items, meta: { total_pages } } = data

  const paginate = (page) => {
    const searchParam = searchParams.get("search");

    if (searchParam) {
      setSearchParams({ search: searchParam, page })
    } else {
      setSearchParams({ page })
    }

    setCurrentPage(page)

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="container">
      <div className="products-container">
        <SideBar
          category={category}
          setCurrentPage={setCurrentPage}
        />

        <ProductsList items={items} />
      </div>
  
      {total_pages > 1 && (
        <ul className="pagination">
          {Array(total_pages).fill(1).map((n, i) => {
            const page = i + 1

            return (
              <li
                onClick={() => paginate(page)}
                key={page}
                className={
                  currentPage == page
                    ? "pagination-item current"
                    : "pagination-item"
                }
              >
                {page}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  );
};

export default AllProducts;
