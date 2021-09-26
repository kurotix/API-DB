const { Schema } = require("mongoose");
const Utilisateur = require('./utilisateurModel');

module.exports = mongoose => {
    const Admin = mongoose.model(
        "admin",
        mongoose.Schema(
            {
                name: String,
                age: Number,

                utilisateurs: [{
                    type: Schema.Types.ObjectId,
                    ref: 'utilisateur'
                }],

            },
            {
                versionKey: false
            }
        )
    );

    return Admin;
};