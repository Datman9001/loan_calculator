//listen for submit
document.querySelector('#loan-form').addEventListener('submit', function(e){
  //hide results
  document.querySelector('.collection').style.display = 'none';
  //show loader
  document.querySelector('.progress').style.display = 'block';
  setTimeout(calculateResults, 2000);
   

  e.preventDefault(); 
});

//calculate results
function calculateResults(){
  // UI variables
     const amount = document.getElementById('amount');
     const interest = document.getElementById('interest');
     const years = document.getElementById('years'); 
     const monthlyPayment = document.getElementById('monthly-payments');
     const totalPayment = document.getElementById('total-payment');
     const totalInterest = document.getElementById('total-interest');

     const principal = parseFloat(amount.value);
     const calculateInterest = parseFloat(interest.value) /100 /12;
     const calculatePayments = parseFloat(years.value) * 12;

     //Compute Monthly Payments
     const x = Math.pow(1 + calculateInterest, calculatePayments);
     const monthly = (principal*x*calculateInterest)/(x-1);

     if(isFinite(monthly)){
        monthlyPayment.innerHTML = monthly.toFixed(2);
      
       totalPayment.innerHTML = (monthly * calculatePayments).toFixed(2);
       totalInterest.innerHTML = ((monthly * calculatePayments)- principal).toFixed(2);
       //show results
       document.querySelector('.collection').style.display = 'block';
       //hide loader
       document.querySelector('.progress').style.display = 'none';
     }else {
       
      //  showError('Please Check Your numbers');
      M.toast({
        html: 'Please check your numbers',
        classes: 'red white-text'
      })
      //hide results
      document.querySelector('.collection').style.display = 'none';
      //hide loader
      document.querySelector('.progress').style.display = 'none';

     }

      

      

   
}  