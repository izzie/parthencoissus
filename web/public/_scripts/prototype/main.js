"use strict";

require.config({
    baseUrl: "../_scripts",
    urlArgs: "version=1.0.0",
    paths: {
        // Libs
        "text": "_lib/require/text",
        "modernizr": "_lib/require/adapter/modernizr",
        "doT": "_lib/doT/doT",

        "underscore": "_lib/require/adapter/underscore",
        "backbone": "_lib/require/adapter/backbone",
        "backbone-localstorage": "_lib/require/adapter/backbone-localstorage",

        "jquery.mousewheel": "_lib/jquery/jquery.mousewheel",
        "jquery.textchange": "_lib/jquery/jquery.textchange",

        "socket.io": "/socket.io/socket.io.js",

        // Common
        "msglistener": "common/msglistener",
        "preventscrolling": "common/preventscrolling",

        // Components
        "compareword": "component/compareword",
        "config": "component/config",
        "context": "component/context",
        "gethint": "component/gethint",
        "getscore": "component/getscore",
		"getwordexplanation": "component/getwordexplanation",
		"gradehandler": "component/gradehandler",
        "matchpartner": "component/matchpartner",
        "msghandler": "component/msghandler",
        "roundoff": "component/roundoff",
        "takeword": "component/takeword",
        "updatescore": "component/updatescore",

        // Controls - with template
        "bullistword": "control/bullistword/bullistword",
        "playbutton": "control/playbutton/playbutton",
        "score": "control/score/score",
        "word": "control/word/word",
        "wordinput": "control/wordinput/wordinput"
    },
    shim: {
        'jquery.mousewheel': ['jquery'],
        'jquery.textchange': ['jquery'],
        'backbone': ['underscore', 'jquery']
    },
    catchError: true,
    waitSeconds: 7,
    locale: "fr-fr"
});

var gwRouter;
require(["jquery", "backbone"], function ($, Backbone) {
    gwRouter = new Backbone.Router;

    require(["modernizr", "widget/login/login", "widget/logged/logged"],
    function (modernizr, login, logged) {
        $(function () {

            // Route start
            Backbone.history.start();
            // Fuction start
            login(logged);

        });
    });

});

