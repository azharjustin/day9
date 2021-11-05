var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
   var res=data.filter(ele=>ele.population<200000);
   
   var res2=data.map((ele)=>ele.population);
   console.log(res);
   console.log(res2);
   for(var i=0; i<data.length;i++){
   console.log(data[i].name,data[i].capital,data[i].flag);
   }
    }
    
