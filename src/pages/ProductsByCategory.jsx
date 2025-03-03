import { useSearchParams, useParams } from "react-router-dom";
import { useState } from "react";

import SideBar from "../components/SideBar";

import {
  useGetProductsByCategoryAndPageQuery,
} from "../store/slices/productsApi";

import { ProductsList } from "../components/ProductsList";

const ProductsByCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParam = searchParams.get("page");

  const { category } = useParams()

  const [currentPage, setCurrentPage] = useState(pageParam ?? 1)

  const {
    data,
    isLoading,
  } = useGetProductsByCategoryAndPageQuery({ category, page: currentPage });

  if (isLoading === true) {
    return <h1>Loading...</h1>
  }

  if (isLoading === false && !data?.items) {
    return null
  }

  const { items, meta: { total_pages } } = data

  const paginate = (page) => {
    setCurrentPage(page)
  }

  const handlePage = (page) => {
    setSearchParams({ page })
  };

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
                onClick={() => {
                  paginate(page)

                  handlePage(page)
                }}
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

export default ProductsByCategory;
