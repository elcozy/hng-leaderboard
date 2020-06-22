

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


    obj = data;

    console.log(data)


    for (var i = 0; i < obj.length; i++) {


        var fullName = obj[i]["fullName"]
        var userName = obj[i]["userName"]
        var email = obj[i]["email"]
        var totalPoints = obj[i]["totalPoints"]


        var tblRow = "<tr>" +
            "<td>" + fullName + "</td>" +
            "<td>" + userName + "</td>" +
            "<td>" + email + "</td>" +
            "<td>" + totalPoints + "</td>" +
            "</tr>"
        $(tblRow).appendTo("#userdata tbody");

        console.log(obj[i]["fullName"])
    }

}

// console.log(object)
