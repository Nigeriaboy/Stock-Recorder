const colorContainer = document.querySelectorAll(".container > div");
const resetCheckbox = document.querySelector('.reset-container .reset-checkbox');
const resetBtn = document.querySelector('.reset-container .reset-btn');
const messageBox = document.querySelector('.message-box');

// Reset the whole table when clicked
if (resetBtn){
    resetBtn.addEventListener('click', () => {
        if (resetCheckbox.checked){
            let objectOfColors = {};

            colorContainer.forEach(color => {
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
            messageBox.innerText = 'All data in table has been reset Successfully'
            messageBox.style.display = 'block';
        }
        else {
            messageBox.innerText = 'Make sure you check the button'
            messageBox.style.display = 'block';
        }

    })
}

if (colorContainer){
    colorContainer.forEach(container => {
        container.addEventListener('click', () => {
            let objectOfColors = JSON.parse(localStorage.getItem("colors"));
            let istableContainer = document.querySelector('.container > div > .table-container'); // create this variable just to check if their is already a table in the div container

            if (istableContainer){
                istableContainer.remove(); // This will remove the table from the table container
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
}


