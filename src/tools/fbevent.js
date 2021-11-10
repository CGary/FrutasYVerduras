import { EventEmitter } from "fbemitter";
const emitter = new EventEmitter();

//event constants
const dispatchEvent = "dispatchEvent";
const burguerEvent = "burguerEvent";
const proyectoSaved = "proyectoSaved";

export { emitter, dispatchEvent, burguerEvent, proyectoSaved };
