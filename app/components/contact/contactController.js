app.controller('contactController', function($scope) {
    $scope.url = window.location.href;
    console.log($scope.url);
    
    paypal.Buttons({
        fundingSource: paypal.FUNDING.PAYPAL,
        style: {
            shape: 'rect',
            label: 'donate',
            
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
    }).render('#paypal-button-container');
});




// <div id="smart-button-container">
//       <div style="text-align: center;">
//         <div id="paypal-button-container"></div>
//       </div>
//     </div>
//   <script src="https://www.paypal.com/sdk/js?client-id=sb&enable-funding=venmo&currency=USD" data-sdk-integration-source="button-factory"></script>
//   <script>
//     function initPayPalButton() {
//       paypal.Buttons({
//         style: {
//           shape: 'rect',
//           color: 'silver',
//           layout: 'vertical',
//           label: 'donate',
          
//         },

//         createOrder: function(data, actions) {
//           return actions.order.create({
//             purchase_units: [{"amount":{"currency_code":"USD","value":1,"breakdown":{"item_total":{"currency_code":"USD","value":1}}},"items":[{"name":"item name","unit_amount":{"currency_code":"USD","value":1},"quantity":"1","category":"DONATION"}]}]
//           });
//         },

//         onApprove: function(data, actions) {
//           return actions.order.capture().then(function(orderData) {
            
//             // Full available details
//             console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

//             // Show a success message within this page, e.g.
//             const element = document.getElementById('paypal-button-container');
//             element.innerHTML = '';
//             element.innerHTML = '<h3>Thank you for your payment!</h3>';

//             // Or go to another URL:  actions.redirect('thank_you.html');
            
//           });
//         },

//         onError: function(err) {
//           console.log(err);
//         }
//       }).render('#paypal-button-container');
//     }
//     initPayPalButton();
//   </script>