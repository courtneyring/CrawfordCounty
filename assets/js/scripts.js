paypal.Buttons({
    fundingSource: paypal.FUNDING.PAYPAL,
    style: {
        shape: 'rect',
        label: 'donate',
        color: 'white'
      },

createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: document.getElementById('donate-amount').value,
          breakdown:{item_total:{currency_code:"USD",value:document.getElementById('donate-amount').value}}
        },
        items:[{name:"Crawford County Historical Society Donation",unit_amount:{currency_code:"USD","value":document.getElementById('donate-amount').value},"quantity":1,category:"DONATION"}]
      }],
      application_context: {
        shipping_preference: 'NO_SHIPPING'
      }
    });
  },

  // Finalize the transaction after payer approval
  onApprove: function(data, actions) {
    return actions.order.capture().then(function(orderData) {
      // Successful capture! For dev/demo purposes:
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
          var transaction = orderData.purchase_units[0].payments.captures[0];
        //   alert('Transaction '+ transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');

      // When ready to go live, remove the alert and show a success message within this page. For example:

      var element = document.getElementById('donate-container');
      
      element.innerHTML = '';
      element.innerHTML = '<h3>Thank you for your payment!</h3>';
      // Or go to another URL:  actions.redirect('thank_you.html');
    });
  }
}).render('#paypal-button-container-index');