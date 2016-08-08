/**
 * ExampleList.js
 * 
 * This is the main display for the app, initially loaded it will display the
 * list of examples available for the user to select.
 */

Ext.define('JavascriptShowcase.view.ExampleList', {
	extend : 'Ext.List',
	alias : 'widget.examplelist',

	config : {
		title : 'Examples',

		itemTpl : '{title}',

		data : [ {
			title : 'Fizz Buzz!',
			exampleToLoad : 'fizzbuzz'
		}, {
			title : 'Sieve of Eratoshenes',
			exampleToLoad : 'sieve'
		}, {
			title : 'Flatten Array',
			exampleToLoad : 'flatten'
		}, {
			title : 'Pooler',
			exampleToLoad : 'pooler'
		} ]
	}
});
