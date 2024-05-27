var selectedSeat = null; // chosen seat
$(document).ready(function() {
    // kliker
    $('.seat').click(function() {
        // delete active in previous seat
        if (selectedSeat !== null) {
            $(selectedSeat).removeClass('active');
        }
        // choosing new and add active
        selectedSeat = this;
        $(selectedSeat).addClass('active');
    });

    // обробник натискання клавіш
        $('.seat').keydown(function(event) {
            // якщо натиснута клавіша Enter
            if (event.keyCode === 13) {
                // видалення активності з попереднього місця
                if (selectedSeat !== null) {
                    $(selectedSeat).removeClass('active');
                }
                // обрання нового та додавання активності
                selectedSeat = this;
                $(selectedSeat).addClass('active');
            }
        });

    document.getElementById("buy").addEventListener("click", function() {
        var selectedSeat = document.getElementsByClassName("active")[0];
        if (selectedSeat) {
            var row = selectedSeat.getAttribute("data-row");
            var column = selectedSeat.getAttribute("data-column");
            window.location.href = "/purchase?row=" + row + "&column=" + column;
        } else {
            alert("Wybierz miejsce przed zakupem!");
        }
    });

});