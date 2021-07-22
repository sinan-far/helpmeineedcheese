var nameofstudentarray = [];

function submit() {
    var name_1 = document.getElementById("victim1").value;
    var name_2 = document.getElementById("victim2").value;
    var name_3 = document.getElementById("victim3").value;
    var name_4 = document.getElementById("victim4").value;



    nameofstudentarray.push(name_1);
    nameofstudentarray.push(name_2);
    nameofstudentarray.push(name_3);
    nameofstudentarray.push(name_4);

    console.log(nameofstudentarray);


    document.getElementById("buttonclck").style.display = "none";
    document.getElementById("buttonsort").style.display = "inline-block";
    document.getElementById("displayname").innerHTML = nameofstudentarray;


}

function sort() {
    nameofstudentarray.sort();
    document.getElementById("displayname").innerHTML = nameofstudentarray;
}