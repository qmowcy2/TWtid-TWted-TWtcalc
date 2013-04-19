/***
!! Note
* @@color:red;This is a development snapshot which may or may not function properly.@@

|editable|k
|''Name:''|TWtcalc|
|''Description:''|A simple calculator for TiddlyWiki|
|''Author:''|Vincent Yeh (qmo.wcy2@gmail.com)|
|''Source:''|* (minimized) http://twtable.tiddlyspace.com/#TWtcalc.min <br>* (regular) http://twtable.tiddlyspace.com/#TWtcalc |
|''Type:''|plugin|
|''Version:''|0.8.1|
|''Status:''|This plugin is still under development.<br>You are welcome to try and send feedback. :-)|
|''Date:''|2012/10/19 released 0.7.0<br>2012/09/04 started from TableCalculator 0.6.14|
|''License:''|Same as TiddlyWiki|
|''Core Version:''|2.6.5|
|''Needs to have:''|TWtid must be installed as well|

!!Features
* Calculate numeric values in table cells.
* Cell references follow the OpenOffice.calc/Excel syntax.
** Column index starts from {{{A}}} and ends at {{{ZZ}}}.
** Row index starts from 0 and has virtually no upper limit.
* ''Auto adjustment of cell references upon''
** __insertion/deletion of rows/columns__;
** __sorting with SortableGridPlugin or TableSortingPlugin__.
*** Block references such as {{{C4:H10}}} are auto-adjusted only upon insertion/deletion of rows/columns, NOT upon sorting.
* Support several forms of decimal mark and thousands separation.
* Support user-defined functions written in Javascript.
** To define your own functions, see [[TableCalculator--Example--Defining your own functions]] or [[External link of that tiddler|http://twtable.tiddlyspace.com/#%5B%5BTableCalculator--Example--Defining%20your%20own%20functions%5D%5D]] for details.
** Several pre-defined functions are listed in section {{{Usage}}} below.

!!Usage
* Add class {{{spreadsheet}}} or check option {{{chkTWtcalcAllTables}}} to allow calculations in table content.
* At the cell to store calculation results, starts with an equal sign {{{=}}}, as in OpenOffice.calc or Excel, followed by cell references/Javascript expressions/user-defined functions for calculation. For example,
*** {{{=Math.sqrt(3)}}} and {{{=Math.cos(Math.PI)}}} are valid Javascript statements;
*** {{{=A3+B4}}} and {{{=sum(A6:D10)}}} are OpenOffice.calc/Excel-like expressions.
*** See below for a brief list of user-defined functions.
* @@color:blue;Cells for calculation can be specified in one of the following formats:@@
** {{{func(A3:H6)}}}: calculate over a block of consecutive cells
** {{{func(B3, H5, AC9,...)}}}: calculate over separated individual cells
** {{{func(AA3:CD5, B5, Z7...)}}}: a mixture of the two cases
* Use the following options to specify the decimal mark and thousands separation.
** Option txtTWtcalcDecimalMark specifies the default decimal mark.
** Option txtTWtcalcThousandSeparator specifies the default thousands separator.
** Option chkTWtcalcThousandSeparated toggles application of thousands separation.
* Pre-defined functions now include:
** sum
*** calculates the sum of cells
** product
*** calculates the prodcut of cells
** average/mean
*** calculates the average value of cells
** count
*** counts the number of numeric cells
*** supports conditional counting, see revision
**** Syntax: {{{=COUNT([condition], cell references)}}}
***** condition is optional and if given must be quoted with single or double quotes
***** use the percentage symbol {{{%}}} as a placeholder for the values to test
**** Example, {{{=COUNT('%>60 && %<70', A1:A90)}}} returns the number of numerical values greater than 60 and less than 70 among cells between A1 and A90, inclusively.
** counta
*** counts the number of non-empty cells
** concat
*** joins the contents of cells
** isnumeric
*** tests whether a cell contains a numerical expression
** stderr/stdev
*** calculates the standard deviation of a set of numbers
** today()/now()
*** Current date and time. See Javascript for references.
** days(date1, date2, num_dec)
*** Number of days from date1 to date2. The 3rd argement num_dec specifies the number of digits after decimal point.
** round(value, num_dec)
*** Returns the rounded result of value, up to num_dec digits after decimal point.
** random(factor)
*** Returns a random number between 0 and factor, if factor is given. Otherwise returns a random number between 0 and 1.
** column/col
*** Returns the column index (number). Without an argument this function returns the index of the current column, with a cell reference as its argument, such as COLUMN(AX3)/COL(AX3), it returns the column index of the cell.
** columna/cola
*** Returns the column reference (letter). Without an argument this function returns the reference of the current column, with a cell reference as its argument, such as COLUMN(AX3)/COL(AX3), it returns the column reference of the cell.
** stderr/stdev
*** Calculates the standard deviation of a set of numbers. @@color:red;This function is not yet fully tested.@@
** if(condition, statement_if_true, statement_if_false)
*** Works the same way as the IF() function in MS Excel, except that the statements can include wiki style text.
**** For example, IF ($G1>=F1, color:blue;$~G1-F1, color:red;$~G1-F1) results in a @@color:blue;positive@@ or a @@color:red;negative@@ value of {{{|$G1-F1|}}}.

!!Options
Click the {{{C}}} button for related options.

!!Example
''See [[TWtcalc.example]] tiddler or [[its external link|http://twtable.tiddlyspace.com/#TWtcalc.example]] for example(s).''

!!ToDo

!!Revision history
* 2013/04/15 [0.8.1]
** Bug fixes for options panel.
* 2013/04/14 [0.8.0]
** Auto-adjusts cell references upon pasting rows/columns.
*** When a row/column is pasted as a whole, all formulas in the cells of the pasted row/column are adjusted accordingly.
** Auto-adjusts cell references upon cut-and-pasting a single cell.
*** When a single cell is cut and pasted into another, not only its formula gets adjusted, but also others referring to the cut cell get adjusted accordingly.
** Options tiddler now available in the system Options panel.
** Supports calculations in preview.
** Bug fixes for auto-adjustment in cell references upon copy-and-pasting a single cell.
** Bug fixes for auto-recalculation.
* 2013/02/09 [0.7.7]
** Added a very primitive expression checker to check simple arithmeric expressions.
** Added option chkTWtcalcEnabled to enable/disable TWtcalc. Default to true.
** Changed default behavior of calculation from all tables to only tables with class {{{spreadsheet}}}.
** Added option chkTWtcalcAllTables to allow calculations on all tables, regardless of their classnames. Default to false.
** Bug fixes on handling numeric expressions. Thanks to Ton for showing the bug.
* 2012/11/23 [0.7.6]
** Bug fixes for working with {{{TableSortingPlugin}}} and {{{SortableGridPlug}}}.
** Bug fixes for cell title with TWtcalc defined functions.
** Some bug fixes for mixing consecutive and individual cells in a TWtcalc defined function's arguments.
* 2012/11/17 [0.7.5]
** Bug fixes for expressions with CSS style text.
* 2012/11/09 [0.7.4]
** Tests validity of tiddlers before some actions.
* 2012/11/02 [0.7.3]
** Defined {{{ROWS()}}} and {{{COLS()/COLUMNS()}}} functions, which counts the number of rows/columns within a range of cells.
** Bugs fixed for {{{COLUMN()/COL()}}} and {{{COLUMNA()/COLA()}}} functions.
*** These bugs were introduced in codes supporting absolute references.
** Bug fixed with {{{ROUND()}}} function.
*** It was returning {{{NaN}}} when the argument results in 0. 
* 2012/10/26 [0.7.2]
** Defined {{{IF()}}} and modified {{{COUNT()}}} functions, see http://twtable.tiddlyspace.com/#TWtcalc--Example--IF_and_COUNT for example.
*** The {{{IF()}}} function works the same way as the {{{IF()}}} function in MS Excel, except that CSS style statements can be included.
**** Syntax: {{{IF(condition, statement_if_true, statement_if_false)}}}
**** Example: IF ($G1>=F1, color:blue;$G1-F1, color:red;$G1-F1) results in a @@color:blue;positive@@ or a @@color:red;negative@@ value of {{{|$G1-F1|}}}.
*** The {{{COUNT()}}} function now supports conditional counting. (Note the syntax is not compatible with Excell's countif() function.)
**** Syntax: {{{=COUNT([condition], cell references)}}}
***** condition is optional and if given must be quoted with single or double quotes
***** use the percentage symbol {{{%}}} as a placeholder for the values to test
**** Example, {{{=COUNT('%>60 && %<70', A1:A90)}}} returns the number of numerical values greater than 60 and less than 70 among cells between A1 and A90, inclusively.
** Bug fix for numeric calculations including empty cells
*** Previously an error was generated if empty cells are included in numeric calculations. Now those cells are ignored so no more errors in such cases.
** Bug fixes with copy-and-pasting
*** The auto-adjustment of cell references upon copy-and-pasting was broken, possibly due to the code restructuring, and is now fixed.
* 2012/10/21 [0.7.1]
** Minor modifications to the prepare_table() function.
* 2012/10/19 [0.7.0]
** Separated from TableCalculator.
** Restructured to better fit the separated code structure.
** Bug fixes for absolute reference support.
* 2012/09/03 [1.3.0]
** Started separating codes from TableCalculator 0.6.14.
* For earlier history please see [[TableCalculator]] or [[its external link|http://twtable.tiddlyspace.com/#TableCalculator]].

!!Code
***/
// //Macro definitions
//{{{
version.extensions.TWtcalc= {major: 0, minor: 8, revision: 1, date: new Date('2013/04/19')};

