// ==UserScript==
// @name         eSim MU Storage 2
// @namespace    eSim-MU2
// @version      2.04.5
// @description  Improve the eSim MU Storage Page
// @author       goekkan
// @match        https://*.e-sim.org/militaryUnitStorage.html*
// @icon         https://cdn.discordapp.com/icons/316566483021070356/cfffdee309ec53078e9a9698ec4eef42.png?size=256
// @grant        none
// ==/UserScript==


//Global variables
var quality_form = document.getElementById("quantity");
var tick_all_btn = document.getElementById("tickAll");
var esim_donate_form = document.getElementById("donateProductForm");
var user_element = document.getElementById("userName");
var user_id = user_element.href.split("=")[1];
var product_options = document.getElementById("product")
var storage = document.querySelectorAll(".storage");
var elementList = document.querySelectorAll(".receipments");

var food_div = document.createElement("div");
var food_textarea = document.createElement("input");
var food_quantity_input = document.createElement("input");
 
var gift_div = document.createElement("div");
var gift_textarea = document.createElement("input");
var gift_quantity_input = document.createElement("input");
 
var wep_div = document.createElement("div");
var wep_textarea= document.createElement("input");
var wep_quantity_input = document.createElement("input");
 
var btn_send_supps = document.createElement("BUTTON");
var line_break = document.createElement("hr");

// sleep function
const delay = ms => new Promise(res => setTimeout(res, ms));

/* return random number between 4000 and 7000
    (milisecs for the the sleep function)
    (randomized to avoid suspicion)
*/
function random_n(){
    return Math.floor(Math.random() * 3000) + 4000
}

/*  queries all .receipments
    checking in a for loop if
    the current item is you
*/
function find_form_citizen_id(){
    var elementList = document.querySelectorAll(".receipments");
    for (var i = 0; i < elementList.length; i++){
        if (elementList[i].value == user_id ) {
            return elementList[i].name;
        }
    }
}

/*  Changes the color, like a status update
    Green means 'Product sent'
    Yellow means 'Script is sleeping, will be sent soon'
*/
function supps_status_color (supp_type, status) {
    if (supp_type == "FOOD"){
        if (status == "ORANGE"){
            food_textarea.style.color = "Orange";
            food_quantity_input.style.color = "Orange";

        } else if (status == "GREEN"){
            food_quantity_input.style.color = "#11806a";
            food_textarea.style.color = "#11806a";

        }
    } else if (supp_type == "GIFT"){
        if (status == "ORANGE"){
            gift_textarea.style.color = "Orange";
            gift_quantity_input.style.color = "Orange";

        } else if (status == "GREEN"){
            gift_textarea.style.color = "#11806a";
            gift_quantity_input.style.color = "#11806a";
        }
    } else if (supp_type == "WEAPON"){
        if (status == "ORANGE"){
            wep_div.style.color = "Orange";
            wep_quantity_input.style.color = "Orange";

        } else if (status == "GREEN"){
            wep_div.style.color = "#11806a";
            wep_quantity_input.style.color = "#11806a";
        }
    }
}

/*  Change the Color back to normal (Black)
    After all Products have been sent */
function reset_buttons_and_text(){
    food_textarea.style.color = "Black";
    food_quantity_input.style.color = "Black";
    gift_textarea.style.color = "Black";
    gift_quantity_input.style.color = "Black";
    wep_div.style.color = "Black";
    wep_quantity_input.style.color = "Black";
    btn_send_supps.disabled = false;
}

// Create a XMLHttpRequest 
function start_connection(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/militaryUnitStorage.html', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE) {
            // Request finished. Do processing here.
        }
    }
    return xhr
}

/* async function 
*/
const send_supps = async () => {
    btn_send_supps.disabled = true; 
    // Makes the 'Send Supps'Button not clicable

    var xhr;
    var citizen_id = find_form_citizen_id()
    /*  If User has requested the product ->
        1. Change the Input Fields color to Orange
        2. Sleep for a random time (to avoid suspicion)
        3. Construct the the Request Payload example:
            product=5-WEAPON&quantity=1&reason=&citizen1=123
        4. Create a XMLHttpRequest
        5. Change the Input Fields color to Green.
    */
    if (food_quantity_input.value > 1){
        supps_status_color("FOOD", "ORANGE");
        await delay(random_n());
        var food_form_data = "product=5-FOOD&quantity=" + food_quantity_input.value + "&reason=&"+ citizen_id + "=" + user_id;
        xhr = start_connection();
        xhr.send(food_form_data);
        supps_status_color("FOOD", "GREEN");

    }
    if (gift_quantity_input.value > 1){
        supps_status_color("GIFT", "ORANGE");
        await delay(random_n());
        var gift_form_data = "product=5-GIFT&quantity=" + gift_quantity_input.value + "&reason=&"+ citizen_id + "=" + user_id;
        xhr = start_connection();
        xhr.send(gift_form_data);
        supps_status_color("GIFT", "GREEN");
    }
    if (wep_quantity_input.value > 1){
        supps_status_color("WEAPON", "ORANGE");
        await delay(random_n());
        var wep_form_data = "product=5-WEAPON&quantity=" + wep_quantity_input.value + "&reason=&"+ citizen_id + "=" + user_id;
        xhr = start_connection();
        xhr.send(wep_form_data);
        supps_status_color("WEAPON", "GREEN");
    }
    reset_buttons_and_text() // Reset colors to black
}

