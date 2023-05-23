function judge() {
    const url = "https://api.agify.io/?name=danny"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.age); //ok
            console.log(document.getElementById("client").value); //ok

            //正解

            if ((document.getElementById("client").value) > data.age) {
                document.getElementById("age").textContent = "結果：" + "數字太大";
                return
            } else {
                document.getElementById("age").textContent = "結果：" + "數字太小";
                return
            }

            if ((document.getElementById("client").value) == data.age) {

                document.getElementById("age").textContent = "結果：" + "正確";
            } else {
                document.getElementById("age").textContent = "結果：" + "請輸入數字";
            }
        })
        .catch(error => {
            console.error(`"Error:", ${error}`);
        });
}