// submiting form and sending the data via POST
export class CreateItem{
    constructor(inputVal) {
        this.inputVal = inputVal;
    }

    postData(){
        const url = 'https://debender-api.herokuapp.com/api/product/create.php';
        let obj = {
            title: `${this.inputVal}`
        };
        const data = JSON.stringify(obj);
        console.log(data);

        //otheParams
        const othePram = {
            body: data,
            method: "POST"
        };

        fetch(url,othePram)
        .then(data=>{return data.json()})
        .then(res=>{console.log(res)})
        .catch(error=>console.log(error))
    }
}


