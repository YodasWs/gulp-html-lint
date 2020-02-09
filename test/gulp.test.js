'use strict';

const gulp = require('gulp');

const plugins = {
	lintHTML: require('../index.js'),
	newFile: require('gulp-file'),
};

const options = {
	lintHTML: {
		useHtmllintrc: false,
		rules: {
			'attr-name-style': 'dash',
			'attr-no-dup': true,
			'attr-req-value': false,
			'class-no-dup': true,
			'class-style': 'dash',
			'doctype-html5': true,
			'fig-req-figcaption': false,
			'head-req-title': true,
			'head-valid-content-model': true,
			'html-req-lang': true,
			'id-class-style': 'dash',
			'id-no-dup': true,
			'img-req-alt': true,
			'img-req-src': true,
			'indent-style': 'tabs',
			'indent-width-cont': true,
			'input-radio-req-name': true,
			'input-req-label': true,
			'label-req-for': true,
			'line-end-style': 'lf',
			'spec-char-escape': false, // buggy, no need to escape & in URL queries
			'table-req-caption': false,
			'table-req-header': false, // buggy, see https://github.com/htmllint/htmllint/issues/197
			'tag-bans': [
				'acronym', 'applet', 'basefont', 'big', 'blink', 'center', 'font', 'frame', 'frameset', 'isindex', 'noframes', 'marquee',
				'style',
			],
			'tag-close': false,
			'tag-name-lowercase': true,
			'tag-name-match': true,
			'tag-self-close': false,
			'title-no-dup': true,
		},
	},
};

plugins.newFile('index.html', `<!DOCTYPE html>
<html lang="en">
<head>
<title>Test</title>
</head>
<body>
</body>
</html>`, { src: true })
	.pipe(plugins.lintHTML(options.lintHTML))
	.pipe(plugins.lintHTML.format());
