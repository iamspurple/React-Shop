import appliances from "/icons/CategoriesSideBar/appliances.svg";
import audio from "/icons/CategoriesSideBar/audio.svg";
import gaming from "/icons/CategoriesSideBar/gaming.svg";
import laptop from "/icons/CategoriesSideBar/laptop.svg";
import mobile from "/icons/CategoriesSideBar/mobile.svg";
import tv from "/icons/CategoriesSideBar/tv.svg";

import { useNavigate, useSearchParams } from "react-router-dom";

import { useGetCategoriesQuery } from "../../store/slices/productsApi";

import style from "./SideBar.module.scss";

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
    <aside className={style.sidebar}>
      <h3 className={style.title}>Categories</h3>
      <ul className={style.list}>
        {data?.map((cat) => (
          <li
            onClick={() => handleClick(cat)}
            className={
              category === cat ? `${style.item} ${style.active}` : style.item
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
