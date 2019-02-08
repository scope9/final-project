const Score = require('../models/Score');

module.exports = function (app) {




  app.get('/api/allScoresFromDb', function (req, res) {
    Score.find({})
      .then(function (data) {
        res.json(data);
        // console.log(data)
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/addTopScore', function (req, res) {
    Score.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // Put Route for only 1 top score.  Use Data ID   add conditions

  // Or keep post and have a list of high scores underneath the game  so you keep post routemand have list of high score

}