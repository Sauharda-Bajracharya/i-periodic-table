$(document).ready(function() {

   

    function showElementInfo(elementName, elementNumber, elementMass, elementConfiguration, elementDescription) {

        $('#element-name').text(elementName);
        $('#element-number').text('Atomic Number: ' + elementNumber);
        $('#element-mass').text('Atomic Mass: ' + elementMass);
        $('#element-configuration').text('Electronic Configuration: ' + elementConfiguration);
        // $('#element-description').text(elementDescription);
        $('#element-info').show();
    }

    function hideElementInfo() {
        $('#element-info').hide();
    }

    $('.periodic-table li').click(function() {
        var elementName = $(this).find('name').attr('title');
        var elementNumber = $(this).data('atomic-number');
        var elementMass = $(this).data('atomic-mass');
        var elementConfiguration = $(this).find('electronicConfiguration').text();
        // var elementDescription = $(this).find('.info').text();
        showElementInfo(elementName, elementNumber, elementMass, elementConfiguration);
    });
      

    $(document).click(function(event) {
        var target = $(event.target);
        if (!target.closest('.periodic-table li').length && !target.is('#element-info')) {
            hideElementInfo();
        }
    });
});