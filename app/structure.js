/*global m */

import balance from "./components/balance";

var page = function(content) {
    var html = 
    m(".app", [
        m(".sidebar", [
            balance.view(new balance.controller()),
            m(".categories")
        ]),
        m(".content", [
            m(".nav", 
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
