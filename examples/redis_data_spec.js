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

frisby.create('Get Brightbit Facebook Page')
  .get('https://devopsjavawebapp.mybluemix.net/redis/set?keyvalue=hello')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSONTypes({
    out: String
  })
  .expectJSON({"out":"Success created key and value"})
.toss();

frisby.create('Get Brightbit Facebook Page')
  .get('https://devopsjavawebapp.mybluemix.net/redis/keys')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSONTypes({
    data: Array
  })
  .expectJSON({"data":["","a","c","keyvalue","redisset","redistes","redistest","hello"]})
.toss();

