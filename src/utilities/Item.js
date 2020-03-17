import { status } from './Status';
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
