/***
!! Note
* @@color:red;This is a development snapshot which may or may not function properly.@@

|editable|k
|''Name:''|TWted|
|''Description:''|In-place view mode editor|
|''Author:''|Vincent Yeh (qmo.wcy2@gmail.com)|
|''Source:''|* (minimized) http://twtable.tiddlyspace.com/#TWted.min <br>* (regular) http://twtable.tiddlyspace.com/#TWted |
|''Type:''|plugin|
|''Version:''|1.6.3|
|''Status:''|This plugin is still under development.<br>You are welcome to try and send feedback. :-)|
|''Date:''|2012/10/19 released 1.4.0<br>2012/09/04 started from TableEditor 1.3.0|
|''License:''|Same as TiddlyWiki|
|''Core Version:''|2.6.5|
|''Needs to have:''|TWtid must be installed as well|

!!Features:
* Edit plain text as well as block elements in ~TiddlyWiki's view mode.
** If option chkTWtedEditAllTables is true, all tables in the tiddler are editble. Otherwise only tables with class "editable" are editable (see example below).
* Supports single-line and multi-line edit modes.
* An "E" button to toggle table edit mode.
* Edit the wiki text instead of the renderred html codes: just do as in TiddlyWiki's edit mode.
* Insert/Delete rows and columns anywhere in the table.
* Supports transclusion
** Directly change the content of a transcluded tiddler.
** Synchronized update for multiply transcluded copies of the same tiddler.
* Auto/Manual save file/upload to server.
**  Option chkTWtedManualSave toggles auto/manual save.
** Option  chkTWtedManualUpload toggles auto/manual upload.
** Works with UploadPlugin.
** Not sure with other plugins.
* Works on tables with spanned rows/columns.
* Works on tables with multiple tBodies.

!!Usage:
* Add class ''editable'' to the table you want to edit (see example below), or set the option chkTWtedEditAllTables to edit all tables.
* Add {{{<<noedit>>}}} to the cells that you don't want to edit.
* Check/Uncheck chkTWtidMultiLine to switch between multi-line and single-line edit modes. 
* Click on the "E" button at the top-right corner of the table to toggle edit mode for that table.
* In edit mode click on a table cell to edit.
* Press {{{Enter(single-line) / Ctrl-Enter(multi-line)}}} or click away (with {{{chkTWtedClickAway}}} set to {{{true}}}) to save the changes.
* Press {{{Cancel}}} to abandon the change.
* Check/uncheck option chkTWtedManualSave to toggle auto/manual save mode.
* Check/uncheck option chkTWtedManualUpload to toggle auto/manual upload mode using UploadPlugin.

!!Options
Click the {{{C}}} button for related options.

!!Examples
* [[TWted--Example--LargeTable]] or [[its external link|http://twtable.tiddlyspace.com/#TWted--Example--LargeTable]]
* [[TWted--Example]] or [[its external link|http://twtable.tiddlyspace.com/#TWted--Example]]

!!Todo:

!!!Revision history
* 2013/04/20 [1.6.3]
** Minor bug fixes.
* 2013/04/19 [1.6.2]
** Bug fixes for options panel.
* 2013/04/15 [1.6.1]
** Bug fixes for editing list items.
** Introduced option {{{chkTWtedIncludeSubs}}} to indicate whether the sub-lists shall be included to edit. The default behavior (false) is that only the text of the list item itself is extracted to edit upon mouse clicking. Set this option to true to include its sub lists, if any.
* 2013/04/14 [1.6.0]
** Much improved transclusion support (synchronization implemented for some cases).
*** Now you can directly edit the content transcluded with system macros {{{<<tiddler>>}}}, {{{<<tabs>>}}}, and {{{<<slider>>}}}.
** Edits section text. Works on
*** regular sections or those folded with FoldHeadingsPlugin
*** sections with the same title (header text) in the same tiddler
** Edits plain text in a tiddler.
** Options tiddler now available in the system Options panel.
** Introduced 'ROW PASTED' and 'COL PASTED' events to the TWtid.table_changed() handler function, allowing other plugins, such as TWtcalc, to handle such events.
*** Table related events that can be handled in TWtid.table_changed() handler function include
**** 'MODIFIED' for general cases,
**** 'ROW INSERTED', 'ROW DELETED', 'ROW PASTED' for table row operations,
**** 'COL INSERTED', 'COL DELETED', 'COL PASTED' for table column operations,
**** 'ROW MOVED', 'SORTED' for table sorting operations.
**** See http://twtable.tiddlyspace.com/#Table_Related_Events for more information.
** Removed the 'manual' edit mode and the option {{{chkTWtedCatTheMouse}}}. There are only 'semi automatic' and 'automatic' modes, which are switched by unchecking/checking the option {{{chkTWtedNoClick}}}. By default it is 'semi automatic' ({{{chkTWtedNoClick}}} unchecked).
** Bug fixes on copy-and-pasting.
* 2013/02/09 [1.5.0]
** Edit text outside of all block elements.
** Added a simple previewer.
*** Option txtTWtedPreviewOpacity to change opacity of the previewer. Default to 0.9.
*** Option txtTWtedPreviewCaret to specify the caret symbol in the previewer. Default to the vertical line (|).
** Edit tiddler title.
** Keyboard navigation within the same type of elements
*** headers, list items, blockquotes, preformats
** Move list items with Ctrl-up/down keys.
** Added option chkTWtedInViewMode (default to true) to toggle editing manner.
*** If set to true, one can edit those editable elements in TW's view mode while keeping the default edit box in edit mode the same old way.
*** Otherwise the view mode remains just for viewing, and TW's default edit box is replaced with a WYSIWYG-like editor.
**** In this manner one can still bring back the default edit box by one of the following ways,
***** disable TWtid or TWted (re-enable to enter the WYSIWYG-like manner again),
***** double-click in a no-element area (click away/Ctrl-Enter/Esc to go back to WYSIWYG-like manner).
** Bug fixes for editing foldable content (with FoldHeadingPlugins).
** Edit list items.
*** Simple lists and list trees are editable (__single line mode__) but not yet synchronized with transcluded copies.
** Edit headers.
*** Change of heading level is possible.
** Edit blockquotes, blockexamples and performatted block.
** Bug fix in keyboard navigation over spanned cells.
*** Still it is not //visially consistent// yet.
* 2012/12/0x [1.4.7]
** Edit missing cells at the end of a table row.
** Simple keyboard navigation
*** Shift to edit the neighboring table cell if one of the arrow keys is pressed when the caret is at the boundary of the cell content.
** Buttons are not always shown, instead they are shown when mouse is inside a table or the table is in edit mode.
** Bug fixes for closed sliders.
*** Sliders created by {{{<<slider>>}}} or {{{<<foldHeadings>>}}} macro are now prepared upon opening, instead of upon initialization as before. The benefit is to avoid flashing of content due to continuous opening/closing for initially closed sliders.
**** Previously sliders were all prepared upon initialization, hence initially closed sliders were forced to open for preparation and close afterwards, resulting in a somewhat annoying flashing of content and a slight delay of initialization.
** Bug fixes for self partial transclusion -- including part of a tiddler into another part of itself. Thanks to Yakov for brining up this issue.
* 1201/11/23 [1.4.6]
** Re-render tables upon resizing/zooming the content for non-hand-held devices.
*** See revision history in {{{TWtid}}} for more details.
* 2012/11/17 [1.4.5]
** Better transclusion support.
*** Added support for {{{partial transclusion}}}.
**** This seems to work with my limited test cases.
** Added option {{{chkTWtedDisableLink}}} to optionally enable/disable hyper links in a table cell in the edit mode. Default to false.
*** This option doesn't work, being true or false, if {{{chkTWtedNoClick}}} option is set to true.
*** If set to false (as default), links are working as normal and clicking on them simply brings you to the corresponding pages they are pointing to, instead of giving you the edit box.
*** If set to true, however, links are disabled and clicking on them brings up the edit box, just like you were clicking on other places of the cell.
** Level up for the cat mode: Not only to activate the edit mode but to go straight into editing the cell content.
*** Check option {{{chkTWtedNoClick}}} to enable this mode.
*** This can be fun in some cases but annoying in others...
* 2012/11/09 [1.4.4]
** Supports mouse motion activation/deactivation of edit mode.
*** Check opion {{{chkTWtedCatTheMouse (default to false)}}} to enable this mode.
*** Could be useful and fun when you need to __edit multiple tables at the same time__.
*** Could be bothersome when you need frequent access to the "border components", such as scroll bars, {{{C}}} button, etc.
*** IE8 seems to cause trouble in some cases with the {{{C}}} button in this mode.
** Changed mosuedown/mouseup event handler to respond only to left button.
*** Tested browsers in different OS's:
**** Ubuntu 12.04 x64
***** Chrome, FireFox, Opera
**** Win7 x64
***** FireFox, Opera, Safari, IE9.
**** WinXP x86
***** Chrome, FireFox, Opera, IE8
** Tests validity of tiddlers before some actions.
* 2012/11/02 [1.4.3]
** Set default text-alignment of a table cell to {{{inherit}}}.
** Removed some dead codes.
* 2012/10/26 [1.4.2]
** Edit table caption. To do so, click on
*** the caption text if the table already has one, or
*** the {{{white space}}} at the center of caption area (you will see a change of mouse pointer when hovering over the white space).
** Bug fixes with vertical floating menu
*** The menu bottom was blocked by the scrolling wrapper at the table bottom, fixed by raising its level to higher than the scrolling wrapper.
* 2012/10/21 [1.4.1]
** Minor bug fixes for tiddlers mxing non-transcluded and transcluded copies.
** Minor modifications to the prepare_table() function.
* 2012/10/19 [1.4.0]
** Separated from TableEditor.
** Restructured to better fit the separated code structure.
** Bug fixes on auto edit box height for large cells (larger than the maximum table view port height).
** Fixed the inconsistent edit button width and floating menu positioning in different browsers.
** Removed dependency on jQuery resize plugin.
** Renamed two methods:
*** prepare_edit_buttons() is now start_edit_mode()
*** remove_edit_buttons() is now stop_edit_mode()
*** The old names of these two methods are still kept for now but will be dropped in the future.
* 2012/09/03 [1.3.0]
** Started separating codes from TableEditor 1.3.0.
** TableEditor is now split into two parts: display/rendering and editing, so users who don't need editing can use the display/rendering part alone. The two parts are named
*** {{{TWtid}}} that handles display/rendering of tables, and
*** {{{TWted}}} that takes care of editing.
** Bug fixes for reference bar alignment with math-rich cells.
* For earlier history please see [[TableEditor]] or [[its external link|http://twtable.tiddlyspace.com/#TableEditor]].

!!!Code
***/

// //Macro definitions
//{{{
version.extensions.TWted= {major: 1, minor: 6, revision: 3, date: new Date('2013/04/20')};

config.macros.noedit={
	handler : function(place){
		addClass(place,"noedit");
	}
};

// Macro for initialization
config.macros.TWted = {
	init: function(){
		if ( config.options.chkTWtedEnabled===undefined )
			config.options.chkTWtedEnabled = true;
		if ( config.options.chkTWtedInViewMode===undefined )
			config.options.chkTWtedInViewMode = true;
		//if ( config.options.chkTWtedCatTheMouse===undefined )
		//	config.options.chkTWtedCatTheMouse = true;
		if ( config.options.chkTWtedNoClick===undefined )
			config.options.chkTWtedNoClick = false;
		if ( config.options.chkTWtedPreview===undefined )
			config.options.chkTWtedPreview=true;
		if ( config.options.txtTWtedPreviewOpacity===undefined )
			config.options.txtTWtedPreviewOpacity='1.00';
		if ( config.options.txtTWtedPreviewCaret===undefined )
			config.options.txtTWtedPreviewCaret='|';
		else if (/^[0-9]+$/.test(config.options.txtTWtedPreviewCaret))
			config.options.txtTWtedPreviewCaret=String.fromCharCode(
				config.options.txtTWtedPreviewCaret*1
			);
		if ( config.options.chkTWtedDisableLink===undefined )
			config.options.chkTWtedDisableLink = false;
		if ( config.options.chkTWtedConfirmToDelete===undefined )
			config.options.chkTWtedConfirmToDelete =
				(config.options.chkTEditorConfirmToDelete===undefined?true:
				config.options.chkTEditorConfirmToDelete);
		if ( config.options.chkTWtedClickAway===undefined )
			config.options.chkTWtedClickAway =
				(config.options.chkTEditorClickAway===undefined?true:
				config.options.chkTEditorClickAway);
		if ( config.options.chkTWtedManualSave===undefined )
			config.options.chkTWtedManualSave =
				(config.options.chkTEditorManualSave===undefined?false:
				config.options.chkTEditorManualSave);
		if ( config.options.chkTWtedManualUpload===undefined )
			config.options.chkTWtedManualUpload =
				(config.options.chkTEditorManualUpload===undefined?false:
				config.options.chkTEditorManualUpload);
		if ( config.options.chkTWtedEditAllTables===undefined )
			config.options.chkTWtedEditAllTables =
				(config.options.chkTEditorAllTableEditable===undefined?false:
				config.options.chkTEditorAllTableEditable);
		if ( config.options.chkTWtedIncludeSubs===undefined )
			config.options.chkTWtedIncludeSubs = false;
		if ( config.options.chkTWtedIncludeCSS===undefined )
			config.options.chkTWtedIncludeCSS =
				(config.options.chkTEditorIncludeCSS===undefined?true:
				config.options.chkTEditorIncludeCSS);

		merge ( config.optionsDesc, {
			chkTWtedEnabled:'Enable ~TWted.',
			chkTWtedInViewMode:'Active in view mode. Otherwise in edit mode.',
			//chkTWtedCatTheMouse:'Activate/Deactivate edit mode with mouse motion.',
			chkTWtedNoClick:'Edit the cell content without clicking it.',
			chkTWtedPreview:'Enable previewer. Default to true.',
			txtTWtedPreviewOpacity:'Opacity of the previewer. Default to 0.9.',
			txtTWtedPreviewCaret:'Caret in the previewer. Default to vertical line (|)',
			chkTWtedDisableLink:'Disable links in edit mode.',
			chkTWtedConfirmToDelete:'Confirm before deleting table rows/columns.',
			chkTWtedClickAway:'Click away to accept changes.',
			chkTWtedManualSave:'Save changes to file manually. If true, a button labeled "S" will be provided for manual save. Otherwise the file will be saved each time a change is accepted.',
			chkTWtedManualUpload:'Upload changes to server manually. If true, a button labeled "U" will be provided for manual upload. Otherwise all changes will be uploaded each time a change is accepted.',
			chkTWtedEditAllTables:'Edit all tables. If true, all tables are editable. Otherwise only tables with class name "editable" are editable.',
			chkTWtedIncludeSubs:'Include sub-elements to edit. For example, sub lists are included in the editbox if this option is set to true.',
			chkTWtedIncludeCSS:'Include cell-wide CSS statements in the edit box.'
		} );

		TWted.pre_closeAllTiddlers = story.closeAllTiddlers;
		story.closeAllTiddlers = TWted.closeAllTiddlers;

		TWted.pre_refreshTiddler = story.refreshTiddler;
		story.refreshTiddler = TWted.refreshTiddler;

		TWted.pre_OfficialExample = TWtid.OfficialExample;
		TWtid.OfficialExample = TWted.OfficialExample;

		//TWted.pre_prepare_elements = TWtid.prepare_elements;
		//TWtid.prepare_elements = TWted.prepare_elements;
		TWted.pre_prepare_table = TWtid.prepare_table;
		TWtid.prepare_table = TWted.prepare_table;

		TWted.pre_save_text = TWtid.save_text;
		TWtid.save_text = TWted.save_text;

		TWted.pre_start_sorting = TWtid.start_sorting;
		TWtid.start_sorting = TWted.start_sorting;

		//TWted.pre_table_changed = TWtid.table_changed;
		//TWtid.table_changed = TWted.table_changed;

		TWted.pre_table_scrolled = TWtid.table_scrolled;
		TWtid.table_scrolled = TWted.table_scrolled;

		TWted.pre_fix_rows_adjust = TWtid.fix_rows_adjust;
		TWtid.fix_rows_adjust = TWted.fix_rows_adjust;
		TWted.pre_fix_cols_adjust = TWtid.fix_cols_adjust;
		TWtid.fix_cols_adjust = TWted.fix_cols_adjust;

		TWted.pre_resize = TWtid.resize;
		TWtid.resize = TWted.resize;

		TWted.pre_inactive_elem=TWtid.inactive_elem;
		TWtid.inactive_elem=TWted.inactive_elem;
		TWted.pre_is_button=TWtid.is_button;
		TWtid.is_button=TWted.is_button;
		TWted.pre_hide_buttons=TWtid.hide_buttons;
		TWtid.hide_buttons=TWted.hide_buttons;

		TWted.pre_focus=TWtid.focus;
		TWtid.focus=TWted.focus;

		TWted.pre_slider_close=TWtid.slider_close;
		TWtid.slider_close=TWted.slider_close;
		TWted.pre_header_click=TWtid.header_click;
		TWtid.header_click=TWted.header_click;

		TWted.pre_refresh_wrapper = TWtid.refresh_wrapper;
		TWtid.refresh_wrapper = TWted.refresh_wrapper;

		//TWted.pre_tabs_switchTab = TWtid.tabs_switchTab;
		//TWtid.tabs_switchTab = TWted.tabs_switchTab;

		TWted.pre_edit_handler = config.commands.editTiddler.handler;
		config.commands.editTiddler.handler = TWted.edit_handler;
		TWted.pre_close_handler = config.commands.closeTiddler.handler;
		config.commands.closeTiddler.handler = TWted.close_handler;
		TWted.pre_save_handler = config.commands.saveTiddler.handler;
		config.commands.saveTiddler.handler = TWted.save_handler;
		TWted.pre_cancel_handler = config.commands.cancelTiddler.handler;
		config.commands.cancelTiddler.handler = TWted.cancel_handler;

		TWted.pre_saveChanges = saveChanges;
		saveChanges = TWted.saveChanges;

		var txt = config.shadowTiddlers['OptionsPanel'];
		var p = txt.indexOf('TWtidOptions');
		if ( p >= 0 ) {
			config.shadowTiddlers['OptionsPanel']=
				txt.substring(0,p)
				+'TWtedOptions\n'
				+txt.substring(p);
		} else {
			p = txt.indexOf('----');
			config.shadowTiddlers['OptionsPanel']=
				txt.substring(0,p)
				+'----\n'
				+'TWtedOptions\n'
				+txt.substring(p);
		}

		merge(config.shadowTiddlers,{
			'TWtedOptions':'<<TWtedOptions>>'
		});
	}
};

