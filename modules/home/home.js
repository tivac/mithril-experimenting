/*global m */

var HomeController = function() {
      
    };
    
HomeController.prototype = {};


export default {
    controller : HomeController,
    view : function() {
        "use strict";
        
        return m(".home", [
            m(".nav",
                [ "home", "browse", "sell", "transactions" ].map(function(section) {
                    return m("a." + section, { href : "/" + section }, section);
                })
            )
        ]);
    }
};
