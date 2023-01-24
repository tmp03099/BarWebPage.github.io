
// assgin value
var subtotal = 0;
var tax = 0;
var tax_rate = 0.07;
var total = 0;

// built array of object to select different item//
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

$(document).ready(function(){

    for (item of itemSelectors){
        $(item.checkbox).change(onCheckboxChange);
    };

    // Set payment method 
    $(".credit-card input").hide();

    $("#paypal").click(function(){
        $(".credit-card input").hide();
        $("label.error").hide();
    });
                               
    $("#card").click(function(){
        $(".credit-card input").prop("disable", false)
                               .show()
                               .css("backgroundColor","");
    });


    // Set a validation for form
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


});








