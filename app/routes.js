/*global m */
"use strict";

import home from "./pages/home/home";
import browse from "./pages/browse/browse";
//import sell from "./pages/sell/sell";
//import transactions from "./pages/transactions/transactions";

m.route.mode = "pathname";
m.route(
    document.body,
    "/",
    {
        "/"                 : home,
        "/browse"           : browse,
        "/browse/:category" : browse,
        //"/sell"         : sell,
        //"/transactions" : transactions
    }
);
