/*global m */
"use strict";

import page from "../../structure";
import sidebar from "../../components/browse-sidebar";

var browse = {
    controller : function() {},
    
    view : function(ctrl) {
        return page(
            sidebar.view(new sidebar.controller()),
            browse.content(ctrl)
        );
    },

    content : function(ctrl) {
        return m(".browse", "ITEMS 'N SHIT");
    }
};

export default browse;
