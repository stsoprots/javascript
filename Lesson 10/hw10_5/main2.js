let sessionsList = JSON.parse(localStorage.getItem('sessionsList'));
console.log(sessionsList);

for (const sessionsListElement of sessionsList) {
    const div = document.createElement('div');
    div.innerText = sessionsListElement.toString();
    document.body.appendChild(div);
}

