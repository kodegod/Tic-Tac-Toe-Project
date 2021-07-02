function x(){
    var k=1;
    for(var i=1; i<=5; i++){
        setTimeout(function(){
            console.log(k++);
        },i*1000);
    }
}
x();