/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
// import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
// import Table from '@ckeditor/ckeditor5-table/src/table';
// import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
// import ClipboardObserver from '@ckeditor/ckeditor5-clipboard/src/clipboardobserver';
import Enter from '@ckeditor/ckeditor5-enter/src/enter';
// import EnterCommand from '@ckeditor/ckeditor5-enter/src/entercommand';
// import EnterObserver from '@ckeditor/ckeditor5-enter/src/enterobserver';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';

export default class ClassicEditor extends ClassicEditorBase {
}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Underline,
	BlockQuote,
	// CKFinder,
	EasyImage,
	Heading,
	Alignment,
	Image,
	ImageResize,
	// ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	// MediaEmbed,
	Paragraph,
	PasteFromOffice,
	// Table,
	// TableToolbar,
	FontFamily,
	FontSize,
	FontColor,
	Clipboard,
	Enter,
	HtmlEmbed

];

// Editor configuration.
ClassicEditor.defaultConfig = {
	fontFamily: {
		options: [
			'default',
			'Ubuntu', 'Arial', 'sans-serif',
			'Ubuntu Mono', 'Courier New', 'Courier', 'monospace'
		]
	},
	fontSize: {
		options: [
			9,
			11,
			13,
			'default',
			17,
			19,
			21
		]
	},
	fontColor: {
		colors: [
			{
				color: 'hsl(0, 75%, 60%)',
				label: 'Red'
			},
			{
				color: 'hsl(30, 75%, 60%)',
				label: 'Orange'
			},
			{
				color: 'hsl(60, 75%, 60%)',
				label: 'Yellow'
			},
			{
				color: 'hsl(90, 75%, 60%)',
				label: 'Light green'
			},
			{
				color: 'hsl(120, 75%, 60%)',
				label: 'Green'
			}, {
				color: 'hsl(0, 0%, 0%)',
				label: 'Black'
			},
			{
				color: 'hsl(0, 0%, 30%)',
				label: 'Dim grey'
			},
			{
				color: 'hsl(0, 0%, 60%)',
				label: 'Grey'
			},
			{
				color: 'hsl(0, 0%, 90%)',
				label: 'Light grey'
			},
			{
				color: 'hsl(192, 96%, 20%)',
				label: 'Teal'
			}
		]
	},
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'fontSize',
			'fontColor',
			'fontFamily',
			'alignment:left', 'alignment:right', 'alignment:center', 'alignment:justify',
			'|',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'blockQuote',
			'htmlEmbed',
			// 'insertTable',
			// 'mediaEmbed',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight'
			// 'imageStyle:full',
			// 'imageStyle:side',
			// 'imageStyle:alignLeft',
			// 'imageStyle:alignCenter',
			// 'imageStyle:alignRight',
			// '|',
			// 'imageTextAlternative'
		],
		styles: [
			// This option is equal to a situation where no style is applied.
			'full',
			// This represents an image aligned to the left.
			'alignLeft',
			// This represents an image aligned to the right.
			'alignRight'
		]
	},
	htmlEmbed: {
		showPreviews: true
		// sanitizeHtml: (inputHtml) => {
		// 	// Strip unsafe elements and attributes, e.g.:
		// 	// the `<script>` elements and `on*` attributes.
		// 	const outputHtml = sanitize(inputHtml);
		//
		// 	return {
		// 		html: outputHtml,
		// 		// true or false depending on whether the sanitizer stripped anything.
		// 		hasChanged: true
		// 	};
		// }
	},

	// table: {
	// 	contentToolbar: [
	// 		'tableColumn',
	// 		'tableRow',
	// 		'mergeTableCells'
	// 	]
	// },
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

// cd ~/sources/ckeditor5-build-classic
// nvm use 12
// yarn run build
// cp -r build/ ../../sources/survale/survale-fe/customer-portal/node_modules/@ckeditor/ckeditor5-build-classic/build
