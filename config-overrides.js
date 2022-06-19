const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
	alias({
		"@components": "src/components",
		"@img": "src/img",
		"@svg": "src/svg",
		"@functions": "src/helpers/functions/functions.js",
		"@hooks": "src/helpers/hooks/hooks.js",
		"@store": "src/helpers/context/store.js",
		"@utils": "src/helpers/utisl",
		"@pages": "src/pages",
	})(config);

	return config;
};
