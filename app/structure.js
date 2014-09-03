/*global m */
"use strict";

import balance from "./components/balance";

var page = function(sidebar, content) {
    var html =
    m(".app", [
        m(".sidebar", [
            balance.view(new balance.controller()),
            m(".nav", sidebar)
        ]),
        m(".content", [
            m(".pages",
                [ "home", "browse", "sell", "transactions" ].map(function(section) {
                    return m("a." + section, { href : "/" + section, config : m.route }, section);
                })
            ),
            content
        ])
    ]);

    return html;
};

export default page;
