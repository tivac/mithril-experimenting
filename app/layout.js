/*global m */
export default function(content) {
    "use strict";
    
    console.log("render layout");
    
    return m(".app", [
        m(".nav",
            [ "home", "browse", "sell", "transactions" ].map(function(section) {
                return m("a." + section, { href : "/" + section, config : m.route }, section);
            })
        ),
        m(".body", [
            m(".content", [ content() ])
        ])
    ]);
}
