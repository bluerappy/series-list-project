// projects-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const projects = new Schema({
    type: { type: String, required: true },
    client: { type: String, required: true },
    location: { type: String, required: false },
    dev: { type: String, required: true },
    start_date: { type: Date, required: false },
    end_date: { type: Date, required: false },
    days_done: { type: Number, required: false },
    comment: { type: String, required: false },
  }, {
    timestamps: true
  });

  return mongooseClient.model('projects', projects);
};
