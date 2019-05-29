const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const tools = require('./tools');

app
  .set('port', process.env.PORT || 3000)  
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(methodOverride('_method'))
  .use(tools.getReportingInfo(tools.report))
  .use('/api/v1/',require('./api/v1'))
  .use(express.static('public'))
  .get('/',tools.homePage)
  .get('/test', tools.test)
  .get('/health',tools.healthCheck)
  .listen(app.get('port'), () => {
    console.log("Express server listening on port " + app.get('port'))
  });
