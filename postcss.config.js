module.exports = {
    plugins: [
	    require('stylelint'),
	    require('postcss-import')({
	    	plugins: [
	    		require('stylelint')
	    	]
	    }),
		require('postcss-browser-reporter')({
			styles: {
				'position': 'fixed',
				'left': '0',
				'top': '0',
				'width': '100%',
				'display': 'block',
				'padding': '30px',
				'font-family': 'Open Sans, Helvetica, Arial, sans-serif',
			    'white-space': 'pre-wrap',
			    'line-height': '1.5em',
				'color': '#fff',
				'text-shadow': 'none',
				'background-image': 'linear-gradient(135deg, #d63031 0%, #ee5253 100%)'
			}
		}),
        require('postcss-cssnext'),
        require('cssnano')
    ]
}