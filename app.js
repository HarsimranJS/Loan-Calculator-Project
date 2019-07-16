

document.getElementById("loan-form").addEventListener('submit',function(e){
    document.querySelector("#results").style.display='none';
    document.querySelector("#loader").style.display='block';
    setTimeout(functionOnSubmit,2000);
    e.preventDefault();
})

function functionOnSubmit()
{
        const amount= document.getElementById('amount');
        const interest= document.getElementById('interest');
        const years= document.getElementById('years');

        let monthlyPayment = document.getElementById('monthly-payment');
        let totalPayment = document.getElementById('total-payment');
        let totalInterest = document.getElementById('total-interest');
        const principal=parseFloat(amount.value);
        const calculatedInterest= parseFloat(interest.value)/100/12;
        const calculatedPayments= parseFloat(years.value)*12;

        const x= Math.pow(1+calculatedInterest,calculatedPayments);
        const monthly=(principal*x*calculatedInterest)/(x-1);

        if(isFinite(monthly)) 
        {
            monthlyPayment.value=monthly.toFixed(2);
            totalPayment.value=(monthly*calculatedPayments).toFixed(2);
            totalInterest.value=((monthly*calculatedPayments)-principal).toFixed(2);
            document.querySelector("#loader").style.display='none';
            document.querySelector("#results").style.display='block';
        }
        else
        {
            printErrorMessage("The values are not correct");
        }
}

function printErrorMessage(message)
{
    document.querySelector("#loader").style.display='none';
    document.querySelector("#results").style.display="none";
    const card=document.querySelector('.card');
    const heading=document.querySelector('.heading');
    const y= document.createElement('div');
    y.className='alert alert-danger';
    y.appendChild(document.createTextNode(message));
    card.insertBefore(y,heading);
    console.log(y);
    setTimeout(closeTheWarning,3000);
}

function closeTheWarning()
{
    document.querySelector('.alert').remove();
}

// function showAndHide()
// {
//     const loader=document.querySelector("#loader");
//     const results=document.querySelector("#results");
//     loader.style.display='none';
//     results.style.display='block';

// }