/*global m */

import home from "./modules/home/home";
import browse from "./modules/browse/browse";
//import sell from "./modules/sell/sell";
//import transactions from "./modules/transactions/transactions";

m.route.mode= "pathname";
m.route(
    document.body,
    "/",
    {
        "/"             : home,
        "/browse"       : browse,
        //"/sell"         : sell,
        //"/transactions" : transactions
    }
);
