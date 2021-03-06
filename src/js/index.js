import { ReadSingle } from "./models/ReadSingle";
import { ReadRandom } from "./models/ReadRandom";
import { CreateItem} from "./models/CreateItem";
import * as ReadRandomView from './views/readRandomView'; // importing everything from readRandomView
import * as ReadSingleView from './views/readSingleView';
import * as CreateView from './views/createView';
import "./../main.scss";
import { elements } from './views/base';



// state -> global object to store all of our apps data in within the controller
const state = {};



// ============= Random Item Item Controller ================
// here we want to render a random items data into html if spinner is clicked

const controlReadRandom = async () => {

    state.readRandom = new ReadRandom();

    try {
        await state.readRandom.getRandomItem();
        const randomRes = state.readRandom.result;
        for (let i = 0; i < randomRes.length; i++) {
            // for each item in json object run renderSeshItem
            ReadRandomView.renderSeshItems(randomRes[i]);
        }
    } catch(err) {
        alert('bad');
    }
}


// on spinner click call controlReadRandom which will run after a certain amount of time
// This will init the whole app pretty much
elements.spinnerButton.addEventListener("click", e => {
    setTimeout(
    function() {
        controlReadRandom();
    }, 500); 
});


// ========================== Single Item Controller ============
const controlReadSingle = () => {

    elements.body.addEventListener('click',  function(event)  {
        //event.target is clicked element
       if (!event.target) {return; } 

        if (event.target.matches('.items__title')) {
            state.SingleItemId = ReadSingleView.getItemId(event.target.id);
        } 

        // if there is an id found ...
        if(state.SingleItemId) {

            // instanciate the ReadSingle object with id as param
            state.readSingle = new ReadSingle(state.SingleItemId)
            callGetSingleAndRenderSingle();
        }


    });

}

// function to be called on click that gets the single items data and that renders its data in display
const callGetSingleAndRenderSingle = async () => {
     try {
         await state.readSingle.getSingleItem();
         ReadSingleView.renderSingleItem(state.readSingle);
    } catch(err){
     console.log('no');
    }
 }

controlReadSingle();




// ============================= Create Item Controller ======================


// opens the popup box when create button is clicked
//
CreateView.openPopup();


// when submiting form run 
const form = elements.form;
form.addEventListener('submit', function(e) {
    e.preventDefault();
    state.createNewSeshItemFromInput();
    });


/** 
 * function that waits for data to be inputed into db
 * It then renders a message
 * It then gets rid of popup box and message
**/
state.createNewSeshItemFromInput = async () =>{
    const inputValue = elements.input.value;
    state.createItem = new CreateItem(inputValue);
    try{
        //create item
    await state.createItem.postData();

    //render message here
    CreateView.renderMessage(); 

    // get rid of pop up box
        // change elements back to orignal state
    setTimeout(function() {
        const renderedMessage = document.querySelector(".popup__p--message");
        console.log(renderedMessage);
        renderedMessage.parentNode.removeChild(renderedMessage);
        elements.input.style.display = "block";
        elements.submitButton.style.display = "block";
        elements.popupText.style.display = "block";
       elements.popupBox.classList.toggle('popup__div--hide'); 
    }, 1500);

    }catch(err){
        console.log(err);
    }

}




