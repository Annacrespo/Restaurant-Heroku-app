// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Star Wars Characters (DATA)
// =============================================================
var tables = [{
  routeName: "tables",
  name: "Matt",
  phoneNumber: 7605409202,
  email: "mattcarrillo09@gmail.com",
  uniqueID: 1
}, {  
  routeName: "tables",
  name: "Jeff",
  phoneNumber: 6195889213,
  email: "JeffWithAjay@yahoo.com",
  uniqueID: 1
}
];
// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
// Get all tables
app.get("/all", function(req, res) {
  res.json(tables);
});
// // Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;
//   if (chosen) {
//     console.log(chosen);
//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
//     return res.json(false);
//   }
//   return res.json(characters);
// });
// Create New tables - takes in JSON input
app.post("/api/new", function(req, res) {
  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  console.log(newcharacter);
  characters.push(newcharacter);
  res.json(newcharacter);
});
// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + PORT);
});
