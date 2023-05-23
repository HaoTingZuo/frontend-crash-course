function getactive() {
    const url = "https://www.boredapi.com/api/activity"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.activity); //OK
            console.log(document.getElementById("get").textContent) //OK

            document.getElementById("get").textContent = "行為：" + data.activity;

        })
        .catch(error => {
            console.error(`"Error:", ${error}`);
        });
}