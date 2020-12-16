import { model, Schema } from 'mongoose';

const AlimentosSchema = new Schema({
  nome:{
    type: String,
    required:true,
  },
  quantidade:{
    type: Number,
    // integer: 'O valor deve ser inteiro',
    required:true,
    min: 1,
  },
  perecivel:{
    type: Boolean,
    required:true
  },
  vegano:{
    type: Boolean,
    required:true
  },
})

export default model('Alimentos', AlimentosSchema)