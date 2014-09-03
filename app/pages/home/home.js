/*global m */

import page from "../../structure";

var home = {
    controller : function() {
    },
    
    view : function(ctrl) {
        return page(home.content(ctrl));
    },

    content : function(ctrl) {
        return m(".home", "HOME");
    }
};

export default home;
