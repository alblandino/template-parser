'use strict';

// load dependencies
var fs 	 = require('fs');
var path = require('path');
var template = require('handlebars');

// define variables
var hbs;
var root;
var json;
var options;
var content;
var hbs_content;
var json_content;
var default_options;

// definition parse method
function parse($template, $options){
	options = $options || {};
	if(typeof options != 'object'){
		throw new Error('In the object parameter an object expected');
	}
	root = require('path').dirname(require.main.filename);
	default_options = {
		hbs_dir  		: options.hbs_dir  		|| 'hbs',
		json_dir 		: options.json_dir 		|| 'json',
		template_dir  	: options.template_dir  || 'templates',
	};
	hbs = [default_options.template_dir,'/',default_options.hbs_dir,'/',$template + '.hbs'].join('');
	hbs_content = fs.readFileSync(hbs).toString();
	json = [default_options.template_dir,'/',default_options.json_dir,'/',$template + '.json'].join('');
	json_content = JSON.parse(fs.readFileSync(json).toString());
	content = template.compile(hbs_content);
	return content(json_content);
}
// export
module.exports.parse = parse;