import appliances from "/icons/CategoriesSideBar/appliances.svg";
import audio from "../../public/icons/CategoriesSideBar/audio.svg";
import gaming from "/icons/CategoriesSideBar/gaming.svg";
import laptop from "../../public/icons/CategoriesSideBar/laptop.svg";
import mobile from "../../public/icons/CategoriesSideBar/mobile.svg";
import tv from "../../public/icons/CategoriesSideBar/tv.svg";

import { useNavigate, useSearchParams } from "react-router-dom";

import { useGetCategoriesQuery } from "../store/slices/productsApi";

const SideBar = ({ setCurrentPage }) => {
  const [searchParams] = useSearchParams();
  const goTo = useNavigate();
  const category = searchParams.get("category");

  const CategoryIcons = {
    appliances,
    audio,
    gaming,
    laptop,
    mobile,
    tv,
  };

  const handleClick = (cat) => {
    goTo(`/products?category=${cat}`);
    setCurrentPage(1);
  };

  const { data } = useGetCategoriesQuery();

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Categories</h3>
      <ul className="sidebar-list">
        {data?.map((cat) => (
          <li
            onClick={() => handleClick(cat)}
            className={
              category === cat ? "sidebar-item active" : "sidebar-item"
            }
            key={cat}
          >
            <img width={30} src={CategoryIcons[cat]} alt={cat} />
            <span>{cat}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
