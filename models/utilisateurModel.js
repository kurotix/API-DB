module.exports = mongoose => {
    const Utilisateur = mongoose.model(
        "utilisateur",
        mongoose.Schema(
            {
                Nom: String,
                Prénom: String,
                Age: Number
            },
            {
                versionKey: false
            }
        )
    );
    return Utilisateur;
};