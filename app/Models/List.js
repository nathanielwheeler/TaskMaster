export default class List {
    constructor(data) {
        this.title = data.title
        this.items = data.items || []

        console.log(`"${this.title}" List Created!`)
    }

    getTemplate(listIndex) {
        let template =
            `
            <div class="col-12 col-md-6 col-xl-4">
                <div class="card bg-list text-list my-border">
                    <h5 class="card-header text-center">${this.title}</h5>
                    <div class ="card-body d-flex justify-content-center">
                        <form onsubmit="app.controllers.listController.addItem(event, ${listIndex})">
                            <div class="input-group">

                                <div class="form-group">
                                    <input type="text" class="form-control" name="item" placeholder="New Item"
                                        required>
                                </div>
                                <div class="form-group append">
                                    <button class="btn btn-outline-success" type="submit">+</button>
                                </div>

                            </div>
                        </form>
                    </div>
                    <ul class="list-group ">
            `
        template += this.drawItems(listIndex)
        template +=
            `
                    </ul>
                    <div class="card-footer d-flex justify-content-center">
                        <button onclick="app.controllers.listController.deleteList(${listIndex})" class="btn btn-outline-danger">Delete List</button>
                    </div>
                </div>
            </div>
        `
        return template
    }
    drawItems(listIndex) {
        let itemTemplate = ""
        this.items.forEach((item, itemIndex) => {
            itemTemplate +=
                `
                        <li class="list-group-item bg-list">
                            <a class="badge badge-danger"
                                onclick="app.controllers.listController.deleteItem(${listIndex}, ${itemIndex})"
                                type="button">X</a>
                            ${item}
                        </li>
            `
        })
        return itemTemplate
    }










}