//Зробити свій розпорядок дня.
//Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
//Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
//Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання.
//Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//Тобто, як приклад
//Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави - Працюєте - Поїхали до дому - Повчились - Лягли спати.
//Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні функції доїхати на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і лишились голодні.
let chance = 0.2;

function myDay(message) {
    console.log('good morning');
    return new Promise((resolve, reject) => {
       setTimeout( () => {
           Math.random() > chance
           ? resolve (message)
           : reject ('borring day')
       }, 2000)
    })
}

function zumba(dance) {
    console.log('lets dance');
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            Math.random() > chance
                ? resolve (dance)
                : reject ('cant found favorite song(((')
        }, 2000)
    })
}

function breakfast(pancakes) {
    console.log('lets cook');
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            Math.random() > chance
                ? resolve (pancakes)
                : reject ('oooops, I dont have milk')
        }, 2000)
    })
}

function loundry(stuff) {
    console.log('I need clean t-short');
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            Math.random() > chance
                ? resolve (stuff)
                : reject ('my detergent is empty')
        }, 2000)
    })
}

function shop(shoping) {
    console.log('I like shoping');
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            Math.random() > chance
                ? resolve (shoping)
                : reject ('the shop is close')
        }, 2000)
    })
}

function kids(play) {
    console.log('lets play with my girls');
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            Math.random() > chance
                ? resolve (play)
                : reject ('I must study')
        }, 2000)
    })
}

function parents(callMum) {
    console.log('Hello, Mum and Dad');
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            Math.random() > chance
                ? resolve (callMum)
                : reject ('poor internet connection')
        }, 2000)
    })
}

function pizzaHouse(pizza) {
    console.log('we looove pizza');
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            Math.random() > chance
                ? resolve (pizza)
                : reject ('they dont have delivery')
        }, 2000)
    })
}


myDay('chao')
    .then((result) => {
        console.log(result)
        return zumba('cha cha cha')
    })
    .then((result) => {
        console.log(result)
        return breakfast('yami')
    })
    .then((result) => {
        console.log(result)
        return loundry('t-short')
    })
    .then((result) => {
        console.log(result)
        return shop('IDEA')
    })
    .then((result) => {
        console.log(result)
        return kids('hide and seek')
    })
    .then((result) => {
        console.log(result)
        return parents('mimimi')
    })
    .then((result) => {
        console.log(result)
        return pizzaHouse('margarita')
    })
    .catch((error) => {
        console.log(error);
    })


// callbacks

let chance1 = 0.2;

function myDay1(message, cb) {
    console.log('good morning');
    setTimeout( () => {
            Math.random() > chance1
                ? cb (null, message)
                : cb ('borring day')
        }, 2000)
    }

function zumba1(dance, cb) {
    console.log('lets dance');
    setTimeout( () => {
        dance
            ? cb (null, 'cha cha cha')
            : cb ('cant found favorite song(((')
        }, 2000)
    }

function breakfast1(pancakes, cb) {
    console.log('lets cook');
    setTimeout( () => {
        pancakes
            ? cb (null, 'yami')
            : cb ('oooops, I dont have milk')
        }, 2000)
}

function loundry1(stuff, cb) {
    console.log('I need clean t-short');
    setTimeout( () => {
        stuff
            ? cb (null, 'all clean')
            : cb ('my detergent is empty')
        }, 2000)
}

function shop1(shoping, cb) {
    console.log('I like shoping');
    setTimeout( () => {
        shoping
            ? cb (null, 'I buy all I need')
            : cb ('the shop is close')
        }, 2000)
}

function kids1(play, cb) {
    console.log('lets play with my girls');
    setTimeout( () => {
        play
            ? cb (null, 'funny games')
            : cb ('I must study')
        }, 2000)
}

function parents1(callMum, cb) {
    console.log('Hello, Mum and Dad');
    setTimeout( () => {
        callMum
            ? cb (null, 'love you')
            : cb ('poor internet connection')
        }, 2000)
}

function pizzaHouse1(pizza, cb) {
    console.log('we looove pizza');
    setTimeout( () => {
        pizza
            ? cb (null, 'omnom')
            : cb ('they dont have delivery')
        }, 2000)
}

myDay1(true, (error,data) => {
    if (error) {
        console.log(error, 'in morning');
    } else {
        console.log(data);
    }
    zumba1(true, (error,data) => {
        if (error) {
            console.log(error, 'dancing zumba');
        } else {
            console.log(data);
        }
        breakfast1(true, (error,data) => {
            if (error) {
                console.log(error, 'in breakfast');
            } else {
                console.log(data);
            }
            loundry1(true, (error,data) => {
                if (error) {
                    console.log(error, 'doing loundry');
                } else {
                    console.log(data);
                }
                shop1(true, (error, data) => {
                    if (error) {
                        console.log(error, 'in the shop');
                    } else {
                        console.log(data);
                    }
                    kids1(true, (error,data) => {
                        if (error) {
                            console.log(error, 'in the playroom');
                        } else {
                            console.log(data);
                        }
                        parents1(true, (error,data) => {
                            if (error) {
                                console.log(error, 'tallking with mam');
                            } else {
                                console.log(data);
                            }
                            pizzaHouse1(true, (error,data) => {
                                if (error) {
                                    console.log(error, 'ordering pizza');
                                } else {
                                    console.log(data);
                                }
                                console.log('enough');
                            })
                        })
                    })
                })
            })
        })
    })
});



