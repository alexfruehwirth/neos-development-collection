/**
 * Application view for the main ember application
 */
define(
[
	'emberjs',
	'text!./ApplicationView.html',
	'./Components/NavigationToolbar',
	'./Components/TreePanel',
	'./Inspector/InspectorButton',
	'./Inspector/Inspector',
	'./Inspector/SecondaryInspectorView',
	'./../InlineEditing/InlineEditingHandles',
	'./../InlineEditing/InsertNodePanel'
],
function(
	Ember,
	template,
	NavigationToolbar,
	TreePanel,
	InspectorButton,
	Inspector,
	SecondaryInspectorView,
	InlineEditingHandles,
	InsertNodePanel
) {
	return Ember.View.extend({
		NavigationToolbar: NavigationToolbar,
		InspectorButton: InspectorButton,
		Inspector: Inspector,
		SecondaryInspectorView: SecondaryInspectorView,
		TreePanel: TreePanel,
		InlineEditingHandles: InlineEditingHandles,
		InsertNodePanel: InsertNodePanel,
		template: Ember.Handlebars.compile(template)
	});
});