const express = require("express");
const app = express();
const rateLimit = require("express-rate-limit");
var limiter = rateLimit({ windowMs: 2 * 60 * 1000, max: 400 });
app.use(limiter);
app.set('trust proxy', true);
app.use((req, res, next) => {
    if (!req.secure) return res.redirect('https://' + req.get('host') + req.url);
    next();
});
app.use(express.static("assets"));
app.use(express.static("services"));
app.get("/", function(request, response) { response.sendFile(__dirname + "/index.html"); });
app.get("*", function(req, res) { res.sendFile(__dirname + "/services/redirect/404/"); });
var listener = app.listen(process.env.PORT, function() { console.log("Your app is listening on port " + listener.address().port); });