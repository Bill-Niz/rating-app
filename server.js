const express = require('express');
const app = express();

app.use("*",express.static(__dirname + '/dist'));

app.set('port', process.env.PORT || 80);

const server = app.listen(app.get('port'), function() {
  console.log(' Server listening on port ' + server.address().port);
});
