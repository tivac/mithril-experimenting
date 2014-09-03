/*global m */

import page from "../../structure";

var browse = {
    controller : function() {
    },
    
    view : function(ctrl) {
        return page(browse.content(ctrl));
    },

    content : function(ctrl) {
        return m(".browse", "BROWSE");
    }
};

export default browse;
