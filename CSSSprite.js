var fs = require('fs');
var postcss = require('postcss');
var sprites = require('postcss-sprites');

var _ = process.argv.splice(2),
	appname = _[0];

var css = fs.readFileSync('./style/'+ appname +'.css', 'utf8');
var opts = {
	stylesheetPath: './dist',
	spritePath: './dist/'+ appname +'/'
};

postcss([sprites(opts)])
.process(css, {
	from: './style/' + appname + '.css',
	to: './dist/' + appname + '.css'
})
.then(function(result) {
	fs.writeFileSync('./dist/' + appname + '.css', result.css);
});