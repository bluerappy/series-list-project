// series-list-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const seriesList = new Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    year: { type: String, required: true },
    beginDate: { type: Date, required: false },
    endDate: { type: Date, required: false },
  }, {
    timestamps: true
  });

  return mongooseClient.model('seriesList', seriesList);
};
