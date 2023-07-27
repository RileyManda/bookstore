import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { showStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStatus());
  }, [dispatch]);
  const bookStatus = useSelector((state) => state.categories);
  return (
    <div className="category-container">
      <div className="flex-container flex-column center-align-items">
        <h2>{bookStatus}</h2>
      </div>
    </div>
  );
};

export default Categories;
