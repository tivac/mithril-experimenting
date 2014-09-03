/*global m*/

import user from "../models/user";

export default {
    controller : function() {
        this.balance = user.balance();
    },
    view : function(ctrl) {
        return m(".balance", [
            m(".coins", ctrl.balance),
            m("button", "GET MORE GOLD")
        ]);
    }
};
