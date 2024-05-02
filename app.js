// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
(() => {

    // state variables
    let toDoListArray = [];

    // UI variables
    const form = document.querySelector(".form");
    const input = document.querySelector(".form_input");
    const ul = document.querySelector(".toDoList");




    // EVENT LISTENERS
    form.addEventListener("submit", (e) => {
        // prevent default reload behaviour
        e.preventDefault();
        let itemId = String(Date.now());
        let toDoItem = input.value;

        addItemToDOM(itemId, toDoItem);
        addItemToArray(itemId, toDoItem);

        input.value = "";
    });

    ul.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id");

        if (!id) return; //if user click in something else

        removeItemFromDOM(id);
        removeItemFromArray(id);
    });



    // FUNCTIONS
    function addItemToDOM(itemId, toDoItem) {
        // create a list using DOM
        const li = document.createElement("li");
        li.setAttribute("data-id", itemId);

        // add toDoItem text to li
        li.innerText = toDoItem;

        // add li to the DOM
        ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem) {
        // add an item to an object so we can find it and delete it later
        toDoListArray.push({ itemId, toDoItem });
        console.log(toDoListArray);
    }


    function removeItemFromDOM(id) {
        // get list item by data ID
        var li = document.querySelector('[data-id = "' + id + '"]');

        // remove list item
        ul.removeChild(li);
    }

    function removeItemFromArray(id) {

        // create a new toDoListArray with all li's that dont match the ID
        toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
        console.log(toDoListArray);
    }






})();