Ext.define('JavascriptShowcase.view.ExampleList', {
	extend : 'Ext.List',
	alias : 'widget.examplelist',

	config : {
		title : 'Examples',

		itemTpl : '{title}',

		data : [ {
			title : 'Fizz Buzz!',
			xtypeToLoad : 'fizzbuzz'
		}, {
			title : 'Sieve of Eratoshenes',
			xtypeToLoad : 'sieve'
		} ]
	}
});
