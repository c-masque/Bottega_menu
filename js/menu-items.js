cl = console.log
var wantItem1 = true
var wantItem2 = true
var wantItem3 = true
var wantItem4 = true
var wantItem5 = true
var wantItem6 = true
var totalAmount = 0



function randomMenuItem () {
    function randomNumber(min, max) { 
        return Math.floor(Math.random() * (max - min) + min);
    }

    //return "menuItem".concat(randomNumber(1, 3))
    return "mainMenu.m" + randomNumber(1,3) + "[0]"
}

// Main menu items - make a class so can have different kinds of menus?
const mainMenu = {'m1': ['one large waffle', 8],
    'm2': ['two pancakes', 4],
    'm3': ['oatmeal n\' berries', 6]
} 


const sideMenu = {'s1': ['two sausage deal', 2],
    's2': ['twin egg special', 1],
    's3': ['meat patty', 4]
}


function updateHello () {
    document.getElementById("welcome-to-waffleplace").innerHTML = "Hope you're craving waffles."
    document.getElementById("subtext").innerHTML = " "
}


function updatePhoto () {
    let image = document.getElementById("waitress") // .src("img/waitresslooks.jpg")
    if (image.src.match("img/waitresslooks.jpg")) {
        image.src = "img/waitress.jpg"
    } else {
        image.src = "img/waitresslooks.jpg"
    }
}


