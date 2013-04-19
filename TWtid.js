/***
!! Note
* @@color:red;This is a development snapshot which may or may not function properly.@@

|editable|k
|''Name:''|TWtid|
|''Description:''|Base plugin for TWted and TWtcalc.|
|''Author:''|Vincent Yeh (qmo.wcy2@gmail.com)|
|''Source:''|* (minimized) http://twtable.tiddlyspace.com/#TWtid.min <br>* (regular) http://twtable.tiddlyspace.com/#TWtid|
|''Type''|plugin|
|''Version:''|1.6.3|
|''Status:''|This plugin is still under development.<br>You are welcome to try and send feedback. :-)|
|''Date:''|2012/10/19 released 1.4.0<br>2012/09/04 started from TableEditor 1.3.0|
|''License:''|Same as TiddlyWiki|
|''Core Version:''|2.6.5|

!!Features:
* Advanced table renderer/formatter for TiddlyWiki.
* Single-line and multi-line cell content rendering.
** Option chkTWtidMultiLine to toggle multi-line rendering mode.
* Variable minimum cell width.
** Option txtTWtidMinCellWidth stores the minimum cell width.
* Variable view port for tables.
** Options txtTWtidMaxWidth and txtTWtidMaxHeight to speficy the max width/height of table view port.
** Oversized tables are scrollable.
** First few rows/columns can be fixed from scrolling.
*** Options txtTWtidFixRows and txtTWtidFixCols to specify the first few rows/cols to stay fixed when scrolling.
* A "C" button for easy configuration.
* Tansposition of table.
** Option chkTWtidTranspose to toggle transposition feature.
* Synchronizd rendering for multiply transcluded copies of the same tiddler.

!!Todo:

!!Usage:
* Just install the plugin and that's it.

!!Options
Click the {{{C}}} button for related options.
----
>@@color:red;Not yet complete.@@
><<option chkTWtidFixedColWidth>> Fix the column width for tables.

!!Example:

!!!Revision history
* 2013/04/20 [1.6.3]
** Bug fixes for the flying borders.
* 2013/04/19 [1.6.2]
** Bug fixes for incorrect list item identification.
*** The {{{tag labels}}} of a tiddler are displayed as __list items__ in the small {{{tags:}}} box at the top-right corner of a tiddler. These are affecting the identification of the list items in the tiddler content. ''Fixed by removing them in the searching codes''.
** Supports for IE10.
** Bug fixes for incorrect positioning with ~TiddlySpace. See http://twtable.tiddlyspace.com/#%5B%5BPositioning%20Issue%3A%20Where%20is%20the%20mighty%20mouse%3F%5D%5D for details.
** Bug fixes for {{{Error in macro <<tiddler>>}}}, {{{<<tabs>>}}}, and {{{<<slider>>}}} when the transcluded tiddler does not exist.
* 2013/04/15 [1.6.1]
** Bug fixes for locating list items.
* 2013/04/14 [1.6.0]
** Much improved transclusion support (synchronization implemented for some cases).
** Locates plain text in a tiddler.
** Locates section text, non-transcluded, folded with FoldHeadingsPlugin, or transcluded with {{{<<tiddler>>}}}, {{{<<tabs>>}}}, {{{<<slider>>}}} system macros.
*** Correctly locates wiki text even for sections with the same title (header text) in the same tiddler.
** Options tiddler now available in the system Options panel.
** Bug fixes for refreshing part of a tiddler.
* 2013/02/09 [1.5.0]
** Bug fixes for partial transclusion synchronization.
** Generalized the codes to support most kinds of block elements, such as table, lists, headers, blockquotes, etc.
** Bug fix for refreshing a partially transcluded content.
** Bug fix for locating a missing cell.
* 2012/12/0x [1.4.7]
** Buttons are not always shown, instead they are shown when mouse is inside a table or the table is in edit mode.
** Bug fixes for closed sliders.
*** Sliders created by {{{<<slider>>}}} or {{{<<foldHeadings>>}}} can be closed at rendering stage. If so, their containing tables would have zero height, resulting in wrong behavior in TWtid.
** Bug fixes for self partial transclusion -- including part of a tiddler into another part of itself. Thanks to Yakov for brining up this issue.
** Exclude IE7 and IE8 from the resiz/zoom event for they keep re-rendering forever.
*** Maybe exclude all IE versions < 9?
* 2012/11/23 [1.4.6]
** Re-render tables upon resizing/zooming the content for non-hand-held devices.
*** Table dimensions were not correct with TWtid after resizing or zooming the window, therefore some codes were added to take care of this. 
*** However, browsers in hand-held devices, such as {{{TWEdit for the iOS}}} and {{{AndTidWiki for Android}}}, may produce too many resize events upon zooming, causing too much refreshing of the content, so these codes are not executed for hand-held devices.
** Bug fixes for multiline rendering.
** Bug fixes for transclusion synchronization.
* 2012/11/17 [1.4.5]
** Better transclusion support.
*** Added support for {{{partial transclusion}}}.
**** This seems to work with my limited test cases.
*** Added support for {{{<<slider ...>>}}} macro.
**** Tables transcluded with {{{<<slider ...}}} macro are synchronized with all their corresponding copies, transcluded or not.
**** Raised z-index of the options table so it is not blocked in a {{{<<slider ...>>}}} transcluded tiddler.
***** It still gets blocked in IE.
** Better alignment for fixed rows/columns.
*** Correct vertical alignment of cell content in fixed rows/columns.
*** Good alignment for fixed rows/columns in some browsers.
**** See [[Table_Cell_Alignment|http://twtable.tiddlyspace.com/#Table_Cell_Alignment]] for details.
** Shifted the time, from after to before {{{prepare_table()}}}, of explicitly refreshing the tables for sorting purposes, in order to correctly resume the sorting feature with {{{TableSortingPlugin}}} after closing the options table.
** Auto-adjust fixed rows/columns when MathJax is done rendering the math.
* 2012/11/09 [1.4.4]
** Raised z-index of TWtid related buttons over the caption text so they don't get blocked by a long caption.
*** But they will block the end parts of a long caption...
** Explicitly exclude shadowed tiddlers.
** Improved alignment for fixed rows/columns in Safari and Opera
*** FireFox and Chrome are fine in most cases.
*** IE could be slightly off in some cases.
** Tests validity of tiddlers before some actions.
** A couple of more bugs fixed for sorting with {{{TableSortingPlugin}}} when there are fixed rows/columns.
* 2012/11/02 [1.4.3]
** Bug fix for missing backstage and blocking of {{{saveChanges()}}}.
*** The missing backstage happens for TW files that start with the default {{{GettingStarted}}} tiddler or any other {{{shadowed tiddlers}}}, because TWtid does not touch any shadowed tiddlers. It doesn't even try to find it, which resulted in a {{{null}}} value for a shadowed tiddler and then an exception thrown when TWtid is retrieving its title (to find its containing DOM element). If this happened when loading the {{{DefaultTiddler}}} then the backstage, which comes up after that, would have got no chance to load up.
*** I did not notice this because it did not happen to my own minimal test file, which does not start with any of the shadowed tiddlers. __But this should have happened since transclusion synchronization was implemented. Why it did not? Or it did?__
** Some more bug fixes for sorting with {{{SortableGridPlugin}}} and {{{TableSortingPlugin}}}.
*** These bugs were partly introduced in codes to fix rows/columns and the code splitting. __Hope there are not much left__...
** Changed back to normal font size for table caption.
* 2012/10/26 [1.4.2-1]
** Removed the codes of my own use in the {{{go()}}} function, which now only hides the edit buttons when taking a snapshot with {{{SnapShotPlugin}}} (without hiding the {{{save a snapshot}}} button and changing the defaultFileName).
* 2012/10/26 [1.4.2]
** Bug fixes for working with MathJaxPlugin
** Hijacks SnapShotPlugin's go() function to, upon taking a snapshot,
*** hide buttons (edit buttons and the {{{save a snapshot}}} button), and
*** replace the defaultFilename with {{{tiddler title}}}(mmdd).html.
** Removed unused function table_caption().
* 2012/10/21 [1.4.1]
** Bug fixes for configuration functions
*** Increased z-index of options table so it shows up over other elements.
*** Ensured consistent position of 'C' button in each copy of the same multiply transcluded tiddler.
** Hijacked Popup.show() function to allow editable tables in a popup window, such as the options popup.
** Minor bug fixes for tiddlers mxing non-transcluded and transcluded copies.
** Minor modifications to the prepare_table() function.
such as the TWtid configuration popup.
* 2012/10/19 [1.4.0]
** Separated from TableEditor.
** Restructured to better fit the separated code structure.
** Keeps the 'C' button for easy configuration at all times without affecting the SyntaxHighliterPlugin3.
** Synchronized rendering on scrolling event for multiply transcluded copies of the same tiddler. See http://twtable.tiddlyspace.com/#TWtid--Example--Synchronization for example.
** Bug fixes for fixed rows/columns:
*** better alignment in Chrome/FireFox/Safari;
*** fixed the {{{no-sorting-with-fixed-header}}} bug.
** Bug fixes to work with MathJax:
*** correctly locate the tiddlers with a math-containing title;
*** correctly render math-containing table captions;
*** correctly obtain the width of math-containing table cells by switching from refreshTiddler() core function to displayTiddler(), which the MathJax plugin hijacks to render math expressions.
* 2012/09/03 [1.3.0]
** Started separating codes from TableEditor 1.3.0.
* For earlier history please see [[TableEditor]] or [[its external link|http://twtable.tiddlyspace.com/#TableEditor]].

!!!Code
***/

//{{{
config.extensions.TWtid = {major: 1, minor: 6, revision: 3, date: new Date('2013/04/20')};

// Macro for initialization
config.macros.TWtid = {
	init: function(){
		if ( config.options.chkTWtidEnabled===undefined )
			config.options.chkTWtidEnabled =
				(config.options.chkTWtableEnabled===undefined ? true
				: config.options.chkTWtableEnabled);
		if ( config.options.txtTWtidMinCellWidth===undefined )
			config.options.txtTWtidMinCellWidth =
				(config.options.txtTWtableMinCellWidth===undefined?'8':
				config.options.txtTWtableMinCellWidth);
		if ( config.options.txtTWtidMaxWidth===undefined )
			config.options.txtTWtidMaxWidth =
				(config.options.txtTWtableMaxWidth===undefined?'100%':
				config.options.txtTWtableMaxWidth);
		if ( config.options.txtTWtidMaxHeight===undefined )
			config.options.txtTWtidMaxHeight =
				(config.options.txtTWtableMaxHeight===undefined?'5000px':
				config.options.txtTWtableMaxHeight);
		if ( config.options.chkTWtidMultiLine===undefined )
			config.options.chkTWtidMultiLine =
				(config.options.chkTWtableMultiLine===undefined?false:
				config.options.chkTWtableMultiLine);
		if ( config.options.txtTWtidFixRows===undefined )
			config.options.txtTWtidFixRows =
				(config.options.txtTWtableFixRows===undefined?'0':
				config.options.txtTWtableFixRows);
		if ( config.options.txtTWtidFixCols===undefined )
			config.options.txtTWtidFixCols =
				(config.options.txtTWtableFixCols===undefined?'0':
				config.options.txtTWtableFixCols);
		if ( config.options.txtTWtidSnapshotFile===undefined )
			config.options.txtTWtidSnapshotFile =
				(config.options.txtTWtableSnapshotFile===undefined?'':
				config.options.txtTWtableSnapshotFile);
		if ( config.options.chkTWtidSnapshotHideBtn===undefined )
			config.options.chkTWtidSnapshotHideBtn =
				(config.options.chkTWtableSnapshotHideBtn===undefined?false:
				config.options.chkTWtableSnapshotHideBtn);
		if ( config.options.chkTWtidTranspose===undefined )
			config.options.chkTWtidTranspose =
				(config.options.chkTWtableTranspose===undefined?false:
				config.options.chkTWtableTranspose);
		if ( config.options.chkTWtidFixedColWidth===undefined )
			config.options.chkTWtidFixedColWidth =
				(config.options.chkTWtableFixedColWidth===undefined?false:
				config.options.chkTWtableFixedColWidth);

		merge ( config.optionsDesc, {
			chkTWtidEnabled:'Enable ~TWtid.',
			txtTWtidMinCellWidth:'Minimum cell width in characters. Default value is 8.',
			txtTWtidMaxWidth:'Maximum view port width for tables. Wider tables are scrollable. Default is 100% of that of the parent element.',
			txtTWtidMaxHeight:'Maximum view port height for tables. Higher tables are scrollable. Default is 500px.',
			chkTWtidMultiLine:'Multi-line rendering mode. Default is false.',
			txtTWtidFixRows:'(unstable) Fix the first few rows. The number of first rows, including the header row, to fix at the top of table (so they do not scroll). Default is 0.',
			txtTWtidFixCols:'(unstable) Fix the first few columns. The number of first columns to fix at the left side of table (so they do not scroll). Default is 0.',
			txtTWtidSnapshotFile:'Snapshot file name. Empty string to use the default of SnapshotPlugin, "tiddler.title" to use the tiddler title.',
			chkTWtidSnapshotHideBtn:'Hide buttons when taking a snapshot. Check to hide all the TWtid buttons and the Snapshot button.',
			chkTWtidTranspose:'Enable transposition.',
			chkTWtidFixedColWidth:'(Incomplete) Fix the column width for tables. If true, the option txtTWtidMinCellWidth will be used as the fixed column width (in characters). Otherwise column widths would be variable, with a minimum given in the option txtTWtidMinCellWidth.'
		} );

		//TWtid.pre_elementFromPoint = document.elementFromPoint;
		//document.elementFromPoint = TWtid.elementFromPoint;

		TWtid.pre_popup_show = Popup.show;
		Popup.show = TWtid.popup_show;

		TWtid.pre_refreshTiddler = story.refreshTiddler;
		story.refreshTiddler = TWtid.refreshTiddler;

		//TWtid.pre_saveChanges = saveChanges;
		//saveChanges = TWtid.saveChanges;

		// Macro <<tabs ...>> is not using story.refreshTiddler() to
		// render contents upon switching tabs, so tables inside don't
		// get a chance to reformat. Hijack the function here to take
		// care of tab switching.
		TWtid.pre_tabs_switchTab = config.macros.tabs.switchTab;
		config.macros.tabs.switchTab = TWtid.tabs_switchTab;

		// Macro <<tiddler ...>> is not storing tiddler.title anywhere,
		// leaving this plugin no way but hijacking its transclude()
		// function to find it.
		TWtid.pre_tiddler_transclude = config.macros.tiddler.transclude;
		config.macros.tiddler.transclude = TWtid.tiddler_transclude;

		// Macro <<slider ...>> directly calls wikify() in its handler,
		// which does not go through refreshTiddler() function so the
		// TWtid is not able to prepare tables loaded with this macro.
		TWtid.pre_slider_handler = config.macros.slider.handler;
		config.macros.slider.handler = TWtid.slider_handler;
		TWtid.pre_onClickSlider = config.macros.slider.onClickSlider;
		config.macros.slider.onClickSlider = TWtid.onClickSlider;

		if ( config.macros.snapshot ) {
			TWtid.pre_go = config.macros.snapshot.go;
			config.macros.snapshot.go = TWtid.go;
		}

		config.browser.isIE10 =
			(config.userAgent.indexOf('msie 10.')>=0);
		config.browser.isIE9 =
			(config.userAgent.indexOf('msie 9.')>=0);
		config.browser.isIE975 =
			((config.userAgent.indexOf('msie 7.')>=0)
				&& (config.userAgent.indexOf('trident/5')>=0));
		config.browser.isIE8 =
			(config.userAgent.indexOf('msie 8.')>=0);
		config.browser.isIE874 =
			((config.userAgent.indexOf('msie 7.')>=0)
				&& (config.userAgent.indexOf('trident/4')>=0));
		if ( config.browser.isIE &&
				! (config.browser.isIE10
						|| config.browser.isIE9
						|| config.browser.isIE975
						|| config.browser.isIE8
						|| config.browser.isIE874 ) )
			displayMessage('TWtid message: Unsupported IE version.\n\n '
									+config.userAgent
									+'\n\nPlease inform the author at'
									+' qmo.wcy2@gmail.com. Thanks.'
								);
		config.browser.isWin7 = (config.userAgent.indexOf('nt 6.1')>=0);
		config.browser.isWinXP = (config.userAgent.indexOf('nt 5.1')>=0);
		// Andtidwiki would be recognized as Safari on linux and android. 
		config.browser.isAndroid = (config.userAgent.indexOf('android')>=0);
		config.browser.isiOS = (
			config.userAgent.indexOf('mac')
			> config.userAgent.indexOf('ip')
		);

		jQuery(window).resize(function(ev){
			ev = ev || window.event;
			TWtid.resize(ev);
		});

		var txt = config.shadowTiddlers['OptionsPanel'];
		var p = txt.indexOf('----');
		config.shadowTiddlers['OptionsPanel']=
			txt.substring(0,p)
			+'----\n'
			+'TWtidOptions\n'
			+txt.substring(p);

		merge(config.shadowTiddlers,{
			'TWtidOptions':'<<TWtidOptions>>'
		});
	}
};

