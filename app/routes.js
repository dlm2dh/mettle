var Event = require("./models/event");
var Occurrence = require("./models/occurrence");

module.exports = function(router, app) {

  router.use(function(req, res, next) {
    console.log("Router invoked");
    next();
  });

  // get all events
  router.get("/api/events", function(req, res) {
    Event.find(function(err, events) {
      if (err) {
        res.send(err);
      }
      else {
        res.json(events);
      }
    });
  });

  // create event and send back all events after creation
  router.post("/api/events", function(req, res) {
    Event.create({
      name : req.body.name,
      type : req.body.type,
      element : req.body.element,
      target : req.body.target
    }, function(err, event) {
      if (err) {
        res.send(err);
      }
      else {
        Event.find(function(err, events) {
          if (err) {
            res.send(err);
          }
          else {
            res.json(events);
          }
        });
      }
    });
  });

  // delete an event
  router.delete("/api/events/:event_id", function(req, res) {
    Event.remove({
      _id : req.params.event_id
    }, function(err, event) {
      if (err) {
        res.send(err);
      }
      else {
        Event.find(function(err, events) {
          if (err) {
            res.send(err);
          }
          else {
            res.json(events);
          }
        });
      }
    });
  });

  // get all occurrences
  router.get("/api/occurrences", function(req, res) {
    Occurrence.find(function(err, occurrences) {
      if (err) {
        res.send(err);
      }
      else {
        res.json(occurrences);
      }
    });
  });

  // create occurrence and send back occurrence document after creation
  router.post("/api/occurrences", function(req, res) {
    Occurrence.create({
      event_id : req.body.event_id
    }, function(err, occurrence) {
      if (err) {
        res.send(err);
      }
      else {
        res.json(occurrence);
        /*Occurrence.find(function(err, occurrences) {
          if (err) {
            res.send(err);
          }
          else {
            res.json(occurrences);
          }
        });*/
      }
    });
  });

  // delete an occurrence
  router.delete("/api/occurrences/:occurrence_id", function(req, res) {
    Occurrence.remove({
      _id : req.params.occurrence_id
    }, function(err, occurrence) {
      if (err) {
        res.send(err);
      }
      else {
        Occurrence.find(function(err, occurrences) {
          if (err) {
            res.send(err);
          }
          else {
            res.json(occurrences);
          }
        });
      }
    });
  });

  router.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });

  app.use("/", router);
}
