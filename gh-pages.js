import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/sftsk/ll-party.git', // Update to point to your repository
		user: {
			name: 'Lukas Jakob Hafner', // update to use your name
			email: 'luki@booncon.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
