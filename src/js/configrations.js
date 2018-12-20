/******AOS Animation******* */

AOS.init();

/*****slick slider configrations****************************************/
$('.new-arrivals').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 2
        }
    }]
});

//************drag and drop number***** */
var $draggedItem;

$(document).ready(function () {
    $('.item').on('dragstart', dragging);
    $('.item').on('dragend', draggingEnded);
    $('.hole').on('dragenter', preventDefault);
    $('.hole').on('dragover', preventDefault);
    $('.hole').on('drop', dropItem);
});

function dragging(e) {
    $(e.target).addClass('dragging');
    $draggedItem = $(e.target);
}

function draggingEnded(e) {
    $(e.target).removeClass('dragging');
}

function preventDefault(e) {
    e.preventDefault();
}

function dropItem(e) {
    var hole = $(e.target);
    if (hole.hasClass('hole') && hole.children().length === 0) {
        $draggedItem.detach();
        $draggedItem.appendTo(hole);
    }
}