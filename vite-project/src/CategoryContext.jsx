// CategoryContext.js
import { createContext, useContext, useState } from 'react';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState({
    Name: '',
    Category: '',
    MaxPrice: '',
    Status: '',
  });

  return (
    <CategoryContext.Provider value={{ selectedCategories, setSelectedCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};