// Macro for option settings.
config.macros.TWtidOptions = {
	order : {
		chkTWtidEnabled:0,
		txtTWtidMinCellWidth:1,
		txtTWtidMaxWidth:2,
		txtTWtidMaxHeight:3,
		chkTWtidMultiLine:4,
		txtTWtidFixRows:5,
		txtTWtidFixCols:6,
		txtTWtidSnapshotFile:7,
		chkTWtidSnapshotHideBtn:8,
		chkTWtidTranspose:9,
		chkTWtidFixedColWidth:10
	},

	options_changed : function ($viewer,wt) {
		$viewer.each(function(n,v){
			wt = TWtid.wrapper_tiddler(jQuery(v));
			TWtid.refresh_wrapper(wt,true);
		});
	},
	collect_options : function (key, order) {
		// Collect TWtid options.
		var n, ttopts = [];
		for ( n in config.options ) {
			if ( n.indexOf(key)>=0
					&& config.optionsDesc[n] ) {
				ttopts.push('\n|<<option '+n+'>>|'+
					config.optionsDesc[n].split('.')[0]+'. |');
			}
		}
		// Sort them according to that defined in option_order[].
		if ( order )
			ttopts.sort(function(a,b){
				var ka=a.substring(a.indexOf(' ')+1,a.indexOf('>>')),
					kb=b.substring(b.indexOf(' ')+1,b.indexOf('>>'));
				return order[ka] > order[kb] ? 1 : -1;
			});
		return ttopts;
	},
	prepare_options_table : function (cap,key,order) {
		var opts = '|'+cap+'|c'+'\n| Value | Description |h';
		var ttopts = this.collect_options(key, order);
		jQuery.each(ttopts, function(n,item){
			opts += item;
		});
		return opts;
	},
	show_options_table : function (place, cap, key, order) {
		var $div_opt = jQuery('<div></div>').appendTo(place);
		var opts = this.prepare_options_table(cap,key,order);
		// Render the table.
		wikify ( opts, $div_opt[0] );
		// Adjust width
		$div_opt.find('table input').css('width','5em');
	},
	handler : function(place,macroName,params,wikifier,paramString) {
		// Collect all the TWtid options for users to play with.
		config.macros.TWtidOptions.show_options_table(
			place
			,'TWtid Options'
			,'TWtid'
			,this.order
		);
	}
};
//}}}