// Add up quanity with amount on every 10/100/1000_quantity_add_btn presss
function add_quantity(amount) {
    quality_form.value = parseInt(quality_form.value) + amount;
}

function create_elements(){
    /*  Create 3 buttons
        Place them next to the esim Quantity Input field
        Event listener > on click > increase Quantity
    */
    var quantity_add_10_btn = document.createElement("BUTTON");
    quantity_add_10_btn.type = "button";
    quantity_add_10_btn.setAttribute('class', 'submit');
    quantity_add_10_btn.innerHTML = '10';
    quality_form.parentNode.insertBefore(quantity_add_10_btn, quality_form.nextSibling);
    quantity_add_10_btn.addEventListener("click", function(){add_quantity(10)});

    var quantity_add_100_btn = document.createElement("BUTTON");
    quantity_add_100_btn.type = "button";
    quantity_add_100_btn.innerHTML = '100';
    quality_form.parentNode.insertBefore(quantity_add_100_btn, quantity_add_10_btn.nextSibling);
    quantity_add_100_btn.addEventListener("click", function(){add_quantity(100)});

    var quantity_add_1000_btn = document.createElement("BUTTON");
    quantity_add_1000_btn.type = "button";
    quantity_add_1000_btn.innerHTML = '1000';
    quality_form.parentNode.insertBefore(quantity_add_1000_btn, quantity_add_100_btn.nextSibling);
    quantity_add_1000_btn.addEventListener("click", function(){add_quantity(1000)});

    // Create 'Send Yourself' button
    var send_yourself_btn = document.createElement("BUTTON");
    send_yourself_btn.innerHTML = 'Send Yourself';
    send_yourself_btn.setAttribute("name", find_form_citizen_id);
    send_yourself_btn.setAttribute("value", user_id);
    tick_all_btn.parentNode.insertBefore(send_yourself_btn, tick_all_btn.nextSibling);

    /* Create 3 divs (Food,Gift,Weapon)
        Insert texteara + input field
    */
    var food_div = document.createElement("div");
    food_div.style.display = "inline-block";
    food_div.setAttribute('id',"foodProductForm");

    esim_donate_form.parentNode.insertBefore(food_div, esim_donate_form);

    var food_textarea = document.createElement("textarea");
    food_textarea.setAttribute("value", "Q5-FOOD");
    food_textarea.setAttribute("name", "product");
    food_textarea.value = "Food";
    food_textarea.disabled = true;
    food_textarea.style.cssText = 'color:black; width:33px; height:15px;';
    food_div.appendChild(food_textarea);

    var food_quantity_input = document.createElement("input");
    food_quantity_input.style.cssText = 'margin-left: -0.1em!important; margin-right: 0.5em!important; width:31px; height:15px';
    food_quantity_input.setAttribute("name", "quantity");
    food_quantity_input.setAttribute("value", "15");
    food_quantity_input.type = "digit";
    food_div.appendChild(food_quantity_input);

    var gift_div = document.createElement("div");
    gift_div.style.display = "inline-block";
    gift_div.setAttribute('id',"giftProductForm");

    esim_donate_form.parentNode.insertBefore(gift_div, esim_donate_form);

    var gift_textarea = document.createElement("textarea");
    gift_textarea.value = "Gift";
    gift_textarea.disabled = true;
    gift_textarea.style.cssText = 'color:black; width:30px; height:15px;';
    gift_div.appendChild(gift_textarea);

    var gift_quantity_input = document.createElement("input");
    gift_quantity_input.style.cssText = 'margin-left: -0.1em!important; margin-right: 0.5em!important; width:31px; height:15px';
    gift_quantity_input.type = "digit";
    gift_quantity_input.setAttribute("value", "15");
    gift_div.appendChild(gift_quantity_input);

    var wep_donate_form = document.createElement("div");
    wep_donate_form.style.display = "inline-block";
    wep_donate_form.setAttribute('id',"wepProductForm");
    wep_donate_form.noValidate = true;
    esim_donate_form.parentNode.insertBefore(wep_donate_form, esim_donate_form);

    var wep_div = document.createElement("textarea");
    wep_div.value = "Wep";
    wep_div.disabled = true;
    wep_div.style.cssText = 'color:black; width:30px; height:15px;';
    wep_donate_form.appendChild(wep_div);

    var wep_quantity_input = document.createElement("input");
    wep_quantity_input.style.cssText = 'margin-left: -0.1em!important; margin-right: 0.5em!important; width:31px; height:15px'
    wep_quantity_input.type = "digit";
    wep_quantity_input.setAttribute("value", "250");
    wep_donate_form.appendChild(wep_quantity_input);

    // Create 'Send Supps' button
    var btn_send_supps = document.createElement("BUTTON")
    btn_send_supps.type = "button"
    btn_send_supps.addEventListener("click", send_supps);
    btn_send_supps.innerHTML = "SEND SUPPS"
    esim_donate_form.parentNode.insertBefore(btn_send_supps, esim_donate_form);

    // Change the selected default Text 
    product_options.options[0].text = "Click on an item"
}

