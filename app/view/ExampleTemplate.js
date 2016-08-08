/**
 * ExampleTemplate.js
 * 
 * This is the template view to be populated with specific examples. When
 * displayed it should enable/disable the buttons appropriate for the types of
 * code snippet set in the 'rubyCode' and 'jsCode' properties.
 */

Ext.define('JavascriptShowcase.view.ExampleTemplate', {
	extend : 'Ext.Container',
	alias : 'widget.template',

	config : {
		layout : 'fit',
		rubyCode : undefined,
		jsCode : undefined,

		items : [ {
			// The container to be filled with the example code.
			xtype : 'container',
			layout : 'fit',
			scrollable : true,
			cssClass : 'func_fillMe',
			html : 'Select a View'
		}, {
			// A toolbar containing the buttons for controlling what to populate
			// the container with.
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
			} ]
		} ]
	}
});