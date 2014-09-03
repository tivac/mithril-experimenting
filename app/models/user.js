"use strict";

var User = function() {};

User.prototype = {
    balance : function() {
        return Math.round(Math.random() * 100000);
    }
};

// singleton exported, shouldn't ever need more than one user model
export default (new User());
