const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");


const visitorSchema = new Schema({
    queueNumber: {
        type: String,
        required: true,
        trim: true,
    },
    visitorName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate: [{
            validator: validator.isEmail,
        }, ],
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
    Address: {
        type: String,
        required: true,
        trim: true,
    },
    patientComplaints: {
        type: String,
        required: true,
        trim: true,
    },
    doctorName: {
        type: String,
        required: true,
        trim: true,
    },
    scheduleDate: {
        type: String,
        required: true,
        trim: true,
    },
    scheduleTime: {
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true
});


const Visitor = mongoose.model("Visitor", visitorSchema);

module.exports = Visitor;