function accessMenu (id) {

    // this sets the default total to 0 on page load
    document.getElementById('total').innerHTML = `$${totalAmount}`

    // works with body onload -- maybe be able to slide a dinner menu in and out?
    // create loop instead of doing this manually like a noob

    //main menu
    const menuItem1 = mainMenu.m1[0]
    document.getElementById('1').innerHTML = `${menuItem1}`
    const menuItem2 = mainMenu.m2[0]
    document.getElementById('2').innerHTML = `${menuItem2}`
    const menuItem3 = mainMenu.m3[0]
    document.getElementById('3').innerHTML = `${menuItem3}`

    //side menu
    const menuItem4 = sideMenu.s1[0]
    document.getElementById('4').innerHTML = `${menuItem4}`
    const menuItem5 = sideMenu.s2[0]
    document.getElementById('5').innerHTML = `${menuItem5}`
    const menuItem6 = sideMenu.s3[0]
    document.getElementById('6').innerHTML = `${menuItem6}`

    const receiptPrompt = 
    `
    Menu Switch Id's
    1: Main Menu
    2: Breakfast
    `

    console.log(receiptPrompt)

    switch(id){
        case "breakfast":
            console.log("Main Menu Loaded")
            break;
        case 1:
            menuClick1()
            break;
        case 2:
            menuClick2()
            break;
        case 3:
            menuClick3()
            break;
        case 4:
            menuClick4()
            break;
        case 5:
            menuClick5()
            break;
        case 6:
            menuClick6()
            break;
        default:
        console.error("Broken Switch")
         break
    }
    
    function menuClick1 () {
        cl(wantItem1)
        updatePhoto()

        if(wantItem1){
            const menuItem1price = mainMenu.m1[1]
            totalAmount += menuItem1price
            cl(totalAmount)
            document.getElementById('total').innerHTML = `$${totalAmount}`
            document.getElementById("welcome-to-waffleplace").innerHTML = `You want the ${menuItem1}? That will be $${menuItem1price}.`
            document.getElementById("subtext").innerHTML = `The ${menuItem4} goes well with that.`
            wantItem1 = false
        } else {
            const menuItem1price = mainMenu.m1[1]
            totalAmount -= menuItem1price
            cl(totalAmount)
            document.getElementById('total').innerHTML = `$${totalAmount}`
            document.getElementById("welcome-to-waffleplace").innerHTML = `Oh, you don't want ${menuItem1} anymore? That's okay.`
            wantItem1 = true
        }
    }

    function menuClick2 () {
        cl(wantItem2)
        updatePhoto()

        if(wantItem2){
            const menuItem2price = mainMenu.m2[1]
            totalAmount += menuItem2price
            cl(totalAmount)
            document.getElementById('total').innerHTML = `$${totalAmount}`
            document.getElementById("welcome-to-waffleplace").innerHTML = `You want the ${menuItem2}? That will be $${menuItem2price}.`
            document.getElementById("subtext").innerHTML = `The ${menuItem5} is a classically paired with the ${menuItem2}.`
            wantItem2 = false
        } else {
            const menuItem2price = mainMenu.m2[1]
            totalAmount -= menuItem2price
            cl(totalAmount)
            document.getElementById('total').innerHTML = `$${totalAmount}`
            document.getElementById("welcome-to-waffleplace").innerHTML = `Oh, you don't want ${menuItem2} anymore? That's okay.`
            wantItem2 = true
        }
    }

    function menuClick3 () {
        cl(wantItem3)
        updatePhoto()

        if(wantItem3){
            const menuItem3price = mainMenu.m3[1]
            totalAmount += menuItem3price
            cl(totalAmount)
            document.getElementById('total').innerHTML = `$${totalAmount}`
            document.getElementById("welcome-to-waffleplace").innerHTML = `You want the ${menuItem3}? That will be $${menuItem3price}.`
            document.getElementById("subtext").innerHTML = `The ${menuItem6} rounds your meal out.`
            wantItem3 = false
        } else {
            const menuItem3price = mainMenu.m3[1]
            totalAmount -= menuItem3price
            cl(totalAmount)
            document.getElementById('total').innerHTML = `$${totalAmount}`
            document.getElementById("welcome-to-waffleplace").innerHTML = `Oh, you don't want ${menuItem3} anymore? That's okay.`
            wantItem3 = true
        }
    }

    function menuClick4 () {
        cl(wantItem4)
        updatePhoto()

        if(wantItem4){
            const menuItem4price = sideMenu.s1[1]
            totalAmount += menuItem4price
            cl(totalAmount)
            document.getElementById('total').innerHTML = `$${totalAmount}`
            document.getElementById("welcome-to-waffleplace").innerHTML = `You want the ${menuItem4}? That will be $${menuItem4price}.`
            document.getElementById("subtext").innerHTML = `The ${eval(randomMenuItem())} goes well with that.`
            wantItem4 = false
        } else {
            const menuItem4price = sideMenu.s1[1]
            totalAmount -= menuItem4price
            cl(totalAmount)
            document.getElementById('total').innerHTML = `$${totalAmount}`
            document.getElementById("welcome-to-waffleplace").innerHTML = `Oh, you don't want ${menuItem4} anymore? That's okay.`
            wantItem4 = true
        }
    }

    function menuClick5 () {
        cl(wantItem5)
        updatePhoto()

        if(wantItem5){
            const menuItem5price = sideMenu.s2[1]
            totalAmount += menuItem5price
            cl(totalAmount)
            document.getElementById('total').innerHTML = `$${totalAmount}`
            document.getElementById("welcome-to-waffleplace").innerHTML = `You want the ${menuItem5}? That will be $${menuItem5price}.`
            document.getElementById("subtext").innerHTML = `The ${eval(randomMenuItem())} would be a next great choice.`
            wantItem5 = false
        } else {
            const menuItem5price = sideMenu.s2[1]
            totalAmount -= menuItem5price
            cl(totalAmount)
            document.getElementById('total').innerHTML = `$${totalAmount}`
            document.getElementById("welcome-to-waffleplace").innerHTML = `Oh, you don't want ${menuItem5} anymore? That's okay.`
            wantItem5 = true
        }
    }

    function menuClick6 () {
        cl(wantItem6)
        updatePhoto()

        if(wantItem6){
            const menuItem6price = sideMenu.s3[1]
            totalAmount += menuItem6price
            cl(totalAmount)
            document.getElementById('total').innerHTML = `$${totalAmount}`
            document.getElementById("welcome-to-waffleplace").innerHTML = `You want the ${menuItem6}? That will be $${menuItem6price}.`
            document.getElementById("subtext").innerHTML = `Would you be interested in ${eval(randomMenuItem())} with your ${menuItem6}?`
            wantItem6 = false
        } else {
            const menuItem6price = sideMenu.s3[1]
            totalAmount -= menuItem6price
            cl(totalAmount)
            document.getElementById('total').innerHTML = `$${totalAmount}`
            document.getElementById("welcome-to-waffleplace").innerHTML = `Oh, you don't want ${menuItem5} anymore? That's okay.`
            wantItem6 = true
        }
    }
    
}


function updateTotal () {
    // add menuitem amounts to total and print in convo box stating how much it is
}

// perhaps append extra menu items as they load? vvv
//for (item in mainMenu) {
//    let newElement = document.createElement('div')
//    newElement.id = mainMenu[m]
//    newElement.className = 'menu-item'
//    newElement.innerHTML = mainMenu[m];
//    document.body.appendChild(newElement)
//}