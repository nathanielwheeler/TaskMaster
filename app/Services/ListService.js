import List from "../models/List.js";

//Private
let _state = {
    lists: [
        // new List({ title: "Example", items: ["Item 1", "Item 2"] })
    ]
}


//Public
export default class ListService {
    constructor() {
        console.log("¡Hello from ListService!")
        this.loadLists()
    }
    getLists() {
        return _state.lists.map(list => new List(list))
    }


    // NOTE Create/Delete Lists
    addList(newList) {
        _state.lists.push(new List(newList))
        this.saveLists()
    }
    deleteList(index) {
        console.log(`${_state.lists[index]} deleted!`)
        _state.lists.splice(index, 1)
        this.saveLists()
    }

    // NOTE Create/Delete Items
    addItem(newItem, listIndex) {
        _state.lists[listIndex].items.push(newItem)
        this.saveLists()
    }
    deleteItem(listIndex, itemIndex) {
        _state.lists[listIndex].items.splice(itemIndex, 1)
        this.saveLists()
    }



    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        localStorage.setItem('lists', JSON.stringify(_state.lists))
    }

    //NOTE this method will get the lists from local storage at the start of the app
    loadLists() {
        let saved = JSON.parse(localStorage.getItem('lists'))
        if (saved) {
            _state.lists = saved;
        }
    }
}
