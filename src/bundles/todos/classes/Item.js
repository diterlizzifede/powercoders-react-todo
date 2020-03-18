import { status } from '../constants';
const uniqid = require('uniqid');

export class Item {
    value;
    id;
    status;

    constructor(value) {
        this.value = value;
        this.id = uniqid();
        this.status = status.ACTIVE
    }
}
