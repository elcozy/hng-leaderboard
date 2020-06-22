

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

        if (i < 3) {
            let top3 = document.getElementById("first3").getElementsByClassName(`top${i + 1}`)[0]
            top3.innerHTML = `<img src="./praise${i}.png" alt=""> <h4> ${fullName}</h4> <h5>Slack ID: ${userName}</h5> <h3>${totalPoints} Points</h3><img src="./${i}.png" alt="">`
        }

        var tableRef = document.getElementById("userDataBody")
        var row = tableRef.insertRow(i);

        row.insertCell(0).innerHTML = i + 1;
        row.insertCell(1).innerHTML = fullName;
        userDataBody.className = "userDataBody";
        row.insertCell(2).innerHTML = userName;
        row.insertCell(3).innerHTML = email;
        row.insertCell(4).innerHTML = totalPoints;
        row.insertCell(5).innerHTML = `<a href="https://twitter.com/intent/tweet?text=My%20Total%20Point%20on%20HNG%20Leader%20board%20is ${totalPoints}" target="_blank">Share on Twiter</a>`;


    }

}



// console.log(object)
