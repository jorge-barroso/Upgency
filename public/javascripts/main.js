//$('#section_1').stellar();

const $html_body = $('html,body');

const $section_1 = $('#section_1');
const $section_2 = $('#section_2');
const $section_3 = $('#section_3');
const $section_4 = $('#section_4');
const $section_6 = $('#section_6');

const $first = $('#first')
const $second = $('#second')
const $third = $('#third')
const $fourth = $('#fourth')
const $fifth = $('#fifth')

const form = $('#contact-form');
const submit = $('#submit');

$first.click(function(){
    scroll($section_1);
})
$second.click(function(){
    console.log("clicked");
    scroll($section_2);
})
$third.click(function(){
    scroll($section_3);
})
$fourth.click(function(){
    scroll($section_4);
})
$fifth.click(function(){
    scroll($section_6);
})

function scroll(element) {
    $html_body.animate({
        scrollTop: element.offset().top
    }, "slow");
}

submit.click(function() {
    $.post("/", form.serialize(), function() {
        console.log(200);
    }).fail(function(data) {
        console.log(data);
    });
})