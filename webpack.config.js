module.exports = {
	module: {
    	noParse: [/moment-with-locales/]
    },
	resolve: {
	    alias: {
	        moment: "moment/min/moment-with-locales.min.js"
	    }
    }
};