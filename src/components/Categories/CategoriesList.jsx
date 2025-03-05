import gaming from "/images/gaming.jpg";
import audio from "/images/audio.jpg";
import laptop from "/images/laptop.jpg";
import mobile from "/images/mobile.jpg";
import appliances from "/images/appliances.jpg";
import tv from "/images/tv.jpg";

import style from "./Categories.module.scss";

import { useGetCategoriesQuery } from "../../store/slices/productsApi";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const CategoriesList = () => {
  const { data, isLoading } = useGetCategoriesQuery();

  const CategoryImages = {
    gaming,
    audio,
    laptop,
    mobile,
    appliances,
    tv,
  };

  return (
    <section className="categories">
      <ul className={style.list}>
        {isLoading &&
          Array(6)
            .fill(0)
            .map((item, index) => (
              <li className={style.card} key={index}>
                <Skeleton
                  containerClassName="skeleton-container"
                  style={{ width: "80%", height: "80%" }}
                  borderRadius={10}
                />
              </li>
            ))}
        {data &&
          data?.map((cat) => (
            <Link key={cat} to={`products/${cat}`}>
              <li className={style.card}>
                <img src={CategoryImages[cat]} alt={cat} />
                <span>{cat}</span>
              </li>
            </Link>
          ))}
      </ul>
    </section>
  );
};

export default CategoriesList;
