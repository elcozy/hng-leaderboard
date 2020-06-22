

fetch("./data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log("error: " + err);
    });

function appendData(data) {
    data.sort(function (a, b) {
        return b.totalPoints - a.totalPoints;
    });

    obj = data;

    console.log(data)


    for (var i = 0; i < obj.length; i++) {


        var fullName = obj[i]["fullName"]
        var userName = obj[i]["userName"]
        var email = obj[i]["email"]
        var totalPoints = obj[i]["totalPoints"]


        var tableRef = document.getElementById("userDataBody")
        var row = tableRef.insertRow(i);
        // console.log(tableRef)
        row.insertCell(0).innerHTML = fullName;
        userDataBody.className = "userDataBody";
        row.insertCell(1).innerHTML = userName;
        row.insertCell(2).innerHTML = email;
        row.insertCell(3).innerHTML = totalPoints;
        row.insertCell(
          4
        ).innerHTML = `<a href="https://twitter.com/intent/tweet?text=My%20Total%20Point%20on%20HNG%20Leader%20board%20is ${totalPoints}" target="_blank">Share on Twiter</a>`;
    
    }

}



// console.log(object)
