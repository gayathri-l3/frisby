/**
 * frisby.js: Facebook usage example
 * (C) 2012, Vance Lucas
 */
var frisby = require('../lib/frisby');

// Global setup for all tests
frisby.globalSetup({
  request: {
    headers:{'Accept': 'application/json'}
  }
});


frisby.create('Get Brightbit Facebook Page')
  .get('https://devopsjavawebapp.mybluemix.net/redis/get?key=hello')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSONTypes({
    data: String
  })
  .expectJSON({"data":"I am redis"})
.toss();


// Test error reponse
frisby.create('Get Brightbit Facebook Page Likes')
  .get('https://graph.facebook.com/111848702235277/likes')
  .expectStatus(400)
  .expectJSONTypes({
    error: {
      message: String,
      type: String
    }
  })
  .expectJSON({
    error: {
      type: "OAuthException"
    }
  })
.toss();
