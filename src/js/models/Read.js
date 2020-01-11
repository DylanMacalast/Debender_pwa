// This is the Read Model
export class Read {

    constructor() {
        // construct
    }

    // get our random sesh items from the API 
    async getRandomItem(){
        try{

            let response = await fetch('https://debender-api.herokuapp.com/api/product/read.php');
            let data = await response.json()
            // saving the result to propery of this class
            this.result = data.records;

        } catch (error) {
            console.log(error);
            alert('Something went wrong');
        }
    }
}
