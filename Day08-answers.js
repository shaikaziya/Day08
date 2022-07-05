/*1Q)  Solving problems using array functions on rest countries data.
      a)Get all the countries from Asia continent /region using Filter function
      b)Get all the countries with a population of less than 2 lakhs using Filter function
      c)Print the following details name, capital, flag using forEach function
      d)Print the total population of countries using reduce function
      e)Print the country which uses US Dollars as currency.
*/
var request=new XMLHttpRequest()
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send()
request.onload=function(){
    var result=JSON.parse(request.response)

    // a)Get all the countries from Asia continent /region using Filter function
    var regionasia=result.filter((ele)=>ele.region==="Asia")
    console.log(regionasia)
    console.log("***********Get all the countries from Asia continent /region using Filter function***********")
    console.log(JSON.stringify(regionasia))

    // b)Get all the countries with a population of less than 2 lakhs using Filter function
    var population=result.filter((ele)=>ele.population<200000)
    console.log(population)
    console.log("***********Get all the countries with a population of less than 2 lakhs using Filter function***********")
    console.log(JSON.stringify(population))

    //  c)Print the following details name, capital, flag using forEach function
    console.log("***********Print the following details name***********")
   var resultdata=result.forEach(element => {console.log(element.name)});

   console.log("***********Print the following details capital***********")
   var resultdata=result.forEach(element => {console.log(element.capital)});

   console.log("***********Print the following details flag***********")
   var resultdata=result.forEach(element => {console.log(element.flag)});
   

   //d)Print the total population of countries using reduce function
   var totalpop=result.reduce((initalvalue,ele)=>initalvalue+ele.population,0)
   console.log("***********Print the total population of countries using reduce function***********              "+totalpop)

   // e)Print the country which uses US Dollars as currency.
   var count = 0
   var result1=result.filter((result)=>  {
   var currencies = result.currencies
    if (currencies[0].symbol === "$") {
        console.log(result.region)
        count++            
    }
});
}

