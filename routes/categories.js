  // Создаём роут для запросов категорий 

  const categoriesRouter = require('express').Router();
  const {checkAuth} = require('../middlewares/auth')
  const {findAllCategories,
    createCategory,
    findCategoryById,
    updateCategory,
    deleteCategory,
    checkEmptyName,
    checkIsCategoryExists
  } = require('../middlewares/categories');
  const {sendAllCategories,
    sendCategoryCreated,
    sendCategoryUpdated,
    sendCategoryById,
    sendCategoryDeleted
  } = require('../controllers/categories');
  categoriesRouter.get("/category/:id", findCategoryById, sendCategoryById);

  categoriesRouter.get('/categories', findAllCategories, sendAllCategories);

categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  deleteCategory,
  sendCategoryDeleted
);
  // Экспортируем роут для использования в приложении — app.js
  module.exports = categoriesRouter;
  