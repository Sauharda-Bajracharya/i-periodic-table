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
        var knowMore = $(this).find('a').attr('about');
        showElementInfo(elementName, elementNumber, elementMass, elementConfiguration, elementDescription, knowMore, elementSubShell);
    });
  
    $(document).click(function(event) {
        var target = $(event.target);
        if (!target.closest('.periodic-table li').length && !target.is('#element-info')) {
            hideElementInfo();
        }
        });
    });


document.addEventListener("DOMContentLoaded", function () {

    const hydrogenElement = document.querySelector('[data-atomic-number="1"]');
    const heliumElement = document.querySelector('[data-atomic-number="2"]');
    const lithiumElement = document.querySelector('[data-atomic-number="3"]');
    const berylliumElement = document.querySelector('[data-atomic-number="4"]');
    const boronElement = document.querySelector('[data-atomic-number="5"]');
    const carbonElement = document.querySelector('[data-atomic-number="6"]');
    const nitrogenElement = document.querySelector('[data-atomic-number="7"]');
    const oxygenElement = document.querySelector('[data-atomic-number="8"]');
    const fluorineElement = document.querySelector('[data-atomic-number="9"]');
    const neonElement = document.querySelector('[data-atomic-number="10"]');


    const electron1 = document.getElementById("electron1");
    const electron2 = document.getElementById("electron2");
    const electron3 = document.getElementById("electron3");
    const electron4 = document.getElementById("electron4");
    const electron5 = document.getElementById("electron5");
    const electron6 = document.getElementById("electron6");
    const electron7 = document.getElementById("electron7");
    const electron8 = document.getElementById("electron8");
    const electron9 = document.getElementById("electron9");
    const electron10 = document.getElementById("electron10");
    const electronSubshell1 = document.getElementById("sub");
    const electronSubshell2 = document.getElementById("element-subshell");

    hydrogenElement.addEventListener("click", function () {
        electron1.style.display = "block";
        electron2.style.display = "none";
        electron3.style.display = "none";
        electron4.style.display = "none";
        electron5.style.display = "none";
        electron6.style.display = "none";
        electron7.style.display = "none";
        electron8.style.display = "none";
        electron9.style.display = "none";
        electron10.style.display = "none";
        electronSubshell2.style.visibility = "hidden";
    });

    heliumElement.addEventListener("click", function () {
        electron1.style.display = "block";
        electron2.style.display = "block";
        electron3.style.display = "none";
        electron4.style.display = "none";
        electron5.style.display = "none";
        electron6.style.display = "none";
        electron7.style.display = "none";
        electron8.style.display = "none";
        electron9.style.display = "none";
        electron10.style.display = "none";
        electronSubshell2.style.visibility = "hidden";

    });

    lithiumElement.addEventListener("click", function () {
        electron1.style.display = "block";
        electron2.style.display = "block";
        electron3.style.display = "block";
        electron4.style.display = "none";
        electron5.style.display = "none";
        electron6.style.display = "none";
        electron7.style.display = "none";
        electron8.style.display = "none";
        electron9.style.display = "none";
        electron10.style.display = "none";
        electronSubshell2.style.visibility = "visible";
    });

    berylliumElement.addEventListener("click", function () {
        electron1.style.display = "block";
        electron2.style.display = "block";
        electron3.style.display = "block";
        electron4.style.display = "block";
        electron5.style.display = "none";
        electron6.style.display = "none";
        electron7.style.display = "none";
        electron8.style.display = "none";
        electron9.style.display = "none";
        electron10.style.display = "none";
        electronSubshell2.style.visibility = "visible";
    });

    boronElement.addEventListener("click", function () {
        electron1.style.display = "block";
        electron2.style.display = "block";
        electron3.style.display = "block";
        electron4.style.display = "block";
        electron5.style.display = "block";
        electron6.style.display = "none";
        electron7.style.display = "none";
        electron8.style.display = "none";
        electron9.style.display = "none";
        electron10.style.display = "none";
        electronSubshell2.style.visibility = "visible";
    });

    carbonElement.addEventListener("click", function () {
        electron1.style.display = "block";
        electron2.style.display = "block";
        electron3.style.display = "block";
        electron4.style.display = "block";
        electron5.style.display = "block";
        electron6.style.display = "block";
        electron7.style.display = "none";
        electron8.style.display = "none";
        electron9.style.display = "none";
        electron10.style.display = "none";
        electronSubshell2.style.visibility = "visible";
    });

    nitrogenElement.addEventListener("click", function () {
        electron1.style.display = "block";
        electron2.style.display = "block";
        electron3.style.display = "block";
        electron4.style.display = "block";
        electron5.style.display = "block";
        electron6.style.display = "block";
        electron7.style.display = "block";
        electron8.style.display = "none";
        electron9.style.display = "none";
        electron10.style.display = "none";
        electronSubshell2.style.visibility = "visible";
    });

    oxygenElement.addEventListener("click", function () {
        electron1.style.display = "block";
        electron2.style.display = "block";
        electron3.style.display = "block";
        electron4.style.display = "block";
        electron5.style.display = "block";
        electron6.style.display = "block";
        electron7.style.display = "block";
        electron8.style.display = "block";
        electron9.style.display = "none";
        electron10.style.display = "none";
        electronSubshell2.style.visibility = "visible";
    });

    fluorineElement.addEventListener("click", function () {
        electron1.style.display = "block";
        electron2.style.display = "block";
        electron3.style.display = "block";
        electron4.style.display = "block";
        electron5.style.display = "block";
        electron6.style.display = "block";
        electron7.style.display = "block";
        electron8.style.display = "block";
        electron9.style.display = "block";
        electron10.style.display = "none";
        electronSubshell2.style.visibility = "visible";
    });

    neonElement.addEventListener("click", function () {
        electron1.style.display = "block";
        electron2.style.display = "block";
        electron3.style.display = "block";
        electron4.style.display = "block";
        electron5.style.display = "block";
        electron6.style.display = "block";
        electron7.style.display = "block";
        electron8.style.display = "block";
        electron9.style.display = "block";
        electron10.style.display = "block";
        electronSubshell2.style.visibility = "visible";
    });
    
});



    
