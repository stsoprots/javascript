// #whXxOBlYS0H
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

let divBox = document.getElementById('box');
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesObjects => {
        let {recipes} = recipesObjects;
        console.log(recipes);
        for (let recipe of recipes) {
            let div = document.createElement('div');
            div.classList.add('recipe-container');
            let h1 = document.createElement('h1')
            h1.innerText = `  
                "id" : ${recipe.id},
                "name": ${recipe.name};`
            div.appendChild(h1);
            let ul = document.createElement('ul');
            for (let ingredient of recipe.ingredients) {
                let li = document.createElement('li');
                li.innerText = `${ingredient}`
                ul.appendChild(li);
                div.appendChild(ul);
            }
            for (let instruction of recipe.instructions) {
                let p2 = document.createElement('p');
                p2.innerText = `${instruction}`;
                div.appendChild(p2);
            }
            let p3 = document.createElement('p');
            p3.innerText = ` 
                "prepTimeMinutes": ${recipe.prepTimeMinutes},
                "cookTimeMinutes": ${recipe.cookTimeMinutes},
                "servings": ${recipe.servings},
                "difficulty": ${recipe.difficulty},
                "cuisine": ${recipe.cuisine},
                "caloriesPerServing": ${recipe.caloriesPerServing},`
            div.appendChild(p3);
            for (let tag of recipe.tags) {
                let p4 = document.createElement('p');
                p4.innerText = `Tags: ${tag}`;
                div.appendChild(p4);
            }
            let p5 = document.createElement('p');
            p5.innerText = `
                "userId": ${recipe.userId},
                "rating": ${recipe.rating},
                "reviewCount": ${recipe.reviewCount},
                `
            div.appendChild(p5);
            let img = document.createElement('img');
            img.src = recipe.image;
            div.appendChild(img);

            for (let type of recipe.mealType) {
                let p6 = document.createElement('p');
                p6.innerText = `Type: ${type}`;
                div.appendChild(p6);
            }
            divBox.appendChild(div)
        }
    });