// Macro for option settings
config.macros.TWtedOptions = {
	order : {
		chkTWtedEnabled:0,
		chkTWtedInViewMode:1,
		chkTWtedNoClick:2,
		chkTWtedPreview:3,
		txtTWtedPreviewOpacity:4,
		txtTWtedPreviewCaret:5,
		chkTWtedDisableLink:6,
		chkTWtedConfirmToDelete:7,
		chkTWtedClickAway:8,
		chkTWtedManualSave:9,
		chkTWtedManualUpload:10,
		chkTWtedEditAllTables:11,
		chkTWtedIncludeSubs:12,
		chkTWtedIncludeCSS:13
	},

	options_changed : function ($viewer,wt) {
		if ( $viewer.size() > 0 ) {
			if ( TWted.replaced_ta
					&& (config.options.chkTWtedInViewMode
							|| ! (config.options.chkTWtidEnabled
									&& config.options.chkTWtedEnabled)) ) {
				wt=TWtid.wrapper_tiddler($viewer);
				TWted.replaced_ta.val(wt.tiddler.text);
				$viewer.replaceWith(TWted.replaced_ta);
				TWted.replaced_ta = null;
			} else {
				TWted.pre_options_changed.apply(this,arguments);
			}
		} else if ( ! config.options.chkTWtedInViewMode
							&& config.options.chkTWtidEnabled
							&& config.options.chkTWtedEnabled ) {
			TWted.replace_editor (wt.title, wt);
		}
	},

	handler : function(place,macroName,params,wikifier,paramString) {
		// Collect all the TWted options for users to play with.
		// Collect all the TWtid options for users to play with.
		config.macros.TWtidOptions.show_options_table(
			place
			,'TWted Options'
			,'TWted'
			,this.order
		);
	}
};
//}}}

