const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videoSchema = new Schema(
    {
       name: {
         type: String,
         required: true
       } ,
       type: {
           type: String,
           required: true
       },
    }
)

module.exports = mongoose.model('video', videoSchema)