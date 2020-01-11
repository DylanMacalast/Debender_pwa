import { Single } from "./models/Single";
import { Read } from "./models/Read";
import "./../main.scss";



// state -> global object to store all of our apps data in within the controller
const state = {};



// ============= Single Item Controller ================
// here we want to render a single items data into html if that item is clicked

const test = new Single();
//test.getSingleItem();

state.test2 = new Read();

const controlRead = async () => {
    try {
        await state.test2.getRandomItem();
        console.log(state.test2.result);
    } catch(err) {
        alert('bad');
    }
}

controlRead();
