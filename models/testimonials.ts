import mongoose, { Schema } from "mongoose";

const testimonialsSchema = new Schema({
    name: {
        type: String,
    },
    testimony: {
        type: String
    },
    photo: {
        id: String,
        webViewLink: String,
        webContentLink: String
        // type: String,
        // default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    }
},
{
    timestamps: true
}
)

const Testimonials = mongoose.models.Testimonials || mongoose.model("Testimonials", testimonialsSchema)
export default Testimonials