// //TWted
//{{{
TWted = {
	cur_title : null,
	cur_ndx : null,
	saved_index : function (ndx) {
		return this.cur_ndx
					//? (this.cur_ndx.rIndex == ndx.rIndex
					//		&& this.cur_ndx.dIndex == ndx.dIndex)
					? this.cur_ndx.dIndex == ndx.dIndex
					: false;
	},

	pre_start_sorting : null,
	start_sorting : function ($table, ndx, wt) {
		// If the editing feature of this table is enabled, skip sorting.
		var result = TWted.pre_start_sorting.apply(this,arguments);
		return result
					? (TWted.cur_title != wt.title
							&& ! TWted.saved_index(ndx))
					: false;
	},

	ins_del_row : function ( $btn, which, cf ) {
		// Insert/delete one row at the position where the $btn
		// is clicked.
		// Insertion can be either 'above' or 'below', given in the 2nd
		// argument.
		// Deletion is done on the current position.
		// Returns the index of the row inserted/deleted.
		var $menu = $btn.parent(),
			$table = TWted.$cur_block,
			wt = TWtid.wrapper_tiddler ( $table ),
			text = wt.tiddler.text.split ( '\n' ),
			ndx = TWtid.element_index($table,wt),
			row = $menu.attr('row')*1,
			r0 = TWtid.table_first_line(text,ndx,wt.title),
			rl = TWtid.table_last_line ( text, r0 ),
			rndx = TWtid.line_number_of_table_row ( text, r0, row );
		if ( which ) {
			// Insertion
			// Prepare one empty row to insert
			var newline = '|',
				cols=TWtid.split_table_row
					(text[(rndx>rl?rl:rndx)]).length-2;
			for ( var c = 0; c < cols; c++ ) newline += '|';

			// Insert the new row into the wikitext
			if ( which == 'below' ) { row++; rndx++; }
			text.splice (rndx, 0, newline);
			if ( rndx <= TWted.copied_rndx )
				TWted.copied_rndx++;
			TWtid.table_changed (
				'ROW INSERTED'
				,{
					'text':text,
					'first':r0,
					'last':rl+1,
					'where':row
				}
				, wt
			);
		} else {
			// Deletion
			if ( (cf !== false) &&
					config.options.chkTWtedConfirmToDelete )
				if(!confirm('Delete row ' + row))
					return -1;

			// Check all the cells in this row to delete. If one of the
			// cells contain the content of a row-spanned cell, shift it
			// down.
			if ( rndx < rl ) {
				// Not the last line of text, look for row-spanned cells.
				var rowtxt = TWtid.split_table_row(text[rndx]),
					rowtxt_next = TWtid.split_table_row(text[rndx+1]),
					changed = false;
				for ( var c = 1; c < rowtxt.length-1; c++ )
					if ( rowtxt_next[c] == '~' && rowtxt[c] != '~' ) {
						rowtxt_next[c] = rowtxt[c];
						changed = true;
					}
				if ( changed )
					text[rndx+1]=TWtid.make_table_row(rowtxt_next);
			}
			text.splice (rndx, 1);
			if ( rndx < TWted.copied_rndx )
				TWted.copied_rndx--;
			//else if ( rndx == TWted.copied_rndx ) {
				//TWted.copied_rndx = -1;
				//TWted.copied_row = null;
			//}
			TWtid.table_changed (
				'ROW DELETED'
				,{
					'text':text,
					'first':r0,
					'last':rl-1,
					'where':row
				}
				, wt
			);
		}

		// Refresh the tiddler wrapper and save the tiddler text.
		TWtid.save_text(wt.tiddler,text);
		TWtid.refresh_wrapper(wt,true);
		return row;
	},
	insertRow : function ( $btn, which ) {
		return this.ins_del_row($btn, which);
	},
	deleteRow : function ( $btn, cf ) {
		return this.ins_del_row($btn, null, cf);
	},

	copied_rndx : -1,
	copied_row : null,
	copy_paste_row : function ( $btn, action ) {
		var $menu = $btn.parent(),
			$table = TWted.$cur_block,
			wt = TWtid.wrapper_tiddler ( $table ),
			text = wt.tiddler.text.split ( '\n' ),
			ndx = TWtid.element_index($table,wt),
			row = $menu.attr('row')*1,
			r0 = TWtid.table_first_line(text,ndx,wt.title),
			rndx = TWtid.line_number_of_table_row ( text, r0, row ),
			copying = (action==='copy');
		if ( copying ) {
			this.copied_rndx = rndx;
			this.copied_row = text[rndx];
		} else {
			text[rndx] = this.copied_row;
			TWtid.table_changed (
				'ROW PASTED'
				,{
					'text':text,
					//'first':r0,
					'from':TWted.copied_rndx,
					'to':rndx
				}
				, wt
			);
			// Refresh the tiddler wrapper and save the tiddler text.
			TWtid.save_text(wt.tiddler,text);
			TWtid.refresh_wrapper(wt,true);
		}
	},
	copyRow : function ( $btn ) {
		this.copy_paste_row ( $btn, 'copy' );
		this.copied_cndx = -1;
		this.copied_column = null;
	},
	pasteRow : function ( $btn ) {
		if ( this.copied_rndx == -1 ) return;
		this.copy_paste_row ( $btn, 'paste' );
	},

	ins_del_col : function ( $btn, which, cf ) {
		// Insert/delete one column at the position where the $btn
		// is clicked.
		// Insertion can be either 'right' or 'left', given in the 2nd
		// argument.
		// Deletion is done on the current position.
		// Returns the index of the column inserted/deleted.
		var $menu = $btn.parent(),
			$table = TWted.$cur_block,
			wt = TWtid.wrapper_tiddler ( $table ),
			text = wt.tiddler.text.split ( '\n' ),
			ndx = TWtid.element_index($table,wt),
			col = $menu.attr('col')*1,
			r0 = TWtid.table_first_line(text,ndx,wt.title),
			rl = TWtid.table_last_line ( text, r0 ),
			rowtxt;
		if ( which ) {
			// Insertion
			if ( which == 'right' ) col++;
			for ( var r = r0; r <= rl; r++ ) {
				// Skip the table caption and class.
				if ( /[kKcC]$/.test(text[r]) ) continue;

				rowtxt = TWtid.split_table_row ( text[r] );
				rowtxt.splice ( col+1, 0, "" );

				// Recombine the row text and put it back to wikitext
				text[r] = TWtid.make_table_row ( rowtxt );
			}
			if ( col <= TWted.copied_cndx )
				TWted.copied_cndx++;
			TWtid.table_changed (
				'COL INSERTED'
				,{
					'text':text,
					'first':r0,
					'last':rl,
					'where':col
				}
				, wt
			);
		} else {
			// Deletion
			if ( (cf !== false) &&
					config.options.chkTWtedConfirmToDelete )
				if(!confirm('Delete column '+TWtid.col_ref(col)))
					return -1;

			for ( var r = r0; r <= rl; r++ ) {
				// Skip the table caption and class.
				if ( /[kKcC]$/.test(text[r]) ) continue;

				rowtxt = TWtid.split_table_row ( text[r] );
				// If this cell contains the content of a column-spanned
				// cell, shift it to the left.
				if ( col>0 && rowtxt[col]=='>' && rowtxt[col+1]!='>' )
					rowtxt[col] = rowtxt[col+1];
				rowtxt.splice ( col+1, 1 );

				// Recombine the row text and put it back to wikitext
				text[r] = TWtid.make_table_row ( rowtxt );
			}
			if ( col < TWted.copied_cndx )
				TWted.copied_cndx--;
			//else if ( col == TWted.copied_cndx ) {
				//TWted.copied_cndx = -1;
				//TWted.copied_column = null;
			//}
			TWtid.table_changed (
				'COL DELETED'
				,{
					'text':text,
					'first':r0,
					'last':rl,
					'where':col
				}
				, wt
			);
		}
		// Refresh the tiddler wrapper and save the tiddler text.
		TWtid.save_text(wt.tiddler,text);
		TWtid.refresh_wrapper(wt,true);
		return col;
	},
	insertColumn : function ( $btn, which ) {
		return this.ins_del_col($btn,which);
	},
	deleteColumn : function ( $btn, cf ) {
		return this.ins_del_col($btn, null, cf);
	},

	copied_cndx : -1,
	copied_column : null,
	copy_paste_column : function ( $btn, action ) {
		var $menu = $btn.parent(),
			$table = TWted.$cur_block,
			wt = TWtid.wrapper_tiddler ( $table ),
			text = wt.tiddler.text.split ( '\n' ),
			ndx = TWtid.element_index($table,wt),
			col = $menu.attr('col')*1,
			r0 = TWtid.table_first_line(text,ndx,wt.title),
			rl = TWtid.table_last_line ( text, r0 ),
			rowtxt, copying=(action==='copy'), c=0;
		if ( copying ) this.copied_column = new Array();
		for ( var r = r0; r <= rl; r++ ) {
			// Skip the table caption and class.
			if ( /[kKcC]$/.test(text[r]) ) continue;
			rowtxt = TWtid.split_table_row ( text[r] );
			if ( copying ) {
				this.copied_column.push(rowtxt[col+1]);
			} else {
				rowtxt[col+1] = this.copied_column[c++];
				text[r] = TWtid.make_table_row(rowtxt);
			}
		}
		if ( copying ) {
			this.copied_cndx = col;
		} else {
			TWtid.table_changed (
				'COL PASTED'
				,{
					'text':text,
					'first':r0,
					'last':rl,
					'from':TWted.copied_cndx,
					'to':col
				}
				, wt
			);
			// Refresh the tiddler wrapper and save the tiddler text.
			TWtid.save_text(wt.tiddler,text);
			TWtid.refresh_wrapper(wt,true);
		}
	},
	copyColumn : function ( $btn ) {
		this.copy_paste_column ( $btn, 'copy' );
		this.copied_rndx = -1;
		this.copied_row = null;
	},
	pasteColumn : function ( $btn ) {
		if ( !this.copied_column ) return;
		this.copy_paste_column ( $btn, 'paste' );
	},

	wikify_elem : function ( $elem, txt, no_adj ) {
		var style = TWtid.elem_wide_style_text(txt);
		if ( style ) txt = txt.substring(style.length);
		if ( ! no_adj ) {
			var leftsp = /^[ ]/.test(txt),
				rightsp = /[ ]$/.test(txt);
			switch ( $elem[0].nodeName ) {
				case 'LI' :
					break;
				default :
					if ( leftsp )
						if ( rightsp )
							$elem.css('text-align', 'center');
						else
							$elem.css('text-align', 'right');
					else if ( rightsp )
						$elem.css('text-align', 'left');
					else
						$elem.css('text-align', 'inherit');
					break;
			}
			txt = txt.trim();
		}
		// Then wikify txt into element.
		switch ( $elem[0].nodeName ) {
			case 'TH' :
			case 'TD' :
				if ( /^[\!]/.test(txt) ) {
					var newcell;
					// This elem should be a th node.
					if ( $elem[0].nodeName != 'TH' ) {
						$newcell = jQuery(
							createTiddlyElement(null,'th'));
						$elem.replaceWith($newcell);
						$newcell.css('text-align',
								$elem.css('text-align'));
						$elem = $newcell;
					}
					txt = txt.substring(1);
				} else {
					// This elem should be a td node.
					if ( $elem[0].nodeName != 'TD' ) {
						$newcell = jQuery(
							createTiddlyElement(null,'td'));
						$elem.replaceWith($newcell);
						$newcell.css('text-align',
								$elem.css('text-align'));
						$elem = $newcell;
					}
				}
				//if ( TWted.$cur_elem_txt
				//		&& TWted.$cur_elem_txt.is('.sortheader') ) {
					// This is copied from SortableGridPlugin
					// for sorting purposes.
				//	$elem.html(this.sortable_grid_html(txt));
				//	break;
				//}
			default :
				var styles = style
							? style.match(/[\w-]+[:]{1}[\w-]+[;]{1}/g)
							: null;
				if ( styles ) {
					var css = new Array();
					for ( var i = 0; i < styles.length; i++ ) {
						var si = styles[i].match(/[\w-]+/g);
						css.push({'style':si[0],'value':si[1]});
					}
					config.formatterHelpers.applyCssHelper($elem[0],css);
				}
				$elem.empty();
				wikify(txt, $elem[0]);
				break;
		}
		if ( typeof MathJax !== 'undefined' )
			MathJax.Hub.Queue(['Typeset',MathJax.Hub,$elem[0]]);
	},
	pre_refresh_wrapper : null,
	refresh_wrapper : function(wt,re_render) {
		TWted.pre_refresh_wrapper.apply(this,arguments);
		if ( re_render ) {
			//TWted.$btn_US = null;
			TWted.$cur_block = null;
		}
	},
	//pre_tabs_switchTab : null,
	//tabs_switchTab : function() {
	//	TWted.focusout();
	//	TWted.pre_tabs_switchTab.apply(this,arguments);
	//},
//}}}

// // Wikitext related functions
//{{{
	update_list_item_text : function (wt, $elem, newtxt) {
		if ( ! wt ) wt = TWtid.wrapper_tiddler($elem);
		var ndx = TWtid.element_index($elem,wt);
		var text = wt.tiddler.text.split('\n');
		var r0 = TWtid.list_item_line(text,ndx,wt.title);
		var rl = config.options.chkTWtedIncludeSubs
					? TWtid.list_last_line(
						text,r0+1,TWtid.list_prefix(text[r0]))
					: r0;
//displayMessage('update '+$elem[0].nodeName+TWtid.index_string(ndx)+' at line '+r0+wt.$wrapper.size()+' wrappers in '+' in '+wt.title);
		var cur_level = 0, cur_ch = text[r0].charAt(0),
			level = 0, ch = newtxt.charAt(0);
		while ( text[r0].charAt(cur_level)==cur_ch ) cur_level++;
		TWtid.lines_of_text(text,r0,rl,newtxt);
		TWtid.save_text ( wt.tiddler, text );
		if ( ! newtxt ) {
			//text.splice (r0,rl-r0+1);
			//TWtid.save_text ( wt.tiddler, text );
			if ( TWted.sub_elem ) {
				// If the previous list item is at the same level as this
				// one, append the sub_elem to the previous item.
				// Otherwise, keep this item, clear its text, then append
				// the sub_elem back to this item.
				var ps = TWtid.list_prefix(cur_level);
				if ( ps.prefix.test(text[r0-1]) ) {
					// The previous item is at the same level as this one.
					var $prev = $elem.prev();
					TWted.sub_elem.appendTo($prev);
					$elem.remove();
					TWted.$cur_block = $prev;
				} else {
					ps = TWtid.list_prefix(cur_level+1);
					var r2 = r0;
					while ( ps.prefix.test(text[r2]) ) {
						text[r2]=text[r2].substring(1);
						r2++;
					}
					TWtid.save_text ( wt.tiddler, text );
					TWtid.refresh_wrapper(wt,true);
				}
			} else {
				$elem.remove();
				TWtid.cur_block(null);
				TWted.$cur_block = null;
			}
		} else {
			while ( newtxt.charAt(level)==ch ) level++;
			//text.splice(r0,rl-r0+1,newtxt);
			//TWtid.save_text ( wt.tiddler, text );
			if ( level == cur_level && cur_ch == ch ) {
				// Both level and type remain the same.
				if ( /\n/.test(newtxt) )
					TWtid.refresh_wrapper(wt,true);
				else {
					TWted.wikify_elem($elem,newtxt.substring(level));
					if ( TWted.sub_elem )
						TWted.sub_elem.appendTo($elem);
				}
			} else if ( cur_ch == ch ) {
				// Type remains the same but level is changed.
				//if ( TWted.sub_elem ) {
					// Need to think about...
				//}
				TWtid.refresh_wrapper(wt,true);
			} else if ( cur_level == level ) {
				// Level remains the same but type is changed.
				TWtid.refresh_wrapper(wt,true);
			} else {
				// Both level and type are changed.
				// Find the wiki text for the direct parent list
				// and refresh it.
				TWtid.refresh_wrapper(wt,true);
			}
		}
		TWted.sub_elem = null;
		return true;
	},

	update_header_text : function ( wt, $elem, newtxt ) {
		if ( ! wt ) wt = TWtid.wrapper_tiddler($elem);
		var ndx = TWtid.element_index($elem,wt);
		var text = wt.tiddler.text.split('\n');
		var ln = TWtid.header_first_line(text,ndx,wt.title);
		if ( ! newtxt ) {
			text.splice (ln,1);
			TWtid.save_text ( wt.tiddler, text );
			TWtid.refresh_wrapper(wt,true);
		} else {
			text[ln] = newtxt;
			if ( $elem.is('.foldable') ) {
				TWtid.save_text ( wt.tiddler, text );
				TWtid.refresh_wrapper(wt,true);
			} else {
				var cur_level = $elem[0].nodeName.charAt(1)*1,
					hlevel = 0;
				while ( newtxt.charAt(hlevel)=='!' ) hlevel++;
				newtxt = newtxt.substring(hlevel);
				TWtid.save_text ( wt.tiddler, text );
				if ( hlevel != cur_level ) {
					var $newh = jQuery('<H'+hlevel+'></H'+hlevel+'>');
					$elem.replaceWith($newh);
					$newh.attr('rIndex', $elem.attr('rIndex'));
					$newh.attr('dIndex', $elem.attr('dIndex'));
					$elem = $newh;
				}
				var s = 0;
				while ( newtxt.charAt(s)==' ' ) s++;
				if ( s > 0 ) newtxt = newtxt.substring(s);
				TWted.wikify_elem($elem,newtxt);
			}
		}
		return true;
	},

	update_section_text : function(wt,ndx,newtxt) {
		var text = wt.tiddler.text.split('\n');
		var ln=TWtid.header_first_line(text,ndx,wt.title);
//displayMessage('prev header '+TWtid.index_string(ndx)+' at '+ln+' in '+wt.title);
		var ndx2 = { 'rIndex':-1,'dIndex':ndx.dIndex+1 };
		var ln2=TWtid.header_first_line(text,ndx2,wt.title);
//displayMessage('next header ('+ndx2.rIndex+','+ndx2.dIndex+') at '+ln2+' in '+wt.title);
		if ( ln2 == -1 ) ln2 = text.length;
		TWtid.lines_of_text(text,ln+1,ln2,newtxt);
		TWtid.save_text ( wt.tiddler, text );
	},
	update_header_content_text : function (wt,$elem,newtxt) {
		var $h = $elem.prev();
		wt = TWtid.wrapper_tiddler($h);
		var ndx = TWtid.element_index($h,wt);
		this.update_section_text(wt,ndx,newtxt);
		TWted.wikify_elem($elem,newtxt);
		return true;
	},

	update_blockquote_text : function (wt, $elem, newtxt) {
		if ( ! wt ) wt = TWtid.wrapper_tiddler($elem);
		var $e = TWted.locatable_elem($elem);
		var ndx = TWtid.element_index($e,wt);
		var text = wt.tiddler.text.split('\n');
		var ln = TWtid.blockquote_first_line(text,ndx,wt.title);
		var ln2;
		if ( TWtid.blockexample_first_line(text[ln]) ) {
			ln2 = TWtid.blockexample_last_line(text,ln+1);
			TWtid.lines_of_text(text,ln,ln2,newtxt);
		} else if ( ! newtxt ) {
			text.splice (ln,1);
		} else {
			ln2 = TWtid.blockquote_last_line(text,ln);
			TWtid.lines_of_text(text,ln,ln2,newtxt);
		}
		TWtid.save_text ( wt.tiddler, text );
		TWtid.refresh_wrapper(wt,true);
		TWted.sub_elem = null;
		return true;
	},

	preformat_skip_opening : function ( txt ) {
		var plen = 3, ch = txt.charAt(0);
		switch ( ch ) {
			case '{' :
			default :
				return 3;
			case '/' :
				while ( txt.charAt(plen) != '{' ) plen++;
				while ( txt.charAt(plen) == '{' ) plen++;
				if ( txt.charAt(1) == '*' )
					while ( txt.charAt(plen) != '/' ) plen++;
				return plen+1;
			case '<' :
				while ( txt.charAt(plen) != '{' ) plen++;
				while ( txt.charAt(plen) == '{' ) plen++;
				while ( txt.charAt(plen) != '>' ) plen++;
				return plen+1;
		}
	},
	preformat_skip_closing : function ( txt ) {
		var plen = txt.length-3, ch = txt.charAt(0);
		switch ( ch ) {
			case '{' :
			default :
				return plen;
			case '/' :
				while ( txt.charAt(plen) != '}' ) plen--;
				while ( txt.charAt(plen) == '}' ) plen--;
				while ( txt.charAt(plen) != '/' ) plen--;
				return txt.charAt(plen-1) == '/' ? plen-1 : plen;
			case '<' :
				while ( txt.charAt(plen) != '}' ) plen--;
				while ( txt.charAt(plen) == '}' ) plen--;
				while ( txt.charAt(plen) != '<' ) plen--;
				return plen;
		}
	},
	update_preformat_text : function ( wt, $elem, newtxt ) {
		if ( ! wt ) wt = TWtid.wrapper_tiddler($elem);
		var ndx = TWtid.element_index($elem,wt);
		var text = wt.tiddler.text.split('\n');
		var r0 = TWtid.preformat_first_line(text,ndx,wt.title);
		var rl = TWtid.preformat_last_line(text, r0);
		TWtid.lines_of_text(text,r0,rl,newtxt);
		TWtid.save_text ( wt.tiddler, text );
		var popen = this.preformat_skip_opening(newtxt);
		var pclose = this.preformat_skip_closing(newtxt);
		$elem.text(newtxt.substring(popen,pclose).trim());
		return true;
	},

	plain_text_starts : function($w,$prev,wt,text,title,section){
		var ndx, r0 = 0;
		if ( jQuery.contains($w[0],$prev[0]) ) {
			ndx = TWtid.element_index($prev,wt);
			r0 = TWted.block_elem_first_line(
				$prev,text,ndx,wt.title
			);
			r0 = TWted.block_elem_last_line(
				$prev,text,r0
			)+1;
		} else if ( section ) {
			// The content is a section either partially
			// transcluded or <<foldHeadings>> folded. Need to
			// find the beginning of the section.
			ndx.rIndex=-1; ndx.dIndex=0;
			r0 = TWted.block_elem_first_line(
				'H1',text,ndx,title
			)+1;
		}
//displayMessage('plain text starts at '+r0+' after '+$prev[0].nodeName+'('+TWtid.element_classes($prev)+') in '+wt.title);
		return r0;
	},
	plain_text_ends : function($w,$next,wt,text,title,section) {
		var rl = text.length-1, ndx;
		if ( jQuery.contains($w[0],$next[0]) ) {
			ndx=TWtid.element_index($next,wt);
			rl = TWted.block_elem_first_line(
				$next,text,ndx,wt.title
			)-1;
		} else {
			// Till the end of the $wrapper $w
			if ( section ) {
				// The content is a section either partially
				// transcluded or <<foldHeadings>> folded. Need to
				// find the end of the section.
				ndx.rIndex=-1; ndx.dIndex=0;
				rl = TWted.block_elem_first_line(
					'H1',text,ndx,title,r0
				)-1;
			}
		}
//displayMessage('plain text ends at '+rl+' before '+$next[0].nodeName+'('+TWtid.element_classes($next)+') in '+wt.title);
		return rl;
	},
	update_between : function (wt, $blk, newtxt) {
		var $w = jQuery($blk[2]);
		var wt = TWtid.wrapper_tiddler($w);
		var text = wt.tiddler.text.split('\n');
		var $prev = jQuery($blk[0]);
		var $next = jQuery($blk[1]);
		var title = TWtid.tiddler_title(wt.title);
		var section = TWtid.tiddler_section(wt.title);
		var r0 = TWted.plain_text_starts($w,$prev,wt,text,title,section);
		var rl = TWted.plain_text_ends($w,$next,wt,text,title,section);
//displayMessage('Update text between '+$prev[0].nodeName+' at '+r0+' ('+TWtid.element_classes($prev)+')'+' and '+$next[0].nodeName+' at '+rl+' ('+TWtid.element_classes($next)+')'+' in '+wt.title);
		TWtid.lines_of_text(text,r0,rl,newtxt);
		TWtid.save_text ( wt.tiddler, text );
		TWtid.refresh_wrapper(wt,true);
		return true;
	},

	update_cell_text : function ( wt, $elem, txt ) {
		var wikitxt = wt.tiddler.text.split ( '\n' );
		var $table = TWtid.table_element($elem);
		var ndx = TWtid.element_index ($table, wt);
		var r0 = TWtid.table_first_line(wikitxt,ndx,wt.title);
		var rl = TWtid.table_last_line(wikitxt,r0);
		var r, c;
		var row = TWtid.cell_row_index ($elem),
			col = $elem[0].cellIndex,
			rspan = $elem.attr('rowspan'),
			cspan = $elem.attr('colspan'),
			n = 0;

		r = TWtid.line_number_of_table_row(wikitxt,r0,row);
		rspan = (rspan===undefined) ? 1 : rspan*1;
		cspan = (cspan===undefined) ? 1 : cspan*1;
		for ( var r1 = 0; r1 < rspan; r1++, r++ ) {
			// Find the right cell (skip the spanned columns).
			var rowtxt = TWtid.split_table_row ( wikitxt[r] ),
				txt_save;
			if ( r1 == 0 )
				if((c=TWtid.cell_index_in_line(rowtxt,col))==-1) {
					c = rowtxt.length-1;
					rowtxt.push('');
				}
			for ( var c1 = cspan-1; c1 >= 0; c1--, n++ ) {
				txt_save = config.options.chkTWtidMultiLine ?
						txt[n].replace(/\n/mg, ' <br>') : txt[n];
				if ( config.options.chkTWtedIncludeCSS ||
					rowtxt[c-c1]=='~' || rowtxt[c-c1]=='>' ) {
					rowtxt[c-c1] = txt_save;
				} else {
					// Retain the original style text and replace
					// the rest of the tiddler text with new text.
					rowtxt[c-c1] =
						TWtid.elem_wide_style_text(rowtxt[c-c1])
						+txt_save;
				}
			}
			// Put the modified line back
			wikitxt[r] = TWtid.make_table_row(rowtxt);
		}
		// Decide how to refresh
		if ( rspan > 1 || cspan > 1
				//|| TWtid.elem_wide_style_text(txt[0])
				|| txt[0] == '~' || txt[0] == '>' ) {
			// The text is only for spanning row/column,
			// or contains cell-wide style text, let the
			// TiddlyWiki do the hard work.
			TWtid.save_text(wt.tiddler,wikitxt);
			TWtid.refresh_wrapper(wt,true);
		} else {
			// Otherwise refresh only the cell just changed.
			txt = txt[0];
			wt.$wrapper.each(function(n,w){
				$table = TWtid.table_element
							(TWtid.find_tables(jQuery(w)),ndx,wt,n);
				if ( ! $table ) return;
				$elem = $table.find('tr').eq(row).
							find('th,td').eq(col);
				TWted.wikify_elem($elem,txt);
				TWtid.table_changed(
					'MODIFIED'
					,{
						'table':$table,
						'row':row,
						'col':col,
						'text':wikitxt,
						'first':r0,
						'last':rl,
						'rndx':r,
						'cndx':c
					}
					, wt
				);
			});
			TWtid.save_text ( wt.tiddler, wikitxt );
		}
		return true;
	},
	update_caption_text : function ( wt, $elem, txt ) {
		var wikitxt = wt.tiddler.text.split ( '\n' );
		var $table = TWtid.table_element($elem),
			ndx = TWtid.element_index ( $table, wt ),
			r0 = TWtid.table_first_line(wikitxt,ndx,wt.title),
			rl = TWtid.table_last_line(wikitxt,r0);
		var rem = 0, changed = false;
//displayMessage('update caption of table '+TWtid.index_string(ndx)+' in '+wt.title);
		for ( r = r0; r <= rl; r++ )
			if ( /[cC]$/.test(wikitxt[r]) ) {
				rem = 1;
				break;
			}
		if(r>rl) r=r0+(/[kK]$/.test(wikitxt[r0])?1:0);
		if ( txt ) {
			//if ( config.options.chkTWtidMultiLine ) {
			//	txt=txt.replace(/\n/mg, ' <br>');
			//}
			wikitxt.splice(r,rem,'|'+txt+'|c');
			changed = true;
		} else if ( rem > 0 ) {
			wikitxt.splice(r,rem);
			changed = true;
		}
		if ( changed ) {
			TWtid.save_text(wt.tiddler,wikitxt);
			TWtid.refresh_wrapper(wt,true);
			return true;
		}
		return false;
	},
	update_tiddler_text : function ( wt, $elem, txt ) {
		if ( $elem.size() > 1 ) {
			TWted.update_between(wt,$elem,txt[0]);
			return true;
		}
 		switch ( $elem[0].nodeName ) {
			case 'TD':
			case 'TH':
				return this.update_cell_text(wt,$elem,txt);
			case 'H1':
			case 'H2':
			case 'H3':
			case 'H4':
			case 'H5':
			case 'H6':
				return this.update_header_text(wt,$elem,txt[0]);
			case 'SPAN' :
				if ( $elem.is('.sliderPanel') ) {
					return this.update_header_content_text(
								wt,$elem,txt[0]
							);
				}
				break;
			case 'BLOCKQUOTE':
				return this.update_blockquote_text(wt,$elem,txt[0]);
			case 'LI':
				return this.update_list_item_text(wt,$elem,txt[0]);
			case 'PRE':
				return this.update_preformat_text(wt,$elem,txt[0]);
			case 'UL':
			case 'OL':
				break;
			case 'DIV' :
				if ( TWtid.is_wrapper($elem) ) {
					// Tiddler text
					if ( TWtid.tiddler_section(wt.title) ) {
//displayMessage('update tiddler text for '+wt.title);
						TWted.update_section_text(
							wt
							,{'rIndex':-1, 'dIndex':0}
							,txt[0]
						);
					} else TWtid.save_text(wt.tiddler,txt[0]);
					TWtid.refresh_wrapper(wt,true);
					return true;
				} else if ( $elem.is('[id^=tedTC]') ) {
					// Table caption
//displayMessage('update caption to '+txt[0]);
					return this.update_caption_text(wt,$elem,txt[0]);
				} else if ( $elem.is('.title') && txt[0] ) {
					// Tiddler title.
//displayMessage('update title from '+wt.tiddler.title+' to '+txt[0]);
					TWtid.save_text(wt.tiddler,null,txt[0]);
					return true;
				}
				break;
			default:
				// To be implemented...
				break;
		}
		return false;
	},

	pre_save_text : null,
	save_text : function ( tiddler, text ) {
		var newtext=TWted.pre_save_text.apply(this,arguments);
		// Save changes to local file or server
		if ( window.location.protocol == "file:" ) {
			if ( !config.options.chkTWtedManualSave )
				autoSaveChanges (null,[tiddler]);
		} else if ( !config.options.chkTWtedManualUpload &&
				config.macros.upload ) {
			config.macros.upload.action();
		}
		return newtext;
	},
//}}}

// // DOM related functions
//{{{
	pre_resize : null,
	resize : function (ev) {
		if ( ! TWted.$cur_elem )
			TWted.pre_resize.apply(this,arguments);
	},

	detach_contents : function ($elem, txta) {
		return /\[[\<\>]?img/.test(txta)
					? null
					: $elem.contents().detach();
	},
	multi_line : function ($elem, txt) {
		switch ( $elem[0].nodeName ) {
			case 'DIV' :
			case 'P' :
				return true;
			case 'SPAN' :
				if ( TWtid.is_wrapper($elem) ) return true;
			case 'TH' :
			case 'TD' :
				//return config.options.chkTWtidMultiLine;
			default :
				return config.options.chkTWtidMultiLine
						|| /\n/.test(txt);
		}
	},

	//get_textnodes : function ($elem) {
	//	return $elem.contents().filter(function(){
	//		return this.nodeType == 3;
	//	});
	//},

	$cur_elem : null,
	$edit_box : null,
	$preview : null,
	edit_element : function ( $elem, txta, no_preview ) {
		TWted.$cur_elem = $elem;
		var esize = $elem.size();
		var $w = esize < 3 ? $elem : jQuery($elem[2]);
		var fs = TWtid.css_size($w.css('font-size')),
			w = $elem.width(),
			talign = $elem.css('text-align'),
			fm = $elem.css('font-family'),
			minw = fs*config.options.txtTWtidMinCellWidth;
		var lh = TWtid.css_size($elem.css('line-height'));
		if (w < minw) w = minw;

		if ( !txta && esize==1 ) txta = $elem.text();
		var ta;
		if ( typeof txta == 'string' ) {
			ta = [jQuery('<textarea>'+txta+'</textarea>')];
			ta[0][0].defaultValue = txta;
			ta[0].width(w);
		} else {
			ta = txta;
			txta = ta[0].val();
			if ( txta == '>' )
				txta = jQuery(ta[0].get(-1)).val();
		}

		var $display = $elem.closest('div[id=tiddlerDisplay]');
		var eb = TWtid.element_box($elem);
		if ( eb.height < lh ) eb.height = lh;
		jQuery.each(ta, function(r, $rta){
			if ( r == 0 ) TWted.$edit_box = jQuery($rta);
			else TWted.$edit_box=TWted.$edit_box.add($rta);
			if ( ta.length == 1 ) {
				$rta.appendTo($display).css({
					'position':'absolute'
					,'left':eb.left
					,'top':eb.top
					,'width':eb.width
					,'height':eb.height
				});
			}
			$rta.css({
				'padding':'0'
				,'margin':'0'
				,'overflow':'auto'
				,'text-align':talign
				,'font-family':'monospace'
				,'font-size':fs
			}).attr({
				'scrH0':eb.height,
				'spellcheck':'true',
				'cancel':'false',
				'title':'('+(TWted.multi_line($elem,txta)
							?'Ctrl-'
							:'')+'ENTER=accept, ESC=cancel)'
			}).keydown (TWted.keydown)
			.bind('paste', TWted.paste)
			.bind('copy', function(ev){
				TWted.copy_and_cut(ev,TWted.$cur_elem);
			}).bind('cut', function(ev){
				TWted.copy_and_cut(ev,TWted.$cur_elem,true);
			});
			switch ( $elem[0].nodeName ) {
				//case 'TH':
				//case 'TD':
				//default:
				//	if ( config.options.chkTWtidMultiLine )
				//		lh *= 2;
				case 'LI':
				case 'H1':
				case 'H2':
				case 'H3':
				case 'H4':
				case 'H5':
				case 'H6':
					if ( esize == 1 ) {
						$rta.height(0);
						var scrH = $rta.prop('scrollHeight');
						if ( scrH < eb.height ) scrH = eb.height;
						$rta.height(scrH);
						//if ( ta.length == 1 ) {
							$elem.attr('elemH',$elem.height());
							//$elem.height(scrH);
						//}
					}
					break;
			}
		});
		ta[0].select().focus();

		if ( ! no_preview ) {
			// prepare preview panel
			if ( ! TWted.$preview ) {
				TWted.$preview = jQuery('<span></span>')
					.appendTo($display).css({
						'position':'absolute'
						,'z-index':1
						,'border':'1px solid black'
						,'padding':0
						,'margin':0
						,'background-color':'#fff8dc'
						,'opacity':config.options.txtTWtedPreviewOpacity
					}).addClass('preview');
			}
			var tpos = TWtid.element_offset(ta[0]);
			//if ( $elem[0].nodeName == 'LI' )
			//	tpos.left = TWtid.element_offset(
			//					TWtid.direct_wrapper($elem)
			//				).left;
			TWted.$preview.css({
				'left':tpos.left
				,'top':tpos.top
				,'width':ta[0].width() // outerWidth() would be over
			});
			// Copy font attributes
			TWtid.copy_font_text(TWted.$preview,$w);
			// Output to previewer
			setTimeout(function(){
				TWted.preview_editbox(ta[0],null,tpos);
			}, 0);
		}

		TWtid.hide_buttons();
		return ta;
	},

	edit_caption : function ( $div_c, $table, ndx, wt ) {
		if ( ! $table ) $table = TWtid.table_element($div_c);
		if ( ! wt ) wt = TWtid.wrapper_tiddler($div_c);
		if ( ! ndx ) ndx = TWtid.element_index($table,wt);
//displayMessage('Table '+TWtid.index_string(ndx)+' in '+wt.title);
//displayMessage('cur_title='+TWted.cur_title);
//displayMessage(' saved_index='+TWtid.index_string(TWted.cur_ndx));
		if ( TWted.cur_title == wt.title
				&& TWted.saved_index(ndx) ) {
			var text = wt.tiddler.text.split('\n'),
				r0 = TWtid.table_first_line(text,ndx,wt.title),
				rl = TWtid.table_last_line(text, r0),
				r, cap = ' ';
			for ( r = r0; r <= rl; r++ )
				if ( /[cC]$/.test(text[r]) ) {
					cap = TWtid.split_table_row(text[r])[1];
					break;
				}
			this.edit_element($div_c, cap);
		}
	},

	edit_neighbor_cell : function ( $cell, which, span ) {
		// Edit the neighboring cell of $cell. Which neighbor
		// is specified in the second argument, 'left', 'right',
		// 'up', or 'down'.
		var $table = TWtid.table_element($cell),
			r = TWtid.cell_row_index($cell),
			c = $cell[0].cellIndex;
		switch ( which ) {
			case 'left' :
				c -= span ? span : 1;
				break;
			case 'right' :
				c += span ? span : 1;
				break;
			case 'up' :
				r -= span ? span : 1;
				break;
			case 'down' :
				r += span ? span : 1;
				break;
		}
		TWted.focusout();
		var $rows = $table.find('tr'),
			oversize = $table.attr('oversize'),
			rmin = oversize?config.options.txtTWtidFixRows*1:0;
		if ( r < rmin ) r = $rows.size()-1;
		else if ( r >= $rows.size() ) r = rmin;
		var $cells = $rows.eq(r).find('th,td'),
			cmin = oversize?config.options.txtTWtidFixCols*1:0;
		if ( c < cmin ) c = $cells.size()-1;
		else if ( c >= $cells.size() ) c = cmin;
		TWted.edit_cell(
			$cells.eq(c)
			, $table
		);
	},

	edit_neighbor : function ($elem, which, span) {
		var name = $elem[0].nodeName;
		if ( name == 'TH' || name == 'TD' ) {
			TWted.edit_neighbor_cell($elem,which,span);
			return;
		}

		var wt = TWtid.wrapper_tiddler($elem);
		var $w = TWtid.direct_wrapper($elem,wt);
		var ndx = TWtid.element_index($elem,wt);
		switch ( which ) {
			case 'left' :
			case 'up' :
				ndx.rIndex--; ndx.dIndex--;
				break;
			case 'right' :
			case 'down' :
				ndx.rIndex++; ndx.dIndex++;
				break;
		}
		var $elems = null;
		var editor = null;
		switch ( $elem[0].nodeName ) {
			case 'H1' :
			case 'H2' :
			case 'H3' :
			case 'H4' :
			case 'H5' :
			case 'H6' :
				$elems = TWtid.find_headers($w);
				editor = TWted.edit_header;
				break;
			case 'LI' :
				$elems = TWtid.find_list_items($w);
				editor = TWted.edit_list_item;
				break;
			case 'PRE' :
				$elems = TWtid.find_elements($w,'PRE');
				editor = TWted.edit_preformat;
				break;
			case 'BLOCKQUOTE' :
				$elems = TWtid.find_elements($w,'BLOCKQUOTE');
				editor = TWted.edit_blockquote;
				break;
		}
		if ( $elems && $elems.size() > 0 ) {
			if ( ndx.rIndex < 0 ) {
				ndx.rIndex = $elems.size()-1; ndx.dIndex = -1;
			} else if ( ndx.rIndex >= $elems.size() ) {
				ndx.rIndex = 0; ndx.dIndex = -1;
			}
			$elem = jQuery($elems.get(ndx.rIndex));
			TWted.focusout();
			editor.call(this,$elem,wt,ndx);
		}
	},

	edit_cell : function ( $cell, $table, ndx, wt ) {
		if ( $cell.is('.noedit') ) return false;
		var checked = ($table && ndx && wt);
		if ( ! $table ) $table = TWtid.table_element($cell);

		// Determine whether to sort or edit.
		var row = TWtid.cell_row_index($cell);
		if ( row == 0 && $table[0].tHead
				&& TWtid.sorting_enabled() ) {
			// Clicked on a cell in the first row while sorting
			// feature is enabled. Check whether the user clicks
			// on the text content of this cell. If not, leave it
			// for sorting, otherwise edit this cell.
			displayMessage('sort or edit?');
			return false;
		}

		if ( ! wt ) wt = TWtid.wrapper_tiddler($table);
		if ( ! ndx ) ndx = TWtid.element_index($table,wt);
//displayMessage('checked='+checked);
//displayMessage(' TWted.cur_title='+TWted.cur_title);
//displayMessage(' wt.title='+wt.title);
//displayMessage(' TWted.cur_ndx='+TWtid.index_string(TWted.cur_ndx));
//displayMessage(' ndx='+TWtid.index_string(ndx));
		if ( checked || (TWted.cur_title == wt.title
			&& TWted.saved_index(ndx)) ) {
			var text = wt.tiddler.text.split ( '\n' ),
				r0 = TWtid.table_first_line(text,ndx,wt.title),
				col = $cell[0].cellIndex,
				rspan = $cell.attr('rowspan'),
				cspan = $cell.attr('colspan'),
				txt_ndx, wikitxt;
			rspan = (rspan===undefined) ? 1 : rspan*1;
			cspan = (cspan===undefined) ? 1 : cspan*1;
			txt_ndx=TWtid.cell_wiki_ndx(text,r0,row,col,rspan,cspan);
			wikitxt = txt_ndx.text;
			if ( ! config.options.chkTWtedIncludeCSS )
				wikitxt[0][cspan-1]=
					TWtid.remove_style_text(wikitxt[0][cspan-1]);
			if ( config.options.chkTWtidMultiLine )
				wikitxt[0][cspan-1] = wikitxt[0][cspan-1].
								replace(/ <br>/mg, '\n').
								replace(/<br>/mg, '\n').
								replace(/ <br \/>/mg, '\n').
								replace(/<br \/>/mg, '\n');
			var $div_tb = $table.parent(),
				scrT = $div_tb.scrollTop(),
				scrL = $div_tb.scrollLeft();
			if ( rspan == 1 && cspan == 1 )
				this.edit_element($cell, wikitxt[0][0]);
			else {
				var ta = new Array(), $ta, $tr, $sp_c,
					$div_t = $table.parent().parent(),
					$sp_h=$div_t.find('[id^=tedTrefH]').find('span'),
					$rows=$table.find('tr');
				var lh = TWtid.css_size($cell.css('line-height'));
				var $display=$cell.closest('#displayArea');
				jQuery.each(wikitxt, function(r,rtxt){
					ta[r] = new Array();
					$tr = $rows.eq(row+r);
					var trpos = TWtid.element_offset($tr);
					var trh = $tr.innerHeight();
					if ( trh < lh ) trh = lh;
					jQuery.each(rtxt, function(c,ctxt){
						$sp_c = $sp_h.eq(txt_ndx.cndx-cspan+c);
						$ta = jQuery('<textarea>'+ctxt+'</textarea>');
						if ( wikitxt.length > 1 ) {
							$ta.appendTo($display).css({
								'position':'absolute'
								,'left':TWtid.element_offset($sp_c).left
								,'top':trpos.top
								,'width':$sp_c.innerWidth()
								,'height':trh
							});
						}
						$ta[0].defaultValue = ctxt;
						ta[r][c] = $ta[0];
					});
					ta[r] = jQuery([]).pushStack(ta[r]);
				});
				this.edit_element($cell, ta);
			}
			$div_tb.scrollTop(scrT).scrollLeft(scrL);
			$table.resize();
		}
		return true;
	},

	locatable_elem : function($elem) {
		// This function was written for leveled elements
		// that do not start from the top level. For example,
		// a blockquote that starts from the 2nd level.
		var $parent, $children,
			name = $elem[0].nodeName;
		while ( true ) {
			$parent = $elem.parent(name);
			if ( $parent.size() == 0 ) return $elem;
			$children = $parent.children().not(name);
			if ( $children.size() > 0 ) return $elem;
			$elem = $parent;
		}
	},

	sub_elem : null,
	edit_list_item : function ($elem,wt,ndx) {
		if ( ! wt ) wt = TWtid.wrapper_tiddler($elem);
		//var $e = TWted.locatable_elem($elem);
		//if ( ! ndx ) ndx = TWtid.element_index($e,wt);
		if ( ! ndx ) ndx = TWtid.element_index($elem,wt);
		var text = wt.tiddler.text.split('\n');
		var r0 = TWtid.list_item_line(text,ndx,wt.title);
//displayMessage('edit '+$elem[0].nodeName+TWtid.index_string(ndx)+' found at '+r0+' in '+wt.$wrapper.size()+' wrappers in '+wt.title);
		if ( config.options.chkTWtedIncludeSubs ) {
			var ps = TWtid.list_prefix(text[r0]);
			var rl = TWtid.list_last_line(text,r0+1,ps);
			this.edit_element($elem,TWtid.lines_of_text(text,r0,rl));
			TWted.sub_elem = null;
		} else {
			TWted.sub_elem = $elem.children('ol,ul');
			//var $children = $elem.children().not('ol,ul');
			this.edit_element($elem,text[r0]);
			if ( TWted.sub_elem.size() > 0 )
				TWted.sub_elem.appendTo($elem);
			else TWted.sub_elem = null;
		}
	},

	edit_header : function ($elem,wt,ndx) {
		if ( ! wt ) wt = TWtid.wrapper_tiddler($elem);
		if ( ! ndx ) ndx = TWtid.element_index($elem,wt);
		var text = wt.tiddler.text.split('\n');
		var ln = TWtid.header_first_line(text,ndx,wt.title);
//displayMessage('header '+TWtid.index_string(ndx)+' at '+ln+' in '+wt.title);
		this.edit_element($elem,text[ln]);
	},

	edit_header_content : function ($elem) {
		this.edit_element($elem,TWtid.header_content($elem.prev()));
	},

	edit_blockquote : function ($elem,wt,ndx) {
		if ( ! wt ) wt = TWtid.wrapper_tiddler($elem);
		var $e = TWted.locatable_elem($elem);
		if ( ! ndx ) ndx = TWtid.element_index($e,wt);
		var text = wt.tiddler.text.split('\n');
		var ln = TWtid.blockquote_first_line(text,ndx,wt.title);
//displayMessage('bq '+TWtid.index_string(ndx)+' starts at '+ln+' in '+wt.title);
		var ln2, edit_txt;
		if ( TWtid.blockexample_first_line(text[ln]) ) {
			ln2 = TWtid.blockexample_last_line(text,ln+1);
			edit_txt = TWtid.lines_of_text(text,ln,ln2);
			this.edit_element($elem,edit_txt);
		} else {
			ln2 = TWtid.blockquote_last_line(text,ln);
//displayMessage('ends at '+ln2);
			edit_txt = TWtid.lines_of_text(text,ln,ln2);
			TWted.sub_elem = $elem.children('blockquote');
			var $children = $elem.children().not('blockquote');
			if ( $children.size()>0 ) {
				this.edit_element($elem,edit_txt);
				if ( TWted.sub_elem.size()>0 )
					TWted.sub_elem.appendTo($elem);
				else TWted.sub_elem = null;
			} else {
				this.edit_element(TWted.sub_elem,edit_txt);
				TWted.sub_elem = null;
			}
		}
	},

	edit_preformat : function ($elem,wt,ndx) {
		if ( ! wt ) wt = TWtid.wrapper_tiddler($elem);
//displayMessage('finding preformat in '+wt.$wrapper+' of '+wt.tiddler);
		if ( ! ndx ) ndx = TWtid.element_index($elem,wt);
//displayMessage(TWtid.index_string(ndx)+' in '+wt.title);
		var text = wt.tiddler.text.split('\n');
		var r0 = TWtid.preformat_first_line(text,ndx,wt.title);
//displayMessage('starts at '+r0);
		var rl = TWtid.preformat_last_line(text, r0);
//displayMessage('ends at '+rl);
		this.edit_element($elem,TWtid.lines_of_text(text,r0,rl));
	},

	edit_span : function($elem) {
		if ( $elem.is('.sliderPanel') ) {
//displayMessage('sliderPanel');
			this.edit_header_content($elem);
			return true;
		} else {
			var title = $elem.attr('tiddler');
			if ( ! title ) return false;
			switch ( title ) {
				case 'SiteTitle' :
				case 'SiteSubtitle' :
					return false;
				default :
//displayMessage('<<tiddler "'+title+'">>');
					// <<tiddler>> transcluded content.
					// Find the previous and next block elements.
					var $blk=TWtid.closest_blocks($elem,ev);
//displayMessage('prev:'+$blk[0]+', next:'+$blk[1]);
					// Now decide how to edit
					if ( $blk ) {
						// Edit the text between $blk[0] and
						// $blk[1].
						TWted.edit_between($blk);
					} else {
						TWted.edit_tiddler($elem);
					}
					return true;
			}
		}
	},

	block_elem_first_line : function($elem,text,ndx,title,start) {
		var name = typeof $elem == 'string'
					? $elem : $elem[0].nodeName;
		switch (name) {
			case 'PRE' :
				return TWtid.preformat_first_line(text,ndx,title);
			case 'TABLE' :
				return TWtid.table_first_line(text,ndx,title);
			case 'BLOCKQUOTE' :
				return TWtid.blockquote_first_line(text,ndx,title);
			case 'H1' :
			case 'H2' :
			case 'H3' :
			case 'H4' :
			case 'H5' :
			case 'H6' :
				return TWtid.header_first_line(text,ndx,title,start);
			case 'LI' :
				return TWtid.list_item_line(text,ndx,title);
		}
		var winfo = TWtid.wrapper_info($elem);
		return winfo.macro
					? TWtid.macro_first_line(text,ndx,title,winfo.macro) 
					: 0;
	},
	block_elem_last_line : function($elem,text,r0) {
		switch ($elem[0].nodeName) {
			case 'PRE' :
				return TWtid.preformat_last_line(text,r0);
			case 'TABLE' :
				return TWtid.table_last_line(text,r0);
			case 'BLOCKQUOTE' :
				return TWtid.blockquote_last_line(text,r0);
			case 'LI' :
				//return TWtid.list_last_line(
				//		text,r0+1,TWtid.list_prefix(text[r0])
				//	);
			case 'H1' :
			case 'H2' :
			case 'H3' :
			case 'H4' :
			case 'H5' :
			case 'H6' :
				return r0;
		}
		var winfo = TWtid.wrapper_info($elem);
		return winfo.macro
					? TWtid.macro_last_line(text,r0) 
					: 0;
	},
	edit_between : function ($blk) {
		// Edit plain text between two block elements, $blk[0] and
		// $blk[1].
		var $w = jQuery($blk[2]);
		var wt = TWtid.wrapper_tiddler($w);
		var text = wt.tiddler.text.split('\n');
		var $prev = jQuery($blk[0]);
		var $next = jQuery($blk[1]);
		var title = TWtid.tiddler_title(wt.title);
		var section = TWtid.tiddler_section(wt.title);
		var r0 = TWted.plain_text_starts($w,$prev,wt,text,title,section);
		var rl = TWted.plain_text_ends($w,$next,wt,text,title,section);
//displayMessage('Edit text between '+$prev[0].nodeName+' at '+r0+' ('+TWtid.element_classes($prev)+')'+' and '+$next[0].nodeName+' at '+rl+' ('+TWtid.element_classes($next)+')'+' in '+wt.title);
		TWted.edit_element($blk,TWtid.lines_of_text(text,r0,rl));
	},

	edit_div : function($elem,ev) {
		var $blk;
		if ( TWtid.is_wrapper($elem) ) {
			// Find the previous and next block elements.
			$blk=TWtid.closest_blocks($elem,ev);
			if ( $blk ) {
				// Edit the text between $blk[0] and
				// $blk[1].
				TWted.edit_between($blk);
			} else {
				TWted.edit_tiddler($elem);
			}
			return true;
		} else if ( $elem.is('.title') ) {
			TWted.edit_tiddler_title($elem);
			return true;
		}
	},

	edit_tiddler_title : function($elem,wt) {
		if ( ! wt ) wt = TWtid.wrapper_tiddler($elem);
		if ( ! (TWted.replaced_ta
				|| story.getTiddlerField(wt.title,"text")) ) {
			this.edit_element($elem,wt.tiddler.title);
			return true;
		}
		return false;
	},
	edit_tiddler : function ($elem,wt) {
		if ( ! wt ) wt = TWtid.wrapper_tiddler($elem);
		var text = TWtid.tiddler_section(wt.title)
					? store.getTiddlerText(wt.title)
					: wt.tiddler.text;
		this.edit_element($elem,text);
	},

	edit_parent : function ($elem,ev) {
		var $parent = $elem.closest('h1,h2,h3,h4,h5,h6');
		if ( $parent.size() == 1 ) {
			this.edit_header($parent);
			return true;
		}
		$parent = $elem.closest('li');
		if ( $parent.size() == 1 ) {
			this.edit_list_item($parent);
			return true;
		}
		if ( ! $elem.is('[id^=tedTbtn]') ) {
			$parent = $elem.closest('div[id^=tedTC]');
			if ( $parent.size() == 1 ) {
				this.edit_caption($parent);
				return true;
			}
		}
		$parent = $elem.closest('blockquote');
		if ( $parent.size() == 1 ) {
			this.edit_blockquote($parent);
			return true;
		}
		$parent = $elem.closest('div');
		if ( $parent.size() == 1 ) {
			if ( this.edit_div($parent,ev) )
				return true;
		}
		$parent = $elem.closest('span');
		if ( $parent.size() == 1 ) {
			if ( this.edit_span($parent) )
				return true;
		}
		/*
		displayMessage($elem[0].nodeName
				+' class='+$elem[0].className
				//+' attr='+Object.keys($elem[0].attributes)
				+' id='+$elem.attr('id')
				+' tiddler='+$elem.attr('tiddler')
			);
		*/
		return false;
	},
	edit_ev : null,
	editInPlace : function ($elem,ev) {
		if ( readOnly || ! config.options.chkTWtidEnabled
				|| ! config.options.chkTWtedEnabled
				|| (! config.options.chkTWtedInViewMode
						&& ! TWted.replaced_ta)
				|| $elem[0].nodeName == 'TEXTAREA'
				|| ($elem[0].nodeName == 'A'
						&& ! config.options.chkTWtedDisableLink)
				|| (ev && (ev.ctrlKey || ev.shiftKey || ev.altKey)) )
			return false;

		if ( TWted.$cur_elem ) {
			if ( TWted.$cur_elem[0] == $elem[0] ) {
				return true;
			}
			if ( config.options.chkTWtedClickAway ) {
				this.focusout();
			}
		}

//displayMessage($elem[0].nodeName+' classes='+TWtid.element_classes($elem));
		var $table = null;
		TWted.edit_ev = ev;
		switch ( $elem[0].nodeName ) {
			case 'TD' :
			case 'TH' :
				return this.edit_cell($elem);
			case 'TABLE' :
				// Clicking on a non-existing cell.
				// Need to find the corresponding row index.
				var $tr = null; $table = $elem;
				$table.find('tr').each(function(r,tr){
					$tr = jQuery(tr);
					var trpos = TWtid.element_offset($tr);
					var $win = jQuery(window);
					var mousey = ev.clientY+$win.scrollTop();
					if ( mousey >= trpos.top
							&& mousey <= trpos.top+$tr.height() )
						return false;
				});
				$elem = $tr;
			case 'TR' :
				// Clicking on a non-existing cell, which must be the
				// last one in this row.
				if ( ! $table ) $table = $elem.closest('table');
				var wt = TWtid.wrapper_tiddler($table);
				var ndx = TWtid.element_index($table,wt);
				if ( TWted.cur_title == wt.title
							&& TWted.saved_index(ndx) )
					return this.edit_cell(
						jQuery('<td></td>').attr('missed',true)
											.appendTo($elem)
						,$table
						,ndx
						,wt
					);
				return false;
		}
		var $parent = $elem.closest('th,td');
		if ( $parent.size() == 1 ) {
			return this.edit_cell($parent);
		}

		if ( TWted.$cur_block
				&& TWted.$cur_block.is('TABLE')
				&& TWted.$cur_block[0] != TWtid.cur_block()[0] ) {
			TWted.toggleEditMode(TWted.$cur_block,'stop');
		}

		switch ( $elem[0].nodeName ) {
			case 'H1':
			case 'H2':
			case 'H3':
			case 'H4':
			case 'H5':
			case 'H6':
				if ( ! $elem.is('.foldable')
						//|| ! config.options.chkTWtedCatTheMouse
						|| config.options.chkTWtedNoClick ) {
					this.edit_header($elem);
					return true;
				}
				break;
			case 'BLOCKQUOTE':
				this.edit_blockquote($elem);
				return true;
			case 'LI' :
				this.edit_list_item($elem);
				return true;
			case 'SPAN' :
				if ( ! TWted.edit_span($elem) ) {
					return this.edit_parent($elem,ev);
				}
				return true;
			case 'PRE' :
				this.edit_preformat($elem);
				return true;
			case 'DIV':
				if ( TWted.edit_div ($elem,ev) ) {
					return true;
				}
			default :
				return this.edit_parent($elem,ev);
		}
	},

	move_element : function ($elem, delta) {
		switch ($elem[0].nodeName) {
			case 'LI' :
				if ( $elem.closest('th,td').size() == 0 ) {
					var wt = TWtid.wrapper_tiddler($elem);
					var ndx=TWtid.element_index($elem,wt);
					var text = wt.tiddler.text.split('\n');
					var ri=TWtid.list_item_line(text,ndx,wt.title);
					var litxt = text[ri];
					text.splice(ri,1);
					text.splice(ri+delta,0,litxt);
					TWtid.save_text(wt.tiddler, text);
					var ndx_next = {
											'rIndex':ndx.rIndex+delta
											, 'dIndex':ndx.dIndex+delta
										};
					var $next=jQuery(TWtid.find_list_items(wt.$wrapper)
											.get(ndx_next.rIndex));
					TWted.focusout();
					var html_next = $next.html();
					$next.html($elem.html());
					$elem.html(html_next);
					TWted.edit_list_item($next,wt,ndx_next);
					//TWtid.refresh_wrapper(wt,true);
					return true;
				}
		}
		return false;
	},

	adjust_tables : function($w) {
		TWtid.find_tables($w).each(function(n, table){
			var $table = jQuery(table);
			TWtid.fix_cols_adjust($table).fix_rows_adjust($table);
		});
	},

	focusout : function () {
		var $elem = TWted.$cur_elem;
		if ( ! $elem ) return;
		var $ta = TWted.$edit_box;
		var canceled = false,
			done = false,
			modified = false,
			ctxt = new Array(), txt;
		$ta.each(function(t,ta){
			var $cta = jQuery(ta);
			txt = $cta.val();
			ctxt.push(txt);
			if ( $cta.attr('cancel')=='true' )
				canceled = true;
			if ( ta.defaultValue != txt )
				modified = true;
		});
		if ( !canceled && modified ) {
			// If the $elem contains more than one DOM elements,
			// the wrapper_tiddler() function does not always get
			// the wrapper_tiddler of the first element. But we do
			// want the first one, so we do it explicitly here.
			var wt = TWtid.wrapper_tiddler(jQuery($elem[0]));
			//$elem.height(TWted.$preview.children().height());
			//$elem.css('height','auto');
			done=TWted.update_tiddler_text(wt, $elem, ctxt);
		}
		if ( !done ) {
			if ( $elem.attr('missed') ) {
				$elem.remove();
			} else if ( $elem.size() > 1 ) {
				TWted.adjust_tables(TWtid.direct_wrapper($elem));
			} else {
				//var elemH = $elem.attr('elemH');
				//if ( elemH !== undefined ) $elem.height(elemH*1);
				if ( TWtid.is_wrapper($elem) ) {
					TWted.adjust_tables(TWtid.direct_wrapper($elem));
				}
			}
		}
		$elem.attr({
			'elemH':''
			,'missed':''
		});
		$ta.remove();
		var $table = TWtid.table_element($elem);
		if ( $table ) $table.resize();
		TWted.$cur_elem = TWted.edit_ev = null;
		TWted.close_editbox();
	},

	caret_position : function($ta, pos) {
		if ( ! pos ) {
			// Get caret position
			try {
				if ( document.selection ) {
					// IE
					// The following codes are copied from
					// http://jsfiddle.net/FishBasketGordo/ExZM9/
					$ta[0].focus();
					var sel = document.selection.createRange();
					var sel_copy = sel.duplicate();
					sel_copy.moveToElementText($ta[0]);
					sel_copy.setEndPoint('EndToStart',sel);
					return sel_copy.text.length-sel.text.length;
				} else if ( $ta[0].selectionStart
								|| $ta[0].selectionStart == '0' )
					return $ta[0].selectionStart*1;
			} catch(e) {}
			//var txt = $ta.val();
			//return txt ? txt.length : 0;
			return -1;
		} else {
			// Set caret position
			// The following codes are copied from
			// http://www.webdeveloper.com/forum/showthread.php?74982-How-to-set-get-caret-position-of-a-textfield-in-IE
			if ( $ta[0].setSelectionRange ) {
				$ta.focus();
				$ta[0].setSelectionRange(pos,pos);
			} else if ( $ta[0].createTextRange ) {
				var range = $ta[0].createTextRange();
				range.collapse(true);
				range.moveEnd('character',pos);
				range.moveStart('character',pos);
				range.select();
			}
		}
	},

	get_selection : function ( $ta ) {
		// This function is directly copied from
		// http://stackoverflow.com/questions/3053542/how-to-get-the-start-and-end-points-of-selection-in-text-area
		var target = $ta.jquery ? $ta[0] : $ta;
		var s = {start: 0, end:0};
		if (typeof target.selectionStart == "number"
				&& typeof target.selectionEnd == "number") {
			// Firefox (and others)
			s.start = target.selectionStart;
			s.end = target.selectionEnd;
		} else if (document.selection) {
			// IE
			var bookmark = document.selection.createRange().getBookmark();
			var sel = target.createTextRange();
			var bfr = sel.duplicate();
			sel.moveToBookmark(bookmark);
			bfr.setEndPoint("EndToStart", sel);
			s.start = bfr.text.length;
			s.end = s.start + sel.text.length;
		}
		return s;
	},

	close_editbox : function() {
		TWted.$preview.hide();
		TWted.$edit_box.hide();
		TWted.$edit_box = null;
	},
	preview_editbox : function ($ta,cpos,tpos) {
		if ( ! config.options.chkTWtedPreview ) {
			TWted.$preview.hide();
			return;
		}
		if ( typeof cpos != 'number' || cpos == -1 )
			cpos = TWted.caret_position($ta);
		var txt = $ta.val();
//displayMessage('caret at '+cpos);
		txt = cpos == 0
				? (config.options.txtTWtedPreviewCaret+txt)
				: (txt.substring(0,cpos)
					+config.options.txtTWtedPreviewCaret
					+txt.substring(cpos));
		//TWted.$preview.show();
		TWted.wikify_elem (TWted.$preview,txt);
		if ( ! tpos )
			tpos = TWtid.element_offset($ta);
		tpos.top -= TWted.$preview.outerHeight();
		TWted.$preview.css({
			'top':tpos.top
		}).show();
//displayMessage('html='+TWted.$preview.html()+' text='+TWted.$preview.text());
		//TWted.$cur_elem.html(TWted.$preview.children().html());
		//TWted.close_editbox();
	},
//}}}
/***
!! keydown
***/
//{{{
	keydown : function (ev) {
		ev = ev || window.event;
		var $ta = jQuery(this), $elem = TWted.$cur_elem;
		switch ( ev.which ) {
			case 13 :
				if ( TWted.multi_line($elem,$ta.val()) ) {
					if (ev.ctrlKey) {
						TWted.focusout(); return false;
					}
				} else if (!ev.ctrlKey) {
					TWted.focusout(); return false;
				} else return false;
			default :
				var _this = this;
				setTimeout(function(){
					TWted.keydown_after.call(_this,ev,$ta,$elem);
				}, 0);
		}
	},
	last_caret_pos : -100,
	keydown_after : function (ev,$ta,$elem) {
		var $tas = TWted.$edit_box, tandx = 0, cpos = -1;
		var cspan = $elem.attr('colspan'),
			rspan = $elem.attr('rowspan');
		cspan = cspan ? cspan * 1 : 1;
		rspan = rspan ? rspan * 1 : 1;

		switch ( ev.which ) {
			case 27 :
				$tas.attr ('cancel', 'true');
				TWted.focusout();
				return false;
			case 37 : // left arrow
				if ( ev.shiftKey ) return;
				cpos = TWted.caret_position($ta);
//displayMessage('left:'+TWted.last_caret_pos+' pos:'+cpos);
				if ( cpos == 0
						&& TWted.last_caret_pos == cpos ) {
					if ( cspan > 1 ) {
						tandx = $tas.index($ta);
						if ( tandx == 0 )
							TWted.edit_neighbor($elem,'left');
						else {
							$ta = $tas.eq(--tandx);
							$ta.focus();
							TWted.preview_editbox($ta);
						}
					} else
						TWted.edit_neighbor($elem,'left');
				} else
					TWted.preview_editbox($ta,cpos);
				TWted.last_caret_pos = cpos;
				break;
			case 38 : // up arrow
				if ( ev.shiftKey ) return;
				if ( ev.ctrlKey ) {
					TWted.move_element($elem, -1);
					return false;
				}
				cpos = TWted.caret_position($ta);
//displayMessage('up:'+TWted.last_caret_pos+' pos:'+cpos);
				if ( cpos == 0
						&& cpos == TWted.last_caret_pos ) {
					if ( rspan > 1 ) {
						tandx = $tas.index($ta);
						if ( tandx == 0 )
							TWted.edit_neighbor($elem,'up');
						else {
							$ta = $tas.eq(--tandx);
							$ta.focus();
							TWted.preview_editbox($ta);
						}
					} else
						TWted.edit_neighbor($elem,'up');
				} else
					TWted.preview_editbox($ta);
				TWted.last_caret_pos = cpos;
				break;
			case 39 : // right arrow
				if ( ev.shiftKey ) return;
				cpos = TWted.caret_position($ta);
				if ( cpos == $ta.val().length
						&& TWted.last_caret_pos == cpos ) {
					if ( cspan > 1 ) {
						tandx = $tas.index($ta);
						if ( tandx == $tas.size()-1 )
							TWted.edit_neighbor($elem,'right');
						else {
							$ta = $tas.eq(++tandx);
							$ta.focus();
							TWted.preview_editbox($ta);
						}
					} else
						TWted.edit_neighbor($elem,'right');
				} else
					TWted.preview_editbox($ta,cpos);
				TWted.last_caret_pos = cpos;
				break;
			case 40 : // down arrow
				if ( ev.shiftKey ) return;
				if ( ev.ctrlKey ) {
					TWted.move_element($elem, 1);
					return false;
				}
				cpos = TWted.caret_position($ta);
				if ( cpos == $ta.val().length
						&& cpos == TWted.last_caret_pos )
					if ( rspan > 1 ) {
						tandx = $tas.index($ta);
						if ( tandx == $tas.size()-1 )
							TWted.edit_neighbor($elem,'down',rspan);
						else {
							$ta = $tas.eq(++tandx);
							$ta.focus();
							TWted.preview_editbox($ta);
						}
					} else
						TWted.edit_neighbor($elem,'down');
				else
					TWted.preview_editbox($ta);
				TWted.last_caret_pos = cpos;
				break;
			default :
				// Adjust the edit box height to fit its containing text.

				// It is interesting that with Chrome, FireFox,
				// and Safari we need to change the height of $ta
				// to get the correct scrollHeight, while with IE9
				// we get it either way. The scrH0 is just the minimum
				// height that we stored upon initialization.
				var tah = Math.round($ta.height());
				$ta.height(0);
				var scrH0 = $ta.attr('scrH0')*1;
				var scrH = $ta.prop('scrollHeight');
//displayMessage('tah='+tah+' scrH='+scrH+' scrH0='+scrH0);
				scrH = Math.max(scrH, scrH0);
//displayMessage('tah='+tah+' scrH='+scrH+' scrH0='+scrH0);
				$ta.height(scrH);
				//$elem.height(scrH);

				var $table = TWtid.table_element($elem);
				if ( $table ) {
					var $div_tb = $table.parent();
					var scrL = $div_tb.scrollLeft();
					var scrT = $div_tb.scrollTop();
					$div_tb.scrollTop(scrT).scrollLeft(scrL);
					if ( Math.abs(scrH-tah) > 4 ) $table.resize();
				}
				TWted.preview_editbox($ta);
				break;
		}
	},
//}}}
/***
!!!!
***/
//{{{
	table_edit_mode : function ($table,action,ndx,wt) {
		var $div_wrap = $table.closest('.tedTable');
		TWted.focusout();
		if ( ! wt ) wt = TWtid.wrapper_tiddler($table);
		if ( ! ndx ) ndx = TWtid.element_index($table,wt);
		var nw = wt.$wrapper.size();
		var text = wt.tiddler.text.split('\n');
//displayMessage('toggle table '+TWtid.index_string(ndx)+' in '+wt.title);
		if ( TWted.cur_title == wt.title ) {
			var nmax = wt.$wrapper.size() - 1;
			wt.$wrapper.each(function(n, w){
				var $w = jQuery(w);
				var $tables = TWtid.find_tables($w);
				if ( action === 'stop' ) {
					TWted.stop_edit_mode(
						TWtid.table_element(
							$tables
							,TWted.cur_ndx
							,wt
							,n
							,text
						)
						, TWted.cur_ndx
					);
					if ( n == nmax ) {
//displayMessage('stop...forgetting title '+TWted.cur_title);
						TWted.$cur_block
						= TWted.cur_title
						= TWted.cur_ndx
						= null;
					}
				} else if ( ! TWted.saved_index(ndx) ) {
					TWted.stop_edit_mode(
						TWtid.table_element(
							$tables
							,TWted.cur_ndx
							,wt
							,n
							,text
						)
						, TWted.cur_ndx
					);
					TWted.start_edit_mode(
						TWtid.table_element(
							$tables
							,ndx
							,wt
							,n
							,text
						)
						, ndx
						, wt
					);
					if ( n == nmax ) {
						TWted.cur_ndx = ndx;
						TWted.$cur_block = $table;
					}
				} else if ( ! action ) {
					TWted.stop_edit_mode(
						TWtid.table_element(
							$tables
							,TWted.cur_ndx
							,wt
							,n
							,text
						)
						, TWted.cur_ndx
					);
					if ( n == nmax ) {
//displayMessage('toggle...forgetting title '+TWted.cur_title);
						TWted.$cur_block
						= TWted.cur_title
						= TWted.cur_ndx
						= null;
					}
				}
			});
		} else {
			if ( TWted.cur_title ) {
				var cur_wt={
						'$wrapper':TWtid.wrapper_from_title
											(TWted.cur_title)
						,'tiddler':TWtid.get_tiddler(TWted.cur_title)
						,'title':TWted.cur_title
					};
				var cur_txt = cur_wt.tiddler.text.split('\n');
				cur_wt.$wrapper.each(function(n, w){
					var $w = jQuery(w),
						$table = TWtid.table_element(
									TWtid.find_tables($w)
									, TWted.cur_ndx
									, cur_wt
									, n
									, cur_txt
								);
					TWted.stop_edit_mode($table,TWted.cur_ndx);
				});
			}
			wt.$wrapper.each(function(n, w){
//displayMessage('start edit mode for table '+TWtid.index_string(ndx)+' in wrapper '+n+'/'+wt.$wrapper.size());
				TWted.start_edit_mode (
					TWtid.table_element(
						TWtid.find_tables(jQuery(w))
						, ndx
						, wt
						, n
						, text
					)
					, ndx
					, wt
				);
			});
			TWted.cur_title = wt.title;
//displayMessage('title recorded '+TWted.cur_title);
			TWted.cur_ndx = ndx;
			TWted.$cur_block = $table;
		}
	},

	$cur_block : null,
	toggleEditMode : function ( $elem, action, ndx, wt ) {
		if ( ! $elem || $elem.size() > 2 ) return this;
		switch ( $elem[0].nodeName ) {
			case 'TH' :
			case 'TD' :
				var $table = TWtid.table_element($elem);
				TWted.table_edit_mode ($table,action,ndx,wt);
				/*
				if ( config.options.chkTWtedNoClick ) {
					if ( TWted.$cur_block ) {
						if ( TWted.$cur_block[0] != $elem[0] ) {
							if ( TWted.$cur_block.is('TABLE') )
								TWted.table_edit_mode(
									TWted.$cur_block
									,'stop'
								);
							TWted.focusout();
						}
					}
				}
				*/
				break;
			case 'TABLE' :
				TWted.table_edit_mode ($elem,action,ndx,wt);
				break;
			default :
				if ( config.options.chkTWtedNoClick
						// || ! config.options.chkTWtedCatTheMouse
					) {
					if ( TWted.$cur_block ) {
						TWted.focusout();
						if ( TWted.$cur_block[0] != $elem[0] ) {
							if ( TWted.$cur_block.is('TABLE') ) {
								TWted.table_edit_mode(
									TWted.$cur_block
									,'stop'
								);
							}
							if ( TWted.editInPlace($elem) )
								TWted.$cur_block = $elem;
						} else {
							TWted.$cur_block = null;
						}
					} else {
						if ( TWted.editInPlace($elem) )
							TWted.$cur_block = $elem;
					}
				}
				break;
		}
		return this;
	},

	restore_scroll_pos : function (wt, ndx, $table) {
		var pos=TWtid.get_table_info(wt.tiddler,ndx.dIndex,'ScrollPos');
		if ( pos ) {
			$table.parent().scrollLeft(pos.left).scrollTop(pos.top);
		}
	},

	prepare_edit_buttons : function ( $table, ndx, wt ) {
		this.start_edit_mode($table, ndx, wt);
	},
	start_edit_mode : function ( $table, ndx, wt ) {
		if ( ! $table ) return;
//displayMessage('start edit mode for table '+TWtid.index_string(ndx)+' in '+wt.title);
		TWted.reference_bars($table, ndx);

		var $display = $table.closest('div[id=tiddlerDisplay]');
		var $div_tb = $table.parent(),
			$div_t = $div_tb.parent();
		var v0w = $div_t.find('div[id^=tedTrefV]').width(),
			h0h = $div_t.find('div[id^=tedTrefH]').height();
		$display.find('[id^=tedTbtn]').not('[id^=tedTmenu] [id^=tedTbtn]')
			.css({
				'left':'+='+v0w
				,'top':'+='+h0h
			});
		$table.find('.noedit').css('opacity',0.5);
		// We needed to locate the correct scroll position of a table
		// if the uer scrolled the table before pressing the 'E' button.
		if ( $table.attr('oversize') ) {
			TWtid.table_scrolled(
				$div_t, $div_tb.position()
				, $div_tb.scrollLeft()
				, $div_tb.scrollTop()
			);
		}

		var bw = TWtid.button_width()+2, bh = bw+2;
		var $menu = $display.find('div[id^=tedTmenu]');
		if ( $menu.size() > 0 ) return;

		// Create horizontal menu
		$menu = jQuery('<div></div>').appendTo($display).css({
			'position':'absolute'
			//,'display':'none'
			,'width':bw*3
			,'height':bh*2
		}).append(TWtid.create_button(
			String.fromCharCode(60),
			"Insert column left",
			function(){
				TWted.insertColumn(jQuery(this),'left');
			},'cL').css({
				'position':'absolute',
				'top':0,
				'left':0
			})
		).append(TWtid.create_delete_button(
			"Delete this column",
			function() {
		 		TWted.deleteColumn(jQuery(this));
			},ndx,'xC').css({
				'position':'absolute',
				'top':0,
				'left':bw
			})
		).append(TWtid.create_button(
			String.fromCharCode(62),
			"Insert column right",
			function(){
				TWted.insertColumn(jQuery(this),'right');
			},'cR').css({
				'position':'absolute',
				'top':0,
				'left':bw*2
			})
		).append(TWtid.create_button(
			'C',
			"Copy this column",
			function() {
				var $btn = jQuery(this);
		 		TWted.copyColumn($btn);
		 		$btn.parent().find('[id^=tedTbtncP]').fadeTo('fast',1);
			},'cC').css({
				'position':'absolute',
				'top':bh,
				'left':0
			})
		).append(TWtid.create_button(
			'X',
			"Cut this column",
			function() {
				var $btn = jQuery(this);
		 		TWted.copyColumn($btn);
		 		TWted.deleteColumn($btn,false);
		 		$btn.parent().find('[id^=tedTbtncP]').fadeTo('fast',1);
//displayMessage('cut from '+$btn.text()+' '+$btn.parent().attr('col'));
//displayMessage($btn.parent().find(('[id^=tedTbtncP]').size()));
			},'cX').css({
				'position':'absolute',
				'top':bh,
				'left':bw
			})
		).append(TWtid.create_button(
			'P',
			"Paste to this column",
			function() {
				var $btn = jQuery(this);
				if(TWtid.button_active($btn)){ 
		 			TWted.pasteColumn($btn);
//displayMessage('paste to '+$btn.text()+' '+$btn.parent().attr('col'));
		 		}
			},'cP').css({
				'position':'absolute',
				'top':bh,
				'left':bw*2
			})
		).attr('id','tedTmenuH'+ndx.dIndex).hide();

		// Create vertical menu
		// bh = TWtid.button_height()+2;
		$menu = jQuery('<div></div>').appendTo($display).css({
			'position':'absolute'
			//,'display':'none'
			//,'border':'1px solid red'
			,'border':'0'
			,'width':bw*2
			,'height':bh*3
		}).append(TWtid.create_button(
			String.fromCharCode(8743),
			"Insert row above",
			function(){
				TWted.insertRow(jQuery(this),'above');
			},'rU').css({
				'position':'absolute',
				'left':0,
				'top':0
			})
		).append(TWtid.create_delete_button(
			"Delete this row",
			function(){
				TWted.deleteRow(jQuery(this));
			},ndx,'xR').css({
				'position':'absolute',
				'left':0,
				'top':bh
			})
		).append(TWtid.create_button(
			String.fromCharCode(8744),
			"Insert row below",
			function() {
				TWted.insertRow(jQuery(this),'below');
			},'rD').css({
				'position':'absolute',
				'left':0,
				'top':bh*2
			})
		).append(TWtid.create_button(
			'C',
			"Copy this row",
			function() {
				var $btn = jQuery(this);
		 		TWted.copyRow($btn);
		 		$btn.parent().find('[id^=tedTbtnrP]').fadeTo('fast',1);
			},'rC').css({
				'position':'absolute',
				'top':0,
				'left':bw
			})
		).append(TWtid.create_button(
			'X',
			"Cut this row",
			function() {
				var $btn = jQuery(this);
		 		TWted.copyRow($btn);
		 		TWted.deleteRow($btn,false);
		 		$btn.parent().find('[id^=tedTbtnrP]').fadeTo('fast',1);
			},'rX').css({
				'position':'absolute',
				'top':bh,
				'left':bw
			})
		).append(TWtid.create_button(
			'P',
			"Paste to this row",
			function() {
				var $btn = jQuery(this);
				if(TWtid.button_active($btn)){ 
		 			TWted.pasteRow($btn);
		 		}
			},'rP').css({
				'position':'absolute',
				'top':bh*2,
				'left':bw
			})
		).attr('id','tedTmenuV'+ndx.dIndex).hide();
	},

	hide_floating_menus : function () {
		jQuery(document).find('div[id=tiddlerDisplay]')
			.find('div[id^=tedTmenuH]').hide().end()
			.find('div[id^=tedTmenuV]').hide();
	},

	remove_edit_buttons : function ( $table, ndx ) {
		this.stop_edit_mode($table, ndx);
	},
	stop_edit_mode : function ($table, ndx) {
		if ( ! $table ) return;
//displayMessage('stop edit mode for table '+TWtid.index_string(ndx));
		this.focusout();
		TWted.reference_bars($table, ndx, 'remove');
		TWted.hide_floating_menus();
		var $div_t = $table.parent().parent();
		$table.closest('div[id=tiddlerDisplay]')
			.find('[id^=tedTbtn]').not('[id^=tedTmenu] [id^=tedTbtn]')
			.css({
				'left':'-='+$div_t.find('div[id^=tedTrefV]').width()
				,'top':'-='+$div_t.find('div[id^=tedTrefH]').height()
			});
		$table.find('.noedit').css('opacity',1);
	},

	copy_border : function ($dest, $src) {
		$dest.css({
			'border-top-width':$src.css('border-top-width'),
			'border-right-width':$src.css('border-right-width'),
			'border-bottom-width':$src.css('border-bottom-width'),
			'border-left-width':$src.css('border-left-width')
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

	pre_table_scrolled : null,
	table_scrolled : function ($div_t,tbpos,scrL,scrT) {
		// Scroll reference bars when TWtid scrolls
		// fixed rows/columns.
		TWted.pre_table_scrolled.apply(this,arguments);
		$div_t.find('div[id*=tedTrefH]').css('left',tbpos.left-scrL).end()
				.find('div[id*=tedTrefV]').css('top',tbpos.top-scrT);
		if ( TWted.$edit_box ) {
			var off_elem = TWtid.element_offset(TWted.$cur_elem);
			var off_ed = TWtid.element_offset(TWted.$edit_box);
			var dl = off_elem.left - off_ed.left;
			var dt = off_elem.top - off_ed.top;
			TWted.$edit_box.css({
				'left':'+='+dl
				,'top':'+='+dt
			});
			TWted.$preview.css({
				'left':'+='+dl
				,'top':'+='+dt
			});
		}
	},
	ref_bar_v_adjust : function ( $table ) {
		var $div_tb = $table.parent(),
			$v0 = $div_tb.parent().find('div[id*=tedTrefV]');
		if ( $v0.size() == 0 ) return this;
		var scrtop = $div_tb.scrollTop(),
			lh = TWtid.css_size($div_tb.css('line-height')),
			$sp = $v0.find('span');
		$table.find('tr').each( function(n, tr){
			var $tr = jQuery(tr),
				trpos = $tr.position(),
				trh = $tr.outerHeight(true);
			$sp.eq(n).css({
				//'height':,
				// (try-lh)*dh, dh=0, 0.5, 1 for top, middle,
				// bottom vertical align, respectively.
				'top':(trpos.top+scrtop)+(trh-lh)*0.5
			});
		});
		return this;
	},
	ref_bar_v : function ( $table, ndx, v0w ) {
		var $div_tb = $table.parent(),
			$v0 = $div_tb.parent().find('[id^=tedTrefV]');
		if ( $v0.size()>0 ) return $v0;

		$v0 = jQuery('<div></div>');
		var scrtop = $div_tb.scrollTop(),
			lh = TWtid.css_size($div_tb.css('line-height'));
		$v0.attr('id','tedTrefV'+ndx.dIndex).css({
			'position':'absolute',
			'z-index':1,
			'top':$div_tb.position().top,
			'left':0,
			'width':v0w
		}).insertBefore($div_tb);
		$table.find('tr').each( function (n, tr){
			var $tr = jQuery(tr),
				trpos = $tr.position(),
				trh = $tr.outerHeight(true);
			if (trh == 0)
				trh = $tr.find('th,td:first').outerHeight(true);
			jQuery('<span>'+n+'</span>').appendTo($v0).css({
				'border':'0',
				//'border':'1px solid red',
				'position':'absolute',
				'padding':0,
				'margin':0,
				'height':lh,
				'text-align':'center',
				'width':v0w,
				'left':0,
				'top':(trpos.top+scrtop)+(trh-lh)*0.5
			}).attr('row',n).click(function(ev){
				var $sp = jQuery(this),
					row = $sp.attr('row')*1,
					$v0 = $sp.parent(),
					last_row = $v0.attr('last-row'),
					$table = $v0.parent().find('table'),
					$rows = $table.find('tr');
				last_row = last_row ? last_row * 1 : -1;
				if ( last_row > -1 ) {
					$rows.eq(last_row).fadeTo(0,1);
				}
				if ( row != last_row ) {
					$rows.eq(row).fadeTo(0,0.3);
					$v0.attr('last-row',row);
				} else $v0.attr('last-row','');
			}).mouseenter(function(ev){
				var $sp = jQuery(this),
					pos = TWtid.element_offset($sp),
					$table = TWted.$cur_block,
					$menu = $table.closest('div[id=tiddlerDisplay]')
							.find('div[id^=tedTmenuV]'),
					row = $sp.index()*1;
				$menu.show().css({
					'left':pos.left-$menu.width()/2-2
					,'top':pos.top-($menu.height()-$sp.height())/2
				}).attr('row',row).find('[id^=tedTbtnrP]')
					.fadeTo('fast',(TWted.copied_rndx>-1?1:0.4))
				.end().find('[id^=tedTbtnrU]').css({
					'display':(row==0 && $table[0].tHead
								?'none':'inline')
				}).end().find('[id^=tedTbtnrD]').css({
					'display':(row==$table[0].rows.length-1 &&
								$table[0].tFoot?'none':'inline')
				});
			});
		});

		return $v0;
	},
	ref_bar_h_adjust : function ( $table ) {
		var $div_tb = $table.parent(),
			$h0 = $div_tb.parent().find('div[id*=tedTrefH]');
		if ( $h0.size() == 0 ) return this;
		var $sp = $h0.find('span'),
			scrleft = $div_tb.scrollLeft(),
			$tr = TWtid.row_with_max_col($table);
		$tr.find('th,td').each(function(n,c){
			var $c = jQuery(c),
				bw=TWtid.css_size($c.css('border-left-width'))+
					TWtid.css_size($c.css('border-right-width'));
			$sp.eq(n).css({
				'width':$c.width()+bw,
				'left':(scrleft+$c.position().left)
			});
		});
		return this;
	},
	ref_bar_h : function ( $table, ndx ) {
		var $div_tb = $table.parent(),
			$div_t = $div_tb.parent(),
			$h0 = $div_t.find('[id^=tedTrefH]');
		if ( $h0.size()>0 ) return $h0;

		$h0 = jQuery('<div></div>');
		var $thead = $table.find('tr').eq(0),
			tbpos = $div_tb.position(),
			scrleft = $div_tb.scrollLeft(),
			lh = TWtid.css_size($div_tb.css('line-height')),
			bc = $div_t.css('background-color'),
			fc = $div_t.css('color');
		$h0.attr('id','tedTrefH'+ndx.dIndex).css({
			'border':'0', //'1px solid black',
			'position':'absolute',
			'top':tbpos.top,
			'left':0,
			'padding-bottom':4,
			'width':$div_t.width(),
			'height':lh
		}).insertBefore($div_tb);

		var $tr = TWtid.row_with_max_col($table);
		$tr.find('th,td').each(function(n,c){
			var $c = jQuery(c),
				$sp = jQuery('<span></span>'),
				bw=TWtid.css_size($c.css('border-left-width'))+
					TWtid.css_size($c.css('border-right-width'));
			TWtid.copy_margin_padding($sp,$c);
			$sp.css({
				'background-color':bc,
				'color':fc,
				'position':'absolute',
				'border':0,
				//'border':'1px solid red',
				'text-align':'center',
				'left':(scrleft+$c.position().left),
				'width':$c.width()+bw
			}).appendTo($h0).attr('col',n).click(function(ev){
				var $sp = jQuery(this),
					col = $sp.attr('col')*1,
					$h0 = $sp.parent(),
					last_col = $h0.attr('last-col'),
					$table = $h0.parent().find('table'),
					$cols;
				last_col = last_col ? last_col * 1 : -1;
				$table.find('tr').each(function(r,tr){
					$cols = jQuery(tr).find('th,td');
					if ( last_col > -1 ) {
						$cols.eq(last_col).fadeTo(0,1);
					}
					if ( col != last_col ) {
						$cols.eq(col).fadeTo(0,0.3);
					}
				});
				$h0.attr('last-col',(col!=last_col?col:''));
			}).mouseenter(function(ev){
				var $sp = jQuery(this),
					pos = TWtid.element_offset($sp),
					$div_t=TWted.$cur_block.parent().parent(),
					$menu = $div_t.closest('div[id=tiddlerDisplay]')
							.find('div[id^=tedTmenuH]');
				$menu.show().css({
					'left':pos.left-($menu.width()-$sp.width())/2+4
					,'top':pos.top-$menu.height()
				}).attr('col',$sp.index()).find('[id^=tedTbtncP]').
					fadeTo('fast',(TWted.copied_column?1:0.4));
			}).text(TWtid.col_ref(n));
		});
		return $h0;
	},
	reference_bars : function ($table, ndx, action) {
		var $div_tb = $table.parent(),
			$div_t = $div_tb.parent(),
			$div_wrap = $div_t.parent(),
			v0w = $div_t.attr('v0w')*1,
			caph = $div_wrap.find('[id^=tedTCdiv]')
						.outerHeight(true),
			oversize = $table.attr('oversize'),
			tbw = $div_tb.width(),
			tbh = $div_tb.height(),
			$v0 = $div_t.find('div[id^=tedTrefV]'),
			$h0 = $div_t.find('div[id^=tedTrefH]');
		if ( action == 'remove' ) {
			if ( $v0.size() > 0 ) {
				var hh = $div_tb.position().top;
				$v0.hide();
				$h0.hide();
				$div_wrap.css({
					'width':tbw
				}).find('[id^=tedTCdiv]').css('width','-='+v0w);
				$div_t.css({
					'width':(tbw+(oversize?1:0))
				});
				if ( tbh > 0 ) {
					$div_wrap.css({
						'height':(tbh+caph)
					});
					$div_t.css({
						'height':(tbh+(oversize?2:1))
					});
				}
				$div_tb.css({
					'left':0,
					'top':0
				});
				$div_t.find('div.tedTfixedH').css({
					'left':0,
					'top':0
				}).end().find('div.tedTfixedV').css({
					'left':0,
					'top':0
				});
			}
		} else {
			if ( $v0.size() == 0 ) {
				$v0 = TWted.ref_bar_v($table,ndx,v0w);
				$h0 = TWted.ref_bar_h($table,ndx);
			} else {
				$v0.show();
				$h0.show();
			}
			var hh = $h0.outerHeight(true);
			$div_wrap.css({
				'width':(tbw+v0w),
				'height':(tbh+caph+hh)
			}).find('[id^=tedTCdiv]').css('width','+='+v0w);
			$div_t.css({
				'width':(tbw+v0w+(oversize?1:0)),
				'height':(tbh+hh+(oversize?2.1:1))
			});
			$v0.css({
				'top':hh
			});
			$h0.css({
				'left':v0w
			});
			$div_tb.css({
				'top':hh,
				'left':v0w
			});
			$div_t.find('div.tedTfixedH').css({
				'top':hh,
				'left':v0w
			}).end().find('div.tedTfixedV').css({
				'top':hh,
				'left':v0w
			});
		}
	},

	pre_inactive_elem : null,
	inactive_elem : function ($elem) {
		var result = TWted.$preview
							&& ($elem[0] == TWted.$preview[0]
								|| $elem.closest('.preview').size()>0);
		if ( ! result )
			result = TWted.$edit_box
							&& $elem[0] == TWted.$edit_box[0];
		if ( ! result )
			result = TWted.pre_inactive_elem.apply(this,arguments);
		return result;
	},

	$btn_US : null,
	pre_is_button : null,
	is_button : function ($elem, $btn) {
		if ( ! TWted.$btn_US ) {
			var $b;
			if( config.options.chkTWtedManualUpload ) {
				$b = TWtid.create_button ( 'U',
							"Upload to server",
							function() {
								var $btn = jQuery(this);
								if (TWtid.button_active($btn)) {
									config.macros.upload.action();
								}
							}
						);
				TWted.$btn_US = $b;
			}
			if ( config.options.chkTWtedManualSave ) {
				$b = TWtid.create_button ( 'S',
							"Save to file",
							function() {
								var $btn = jQuery(this);
								if (TWtid.button_active($btn)) {
									saveChanges ();
								}
							}
						);
				if ( ! TWted.$btn_US ) TWted.$btn_US = $b;
				else TWted.$btn_US = TWted.$btn_US.add($b);
			}
			if ( TWted.$btn_US)
				TWted.$btn_US.appendTo($btn.parent()).hide();
		}
		var found = TWted.pre_is_button.apply(this,arguments);
		if ( ! found && (! $btn) )
			found = TWted.pre_is_button.call(this,$elem,TWted.$btn_US);
		if ( ! found )
			found = $elem.is('[id^=tedTmenu]')
					|| $elem.parent().is('[id^=tedTmenu]');
		return found;
	},

	pre_hide_buttons : null,
	hide_buttons : function() {
		if ( TWted.$btn_US ) TWted.$btn_US.hide();
		TWted.pre_hide_buttons.apply(this,arguments);
	},

	pre_focus : null,
	focus : function($elem,action) {
		if ( ! $elem ) {
			//if ( config.options.chkTWtedNoClick )
			//	TWted.focusout();
			if ( TWted.$cur_block ) {
				TWted.toggleEditMode(TWted.$cur_block,'stop');
			}
		} else {
			if ( config.options.chkTWtidEnabled
					&& config.options.chkTWtedEnabled ) {
				//if ( config.options.chkTWtedCatTheMouse ) {
					//$btn = $btn.add(TWted.$btn_US);
					if ( config.options.chkTWtedInViewMode
							&& ! TWted.replaced_ta ) {
						if ( TWted.$cur_block ) {
							if ( TWted.$cur_block[0] != $elem[0] ) {
								TWted.toggleEditMode(
									TWted.$cur_block,'stop'
								);
								TWted.toggleEditMode($elem);
							}
						} else {
							TWted.toggleEditMode($elem);
						}
					}
				//} else
				//	$btn = $btn.add(TWted.$btn_US);

				/*
				if ( config.options.chkTWtedManualSave
						|| config.options.chkTWtedManualUpload ) {
					var $btn_US = null;
					switch ( $btn.size() ) {
						case 2 :
						case 3 :
							$btn_US = jQuery($btn[1]);
							break;
						case 4 :
							$btn_US = jQuery($btn[1]).add($btn.get(2));
							break;
					}
					if ( $btn_US )
						$btn_US.css(
							'opacity'
							,store.isDirty()?1:0.4
						);
				}
				*/
			}
		}
		if ( ! config.options.chkTWtedNoClick ) {
			TWted.pre_focus.apply(this,arguments);
		}
	},

	pre_header_click : null,
	header_click : function () {
		if ( ! TWted.$edit_box )
			TWted.pre_header_click.apply(this,arguments);
	},
//}}}

// // Main function
//{{{
	down_elem : null,
	mousedown : function (ev) {
		ev = ev || window.event;
		TWted.down_elem = (ev.button == 0
			|| (config.browser.isIE && ev.button == 1)) // left button
			? document.elementFromPoint(ev.clientX,ev.clientY)
			: null;
	},
	mouseup : function (ev) {
		ev = ev || window.event;
		if (ev.button == 0
				|| (config.browser.isIE && ev.button == 1)) {
			// left button
			var $up_elem=jQuery(
									document.elementFromPoint(
										ev.clientX
										,ev.clientY
									)
								);
			//TWtid.focus();
			if ( $up_elem[0]==TWted.down_elem
					&& ! TWtid.is_button($up_elem) ) {
//displayMessage('up_elem='+$up_elem[0].nodeName+' classes =('+TWtid.element_classes($up_elem)+')');
				var $blk = TWtid.cur_block();
				if ( !$blk ) {
					TWted.focusout();
					return;
				}
//displayMessage('TWtid.cur_blk='+$blk[0].nodeName+' classes =('+TWtid.element_classes($blk)+')');
				if ( $blk.is('table') ) {
					if ( $up_elem.is('TEXTAREA') ) {
						setTimeout(function(){
							TWted.preview_editbox($up_elem);
						}, 0);
						return;
					} else {
						return ! TWted.editInPlace($up_elem,ev);
					}
				}

				if ( ! (TWted.$cur_block
						&& TWted.$cur_block.is('TABLE')) ) {
					switch ( $up_elem[0].nodeName ) {
						case 'TEXTAREA' :
							if ( $up_elem[0] == TWted.$edit_box[0] )
								setTimeout(function(){
									TWted.preview_editbox($up_elem);
								}, 0);
							break;
						case 'SPAN' :
							if ( $up_elem.is('.preview') )
								break;
						default :
							//if ( config.options.chkTWtedCatTheMouse ) {
								if ( $up_elem.is('.tab') ) {
									// The "tab" created by <<tabs>>
									// macro. Think about how to edit
									// the tab label...
								} else {
									return !TWted.editInPlace($up_elem,ev);
								}
							//}
							TWted.focusout();
							TWted.$cur_block = null;
							break;
					}
				} else if ( config.options.chkTWtedClickAway )
					TWted.focusout();
			}
		}
	},
	pre_dblclick : null,
	dblclick : function (ev) {
		TWted.pre_dblclick.apply(this,arguments);
	},
	pre_OfficialExample : null,
	OfficialExample : function ( title ) {
		var result = TWted.pre_OfficialExample(title);
		if ( ! result && title )
			result = /^TWted--Example/.test(title);
		return result;
	},
	//copied_from : null,
	copy_and_cut : function (ev, $elem, cut) {
		//TWted.copied_from = jQuery(this);
	},
	text_before_paste : null,
	selection_at_paste : null,
	paste_in : function (ev,$ta,$elem) {
		var text_pasted = $ta.val();
		if ( text_pasted && text_pasted.length > 0 ) {
			if ( config.options.chkTWtidMultiLine )
				text_pasted=text_pasted.replace(/ <br>/mg,'\n').
									replace(/<br>/mg, '\n').
									replace(/ <br \/>/mg, '\n').
									replace(/<br \/>/mg, '\n');
			else
				text_pasted=text_pasted.replace(/\n/mg,' <br>');

			if ( ! TWted.text_before_paste ) {
				$ta.val(text_pasted);
			} else {
				$ta.val(
						TWted.text_before_paste
							.substring(0,TWted.selection_at_paste.start)
					+	text_pasted
					+	TWted.text_before_paste
							.substring(TWted.selection_at_paste.end)
				);
			}
			TWted.keydown_after(ev,$ta,$elem);
			var end=TWted.selection_at_paste.end+text_pasted.length;
			//if ( end == 0 ) end = text_pasted.length;
			TWted.caret_position($ta,end);
		} else {
			$ta.val(TWted.text_before_paste);
		}
		TWted.text_before_paste = null;
	},
	paste : function (ev) {
		// Something pasted from outside of this tiddler. Need to find
		// the paste-in text and replace \n with <br>.
		// From http://stackoverflow.com/questions/686995/jquery-catch-paste-input
		// I leanred that the paste-in text can be obtained in the
		// next event loop.
		if ( ! TWted.text_before_paste ) {
			var $ta = jQuery(this);
			TWted.text_before_paste = $ta.val();
			TWted.selection_at_paste = TWted.get_selection($ta);
			$ta.val('');
			setTimeout(function() {
				TWted.paste_in(ev,$ta,TWted.$cur_elem);
			}, 0);
		}
	},

	pre_fix_cols_adjust : null,
	fix_cols_adjust : function ( $table ) {
		TWted.pre_fix_cols_adjust.apply(this,arguments);
		TWted.ref_bar_v_adjust($table);
		return this;
	},
	pre_fix_rows_adjust : null,
	fix_rows_adjust : function ( $table ) {
		TWted.pre_fix_rows_adjust.apply(this,arguments);
		TWted.ref_bar_h_adjust($table);
		return this;
	},

	pre_slider_close : null,
	slider_close : function ($e, wt) {
		TWted.pre_slider_close.apply(this,arguments);
		if ( TWted.cur_title == wt.title ) {
			TWted.toggleEditMode(
				TWtid.table_element
					(TWtid.find_tables($e),TWted.cur_ndx,wt)
				,'stop',TWted.cur_ndx,wt
			);
		}
	},

	/*
	pre_prepare_elements : null,
	prepare_elements : function ($elem, wt) {
		if ( TWted.replaced_ta ) {
			TWted.pre_prepare_elements.apply(this,arguments);
		} else
			TWted.pre_prepare_elements.apply(this,arguments);
	},
	*/

	pre_prepare_table : null,
	prepare_table : function ($table, ndx, wt) {
		// Prepare the table rows for editing.
		if ( ! TWted.pre_prepare_table.apply(this,arguments) )
			return false;
		if ( ! config.options.chkTWtedEnabled ) return false;
		if (!readOnly || TWted.OfficialExample(wt.title)) {
			if ( config.options.chkTWtedEditAllTables
					|| (! config.options.chkTWtedInViewMode
							&& ! TWted.replaced_ta)
					|| TWtid.hasClass($table,ndx,'editable',wt) ) {
				// Restore scroll position.
				TWted.restore_scroll_pos(wt,ndx,$table);

//displayMessage(TWted.cur_title+' / '+wt.title+' '+TWtid.index_string(TWted.cur_ndx)+' / '+TWtid.index_string(ndx));
				if ( TWted.cur_title == wt.title
						&& TWted.saved_index(ndx) ) {
					TWted.start_edit_mode($table,ndx,wt);
				}

				//$table.find('th,td').mouseenter(function(ev){
				//	ev = ev || window.event;
				//	if ( config.options.chkTWtedNoClick )
				//		TWted.editInPlace(jQuery(this),ev);
				//});

				// Mouse handlers
				$table.closest('.tedTable').find('div[id^=tedTCdiv]')
					.mouseenter ( function() {
						TWted.hide_floating_menus();
					});
				$table.mouseenter ( function() {
					TWted.hide_floating_menus();
				});

				// Resize handler
				$table.bind( 'resize', function(e){
					var $table = jQuery(this);
					if ( !$table.attr('oversize') ) {
						var tbw = $table.outerWidth(),
							tbh = $table.outerHeight(),
							$div_t = $table.parent().parent(),
							v0w = $div_t.find('div[id^=tedTrefV]')
										.width(),
							h0h = $div_t.find('div[id^=tedTrefH]')
										.outerHeight(true),
							$div_wrap = $div_t.parent(),
							caph = $div_wrap.find('div[id^=tedTCdiv]')
										.outerHeight(true);
						$div_wrap.css({
							'width':(tbw+v0w),
							'height':(tbh+h0h+caph)
						});
						$div_t.css({
							'width':(tbw+v0w),
							'height':(tbh+h0h)
						});
					}
					TWtid.fix_cols_adjust($table)
							.fix_rows_adjust($table);
				});
			}
		}
		return true;
	},

	replaced_ta : null,
	original_text : null,
	replace_editor : function (title, wt) {
		if ( config.options.chkTWtidEnabled
				&& config.options.chkTWtedEnabled ) {
			var $ta = jQuery(
							story.getTiddlerField(
								title
								,config.options.txtEditorFocus||"text"
							)
						);
			var $div = jQuery('<div></div>');
			$div.addClass('viewer').css({
				'border':'1px solid black'
				,'width':$ta.width()
			}).attr('tiddler',title).dblclick(function(){
				if ( ! TWted.$cur_elem ) {
					var $div = jQuery(this),
						title = $div.attr('tiddler'),
						text = store.getTiddlerText(title);
					TWted.edit_element($div,text);
					//TWted.replaced_ta.val(text);
					//$viewer.replaceWith(TWted.replaced_ta);
					//TWted.replaced_ta = null;
					return false;
				}
			});
			if ( ! wt )
				wt = {
							'$wrapper':$div
							,'tiddler':TWtid.get_tiddler(title)
							,'title':title
					};
			else {
				wt.$wrapper = $div;
			}
			$ta.replaceWith($div);
			TWted.replaced_ta = $ta;
			wt.tiddler.text = $ta.val();
			TWtid.refresh_wrapper(wt,true);
		}
	},

	pre_edit_handler : null,
	edit_handler : function(ev,src,title) {
		TWted.focusout();
		TWted.pre_edit_handler.apply(this,arguments);
		if ( ! config.options.chkTWtedInViewMode ) {
			TWted.replace_editor(title);
			TWted.original_text = TWted.replaced_ta.val();
		}
		return false;
	},

	pre_close_handler : null,
	close_handler : function () {
		TWted.replaced_ta = TWted.original_text = null;
		TWtid.focus();
		return TWted.pre_close_handler.apply(this,arguments);
	},
	pre_save_handler : null,
	save_handler : function () {
		TWted.focusout();
		TWted.replaced_ta = TWted.original_text = null;
		return TWted.pre_save_handler.apply(this,arguments);
	},
	pre_cancel_handler : null,
	cancel_handler : function (ev,src,title) {
		if(store.isDirty() && !readOnly) {
			if(!confirm(this.warning.format([title])))
				return false;
		}
		if ( TWted.original_text )
			TWtid.get_tiddler(title).text=TWted.original_text;
		TWted.replaced_ta = TWted.original_text = null;
		return TWted.pre_cancel_handler.apply(this,arguments);
	},
	pre_saveChanges : null,
	saveChanges : function () {
		TWted.pre_saveChanges.apply(this,arguments);
		if ( config.macros.upload ) {
			config.macros.upload.action();
		}
		TWted.replaced_ta = TWted.original_text = null;
	},

	pre_closeAllTiddlers : null,
	closeAllTiddlers : function () {
		TWted.pre_closeAllTiddlers.apply(this,arguments);
		TWtid.focus();
	},

	pre_refreshTiddler : null,
	refreshTiddler : function (title,template,force,
							customFields,defaultText) {
		var elem = TWted.pre_refreshTiddler.apply(this,arguments);
		if ( elem && config.options.chkTWtidEnabled
				&& config.options.chkTWtedEnabled ) {
			// Because FireFox jumps out of the element if text
			// selection is finished with mouse released over another,
			// the click event is not a good place to determine
			// which element to edit. Instead, this plugin compares the
			// element in mousedown and mouseup, and goes to edit function
			// only if they are the same one.

			// The unbind calls are necessary to prevent multiple
			// invocation upon single event due to multiply bound handler.
			jQuery(document)
				.unbind('mousedown', TWted.mousedown)
				.bind('mousedown', TWted.mousedown)
				.unbind('mouseup', TWted.mouseup)
				.bind('mouseup', TWted.mouseup);
		}
		return elem;
	},

	sortable_grid_html : function ( txt ) {
		return '<a href="#" class="sortheader" onclick="config.macros.sortableGridPlugin.ts_resortTable(this);return false;">'
			+ txt
			+ '<span class="sortarrow">&nbsp;&nbsp;&nbsp;</span></a>';
	}
};
//}}}