// Macro for initialization
config.macros.TWtcalc = {
  init : function () {
		if (config.options.chkTWtcalcEnabled===undefined)
			config.options.chkTWtcalcEnabled = true;
		if (config.options.chkTWtcalcAllTables===undefined)
			config.options.chkTWtcalcAllTables = false;
		if (config.options.chkTWtcalcThousandSeparated===undefined)
			config.options.chkTWtcalcThousandSeparated =
				(config.options.chkTCalcThousandSeparated===undefined?false:
				config.options.chkTCalcThousandSeparated);
		if (config.options.txtTWtcalcThousandSeparator===undefined)
			config.options.txtTWtcalcThousandSeparator =
				(config.options.txtTCalcThousandSeparator===undefined?',':
				config.options.txtTCalcThousandSeparator);
		if (config.options.txtTWtcalcDecimalMark===undefined)
			config.options.txtTWtcalcDecimalMark =
				(config.options.txtTCalcDecimalMark===undefined?'.':
				config.options.txtTCalcDecimalMark);
		if (config.options.chkTWtcalcDebugMode===undefined)
			config.options.chkTWtcalcDebugMode =
				(config.options.chkTCalcDebugMode===undefined?false:
				config.options.chkTCalcDebugMode);

		merge ( config.optionsDesc, {
			chkTWtcalcEnabled:'Enable TWtcalc',
			chkTWtcalcAllTables:'Calculate all tables. Otherwise only calculate tables with class "spreadsheet"',
			chkTWtcalcThousandSeparated:'Apply thousands separation on numerical results. Default is false.',
			txtTWtcalcThousandSeparator:'Thousand separator. Default is comma (,).',
			txtTWtcalcDecimalMark:'Decimal mark. Default is period (.).',
			chkTWtcalcDebugMode:'Enter debug mode to show error/exception messages. Default is false.'
		});

		TWtid.col_ref = TWtcalc.col_ref;

		TWtcalc.pre_OfficialExample = TWtid.OfficialExample;
		TWtid.OfficialExample = TWtcalc.OfficialExample;

		TWtcalc.pre_prepare_table = TWtid.prepare_table;
		TWtid.prepare_table = TWtcalc.prepare_table;

		TWtcalc.pre_start_sorting = TWtid.start_sorting;
		TWtid.start_sorting = TWtcalc.start_sorting;
		TWtcalc.pre_table_changed = TWtid.table_changed;
		TWtid.table_changed = TWtcalc.table_changed;

		TWtcalc.pre_paste_in = TWted.paste_in;
		TWted.paste_in = TWtcalc.paste_in;
		TWtcalc.pre_copy_and_cut = TWted.copy_and_cut;
		TWted.copy_and_cut = TWtcalc.copy_and_cut;
		TWtcalc.pre_detach_contents = TWted.detach_contents;
		TWted.detach_contents = TWtcalc.detach_contents;
		TWtcalc.pre_wikify_elem = TWted.wikify_elem;
		TWted.wikify_elem = TWtcalc.wikify_elem;

		var txt = config.shadowTiddlers['OptionsPanel'];
		var p = txt.indexOf('TWtidOptions');
		if ( p >= 0 ) {
			config.shadowTiddlers['OptionsPanel']=
				txt.substring(0,p)
				+'TWtcalcOptions\n'
				+txt.substring(p);
		} else {
			p = txt.indexOf('----');
			config.shadowTiddlers['OptionsPanel']=
				txt.substring(0,p)
				+'----\n'
				+'TWtcalcOptions\n'
				+txt.substring(p);
		}

		merge(config.shadowTiddlers,{
			'TWtcalcOptions':'<<TWtcalcOptions>>'
		});
	}
};

// Macro for option settings.
config.macros.TWtcalcOptions = {
	order : {
		chkTWtcalcEnabled:0,
		chkTWtcalcAllTables:1,
		chkTWtcalcThousandSeparated:2,
		txtTWtcalcThousandSeparator:3,
		txtTWtcalcDecimalMark:4,
		chkTWtcalcDebugMode:5
	},

	handler : function(place,macroName,params,wikifier,paramString) {
		// Collect all the TWtid options for users to play with.
		config.macros.TWtidOptions.show_options_table(
			place
			,'TWtcalc Options'
			,'TWtcalc'
			,this.order
		);
	}
};
//}}}

