module.exports = function (app) {

  app.get('/system-tasks', function (request, response) {

    var fullUrl = request.protocol + '://' + request.get('host') + request.originalUrl;
    console.log('[' + new Date().toTimeString() + '] Received request: ' + fullUrl);

    response.json({
      "data":
      [
        {
          "id":"2",
          "type":"system-task",
          "attributes":
          {
            "source":"Calendar",
            "name": "task 2",
            "endDate":"2016-10-17T13:21:01.063Z",
            "service":"Google",
            "status":"done",
            "account":"account@provider.com",
            "type":"synchronization",
            "startDate":"2016-10-17T13:21:00.762Z"
          }
        },
        {
          "id":"3",
          "type":"system-task",
          "attributes":
          {
            "source":"Contacts",
            "name": "task 3",
            "endDate":"2016-10-17T13:21:01.087Z",
            "service":"Google",
            "status":"done",
            "account":"account@provider.com",
            "type":"synchronization",
            "startDate":"2016-10-17T13:21:00.763Z"
          }
        },
        {
          "id":"4",
          "type":"system-task",
          "attributes":
          {
            "source":"Facebook",
            "service":"Facebook",
            "name": "task 4",
            "progress":12,
            "status":"working",
            "account":"account@provider.com",
            "type":"synchronization",
            "startDate":"2016-10-17T13:20:57.135Z"
          }
        },
        {
          "id":"1",
          "type":"system-task",
          "attributes":
          {
            "source":"Emails",
            "service":"Google",
            "name": "task 1",
            "progress":22,
            "status":"working",
            "account":"account@provider.com",
            "type":"synchronization",
            "startDate":"2016-10-17T13:18:24.679Z"
          }
        }
      ]
    });
  });
};
