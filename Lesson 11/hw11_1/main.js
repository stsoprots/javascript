// #HmvAfRQM
//
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

let cartsDiv = document.getElementById('carts');
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObject => {
        let {carts} = cartsObject; //деструктуризація
        console.log(carts);


        for (let cart of carts) {
            let div = document.createElement('div');
            div.classList.add('cart-container');
            let divWithInfo = document.createElement('div')
            divWithInfo.innerText = `
                "total": ${cart.total},
                "discountedTotal": ${cart.discountedTotal},
                "userId": ${cart.userId},
                "totalProducts": ${cart.totalProducts},
                "totalQuantity": ${cart.totalQuantity}
            `;

            let ol = document.createElement('ol');
            for (const product of cart.products) {
                let li = document.createElement('li');
                let info = document.createElement('p')
                info.innerText = `
                    "id": ${product.id},
                    "title": ${product.title},
                    "price": ${product.price},
                    "quantity": ${product.quantity},
                    "total": ${product.total},
                    "discountPercentage": ${product.discountPercentage},
                    "discountedTotal": ${product.discountedTotal}
                `
                let img = document.createElement('img');
                img.src = product.thumbnail;
                li.append(img, info);
                ol.appendChild(li);
            }

            div.append(divWithInfo, ol);
            cartsDiv.appendChild(div);
        }
    });

