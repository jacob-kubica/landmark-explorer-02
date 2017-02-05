import * as mongoose from "mongoose";

let schema = new mongoose.Schema({
    todoMessage: {type: String, required: true, trim: true},
    name: {type: String, required: true, trim: true},
    address: {type: String, required: true, trim: true},
    info: {type: String, required: true, trim: true},
    images: {type: Array, required: true, trim: true},
    createdAt: {type: Date, default: Date.now}
});

export default schema;