// //TWtid
//{{{
TWtid = {
	index_string : function (ndx) {
		return '('+ndx.rIndex+','+ndx.dIndex+')';
	},
	table_changed : function (what, param, wt) {},
	start_sorting : function($table,ndx,wt) {
		return true;
	},
	sortTable : null,
	ts_resortTable : null,
	sorting_enabled : function() {
		return (this.sortTable != null)
				|| (this.ts_resortTable != null);
	},
	sort : function (o, rev) {
		var $table, $cell, $c_fixed = null,
			nr = config.options.txtTWtidFixRows*1;
			nc = config.options.txtTWtidFixCols*1;
		switch ( o.nodeName ) {
			case 'A' :		// SortableGridPlugin
				$cell=(nr || nc)
							? jQuery(o).closest
									('span.tedTfixedHC,span.tedTfixedVC')
							: jQuery(o).parent();
				break;
			default :
				$cell = jQuery( o );
				break;
		}
		if ( $cell.is('.tedTfixedHC,.tedTfixedVC') ) {
			var c = $cell.attr('col')*1;
			$table = $cell.closest('.tedTable').find('table');
			if ( nr || c >= nc ) $c_fixed = $cell;
			$cell = $table.find('tr:first').find('th,td').eq(c);
			o = (o.nodeName=='A'?$cell.find('a')[0]:$cell[0]);
			if ( config.tableSorting
					|| config.macros.sortableGridPlugin ) {
				var $div_t = $table.parent().parent();
				if (nr > 0) {
					$div_t.find('.tedTfixedHR:first .tedTfixedHC span')
							.hide();
				}
				if (nc > 1) {
					$div_t.find('.tedTfixedVR:first .tedTfixedVC span')
							.hide();
				}
			}
		} else {
			$table = TWtid.table_element($cell);
			if ( (config.tableSorting
						||config.macros.sortableGridPlugin)
					&& (nc > 0) )
				$table.parent().parent()
					.find('.tedTfixedVR:first .tedTfixedVC span')
					.hide();
		}
		var wt = TWtid.wrapper_tiddler ( $table );
		var ndx = TWtid.element_index ( $table,wt );
		if ( !TWtid.start_sorting($table,ndx,wt) )
			return;

		// Make a copy of the rows before sorting
		var rows_org = new Array (), r;
		$table.find('tr').each ( function (rn, tr) {
			rows_org[rn] = tr;
		} );

		// Do the sorting and keep the sorting info
		if ( config.tableSorting ) {
			TWtid.sortTable.apply(this,arguments);
		} else if ( config.macros.sortableGridPlugin ) {
			TWtid.ts_resortTable.apply(this,arguments);
		}
		if ( nr > 1 ) {
			TWtid.fix_rows($table, false)
					.fix_rows($table, true, nr);
		}
		if ( nc > 0 ) {
			TWtid.fix_cols($table, false)
					.fix_cols($table, true, nc);
		}
		TWtid.fix_rows_adjust($table, nr);
		if ( $c_fixed ) {
			$c_fixed.find('span:first')
				.html($cell.find('span:first').html())
				.show();
		}
		// Update even or odd row classes.
		$table.find('tr').each(function(r,tr){
			jQuery(tr).removeClass('oddRow').removeClass('evenRow')
				.addClass((r%2?'oddRow':'evenRow'));
		});

		// Retrieve the sorted rows.
		var rows_sorted = new Array ();
		$table.find('tr').each ( function (rn, tr) {
			rows_sorted[rn] = tr;
		} );
		TWtid.init_table_rows($table,false);

		// Reorder the underlying wikitext accordingly.
		var text = wt.tiddler.text.split ( '\n' ),
			sortedtext = new Array (),
			sortedndx = new Array (rows_sorted.length),
			r0 = TWtid.table_first_line(text,ndx,wt.title),
			rl = TWtid.table_last_line ( text, r0 ),
			rs, rowtxt;
		for ( r = 0; r < text.length; r++ )
			sortedtext[r] = text[r];

		// Record change of row indices after sorting
		for ( r = 0; r < rows_org.length; r++ )
			for ( rs = 0; rs < rows_sorted.length; rs++ )
				if ( rows_sorted[rs] == rows_org[r] ) {
					sortedndx[rs] = r;
					if ( rs != r )
						TWtid.table_changed(
							'ROW MOVED'
							,{
								'text':text,
								'first':r0,
								'last':rl,
								'from':r,
								'to':rs
							}
							, wt
						);
					break;
				}

		// Update the sorted text
		for ( rs = 0; rs < sortedndx.length; rs++ ) {
			rs_ndx = TWtid.line_number_of_table_row(text,r0,rs);
			r_ndx = TWtid.line_number_of_table_row
					(text,r0,sortedndx[rs]);
			sortedtext[rs_ndx] = text[r_ndx];
		}
		TWtid.table_changed(
			'SORTED'
			,{
				'table':$table,
				'text':sortedtext,
				'first':r0,
				'last':rl
			}
			, wt
		);
		TWtid.save_text ( wt.tiddler, sortedtext );
	},

	make_table_row : function ( cells ) {
		var c = 1, text = '|';
		while ( c < cells.length-1 )
			text += cells[c++] + '|';
		// Check for the last character, could be h or f
		if ( cells[c] ) text+=cells[c];
		return text;
	},

	row_ref : function ( row ) { return row; },
	col_ref : function ( col ) { return col; },
//}}}
// // Wikitext related functions
//{{{
	elem_first_line : function (text,prefix,ndx,title
									,subprefix,start) {
		// Find the first line of text that defines a block element,
		// such as
		//		paragraphs, tables, lists, headers,
		//		blockquotes,
		//		definition lists, block examples, preformat,
		// each of which has its own defining prefix.
		//		a paragraph starts with a regular word;
		//		a table starts with a (|);
		//		a list starts with either (*) or (#);
		//		a header starts with (!), level 1 to 6;
		//		a blockquote starts with (>), level 1 to 3;
		//		a definition lists starts with a (;) and
		//			ends with a (:)-started line;
		//		a block example starts with (<<<) and
		//			ends with a (>>>)-started line;
		//		a preformat starts with ({{{) and
		//			ends with a (}}})-started line.

		// Before calling this function, either the rendering index
		// or the defining index of the element must be already known.

		// Normally we obtaine the rendering index first, using
		// TWtid.element_index() function, then obtain the defining
		// index through this function. However, upon synchronizing
		// transcluded copies of the same tiddler, we first obtain the
		// rendering index of the element in one of the transcluded copies,
		// then the defining index in the wikitext, and use that defining
		// index to find the rendering index of the corresponding element
		// in other copies.

		// Parameters:
		//		text:			Line-feed splitted wikitext.
		//		prefix:		Prefix that defines a specific block element.
		//							For example, a table should start with a '|',
		//							while a list would start with a '*' or '#'.
		//		ndx:			Index of the element. This ndx should be an object
		//						containing the rendering index (rIndex) and
		//						defining index (dIndex).
		//							For example, ndx = 	{
		//															'rIndex':rndx
		//															, 'dIndex':dndx
		//														}
		//		title:		Title of the wrapper. Would be the tiddler title
		//						for non-transcluded or fully transcluded tiddlers,
		//						or the tiddler title followed by '##' and a
		//						section title for partially transcluded tiddlers.
		//		subprefix:	Prefix that defines the next level element.
		//							For example, a list defined by prefix '*' may
		//							contain sublists defined by subprefix '**'
		//							or '##'.
		//		start:		Line number to start searching.

		var i = (start?start:0)
			, s = this.tiddler_slice(title);
		if ( s ) {
			// Slice, not yet decided what to do
			//while ( ++i < text.length )
			//	if ( text[i].indexOf(s) > -1 )
			//		return text[i].charAt(0) == '|' ? i : -1;
			// Slice not found
			return -1;
		}

		s = this.tiddler_section(title);
		var to_skip = 0;
		if ( s ) {
			to_skip = TWtid.header_to_skip(s);
			if ( to_skip > 0 )
				s = TWtid.remove_header_tail(s);
		}
		var rndx = -1, dndx = -1;
		var started = (!s);
//displayMessage('looking for elem'+TWtid.index_string(ndx)+' in '+title);
		do {
			if ( s && !started && text[i].charAt(0) == '!' ) {
				// There is section name in the title, meaning
				// that section is partially transcluded.

				// If counting of order of appearance has already
				// started and we are seeing another section here,
				// meaning the element is not found within this
				// section. Stop and return -1 (not found);
				//if ( started ) return -1;

				// Start counting the order of appearance
				// of elements if the transcluded section is found.
				if ( text[i].indexOf(s) > -1 ) {
//displayMessage('found '+s+' in '+text[i]);
					if ( to_skip > 0 ) {
						to_skip--;
					} else started = true;
				}
			}
			if ( prefix.test(text[i]) ) {
				// Element defining text, returns it if index matches.
				if ( started ) {
					++dndx;
					++rndx;
					if (ndx.dIndex > -1 ) {
						// Defining index is given
						if ( dndx == ndx.dIndex) {
							// Matched. Assign its rendering index and return
							// the line number.
							ndx.rIndex = rndx;
//displayMessage('elem'+TWtid.index_string(ndx)+' in '+title+' found at line number '+i);
							return i;
						}
					} else if ( ndx.rIndex > -1 ) {
						// Rendering index is given
						if ( rndx == ndx.rIndex ) {
							// Matched. Assign its defining index and return
							// the line number.
							ndx.dIndex = dndx;
							return i;
						}
					} else {
						// Neither of the indices are given.
						// Assume matched. Assign both indices and return
						// the line number.
						ndx.dIndex = dndx;
						ndx.rIndex = rndx;
						return i;
					}
				}
				// Otherwise skip to the end of this element

				// For headers and blockquotes that only occupy one line,
				// there is no need to skip to the end. For other kind
				// of block element we skip to the end of it.

				if ( /^\<\<\w/.test(prefix.source) ) {
					// Macro name
					i = this.macro_last_line(text,i);
				} else if ( prefix.source.indexOf('\\{\\{\\{')>-1
						|| TWtid.preformat_first_line(text[i]) ) {
					i = this.preformat_last_line(text,i+1);
				} else if ( /\{\d\}\[/.test(prefix.source) ) {
					// If this is a list, there can be two types,
					// skip only the current type.
					i = this.list_last_line(
						text,i+1,this.list_prefix(text[i])
					);
				} else if ( prefix.source == '^[\\|]' ) {
					// This is a table
					i = this.table_last_line(text,i+1);
				} else if ( /\{\d,\d\}/.test(prefix.source) ) {
					// Blockquotes
					if ( this.blockexample_first_line(text[i]) )
						i = this.blockexample_last_line(text,i+1);
					else {
						if ( (/^\>{2}/.test(text[i])
								&& ! /^\>{1}/.test(text[i-1]))
							|| (/^\>{3}/.test(text[i])
								&& ! /^\>{2}/.test(text[i-1])) )
							// Blockquotes that do not start with the
							// first level.
							++rndx;
						i = this.blockquote_last_line(text,i);
					}
				}
			} else if ( /\{\d\}\[/.test(prefix.source) ) {
				// For lists not starting from level 1.
				if ( subprefix.test(text[i]) ) {
					++dndx;
					if ( started ) {
						++rndx;
						if (ndx.dIndex > -1 ) {
							if ( dndx == ndx.dIndex) {
								ndx.rIndex = rndx;
								return i;
							}
						} else if ( rndx == ndx.rIndex ) {
							ndx.dIndex = dndx;
							return i;
						}
					}
				}
			}
		} while ( ++i < text.length );
		return -1;
	},
	split_line_text : function ( txt, sep, brackets ) {
		// Split one line of wikitext that contains several items, a table
		// row or an array, for example.
		//
		// Arguments:	txt			The txt to split.
		//				sep			The separator of items
		//				brackets	An array of pairs of opening/closing
		//							brackets that should not split.	

		var result = txt.split (sep), r0 = 0
			, rl = result.length-1, popen, mclose, pclose;
		while ( ! result[r0] && r0 < rl ) r0++;
		while ( ! result[rl] && r0 < rl ) rl--;
		for ( var b = 0; b < brackets.length; b++ ) {
			for ( var i = r0; i < rl; i++ ) {
				if ( ! result[i] ) continue;
				if ((popen=result[i].lastIndexOf(brackets[b].open))==-1)
					continue;
				if ( typeof brackets[b].close == 'string' )
					pclose = result[i].lastIndexOf(brackets[b].close);
				else {
					if ( (mclose=result[i].match(brackets[b].close)) ) {
						pclose = result[i]
								.lastIndexOf(mclose[mclose.length-1]);
					} else pclose = -1;
				}
				if ( popen > pclose ) {
					// Found one part of the text that contains an opening
					// bracket(s), but not its closing counterpart. This is
					// possibly one of the cases mentioned above. If so then
					// the next part may contain the corresponding closing
					// bracket(s).
					if ( typeof brackets[b].close == 'string' )
						pclose = result[i+1].indexOf(brackets[b].close);
					else
						pclose = result[i+1].search(brackets[b].close);
					popen = result[i+1].indexOf(brackets[b].open);
					if ( pclose > -1 ) {
						if ( popen==-1 || popen>pclose ) {
							// Fond the corresponding closing bracket(s).
							// Combine the two parts to restore it.
							result[i] += sep + result[i+1];
							// Remove the second part.
							result.splice ( i+1, 1 );

							if ( popen > pclose )
								// There is another opening bracket(s) after
								// the desired closing bracket(s), check this
								// cell again.
								--i;
						}
					}
				}
			}
		}
		return result;
	},

	escape_string : function(s) {
		return s.replace(/[-/$*#]/g, '\\$&');
	},
	list_prefix : function ( level, ch ) {
		if ( typeof level == 'string' ) {
			var text = level;
			ch = text.charAt(0);
			if ( ! /^(\*|\#)/.test(ch) ) return null;
			level = 1;
			while ( text.charAt(level) == ch ) level++;
		}
//displayMessage('looking for the last line of list '+ch+' level='+level);
		var prefix = ch
						? '^'+ch+'{'+level+'}[^'+ch+']'
						: '^(*{'+level+'}[^*]|#{'+level+'}[^#])';
						//: '^(*{'+level+'}|#{'+level+'})';
		var subprefix = '^(*{'+(level+1)+'}|#{'+(level+1)+'})';

		//function escapeRegExp ( s ) {
			//return s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
		//	return s.replace(/[-/$*#]/g, '\\$&');
		//}

		return {
			'prefix':new RegExp(TWtid.escape_string(prefix))
			, 'subprefix':new RegExp(TWtid.escape_string(subprefix))
		};
	},
	list_item_line : function (text,ndx,title) {
		// Find the beginning line number that defines the list with
		// index ndx. In the wiki style text a list is defined by
		// (non-blank) lines of text that start with '*' or '#'.
		if ( typeof ndx.rIndex == 'number'
					&& typeof ndx.dIndex == 'number' ) {
			return this.elem_first_line(text,/^[\*\#]+/,ndx,title);
		}
		var ps = this.list_prefix(1);
		var ndxary = ndx.dIndex == -1
						? ndx.rIndex.split('.')
						: ndx.dIndex.split('.');
		var r0 = 0
				, n = {'rIndex':-1, 'dIndex':-1}
				, ndx2 = ndx.dIndex == -1
								? {'rIndex':ndx.rIndex,'dIndex':''}
								: {'rIndex':'','dIndex':ndx.dIndex};
		for ( var i = 0; i < ndxary.length; i++ ) {
			if ( ndx.dIndex == -1 ) {
				n.rIndex = +ndxary[i];
				n.dIndex = -1;
			} else {
				n.rIndex = -1;
				n.dIndex = +ndxary[i];
			}
			if ( i % 2 ) {
				r0 = this.line_number_of_list_item(
							text
							,r0
							,ndx.dIndex==-1?n.rIndex:n.dIndex
						);
				if ( ndx.dIndex == -1 )
					ndx2.dIndex += '.'+n.rIndex;
				else
					ndx2.rIndex += '.'+n.rIndex;
			} else {
				if ( i ) ps = this.list_prefix(i/2+1);
				r0 = this.elem_first_line(
						text,ps.prefix
						,n,title,ps.subprefix
						,r0
					);
				if ( ndx.dIndex == -1 )
					ndx2.dIndex += (i?'.':'')+n.dIndex;
				else
					ndx2.rIndex += (i?'.':'')+n.rIndex;
			}
		}
		if ( ndx.dIndex == -1 )
			ndx.dIndex = ndx2.dIndex;
		else
			ndx.rIndex = ndx2.rIndex;
//displayMessage('ndx='+TWtid.index_string(ndx.rIndex)+' r0='+r0);
		return r0;
	},
	list_last_line : function (text, r0, ps) {
		// Find the closing line number that defines the list starting
		// at line number r0.
		var i = r0;
		do {
			if ( ! ps.subprefix.test(text[i]) )
				break;
		} while ( ++i < text.length );
		return i-1;
	},

	line_number_of_list_item : function (text,r0,lindx) {
		// Find the list item, indexd as lindx, within the list that
		// starts at r0.
		// A list can contain another list within itself, we need to
		// skip those sub-lists.
		var ch = text[r0].charAt(0), level = 1;
		while ( text[r0].charAt(level) == ch ) level++;
		var ps = this.list_prefix(level, ch);
		var i = r0, li = 0;
		do {
			// Go through the list until the desired item found or
			// the end of list reached.
			if ( ps.prefix.test(text[i]) ) {
				if ( li == lindx )
					// Found the list item
					return i;
				else li++;
			} else if ( ! ps.subprefix.test(text[i]) )
				break;
		} while (++i < text.length);
		return -1;
	},

	header_first_line : function (text,ndx,title,start) {
		// Find the line number that defines the header with index
		// ndx. In the wiki style text a header is defined by a
		// line of text that starts with '!'. Level 1 heading starts with
		// one '!', while level 2 starts with two, etc. There could be
		// up (down) to 6 heading levels.
		return this.elem_first_line(text,/^\!{1,6}/,ndx,title,null,start);
	},

	blockquote_first_line : function (text,ndx,title) {
		// Find the line number that defines the blockquote with index
		// ndx. In the wiki style text a blockquote is defined by a
		// line of text that starts with '>'. Level 1 blockquote starts
		// with one '>', while level 2 starts with two, etc. There could
		// be up (down) to 3 levels of blockquotes.
		return this.elem_first_line(
					text,/^(\>{1,3}|\<\<\<)/,ndx,title
				);
	},
	blockquote_last_line : function (text, r0) {
		// Find the closing line number that defines the blockquote starting
		// at line number r0.
		var r = r0;
		var ch = text[r].charAt(0);
		var level = 1;
		while ( text[r].charAt(level) == ch ) level++;
		var prefix = text[r].substring(0,level);
		while ( ++r < text.length )
			if ( ! (text[r].startsWith(prefix)
							&& text[r].charAt(level) != ch) ) break;
		return r-1;
	},
	blockexample_first_line : function ( text ) {
		return /^\<\<\</.test(text);
	},
	blockexample_last_line : function (text, r0) {
		var r = r0;
		while ( r < text.length )
			if ( /^\<\<\</.test(text[r]) ) return r;
			else r++;
		return r-1;
	},

	preformat_first_line : function (text,ndx,title) {
		// Find the line number that defines a block preformat with index
		// ndx. In the wiki style text a block preformat is defined by an
		// opening line of text that starts with '{{{', followed by the
		// text of the example, then a closing line of text that starts
		// with '}}}'.
		var prefix = /^(\{\{\{|\/\/\{\{\{|\/\*\{\{\{|\<\!--\{\{\{)/;
		return typeof text == 'string'
				? prefix.test(text)
				: this.elem_first_line(text,prefix,ndx,title);
	},

	preformat_last_line : function ( text, r0 ) {
		var r = r0;
		while ( r < text.length )
			if ( /^(\}\}\}|\/\/\}\}\}|\/\*\}\}\}|\<\!--\}\}\})/
					.test(text[r]) ) return r;
			else r++;
		return r-1;
	},

	macro_first_line : function (text,ndx,title,macro){
//displayMessage('looking for macro <<'+macro+TWtid.index_string(ndx)+' in '+title);
		return this.elem_first_line(
						text,new RegExp('\<\<'+macro),title
					);
	},
	macro_last_line : function (text,r0){
		var r = r0;
		while ( r < text.length )
			if ( ! /\>\>$/.test(text[r]) ) r++;
			else break;
		return r;
	},

	table_first_line : function (text,ndx,title) {
		// Find the beginning line number that defines the table with
		// index ndx. In the wiki style text a table is defined by
		// (non-blank) lines of text that start and end with '|'. Therefore
		// we only focus on those lines that start with a '|'.
		return this.elem_first_line(text,/^[\|]/,ndx,title);
	},
	table_last_line : function ( text, r0 ) {
		// Find the closing line number that defines the table starting
		// at line number r0.
		var r = r0;
		while ( r < text.length )
			if ( /^[\|]/.test(text[r] ) ) r++;
			else break;
		return r-1;
	},

	transpose_table : function (wikitxt, r0, rl) {
		// Transpose a table from the defining wikitxt.
		// Arguments
		//		wikitxt: line break splitted wikitext.
		//		r0: first line of text defining the table.
		//		rl: last line of text defining the table.
		// To transpose a table we do
		//		1. find the number of rows and columns
		//		2. exchnage the role of the two numbers
		var r, c, rows=0, rowtxt, newtxt = new Array(),
			header=false, htxt, h, col_span = null,
			row_span = new Array(), col,
			row_span_recorded = function(col) {
				for ( var c = 0; c < row_span.length; c++ )
					if ( row_span[c].col == col )
						return c;
				return null;
			};
		for ( r = r0; r <= rl; r++ ) {
			if ( /[cCkK]$/.test(wikitxt[r]) ) continue;
			++rows; header = /[hH]$/.test(wikitxt[r]);
			rowtxt = this.split_table_row(wikitxt[r]);
			for ( c = 0; c < rowtxt.length-2; c++ ) {
				col = row_span_recorded(c);
				htxt = rowtxt[c+1];
				if ( htxt == '~' ) {
					// Row-spanned cell
					htxt = '>';
					if ( col === null ) {
						row_span.push({'start':(rows-1),'end':-1,'col':c});
						col = row_span.length-1;
					}
					if ( r == rl ) {
						row_span[col].end = rows;
					}
				} else if ( htxt == '>' ) {
					// Column-spanned cell
					htxt = '~';
					if ( !col_span )
						col_span = { 'start':c, 'end':-1 };
					if ( col !== null )
						row_span[col].end = rows-1;
				} else {
					if ( col !== null ) {
						// end of some row-spanned cell
						row_span[col].end = rows-1;
					}
					if ( col_span ) {
						// end of col-spanned cell
						col_span.end = c;
					}
					if (header && /^[^\!]/.test(htxt.trim()))
						if ( (h=htxt.search(/\S/)) > 0 )
							htxt = htxt.substring(0,h)+'!'+
										htxt.substring(h);
						else htxt = '!'+htxt;
				}
				if ( rows == 1 ) newtxt[c] = new Array();
				if ( col !== null && row_span[col].end > -1) {
					var start = row_span[col].start,
						end = row_span[col].end;
					if ( r == rl ) htxt = newtxt[c][start];
					else newtxt[c][end] = newtxt[c][start];
					newtxt[c][start] = '>';
					row_span.splice(col,1);
				}
				if ( col_span && col_span.end > -1 ) {
					newtxt[col_span.start][rows] = htxt;
					newtxt[col_span.end][rows] = '~';
					col_span = null;
				} else {
					newtxt[c][rows] = htxt;
				}
			}
		}
		for ( r = 0; r < newtxt.length; r++ ) {
			newtxt[r].push('');
			newtxt[r]=this.make_table_row(newtxt[r]);
		}

		var rT;
		if ( newtxt.length > rows ) {
			rT = 0;
			for ( r = r0; r <= rl; r++ ) {
				if ( /[cCkK]$/.test(wikitxt[r]) ) continue;
				wikitxt[r] = newtxt[rT++];
			}
			while ( rT < newtxt.length )
				wikitxt.splice(r++, 0, newtxt[rT++]);
		} else {
			rT = r0; r = 0;
			while ( r < newtxt.length ) {
				if ( /[^cCkK]$/.test(wikitxt[rT]) )
					wikitxt[rT++] = newtxt[r++];
				else rT++;
			}
			wikitxt.splice(rT,rl-rT+1);
		}
	},

	line_number_of_table_row : function(wikitxt, r0, r) {
		// Find the line number of the text that defines the rth row of the
		// table that begins at line number r0.

		// Arguments:
		//		wikitxt:	The wikitext that defines the tiddler containing
		//					the table. The wikitext MUST already be new-line
		//					splitted using wikitxt.split ( '\n' ).
		//		r0:			The line number of the text that defines the
		//					begining of the table.
		//		r:			The row index within the table, starting from 0.

		// Returns:
		//		If found, returns the line number of the text that defines
		//		the rth row of the table that begins at line number r0.
		// Otherwise returns the next row.

		var row = 0, i = r0;
		do {
			// Go through the table until the desired cell found or
			// the end of table reached.
			// Skip the table class/caption.
			//var lastch = wikitxt[i].charAt(wikitxt[i].length-1);
			//if ( lastch == 'k' || lastch == 'c' ) continue;
			if ( /[kKcC]$/.test(wikitxt[i]) ) continue;
			if ( row == r )
				// Found the table row containing this cell
				return i;
			row++;
		} while ( (++i < wikitxt.length)
					&& wikitxt[i].startsWith('|') );
		return i;
	},

	split_table_row : function ( linetxt ) {
		// Split one line of wikitext that defines a table row.

		// A table row consists of one or more table cells, each separated
		// by '|' in the wikitext that defines the table row. For example,
		//		| 1 | 2 | 3 |
		// defines a table row with three table cells.

		// Naively a simple linetxt.split ('|') should do the work. Yes it
		// does, in cases where the cell contents are just regular text.
		// If some of the cells contain a link to a tiddler
		// [[text|tiddler.name]], or to an external URL [[text|http://xxx]],
		// then there will be an extra '|' that should not be considered as
		// cell separation delimiter. If we still want to use
		// linetxt.split ('|'), then such links should be recoverd before use.

		// 2012/08/19. Another case is the preformatted text enclosed within
		// {{{ and }}}. There could be one or more instances of '|' contained
		// in the preformatted text.

		// 2012/10/31. Even another case is the local file URL in Windows
		// system: the semicolon ':' used to specify hard disk drive
		// is replaced with the vertical bar '|'.
		// For example, the URL for a local file stored in
		// C:\Document\something.txt would be
		// {{{file:///C|/Document/something.txt}}}.
		// The vertical bar here should also be restored before use.
		// However, there is no clear way to determine the end of a URL...
		// @@color:blue;Not implented yet.@@
		return this.split_line_text (linetxt, '|', [
				 {'open' : '[[', 'close' : ']]'}
				,{'open' : '{{{', 'close' : '}}}'}
				//,{'open' : '<<<', 'close' : '>>>'}
				,{'open' : 'file:///', 'close' : /^[\/][\w]+[\w\.\/\#]/}
			]);
	},

	cell_index_in_line : function ( linetxt, c ) {
		// Find the index number of the text that defines the cth cell in
		// linetxt.

		// Arguments:
		//		linetxt:	The text that defines the table row. The linetxt
		//					MUST already be '|' splitted using
		//					this.split_table_row(linetxt).
		//		c:			The colum index of the cell within the table row
		//					defined by linetxt.
		// Returns:
		//		If found, returns the index number of the text that defines
		//		the cth cell. Otherwise returns -1.

		if ( c < 0 || c >= linetxt.length ) return -1;
		var col = -1;
		for ( var dc = 1; dc < linetxt.length-1; dc++ ) {
			if ( linetxt[dc] != '>' && linetxt[dc] != '~' ) col++;
			if ( col == c ) return dc;
		}
		return -1;
	},

	cell_wiki_ndx : function ( wikitxt, r0, row, col, rspan, cspan ) {
		// Retrieve the wikitext associated with a table cell located at
		// (row, col), together with the corresponding row/col indices of
		// the cell if it were not row/column spanned. These indices are
		// convenient for handling the underlying wikitxt of a spanned
		// cell.
		var r = this.line_number_of_table_row(wikitxt, r0, row),
			c, txt = new Array(), rowtxt;
		// Find the right cell (skip the spanned columns).
		for ( row = 0; row < rspan; row++, r++ ) {
			rowtxt = this.split_table_row(wikitxt[r]);
			if(row==0)
				if ( (c=this.cell_index_in_line(rowtxt,col)) == -1 ) {
					// Retrieving a non-existing cell. Append it to this row.
					c = rowtxt.length-1;
					rowtxt.push('');
				}
			txt.push ( new Array() );
			for ( col = cspan-1; col >= 0; col-- )
				txt[row].push ( rowtxt[c-col] );
		}
		return { 'rndx':r, 'cndx':c, 'text':txt };
	},
	cell_wiki : function ( wikitxt, r0, row, col, rspan, cspan ) {
		// Retrieve the wikitext associated with a table cell located at
		// (row, col).
		var txt_ndx = this.cell_wiki_ndx(wikitxt,r0,row,col,rspan,cspan);
		return txt_ndx.text;
	},

	skip_style_text : function ( wikitxt ) {
		// Find the position of the first character of the content in the
		// wikitext. A wikitext may contain style text at the begining,
		// followed by its content. This function is to find the position
		// of the content in this wikitxt.

		// A style text in a table cell must start immediately after the
		// begining '|' that defines that table cell. If the wikitxt starts
		// with a blank space then it does not contain any style text. If
		// the wikitxt does contain a style text, then the style text must
		// follow the "attribute:value;" format, in which a colon is inserted
		// between attribute and the value text, while a semicolon is added
		// to the end of the style text. Therefore to identify a style text
		// one needs to
		// 1) make sure the wikitxt does not start with a blank space;
		// 2) look for the existance of colon-semicolon pairs.

		if ( wikitxt.length == 0 || wikitxt.charAt(0) == ' '
			|| wikitxt.charAt(0) == '@' ) return 0;

		var p = 0, pcolon, pat, psemicolon;
		// First character is not a blank space, check if style text exists.
		do {
			pcolon = wikitxt.indexOf ( ':', p + 1 );
			if ( pcolon > 0 ) {
				// Found one colon, mkae sure it's not within a "@@ @@" pair.
				pat = wikitxt.indexOf ( "@@", p );
				if ( pat >= 0 && pat < pcolon )
					// This colon is within a "@@ @@" pair, meaning it is
					// part of the content text, not a style text for the
					// whole cell.
					return p;
				// The colon is not within a "@@ @@" pair, look for the
				// following semicolon.
				psemicolon = wikitxt.indexOf ( ';', pcolon+1 );
				if ( psemicolon > pcolon ) {
					// Found a colon-semicolon pair, check in-between to
					// make sure a valid style text is found. A valid
					// style text should NOT contain comma, period, and
					// white space characters.
					if(/[\s\,\.]/.test(
						wikitxt.substring(pcolon+1,psemicolon)))
						return p;
					// Look for the next style text.
					p = psemicolon + 1;
				}
				else	// No colon-semicolon pair found
					return p;
			}
			else	// No colon-semicolon pair found
				return p;
		} while ( true );
	},
	elem_wide_style_text : function ( ctxt ) {
		// Returns the cell-wide style text, if any.
		var p = this.skip_style_text ( ctxt );
		return (p>0 ? ctxt.substring(0,p) : '');
	},

	remove_style_text : function ( wikitxt ) {
		// Remove the style text in the wiki text.
		if ( ! wikitxt ) return '';
		var p = this.skip_style_text ( wikitxt );
		return p < wikitxt.length ? wikitxt.substring(p) : '';
	},

	save_text : function ( tiddler, text, newtitle ) {
		var newtext = "";
		if ( ! text )
			newtext = tiddler.text;
		else if ( typeof text == 'string' )
			newtext = text;
		else {
			newtext = text[0];
			for ( var i = 1; i < text.length; i++ )
				newtext += '\n' + text[i];
		}

		if ( newtitle ) {
			if(store.tiddlerExists(newtitle)) {
				if(!confirm(config.messages.overwriteWarning
									.format([newtitle])))
					return null;
				story.closeTiddler(newtitle,false);
			}
			var tiddlerElem = story.getTiddler(tiddler.title);
			tiddlerElem.id = story.tiddlerId(newtitle);
			tiddlerElem.setAttribute("tiddler",newtitle);
			store.saveTiddler(tiddler.title,newtitle,newtext);
			return newtext;
		}

		var undo_saveTiddler = null;
		if ( config.macros.undo ) {
			// If UndoPlugin is installed, let it do its job but not save
			// tiddler.
			undo_saveTiddler = store.undo_saveTiddler;
			store.undo_saveTiddler = function() {};
			store.saveTiddler(tiddler.title,tiddler.title,newtext);
		}

		// The following lines of code saves the changes just made to a
		// table cell. According to TiddlyWiki webpage it is a common
		// practice to use store.saveTiddler () to save the content of a
		// tiddler. This is usually fine except when <<foldHeadings>> macro
		// is used: the headings get folded again.
		//store.saveTiddler ( tiddler.title, tiddler.title, newtext,
		//				tiddler.modifier, new Date() );
		tiddler.set(tiddler.title,newtext,tiddler.modifier,new Date());
		store.setDirty(true);

		if ( config.macros.undo ) {
			// If UndoPlugin is installed, the saveTiddler() function was
			// temperarily disabled. Put it back now.
			store.undo_saveTiddler = undo_saveTiddler;
		}

		return newtext;
	},

	css_size : function (txt, $elem) {
		if ( ! txt ) return 0;
		txt = txt.toLowerCase();
		var unit = txt.substring(txt.length-2);
		switch ( unit ) {
			case 'px' :
				return Math.round(parseFloat(txt));
			case 'pt' :
				return Math.round(parseFloat(txt)*16/12);
			default :
				var size = parseFloat(txt);
				var $e = $elem
							? ($elem.size()<3
								? $elem : jQuery($elem[2]))
							: jQuery(document)
								.find('div[id=tiddlerDisplay]');
				if ( isNaN(size) )
					return this.css_size($e.css(txt),$e);

				var fs = parseFloat($e.css('font-size'))*16/12;
				if ( unit == 'em' )
					return Math.round(size*fs);
				if (unit.charAt(1)=='%')
					return Math.round(size/100*($elem?$elem.width():fs));
		}
	},
//}}}

// // TiddlyWiki related functions
//{{{
	tiddlers_recorded : null,
	push_tiddler : function ( tiddler ) {
		if ( ! this.tiddlers_recorded ) {
			this.tiddlers_recorded = new Array();
			this.tiddlers_recorded.push(tiddler);
		} else if ( this.tiddlers_recorded.indexOf(tiddler)==-1 )
			this.tiddlers_recorded.push(tiddler);
	},
	save_table_info : function (tiddler,wndx,info_key,value ) {
		if ( ! tiddler.table_info )
			tiddler.table_info = new Array();
		var saved_info = tiddler.table_info[wndx],
			info = (value===undefined?info_key:{info_key:value});
		if ( ! saved_info ) saved_info = {};
		tiddler.table_info[wndx] = merge(saved_info, info);
		this.push_tiddler(tiddler);
	},
	get_table_info : function (tiddler, wndx, key) {
		if ( ! tiddler || ! tiddler.table_info ) return null;
		if ( wndx === undefined ) return tiddler.table_info;
		var info = tiddler.table_info[wndx];
		return (info ? (key ? info[key] : info) : null);
	},
//}}}

// // DOM related functions
//{{{
	resize : function (ev) {
		if (! (config.browser.isAndroid
					|| config.browser.isiOS
					|| (config.browser.isIE
						&& !config.browser.isIE9))) {
			var $doc = jQuery(document);
			$doc.find('div.viewer').each(function(n,v){
				TWtid.refresh_wrapper(jQuery(v),true);
			});
//displayMessage('width='+jQuery(window).width()+'/'+screen.width);
			var $sb = $doc.find('#sidebar,#mainMenu');
			if ( jQuery(window).width() < screen.width/2 ) {
				$sb.hide();
			} else $sb.show();
		}
	},

	element_classes : function ($elem) {
		return $elem[0].className;
	},
	element_attributes : function ($elem) {
		var str = '';
		for(var i=0,attrs=$elem[0].attributes;i<attrs.length; i++){
			var attr = attrs.item(i);
			str += (attr.nodeName+'='+attr.nodeValue+'\n');
		}
		return str;
	},

	element_index : function ( $elem, wt ) {
		// Find the rendering and defining indices of an element.
		// First we look for the The rendering index in the current
		// wrapper, which is the first DOM element in wt.$wrapper.
		var ndx={'rIndex':-1,'dIndex':-1}, ndx_w = -1, title = '';
		var info = {selector:'', macro:''}, first_line = null;
		switch ( $elem[0].nodeName ) {
			case 'TABLE' :
				info.selector = $elem[0].nodeName;
				first_line = TWtid.table_first_line;
				break;
			case 'LI' :
				info.selector = $elem[0].nodeName;
				first_line = TWtid.list_item_line;
				break;
			case 'BLOCKQUOTE' :
				info.selector = $elem[0].nodeName;
				first_line = TWtid.blockquote_first_line;
				break;
			case 'PRE' :
				info.selector = $elem[0].nodeName;
				first_line = TWtid.preformat_first_line;
				break;
			case 'H1' :
			case 'H2' :
			case 'H3' :
			case 'H4' :
			case 'H5' :
			case 'H6' :
				info.selector = 'h1,h2,h3,h4,h5,h6';
				first_line = TWtid.header_first_line;
				break;
			default :
				info = TWtid.wrapper_info($elem);
				if ( ! info.selector ) return ndx;
				first_line = TWtid.macro_first_line;
				break;
		}

//displayMessage('looking for '+info.selector+' in '+wt.$wrapper.size()+' wrappers in '+wt.title);
		wt.$wrapper.each(function(nw, w){
			var $w = jQuery(w);
			var $elements;
			if ( info.selector=='LI' ) {
				$elements = TWtid.find_list_items($w);
				ndx.rIndex=$elements.index($elem);
//displayMessage('LI found at '+ndx.rIndex+' in '+$elements.size());
//$elements.each(function(n,li){
//	displayMessage('LI '+n+' = '+jQuery(li).text());
//});
			} else {
				$elements = TWtid.find_elements($w,info.selector);
				ndx.rIndex=$elements.index($elem);
			}
//displayMessage(info.selector+'('+ndx.rIndex+')');
			if ( ndx.rIndex != -1 ) {
				ndx_w = nw;
				title=TWtid.title_from_wrapper($w);
//displayMessage(' in '+title+' found in wrapper '+ndx_w+'/'+wt.$wrapper.size());
				return false;
			}
		});
		if ( ! title ) title = wt.title;
		var text = wt.tiddler.text.split('\n');
		// Then we look for defining index in the tiddler's wikitext.
		var r0 = first_line
					? first_line.call(this,text,ndx,title,info.macro)
					: -1;
//displayMessage($elem[0].nodeName+'(class='+TWtid.element_classes($elem)+') ndx=TWtid.index_string(ndx)+' in '+title+' found in wrapper '+ndx_w+'/'+wt.$wrapper.size()+' at '+r0);
		return ndx;
	},

	element_offset : function ($elem) {
		// In the past $elem.offset() was used to obtain the offset of an
		// element. It worked fine except that it became significantly
		// slower, with reasons still unclear to me, after changing
		// some contents without refreshing the tiddler. Then I searched
		// over the web and soon found a simple solution, as shown below.

		//var pos = { 'left':0, 'top':0 };

		// The following codes of getting the offset are modified from
		// http://www.kirupa.com/html5/get_element_position_using_javascript.htm
		// While the original post subtracted e.scrollLeft/e.scrollTop
		// from the results, I found it not necessary and removed
		// the subtractions.
		/*
		var e = $elem[0];
		while(e) {
			// Original, subtracted e.scrollLeft/e.scrollTop from
			// the results.
			//pos.left+=(e.offsetLeft-e.scrollLeft+e.clientLeft);
			//pos.top+=(e.offsetTop-e.scrollTop+e.clientTop);

			// Modified, removed the subtractions.
			pos.left+=(e.offsetLeft+e.clientLeft);
			pos.top+=(e.offsetTop+e.clientTop);
			e = e.offsetParent;
		}
		*/

		// After 1-day trial I found the above method does not get the
		// precise position and decided to go back with $elem.offset().
		var pos = $elem.offset();
		// TiddlySpace tends to give wrong results in jQuery's .offset()
		// method. Correct it here.
		//if ( window.location.protocol != "file:" ) {
		if ( config.extensions.tiddlyspace ) {
			pos.top -= $elem.closest('#displayArea').offset().top;
		}
		return pos;
	},

	hide_buttons : function () {
		if ( TWtid.$btn_lt ) TWtid.$btn_lt.hide();
	},

	attach_all_buttons : function ($elem) {
		TWtid.attach_buttons($elem,'LT',TWtid.$btn_lt);
	},
	attach_buttons : function ($elem, where, $btn) {
		// Attach buttons to a block element.
//var t = new Date();
		if ( ! $elem ) {
			$btn.hide();
			return;
		}
/*
		//$btn.show();
//displayMessage('t0='+(new Date()-t));
//t = new Date();
		var pos = TWtid.element_offset($elem);
		var adim = TWtid.apparent_dim($elem);
//displayMessage($elem[0].nodeName+' '+$elem.css('text-align'));
		switch ( $elem.css('text-align') ) {
			case 'center' :
				pos.left+=($elem.outerWidth(true)-adim.W)/2;
				break;
			case 'right' :
				pos.left=$elem.width()-adim.W;
				break;
		}

		var bw = TWtid.button_width($btn);
		var bh = TWtid.button_height($btn);
		switch (where.toUpperCase()) {
			case 'LT' :
			case 'LEFT-TOP' :
				if ( ! (config.options.chkTWtidEnabled
							&& $elem[0].nodeName == 'TABLE') ) {
					$btn.hide();
					return;
				}
				if ( ! $elem.attr('oversize') )
					//$btn = $btn.not($btn[0]);
					jQuery($btn[0]).hide();
				if ( ! config.options.chkTWtidTranspose )
					//$btn = $btn.not($btn[0]);
					jQuery($btn[1]).hide();
				pos.top += -bh+$elem.parent().scrollTop();
				pos.left+=$elem.parent().scrollLeft();
				break;
			case 'LEFT' :
				pos.left -= bw*$btn.size()+bw/2;
				break;
			case 'RT' :
			case 'RIGHT-TOP' :
			case 'RIGHT' :
				pos.left += adim.W;
				if ( $elem[0].nodeName == 'TABLE' ) {
					pos.top += (((config.options.chkTWtidEnabled
										|| ! $elem[0].caption)
									? -bh-1
									: bh/4)
								+ $elem.parent().scrollTop());
					pos.left += -bw*$btn.size()
								+$elem.parent().scrollLeft();
					break;
				} else {
					var lh=TWtid.css_size('line-height',$elem);
//displayMessage('(adim.W,adim.H)=('+adim.W+','+adim.H+')'+' lh='+lh);
					if ( adim.H > lh*1.5 ) pos.top -= lh-4;
					var $viewer = $elem.closest('.viewer');
					if ( $viewer.size() > 0 
							&& pos.left > $viewer.width() )
						pos.left -= bw*$btn.size();
					else pos.left += bw/2;
					pos.top -= 2;
				}
				break;
		}
//if($elem[0].nodeName=='TABLE') displayMessage('attach '+$btn.size()+' buttons to '+where+' of table at ('+pos.left+','+pos.top+')');
		$btn.each(function(n,btn){
			jQuery(btn).css({
					'top':pos.top
				,	'left':pos.left+n*bw
			});
		});
*/
	},

	button_active : function ( $btn ) {
		return $btn.css('opacity')=='1';
	},
	create_button : function ( label, title, callback, id ) {
		var fs = '1em',
			fsp = Math.round(TWtid.css_size(fs)),
			$btn=jQuery(createTiddlyButton(null,label,title,callback));
		if ( typeof ndx == 'object' ) ndx = ndx.dIndex;
		$btn.attr('id','tedTbtn'+(id?id:label)).css({
			'position':'absolute'
			,'fontFamily':'Helvetica, Arial'
			,'fontSize':fs
			,'background-color':'#fff8dc'
			,'color':'#000000'
			,'z-index':1
			,'text-align':'center'
			,'width':fsp/2
			,'height':fsp
		});
		return $btn;
	},
	create_delete_button : function ( title, callback, id ) {
		return this.create_button('⊗',title,callback,id);
	},

	cell_row_index : function ( $cell ) {
		var $tr = $cell.parent(), row = $tr.attr('row');
		return row ? (row * 1) : $tr[0].rodIndex;
	},

	table_element : function ( $elem, ndx, wt, nw, text ) {
		if ( $elem.size()==0 ) return null;
		switch ( $elem[0].nodeName ) {
			case 'TABLE' :
				if ( ! ndx ) return $elem;
				if ( ! text ) text = wt.tiddler.text.split('\n');
				var title = TWtid.title_from_wrapper
									(jQuery(wt.$wrapper.get(nw)))
								|| wt.title;
//displayMessage('looking for table'+TWtid.index_string(ndx)+' in '+title);
				var r0 = TWtid.table_first_line(text,ndx,title);
//displayMessage('table'+TWtid.index_string(ndx)+' in '+title+' found at line number '+r0);
				return r0>-1 ? jQuery($elem.get(ndx.rIndex)) : null;
			case 'TBODY' :
			case 'THEAD' :
			case 'TR' :
			case 'TH' :
			case 'TD' :
				return $elem.closest('table');
			default :
				if ( $elem.is('.tedTable') )
					// $div_wrap
					return $elem.find('table');
				var id = $elem.attr('id');
				if ( /^tedT/.test(id) )
					switch ( id.charAt('tedT'.length) ) {
						case 'C' : // $div_c, caption area
						case 'b' : // button
							// Find its $div_wrap
							return $elem.closest('.tedTable')
										.find('table');
						case 'B' : // $div_tb, table body wrapper
						case 'd' : // $div_t, scrolling wrapper
							return $elem.find('table');
					}
		}
		$elem = config.options.chkTWtidEnabled
					? $elem.closest('.tedTable').find('table')
					: $elem.closest('table');
		return $elem.size() > 0 ? $elem : null;
	},

	copy_font_text : function ($dest, $src, va) {
		if ( ! va ) va = $src.css('vertical-align');
		var bkc = $src.css('background-color');
		switch ( bkc ) {
			case 'transparent' :
			case 'rgba(0, 0, 0, 0)' :
			case 'inherit' :
				bkc = this.elem_bgc($src);
			default :
				$dest.css('background-color', bkc);
				break;
		}
		$dest.css({
			'font-size':$src.css('font-size')
			,'font-family':$src.css('font-family')
			,'font-style':$src.css('font-style')
			,'color':$src.css('color')
			,'text-align':$src.css('text-align')
			,'vertical-align':va
		});
	},
	copy_html : function ( $dest, $src ) {
		var va = $src.css('vertical-align'),
			factor = 0.5;
		switch ( va ) {
			case 'bottom' :
				factor = 1;
			case 'auto' :
			case 'middle' :
				// The CSS property vertical-align doesn't seem
				// to work as it should. The following is a workaround
				// to duplicate the vertically centered content of
				// a table cell.
				var pad = TWtid.css_size($dest.css('padding-top')),
					$sp_t = jQuery('<div></div>').appendTo($dest);
				if ( pad == 0 ) pad = 3;
				$sp_t.html($src.html()).css({
					'width':$dest.width(),
					'height':$dest.height(),
					'position':'absolute',
					'top':pad+($dest.height()-$sp_t.height())/2
							+(config.browser.isIE975 ? 0.5 : 0)
				});
				break;
			default :
				$dest.html($src.html());
				break;
		}
		TWtid.copy_font_text($dest,$src,va);
	},
	copy_border : function ($dest, $src) {
		$dest.css({
			'border-top-style':$src.css('border-top-style'),
			// The border-width is not copied in Chrome/Ubuntu if we do
			// not make integer the numeric part of the property value.
			'border-top-width':Math.round(parseFloat(
										$src.css('border-top-width'))),
			'border-top-color':$src.css('border-top-color'),
			'border-right-style':$src.css('border-right-style'),
			'border-right-width':Math.round(parseFloat(
										$src.css('border-right-width'))),
			'border-right-color':$src.css('border-right-color'),
			'border-bottom-style':$src.css('border-bottom-style'),
			'border-bottom-width':Math.round(parseFloat(
										$src.css('border-bottom-width'))),
			'border-bottom-color':$src.css('border-bottom-color'),
			'border-left-style':$src.css('border-left-style'),
			'border-left-width':Math.round(parseFloat(
										$src.css('border-left-width'))),
			'border-left-color':$src.css('border-left-color')
		});
		return this;
	},
	copy_margin_padding : function ($dest, $src) {
		$dest.css({
			'margin-top':$src.css('margin-top'),
			'margin-right':$src.css('margin-right'),
			'margin-bottom':$src.css('margin-bottom'),
			'margin-left':$src.css('margin-left'),
			'padding-top':$src.css('padding-top'),
			'padding-right':$src.css('padding-right'),
			'padding-bottom':$src.css('padding-bottom'),
			'padding-left':$src.css('padding-left')
		});
		return this;
	},
	elem_bgc : function ($e) {
		var bgc;
		while ( (bgc=$e.css('background-color'))=='transparent'
					|| bgc == 'rgba(0, 0, 0, 0)'
					|| bgc == 'inherit' ) {
			$e = $e.parent();
			if ( $e.size() == 0 ) {
				bgc = '#fff';
				break;
			}
		}
		return bgc;
	},

	fixed_cell_left : function (cleft, bw, n) {
		return cleft+(config.browser.isIE
						? (config.browser.isIE874
							? -bw*2-(n>0 ? 0 : 1)
							: (config.browser.isIE9
								? 0
								: -bw*2))
						: (config.browser.firefoxDate
							? (config.browser.isLinux
								? (n>0 ? -bw : 0)
								: -bw)
							: -bw*2));
	},
	fixed_cell_width : function ($c_org, bw, n) {
		if ( bw == 0 ) bw = 1;
		var iw = $c_org.innerWidth(),
			dw = (iw-$c_org.width())/bw-1;
		return iw-dw+(config.browser.isIE
					? (config.browser.isIE874
						? -bw+1
						: 0)
					: (config.browser.firefoxDate
						? (n>0?-bw:0)
						: (config.browser.isChrome
								&& config.browser.isLinux
							? (n>0 ? 0 : -0.5)
							: 0)));
	},
	fixed_cell_top : function (ctop, bw, r) {
		return ctop+(config.browser.isIE
						? (config.browser.isIE874
							? -bw*(r>0 ? 2 : 3)
							: (config.browser.isIE975
								? -bw*2-1
								: (config.browser.isIE8
									? -bw*(r>0 ? 2 : 1)-1
									: -bw*(r>0 ? 2.5 : 2))))
						: (config.browser.firefoxDate
							? -bw
							: -bw*2));
	},
	fixed_cell_height : function (ch_org, bw, r) {
		return ch_org+(config.browser.isIE
					? (config.browser.isIE975
						|| config.browser.isIE8
						? bw
						: (config.browser.isIE874
							? bw+(r>0 ? 0.5 : 0)
							: bw*(r>0 ? 1 : 2)))
					: (config.browser.firefoxDate
						? bw*0.5
						: (config.browser.isSafari
							? bw*(config.browser.isLinux
									? (r>0?-0.25:0.5)
									: 1)
							: bw)));
	},
	fix_rows_adjust : function ($table, nr) {
		if ( ! $table.attr('oversize') ) return this;
		if ( !nr )
			nr = config.options.txtTWtidFixRows*1;
		if ( nr == 0 ) return this;

		var $div_tb = $table.parent(),
			scrL = $div_tb.scrollLeft(),
			$sp_r = $div_tb.parent().find('.tedTfixedHR'),
			bw = 1;
		$table.find('tr').slice(0,nr).each(function(r,tr){
			var $cells = $sp_r.eq(r).find('.tedTfixedHC'),
				$tr = jQuery(tr);
			$tr.find('th,td').each(function(n,c){
				var $c_org = jQuery(c), $sp_c = $cells.eq(n);
				if ( r==0 && n==0 )
					bw=TWtid.css_size($c_org.css('border-left-width'));
				$sp_c.css({
					'left':TWtid.fixed_cell_left
								($c_org.position().left+scrL,bw,n),
					'width':TWtid.fixed_cell_width($c_org,bw,n)
				});
			});
		});
		return this;
	},
	border_top_width : function ( bw ) {
		return (config.browser.firefoxDate
						&& config.browser.isLinux
					? bw*1.5
					: (config.browser.isIE9
						? 1
						: bw));
	},
	check_tableSorting : function ($sp_c, $c_org) {
		if ( config.tableSorting ) {
			$sp_c[0].onclick = function(){
				config.tableSorting.sortTable(this);
				return false;
			};
			if ( $c_org.find('span:first').is('.hidden') ) {
				$sp_c.find('span:first').hide();
			}
		}
	},
	fix_rows : function ($table, tofix, nr) {
		// THIS IS NOT STABLE YET.

		// This function is to fix the first few rows at the top
		// of a table. It does so by cloning the table with only
		// the few rows to fix, then put it over to cover the
		// orignal.

		if ( ! $table.attr('oversize') ) return this;

		if ( ! nr ) nr = config.options.txtTWtidFixRows*1;
		if ( nr == 0 ) return this;

		var $div_t = $table.parent().parent(),
			$fixR = $div_t.find('div.tedTfixedH');
		if ( tofix ) {
			if ( $fixR.size() > 0 ) return this;
			var $div_tb = $table.parent(),
				scrL = $div_tb.scrollLeft(),
				scrT = $div_tb.scrollTop(),
				tbpos = $div_tb.position(),
				bw = TWtid.css_size($table.css('border-top-width')),
				bc = $table.css('border-top-color');
			$fixR = jQuery('<div></div>').appendTo($div_t).css({
						'border-left':bw+'px solid '+bc,
						'border-top':TWtid.border_top_width(bw)
										+'px solid '+bc,
						'position':'absolute',
						'z-index':2,
						'overflow':'hidden',
						'left':tbpos.left,
						'top':tbpos.top,
						'width':$div_tb[0].clientWidth
									-(config.browser.isLinux
									? (config.browser.isChrome
											|| config.browser.isOpera
										? bw
										: 0)
									: 0)
					}).addClass('tedTfixedH');

			var tbgc = this.elem_bgc($table), fixedH = 0;

			$table.find('tr').slice(0,nr).each(function(r,tr_org){
				var $tr_org = jQuery(tr_org),
					trpos = $tr_org.position(),
					trh = $tr_org.innerHeight(),
					trbgc = $tr_org.css('background-color'),
					$sp_r = jQuery('<span></span>').appendTo($fixR)
								.addClass('tedTfixedHR');
				if ( trbgc == 'transparent' ||
					trbgc == 'rgba(0, 0, 0, 0)' ) trbgc = tbgc;
				$tr_org.find('th,td').each(function(n,c){
					var $c_org = jQuery(c),
						rspan = $c_org.attr('rowspan'),
						cpos = $c_org.position(),
						ch_org_out = $c_org.outerHeight(true),
						ch_org = $c_org.height(),
						$sp_c = jQuery('<span></span>')
								.appendTo($sp_r).addClass('tedTfixedHC'),
						bgc = $c_org.css('background-color');
					if ( bgc == 'transparent' ||
						bgc == 'rgba(0, 0, 0, 0)' ) bgc = trbgc;
					TWtid.copy_border($sp_c, $c_org);
					TWtid.copy_margin_padding($sp_c, $c_org);
					rspan = rspan ? rspan*1 : 1;
					if ( rspan == 1 && ch_org_out > trh )
						trh = ch_org_out;
					if ( r==0 && n==0 ) {
						bw=TWtid.css_size($c_org.css('border-top-width'));
					}
					$sp_c.attr({
						'col':n		// This is added for sorting purposes.
					}).css({
						'background-color':bgc,
						'position':'absolute',
						'left':TWtid.fixed_cell_left
									(cpos.left+scrL,bw,n),
						'width':TWtid.fixed_cell_width($c_org,bw,n),
						'top':TWtid.fixed_cell_top(cpos.top+scrT,bw,r),
						'height':TWtid.fixed_cell_height(ch_org,bw,r)
					});
					TWtid.copy_html($sp_c, $c_org);
					if ( $table[0].tHead && r == 0 )
						TWtid.check_tableSorting($sp_c,$c_org);
				});
				trh += (config.browser.isIE
						? bw
						: (config.browser.firefoxDate
							? bw*0.5
							: 0));
;
				$sp_r.css({
					'position':'absolute',
					'height':trh
				});
				fixedH += trh;
			});
			$fixR.height(fixedH);
			TWtid.table_scrolled($div_t,tbpos,scrL,scrT);
		} else {
			$fixR.remove();
		}
		return this;
	},

	fix_cols_adjust : function ($table, nc) {
		if ( ! $table.attr('oversize') ) return this;
		if ( !nc )
			nc = config.options.txtTWtidFixCols*1;
		if ( nc == 0 ) return this;

		var $div_tb = $table.parent(),
			scrT = $div_tb.scrollTop(),
			$sp_rows = $div_tb.parent().find('.tedTfixedVR'),
			bw = 0;
		$table.find('tr').each(function(r,tr){
			var $tr = jQuery(tr),
				$sp_r = $sp_rows.eq(r).css ({
							'top':$tr.position().top,
							'height':$tr.outerHeight()
						});
			var $sp_cells = $sp_r.find('.tedTfixedVC');
			$tr.find('th,td').slice(0,$sp_cells.size())
				.each(function(n,c){
					var $c = jQuery(c),
						ch = $c.height();
					if ( r == 0 && n == 0 )
						bw = TWtid.css_size($c.css('border-top-width'));
					$sp_cells.eq(n).css({
						'top':TWtid.fixed_cell_top(scrT,bw,r),
						'width':TWtid.fixed_cell_width($c,bw,n),
						'height':TWtid.fixed_cell_height(ch,bw,r)
					});
				});
		});
		return this;
	},
	fix_cols : function ($table, tofix, nc) {
		// THIS IS NOT STABLE YET.

		// This function is to fix the first few columns at the
		// left of a table. It does so by cloning the table with
		// only the few columns to fix, then put it over to cover
		// the orignal.

		if ( ! $table.attr('oversize') ) return this;
		if ( !nc )
			nc = config.options.txtTWtidFixCols*1;
		if ( nc == 0 ) return this;

		var $div_t = $table.parent().parent(),
			$fixV = $div_t.find('div.tedTfixedV');
		if ( tofix ) {
			if ( $fixV.size() > 0 ) return this;
			var $div_tb = $table.parent(),
				tbpos = $div_tb.position(),
				scrT = $div_tb.scrollTop(),
				scrL = $div_tb.scrollLeft(),
				bw = TWtid.css_size($table.css('border-left-width')),
				bc = $table.css('border-left-color'),
				v0w = $div_t.find('div[id^=tedTrefV]').width();
			$fixV = jQuery('<div></div>').appendTo($div_t).css({
						'border-left':bw+'px solid '+bc,
						'border-top':TWtid.border_top_width(bw)
										+'px solid '+bc,
						'position':'absolute',
						'z-index':1,
						'overflow':'hidden',
						'left':tbpos.left,
						'top':tbpos.top,
						'height':$div_tb[0].clientHeight
									-(bw == 0
										? 1
										: (config.browser.isChrome
												&& config.browser.isLinux
											? bw*1.5
											: bw))
					}).addClass('tedTfixedV');
			var cw = new Array(),
				$sp_w = jQuery('<div></div>').appendTo($fixV).css({
							'position':'absolute',
							'top':tbpos.top,
							'height':$table.height()
						}).addClass('tedTfixedVT');

			var tbgc = this.elem_bgc($table);
			$table.find('tr').each(function(r,tr_org){
				var $tr_org = jQuery(tr_org),
					trbgc = $tr_org.css('background-color'),
					trpos = $tr_org.position(),
					trh = $tr_org.outerHeight(true),
					$cells_org = $tr_org.find('th,td').slice(0,nc),
					$sp_r = jQuery('<div></div>').appendTo($sp_w)
								.addClass('tedTfixedVR');
				if ( trbgc == 'transparent' ||
					trbgc == 'rgba(0, 0, 0, 0)' ) trbgc = tbgc;
				$sp_r.css({
					'position':'absolute',
					'top':trpos.top,
					'height':trh
				});
				$cells_org.each(function(n,c){
					var $c_org = jQuery(c),
						cspan = $c_org.attr('colspan'),
						cpos = $c_org.position(),
						ch_org = $c_org.height(),
						cw_org = $c_org.width(),
						cw_org_out = $c_org.outerWidth(true)+
								(config.browser.firefoxDate?0:1),
						bgc = $c_org.css('background-color'),
						$sp_c = jQuery('<span></span>')
								.appendTo($sp_r).addClass('tedTfixedVC');
					if ( bgc == 'transparent' ||
						bgc == 'rgba(0, 0, 0, 0)' ) bgc = trbgc;
					cspan = cspan ? cspan*1 : 1;
					if ( cspan == 1 )
						if ( r==0 ) cw[n] = cw_org_out;
						else if ( cw_org_out>cw[n] ) cw[n]=cw_org_out;
					if ( r==0 && n==0 ) {
						bw=TWtid.css_size($c_org.css('border-left-width'));
					}
					TWtid.copy_border($sp_c, $c_org);
					TWtid.copy_margin_padding($sp_c, $c_org);
					if ( r == 0 )
						$sp_c.attr({
							'col':n		// This is added for sorting purposes.
						});
					$sp_c.css({
						'background-color':bgc,
						'position':'absolute',
						'left':TWtid.fixed_cell_left(cpos.left+scrL,bw,n),
						'width':TWtid.fixed_cell_width($c_org,bw,n),
						'top':TWtid.fixed_cell_top(scrT,bw,r),
						'height':TWtid.fixed_cell_height(ch_org,bw,r)
					});
					TWtid.copy_html($sp_c, $c_org);
					if ( $table[0].tHead && r == 0 )
						TWtid.check_tableSorting($sp_c,$c_org);
				});
			});
			var w = 0;
			jQuery.each(cw, function(c,ccw){
				w += ccw;
			});
			$sp_w.width(w);
			$fixV.width(w).find('.tedTfixedVR').width(w);
			TWtid.table_scrolled($div_t,tbpos,scrL,scrT);
		} else {
			$fixV.remove();
		}
		return this;
	},

	create_table_wrappers : function ($table, ndx, title) {
		// Create some <div> wrappers for a table. See the function
		// reformat_table() for details.
		$table.css({
			// It is important to have taqble layout set to fixed, or
			// the alignment of fixed rows/columns is somewhat inconsistent.
			//'table-layout':'fixed',
			'margin':'0',
			'padding':'0',
			'border-spacing':'0',
			'border-collapse':'collapse'
		});
		var $div_wrap=jQuery('<div></div>'),
			$div_t=jQuery('<div></div>'),
			$div_tb=jQuery('<div></div>'),
			$div_c = jQuery('<div></div>'),
			$cap = $table[0].caption ? $table.contents(':first'):null,
			h = $table.outerHeight(true),
			w = TWtid.table_width($table, true);
		$table.replaceWith($div_wrap);
		$table.appendTo($div_tb);
		$div_wrap.css({
			'position':'relative'
		}).addClass('tedTable');
		$div_tb.addClass('tedTbody').css({
			//'border':'1px solid',
			'border':0,
			'overflow':'auto',
			'position':'relative'
		}).attr('id','tedTBdiv'+ndx.dIndex).appendTo($div_t);
		$div_t.css({
			//'border':'1px solid',
			'border':0,
			'overflow':'hidden',
			'position':'relative'
		}).attr('id','tedTdiv'+ndx.dIndex).appendTo($div_wrap);
		$div_c.css({
			'position':'relative',
			'text-align':'center',
			'overflow':'hidden'
		}).attr('id','tedTCdiv'+ndx.dIndex).prependTo($div_wrap);
		var captxt = $cap ? $cap.html() : '&nbsp;',
			$newcap = jQuery('<span></span>')
				//.css({
				//	'font-size':'1.3em'
				//})
				.appendTo($div_c).addClass('tedTcap')
				.attr('title','Table '+ndx.dIndex+' in '+title);
		$newcap.html(captxt);
		if ( $table[0].caption ) $cap.detach();
		else h += $newcap.outerHeight(true);
		return { 'w':w, 'h':h };
	},
	wt_in_sync : null,
	sync_ndx : 0,
	reformat_table : function ($table, ndx, title) {
		// The tables are wrapped with more than one <div> elements for
		// scrollability, reference bars, floating and fixed buttons.

		// A table is first wrapped with a <div> with overflow:auto css
		// style assignment, so oversized tables are scrollable.

		// Then wrapped again with a <div> with overflow:hidden and
		// position:relative styles, so reference bars and floating
		// buttons can be added here.

		// The caption, if any, is detached from the table and put
		// above it into another <div>, where the fixed buttons are
		// added.

		// Finally, the whole combination is wrapped within a <div>
		// so the whole things can be considered as one object in
		// the page flow.

		var twh = { 'w':0, 'h':0 };
		if ( ! $table.parent().is('[id^=tedTBdiv]') ) {
			// If this table is not yet wrapped with those cool div's,
			// do it here.
			twh=TWtid.create_table_wrappers($table,ndx,title);
		} else {
			twh.w = $table.outerWidth(true);
			twh.h = $table.outerHeight(true);
		}
		var $div_tb = $table.parent(),
			$div_t = $div_tb.parent(),
			$div_wrap = $div_t.parent(),
			$div_c = $div_wrap.find('[id^=tedTCdiv]'),
			$elem = $table.parent(),
			eh = TWtid.css_size(
					config.options.txtTWtidMaxHeight.trim(),
					$elem),
			ew = TWtid.css_size(
					config.options.txtTWtidMaxWidth.trim(),
					$elem),
			fs = TWtid.css_size($elem.css('font-size')),
			rows = $table[0].rows.length,
			scw = TWtid.scroll_bar_width($div_tb),
			caph = $div_c.outerHeight(true), v0w = fs;

		while ( (rows/=10) > 1 ) v0w += fs;
		if ( v0w == fs ) v0w = fs*2;
		var oversize = false;
		if (twh.w+v0w+2 > ew) {
			oversize = true; twh.w = ew-v0w-1;
		}
		$div_tb.width(twh.w);
		$div_c.width(twh.w);
		$div_t.width(twh.w).attr('v0w',v0w);
		$div_wrap.width(twh.w);

		if (twh.h+2 > eh) {
			oversize = true; twh.h = eh-2;
			$div_tb.height(twh.h-caph);
			$div_t.height(twh.h-caph+1);
			$div_wrap.height(twh.h+2);
		}

		$table.attr('oversize', oversize?'true':'');
		var lh=TWtid.css_size($div_c.css('line-height')),
			$btn;

		if ( oversize ) {
			$div_tb.scroll( function () {
				var $div_tb = jQuery(this),
					$div_t = $div_tb.parent(),
					$table = $div_tb.find('table'),
					scrL = $div_tb.scrollLeft(),
					scrT = $div_tb.scrollTop();
				//$div_t.closest('div[id=tiddlerDisplay]')
				//	.find('a[id^=tedTbtnH]')
				//	.fadeTo(0,(scrL||scrT ? 1 : 0));
				TWtid.table_scrolled(
					$div_t, $div_tb.position()
					, scrL, scrT);
				//$div_tb.css({
				//	'border-left':(scrL?$table.css('border-left'):'0px'),
				//	'border-top':(scrT?$table.css('border-top'):'0px')
				//});
				if ( ! TWtid.wt_in_sync ) {
					// Save and synchronize scroll position
					var wt = TWtid.wrapper_tiddler($table);
					var ndx = TWtid.element_index($table,wt);
					TWtid.wt_in_sync = wt;
					TWtid.save_table_info(
						wt.tiddler
						,ndx.dIndex
						,{'ScrollPos':{'left':scrL,'top':scrT}}
					);
					// Synchronize all copies.
					wt.$wrapper.each(function(n,w){
						var $t = TWtid.table_element
								(TWtid.find_tables(jQuery(w)),ndx,wt,n);
						if ( ! $t ) return;
						$t.parent().scrollLeft(scrL).scrollTop(scrT);
					});
				}
				if ( ++TWtid.sync_ndx
						== TWtid.wt_in_sync.$wrapper.size() ) {
					TWtid.wt_in_sync = null;
					TWtid.sync_ndx = 0;
				}
			});
		} else {
			$div_tb.unbind('scroll');
		}

		return oversize;
	},
	table_scrolled : function ($div_t,tbpos,scrL,scrT) {
		// Scroll fixed rows/columns.
		var $fixR = $div_t.find('div.tedTfixedH'),
			$fixV = $div_t.find('div.tedTfixedV'),
			$table = $div_t.find('table'),
			bwl=TWtid.css_size($table.css('border-left-width')),
			bwt=TWtid.css_size($table.css('border-top-width'));
		if ( bwt == 0 ) bwt = 1;
		$fixR.css('border-left-width',scrL?0:bwl)
			.find('.tedTfixedHR').css('left', (scrL ? bwl : 0)
										+(config.browser.isChrome
											&& config.browser.isLinux
										? 0.2
										: 0)-scrL);
		$fixV.css('border-top-width',scrT?0:bwt)
			.find('.tedTfixedVT').css('top', (scrT ? bwt : 0)
									+(config.browser.isChrome
											&& config.browser.isLinux
										? 0.25
										: (config.browser.isIE9
											? 1.25
											: 0))-scrT);
	},

	remove_math : function (title) {
		var pm1 = 0, pm2 = 0;
		while ( pm1 < title.length ) {
			var inline = true;
			pm2 = title.indexOf('\(', pm1);
			if ( pm2 == -1 ) {
				inline = false;
				pm2 = title.indexOf('\[');
			}
			if ( pm2 == -1 )
				// No math expression, returns the text.
				return pm1>0?title.substring(pm1):title;
			if ( pm2 > pm1 ) {
				// Title contains Math expression, returns the text
				// before math.
				return title.substring(pm1, pm2);
			} else //if ( pm2 == pm1 )
				// Title starts with a Math expression, skip it and
				// look for the following non-math text.
				pm1=title.indexOf((inline?'\)':'\]'), pm1+2)+2;
		}
		return '';
	},

	tiddler_slice : function ( title ) {
		if ( ! title ) return '';
		var p = title.indexOf(config.textPrimitives.sliceSeparator);
		return p > -1
					? title.substring
						(p+config.textPrimitives.sliceSeparator.length)
					: '';
	},
	tiddler_section : function ( title ) {
		if ( ! title ) return '';
		var p = title.indexOf(config.textPrimitives.sectionSeparator);
		return p > -1
					? title.substring
						(p+config.textPrimitives.sectionSeparator.length)
					: '';
	},
	tiddler_title : function ( title ) {
		var p = title.indexOf(config.textPrimitives.sectionSeparator);
		if ( p == -1 )
			p = title.indexOf(config.textPrimitives.sliceSeparator);
		return p > -1 ? title.substring(0,p) : title;
	},
	get_tiddler : function ( title, where ) {
		if ( ! where || (where != 'story' && where != 'store') )
			where = store;
		return where.getTiddler(this.tiddler_title(title));
	},
	direct_wrapper : function ( $elem, wt ) {
		// Find the direct wrapper of an element.
		var $w = null;
		if ( ! wt ) {
			// div.tabContents contains the <<tabs ...>> transcluded tiddler;
			// span[tiddler] contains the <<tiddler ...>> transcluded tiddler;
			// div.sliderPanel contains the <<slider ...>> transcluded tiddler;
			// span.sliderPanel contains the <<foldHeadings>> folded content.
			// div.viewer contains the regular tiddler (non-transcluded);
			return $elem.closest('.tabContents'+',span[tiddler]'
											+',.sliderPanel'+',.viewer');
		} else {
			if ( wt.$wrapper.size() == 1 ) return wt.$wrapper;
			wt.$wrapper.each(function(n,w){
				if ( jQuery.contains(w,$elem[0]) ) {
					$w = jQuery(w);
					return false;
				}
			});
			return $w;
		}
	},
	is_wrapper : function ($w) {
		// div.viewer contains the regular tiddler (non-transcluded);
		// div.tabContents contains the <<tabs ...>> transcluded tiddler;
		// span[tiddler] contains the <<tiddler ...>> transcluded tiddler;
		// span.sliderPanel contains the <<foldHeadings>> folded content.
		return $w.is('.viewer,.tabContents,span[tiddler],.sliderPanel');
	},
	wrapper_info : function($w) {
		var info = { 'selector':'', 'macro':'' };
		if ( $w.is('div.viewer,#tiddlerDisplay') )
			info.selector = 'div.viewer,#tiddlerDisplay';
		else if ($w.is('span[tiddler]')) {
			info.selector = 'span[tiddler]';
			info.macro = 'tiddler';
		} else if ($w.is('.tabContents')) {
			info.selector = '.tabContents';
			info.macro = 'tabs';
		} else if ($w.is('.tabset')) {
			info.selector = '.tabset';
			info.macro = 'tabs';
		} else if ($w.is('div.sliderPanel')) {
			info.selector = 'div.sliderPanel';
			info.macro = 'slider';
		} else if ($w.is('span.sliderPanel')) {
			info.selector = 'span.sliderPanel';
			info.macro = 'foldHeadings';
		}
		return info;
	},
//}}}
/***
!! wrapper_from_title
***/
//{{{
	wrapper_from_title : function (title, partial) {
		// Find all the wrappers for a tiddler.
		// This is called when a tiddler is known but its wrapper
		// is not.

		// A tiddler may be loaded multiple times and displayed in
		// different wrappers with transclusion.
		// This function finds all the wrappers corresponding to the
		// same tiddler title.

		// The 2nd argument partial can be either true or false.
		// If true, only the partially transcluded contents are being
		// looked for.

		// First we go to the top level, find the DIV with attribute
		// 'tiddler', which is either the wrapper created by TW itself
		// (non-transcluded) or by {{{<<slider...>>}}} macro. Then find
		// the SPAN's with attribute 'tiddler', which are the wrappers
		// created by {{{<<tiddler ...>>}}} macro. Finally we find the
		// elements with class '.tabSelected' and attribute 'content',
		// which are wrappers created by <<tabs ...>> macro.

		// This function returns an object containg the following:
		//		$wrapper:	a jQuery object representing all the rendered
		//						copies of the corresponding tiddler.
		//							If there are more than 1 wrappers found,
		//							the current one, the one having focus or
		//							receiving events, would be placed as the
		//							first, i.e., $wrapper[0].
		//		tiddler:		The corresponding tiddler.
		//		title:		The title used to search for the tiddler
		//						and wrappers.

		title = this.remove_math(title);
		if ( title === '' ) {
			// All math title, not yet decided what to do...
			return null;
		}

		var tid_title = this.tiddler_title(title);
		var $w0 = jQuery(document).find('div[id=tiddlerDisplay]');
		var $w1, $w2, $w3;
		if ( tid_title == title ) {
			// A tiddler title is passed in, we find all its copies
			// in one shot, including non-transcluded, normally
			// transcluded, and partially transcluded contents.

			// Non-transcluded or <<slider>> transcluded
			$w1 = $w0.find('div[tiddler*="'+title+'"]');
			// <<tiddler>> transcluded
			$w2 = $w0.find('span[tiddler*="'+title+'"]');
			// <tabs>> transcluded
			$w3 = $w0.find('.tabSelected[content*="'+title+'"]')
						.parent().next();
			return $w3.add($w2).add($w1);
		} else {
			// A partially transcluded title is passed in, we find
			// all the partially transcluded copies first, then
			// find all the normally transcluded and/or non-trnascluded
			// copies, if the 2nd argument "partial" is false.

			title = TWtid.remove_header_tail(title);
			//title = TWtid.escape_string(title);
			// Non-transcluded or <<slider>> transcluded
			$w1 = $w0.find('div[tiddler*="'+title+'"]');
			// <<tiddler>> transcluded
			$w2 = $w0.find('span[tiddler*="'+title+'"]');
			// <tabs>> transcluded
			$w3 = $w0.find('.tabSelected[content*="'+title+'"]')
						.parent().next();
			if ( ! partial ) {
				var $w11 = $w0.find('div[tiddler="'+tid_title+'"]');
				var $w22 = $w0.find('span[tiddler="'+tid_title+'"]');
				var $w33 = $w0.find('.tabSelected[content="'+tid_title+'"]')
								.parent().next();
				return $w3.add($w33).add($w2).add($w22)
								.add($w1).add($w11);
			} else
				return $w3.add($w2).add($w1);
		}
	},
//}}}
/***
!! title_from_wrapper
***/
//{{{
	title_from_wrapper : function ($w) {
		var title = $w.attr('tiddler');
		if ( title ) return title;
		if ( $w.is('#tiddlerDisplay') )
			return $w.find('[tiddler]').attr('tiddler');
		if ( $w.is('.viewer') )
			return $w.parent().attr('tiddler');
		if ( $w.is('.tabSelected') )
			return $w.attr('content');
		if ( $w.is('.tabContents') )
			return $w.parent().find('.tabSelected').attr('content');
		return '';
	},
//}}}
/***
!! wrapper_tiddler
***/
//{{{
	wrapper_tiddler : function ($elem, outer_most) {
		// Find the wrapper and corresponding tiddler for an element.
		// This is called, for example, when user clicked on some
		// button and we need to find its wrapper and/or tiddler
		// to do something.
		// If outer_most is true, we look for the outer-most wrapper,
		// otherwise we start from the inner-most possible wrapper
		// created by <<tiddler ...>> macro.

		var wt =	{
						'$wrapper':null
						,'tiddler':null
						,'title':TWtid.title_from_wrapper($elem)
					};
		if ( wt.title ) {
			if ( (wt.tiddler=this.get_tiddler(wt.title)) ) {
				wt.$wrapper=this.wrapper_from_title(wt.title);
			}
			return wt;
		}

		var $wrapper, partial = false;
		if ( ! outer_most ) {
			// First we look for a possible wrapper created by
			// <<tiddler ...>> macro.
			$wrapper = $elem.closest('span[tiddler]');
			if ( $wrapper.size() > 0 ) {
				wt.title = $wrapper.attr('tiddler');
//displayMessage('Looking for '+$elem[0].nodeName+' in <<tiddler>> transcluded '+wt.title);
			} else {
				// Then we look for a possible wrapper created by
				// <<tabs ...>> macro.
				$wrapper = $elem.closest('.tabContents');
				if ( $wrapper.size() > 0 ) {
					wt.title = $wrapper.parent()
								.find('.tabSelected').attr("content");
					//$wrapper = $wrapper.parent().next();
//displayMessage('Looking for '+$elem[0].nodeName+' in <<tabs>> transcluded '+wt.title);
				}
			}

			if ( wt.title ) {
				if ( config.macros.foldHeadings ) {
					$wrapper = $elem.closest('span.sliderPanel');
					if ( $wrapper.size() > 0 ) {
//displayMessage('Looking for '+$elem[0].nodeName+' in <<foldHeadings>> folded '+wt.title);
						partial = true;
						wt.title+=TWtid.header_title($wrapper.prev());
						wt.$wrapper = $wrapper;
					}
				}
				if ( (wt.tiddler=this.get_tiddler(wt.title)) ) {
					$wrapper=this.wrapper_from_title
									(wt.title,partial);
//displayMessage('Looking for '+$elem[0].nodeName+' in '+$wrapper.size()+' wrappers in '+wt.title);
					if ( wt.$wrapper ) wt.$wrapper.add($wrapper);
					else wt.$wrapper = $wrapper;
				}
				return wt;
			}
		}
		// Now we look for the outer-most wrapper created
		// by TiddlyWiki itself (non-transcluded).
		$wrapper = $elem.closest('div[tiddler]');
		if ( $wrapper.size() > 0 ) {
			wt.title = $wrapper.attr("tiddler");
			if ( config.macros.foldHeadings ) {
				$wrapper = $elem.closest('span.sliderPanel');
				if ( $wrapper.size() > 0 ) {
					partial = true;
					wt.title+=TWtid.header_title($wrapper.prev());
					wt.$wrapper = $wrapper;
				}
			}
			if ( (wt.tiddler=this.get_tiddler(wt.title)) ) {
				$wrapper=this.wrapper_from_title
								(wt.title,partial);
				if ( wt.$wrapper ) wt.$wrapper.add($wrapper);
				else wt.$wrapper = $wrapper;
			}
		}
		return wt;
	},
//}}}
/***
!!
***/
//{{{
	find_wrapper : function ( $et ) {
		// Find the tiddler wrapper(s) for an element or a tiddler.
		// The argument should be either a jQuery object or a string
		// (for tiddler title).
		if ( typeof $et == 'string' ) {
			return this.wrapper_from_title(this.tiddler_title($et));
		} else {
			// Find the wrapper for an element.
			var wt = this.wrapper_tiddler($et);
			return wt.$wrapper;
		}
	},
	find_tiddler : function($elem) {
		var wt = this.wrapper_tiddler($elem);
		return wt.tiddler;
	},

	init_table_rows : function ($table,refresh,ndx,title,text) {
		var $rows = $table.find('tr');
		$rows.each(function(r,tr){
			jQuery(tr).attr('row', r);
		});

		if ( refresh && config.options.chkTWtidMultiLine ) {
			var r0 = TWtid.table_first_line(text,ndx,title),
				row, rowtxt, ctxt;
			$rows.each( function(r, tr) {
				row = TWtid.line_number_of_table_row(text,r0,r);
				if ( ! text[row] ) return;
				rowtxt = TWtid.split_table_row ( text[row] );
				jQuery(tr).find('th,td').each(function(c,cell){
					// The .text() method removes <br> tags in
					// the text, the .html() method gives HTML
					// markups for links, neither of which is
					// what we want here. Retrieve the wikitext
					// directly.

					// Find the right cell (skip the spanned columns).
					ctxt = TWtid.remove_style_text(
								rowtxt[TWtid.cell_index_in_line(rowtxt,c)]
							);

					// The following line of codes is to avoid error in the
					// not-yet-supported situations of {{{partial transclusion}}},
					// in which only part of a tiddler, instead of it all, is
					// transcluded into the current one.
					// For example, one can transclude only the content under
					// first header of XXX with
					//		{{{<<tiddler 'XXX##first header'>>}}}
					if ( ! ctxt ) return;

					if ( /<br/.test(ctxt) ) {
						ctxt = ctxt.replace(/ <br>/mg,'\n').
								replace(/<br>/mg, '\n').
								replace(/ <br \/>/mg, '\n').
								replace(/<br \/>/mg, '\n');
						jQuery(cell).empty();
						wikify ( ctxt, cell );
					} else if ( /^[\*\#]/.test(ctxt.trim()) ) {
						jQuery(cell).empty();
						wikify ( ctxt, cell );
					}
				});
			});
		}
	},

	scroll_bar_width : function ( $elem ) {
		var of = $elem.css('overflow');
		$elem.css('overflow', 'scroll');
		var elem = $elem[0],
			w = elem.offsetWidth - elem.clientWidth;
		$elem.css('overflow', of);
		return w;
	},
	row_with_max_col : function ($table) {
		var nr = $table.attr('maxcol');
		if (nr) return $table.find('tr').eq(nr*1);

		var $tr = null, cols = 0;
		$table.find('tr').each(function(n,tr){
			if ( tr.cells.length > cols ) {
				cols = tr.cells.length;
				$tr = jQuery(tr);
				$table.attr('maxcol',n);
			}
		});
		return $tr;
	},
	table_width : function ( $table, adjust ) {
		if ( !adjust ) return $table.outerWidth(true);
		var minch = config.options.txtTWtidMinCellWidth*1,
			w = 0, fixed = config.options.chkTWtidFixedColWidth,
			$tr = TWtid.row_with_max_col($table);
		$tr.find('th,td').each(function(n,c){
			var $c = jQuery(c),
				minw = TWtid.css_size($c.css('font-size'))*minch,
				cw = $c.width();
			if ( fixed ) $c.width(minw);
			else if ( cw < minw ) $c.width(minw);
			w += $c.outerWidth(true);
		});
		$table.width(w);
		return w;
	},

	is_button : function ($elem,$btn) {
		var found = false;
		if ( ! $btn ) $btn = TWtid.$btn_lt;
		$btn.each(function(n,btn){
			if ( $elem[0] == btn ) {
				found = true;
				return false;
			}
		});
		return found;
	},

	button_width : function ($btn) {
		if ( ! $btn ) $btn = TWtid.$btn_lt;
		var width;
		if ( $btn[0].style.display == 'none' ) {
			$btn.show();
			width = $btn.width();
			$btn.hide();
		} else {
			width = $btn.width();
		}
		return width+1.5;
	},
	button_height : function ($btn) {
		if ( ! $btn ) $btn = TWtid.$btn_lt;
		var height;
		if ( $btn[0].style.display == 'none' ) {
			$btn.show();
			height = $btn.height();
			$btn.hide();
		} else {
			height = $btn.height();
		}
		return height;
	},

	$cur_block : null,
	cur_block : function ( $elem ) {
		if ( $elem === undefined ) return TWtid.$cur_block;
		TWtid.$cur_block = $elem;
	},
	$btn_lt : null,
	inactive_elem : function($elem) {
		return TWtid.is_button($elem,TWtid.$btn_lt);
	},

	element_box : function($elem) {
//displayMessage('element_box('+$elem.size()+')');
		var $prev = jQuery($elem[0]);
		var pos = TWtid.element_offset($prev);
		var ew, eh;
		if ( $elem.size() < 3 ) {
			ew = $elem.innerWidth();
			eh = $elem.innerHeight();
		} else {
			var $parent = jQuery($elem[2]);
			var ppos = TWtid.element_offset($parent);
			ew = $parent.innerWidth();
			pos.left = ppos.left;
			if ( jQuery.contains($parent[0],$prev[0]) ) {
				eh = $prev.outerHeight();
			} else {
				pos.top = ppos.top;
				eh = 0;
			}
			pos.top += (eh+4);
			var $next = jQuery($elem[1]);
			if ( jQuery.contains($parent[0],$next[0]) ) {
				if ( $next.is('table') )
					$next = $next.closest('.tedTable');
				eh=TWtid.element_offset($next).top-pos.top-4;
			} else {
				eh=ppos.top+$parent.height()-pos.top+4;
			}
		}
//displayMessage($elem.size()+' element_box('+pos.left+','+pos.top+')-('+ew+','+eh+')');
		return	{
					'left':pos.left,
					'top':pos.top,
					'width':ew,
					'height':eh
				};
	},

	$border_down : null,
	$border_left : null,
	$border_right : null,
	focus : function($elem,action) {
		if ( ! TWtid.$border_up ) {
			var bw='1px', bs='dashed';
			var $display=jQuery(document).find('div[id=tiddlerDisplay]');
			TWtid.$border_up = jQuery('<div></div>').appendTo($display)
								.css({
									'position':'absolute'
									,'border-top-width':bw
									,'border-top-style':bs
									,'height':0
								});
			TWtid.$border_down = jQuery('<div></div>').appendTo($display)
								.css({
									'position':'absolute'
									,'border-top-width':bw
									,'border-top-style':bs
									,'height':0
								});
			TWtid.$border_left = jQuery('<div></div>').appendTo($display)
								.css({
									'position':'absolute'
									,'border-left-width':bw
									,'border-left-style':bs
									,'width':0
								});
			TWtid.$border_right = jQuery('<div></div>').appendTo($display)
								.css({
									'position':'absolute'
									,'border-left-width':bw
									,'border-left-style':bs
									,'width':0
								});
		}

		TWtid.$border_up.hide();
		TWtid.$border_down.hide();
		TWtid.$border_left.hide();
		TWtid.$border_right.hide();

		TWtid.$cur_block = null;
		var esize = $elem ? $elem.size() : 0;
		if ( readOnly || esize == 0 || action == 'off'
				|| (esize==1
						&& $elem.is('.tabset,.toolbar,.subtitle,.tiddler'
										+'.tagged,.tagInfo,.tidTags'))
			)
			return false;

		var $w = (esize==1 && $elem.is('table'))
					? $elem.closest('.tedTable') : $elem;
		var eb = TWtid.element_box($w);
		var lh = TWtid.css_size('font-size',$elem);
//displayMessage('$elem[0].classes='+TWtid.element_classes(jQuery($elem[0])));
//if(esize>1)displayMessage('$elem[1].classes='+TWtid.element_classes(jQuery($elem[1])));
//displayMessage('eb=('+eb.left+','+eb.top+')-('+eb.width+','+eb.height+')'+' lh='+lh);
		if ( eb.height >= lh && eb.top > lh && eb.left > lh ) {
			TWtid.$cur_block = $elem;
			TWtid.$border_up.css({
				'left':eb.left
				,'top':eb.top
				,'width':eb.width
			}).show();
			TWtid.$border_down.css({
				'left':eb.left
				,'top':eb.top+eb.height
				,'width':eb.width
			}).show();
			TWtid.$border_left.css({
				'left':eb.left
				,'top':eb.top
				,'height':eb.height
			}).show();
			TWtid.$border_right.css({
				'left':eb.left+eb.width
				,'top':eb.top
				,'height':eb.height
			}).show();
			return true;
		}
		return false;
	},

	mousemove : function(ev) {
		ev = ev || window.event;
		var $elem = jQuery(
							document.elementFromPoint(
								ev.clientX
								,ev.clientY
							)
						);
		if ( ! TWtid.$btn_lt ) {
			TWtid.$btn_lt = TWtid.create_button ( 'H',
				"Scroll to A0",
				function() {
					if ( TWtid.button_active(jQuery(this)) ) {
						TWtid.$cur_block.parent().animate({
							'scrollLeft':0,
							'scrollTop':0
						});
					}
				}
			);
			TWtid.$btn_lt = TWtid.$btn_lt.add(
				TWtid.create_button ( 'T',
					"Transpose",
					function() {
						var $btn = jQuery(this);
						if ($btn.parent().find('.tedTopt').size()>0)
							return;

						var $table = TWtid.$cur_block,
							wt = TWtid.wrapper_tiddler($table),
							ndx = TWtid.element_index($table,wt),
							text = wt.tiddler.text.split('\n'),
							r0=TWtid.table_first_line(text,ndx,wt.title),
							rl=TWtid.table_last_line(text,r0);
						TWtid.transpose_table(text,r0,rl);
						TWtid.save_text(wt.tiddler,text);
						TWtid.refresh_wrapper(wt,true);
					}
				)
			);
			TWtid.$btn_lt.appendTo(this).hide();
		}
		if ( ! TWtid.inactive_elem($elem) ) {
			var $blk = TWtid.block_element($elem,ev);
			if ( ! $blk ) {
				TWtid.focus();
			} else if ( ! TWtid.$cur_blk
								|| TWtid.$cur_blk[0] != $blk[0] ) {
//displayMessage('$elem[0]='+$elem[0].nodeName+' ('+TWtid.element_classes($elem)+') $blk[0]='+$blk[0].nodeName+' ('+TWtid.element_classes(jQuery($blk[0]))+')'+($blk.size()>2?(' $blk[1]='+$blk[1].nodeName+' ('+TWtid.element_classes(jQuery($blk[1]))+')'+' $blk[2]='+$blk[2].nodeName+' ('+TWtid.element_classes(jQuery($blk[2]))+')'):''));
				TWtid.focus($blk,'on');
			}
		}
	},
//}}}

// // Main functions
//{{{
	wrapper_closed : function ($elem) {
		// A slider panel, created by either <<slider>> or
		// <<foldHeadings>>, can be closed or open, so we need to
		// check its status to make sure we do the jobs only when
		// its open.
		var $slider = $elem.closest('.sliderPanel');
		return ( $slider.size() > 0
				&& $slider[0].style.display == 'none' );
	},

	hasClass : function ( $table, ndx, cstr, wt ) {
		if ( $table.hasClass(cstr) ) return true;
		if ( ! wt || ! wt.tiddler ) return false;
		// The table does not have the specified class, could be removed by
		// SortableGridPlugin. Check the wikitext that defines this table.
		if ( config.macros.sortableGridPlugin ) {
			// sortableGridPlugin is installed. Find the wikitext and look
			// for table classes.
			var text = wt.tiddler.text.split ( '\n' ),
				r0 = TWtid.table_first_line(text,ndx,wt.title),
				rl = TWtid.table_last_line ( text, r0 );
			for ( var r = r0; r <= rl; r++ )
				if ( /[kK]$/.test(text[r]) &&
					(text[r].indexOf(cstr)>-1) )
						return true;
		}
		return false;
	},

	prepare_table : function ($table, ndx, wt, text) {
		if ( TWtid.wrapper_closed ($table)
					|| $table.closest('.tedTable').size() > 0 )
			return false;
		// Prepare the table rows for editing.
		var $where = $table.parent();
		if ( $where.is('[id^=tedT]') )
		//if ( /^tedT/.test($where.attr('id')) )
			$where = $where.parent().parent().find('div[id*=tedTCdiv]');
		var lh=TWtid.css_size($where.css('line-height'));
		// Store row index as an attribute. This is necessary
		// because different browsers give different index
		// values in tr.rowIndex.
//displayMessage('initializing table '+TWtid.index_string(ndx.rIndex));
		TWtid.init_table_rows($table,true,ndx,wt.title,text);
//displayMessage('table '+TWtid.index_string(ndx)+' initialized');
		if ( config.options.chkTWtidEnabled ) {
			var oversize = TWtid.reformat_table($table,ndx,wt.title);
			//$where = $table.parent().parent()
			//			.parent().find('div[id*=tedTCdiv]');
			//var caph = $where.outerHeight(true);

			// If this table is sortable by TableSortingPlugin or
			// SortableGridPlugin, hijack their sorting function.
			if ( $table[0].tHead ) {
				if ( config.tableSorting ) {
					// The TableSortingPlugin is installed.
					if ( !TWtid.sortTable ) {
						TWtid.sortTable =
							config.tableSorting.sortTable;
						config.tableSorting.sortTable =
							function(o,rev)
								{TWtid.sort(o,rev);};
					}
				} else if ( config.macros.sortableGridPlugin ) {
					// The SortableGridPlugin is installed.
					if ( !TWtid.ts_resortTable ) {
						TWtid.ts_resortTable =
							config.macros.
								sortableGridPlugin.ts_resortTable;
						config.macros.
							sortableGridPlugin.ts_resortTable =
							function(lnk){TWtid.sort(lnk);};
					}
				}
			}
		}

		TWtid.fix_rows($table,true).fix_cols($table,true);
		return config.options.chkTWtidEnabled;
	},

	closest_block : function ($elem,eb,ev,lh) {
		var x = ev.clientX, y = ev.clientY + lh, e;
		var ystop = lh < 0
						? 0 //eb.top
						: (eb.top+eb.height);
		var $blk, dy = y - ystop;
		while ( (lh>0 && dy<0) || (lh<0 && dy>0) ) {
			if ( (e=document.elementFromPoint(x,y)) ) {
				$blk = TWtid.block_element(jQuery(e));
//if($blk){TWtid.focus($blk,'on');alert('0');}
				if ( $blk && $blk[0] != $elem[0] ) break;
			}
//if(lh>0)displayMessage($blk[0].nodeName+' at '+y+' ('+ystop+')');
			$blk = null;
			y += lh;
			dy = y - ystop;
		}
//if(lh>0 && y>=ystop)displayMessage('lh='+lh+' ystop='+ystop+' (x,y)=('+x+','+y+') '+jQuery(document).find('div.title').size());
		return ($blk && ! $blk.is('.tagged,.tagInfo,.tidTags'))
					? $blk : $elem;
	},
	closest_blocks : function ($elem,ev) {
		// Mouse click happens over some text that does not
		// belong to any block element in the viewer.
		// Find the block elements that go before and after
		// this part of text.
		var lh = TWtid.css_size('line-height',$elem);
		// Find the previous and next block elements.
		var blk = new Array();
		var eb = TWtid.element_box($elem);
		blk[0] = TWtid.closest_block($elem,eb,ev,-lh)[0];
		blk[1] = TWtid.closest_block($elem,eb,ev,lh)[0];
		blk[2] = $elem[0];
		return (jQuery.contains($elem[0],blk[0])
				|| jQuery.contains($elem[0],blk[1]))
					? jQuery(blk)
					: null;
	},

	is_block_element : function($elem) {
		// Check if this $elem is a block element.
		switch ( $elem[0].nodeName ) {
			case 'DIV' :
				//return $elem.is('.title,.tabset');
				return true;
			case 'TABLE' :
				return true;
			case 'LI' :
			case 'BLOCKQUOTE' :
			case 'PRE' :
			case 'H1' :
			case 'H2' :
			case 'H3' :
			case 'H4' :
			case 'H5' :
			case 'H6' :
				return $elem.closest('th,td').size() == 0;
		}
		return false;
	},
	block_element : function ($elem,ev) {
		// Find the block element that contains this $elem.
		var $blk = null;
		if ( TWtid.is_wrapper($elem) ) {
//displayMessage('elem '+$elem[0].nodeName+' is a wrapper');
			if ( ev )
				$blk=TWtid.closest_blocks($elem,ev);
//if($blk)displayMessage('ev is between '+$blk[0].nodeName+' and '+$blk[1].nodeName);
			return $blk ? $blk : $elem;
		}
		if ( TWtid.is_block_element($elem) ) return $elem;
		if ( $elem.is('a.tab') ) {
			// $elem is one of the tabs created by <<tabs>> macro.
			// Return its parent, the tabset div.
			return $elem.parent();
		}
		$blk = TWtid.table_element($elem);
		if ( $blk && $blk.size() > 0 ) return $blk;
		if( $elem.is('DIV')
				&& TWtid.$cur_block
				&& TWtid.$cur_block.is('TABLE') ) {
			$blk = TWtid.$cur_block.closest('.tedTable');
			var pos = TWtid.element_offset($blk);
//displayMessage('page=('+ev.pageX+','+ev.pageY+') pos=('+pos.left+','+pos.top+') rb=('+(pos.left+$blk.width())+','+(pos.top+$blk.height())+')');
			if ( ev.pageX >= pos.left
					&& ev.pageY >= pos.top
					&& ev.pageX <= (pos.left+$blk.width())
					&& ev.pageY <= (pos.top+$blk.height()) ) {
				return TWtid.$cur_block;
			}
		}
		$blk = $elem.closest('h1,h2,h3,h4,h5,h6');
		if ( $blk.size() > 0 ) return $blk;
		$blk = $elem.closest('li');
		if ( $blk.size() > 0 ) return $blk;
		$blk = $elem.closest('blockquote');
		if ( $blk.size() > 0 ) return $blk;
		$blk = $elem.closest('pre');
		if ( $blk.size() > 0 ) return $blk;

		var $blks = null;
		$blk = $elem.closest('span');
		if ( TWtid.is_wrapper($blk) ) {
			if ( ev )
				$blks = TWtid.closest_blocks($blk,ev);
			return $blks ? $blks : $blk;
		}
		$blk = $elem.closest('div');
		if ( TWtid.is_wrapper($blk) ) {
			if ( ev )
				$blks = TWtid.closest_blocks($blk,ev);
			return $blks ? $blks : $blk;
		}
		return $blk.size() > 0 ? $blk : null;
	},

	apparent_dim : function ($elem) {
		switch ( $elem[0].nodeName ) {
			case 'TABLE' :
				if ( config.options.chkTWtidEnabled ) {
					$elem = $elem.parent();
				}
			case 'PRE' :
			case 'BLOCKQUOTE' :
				return {'W':$elem.width(), 'H':$elem.height()};
			case 'SPAN' :
			case 'DIV' :
				if ( $elem.is('.sliderPanel,.tabContents,[tiddler]') )
					return {'W':$elem.width(), 'H':$elem.height()};
		}
		var $place = $elem.find('span').size()>0
							? $elem.parent()
							: $elem;
		var $span = jQuery('<span></span>');
		if ( config.browser.isIE )
			$span.html($elem.html());
		else
			TWtid.copy_html($span,$elem);
		$span.appendTo($place);
		//if ( typeof MathJax !== 'undefined' )
		//	MathJax.Hub.Queue(['Typeset',MathJax.Hub,$span[0]]);
		var dim = {
				'W':$span.outerWidth(true)
				,'H':$span.outerHeight(true)
			}
		$span.remove();
		return dim;
	},

	find_text_nodes : function ($elem) {
		return $elem.contents().filter(function() {
						return this.nodeType == 3;
					})
	},

	find_elements : function ($e, name, onelevel) {
//displayMessage('finding '+name+' in '+TWtid.title_from_wrapper($e)+(onelevel?' one level':' all levels'));
		// Find the rendered elements of name under $e.
		// If onelevel is true, find children in the first level only,
		// otherwise find those in all levels.
		var $elems = onelevel ? $e.children(name) : $e.find(name),
			$viewer = $e.is('.viewer')
						? $e
						: $e.find('div.viewer');
//$elems.each(function(n,e){displayMessage(jQuery(e).text());});
		// If $e is the outer-most container of a non-transcluded
		// tiddler, then its content may contain transcluded tiddlers,
		// which may also contain the elements being searched here.
		// Remove those transcluded elements if existed.
		if ( $viewer.size() > 0 ) {
			var transpanel='div.sliderPanel \
							,div.tabContents \
							,span[tiddler]';
			var $transcluded =
					onelevel
					? $viewer.children(transpanel)
					: $viewer.find(transpanel);
			if ( $transcluded.size() > 0 ) {
				$elems = $elems.not(
					onelevel
					? $transcluded.children(name)
					: $transcluded.find(name)
				);
			}
		}
		return $elems;
	},

	find_tables : function ($elem) {
		return this.find_elements($elem, 'table');
	},

	find_headers : function ($elem) {
		return this.find_elements($elem, 'h1,h2,h3,h4,h5,h6');
	},

	find_list_items : function ($elem) {
		var $items = this.find_elements($elem, 'li')
								.not('.tagged li, .tidTags li');
		var $item0 = jQuery($items[0]);
		if ( $item0.text().indexOf('not tagging')>-1 )
			$items = $items.not($item0);
		return $items.not($elem.find('td li,th li'));
	},

	prepare_elements : function ($elem, wt) {
		if ( $elem.closest('#displayArea').size() == 0 )
			return;
		if ( ! wt || ! wt.tiddler ||
				store.isShadowTiddler(wt.tiddler.title) )
			return;

		var text = wt.tiddler.text.split('\n');

		TWtid.find_tables($elem).each(function(n, table){
			var $table = jQuery(table);
			if ( $table.closest('.syntaxhighlighter').size() == 0 ) {
				var ndx={'rIndex':n,'dIndex':-1};
				TWtid.prepare_table($table,ndx,wt,text);
			}
		});
	},

	OfficialExample : function ( title ) {
		return title
				? /^TWtid--Example/.test(title)
				: false;
	},

	after_math : function (msg) {
		var $e = jQuery(msg[1]);
		switch ( msg[1].nodeName ) {
			case 'TD' :
			case 'TH' :
				var $table = $e.closest('table');
				TWtid.fix_rows_adjust($table).fix_cols_adjust($table);
				break;
			case 'SPAN' :
				// transcluded with <<tiddler>>
			case 'DIV' :
				// Non-transcluded or transcluded with <<tabs>> or <<slider>>
				if ( $e.closest('#displayArea').size() > 0 )
					TWtid.find_tables($e).each(function(){
						var $table = jQuery(this);
						TWtid.fix_rows_adjust($table)
								.fix_cols_adjust($table);
					});
				break;
		}
	},

	check_MathJax : function () {
		if ( config.extensions.MathJax ) {
			if ( typeof MathJax!=='undefined' ) {
				// The MathJax was loaded completely. Remove the
				// MathJaxPlugin if it's still in the hijacking chain.
				if ( story.displayTiddler ==
						config.extensions.MathJax.displayTiddler ) {
					story.displayTiddler =
						config.extensions.MathJax.displayTiddler_old;
					MathJax.Hub.Queue(['Typeset',MathJax.Hub]);
					MathJax.Hub.Register.MessageHook
						("End Process",TWtid.after_math);
				}
			}
		}
	},

	slider_close : function ($e, wt) {
	},
	header_title : function ($h,wt,title_only) {
		var title = $h.text();
		var head = config.macros.foldHeadings.hidelabel;
		if ( title.indexOf(head) == -1 ) {
			head = config.macros.foldHeadings.showlabel;
			if ( title.indexOf(head) == -1 )
				head = '';
		}
		title = config.textPrimitives.sectionSeparator
				+(head ? title.substring(head.length).trim()
						: title);
		if ( ! title_only ) {
			// Look for multiple occurence of the same title
			if ( ! wt ) wt = TWtid.wrapper_tiddler($h);
			var $w = TWtid.direct_wrapper($h, wt);
			var $hs = TWtid.find_headers($w);
			var hndx = $hs.index($h);
//displayMessage(hndx+' -- '+title);
			var hoccur = 0;
			for ( var n = 0; n < hndx; n++ ) {
				var $hprev = jQuery($hs.get(n));
				var tprev = TWtid.header_title($hprev,null,true);
				if ( tprev == title ) hoccur++;
//displayMessage(n+' -- '+tprev+' hoccur='+hoccur);
			}
			if ( hoccur > 0 ) {
				title += ('?'+hoccur);
			}
		}
		return title;
	},

	lines_of_text : function(wikitext, r0, rl, newtxt) {
		// Gets/Sets lines of text, from r0 to rl, inclusive, of
		// the wikitext. If the last argument newtxt is undefined,
		// this function returns the lines of text from r0 to rl.
		// Otherwise it replaces the lines of text with the newtxt.

		if ( newtxt === undefined ) {
			// Gets the lines of text.
			var txt = rl>=r0 ? wikitext[r0] : '';
			for ( var r = r0+1; r <= rl; r++ )
				txt += '\n'+wikitext[r];
			return txt;
		} else {
			// Replaces the lines of text with newtxt.
			if ( newtxt )
				wikitext.splice(r0,rl-r0+1,newtxt);
			else
				wikitext.splice(r0,rl-r0+1);
		}
	},
	header_content : function ($h,wt) {
		if ( ! wt ) wt = TWtid.wrapper_tiddler($h);
		var ndx = TWtid.element_index($h,wt);
		var text = wt.tiddler.text.split('\n');
		var ln=TWtid.header_first_line(text,ndx,wt.title);
//displayMessage($elem.prev()[0].nodeName+TWtid.index_string(ndx)+' in '+wt.title+' found at '+ln);
		var ndx2 = { 'rIndex':-1,'dIndex':ndx.dIndex+1 };
		var ln2=TWtid.header_first_line(text,ndx2,wt.title);
//displayMessage('header '+TWtid.index_string(ndx2)+' in '+wt.title+' found at '+ln2);
		if ( ln2 == -1 ) ln2 = text.length;
		var content = text[ln+1];
		for ( var r = ln+2; r < ln2; r++ )
			content += '\n'+text[r];
		return content;
	},
	header_to_skip : function (title) {
		var pq = title.lastIndexOf('?');
		if ( pq > 0	&& pq < title.length-1 ) {
			return title.substring(pq+1)*1;
		}
		return 0;
	},
	remove_header_tail : function (title) {
		var pq = title.lastIndexOf('?');
		if ( pq > 0	&& pq < title.length-1
				&& ! /[\D]/.test(title.substring(pq+1)) ) {
			title = title.substring(0,pq);
		}
		return title;
	},
	pre_header_click : null,
	header_click : function () {
		TWtid.pre_header_click.apply(this,arguments);
		var $h = jQuery(this);
		var wt = TWtid.wrapper_tiddler($h);
		wt.title+=TWtid.header_title($h,wt);
		TWtid.prepare_wrapper($h.next(),wt);
	},
	prepare_wrapper : function ($e, wt) {
		if ( $e.is('.sliderPanel') ) {
			// This $e is a slider panel, which is created either
			// by <<slider ...>> macro or <<foldHeadings>> macro.
			if ( $e[0].style.display == "none" )
				// If the panel is closed then we don't do anything.
				return;
		}
		// Bind a click handler to foldable headings, if
		// FoldHeadingsPlugin is installed.
		if ( config.macros.foldHeadings ) {
			$e.find('h1.foldable, h2.foldable, h3.foldable\
						, h4.foldable, h5.foldable')
				.each(function(n,h){
					if ( ! TWtid.pre_header_click ) {
						TWtid.pre_header_click = h.onclick;
					}
					h.onclick = TWtid.header_click;
				});
		}

		function render_math ($e) {
			if ( typeof MathJax !== 'undefined' ) {
				var $t = $e.siblings('.title');
				if ( $t.size() > 0 )
					MathJax.Hub.Queue(['Typeset',MathJax.Hub,$t[0]]);
				MathJax.Hub.Queue(['Typeset',MathJax.Hub,$e[0]]);
			}
		}
		TWtid.check_MathJax ();
		if ( ! wt ) wt = this.wrapper_tiddler($e);
		if ( config.options.chkTWtidEnabled ) {
			TWtid.prepare_elements($e, wt);
			render_math($e);
		} else {
			render_math($e);
			TWtid.prepare_elements($e, wt);
		}
	},

	pre_refreshTiddler : null,
	refreshTiddler : function (title,template,force,
							customFields,defaultText) {
		var $elem = jQuery(TWtid.pre_refreshTiddler.apply(this,arguments));
		var $viewer = $elem.find('.viewer');
		var vs = $viewer.size();
		if ( vs == 0 ) $viewer = $elem;

		TWtid.prepare_wrapper($viewer);

		// Bind the mousemove event handler to the tiddlerDisplay area.
		// The unbind calls are necessary to prevent multiple
		// invocation upon single event due to multiply bound handler.
		$elem.closest('div[id=tiddlerDisplay]')
			.unbind('mousemove', TWtid.mousemove)
			.bind('mousemove', TWtid.mousemove)
		return $elem[0];
	},

	pre_popup_show : null,
	popup_show : function (valign,halign,offset) {
		TWtid.pre_popup_show.apply(this,arguments);
		var curr = Popup.stack[Popup.stack.length-1];
		TWtid.prepare_wrapper(jQuery(curr.popup));
		return curr;
	},

	pre_tabs_switchTab : null,
	tabs_switchTab : function (tabset,tab) {
		// Hijacking the switchTab function of <<tabs>> macro.
		TWtid.pre_tabs_switchTab.apply(this,arguments);
		var $tabset = jQuery(tabset);
		if($tabset.closest('div[id=tiddlerDisplay]').size()>0) {
			var $content = $tabset.next();
			TWtid.prepare_wrapper($content);
			if ( config.tableSorting
					&& config.tableSorting.refresh )
				config.tableSorting.refresh($content[0]);
		}
	},

	pre_tiddler_transclude : null,
	tiddler_transclude : function (wrapper,tiddlerName,args) {
		// Hijacking the handler of <<tiddler>> macro.
		TWtid.pre_tiddler_transclude.apply(this,arguments);
		var $w = jQuery(wrapper);
		if($w.closest('div[id=tiddlerDisplay]').size()>0) {
			TWtid.prepare_wrapper($w);
		}
	},

	pre_slider_handler : null,
	slider_handler : function (place,macroName,params) {
		// Hijacking the handler of <<slider>> macro.
		TWtid.pre_slider_handler.apply(this,arguments);
		var $p = jQuery(place);
		if($p.closest('div[id=tiddlerDisplay]').size()>0) {
			TWtid.prepare_wrapper($p.find('div[tiddler]'));
		}
	},
	pre_onClickSlider : null,
	onClickSlider : function () {
		// Hijacking the onClick handler of <<slider>> macro.
		TWtid.pre_onClickSlider.apply(this,arguments);
		TWtid.prepare_wrapper(jQuery(this).next());
	},

	refresh_wrapper : function (wt, re_render) {
		var $win = jQuery(window),
			scrL = $win.scrollLeft(),
			scrT = $win.scrollTop();
		if ( wt.jquery ) {
			var nwt = TWtid.wrapper_tiddler(wt);
			wt =	{
						'$wrapper':wt
						, 'tiddler':nwt.tiddler
						, 'title':nwt.title
					};
		}
		wt.$wrapper.each(function(n,e){
			var $e = jQuery(e), $v = $e.find('.viewer');
			if ( $v.size() == 0 ) $v = $e;
//displayMessage(TWtid.wrapper_info($e)+' '+$v[0].nodeName+' in '+wt.title);
			if ( re_render ) {
				var title = TWtid.title_from_wrapper($e);
				var text;
				if ( ! title ) {
					text = TWtid.header_content($e.prev(),wt);
				} else if ( TWtid.tiddler_section(title) ) {
//displayMessage('refreshing '+title);
					text = store.getTiddlerText(title);
				} else {
					text = wt.tiddler.text;
				}
//displayMessage('title='+title+' wt.tiddler.title='+wt.tiddler.title+' text= '+text);
				$v.empty();
				wikify(text, $v[0]);
				TWtid.$cur_block = null;
				//TWtid.$btn_lt = null;
			}
			if ( config.tableSorting )
				if ( config.tableSorting.refresh ) {
					config.tableSorting.refresh($v[0]);
				}
			TWtid.prepare_wrapper($v, wt);
		});
		$win.scrollLeft(scrL).scrollTop(scrT);
	},

	pre_go : null,
	go : function (here,ev) {
		// Hijacking the go function of SnapShot plugin.
		var $display = jQuery(here).closest('div[id=tiddlerDisplay]');
//displayMessage('attributes: '+TWtid.element_attributes(jQuery(here)));
//displayMessage('classes: '+TWtid.element_classes(jQuery(here)));
		var wt = TWtid.wrapper_tiddler($display);
//displayMessage('wt.title='+wt.title);
		var dfn = config.macros.snapshot.defaultFilename,
			fn = config.options.txtTWtidSnapshotFile;
		if ( ! fn )
			fn = dfn;
		else if ( fn == 'tiddler.title' ) {
			//today = new Date(),
			//m = today.getMonth()+1,
			//d = today.getDate(),
			fn = TWtid.find_tiddler($display).title
					//	+'('+(m<10?'0':'')+m+(d<10?'0':'')+d+')
					+ '.html';
		} else if ( fn.indexOf('.html') == -1 )
			fn += '.html';
		var $btn = config.options.chkTWtidSnapshotHideBtn
						? $display.find('a[id^=tedTbtn], a[snapID]')
						: null;
		config.macros.snapshot.defaultFilename = fn;
		if ( $btn ) $btn.hide();
		var result = TWtid.pre_go.apply(this,arguments);
		if ( $btn ) $btn.show();
		config.macros.snapshot.defaultFilename = dfn;
		return result;
	}
};
//}}}
