/*global m */

import home from "./modules/home/home";
import browse from "./modules/browse/browse";
//import sell from "./modules/sell/sell";
//import transactions from "./modules/transactions/transactions";

m.module(document.body, {
    controller : function() {
    },
    view : function() {
        return m(".app", [
            m(".nav",
                [ "home", "browse", "sell", "transactions" ].map(function(section) {
                    return m("a." + section, { href : "/" + section }, section);
                })
            ),
            m(".body", "CONTENT", [
                m(".content")
            ])
        ]);
    }
});

m.route.mode = "pathname";
m.route(
    document.querySelector(".content"),
    "/",
    {
        "/"             : home,
        "/browse"       : browse,
        //"/sell"         : sell,
        //"/transactions" : transactions
    }
);
