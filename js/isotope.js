// ----- Isotope -----

// when document loads...
$(document).ready(function() {
    
    // create a variable called "$cards"
    // element with ID "#cards" is assigned to variable 
    // apply following options to the variable
    var $cards = $("#cards").isotope({

    // defines the items in the collection
    // this allows for Isotope to properly organize the cards
    itemSelector: ".card",
    // lays out cards in a vertical column
    layoutMode: "vertical",
    // sort cards by data-category defined in each card's attribute
    getSortData: {
        category: "[data-category]"
    }
    });

    // when a button is clicked in the ".button-group" div...
    $(".button-group").on("click", "button", function() {
        // creates a variable called filterValue
        // assigns the data-filter attribute to filterValue according to the button clicked
        var filterValue = $(this).attr("data-filter");
        // filters the cards by the data-filter attribute
        $cards.isotope({ filter: filterValue });
    })

});