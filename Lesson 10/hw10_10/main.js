// #NKB0tgWIK1G
//
// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
//     При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

let arr = [];
for (let i = 1; i <= 100; i++) {
    arr.push({id: i, title: `Продукт №${i}`, price: Math.floor(Math.random() * 1000) });
}

let currentPage = 1;
const pageSize = 10;

const target = document.getElementById('target');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function renderPage(page){
    target.innerHTML = '';
    let start = (page - 1) * pageSize;
    let end = start + pageSize;

    let pageItems = arr.slice(start, end);
    for (let item of pageItems) {
        let div = document.createElement('div');
        div.classList.add('item');
        div.innerText = `${item.id}. ${item.title} — ${item.price} грн`;
        target.appendChild(div);
    }
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === arr.length / pageSize;
}

nextBtn.onclick = function() {
    if (currentPage < arr.length / pageSize) {
        currentPage++;
        renderPage(currentPage);
    }
};

prevBtn.onclick = function() {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
    }
};

renderPage(currentPage);

