import ProductCard from "../components/ProductCard";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import SideBar from "../components/SideBar";
import ScrollToTop from "../config";
import { useLocation } from "react-router-dom";

const AllProducts = ({ data }) => {
  ScrollToTop();

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(location);

  const category = searchParams.get("category");
  const searchQueryText = searchParams.get("search");
  const sortQuery = searchParams.get("sort");

  const filtered = useMemo(() => {
    if (!searchQueryText && !category && !sortQuery) return data;

    if (searchQueryText)
      return data?.filter((prod) =>
        prod.title.toLowerCase().includes(searchQueryText.toLowerCase())
      );

    if (category) return data?.filter((prod) => prod.category === category);

    if (sortQuery) return data?.filter((prod) => prod[sortQuery]);
  }, [data, searchQueryText, sortQuery, category]);

  //pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [pageQuant, setPageQuant] = useState();

  useEffect(() => {
    setPageQuant(Math.ceil(filtered?.length / 18));
  }, [filtered?.length]);

  const pages = () => {
    const result = [];
    for (let i = 1; i <= pageQuant; i++) {
      result.push(`${i}`);
    }
    return result;
  };

  const lastIndex = currentPage * 18;
  const firstIndex = lastIndex - 18;

  const goTo = useNavigate();

  const handlePage = (page) => {
    setCurrentPage(page);
    if (!location.search.length) goTo(`${location.pathname}?page=${page}`);
    if (location.search.includes("page")) {
      setSearchParams(searchParams.set("page", { page })); // не работает собака такая
      goTo(`${location.pathname}${location.search}`);
    }
    if (location.search.length && !location.search.includes("page"))
      goTo(`${location.pathname}${location.search}&page=${page}`);
  };

  return (
    <div className="container">
      <div className="products-container">
        <SideBar setCurrentPage={setCurrentPage} />
        <ul className="all-products">
          {(pages().length > 1
            ? filtered.slice(firstIndex, lastIndex)
            : filtered
          )?.map((prod) => (
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
      {pages().length > 1 ? (
        <ul className="pagination">
          {pages().map((page) => (
            <li
              onClick={() => handlePage(page)}
              key={page}
              className={
                currentPage == page
                  ? "pagination-item current"
                  : "pagination-item"
              }
            >
              {page}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default AllProducts;
