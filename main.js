console.log('js-ok');
/* 
1. ciclo for numeri da 1 a 100
2. se il numero è un multiplo di 3 scrivi Fizz al posto del numero 
   - SE % di i/3 è uguale a 0 allora scrivi fizz 
3. se il numero è un multiplo di 5 scrivi buzz al posto del numero 
   - SE % di i/5 è uguale a 0 allora scrivi buzz
4. se il numero è un multiplo di 3 e 5 scrivi fizzbuzz
   - SE % di i/15 è uguale a 0 allora scrivi fizzbuzz
*/



for (let i = 1; i <= 100; i++){
    num = i;
    mult5 = num % 5;
    mult3 = num % 3;
    mult15 = num % 15;
 
    if (mult3 === 0 ){
        num = 'fizz';
        
    }
    
     if (mult5 === 0){
        num = 'buzz';
    }
    if (mult15 === 0){
        num = 'fizzbuzz'
    }
    console.log(num);
}


 