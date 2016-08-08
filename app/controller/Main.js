Ext.define('JavascriptShowcase.controller.Main', {
	extend : 'Ext.app.Controller',
	alias : 'widget.main',

	config : {
		views : [ 'ExampleList', 'ExampleTemplate' ],

		refs : {
			naviView : 'navigationview',

			exampleList : 'examplelist',

			exampleTemplate : 'template',
			exampleTemplateHtml : 'template container[cssClass=func_fillMe]',

			rubyButton : 'template button[action=showRubyCode]',
			javascriptButton : 'template button[action=showJavascriptCode]'
		},

		control : {
			exampleList : {
				itemtap : 'loadTemplateForExample'
			},

			rubyButton : {
				tap : 'showRuby'
			},

			javascriptButton : {
				tap : 'showJS'
			}
		}
	},

	loadTemplateForExample : function(scope, index, target, record) {
		var xtypeToLoad = record.get('xtypeToLoad');
		var controller = this;

		var exampleTemplate = this.getNaviView().push({
			xtype : 'template'
		});

		Ext.Ajax.request({
			url : 'resources/examples/' + xtypeToLoad + "/" + xtypeToLoad + '.js',

			success : function(response) {
				exampleTemplate.down('button[action=showJavascriptCode]').setDisabled(false);
				exampleTemplate.setJsCode("<PRE>" + response.responseText + "<PRE>");
			},

			failure : function() {
				exampleTemplate.down('button[action=showJavascriptCode]').setDisabled(true);
			}
		});

		Ext.Ajax.request({
			url : 'resources/examples/' + xtypeToLoad + "/" + xtypeToLoad + '.rb',

			success : function(response) {
				var rubyText = "<PRE>" + response.responseText + "</PRE>";

				exampleTemplate.down('button[action=showRubyCode]').setDisabled(false);
				exampleTemplate.set('rubyCode', rubyText);
			},

			failure : function() {
				exampleTemplate.down('button[action=showRubyCode]').setDisabled(true);
			}
		});
	},

	showRuby : function() {
		console.log("SHOW RUBY!");

		var etHTML = this.getExampleTemplateHtml();
		var rubyCode = this.getExampleTemplate().get('rubyCode');

		console.log(etHTML, rubyCode);
		etHTML.setHtml(rubyCode);
	},

	showJS : function() {

	}
});