// //TWtcalc
//{{{
TWtcalc = {
	cur_table : null,

	col_ref : function ( col ) {
		return TWtcalc.index_to_reference_col( col );
	},

	pre_start_sorting : null,
	start_sorting : function() {
		return (TWtcalc.block_update =
			TWtcalc.pre_start_sorting.apply(this,arguments));
	},

	pre_table_changed : null,
	table_changed : function (what, param, wt) {
		TWtcalc.pre_table_changed.apply(this,arguments);
		switch ( what ) {
			case 'MODIFIED' :
				TWtcalc.re_calculate_table
					(param.table,param.text,param.first,param.last,wt);
				break;
			case 'ROW INSERTED' :
				TWtcalc.inc_cell_reference
					(param.text, param.first, param.last, param.where, 1);
				break;
			case 'ROW DELETED' :
				TWtcalc.inc_cell_reference
					(param.text, param.first, param.last, param.where+1, -1);
				break;
			case 'ROW PASTED' :
				TWtcalc.inc_cell_reference
					(param.text, param.to, param.to, 0
						, (param.to-param.from));
				break;
			case 'COL INSERTED' :
				TWtcalc.inc_cell_reference
					(param.text, param.first, param.last,
						null, null, 0, -1, param.where, 1);
				break;
			case 'COL DELETED' :
				TWtcalc.inc_cell_reference
					(param.text, param.first, param.last,
						null, null, 0, -1, param.where+1, -1);
				break;
			case 'COL PASTED' :
				TWtcalc.inc_cell_reference
					(param.text, param.first, param.last, null, null
						, param.to, param.to, 0
						, (param.to-param.from));
				break;
			case 'ROW MOVED' :
				TWtcalc.update_cell_reference
					( param.text, param.first, param.last,
						param.from, null, param.to, null );
				break;
			case 'SORTED' :
				TWtcalc.end_block_update
					( param.text, param.first, param.last );
				TWtcalc.re_calculate_table
					(param.table,param.text,param.first,param.last,wt);
				break;
		}
	},

	//Reference adjustment and related functions.
	block_update : false,
	end_block_update : function ( text, r0, rl ) {
		this.block_update = false;
		// Unpack the updated cell references.
		// All the block-updated cell references were packed into the
		// format {A.3} to prevent multiple modification, so we need
		// to unpack them for further use.

		var r, c, row_changed, cells, ref, i, pl, pr, pdot;
		for ( r = r0; r <= rl; r++ ) {
			if (/[kKcChHfF]$/.test(text[r])) continue;
			cells = TWtid.split_table_row(text[r]);
			row_changed = false;
			for ( c = 1; c < cells.length-1; c++ ) {
				if ( !(ref=cells[c].match(/\{[\$A-Za-z]+\.[\$0-9]+\}/g)) )
					continue;
				for ( i = 0; i < ref.length; i++ ) {
					pl = cells[c].indexOf(ref[i]);
					pdot = cells[c].indexOf('.', pl+1);
					pr = cells[c].indexOf('}', pl+1);
					cells[c] = cells[c].substring(0,pl) +
								cells[c].substring(pl+1,pdot) +
								cells[c].substring(pdot+1,pr) +
								cells[c].substring(pr+1);
					row_changed = true;
				}
			}
			if ( row_changed )
				text[r] = TWtid.make_table_row ( cells );
		}
		return text;
	},

	update_cell_reference : function ( text, r0, rl,
			row_cur, col_cur, row_new, col_new ) {
		// Update cell reference from (row_cur, col_cur) to
		// (row_new, col_new). This function is called after
		// sorting is performed.
		var r, c, chndx, ref;
		for ( r = r0; r <= rl; r++ ) {
			if (/[kKcChHfF]$/.test(text[r])) continue;
			var cells = TWtid.split_table_row(text[r]),
				row_changed=false, ref_changed=false;
			for ( c = 1; c < cells.length-1; c++ ) {
				chndx = this.index_of_expression(cells[c]);
				if (chndx == -1) continue;
				chndx++;
				while ( chndx < cells[c].length ) {
					ref_changed=false;
					if( (ref=this.cell_reference(cells[c],chndx)) ) {
						if ( cells[c].charAt(chndx+ref.length)==':' ) {
							// The cell reference is immediately followed by
							// a colon, meaning its a block reference.
							// Skip it for now.
							chndx += ref.length + 1;
							ref = this.cell_reference(cells[c],chndx);
							chndx += ref.length;
						} else {
							var row = this.reference_to_index_row(ref),
								col = this.reference_to_index_col(ref),
								abs_row = this.absolute_row(ref),
								abs_col = this.absolute_col(ref);
							// Currently absolute references are not
							// changed in any case, but this may not
							// be the best choice...
							if ( row == row_cur ) {
								if ( !abs_row ) {
									row = row_new;
									ref_changed = true;
								}
							}
							if ( col == col_cur ) {
								if ( !abs_col) {
									col = col_new;
									ref_changed = true;
								}
							}
							if ( ref_changed ) {
								var newref;
								if ( this.block_update )
									newref='{'+this.index_to_reference_col
											(col,abs_col)+'.'+row+'}';
								else
									newref=this.index_to_reference_col
											(col,abs_col)+row;
								cells[c] = cells[c].substring(0,chndx) +
										newref +
										cells[c].substring(chndx+ref.length);
								ref = newref; row_changed = true;
							}
							chndx += ref.length;
						}
					}
					else chndx++;
				}
			}
			if ( row_changed ) {
				text[r] = TWtid.make_table_row ( cells );
			}
		}
		return text;
	},

	inc_cell_reference : function ( text,r0,rl,row,dr,c0,cl,col,dc ) {
		// Increase cell reference by dr and dc for
		// row_ndx >= row and col_ndx >= col. This function is Used
		// in cases of row/column insertion/deletion.
		var r, c, chndx, ref;
		if ( !row ) row = 0; if ( !dr ) dr = 0;
		if ( !c0 ) c0 = 0; if ( !col ) col = 0; if ( !dc) dc = 0;
		for ( r = r0; r <= rl; r++ ) {
			if (/[kKcChHfF]$/.test(text[r])) continue;
			var cells = TWtid.split_table_row(text[r]),
				row_changed=false;
			if ( typeof cl != 'number' || cl < 0 ) {
				cl = cells.length-3;
			}
			for ( c = c0; c <= cl; c++ ) {
				chndx = this.index_of_expression(cells[c+1]);
				if (chndx == -1) continue;
				chndx++;
				while ( chndx < cells[c+1].length )
					if((ref=this.cell_reference(cells[c+1],chndx))) {
						var row_org = this.reference_to_index_row(ref),
							col_org = this.reference_to_index_col(ref),
							abs_row = this.absolute_row(ref),
							abs_col = this.absolute_col(ref);
						if ( row_org >= row && col_org >= col ) {
							var newref =
								this.index_to_reference_col
									(col_org+(abs_col?0:dc), abs_col)+
										(abs_row?('$'+row_org):(row_org+dr));
							cells[c+1] = cells[c+1].substring(0,chndx) +
									newref +
									cells[c+1].substring(chndx+ref.length);
//displayMessage(ref+' -> '+newref);
							ref = newref;
							row_changed = true;
						}
						chndx += ref.length;
					}
					else chndx++;
			}
			if ( row_changed )
				text[r] = TWtid.make_table_row ( cells );
		}
		return text;
	},

	copied_from : null,
	cut_from : null,
	pre_copy_and_cut : null,
	copy_and_cut : function (ev, $elem, cut) {
		TWtcalc.copied_from = $elem;
		TWtcalc.cut_from = cut ? $elem : null;
		TWtcalc.pre_copy_and_cut.apply(this,arguments);
	},
	pre_paste_in : null,
	paste_in : function (ev,$ta,$cell) {
		TWtcalc.pre_paste_in.apply(this,arguments);
		// Auto adjustment of cell reference upon copy-and-pasting
		// within the same table.
		var $from_cell = TWtcalc.copied_from;
		if ( $from_cell ) {
			// Something pasted from another cell in the same table.
			var title_from = $from_cell[0].title.split('\n');
			var r_from = TWtcalc.reference_to_index_row(title_from[0]);
			var c_from = TWtcalc.reference_to_index_col(title_from[0]);
//displayMessage('from ('+r_from+','+c_from+')'+title_from);
			var title_to = $cell[0].title.split('\n');
			var r_to = TWtcalc.reference_to_index_row(title_to[0]);
			var c_to = TWtcalc.reference_to_index_col(title_to[0]);
//displayMessage('to ('+r_to+','+c_to+')'+title_to);
			if ( title_from.length > 1 ) {
				// The source cell contains an expression for calculations.
				// Obtain the paste-in text and adjust cell reference
				// if any.
				var txt = $ta.val(), chndx=0, ref, newref,
					r, c, abs_r, abs_c;
				while ( chndx < txt.length ) {
					if ( (ref=TWtcalc.cell_reference(txt,chndx)) ) {
						r = TWtcalc.reference_to_index_row(ref);
						abs_r = TWtcalc.absolute_row(ref);
						c = TWtcalc.reference_to_index_col(ref);
						abs_c = TWtcalc.absolute_col(ref);
						if (!abs_r) r = r_to + (r-r_from);
						if (!abs_c) c = c_to + (c-c_from);
						newref = c>=0 ?
							TWtcalc.index_to_reference_col(c,abs_c):
							'{'+c+'}';
						newref += r>=0 ? ((abs_r?'$':'')+r) : '{'+r+'}';
						txt=txt.substring(0,chndx)+
								newref+
								txt.substring(chndx+ref.length);
						chndx += newref.length;
					} else chndx++;
				}
				$ta.val(txt);
			} else {
				// The source cell contains regular wikitext.
				TWtcalc.copied_from = null;
			}

			if ( TWtcalc.cut_from ) {
				// The last cell was being cut to this one.
				var $table=$cell.closest('table');
				var wt=TWtid.wrapper_tiddler($table);
				var ndx=TWtid.element_index($table,wt);
//displayMessage('table=('+ndx.rIndex+','+ndx.dIndex+') in '+wt.title);
				var text = wt.tiddler.text.split('\n');
				var r0 = TWtid.table_first_line(text,ndx,wt.title);
				var rl = TWtid.table_last_line(text,r0);
//displayMessage('from ('+r_from+','+c_from+' to ('+r_to+','+c_to+')');
				text = TWtcalc.update_cell_reference(
							text, r0, rl, r_from, c_from, r_to, c_to
						);
				TWtid.save_text(wt.tiddler,text);
				TWtcalc.re_calculate_table($table,text,r0,rl,wt);
			}
			TWted.preview_editbox($ta);
		}
	},

	pre_wikify_elem : null,
	wikify_elem : function($elem) {
		TWtcalc.pre_wikify_elem.apply(this,arguments);
		if ( TWtid.is_wrapper($elem) )
			$elem.find('table').each(function(n,table){
				TWtcalc.calculate_table(jQuery(table));
			});
	},

	re_calculate_table : function ($table,text,r0,rl,wt) {
		if ( ! config.options.chkTWtcalcEnabled
				|| ! (config.options.chkTWtcalcAllTables
						|| TWtid.hasClass($table,'spreadsheet',wt)) )
			return false;
		var rndx = r0, rowtxt, cndx, peq;
		this.cur_table = $table;
		$table.find('tr').each ( function ( r, tr ) {
			while ( /[kKcC]$/.test(text[rndx]) ) rndx++;
			rowtxt = TWtid.split_table_row ( text[rndx++] );
			jQuery(tr).find('th,td').each ( function ( c, cell ) {
				if((cndx=TWtid.cell_index_in_line(rowtxt,c))>-1)
					if(rowtxt[cndx] &&
							(peq=TWtcalc.index_of_expression
								(rowtxt[cndx]))>-1)
						TWtcalc.calculate_cell(
							jQuery(cell),r,c,true,rowtxt[cndx],peq);
			} );
		} );
		TWtcalc.cur_table = null;
		return true;
	},
//}}}

// //Misc. Functions
//{{{
	replace_decimal_mark : function ( txt, oldmark, newmark ) {
		var p = txt.indexOf(oldmark);
		return p == -1 ? txt :
			txt.substring(0,p)+newmark+txt.substring(p+1);
	},

	isnumeric : function ( txt, update, given_mark, to_sep ) {
		// See [[Testing a numeric expression -- isnumeric -- The Crazy Version!]]
		// or [[its external link|http://twtable.tiddlyspace.com/#%5B%5BTesting%20a%20numeric%20expression%20--%20isnumeric%20--%20The%20Crazy%20Version!%5D%5D]]
		// for details.
		var ndig = 0, ncomma = 0, nperiod = 0,
			npm = 0, nspace = 0, ndot = 0, i, ch;
		for ( i = 0; i < txt.length; i++ )
			if ( /[^0-9]/.test((ch=txt.charAt(i))) )
				switch ( ch ) {
					case '+' :
					case '-' :
						if ( i > 0 ) return '';
						if ( ++npm > 1 ) return '';
						break;
					case '.' :
						if ( ++nperiod > 1 && ncomma > 1)
							return '';
						break;
					case ',' :
						if ( ++ncomma > 1 && nperiod > 1)
							return '';
						break;
					case ' ' :
						if ( ++nspace > 1 &&
							(ndot>1 || nperiod>1 || ncomma>1) )
							return '';
						break;
					case 'Â·' :
						if ( ++ndot > 1 &&
							(nspace>1 || nperiod>1 || ncomma>1) )
							return '';
						break;
					default :
						return '';
				}
			else ndig++;
		if ( ndig == 0 ) return '';
		if ( !update && (ncomma == 0 && nperiod == 0 &&
			nspace == 0 && ndot == 0) )
			return txt;

		var mark = '.', separator = ',',
			nmark = nperiod, nsep = ncomma;

		if ( nperiod > 1 ) {
			separator = '.'; mark = ',';
			nsep = nperiod; nmark = ncomma;
		} else if ( nspace > 0 ) {
			if ( (nperiod > 0 && ncomma > 0) ||
				(nperiod > 1 || ncomma > 1) ) return '';
			separator = ' '; nsep = nspace;
			if ( ncomma > 0 ) {
				mark = ','; nmark = ncomma;
			} else {
				mark = '.'; nmark = nperiod;
			}
		} else if ( ndot > 0 ) {
			if ( nperiod > 0 || ncomma > 1 ) return '';
			separator = 'Â·'; mark = ',';
			nsep = ndot; nmark = ncomma;
		} else if ( ncomma == 1 && nperiod == 0 ) {
			i = txt.indexOf(',');
			if ( i==0 || txt.length-i!=4 ) {
				separator = '.'; mark = ',';
				nsep = nperiod; nmark = ncomma;
			} else if ( txt.length-i < 4 )
				return '';
		} else if ( nperiod == 1 && ncomma == 1 ) {
			i = txt.indexOf(',') - txt.indexOf('.');
			if ( i == 4 ) {
				separator = '.'; mark = ',';
				nsep = nperiod; nmark = ncomma;
			} else if ( i != -4 )
				return '';
		}

		if ( nsep > 0 && ! config.options.chkTWtcalcThousandSeparated )
			return '';

		if ( nsep > 1 ) {
			var p1 = txt.indexOf(separator), p2;
			while( (p2=txt.indexOf(separator,p1+1))>-1 ) {
				if ( p2 - p1 != 4 ) return '';
				p1 = p2;
			}
		}

		if ( (nmark>0 && mark!=config.options.txtTWtcalcDecimalMark)
			|| (nsep>0 &&
				separator!=config.options.txtTWtcalcThousandSeparator) )
			return '';

		var opt_mark = given_mark ? given_mark :
				config.options.txtTWtcalcDecimalMark;
		if ( nsep == 0 ) {
			if ( opt_mark != mark )
				txt = this.replace_decimal_mark(txt, mark, opt_mark);
			return to_sep ? this.separate_number(txt) : txt;
		}

		var opt_separator = to_sep ?
				config.options.txtTWtcalcThousandSeparator : '';
		if ( (mark!=opt_mark) || (separator!=opt_separator) ) {
			for ( i = 0; i < txt.length; i++ ) {
				ch = txt.charAt(i);
				if ( ch == separator ) {
					if(separator!=opt_separator)
						txt=txt.substring(0,i)+
							opt_separator+txt.substring(i+1);
				}
				else if( ch == mark ) {
					if(mark!=opt_mark)
						txt=txt.substring(0,i)+
							opt_mark+txt.substring(i+1);
				}
			}
		}
		return txt;
	},

	unseparate_number : function ( txt ) {
		var txt2 = txt.split(config.options.txtTWtcalcThousandSeparator),
			txt3 = '', i;
		for ( i = 0; i < txt2.length; i++ )
			txt3 += txt2[i];
		return txt3;
	},

	// //The following function was obtained from
	// //http://www.mredkj.com/javascript/numberFormat.html
	separate_number : function (nStr) {
		nStr += '';
		x = nStr.split(config.options.txtTWtcalcDecimalMark);
		x1 = x[0];
		x2 = x.length > 1 ?
			config.options.txtTWtcalcDecimalMark + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' +
				config.options.txtTWtcalcThousandSeparator + '$2');
		}
		return x1 + x2;
	},

	absolute_row : function (ref) {
		var p = ref.indexOf('$',1);
		return (p > 0 && p < 4);
	},
	reference_to_index_row : function ( ref ) {
		var p = ref.indexOf('$',1);
		if ( p > 0 && p < 4 )
			// Absolute row reference
			return parseInt(ref.substring(p+1));

		p = /^[\$]/.test(ref) ? 1 : 0;
		// Relative row reference
		if ( /[a-zA-Z]/.test(ref.charAt(p+1)) )
			return parseInt(ref.substring(p+2));
		else
			return parseInt(ref.substring(p+1));
	},
	absolute_col : function (ref) {
		return /^[\$]/.test(ref);
	},
	reference_to_index_col : function ( ref ) {
		var p = ref.indexOf('$');
		if ( p == 0 ) p++; // Absolute col reference
		else p = 0; // Relative col reference
		var a = 'A'.charCodeAt();
		ref = ref.toUpperCase();
		if ( /[A-Z]/.test(ref.charAt(p+1)) ) {
			var c1 = ref.charAt(p).charCodeAt()-a+1,
				c2 = ref.charAt(p+1).charCodeAt()-a;
			return c1*26 + c2;
		} else {
			return ref.charAt(p).charCodeAt()-a;
		}
	},
	index_to_reference_col : function ( c, abs_col ) {
		var a = 'A'.charCodeAt(),
			pre = (abs_col ? '$' : '');
		if ( c < 26 )
			return pre+String.fromCharCode(c+a);
		else {
			var c1 = c/26-1, c2 = c%26;
			return pre+String.fromCharCode(c1+a)+
						String.fromCharCode(c2+a);
		}
	},
