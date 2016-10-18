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
