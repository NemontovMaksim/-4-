// const allowedCors = ['https://practicum.yandex.ru', 
//                      'https://students-projects.ru', 
//                      'http://localhost:3001', 
//                      'http://localhost:3000', 
//                      'http://mnemontov-backend.nomorepartiesco.ru', 
//                      'https://mnemontov-backend.nomorepartiesco.ru', 
//                      'https://mnemontov-front.nomorep.nomorepartiesco.ru'];


const allowedCors = [ 'https://mnemontov-front.nomorep.nomorepartiesco.ru'];
// Функция, которая принимает объекты req (информация о запросе),
// res (объект ответа) и функцию next (для запуска следующего миддлвара)
function cors(req, res, next) {
  const { origin } = req.headers;

  if (allowedCors.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
  next();
}

module.exports = cors;
