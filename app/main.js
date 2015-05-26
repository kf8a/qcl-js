'use strict';

import React from "react";
import SocketService from "./socket-service.js"
import App from "./qcl.jsx"


import './main.css';

main();

function main() {
  var socketService = new SocketService({
    path: '/ws',
    port: "8081"
  });

  React.render(
    < App socketService={socketService} />, 
      document.getElementById('app')
  )
}
