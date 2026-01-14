// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об’єкта.
//     Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

function cloner (obj){
    if (obj) {
        let functions = [];
        for (let key in obj) {
            if (typeof obj[key] === 'function') {
                let functionClone = obj[key].bind({});
                functions.push({functionClone, key});
            }
        }
        console.log(functions);

        let cloneObj = JSON.parse(JSON.stringify(obj));
        for (let func of functions) {
            cloneObj[func.key] = func.functionClone;
        }

        console.log(cloneObj);
        return cloneObj;
    }
    throw new Error('!!!!!')
}

cloner({id: 123, name: 'ekd', greeting(){console.log('hello')}, foo(){console.log('bar')}});
