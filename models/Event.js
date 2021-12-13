const { Schema, model } = require("mongoose");

const EventSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

//quitando ids y propiedades que no se usan,
//"SOLO PARA LA VISUALIZACIÓN NO PARA LA BASE DE DATOS, EN BASE DE DATOS SIGUE IGUAL"
//EventSchema.method("toJSON", function () {
//  const { __v, _id, ...object } = this.toObject();
//  object.id = _id;
//  return object;
//});

module.exports = model("Event", EventSchema);