//}}}

// //TWtcalc defined function handlers.
//{{{
	index_of_expression : function ( text ) {
		var peq = text.indexOf('=');
		if ( peq == 0 || peq == -1 ) return peq;
		var start = TWtid.skip_style_text(text);
		while ( /[\s]/.test(text.charAt(start)) ) start++;
		if ( peq == start ) return peq;
		return -1;
	},

	fn_ndx : -1,
	isfunction : function ( txt, start ) {
		// Returns the function string fn(arg) if any.
		this.fn_ndx = -1; if ( !start ) start = 0;
		var txt2 = txt.substring(start).toUpperCase(), pfn, pparenl,
			fn_name='', i, j;
		for ( i = 0; i < this.fn.length; i++ ) {
			if ( typeof this.fn[i].name == 'string' ) {
				if ( txt2.startsWith(this.fn[i].name) ) {
					fn_name = this.fn[i].name;
				}
			} else for ( j = 0; j < this.fn[i].name.length; j++ )
				if ( txt2.startsWith(this.fn[i].name[j]) ) {
					fn_name = this.fn[i].name[j]; break;
				}
			if ( fn_name ) {
				pfn = txt2.indexOf(fn_name)+start;
				pparenl = txt.indexOf('(',pfn+1);
				if ( pparenl == -1 ) return '';

				this.fn_ndx = i;
				var pparenr = txt.indexOf(')',pparenl+1);
				if (pparenr == -1)
					return this.is_userfunction(txt,pfn);
				while (pparenl > -1) {
					pparenl = txt.indexOf('(',pparenl+1);
					if ( pparenl>-1 && pparenl<pparenr ) {
						// Inner parentheses. Look again.
						pparenl = pparenr;
						pparenr = txt.indexOf(')',pparenr+1);
						if (pparenr==-1)
							return this.is_userfunction(txt,pfn);
					}
				}
				return this.is_userfunction(txt,pfn,pparenr+1);
			}
		}
	},

	is_userfunction : function ( txt, start, end ) {
		if ( start==0 || txt.charAt(start-1)!='.' )
			return txt.substring(start,end);
		this.fn_ndx = -1;
	},

	parse_single_term : function (cell_exp, last_one, start) {
		var expression = '', tmp_exp = null;
		if (this.fn[this.fn_ndx].parse_single_term) {
			tmp_exp = this.fn[this.fn_ndx]
						.parse_single_term(cell_exp,start);
			if ( tmp_exp ) expression += tmp_exp;
		} else {
			expression += cell_exp;
		}
		if (!last_one && this.fn[this.fn_ndx].operator)
			expression += this.fn[this.fn_ndx].operator;
		return expression;
	},
	parse_consecutive : function ( txt ) {
		// calculate over consecutive cells
		// The argument txt should be something like cell1..cell2,
		// otherwise the behavior of this function is undefined.
		var expression = '', tmp_exp,
			txt2 = txt.split(':'),
			// Now txt2[0] is the beginning while txt2[1] is the
			// ending cell. Find the (row, col) indices of the
			// cells and evaluate the cells in between, inclusively.
			c1 = this.reference_to_index_col(txt2[0]),
			r1 = this.reference_to_index_row(txt2[0]),
			c2 = this.reference_to_index_col(txt2[1]),
			r2 = this.reference_to_index_row(txt2[1]),
			r, c, fn_ndx = this.fn_ndx, tmp_exp,
			$rows = this.cur_table.find('tr'), $cells, $tr, $cell;
		if ( r2 < r1 ) { r = r1; r1 = r2; r2 = r; }
		if ( c2 < c1 ) { c = c1; c1 = c2; c2 = c; }
		for ( r = r1; r <= r2; r++ ) {
			$tr = $rows.eq(r); if ($tr.size ()==0) continue;
			$cells = $tr.find('th,td');
			for ( c = c1; c <= c2; c++ ) {
				$cell = $cells.eq(c); if ($cell.size()==0) continue;
				tmp_exp = this.evaluate_cell($cell,
						!this.fn[this.fn_ndx].no_eval);
				this.fn_ndx = fn_ndx;
				expression += this.parse_single_term
					( tmp_exp, (r==r2 && c==c2) );
			}
		}
		if ( expression && this.fn[this.fn_ndx].operator )
			if (expression.charAt(expression.length-1)==
					this.fn[this.fn_ndx].operator) {
				expression =
					expression.substring(0,expression.length-1);
			}
		return expression;
	},
	parse_function : function ( txt ) {
		// Start parsing TWtcalc-defined functions.
		// Calculations are done in one of the following ways:
		//	1. over consecutive cells
		//		txt should look like func(cell1:cell2)
		//	2. over separated individual cells
		//		txt should look like func(cell1,cell2,cell3,...)
		//	3. mixing both cases
		//		txt can be like
		//		func(cell1:cell2,cell3,cell4,cell5:cell7...)
		// get rid of parentheses in txt
		var pparen_l = txt.indexOf('('),
			pparen_r = txt.lastIndexOf(')'),
			txt2 = txt.substring(pparen_l+1, pparen_r);

		var expression = '', tmp_exp;
		if ( this.fn[this.fn_ndx].start_parsing )
			if ((tmp_exp=this.fn[this.fn_ndx].start_parsing()))
				expression = tmp_exp;
		if ( !txt2 ) {
			// Functions without arguments.
			if ( this.fn[this.fn_ndx].stop_parsing )
				if((tmp_exp=this.fn[this.fn_ndx].stop_parsing()))
					expression += tmp_exp;
			return expression;
		}

		// Functions with arguments.
		var fn_ndx = this.fn_ndx, chndx = 0, fntxt, i;

		// If some of the arguments contain function calls,
		// evaluate them before further parsing.
		txt2 = TWtid.split_line_text(txt2,',',[
					 {'open' : '(', 'close' : ')'}
					,{'open' : '[', 'close' : ']'}
					,{'open' : '{', 'close' : '}'}
				]);
		for ( i = 0; i < txt2.length; i++ ) {
			var txt3 = txt2[i].trim();
			var p0 = TWtid.skip_style_text(txt3), fnval;
			chndx = p0;
			while ( chndx < txt3.length ) {
				if ( (fntxt=this.isfunction(txt3,chndx)) ) {
					fnval = this.parse_function(fntxt);
					txt3 = txt3.substring(0,chndx)
								+ fnval
								+ txt3.substring(chndx+fntxt.length);
					chndx += fnval.length;
				} else chndx++;
			}
			this.fn_ndx = fn_ndx;
			if ( (chndx=txt3.indexOf(':',p0)) > -1
				&& this.cell_reference(txt3,chndx+1) ) {
				expression += this.fn[this.fn_ndx].no_deref
									? this.parse_single_term
										(txt3,(i==txt2.length-1))
									: this.parse_consecutive(txt3);
				if ( i<txt2.length-1 &&
					this.fn[this.fn_ndx].operator )
					expression+=this.fn[this.fn_ndx].operator;
			} else {
				tmp_exp=this.evaluate(
					txt3
					, p0
					, !this.fn[this.fn_ndx].no_eval
					, this.fn[this.fn_ndx].no_deref
				);
				this.fn_ndx = fn_ndx;
				expression+=this.parse_single_term(
					(p0 ? txt3.substring(0,p0) : '')+tmp_exp
					, (i==txt2.length-1)
					, p0
				);
			}
		}
		if (this.fn[this.fn_ndx].stop_parsing)
			if ((tmp_exp=this.fn[this.fn_ndx].stop_parsing()))
				expression += tmp_exp;
		return expression;
	},

	cell_reference : function ( txt, start ) {
		// Returns the cell reference from txt at position start, or an
		// empty string if no cell reference is found at that position.
		var chndx=(start?start:0), ch, col = '', row = '';
		if ( chndx > -1 && chndx < txt.length-1 ) {
			if ( (ch=txt.charAt(chndx++)) == '$' ) {
				// Absolute column reference
				col = ch;
				ch = txt.charAt(chndx++);
			}
			if ( /[\a-zA-Z]/.test(ch) ) {
				col += ch;
				ch = txt.charAt(chndx++);
				if ( /[a-zA-Z]/.test(ch) ) {
					col += ch;
					ch = txt.charAt(chndx++);
				}
			}

			if ( col ) {
				// There is possible column reference,
				// check for row reference.
				if ( ch == '$' ) {
					// Absolute row reference
					row = ch;
					ch = txt.charAt(chndx++);
				}
				if (/[0-9]/.test(ch)) {
					row += ch;
					while (chndx<txt.length &&
						/[0-9]/.test((ch=txt.charAt(chndx++))))
						row += ch;
					return col+row;
				}
			}
		}
		return '';
	},
