// 4) Встановити node.js та gulp.js . Зробити проект і спробувати запустити таск як на уроці, перевірити чи працює у вас gulp
// Для вирішення цих задач можна використовувати fetch, async await, promise 

async function request(cb) {
    const response = await fetch("https://swapi.dev/api/people/1");
    const people = await response.json();
    console.log(people);
    cb();
}

exports.default = request;