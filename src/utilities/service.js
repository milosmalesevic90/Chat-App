let apiUrl = 'https://coetus.herokuapp.com/api/message';




function getSms(username) {
    let res = fetch(`${apiUrl}`, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            username: username
        })
    })
        .then(response => response.json()
            , (error) => {
                console.log(error);
            })
    return res;
}
function getAllMessage() {
    return fetch(`${apiUrl}`)
        .then((response => response.json()),
            error => console.log(error));
}


function uploadSms(username,message) {
    let res = fetch(`https://coetus.herokuapp.com/api/message`, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
            username: username,
            message: message
        })
    })
        .then(response => response.json()
            , (error) => {
                console.log(error);
            })
    return res;
}

export {
    getSms,
    getAllMessage,
    uploadSms
    

}

