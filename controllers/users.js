const sendAllUsers = (req, res) => {
    // Установим заголовок ответа в формате JSON
  res.setHeader('Content-Type', 'application/json');
  // Отправим данные в виде JSON-объекта, 
  // которые подготовим в миддлваре findAllCategories
  res.end(JSON.stringify(req.usersArray));
};
// controllers/users.js
const sendUserCreated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};
const sendUserById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};
// Файл controllers/games.js

const sendUserUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify({ message: "user обновлен" }));
};
// Файл controllers/games.js

const sendUserDeleted = (req, res) => {
  // Объект игры отправляем в формате JSON 
res.setHeader("Content-Type", "application/json");
// Отправляем на клиент найденный и удалённый элемент из базы данных
res.end(JSON.stringify(req.user));
};
const sendMe = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};
// Экспортируем контроллер
module.exports = {sendAllUsers,sendMe, sendUserCreated, sendUserById,sendUserUpdated,sendUserDeleted};