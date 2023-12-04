import mongoose from 'mongoose';
const { Schema } = mongoose;

const noticiaSchema = new Schema(
    {
        title: String,
        img: String,
        texto: String,
    },
    {
        timestamps: true 
    }
);

const NoticiaModel = mongoose.model('noticias', usuarioSchema);

export default NoticiaModel;