//}}}

// //Evaluation function
//{{{
	is_possible_exp : function (txt) {
		if ( !txt ) return false;
		//if ( /[^\x21-\x7e ]/g.test(txt) ) return false;
		var pl = txt.indexOf('(');
		if ( pl > -1 ) {
			var pr = txt.lastIndexOf(')');
			txt = txt.substring(pl+1,pr);
		}
		var term1 = txt.split(/[\*\/]/);
		for ( var i = 0; i < term1.length; i++ ) {
			if ( ! term1[i] ) return false;
			var term2 = term1[i].split(/[\+\-]/);
			for ( var j = 0; j < term2.length; j++ )
				if ( term2[j] && ! TWtcalc.isnumeric(term2[j].trim()) )
					return false;
		}
		return true;
	},
	evaluate : function ( txt, start, js_eval, no_deref ) {
		// Evaluate a TWtcalc expression.
		// A valid TWtcalc expression can be something like
		//	1. a simple arithmetic on table cells such as
		//		=A1+E4 or =(B3+C4)/D7, etc.
		//	2. a TWtcalc-defined function such as
		//		=SUM(A1..D8) or PRODUCT(A1,C3,D5) or
		//		=AVERAGE(B3..B20;B30..B40;C3,E2), etc.
		//	3. a valid Javascript math expression such as
		//		=Math.sin(Math.PI) or =Math.sqrt(3), etc.
		var expression='', cexp = '', chndx=start, subtxt,
			$tr = this.cur_table.find('tr');
		while ( chndx < txt.length ) {
			if ( (subtxt = this.cell_reference(txt,chndx)) ) {
				// cell reference found
				if ( !no_deref ) {
					var col=this.reference_to_index_col(subtxt),
						row = this.reference_to_index_row(subtxt), c2;
					c2=$tr.eq(row).find('th,td').eq(col);
					cexp = this.evaluate_cell(c2,js_eval);
					if ( cexp ) expression += cexp;
					else if (/[\+\-\*\/]$/.test(expression))
						expression=expression.substring(0,expression.length-1);
				} else expression += subtxt;
				chndx += subtxt.length;
			} else if ( (subtxt=this.isfunction(txt,chndx)) ) {
				// No cell reference found, but some
				// TWtcalc-defined function found.
				expression += this.parse_function(subtxt);
				js_eval = !this.fn[this.fn_ndx].no_eval;
				chndx += subtxt.length;
			} else {
				expression += txt.charAt(chndx++);
			}
		}
//displayMessage(expression+' is expression '+this.is_possible_exp(expression));
		if (js_eval && this.is_possible_exp(expression))
			try { return ''+eval(expression); }
			catch (e) { return 'Err: '+e; }
		return expression;
	},

	cells_being_evaluated : new Array(),
	cyclic_reference : function ( $cell ) {
		for ( var c = 0; c < TWtcalc.cells_being_evaluated.length; c++ )
			if ( TWtcalc.cells_being_evaluated[c] == $cell )
				return 'Error: ' +
					(c == TWtcalc.cells_being_evaluated.length-1) ?
					'Self reference.' :
					'Cyclic reference.';
	},

	cell_text : function ( $cell, txt ) {
		if ( ! txt ) {
			txt = $cell.text();
			if ( txt && (config.tableSorting
							|| config.macros.sortableGridPlugin) ) {
				var p = txt.indexOf('\u2191');
				if ( p == -1 ) p = txt.indexOf('\u2193');
				if ( config.macros.sortableGridPlugin )
					p -= 2;
				if ( p > -1 ) txt = txt.substring(0,p);
			}
			return txt;
		} else if ( TWtid.cell_row_index($cell) == 0 ) {
			if ( config.tableSorting ) {
				var $span = $cell.find('span:first');
				$cell.text(txt);
				if ( $span.size() > 0 ) {
					var html = $span.html(),
						p = html.indexOf('\u2191');
					if ( p == -1 ) p = html.indexOf('\u2193');
					if ( p > -1 ) $span.appendTo($cell);
				}
			} else if ( config.macros.sortableGridPlugin ) {
				var $span = $cell.find('a.sortheader span:first');
				// This is copied from SortableGridPlugin
				// for sorting purposes.
				if ( $span.size() > 0 )
					$cell.html(TWted.sortable_grid_html(txt))
						.find('a.sortheader span:first')
						.html($span.html())
						.attr('sortdir', $span.attr('sortdir'));
				else $cell.text(txt);
			} else
				$cell.text(txt);
		} else
			$cell.text(txt);
	},
	evaluate_cell : function ( $cell, js_eval, peq ) {
		// Evaluate a table cell
		var txt = this.cell_text($cell);
		if ( !txt ) return '';

		if (!peq) peq = this.index_of_expression(txt);
		var txt2, peq0 = peq;
		if ( peq > -1 ) {
			if ( $cell[0].title ) {
				$cell[0].title = $cell[0].title.split('\n')[0]+'\n'+txt;
			} else $cell[0].title = txt;
			var err = this.cyclic_reference ( $cell );
			if ( err ) {
				this.cell_text(
					$cell
					,txt+'<br><br>'+$cell[0].title+'<br>'+err
				);
			} else {
				this.cells_being_evaluated.push($cell);
				txt = this.evaluate(txt,peq+1,js_eval);
				txt2 = this.isnumeric(txt, true, '',
					config.options.chkTWtcalcThousandSeparated);
				if ( ! txt2 ) txt2 = txt;
				if ( TWtid.skip_style_text(txt2) > 0 ) {
					TWted.wikify_elem($cell, '@@'+txt2+'@@');
				} else
					this.cell_text($cell,txt2);
				this.cells_being_evaluated.pop();
			}
		} else if ( $cell.contents().size()==1 &&
			(txt2=this.isnumeric(txt,true,'.',false)) ) {
			if ( txt.trim() != txt2.trim() ) {
				// The .trim() above is necessary because there could be
				// white-spaces/line-breaks in the cell content.
				this.cell_text(
					$cell
					,(config.options.chkTWtcalcThousandSeparated
						? this.separate_number(txt)
						: txt)
				);
				return txt2;
			} else if (config.options.chkTWtcalcThousandSeparated) {
				this.cell_text($cell,this.separate_number(txt2));
			} else return txt2;
		}
		return txt;
	},
