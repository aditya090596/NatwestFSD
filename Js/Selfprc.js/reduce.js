const values=[50,22,20,10,500,213,29];
var tot=values.reduce(function(totalv,nextvalue){
    totalv+=nextvalue;
    return totalv;
})
console.log(tot);
var sub=values.reduce(function(diffv,nextvalue){
    diffv-=nextvalue;
    return diffv

})
console.log(sub);