import appliances from "/icons/CategoriesSideBar/appliances.svg";
import audio from "../../public/icons/CategoriesSideBar/audio.svg";
import gaming from "/icons/CategoriesSideBar/gaming.svg";
import laptop from "../../public/icons/CategoriesSideBar/laptop.svg";
import mobile from "/icons/CategoriesSideBar/mobile.svg";
import tv from "../../public/icons/CategoriesSideBar/tv.svg";

import { useGetCategoriesQuery } from "../store/slices/productsApi";

const SideBar = () => {
  const CategoryIcons = {
    appliances,
    audio,
    gaming,
    laptop,
    mobile,
    tv,
  };

  const { data } = useGetCategoriesQuery();

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Categories</h3>
      <ul className="sidebar-list">
        {data?.map((cat) => (
          <li className="sidebar-item" key={cat}>
            <img width={30} src={CategoryIcons[cat]} alt={cat} />
            <span>{cat}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
