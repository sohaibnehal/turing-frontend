import { GroupedCategory } from '../../models';

export const fetchCategories = (state, action) => {
  return {
    ...state,
    loading: true
  };
};
export const fetchCategoriesFail = (state, action) => {
  return {
    ...state,
    loading: false
  };
};
export const fetchCategoriesSuccess = (state, action) => {
  const categories: GroupedCategory = action.payload;
  return {
    ...state,
    loading: false,
    categories
  };
};
