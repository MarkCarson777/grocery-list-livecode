import { Controller } from 'stimulus';

export default class extends Controller {
  // data targets are used to reference elements in the DOM
  static targets = [ "itemName", "editForm", "controls", "saveBtn" ]

  // connect is a lifecycle method that is called when the controller is connected to the DOM
  connect() {
    // show that the controller is connected to the DOM
    console.log("list item connected")
  }

  // deleteItem is a custom method that is called when the "remove" button is clicked
  deleteItem() {
    // .remove() is a native JavaScript method that removes an element from the DOM
    this.element.remove()
  }

  // editItem is a custom method that is called when the "edit" button is clicked
  editItem() {
    // Here we add or remove "d-none" on specific targets. It is a Bootstrap class that hides an element
    this.itemNameTarget.classList.add('d-none');
    this.controlsTarget.classList.add('d-none');
    this.editFormTarget.classList.remove('d-none');
    this.saveBtnTarget.classList.remove('d-none');
  }
  
  // saveItem is a custom method that is called when the "save" button is clicked
  saveItem() {
    // read the input value and save it to a variable
    const itemName = this.editFormTarget.value;
    // interpolate the itemName variable into the itemNameTarget
    this.itemNameTarget.innerText = itemName;
    // Here we add or remove "d-none" on specific targets
    this.editFormTarget.classList.add('d-none');
    this.saveBtnTarget.classList.add('d-none');
    this.controlsTarget.classList.remove('d-none');
    this.itemNameTarget.classList.remove('d-none');
  }
}