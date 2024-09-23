import { useSelector, useDispatch } from "react-redux";
import { selectedCategory } from "../../redux/CategoriesSlices/CategorySlice";
import * as s from "./CategoryStyled";

export const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  const handleCategoryClick = (category) => {
    dispatch(selectedCategory(category));
  };

  return (
    <s.CategoriasContainer>
      {categories.map((category) => (
        <s.CardCategoria
          key={category.id}
          onClick={() => handleCategoryClick(category.category)}
        >
          <img src={category.img} alt={category.category} />
          <h2>{category.title}</h2>
        </s.CardCategoria>
      ))}
    </s.CategoriasContainer>
  );
};
