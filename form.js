/**
 * Form script starts here
 */

const restockBtn = document.querySelector('.button-container .restock-btn');
const soldBtn = document.querySelector('.button-container .sold-btn');
const sentenceCompletion = document.querySelector('label span');
const form = document.querySelector('.form');
const messageBox = document.querySelector('.message-box');


function updateStock(colorName, quantity, product, size, password, status){
    const objectOfColors = JSON.parse(localStorage.getItem('colors'));

    if (password === 'pfgme12345'){
        if (status === 'restock'){
            let initialQuantity = Number(objectOfColors[colorName][product][size]);
            objectOfColors[colorName][product][size] = initialQuantity + quantity;
        }
        else{
            // it will return if their is no stock for the product or enough stock to remove
            if (objectOfColors[colorName][product][size] === 0 || quantity > objectOfColors[colorName][product][size] ){
                messageBox.innerText = 'Not enough stock to remove';
                messageBox.style.display = 'block';
                return;
            }
            else {
                objectOfColors[colorName][product][size] -= quantity;
            }
        }

        localStorage.setItem('colors', JSON.stringify(objectOfColors));
        messageBox.innerText = 'Form Submitted Successfully';
        messageBox.style.display = 'block';
        return 'successful';
    }

    else {
        messageBox.innerText = 'Wrong Password';
        messageBox.style.display = 'block';
    }


}

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

    // If none of the restock/sold button is clicked, change the sentenceCompletion to it's html initial value

    if (restockBtn.style.backgroundColor != 'rgb(43, 235, 209)' && soldBtn.style.backgroundColor != 'rgb(43, 235, 209)'){
        sentenceCompletion.innerText = ' do you want to record ?'
    }
})




form.addEventListener('submit', (event) => {
    event.preventDefault();

    const colorName = form.color.value;
    const quantity = Number(form.quantity.value);
    const product = form.product.value;
    const size = form.size.value;
    const password = form.password.value;
    const checked = form.confirm.checked;
    let status = null;
    // check which is clicked (Restock or Sold)
    if (restockBtn.style.backgroundColor === 'rgb(43, 235, 209)'){
        status = 'restock';
    }
    else if (soldBtn.style.backgroundColor === 'rgb(43, 235, 209)'){
        status = 'sold';
    }
    else{
        messageBox.innerText = 'Choose between RESTOCK or SOLD';
        messageBox.style.display = 'block';
        return;
    }

    if (colorName && quantity && product && size && password && checked && status){
        if (updateStock(colorName, quantity, product, size, password, status) === 'successful'){
            // Reset everything in the form
            form.reset();
            soldBtn.style.backgroundColor = 'rgb(2, 49, 87)'
            soldBtn.style.color = 'rgb(43, 235, 209)';
            soldBtn.style.border = 'solid 1px rgb(43, 235, 209)'

            restockBtn.style.backgroundColor = 'rgb(2, 49, 87)'
            restockBtn.style.color = 'rgb(43, 235, 209)';
            restockBtn.style.border = 'solid 1px rgb(43, 235, 209)'
        }
    }


})