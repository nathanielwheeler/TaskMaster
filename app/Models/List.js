export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        this.name = data.name
        this.items = data.items || []

        console.log(`"${this.name}" List Created!`)
    }

    getTemplate(index) {
        let template =
            `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class="card bg-dark text-light my-border">
                    <h4 class="card-header">Example List</h4>
                    <ul class="list-group ">
            `
        template += this.drawItems(index)
        template +=
            `
                    </ul>
                    <div class="card-footer d-flex justify-content-center">
                        <button class="btn btn-outline-danger">Delete List</button>
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
                        <li class="list-group-item bg-dark">
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