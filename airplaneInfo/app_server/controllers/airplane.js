var request = require('request');
var apiOptions = {
  server : "https://airplanedataredux-christianconfer.c9users.io"
};

var formateData = function(data) {
    for (var i = 0; i < data.length; i++) {
      data[i].weight += " KG";
    }
    return data;
}

var removeFlapZero = function(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].vapp == "0") {
      data[i].vapp = "---";
    }
    if (data[i].vref == "0") {
      data[i].vref = "---";
    }
    if (data[i].vga == "0") {
      data[i].vga = "---";
    }
  }
  return data;
}

var removeFlapvZero = function(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].Vr == "0") {
      data[i].Vr = "---";
    }
    if (data[i].V2 == "0") {
      data[i].V2 = "---";
    }
  }
  return data;
}

var renderHomepage = function(res, responseBody1, responseBody2, responseBody3){
  var message = "";
  if (!(responseBody1 instanceof Array) && !(responseBody2 instanceof Array) && !(responseBody3 instanceof Array)) {
    message = "API lookup error";
    responseBody1 = [];
    responseBody2 = [];
    responseBody3 = [];
  } else {
    if (!responseBody1.length) {
      message += "No vfri found";
    }
    if (!responseBody2.length) {
      message += "No flap found";
    }
    if (!responseBody3.length) {
      message += "No flapv found";
    }
  }
  
  var flap5Data = getFlap5(responseBody2);
  var flap10Data = getFlap10(responseBody2);
  var flap15Data = getFlap15(responseBody2);
  var flap35Data = getFlap35(responseBody2);
  var flapv5Data = formateFlapv(getFlapv5(responseBody3));
  var flapv10Data = formateFlapv(getFlapv10(responseBody3));
  var flapv15Data = formateFlapv(getFlapv15(responseBody3));
  
  res.render('index', {
    vfris: responseBody1,
    flapv5s: flapv5Data,
    flapv10s: flapv10Data,
    flapv15s: flapv15Data,
    flap5s: flap5Data,
    flap10s: flap10Data,
    flap15s: flap15Data,
    flap35s: flap35Data,
    message: message
  });
};

var getFlap5 = function(data) {
  var newData = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].setting == "flap5") {
      newData.push(data[i]);
    }
  }
  return newData;
}

var getFlap10 = function(data) {
  var newData = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].setting == "flap10") {
      newData.push(data[i]);
    }
  }
  return newData;
}

var getFlap15 = function(data) {
  var newData = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].setting == "flap15") {
      newData.push(data[i]);
    }
  }
  return newData;
}

var getFlap35 = function(data) {
  var newData = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].setting == "flap35") {
      newData.push(data[i]);
    }
  }
  return newData;
}

var getFlapv5 = function(data) {
  var newData = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].setting == "flaps5") {
      newData.push(data[i]);
    }
  }
  return newData;
}

var getFlapv10 = function(data) {
  var newData = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].setting == "flaps10") {
      newData.push(data[i]);
    }
  }
  return newData;
}

var getFlapv15 = function(data) {
  var newData = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].setting == "flaps15") {
      newData.push(data[i]);
    }
  }
  return newData;
}

