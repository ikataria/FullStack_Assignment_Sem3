const mongoose = require('mongoose');

/**
 * CurrentStatus
 * 1 = Working
 * 0 = Non-Working 
 */

const EmployeeSchema = new mongoose.Schema({
    Id: Number,
    FirstName: String,
    LastName: String,
    Age: Number,
    DateOfJoining: { 
        type: Date, 
        default: new Date() 
    },
    Title: String,
    Department: String,
    EmployeeType: String,
    CurrentStatus: {
        type: Number,
        default: 1
    }

});

module.exports = mongoose.model('Employee', EmployeeSchema);
