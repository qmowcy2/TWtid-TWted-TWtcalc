TWtid-TWted-TWtcalc
===================
TWtid，TWted 以及 TWtcalc 是由 Vinent Yeh (qmo.wcy2@gmail.com) 為 TiddlyWiki 所寫的三個外掛，其中 TWtid+TWted 的組合可做為一個「顯示模式下的 wiki text 編輯器」，而 TWtid+TWtcalc 則是一個簡單的表格試算器。三個之中 TWtid 是基本的外掛，負責找出並處理 wiki text 和其生成之 DOM 元素之間的關聯，另外兩個外掛都需要它才能正常工作。

TWtid, TWted and TWtcalc are three plugins written by Vinent Yeh (qmo.wcy2@gmail.com) for TiddlyWiki. The combination TWtid+TWted serve as a view mode wiki text editor, while that of TWtid+TWtcalc is a simple table calculator. The TWtid is the base plugin which finds and manipulates the correspondence between a piece of wiki text and its resulting DOM element(s). The other two plugins need it to work correctly.

這個 wiki text 編輯器可以讓你在顯示模式之下
* 編輯區塊元素，如表格、表列項目、標題、PRE FORMAT、區塊引用文字等等；
* 編輯純文字；
* 編輯 transcluded 內容；
* 編輯 tiddler 標題。

With the view mode editor one can, in the view mode,
* edit block elements such as TABLE, LIST ITEM, HEADING, PRE FORMAT, BLOCKQUOTE, etc;
* edit plain text;
* edit transcluded content.
* edit tiddler title.

表格試算器則可以讓你
* 把表格當成一個簡單的試算表；
* 在表格欄位裡面輸入類似 OpenOffice Calc 或是 Excel 的公式（如：在 A3 欄位輸入 "=A1+A2"）；
* 使用預先定義好的函式（目前約 20 個，持續增加中）；
* 定義自己的函式（用 Javascript）。

With the table calculator one can
* use a table as a simple spreadsheet;
* input OpenOffice Calc-like/Excel-like formula in a table cell (For example, type "=A1+A2" in the cell A3.);
* use any of the predefined functions (currently ~20 and growing);
* define your own function (in Javascript).

進一步細節請參考完整版程式檔案及其它說明文件。
有關 TiddlyWiki 及其說明請參考官方網站 http://tiddlywiki.com/。

For further information please find the regular version of the code files and the documentation.
For TiddlyWiki and its documentation please find the official cite http://tiddlywiki.com/.
