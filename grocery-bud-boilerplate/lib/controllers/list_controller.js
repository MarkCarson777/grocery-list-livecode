import { Controller } from 'stimulus';

export default class extends Controller {
  // data targets are used to reference elements in the DOM
  static targets = ["input", "itemsList"]

  connect() {
    // show that the controller is connected to the DOM
    console.log("list connected")
  }

  addItem(event) {
    // prevent default submit behaviour
    event.preventDefault();
    // read the input value and save it to a variable
    const itemName = this.inputTarget.value
    // inject HTML for new item into the itemsListTarget and interpolate the itemName variable
    this.itemsListTarget.insertAdjacentHTML('beforeend', `
    <li class="list-group-item d-flex justify-content-between align-items-center" data-controller="list-item">
      <div data-list-item-target="itemName">${itemName}</div>
      <input type="text" class="form-control d-none" value="${itemName}" data-list-item-target="editForm">
      <button type="button" class="btn btn-sm btn-light d-none" data-list-item-target="saveBtn" data-action="click->list-item#saveItem">Save</button>

      <div data-list-item-target="controls">
        <button type="button" class="btn btn-sm btn-light" data-action="click->list-item#editItem">edit</button>
        <button type="button" class="btn btn-sm btn-danger" data-action="click->list-item#deleteItem">remove</button>
      </div>
    </li>
    `);
    // clear the input field
    this.inputTarget.value = "";
  }
}
