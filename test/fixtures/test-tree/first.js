import 'jquery-cdn';
import '@empty';
import { q } from "./second.js";
import './amd.js';
import './component.jsx!./jsx.js';

export var p = 5;
export class test extends Object {
  constructor() {
    super();
    q;
  }
}