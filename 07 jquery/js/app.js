const $container = $('#links');
const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');

const $checkbox = $("<label><input type='checkbox'> Allow PDF downloads</label>");
$container.append($checkbox);

$secureLinks.attr('target', '_blank').css({'color': 'grey'}).addClass('secure');

$pdfs.attr('download', true).css("color", "lightblue").addClass('pdf');

$pdfs.on('click', function(event){
    
    if ($(':checked').length === 0) {
        event.preventDefault();
        alert('Please check the box to allow PDF downloads.');
    }

});