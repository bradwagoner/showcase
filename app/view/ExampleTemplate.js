Ext.define('JavascriptShowcase.view.ExampleTemplate', {
	extend : 'Ext.Container',
	alias : 'widget.template',

	config : {
		layout : 'fit',
		rubyCode : undefined,
		jsCode : undefined,

		items : [ {
			xtype : 'container',
			layout : 'fit',
			scrollable : true,
			cssClass : 'func_fillMe',
			html : 'Select a View'
		}, {
			xtype : 'toolbar',
			docked : 'bottom',

			defaults : {
				xtype : 'button'
			},

			items : [ {
				text : 'Ruby',
				action : 'showRubyCode'
			}, {
				text : 'JS',
				action : 'showJavascriptCode'
			}, {
				text : 'Run Code',
				action : 'showExecution'
			} ]
		} ]
	}
});