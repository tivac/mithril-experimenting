/*global m */

var BrowseController = function() {
      
    };
    
BrowseController.prototype = {};


export default {
    controller : BrowseController,
    view : function() {
        "use strict";
        
        return m(".browse", [
            m(".nav",
                [ "home", "browse", "sell", "transactions" ].map(function(section) {
                    return m("a." + section, { href : "/" + section, class : (section === "browse" ? "active" : "") }, section);
                })
            )
        ]);
    }
};
