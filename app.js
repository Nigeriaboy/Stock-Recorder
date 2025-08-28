const colorContainer = document.querySelectorAll(".container > div");

/**
let objectOfColors = {};

colors.forEach(color => {
    objectOfColors[color.className] = {
        emulsion: {
            '4ltr': 0,
            '20ltr': 0,
        },
        emulsionVPlus: {
            '4ltr': 0,
            '20ltr': 0,
        },
        satin: {
            '4ltr': 0,
            '20ltr': 0,
        },
        textcoat: {
            '4ltr': 0,
            '20ltr': 0,
        },
        matt: {
            '4ltr': 0,
            '20ltr': 0,
        },
        gloss: {
            '4ltr': 0,
            '20ltr': 0,
        },
        glossVPlus: {
            '4ltr': 0,
            '20ltr': 0,
        },
        glossA1: {
            '4ltr': 0,
            '20ltr': 0,
        },
    }

})

localStorage.setItem('colors', JSON.stringify(objectOfColors));
 */

let objectOfColors = JSON.parse(localStorage.getItem("colors"));

colorContainer.forEach(container => {
    container.addEventListener('click', () => {

        let istableContainer = document.querySelector('.container > div > .table-container'); // create this variable just to check if their is already a table in the div container

        if (istableContainer){
            istableContainer.remove(); // This will close up the table
        }
        else{

            let tableContainer = document.createElement('div');
            let table = document.createElement('table');
            let color = container.className;

            tableContainer.className = "table-container";

            table.innerHTML = `
                        <thead>
                            <th></th>
                            <th>EML</th>
                            <th>SATIN</th>
                            <th>EML V+</th>
                            <th>TXT</th>
                            <th>MATT</th>
                            <th>GLOSS</th>
                            <th>A1 GLOSS</th>
                            <th>V+ GLOSS</th>
                        </thead>
                        <tbody>
                            <tr>
                                <th>20 LTR</th>
                                <td>${objectOfColors[color].emulsion["20ltr"]}</td>
                                <td>${objectOfColors[color].satin["20ltr"]}</td>
                                <td>${objectOfColors[color].emulsionVPlus["20ltr"]}</td>
                                <td>${objectOfColors[color].textcoat["20ltr"]}</td>
                                <td>${objectOfColors[color].matt["20ltr"]}</td>
                                <td>${objectOfColors[color].gloss["20ltr"]}</td>
                                <td>${objectOfColors[color].glossA1["20ltr"]}</td>
                                <td>${objectOfColors[color].glossVPlus["20ltr"]}</td>
                            </tr>
                            <tr>
                                <th>4 LTR</th>
                                <td>${objectOfColors[color].emulsion["4ltr"]}</td>
                                <td>${objectOfColors[color].satin["4ltr"]}</td>
                                <td>${objectOfColors[color].emulsionVPlus["4ltr"]}</td>
                                <td>${objectOfColors[color].textcoat["4ltr"]}</td>
                                <td>${objectOfColors[color].matt["4ltr"]}</td>
                                <td>${objectOfColors[color].gloss["4ltr"]}</td>
                                <td>${objectOfColors[color].glossA1["4ltr"]}</td>
                                <td>${objectOfColors[color].glossVPlus["4ltr"]}</td>
                            </tr>
                        </tbody>
            `

            tableContainer.appendChild(table);
            container.appendChild(tableContainer);
        }
    })
})

/**
 * Form script starts here
 */

const restockBtn = document.querySelector('.button-container .restock-btn');
const soldBtn = document.querySelector('.button-container .sold-btn');
const sentenceCompletion = document.querySelector('label span');

restockBtn.addEventListener('click', () => {
    // Uncheck the soldBtn if it has been checked before
    if (soldBtn.style.backgroundColor === 'rgb(43, 235, 209)'){
        soldBtn.style.backgroundColor = 'rgb(2, 49, 87)'
        soldBtn.style.color = 'rgb(43, 235, 209)';
        soldBtn.style.border = 'solid 1px rgb(43, 235, 209)'
    }

    if(restockBtn.style.backgroundColor === 'rgb(43, 235, 209)'){
        restockBtn.style.backgroundColor = 'rgb(2, 49, 87)'
        restockBtn.style.color = 'rgb(43, 235, 209)';
        restockBtn.style.border = 'solid 1px rgb(43, 235, 209)'
    }
    else{
        restockBtn.style.backgroundColor = 'rgb(43, 235, 209)';
        restockBtn.style.border = 'none';
        restockBtn.style.color = 'rgb(2, 49, 87)';
        sentenceCompletion.innerText = ' do you want to restock ?'
    }

    // If none of the restock/sold button is clicked, change the sentenceCompletion to it's html initail value

    if (restockBtn.style.backgroundColor != 'rgb(43, 235, 209)' && soldBtn.style.backgroundColor != 'rgb(43, 235, 209)'){
        sentenceCompletion.innerText = ' do you want to record ?'
    }
})

soldBtn.addEventListener('click', () => {
    // Uncheck the restockBtn if it has been  checked before
    if (restockBtn.style.backgroundColor === 'rgb(43, 235, 209)'){
        restockBtn.style.backgroundColor = 'rgb(2, 49, 87)'
        restockBtn.style.color = 'rgb(43, 235, 209)';
        restockBtn.style.border = 'solid 1px rgb(43, 235, 209)'  
    }

    if(soldBtn.style.backgroundColor === 'rgb(43, 235, 209)'){
        soldBtn.style.backgroundColor = 'rgb(2, 49, 87)'
        soldBtn.style.color = 'rgb(43, 235, 209)';
        soldBtn.style.border = 'solid 1px rgb(43, 235, 209)'
    }
    else{
        soldBtn.style.backgroundColor = 'rgb(43, 235, 209)';
        soldBtn.style.border = 'none';
        soldBtn.style.color = 'rgb(2, 49, 87)';
        sentenceCompletion.innerText = ' have you sold ?'
    }

    // If none of the restock/sold button is clicked, change the sentenceCompletion to it's html initail value

    if (restockBtn.style.backgroundColor != 'rgb(43, 235, 209)' && soldBtn.style.backgroundColor != 'rgb(43, 235, 209)'){
        sentenceCompletion.innerText = ' do you want to record ?'
    }
})

