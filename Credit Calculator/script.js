let amount = document.getElementById('amount')
let percent=document.getElementById('percent')
let date=document.getElementById('date')
let btn=document.getElementById('btn')
let total=document.getElementById('total')
let payment=document.getElementById('payment')

function Calculate(){
     let avalue=amount.value.trim()
     let pvalue=percent.value.trim()
     if(avalue===0 || pvalue===0 ||date.value==='def')
     alert('Please fill all the gaps')
     else if(!isNaN(Number(avalue)) && !isNaN(Number(pvalue)) &&avalue>0 &&pvalue>0){
        let sum=Number(avalue) + ( Number(pvalue)*Number(avalue)/100)
        total.innerHTML=`${sum} AZN`
        payment.innerHTML=`${(sum/date.value).toFixed(2)} AZN`

    } 
    else{alert('Please include right values')}
}