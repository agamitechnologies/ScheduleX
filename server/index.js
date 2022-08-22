const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
require('./config/db.config.js');


app.use(express.json({ limit: '50mb' }))
// app.use(express.urlencoded({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
  .use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header(
      "Access-Control-Allow-Methods",
      "GET,HEAD,OPTIONS,POST,PUT,DELETE"
    );
    response.header(
      "Access-control-Allow-Headers",
      "Acess-Control-Allow-Headers,Origin,X-Requested-With,Content-type,Accept,Authorization,refreshToken");
    next();

  })

  .use("/authenticate", require('./routes/authenticate.js'))

app.use(express({
  type: ['application/json', 'text/plain']
}))

app.listen(port, function () {
  console.info(`ScheduleX's server is running on port http://localhost:${port}`);

})
