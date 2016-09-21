$(function() {

    var $optionsContainer = $('#options-container');
    var $resultModal = $('#result-modal');

    var addLine = function(){
        var newOptionCount = $optionsContainer.find('.option').length + 1;

        var $newLine = $('#templates > #option-row-template').html()
                        .replace('option-placeholder', 'option')
                        .replace('delete-line-placeholder', 'delete-line')
                        .replace(/id-placeholder/g, 'option-' + newOptionCount)
                        .replace('text-placeholder', 'Option ' + newOptionCount);
        
        var $lastLine = $optionsContainer.find('.option').last();
        $lastLine.after($newLine);

        var $newLastLine = $optionsContainer.find('.option').last();

        $newLastLine.find('.delete-line').click(deleteLine);
    }

    var updateOptionRowIds = function(){
        $optionsContainer.find('.option').each(function(index){
            index++;
            $(this).find('input').attr('id', 'option-' + index);
            $(this).find('label').attr('for', 'option-' + index);
            $(this).find('label').text('Option ' + index);
        });
    }

    var deleteLine = function(){
        if($('.option').length <= 2){
            return;
        }
        var $line = $(this).closest('.option');

        $line.remove();

        updateOptionRowIds();

    }

    var showResult = function(result){
        $resultModal.find('h3').text(result);
        $resultModal.openModal();
    }

    var decide = function(){
        var options = $('.option').map(function(){return $(this).find('input').val()});
        var randomOption = options[Math.floor(Math.random() * options.length)];

        showResult(randomOption);
    }

    $optionsContainer.find('#add-option').click(addLine);

    $optionsContainer.find('.delete-line').click(deleteLine);

    $('#decide').click(decide);

});