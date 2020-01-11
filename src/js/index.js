import { Single } from "./models/ReadSingle";
import { ReadRandom } from "./models/ReadRandom";
import * as ReadRandomView from './views/readRandomView'; // importing everything from readRandomView
import "./../main.scss";



// state -> global object to store all of our apps data in within the controller
const state = {};



// ============= Random Item Item Controller ================
// here we want to render a random items data into html if spinner is clicked

const controlReadRandom = async () => {

    state.readRandom = new ReadRandom();

    try {
        await state.readRandom.getRandomItem();
        const randomRes = state.readRandom.result;
        console.log(randomRes);
        for (let i = 0; i < randomRes.length; i++) {
            // for each item in json object run renderSeshItem
            ReadRandomView.renderSeshItems(randomRes[i]);
        }
    } catch(err) {
        alert('bad');
    }
}



// calling all functions here for now
controlReadRandom();
