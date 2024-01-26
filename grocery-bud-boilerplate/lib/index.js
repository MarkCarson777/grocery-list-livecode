import { Application, Controller } from 'stimulus';
window.Stimulus = Application.start()

// import list_controller and register it with Stimulus
import ListController from "./controllers/list_controller.js"
Stimulus.register("list", ListController)

// import list_item_controller and register it with Stimulus
import ListItemController from "./controllers/list_item_controller.js"
Stimulus.register("list-item", ListItemController)
