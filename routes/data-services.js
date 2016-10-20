module.exports = function (app) {

  app.get('/data-services', function (request, response) {

    var fullUrl = request.protocol + '://' + request.get('host') + request.originalUrl;
    console.log('[' + new Date().toTimeString() + '] Received request: ' + fullUrl);

    response.json({
      "data":
      [
        {
          "id": "http://thymeflow.com/personal#Service/Microsoft",
          "type": "data-service",
          "attributes":
          {
            "name": "Microsoft",
            "messagesCount": 0,
            "eventsCount": 0,
            "locationsCount": 0,
            "agentsCount": 0,
            "accounts":
            [
              {
                "name": "account@live.com",
                "messagesCount": 0,
                "eventsCount": 0,
                "locationsCount": 0,
                "agentsCount": 0
              }
            ]
          }
        },
        {
          "id": "http://thymeflow.com/personal#Service/Email",
          "type": "data-service",
          "attributes":
          {
            "name": "Email",
            "messagesCount": 0,
            "eventsCount": 0,
            "locationsCount": 0,
            "agentsCount": 0,
            "accounts": []
          }
        },
        {
          "id": "http://thymeflow.com/personal#Service/Facebook",
          "type": "data-service",
          "attributes":
          {
            "name": "Facebook",
            "messagesCount": 0,
            "eventsCount": 82,
            "locationsCount": 0,
            "agentsCount": 4674,
            "accounts":
            [
              {
                "name": "account@live.com",
                "messagesCount": 0,
                "eventsCount": 82,
                "locationsCount": 0,
                "agentsCount": 4674
              }
            ]
          }
        },
        {
          "id": "http://thymeflow.com/personal#Service/Google",
          "type": "data-service",
          "attributes":
          {
            "name": "Google",
            "messagesCount": 47,
            "eventsCount": 0,
            "locationsCount": 0,
            "agentsCount": 0,
            "accounts":
            [
              {
                "name": "account@gmail.com",
                "messagesCount": 47,
                "eventsCount": 0,
                "locationsCount": 0,
                "agentsCount": 0
              }
            ]
          }
        },
        {
          "id": "http://thymeflow.com/personal#Service/File",
          "type": "data-service",
          "attributes":
          {
            "name": "File",
            "messagesCount": 0,
            "eventsCount": 0,
            "locationsCount": 0,
            "agentsCount": 0,
            "accounts": []
          }
        }
      ]
    });
  });
};
