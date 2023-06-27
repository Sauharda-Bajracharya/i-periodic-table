$(document).ready(function() {

    function showElementInfo(elementName, elementNumber, elementMass, elementSubShell, elementDescription, knowMore) {
        $('#element-subshell').text(elementSubShell)
        $('#element-name').text(elementName);
        $('#element-number').text('Atomic Number: ' + elementNumber);
        $('#element-mass').text('Atomic Mass: ' + elementMass);
        $('#element-description').text(elementDescription);
        $('#know-more').text(knowMore);
        $('#element-info').show();
    }
  
    function hideElementInfo() {

      $('#element-info').hide();
    }

    $('.periodic-table li').click(function() {

        var elementSubShell = $(this).find('shell').attr('new');
        var elementName = $(this).find('name').attr('title');
        var elementNumber = $(this).data('atomic-number');
        var elementMass = $(this).data('atomic-mass');
        var elementConfiguration = $(this).find('electronicConfiguration').text();
        var elementDescription = $(this).find('description').attr('title');
        var knowMore = $(this).find('more').attr('about');
        showElementInfo(elementName, elementNumber, elementMass, elementConfiguration, elementDescription, knowMore, elementSubShell);
    });
  
    $(document).click(function(event) {
        var target = $(event.target);
        if (!target.closest('.periodic-table li').length && !target.is('#element-info')) {
            hideElementInfo();
        }
        });
    });
  