// Selects to Product you have clicked on in your Storage
function clicked_on(item){
    for (var i = 1; i < product_options.length; i++) {
        var p_option = product_options[i]
        if (p_option.value == item){
            p_option.selected = true
        }
    }
}

// Call func to create all elements
create_elements()


// Create an Event Listener for every Product in the MU Storage
for (var i = 0; i < storage.length; i++) {
    var item_in_storage = storage[i]
    var item_dirty = item.children[0].className
    if (item_dirty){
        var item_clean = item_dirty.replace("-ammount","")
        switch (item_clean){
            case "Weapon-5":
                item_in_storage.addEventListener("click", function(){clicked_on("5-WEAPON")});
                break;
            case "Weapon-4":
                item_in_storage.addEventListener("click", function(){clicked_on("4-WEAPON")});
                break;
            case "Weapon-3":
                item_in_storage.addEventListener("click", function(){clicked_on("3-WEAPON")});
                break;
            case "Weapon-2":
                item_in_storage.addEventListener("click", function(){clicked_on("2-WEAPON")});
                break;
            case "Weapon-1":
                item_in_storage.addEventListener("click", function(){clicked_on("1-WEAPON")});
                break;
            case "Food-5":
                item_in_storage.addEventListener("click", function(){clicked_on("5-FOOD")});
                break;
            case "Food-4":
                item_in_storage.addEventListener("click", function(){clicked_on("4-FOOD")});
                break;
            case "Food-3":
                item_in_storage.addEventListener("click", function(){clicked_on("3-FOOD")});
                break;
            case "Food-2":
                item_in_storage.addEventListener("click", function(){clicked_on("2-FOOD")});
                break;
            case "Food-1":
                item_in_storage.addEventListener("click", function(){clicked_on("1-FOOD")});
                break;
            case "Gift-5":
                item_in_storage.addEventListener("click", function(){clicked_on("5-GIFT")});
                break;
            case "Gift-4":
                item_in_storage.addEventListener("click", function(){clicked_on("4-GIFT")});
                break;
            case "Gift-3":
                item_in_storage.addEventListener("click", function(){clicked_on("3-GIFT")});
                break;
            case "Gift-2":
                item_in_storage.addEventListener("click", function(){clicked_on("2-GIFT")});
                break;
            case "Gift-1":
                item_in_storage.addEventListener("click", function(){clicked_on("1-GIFT")});
                break;
            case "Ticket-5":
                item_in_storage.addEventListener("click", function(){clicked_on("5-TICKET")});
                break;
            case "Ticket-4":
                item_in_storage.addEventListener("click", function(){clicked_on("4-TICKET")});
                break
            case "Ticket-3":
                item_in_storage.addEventListener("click", function(){clicked_on("3-TICKET")});
                break;
            case "Ticket-2":
                item_in_storage.addEventListener("click", function(){clicked_on("2-TICKET")});
                break;
            case "Ticket-1":
                item_in_storage.addEventListener("click", function(){clicked_on("1-TICKET")});
                break;
            case "House-5":
                item_in_storage.addEventListener("click", function(){clicked_on("1-HOUSE")});
                break;
            case "Estate-5":
                item_in_storage.addEventListener("click", function(){clicked_on("1-ESTATE")});
                break;
            
        }
    }
}