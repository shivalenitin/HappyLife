function remLife() {
    var age = document.getElementById("input1").value;
    //alert(age);
    var yearRem = 100 - age;
    //alert(yearRem);
    var monthRem = yearRem * 12;
    var weekRem = yearRem * 52;
    var dayRem = yearRem * 365;
    //alert(dayRem);
    /* var rows = document.getElementById("mytab").getElementsByTagName("tr");
     alert("no of row:"+rows.length);
     //cells = rows[1].getElementsByTagName("td");
     //alert("no of col:"+cells.length)*/

    var cells = 3;
    for (var j = 0; j <= cells; j++) {
        var row = document.getElementById("myRow");
        var x = row.insertCell(j);
        if (j === 0) {
            x.innerHTML = dayRem;
        } else if (j === 1) {
            x.innerHTML = weekRem;
        } else if (j === 2) {
            x.innerHTML = monthRem;
        } else if (j === 3) {
            x.innerHTML = yearRem
        }
    }

    //To activate the hidden content on webpage
    var xshow =document.getElementById("magicdiv");
    xshow.style.display="none";
    if(xshow.style.display==="none"){
        xshow.style.display="block";
    }else{
        xshow.style.display="none";
    }

}