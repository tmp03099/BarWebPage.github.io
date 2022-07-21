//In main-script.js//

First I used jquery to created slide toggle for menu bar.
by using .slideToggle() with speed 40 milliseconds to slide the menu bar when user clicks menu icon.

 $(".menu-icon").click(function(){

        $(".menu-bar").slideToggle(40,function(){
           
        });
        
 });


I just want to show menu bar when the window size >= 995px. I used .show() and .hide() function.

 $(window).resize(function(){
        var win=$(this);
        if (win.width() >= 995){
            $(".menu-bar").show();
        }

        else {
            $(".menu-bar").hide();
        }
  });


On the menu page: 
I format only menu drink show when user accessed menu page. 
I hiden list food and set background for the button menu drink by using .hide() and .css() function.

 $(".list-food").hide();
 $(".button-menu-drink").css({"background-color":"#ffff68"});

Then I set up when user click drink button the drink menu will show with yellow background and in the opposite. 

 $(".button-menu-drink").click(function(){
      	$(".list-drink").show();
        $(".list-food").hide();
        $(".button-menu-drink").css({"background-color":"#ffff68"});
        $(".button-menu-food").css({"background-color":"#ffffff00"});
    
 });

 $(".button-menu-food").click(function(){
        $(".list-drink").hide();
        $(".list-food").show();
        $(".button-menu-food").css({"background-color":"#ffff68"});
        $(".button-menu-drink").css({"background-color":"#ffffff00"});
        
 });


On the reservation page:
I set the validation for the reservation form by using validate() function. 
It requried user must fill out name, and phone.

 $("#reser-form").validate({
        rules:{
            name: "required",
            phone: "required"
        },
        messages:{
            name:"Please fill out your name.",
            phone:"Please fill out your phone"

        },
        submitHandler: function(form){
            form.submit();
            alert("Your reservation is submitted!")
        }
 });




// In takeout-script.js//

First, I assigned and defined variable for calculation.
var subtotal = 0;
var tax = 0;
var tax_rate = 0.07;
var total = 0;

I also buit array of an object to select different item.
const itemSelectors = [
    { checkbox: '#nuts', quantity: '#nut-quantity', price: '#nut-price', cost: 12},
    { checkbox: '#chips', quantity: '#chip-quantity', price: '#chip-price', cost: 11 },
    { checkbox: '#cakes', quantity: '#cake-quantity', price: '#cake-price', cost: 8 },
    { checkbox: '#roasts', quantity: '#roast-quantity', price: '#roast-price', cost: 11 },
    { checkbox: '#truffles', quantity: '#truffle-quantity', price: '#truffle-price', cost: 13 },
    { checkbox: '#tomatoes', quantity: '#tomato-quantity', price: '#tomato-price', cost: 11 },
    { checkbox: '#porks', quantity: '#pork-quantity', price: '#pork-price', cost: 14 },
    { checkbox: '#oysters', quantity: '#oyster-quantity', price: '#oyster-price', cost: 28 },
    { checkbox: '#octopi', quantity: '#octopus-quantity', price: '#octopus-price', cost: 20 },
    { checkbox: '#chickens', quantity: '#chicken-quantity', price: '#chicken-price', cost: 15 },

];


Create onQuantityChange() function to calculate the take-out form.
- I used the for loop to select all of the item. Then I used jquery with .val() function to get value of quantity.
- I used .prop() method to know if the checkbox had checked and calculate the price and show it.
- Then I used the .val() function to display the value on the page.

function onQuantityChange() {
    var subtotal = 0;

    for (item of itemSelectors) {
        const quantity = $(item.quantity).val();
        if (quantity != "") {
            $(item.checkbox).prop('checked', true);

            const itemPrice = item.cost * quantity ;
            $(item.price).val("$" + itemPrice.toFixed(2));

            subtotal += itemPrice;
        } else {
            $(item.checkbox).prop('checked', false);
            $(item.price).val("");
            
        }
        
    }

    $("#subtotal").val("$" + subtotal.toFixed(2));
    tax = subtotal * 0.07;
    $("#tax").val("$" + tax.toFixed(2));
    total = subtotal + tax
    $("#total").val("$" + total.toFixed(2));

};

Create a onCheckBoxChange() function to check when the checkbox element change.
I used for loop to select all of the item and check if the checkbox is unchecked 
then clear the quantity and price and recalculate. In the opposite, set the quantity = 1 and calculate. 

function onCheckboxChange() {
    for (item of itemSelectors){
        if ('#' + this.id == item.checkbox) {
            if(this.checked != true){
                $(item.quantity).val("");
                $(item.price).val("");
                onQuantityChange();
            }
	     else{
                $(item.quantity).val("1");
                onQuantityChange();
            }
        }
    }
};


Used .change() function to set up the onCheckboxChange function run to make a selection when the checkbox element clicked. 

$(document).ready(function(){
    for (item of itemSelectors){
        $(item.checkbox).change(onCheckboxChange);
    };
)};


I set payment method for the form by using .hide() and .show() function.
Always set hide for credit card input.

    $(".credit-card input").hide();

When user click paypal method the place for enter credit card will hide or show in unavailable condition. 
    $("#paypal").click(function(){
        $(".credit-card input").prop("disabled", true)
                               .css({"backgroundColor":"rgb(135,135,135)",
                                        "borderColor":"rgb(135,135,135)"});
    });

When user click credit card method it will show you place to enter your credit card infomation.                            
    $("#card").click(function(){
        $(".credit-card input").prop("disabled", false)
                               .show()
                               .css("backgroundColor","");
    });



Set the validation for form by using validate function. Then notify when the order submitted.

    $(".order-takeout").validate({
        rules:{
            name: "required",
            phone: "required",
            cardName: "required",
            cardNumber: "required",
            expiration: "required",
            securityCode: "required"
	    
        },
        messages:{
            name:"Please fill out your name.",
            phone:"Please fill out your phone",
            cardName: "Enter your card name",
            cardNumber:"Enter your card number",
            expiration: "Enter your expiration card",
            securityCode: "Enter your security code"

        },
        submitHandler: function(form){
            form.submit();
 	    alert("Your order is submitted!");
        }
        
    });















