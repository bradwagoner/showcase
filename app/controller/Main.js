/**
 * Main.js
 * 
 * This is the main and only controller for this small sample app. It contains
 * the logic for handling the ui events for the views listed in the the 'views'
 * array. Mainly loading the example tapped on from the examples list.
 * 
 * 
 */

Ext.define('JavascriptShowcase.controller.Main', {
	extend : 'Ext.app.Controller',
	alias : 'widget.main',

	config : {
		// The views this controller processes
		views : [ 'ExampleList', 'ExampleTemplate' ],

		refs : {
			// the main navigation view
			naviView : 'navigationview',

			// the top level view, a list of examples for selection
			exampleList : 'examplelist',

			// a template for displaying a specific example
			exampleTemplate : 'template',
			exampleTemplateHtml : 'template container[cssClass=func_fillMe]',
			// the button for displaying ruby code
			rubyButton : 'template button[action=showRubyCode]',
			// the button for displaying javascript code
			javascriptButton : 'template button[action=showJavascriptCode]'
		},

		control : {
			exampleList : {
				// load the example tapped on
				itemtap : 'loadTemplateForExample'
			},

			rubyButton : {
				// load the ruby code
				tap : 'showRuby'
			},

			javascriptButton : {
				// load the js code
				tap : 'showJS'
			}
		}
	},

	/**
	 * loadTemplateForExample
	 * 
	 * Fired from a list 'itemtap' event.
	 * 
	 * Loads the specific example by pushing the example template onto the
	 * navigation view and populating it with the code examples found the in the
	 * examples directory. An ajax call for the snippets dynamically
	 * enables/disables the display buttons.
	 */
	loadTemplateForExample : function(scope, index, target, record) {
		// example is defined in the ExamleList component and defines the name
		// of the example to get
		var exampleToLoad = record.get('exampleToLoad');

		// push the template onto the view and get a reference to it.
		var exampleTemplate = this.getNaviView().push({
			xtype : 'template',
			title : record.get('title')
		});

		// Try to load a JavaScript sample snippet from the examples directory
		Ext.Ajax.request({
			// The url for the potential resource
			url : 'resources/examples/' + exampleToLoad + "/" + exampleToLoad + '.js',

			/*
			 * If we find one, turn on the button to display the code and set
			 * the variable on the component.
			 */
			success : function(response) {
				var jsText = response.responseText;
				exampleTemplate.down('button[action=showJavascriptCode]').setDisabled(false);
				exampleTemplate.set('jsCode', jsText);
			},

			// If we don't find an example disable the button.
			failure : function() {
				exampleTemplate.down('button[action=showJavascriptCode]').setDisabled(true);
			}
		});

		// Try to load a Ruby sample snippet from the examples directory
		Ext.Ajax.request({
			// The url for the potential resource
			url : 'resources/examples/' + exampleToLoad + "/" + exampleToLoad + '.rb',

			/*
			 * If we find one, turn on the button to display the code and set
			 * the variable on the component.
			 */
			success : function(response) {
				var rubyText = response.responseText;

				exampleTemplate.down('button[action=showRubyCode]').setDisabled(false);
				exampleTemplate.set('rubyCode', rubyText);
			},

			// If we don't find an example disable the butotn.
			failure : function() {
				exampleTemplate.down('button[action=showRubyCode]').setDisabled(true);
			}
		});
	},

	/**
	 * showRuby
	 * 
	 * Fired from a button 'tap' event.
	 * 
	 * Loads the display container with the contents of the rubyCode variable
	 * set on the template component.
	 */
	showRuby : function() {
		var etHTML = this.getExampleTemplateHtml();
		var rubyCode = this.getExampleTemplate().get('rubyCode');

		etHTML.setHtml('<pre>' + rubyCode + '</pre>');
	},

	/**
	 * showJS
	 * 
	 * Fired from a button 'tap' event.
	 * 
	 * Loads the display container with the contents of the jsCode variable set
	 * on the template component.
	 */
	showJS : function() {
		var etHTML = this.getExampleTemplateHtml();
		var jsCode = this.getExampleTemplate().get('jsCode');

		etHTML.setHtml('<pre>' + jsCode + '</pre>');
	}
});