//}}}

// //Main function
//{{{
	cell_reference_title : function ( $cell, r, c ) {
		var ref = TWtcalc.index_to_reference_col(c) + r;
		if ( $cell[0].title ) {
			var txt = $cell[0].title.split('\n');
			if ( txt[0] != ref )
				$cell[0].title = ref + '\n' + txt[0];
		} else $cell[0].title = ref;
	},
	calculate_cell : function($cell,r,c,make_title,expression,peq){
		if ( make_title )
			this.cell_reference_title ( $cell, r, c );
		if ( expression ) {
			this.cell_text($cell,expression);
		}
		try {
			expression = this.evaluate_cell($cell,true,peq);
		} catch ( e ) {
			if ( config.options.chkTWtcalcDebugMode )
				this.cell_text(
					$cell
					, this.cell_text($cell)
						+'<br><br>'+expression+'<br>'+e
				);
		}
	},
	calculate_table : function ( $table, make_title, wt ) {
		if ( ! config.options.chkTWtcalcEnabled
				|| ! (config.options.chkTWtcalcAllTables
						|| TWtid.hasClass($table,'spreadsheet',wt)) )
			return false;
		TWtcalc.cur_table = $table;
		$table.find('tr').each( function (r, tr) {
			jQuery(tr).find('th,td').each ( function (c, cell) {
				TWtcalc.calculate_cell(jQuery(cell),r,c,make_title);
			} );
		} );
		TWtcalc.cur_table = null;
		return true;
	},

	pre_OfficialExample : null,
	OfficialExample : function ( title ) {
		var result = TWtcalc.pre_OfficialExample(title);
		if ( ! result && title )
			result = /^TWtcalc--Example/.test(title);
		return result;
	},

	pre_prepare_table : null,
	prepare_table : function ($table,ndx,wt) {
		if ( ! $table.attr('tcalc') )
			if ( TWtcalc.calculate_table ( $table, true, wt ) )
				$table.attr('tcalc', 'true');
		return TWtcalc.pre_prepare_table.apply(this,arguments);
	},

	pre_detach_contents : null,
	detach_contents : function($elem,txta) {
		return /^[=]/.test(txta.trim())
					? null
					: TWtcalc.pre_detach_contents($elem,txta);
	}
};
//}}}

