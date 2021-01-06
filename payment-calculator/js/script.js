$(document).ready(function() {
    console.log("IT WORKED");
    let modal = $('#modalId')

    //set Click modal
    $('#btn1').click(function() {
        let text1 = $('#p1').text()
        $('#price-modal-text').text(text1);
        $('#price-md').val(parseInt(text1));
        modal.show();
    });

    $('#btn2').click(function() {
        let text2 = $('#p2').text()
        $('#price-modal-text').text(text2);
        $('#price-md').val(parseInt(text2));
        modal.show();
    });

    $('#btn3').click(function() {
        let text3 = $('#p3').text()
        $('#price-modal-text').text(text3);
        $('#price-md').val(parseInt(text3));
        modal.show();
    });

    $('#btn4').click(function() {
        let text4 = $('#p4').text()
        $('#price-modal-text').text(text4);
        $('#price-md').val(parseInt(text4));
        modal.show();
    });

    $('#btn5').click(function() {
        let text5 = $('#p5').text()
        $('#price-modal-text').text(text5);
        $('#price-md').val(parseInt(text5));
        modal.show();
    });

    $('#btn6').click(function() {
        let text6 = $('#p6').text()
        $('#price-modal-text').text(text6);
        $('#price-md').val(parseInt(text6));
        modal.show();
    });

    // payment calculation
    $('.interest-rate-bt').each(function() {
        $(this).click(function() {
            var price = $('#price-md').val();
            var rate = parseInt($(this).val());
            var yearTime = 1;
            switch (rate) {
                case 4:
                    yearTime = 2;
                    break;
                case 8:
                    yearTime = 3;
                    break;
                default:
                    yearTime = 1;
            }

            //interest calculating
            var monthPeriod = yearTime * 12;
            var yearlyInterest = price * rate / 100;
            var monthlyInterest = yearlyInterest / 12;
            var totalInterest = yearlyInterest * yearTime;

            //payment calculating
            var totalPayment = price + totalInterest;
            var monthlyPayment = totalPayment / monthPeriod;

            console.log("price" + price);
            console.log("rate" + rate);
            console.log("yeartime" + yearTime);

            console.log("monthPeriod" + monthPeriod);
            console.log("yearInterest" + yearlyInterest);
            console.log("totalPayment" + totalPayment);
            console.log("monthlypayment" + monthlyPayment);

            $('#period-md').text(monthPeriod);
            $('#interest-md').text(monthlyInterest
                .toLocaleString('th-TH', {
                    'minimumFractionDigits': 2,
                    'maximumFractionDigits': 2
                }));
            console.log(monthlyInterest);
            console.log(monthlyPayment);
            $('#monthly-payment-md').text(monthlyPayment
                .toLocaleString('th-TH', {
                    'minimumFractionDigits': 2,
                    'maximumFractionDigits': 2
                }));

            $('#buy-bt').prop('disabled', false);
        })
    })
});

function closedModal() {
    let modal = $('#modalId')
    $('#period-md').empty();
    $('#interest-md').empty();
    $('#monthly-payment-md').empty();
    modal.hide()
}

function reload() {
    location.reload();
}