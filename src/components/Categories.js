import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { showStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch(showStatus);
  useEffect(() => {
    dispatch(showStatus());
  }, [dispatch]);
  const bookStatus = useSelector((state) => state.categories);
  return (
    <div className="categories">
      <h2>{ bookStatus }</h2>
    </div>
  );
};

export default Categories;
