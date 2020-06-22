

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

        row.insertCell(0).innerHTML = fullName;
        row.insertCell(1).innerHTML = userName;
        row.insertCell(2).innerHTML = email;
        row.insertCell(3).innerHTML = totalPoints;

    }

}

// console.log(object)
