var data = [{
        quantity: 1.5,
        description: 'Stock Item Example 0001',
        unitPrice: 1000.00,
        amount: 1500.00
    },
    {
        quantity: 1,
        description: "Stock Item Example 0002",
        unitPrice: 2000.00,
        amount: 2000.00
    },
    {
        quantity: 1,
        description: "Service Charge Invoicing Item 001",
        unitPrice: 100.00,
        amount: 200.00
    },
    {
        quantity: 1,
        description: `Service Charge Invoicing Item 002<br/>
Additional line 1 for this item<br/>
Additional line 2 for this item`,
        unitPrice: 200.00,
        amount: 600.00
    }
]

function renderDataTable() {
    let subTotal = 0
    $('#dataTable').html("")
    data.forEach(function(item) {
        subTotal += item.amount
        let dataRow = `<tr>
    <td class="data r">${item.quantity}</td>
    <td class="data">${item.description}</td>
    <td class="data r">${item.unitPrice}</td>
    <td class="data r">${item.amount}</td>
    </tr>`
            // console.log({ dataRow })
        $('#dataTable').append(dataRow)
    })
    $('#subTotal').html(subTotal)

}

function assignValue() {
    let a = $('#subTotal')
    let b = $('#salesTax')
    let c = $('#shippingHandling')
    let d = $('#totalDue')

    var subTotal = 0
    data.forEach(function(total) {
        subTotal += total.amount
    })
    a.text(subTotal);

    var salesTax = 0
    data.forEach(function(saleTax) {
        salesTax += saleTax.amount * (7 / 100)
    });
    b.text(salesTax.toFixed(2))

    d.text(subTotal + salesTax)
        // d.text(parseInt(a.amount) + parseInt(b) + parseInt(c))
}

$(document).ready(function() {
    let count = 0;
    // console.log("Hello!")

    let date = $('#currentDate')
    var today = new Date();
    var dd = String(today.getDate())
    var mm = String(today.getMonth() + 1)
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    date.text(today)

    renderDataTable()
    $('#btnAdd').click(function() {
        // console.log("Clicked!", count)
        count++
        // let subTotal = prompt("Sub Total")
        // $('#subTotal').html(subTotal)
        let qty = prompt("Quantity")
        let d = prompt("Description")
        let p = prompt("Unit Price")
        let amt = parseFloat(qty) * parseFloat(p)
            // console.log({qty,d,p,amt})
        let item = {
                quantity: qty,
                description: d,
                unitPrice: p,
                amount: amt
            }
            // console.log({ item })
        data.push(item)
        renderDataTable()
        assignValue()
    })

})