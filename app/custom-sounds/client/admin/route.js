import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/admin/custom-sounds', {
	name: 'custom-sounds',
	subscriptions(/* params, queryParams*/) {
		this.register('customSounds', Meteor.subscribe('customSounds'));
	},
	async action(/* params*/) {
		await import('./views');
		BlazeLayout.render('main', { center: 'adminSounds' });
	},
});
