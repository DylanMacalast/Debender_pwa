//  ============ This is the Single item Model ============= 
// it will read a single item depending on the id given 
export class ReadSingle{

    constructor(id) {
        // each sesh item is identified by and id.
        // So when we create an instance of this class we will pass in the id 
        // this.id = id; should be this
        this.id = id;
    }


    // gets a single item based on the id
    async getSingleItem(){
        try{

            //using this.id as the id we are getting from the api call
            let response = await fetch(`https://debender-api.herokuapp.com/api/product/read_one.php?id=${this.id}`);
            let data = await response.json()

            this.title = data.Title;

        } catch (error) {
            console.log(error);
            alert('Something went wrong');
        }
    }
}
