$(function() {

    var $optionsContainer = $('#options-container');

    var addLine = function(){
        var $newLine = $('#templates > #option-row-template').html()
                        .replace('option-placeholder', 'option')
                        .replace('delete-line-placeholder', 'delete-line');
        
        var $lastLine = $optionsContainer.find('.option').last();
        $lastLine.after($newLine);

        var $newLastLine = $optionsContainer.find('.option').last();

        $newLastLine.find('.delete-line').click(deleteLine);
    }

    var deleteLine = function(){
        if($('.option').length <= 2){
            return;
        }
        var $line = $(this).closest('.option');

        $line.remove();
    }

    var decide = function(){
        var options = $('.option').map(function(){return $(this).find('input').val()});
        var randomOption = options[Math.floor(Math.random() * options.length)];
        alert(randomOption);
    }

    $optionsContainer.find('#add-option').click(addLine);

    $optionsContainer.find('.delete-line').click(deleteLine);

    $('#decide').click(decide);

});