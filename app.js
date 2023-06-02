// make it appear on the screen???

//Bank Welcome Screen????

// append balance to screen
var balance = 1000

let screen = document.querySelector(".screen");

const uploadToScreen = (balance) => {
    screen.append(`Your balance is $${balance}. `);
};

//parameter for amount to be deposited +x
const deposit = (balance) => {
    screen.innerHTML = `<button class="atmBtn" onclick="add10()"> Deposit $10 </button>
                        <button class="atmBtn" onclick="add25()"> Deposit $25 </button>
                        <button class="atmBtn" onclick="add50()"> Deposit $50 </button>
                        <button class="atmBtn" onclick="add100()"> Deposit $100 </button>`
}

const add10 = () => {
    balance += 10
    screen.append(`Your new balance is $${balance}. `)
}
const add25 = () => {
    balance += 25
    screen.append(`Your new balance is $${balance}. `)
}
const add50 = () => {
    balance += 50
    screen.append(`Your new balance is $${balance}. `)
}
const add100 = () => {
    balance += 100
    screen.append(`Your new balance is $${balance}. `)
}

//make multiple buttons?? for depositing?
// deposit 10, 25, 50, 100, X no greater than 500

//parameter for amount to be withdrawn -x
const withdraw = () => {
    screen.innerHTML = `<button class="atmBtn" onclick="sub10()"> Withdraw $10 </button>
                        <button class="atmBtn" onclick="sub25()"> Withdraw $25 </button>
                        <button class="atmBtn" onclick="sub50()"> Withdraw $50 </button>
                        <button class="atmBtn" onclick="sub100()"> Withdraw $100 </button>`
}

const sub10 = () => {
    balance -= 10
    screen.append(`Your new balance is $${balance}. `)
}
const sub25 = () => {
    balance -= 25
    screen.append(`Your new balance is $${balance}. `)
}
const sub50 = () => {
    balance -= 50
    screen.append(`Your new balance is $${balance}. `)
}
const sub100 = () => {
    balance -= 100
    screen.append(`Your new balance is $${balance}. `)
}
//make multiple buttons?? for withdrawing?
// withdraw 10, 25, 50, 100, X no greater than balance?

//fast cash -100 button

const fastcash = () => {
    if (balance > 0){
    balance = balance - 100
    screen.append(`You have taken out $100! New Balance: $${balance}. `)
    } else {
    screen.append("Insufficient Funds. ")
    }
}

// Reset Screen
const clearScreen = () => {
    screen.innerHTML = `<h1 class="titleScreen">Welcome to Pare O'Dee Banking System</h1>
                        <p class="screenTxt">Please use the right menu to proceed.</p>`
}

//Error messages!
//Insufficient Funds if trying to withdraw greater than balance
//Incorrect entry, please enter numbers