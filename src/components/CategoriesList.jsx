import gaming from "/images/gaming.jpg";
import audio from "/images/audio.jpg";
import laptop from "/images/laptop.jpg";
import mobile from "/images/mobile.jpg";
import appliances from "/images/appliances.jpg";
import tv from "/images/tv.jpg";

import { useGetCategoriesQuery } from "../store/productsApi";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  const { data } = useGetCategoriesQuery();

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
      <ul className="categories-list">
        {data?.map((cat) => (
          <Link key={cat} to={`/categories/${cat}`}>
            <li className="category-card">
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