var formateFlapv = function(data) {
  console.log("hello");
  var newData = [
    {weight: "18000 KG", b0: "", b2000: "", b4000: "", b6000: "", b8000: "", b10000: "", a0: "", a2000: "", a4000: "", a6000: "", a8000: "", a10000: ""},
    {weight: "20000 KG", b0: "", b2000: "", b4000: "", b6000: "", b8000: "", b10000: "", a0: "", a2000: "", a4000: "", a6000: "", a8000: "", a10000: ""},
    {weight: "22000 KG", b0: "", b2000: "", b4000: "", b6000: "", b8000: "", b10000: "", a0: "", a2000: "", a4000: "", a6000: "", a8000: "", a10000: ""},
    {weight: "24000 KG", b0: "", b2000: "", b4000: "", b6000: "", b8000: "", b10000: "", a0: "", a2000: "", a4000: "", a6000: "", a8000: "", a10000: ""},
    {weight: "26000 KG", b0: "", b2000: "", b4000: "", b6000: "", b8000: "", b10000: "", a0: "", a2000: "", a4000: "", a6000: "", a8000: "", a10000: ""},
    {weight: "28000 KG", b0: "", b2000: "", b4000: "", b6000: "", b8000: "", b10000: "", a0: "", a2000: "", a4000: "", a6000: "", a8000: "", a10000: ""},
    {weight: "29000 KG", b0: "", b2000: "", b4000: "", b6000: "", b8000: "", b10000: "", a0: "", a2000: "", a4000: "", a6000: "", a8000: "", a10000: ""}
  ];
  for (var i = 0; i < data.length; i++) {
    console.log(i);
    if (!data[i].above20cOAT) {
      if (data[i].weight == "18000 KG") {
        if (data[i].altitude == 0) {
          newData[0].b0 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 2000) {
          newData[0].b2000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 4000) {
          newData[0].b4000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 6000) {
          newData[0].b6000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 8000) {
          newData[0].b8000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 10000) {
          newData[0].b10000 = data[i].Vr + "/" + data[i].V2;
        }
      } else if (data[i].weight == "20000 KG") {
        if (data[i].altitude == 0) {
          newData[1].b0 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 2000) {
          newData[1].b2000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 4000) {
          newData[1].b4000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 6000) {
          newData[1].b6000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 8000) {
          newData[1].b8000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 10000) {
          newData[1].b10000 = data[i].Vr + "/" + data[i].V2;
        }
      } else if (data[i].weight == "22000 KG") {
        if (data[i].altitude == 0) {
          newData[2].b0 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 2000) {
          newData[2].b2000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 4000) {
          newData[2].b4000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 6000) {
          newData[2].b6000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 8000) {
          newData[2].b8000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 10000) {
          newData[2].b10000 = data[i].Vr + "/" + data[i].V2;
        }
      } else if (data[i].weight == "24000 KG") {
        if (data[i].altitude == 0) {
          newData[3].b0 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 2000) {
          newData[3].b2000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 4000) {
          newData[3].b4000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 6000) {
          newData[3].b6000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 8000) {
          newData[3].b8000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 10000) {
          newData[3].b10000 = data[i].Vr + "/" + data[i].V2;
        }
      } else if (data[i].weight == "26000 KG") {
        if (data[i].altitude == 0) {
          newData[4].b0 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 2000) {
          newData[4].b2000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 4000) {
          newData[4].b4000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 6000) {
          newData[4].b6000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 8000) {
          newData[4].b8000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 10000) {
          newData[4].b10000 = data[i].Vr + "/" + data[i].V2;
        }
      } else if (data[i].weight == "28000 KG") {
        if (data[i].altitude == 0) {
          newData[5].b0 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 2000) {
          newData[5].b2000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 4000) {
          newData[5].b4000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 6000) {
          newData[5].b6000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 8000) {
          newData[5].b8000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 10000) {
          newData[5].b10000 = data[i].Vr + "/" + data[i].V2;
        }
      } else if (data[i].weight == "29000 KG") {
        if (data[i].altitude == 0) {
          newData[6].b0 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 2000) {
          newData[6].b2000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 4000) {
          newData[6].b4000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 6000) {
          newData[6].b6000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 8000) {
          newData[6].b8000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 10000) {
          newData[6].b10000 = data[i].Vr + "/" + data[i].V2;
        }
      }
    } else {
      if (data[i].weight == "18000 KG") {
        if (data[i].altitude == 0) {
          newData[0].a0 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 2000) {
          newData[0].a2000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 4000) {
          newData[0].a4000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 6000) {
          newData[0].a6000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 8000) {
          newData[0].a8000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 10000) {
          newData[0].a10000 = data[i].Vr + "/" + data[i].V2;
        }
      } else if (data[i].weight == "20000 KG") {
        if (data[i].altitude == 0) {
          newData[1].a0 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 2000) {
          newData[1].a2000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 4000) {
          newData[1].a4000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 6000) {
          newData[1].a6000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 8000) {
          newData[1].a8000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 10000) {
          newData[1].a10000 = data[i].Vr + "/" + data[i].V2;
        }
      } else if (data[i].weight == "22000 KG") {
        if (data[i].altitude == 0) {
          newData[2].a0 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 2000) {
          newData[2].a2000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 4000) {
          newData[2].a4000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 6000) {
          newData[2].a6000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 8000) {
          newData[2].a8000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 10000) {
          newData[2].a10000 = data[i].Vr + "/" + data[i].V2;
        }
      } else if (data[i].weight == "24000 KG") {
        if (data[i].altitude == 0) {
          newData[3].a0 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 2000) {
          newData[3].a2000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 4000) {
          newData[3].a4000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 6000) {
          newData[3].a6000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 8000) {
          newData[3].a8000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 10000) {
          newData[3].a10000 = data[i].Vr + "/" + data[i].V2;
        }
      } else if (data[i].weight == "26000 KG") {
        if (data[i].altitude == 0) {
          newData[4].a0 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 2000) {
          newData[4].a2000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 4000) {
          newData[4].a4000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 6000) {
          newData[4].a6000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 8000) {
          newData[4].a8000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 10000) {
          newData[4].a10000 = data[i].Vr + "/" + data[i].V2;
        }
      } else if (data[i].weight == "28000 KG") {
        if (data[i].altitude == 0) {
          newData[5].a0 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 2000) {
          newData[5].a2000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 4000) {
          newData[5].a4000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 6000) {
          newData[5].a6000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 8000) {
          newData[5].a8000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 10000) {
          newData[5].a10000 = data[i].Vr + "/" + data[i].V2;
        }
      } else if (data[i].weight == "29000 KG") {
        if (data[i].altitude == 0) {
          newData[6].a0 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 2000) {
          newData[6].a2000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 4000) {
          newData[6].a4000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 6000) {
          newData[6].a6000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 8000) {
          newData[6].a8000 = data[i].Vr + "/" + data[i].V2;
        } else if (data[i].altitude == 10000) {
          newData[6].a10000 = data[i].Vr + "/" + data[i].V2;
        }
      }
    }
  }
  return newData;
}

module.exports.showData = function(req, res){
  var data = [];
  var data2 = [];
  var data3 = [];
  var requestOptions, path;
  path = '/api/vfri/';
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {}
  };
  request(
    requestOptions,
    function(err, response, body) {
      var i;
      data = body;
      if (response.statusCode === 200 && data.length) {
        data = formateData(data);
      }
      var requestOptions2, path2;
      path2 = '/api/flap/';
      requestOptions2 = {
        url : apiOptions.server + path2,
        method : "GET",
        json : {}
      };
      request(
        requestOptions2,
        function(err, response, body) {
          var i;
          data2 = body;
          if (response.statusCode === 200 && data2.length) {
            data2 = formateData(data2);
            data2 = removeFlapZero(data2);
          }
          var requestOptions3, path3;
          path3 = '/api/flapv/';
          requestOptions3 = {
            url : apiOptions.server + path3,
            method : "GET",
            json : {}
          };
          request(
            requestOptions3,
            function(err, response, body) {
              var i;
              data3 = body;
              if (response.statusCode === 200 && data3.length) {
                data3 = formateData(data3);
                data3 = removeFlapvZero(data3);
              }
              renderHomepage(res, data, data2, data3);
            }
          );
        }
      );
    }
  );
  
};