// //TWtcalc defined functions
//{{{
TWtcalc.fn = [
	{
		name: 'PRODUCT',
		operator: '*',
		parse_single_term: function ( txt ) {
			return TWtcalc.isnumeric(txt)?txt:'1';
		}
	},
	{
		name: 'SUM',
		operator: '+',
		start_parsing: function () {
			return '(';
		},
		stop_parsing: function () {
			return ')';
		},
		parse_single_term: function ( txt ) {
			return TWtcalc.isnumeric(txt)?txt:'0';
		}
	},
	{
		// COUNTA should be defined before COUNT, otherwise it
		// has no chance to be matched. It is so because TWtcalc
		// plugin matches a function name with startsWith() method,
		// and both functions starts with COUNT, if COUNT is defined
		// before COUNTA, then the match will always be COUNT and
		// never COUNTA.
		name: 'COUNTA',
		count: 0,
		start_parsing: function () {
			this.count = 0;
		},
		stop_parsing: function () {
			return ''+this.count;
		},
		parse_single_term: function ( txt ) {
			if (/\S/.test(txt)) this.count++;
		}
	},
	{
		name: 'COUNT',
		count: 0,
		condition: null,
		start_parsing: function () {
			this.condition = null;
			this.count = 0;
		},
		stop_parsing: function () {
			return ''+this.count;
		},
		parse_single_term: function ( txt ) {
			if (TWtcalc.isnumeric (txt)) {
				if ( this.condition ) {
					var txt2 = this.condition.replace(/\%/g,txt);
					this.count += eval(txt2) ? 1 : 0;
				} else this.count++;
			} else if ( ! this.condition ) {
				txt = txt.trim();
				if (/^[\%][\s]*[\>\<\=\!]/.test(txt)) {
					this.condition = txt;
				}
			}
		}
	},
	{
		name: ['AVERAGE', 'MEAN'],
		operator: '+',
		count: 0,
		start_parsing: function () {
			this.count = 0;
			return '(';
		},
		stop_parsing: function () {
			return ')/'+this.count;
		},
		parse_single_term: function ( txt ) {
			if ( TWtcalc.isnumeric (txt) ) {
				this.count++;
			}
			return txt;
		}
	},
	{
		name: 'TODAY',
		no_eval: true,
		stop_parsing: function () {
			return new Date();
		}
	},
	{
		name: 'DAYS',
		no_eval: true,
		date1: null,
		date2: null,
		num_dec: null,
		start_parsing: function () {
			this.date1 = this.date2 = this.num_dec = null;
		},
		stop_parsing: function () {
			var result = (this.date2-this.date1)/1000/86400;
			//if ( !this.num_dec || this.num_dec == 0 )
			if ( !this.num_dec )
				result = Math.round(result);
			else {
				var factor = Math.pow(10,this.num_dec);
				result=Math.round(factor*result)/factor;
			}
			return result;
		},
		parse_single_term: function ( txt ) {
			if ( !this.date1 ) this.date1 = Date.parse(txt);
			else if ( !this.date2 ) this.date2 = Date.parse(txt);
			else if ( !this.num_dec ) this.num_dec = txt*1;
		}
	},
	{
		name: 'ROUND',
		value: null,
		num_dec: null,
		start_parsing: function () {
			this.value = this.num_dec = null;
		},
		stop_parsing: function () {
			if ( this.num_dec===null || this.num_dec===0 ) {
				this.value = Math.round(this.value);
			} else {
				var factor = Math.pow(10,this.num_dec);
				this.value=Math.round(factor*this.value)/factor;
			}
			return this.value?(''+this.value):'0';
		},
		parse_single_term: function ( txt ) {
			if ( this.value === null ) this.value = txt*1;
			else if ( this.num_dec === null ) this.num_dec = txt*1;
		}
	},
	{
		name: 'RANDOM',
		factor: null,
		start_parsing: function () {
			this.factor = null;
		},
		stop_parsing: function () {
			var result = Math.random();
			if ( this.factor ) result *= this.factor;
			return result;
		},
		parse_single_term: function ( txt ) {
			if ( !this.factor ) this.factor = txt*1;
		}
	},
	{
		name: 'CONCAT',
		no_eval: true
	},
	{
		name: 'ISNUMERIC',
		no_eval: true,
		parse_single_term: function (txt) {
			var txt2=TWtcalc.isnumeric(txt);
			return txt2 ? txt2 : 'false';
		}
	},
	{
		name: ['STDERR', 'STDEV'],
		//no_eval: true,
		data: null,
		npt: 0,
		sum: 0,
		start_parsing: function () {
			if (!this.data) this.data = new Array();
			this.npt = this.sum = 0;
		},
		stop_parsing: function () {
			var mean = this.sum/this.npt, d, variance = 0;
			for ( d = 0; d < this.npt; d++ ) {
				variance += (this.data[d] - mean)^2;
			}
			return Math.sqrt(variance/(this.npt-1));
		},
		parse_single_term: function (txt) {
			var v = parseFloat(txt);
			this.data[npt++] = v;
			this.sum += v;
		}
	},
	{
		name: ['COLUMNA', 'COLA'],
		no_eval: true,
		no_deref: true,
		col: null,
		start_parsing: function () {
			this.col = null;
		},
		stop_parsing: function () {
			if ( this.col === null ) {
				var cells = TWtcalc.
							cells_being_evaluated;
				this.col = TWtcalc.reference_to_index_col
							(cells[cells.length-1][0].title);
			}
			return TWtcalc.col_ref(this.col);
		},
		parse_single_term: function (txt) {
			if ( this.col === null )
				this.col = TWtcalc.reference_to_index_col(txt);
		}
	},
	{
		name: ['COLUMNS', 'COLS'],
		no_eval: true,
		no_deref: true,
		cols: 0,
		start_parsing: function () {
			this.cols = 0;
		},
		stop_parsing: function () {
			return ''+this.cols;
		},
		parse_single_term: function (txt) {
			txt = txt.split(':');
			switch ( txt.length ) {
				case 1 :
					this.cols++; break;
				case 2 :
					// a range of cells
					var c0 = TWtcalc.reference_to_index_col(txt[0]),
						c1 = TWtcalc.reference_to_index_col(txt[1]);
					this.cols += (c1-c0+1);
					break;
				default :
					// Syntax error
					throw 'Syntax error: '+txt;
					break;
			}
		}
	},
	{
		name: ['COLUMN', 'COL'],
		no_eval: true,
		no_deref: true,
		col: null,
		start_parsing: function () {
			this.col = null;
		},
		stop_parsing: function () {
			if ( !this.col ) {
				var cells = TWtcalc.cells_being_evaluated;
				this.col = TWtcalc.reference_to_index_col(
							cells[cells.length-1][0].title);
			}
			return ''+this.col;
		},
		parse_single_term: function (txt) {
			if ( !this.col )
				this.col = TWtcalc.
							reference_to_index_col(txt);
		}
	},
	{
		name: 'ROWS',
		no_eval: true,
		no_deref: true,
		rows: 0,
		start_parsing: function () {
			this.rows = 0;
		},
		stop_parsing: function () {
			return ''+this.rows;
		},
		parse_single_term: function (txt) {
			txt = txt.split(':');
			switch ( txt.length ) {
				case 1 :
					this.rows++; break;
				case 2 :
					// a range of cells
					var r0 = TWtcalc.reference_to_index_row(txt[0]),
						r1 = TWtcalc.reference_to_index_row(txt[1]);
					this.rows += (r1-r0+1);
					break;
				default :
					// Syntax error
					throw 'Syntax error: '+txt;
					break;
			}
		}
	},
	{
		name: 'ROW',
		no_eval: true,
		no_deref: true,
		row: null,
		start_parsing: function () {
			this.row = null;
		},
		stop_parsing: function () {
			if ( !this.row ) {
				var cells = TWtcalc.cells_being_evaluated;
				this.row = TWtcalc.reference_to_index_row(
							cells[cells.length-1][0].title);
			}
			return ''+this.row;
		},
		parse_single_term: function (txt) {
			if ( !this.row )
				this.row = TWtcalc.
							reference_to_index_row(txt);
		}
	},
	{
		name: 'IF',
		no_eval: true,
		args: null,
		start_parsing: function () {
			args = new Array();
		},
		stop_parsing: function () {
			return args[0] ? args[1] : args[2];
		},
		parse_single_term: function (txt,p0) {
			switch ( args.length ) {
				case 2 :
				case 1 :
					var style = txt.substring(0,p0);
					args.push(style+eval(txt.substring(p0)));
					break;
				case 0 :
					args.push(eval(txt));
					break;
			}
		}
	}
];
//}}}
