$(document).ready(function() {
    
    var $listing = $('#cards').isotope({
    // options
    itemSelector: '.card',
    layoutMode: 'vertical',
    getSortData: {
        category: "[data-category]"
    }
    });

    $(".button-group").on("click", "button", function() {
        var filterValue = $(this).attr("data-filter");
        $listing.isotope({ filter: filterValue });
    })

});