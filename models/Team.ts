import mongoose, {Schema} from 'mongoose'

const teamSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    role: {
        type: String,
        required: [true, 'Role is required']
    },
    description: {
        type: String,
        required: [true, 'Role is required']
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
})

const Team = mongoose.model("Team", teamSchema)
export default Team

