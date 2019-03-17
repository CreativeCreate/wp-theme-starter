/**
 * WPGulp Configuration File
 *
 * 1. Edit the variables as per your project requirements.
 * 2. In paths you can add <<glob or array of globs>>.
 *
 * @package WPGulp
 */

// themename
const 	themeName= 'wp2',
		const_publicSRC= './'+themeName+'/';

module.exports = {


	// roots
	devSRC   : './_dev/',
	publicSRC: const_publicSRC,
	assetsSRC: './_dev/assets/',

	// Project options.
	projectURL: 'localhost/wp2', // Local project URL of your already running WordPress site. Could be something like wpgulp.local or localhost:3000 depending upon your local WordPress setup.
	productURL: './wp2', // Theme/Plugin URL. Leave it like it is, since our gulpfile.js lives in the root folder.
	browserAutoOpen: true,
	injectChanges: true,

	// Style options.
	styleSRC: './_dev/assets/sass/style.scss', // Path to main .scss file.
	styleDestination: const_publicSRC+'', // Path to place the compiled CSS file. Default set to root folder.
	outputStyle: 'compact', // Available options → 'compact' or 'compressed' or 'nested' or 'expanded'
	errLogToConsole: true,
	precision: 10,

	// JS Vendor options.
	jsVendorFolder: './_dev/assets/js/vendor/', // Path to JS vendor folder.
	jsVendorSRC: './_dev/assets/js/vendor/*.js', // Path to JS vendor folder.
	jsVendorDestination: const_publicSRC+'js/', // Path to place the compiled JS vendors file.
	jsVendorFile: 'vendor', // Compiled JS vendors file name. Default set to vendors i.e. vendors.js.

	// JS Custom options.
	jsSRC: './_dev/assets/js/', // Path to JS custom scripts folder.
	jsCustomSRC: './_dev/assets/js/custom/*.js', // Path to JS custom scripts folder.
	jsCustomDestination: const_publicSRC+'js/', // Path to place the compiled JS custom scripts file.
	jsCustomFile: 'custom', // Compiled JS custom file name. Default set to custom i.e. custom.js.

	// Images options.
	imgRoot: './_dev/assets/images/',
	imgSRC: [	'./_dev/assets/images/*.{png,jpg,gif,svg}', 
				'./_dev/assets/images/mockup-assets/*.{png,jpg,gif,svg}',
				'./_dev/assets/images/ui-assets/*.{png,jpg,gif,svg}'
			], 

	imgDST: const_publicSRC+'images/', // Destination folder of optimized images. Must be different from the imagesSRC folder.

	// Watch files paths.
	watchStyles: './_dev/assets/sass/**/*.scss', // Path to all *.scss files inside css folder and inside them.
	watchJsVendor: './_dev/assets/js/vendor/*.js', // Path to all vendor JS files.
	watchJsCustom: './_dev/assets/js/custom/*.js', // Path to all custom JS files.
	watchJs_s: './_dev/assets/js/*.js', // Path to all custom JS files.
	watchPhp: './_dev/**/*.php', // Path to all PHP files.
	watchImg: './_dev/assets/images/**/*', // Path to all img files.

	// Translation options.
	textDomain: 'WPGULP', // Your textdomain here.
	translationFile: 'WPGULP.pot', // Name of the translation file.
	translationDestination: const_publicSRC+'languages', // Where to save the translation files.
	packageName: 'WPGULP', // Package name.
	bugReport: 'https://creativecreate.com', // Where can users report bugs.
	lastTranslator: 'Creative Create LLC<info@creativecreate.com>', // Last translator Email ID.
	team: 'Creative Create LLC<info@creativecreate.com>', // Team's Email ID.

	// Browsers you care about for autoprefixing. Browserlist https://github.com/ai/browserslist
	// The following list is set as per WordPress requirements. Though, Feel free to change.
	BROWSERS_LIST: [
		'last 2 version',
		'> 1%',
		'ie >= 11',
		'last 1 Android versions',
		'last 1 ChromeAndroid versions',
		'last 2 Chrome versions',
		'last 2 Firefox versions',
		'last 2 Safari versions',
		'last 2 iOS versions',
		'last 2 Edge versions',
		'last 2 Opera versions'
	]
};
