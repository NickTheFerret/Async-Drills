
const message = string => console.log(string);

setTimeout(() => {
    message("it's been two seconds")
}, 2000);

message("Hello")

const getWords = () => {
    console.log("This logs right when the function is called")

    setTimeout(() => {
        console.log("Logged three seconds after the function is called")

        setTimeout(() => {
            console.log("Logged five seconds after the function is called")


            setTimeout(() => {
                console.log("The will log last")
            }, 1000);
        }, 2000);
        //each 1000 is equal to a second (5 seconds = 5000)
    }, 3000);
};

getWords();

const done = () => console.log("it's done");

const countdown = (num, callback) => {
    if (num == 0) {
        callback()
    } else {
        console.log(num)

        setTimeout(() => {
            countdown(num - 1, callback)
        }, 1000);
    }
};

countdown(4, done)
let lunchTime = true;
const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        if (lunchTime) {
            resolve({
                lunch: "Pizza",
                drink: "Sweet Tea"
            })
        } else {
            reject(new error("it's not lunctime!"))
        }
    })
}

orderMeSomeFood()
.then(res => console.log(res.lunch))
.catch(err => console.log(err))