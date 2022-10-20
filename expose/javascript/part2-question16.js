for (var i=0;i<Object.keys(statistics).length;i++){
    var keys=Object.keys(statistics)
    if (keys[i].startsWith("r")){
        console.log(statistics[keys[i]]);
    }else if (statistics[keys[i]]%2!=0){
        console.log(statistics[keys[i]]);
    }
    
}