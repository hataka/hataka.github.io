// -*- mode: js -*-  Time-stamp: <2010-07-28 12:57:22 kahata>
/*================================================================
 * title: terminal ���ʃ��C�u����
 * file: common_lib.js
 * path: F:\FrameWork\scripts\common_lib.js
 * url:  http://hata2/FrameWork/scripts/common_lib.js
 * created: Time-stamp: <2010-06-07 7:58:13 kahata>
 * revision: $Id$
 * Programmed By: kahata
 * To compile:
 * To run: 
 * link: 
 * description: terminal ���ʃ��C�u����
 *  file�֌W
 *================================================================*/
//////////////////////////////////////////////////////////////////
// include
//eval( new ActiveXObject("Scripting.FileSystemObject").
//		OpenTextFile("/npp.5.5.1-euc/npp.5.5.1-6/ansi/script/php.default.min.js", 1).ReadAll());

	function loadSite(target,site){
		$.ajax({
			url: site,
			type: 'GET',
			dataType: "text",
			success: function(res) {
				$(target).html(res.responseText);
			}
		});
	}	

	function hyoji(disp){
  	if (document.getElementById(disp).style.display=="block") {
    	document.getElementById(disp).style.display="none";
  	} else {
    	document.getElementById(disp).style.display="block";
  	}
	}

	function toggle_sidebar(){
  	if (document.getElementById("sidebar").style.width=="0%") {
    	document.getElementById("sidebar").style.width="17%";
    	document.getElementById("main").style.width="83%";
  	} else {
    	document.getElementById("sidebar").style.width="0%";
    	document.getElementById("main").style.width="100%";
  	}
	}

	function loadPage(dest,site){
		$(dest).load(site);
	}

	function embed_swf(path){
		var swf= "<OBJECT CLASSID=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\"" 
		+"  CODEBASE=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,0,0\""
		+"  WIDTH=640 HEIGHT=480>"
		+"  <PARAM NAME=movie VALUE=\""+path+ "\">"
		+"  <PARAM NAME=bgcolor VALUE=#FFFFFF>"
		+"  <PARAM NAME=LOOP VALUE=false>"
		+"  <PARAM NAME=quality VALUE=high>"
		+"  <EMBED SRC=\"" +path+ "\""
		+"    WIDTH=640 HEIGHT=480 bgcolor=#FFFFFF LOOP=false QUALITY=high" 
		+"    PLUGINSPAGE=\"http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash\""
		+"    TYPE=\"application/x-shockwave-flash\">" 
		+"  </EMBED>"
		+"</OBJECT>";
		return swf;
	}
 

	function load_swf(target,path){
		var html = "<center>"+embed_swf(path)+"</center>";
		$(target).html(html);
	}




//////////////////////////////////////////////////////////////////
// iframe ���������v�Z ���C�u����
function GetHeight(ID,NAME){
	if (document.height){
		document.getElementById(ID).style.height = this.frames[NAME].document.height +40 +"px" ;
	}
	else{
//		document.getElementById(ID).style.height = this.frames[NAME].document.body.scrollHeight +40 +"px";
		document.getElementById(ID).style.height = "800px";
	}
}

//////////////////////////////////////////////////////////////////
// String ���C�u����
/*
function htmlspecialchars(strText){
	return strText.replace(/&/g, "&amp;").replace(/"/g, "&quot;")
		.replace(/</g, "&lt;").replace(/>/g, "&gt;");//'"
}
function nl2br(strText) {
		// \n�����łȂ��A\r���ϊ�����̂��|�C���g�B
	// ���s�̓u���E�U�ɂ���āA\r\n��������A\n�����������肷��̂ŁA
	// �܂��ŏ���\r\n��ϊ����āA���̌�\n��ϊ�����
	strText = strText.replace(/\r\n/g,"<br />");
	strText = strText.replace(/(\n|\r)/g, "<br />");
	//	strText = "<pre>" + strText + "</pre>";
	return strText;
}
*/


function WindowMaxOpen2(URL){
x = (screen.width) / 1;
y = (screen.height) / 1;
NewWindow=window.open(URL,"new","screenX=0,screenY=0,left=0,top=0,width="+x+",height="+y+",scrollbars=1,toolbar=1,menubar=1,staus=1,resizable=1");
}

function WindowMaxOpen(URL){
NewWindow=window.open(URL,"new","fullscreen=1,scrollbars=1,toolbar=1,menubar=1,staus=1,resizable=1");
}



function make_link(path){
	var tmp = path.replace(/\\/g,"/");
	tmp = tmp.replace("F:/","http://hata2/");
	var url = "<a href=\"" + tmp + "\" target=_blank>" + tmp + "</a>";
	return url;
}
/*
// trim
function trim(str) {
	return str.replace(/(^[\s\t\n]+)|([\s\t\n]+$)/g, "");
}
*/
function str_replace (search, replace, subject, count) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Gabriel Paderni
    // +   improved by: Philip Peterson
    // +   improved by: Simon Willison (http://simonwillison.net)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   bugfixed by: Anton Ongson
    // +      input by: Onno Marsman
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    tweaked by: Onno Marsman
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   input by: Oleg Eremeev
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Oleg Eremeev
    // %          note 1: The count parameter must be passed as a string in order
    // %          note 1:  to find a global variable in which the result will be given
    // *     example 1: str_replace(' ', '.', 'Kevin van Zonneveld');
    // *     returns 1: 'Kevin.van.Zonneveld'
    // *     example 2: str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars');
    // *     returns 2: 'hemmo, mars'

    var i = 0, j = 0, temp = '', repl = '', sl = 0, fl = 0,
            f = [].concat(search),
            r = [].concat(replace),
            s = subject,
            ra = r instanceof Array, sa = s instanceof Array;
    s = [].concat(s);
    if (count) {
        this.window[count] = 0;
    }

    for (i=0, sl=s.length; i < sl; i++) {
        if (s[i] === '') {
            continue;
        }
        for (j=0, fl=f.length; j < fl; j++) {
            temp = s[i]+'';
            repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
            s[i] = (temp).split(f[j]).join(repl);
            if (count && s[i] !== temp) {
                this.window[count] += (temp.length-s[i].length)/f[j].length;}
        }
    }
    return sa ? s : s[0];
}
//////////////////////////////////////////////////////////////////
// �R�����R���g���[�� ���C�u����
function OpenFileDialog(initdir) {
	var dialog = new ActiveXObject("UserAccounts.CommonDialog");
	dialog.Filter = "All Files|*.*|Text Files|*.txt|PHP Files|*.php";
//	dialog.InitialDir = "F:\\Programinng\\terminal\\";
	dialog.InitialDir = initdir;

	if (!dialog.ShowOpen()) {
		alert("�t�@�C���͑I������Ȃ������݂������c�c�B");
		dialog = null;
		return null;
	}
	else {
		var FilePath = dialog.FileName;
//		alert("�I�������̂͂��ꂩ�H\n\"" + dialog.FileName + "\"");
		dialog = null;
		return FilePath;
	}
}

function InputBox(msg){
	var VBS_String = 'InputBox("' + msg + '")';
	var objSC = new ActiveXObject("ScriptControl");
	objSC.Language = "VBScript";
	return objSC.Eval(VBS_String);
}

//////////////////////////////////////////////////////////////////
// file ���C�u����
// /cygdrive/f/FrameWork
function cygdrive2windir(cygdrive){
	var tmp = cygdrive.split('\/');
	var output =cygdrive.replace(tmp[1],'').replace(tmp[2],tmp[2]+':');
	output = output.replace(/^\/\//,'').replace(/\//g,'\\');
	return output;
}

function location2winpath(href){
	var dir;
	var filepath = href.split('?')[0];
	filepath = filepath.replace("file:\/\/\/","");
	filepath = filepath.replace('http:\/\/hata2','F:');
	filepath = filepath.replace(/\//g,'\\'); // /
	filepath = filepath.replace(/\\\\/g,'\\'); // /
	return filepath;
}	
function winpath2location(location){
	var fileurl;
	fileurl = location.replace('F:','http:\/\/hata2');
	fileurl = fileurl.replace("C:","file:\/\/\/C:");
	fileurl = fileurl.replace(/\\/g,'\/'); // /
	return fileurl;
}	

function fileext(filepath){
	var tmp = filepath.split('.');
	return tmp[tmp.length-1];
}

function basename(filepath){
	var tmp;
	if(filepath.indexOf("\/") != -1){
		tmp = filepath.split("\/");
		if(tmp[tmp.length-1] == ''){
			return tmp[tmp.length-2];
		} 
		else {
			return tmp[tmp.length-1];
		}				
	}
	else if(filepath.indexOf("\\") != -1){
		tmp = filepath.split("\\");
		if(tmp[tmp.length-1] == ''){
			return tmp[tmp.length-2];
		} 
		else {
			return tmp[tmp.length-1];
		}				
	}
	else {
		return filepath;
	}		
}

function dirname(filepath){
	return  filedir(filepath).substring(0,filedir(filepath).length-1);
}

function filedir(filepath){
	return  filepath.replace(basename(filepath),'');
}

function filebody(filepath){
	var n = basename(filepath).lastIndexOf(".");
  return basename(filepath).substr(0,n); 
//  �t�@�C���� aaa.bbb.ccc.ddd.eee�̏ꍇ��������
//	var tmp;
//	tmp = basename(filepath).split('.');
//	return tmp[0];
}


function folder_exists(strCheckPath){
	var objFileSys;
	objFileSys = new ActiveXObject("Scripting.FileSystemObject");
	return objFileSys.FolderExists(strCheckPath);
}

function file_exists(strCheckPath){
	var objFileSys;
	objFileSys = new ActiveXObject("Scripting.FileSystemObject");
	return objFileSys.FileExists(strCheckPath);
}

/*
Function FolderExists(strFilePath)
	Dim objFileSys
	Set objFileSys = CreateObject("Scripting.FileSystemObject")
	FolderExists = objFileSys.FolderExists(strFilePath)
End Function

Function FileExists(strFilePath)
	Dim objFileSys
	Set objFileSys = CreateObject("Scripting.FileSystemObject")
	FileExists = objFileSys.FileExists(strFilePath)
End Function
*/

//////////////////////////////////////////////////////////////////
// FileSystemObject ���C�u����
function file(strFilePath){
	var ForReading = 1; //�ǂݍ���
	var ForWriting = 2; //�������݁i�㏑�����[�h�j
	var ForAppending = 8; //�������݁i�ǋL���[�h�j

	var objFileSys;
	var strCheckPath;

	var objInFile;
	var strFileName;
	var strFilePath;
	var strRecord;
	var strData = new Array;
	
	objFileSys = new ActiveXObject("Scripting.FileSystemObject");
	try {
		objInFile = objFileSys.OpenTextFile(strFilePath,ForReading);
		do {
			strRecord = objInFile.ReadLine() + "\n";
			strData.push(strRecord);
		} while(objInFile.AtEndOfStream==false);
		objInFile.Close();
	} catch(e) {
		WScript.echo(dirname(strFilePath) + "�Ƀt�@�C��" + basename(strFilePath) + "������܂���ł����B");
	}
   objFileSys = null;
   objInFile = null;
	return strData;
}

function file_get_contents(strFilePath){
	var ForReading = 1; //�ǂݍ���
	var ForWriting = 2; //�������݁i�㏑�����[�h�j
	var ForAppending = 8; //�������݁i�ǋL���[�h�j
   var objFileSys;
   var objInFile;
   var strFilePath;
   var strData;

	objFileSys = new ActiveXObject("Scripting.FileSystemObject");
	try {
      objInFile = objFileSys.OpenTextFile(strFilePath,ForReading);
      strData = objInFile.ReadAll();
//      WScript.echo(strData);
      objInFile.Close();
   } catch(e) {
      WScript.echo(strScriptPath + "�Ƀt�@�C��" + strFileName + "������܂���ł����B");
   }
	objFileSys = null;
   objInFile = null;
	return strData;
}

function file_put_contents(strFilePath,strData){
	var ForReading = 1; //�ǂݍ���
	var ForWriting = 2; //�������݁i�㏑�����[�h�j
	var ForAppending = 8; //�������݁i�ǋL���[�h�j

	var objFileSys;
	var objOutFile;
	var strCheckPath;

	objFileSys = new ActiveXObject("Scripting.FileSystemObject");
	strCheckPath = objFileSys.BuildPath(dirname(strFilePath),basename(strFilePath));

	if (objFileSys.FileExists(strCheckPath)==false) {
/**
	http://www.atmarkit.co.jp/fwin2k/operation/wsh10/wsh10_02.html
	CreateTextFile(filename [, overwrite] [, unicode])
	��1�p�����[�^�ifilename�j ������ �| �쐬����t�@�C���̖��O�B�ȗ��s�� 
	��2�p�����[�^�ioverwrite�j Boolean False �t�@�C�������݂���ꍇ�A
		True�Ȃ�΃t�@�C�����㏑������BFalse�Ȃ�΃G���[���������� 
	��3�p�����[�^�iunicode�j Boolean False ASCII�t�@�C�����쐬����Ȃ��False
		Unicode(UTF-16)�t�@�C�����쐬����Ȃ��True���w�� 
*/
		objOutFile = objFileSys.CreateTextFile(strFilePath, true);
	} else {
		objOutFile = objFileSys.OpenTextFile(strFilePath, ForWriting);
//		objOutFile = objFileSys.OpenTextFile(strFilePath, ForAppending);
	}
	objOutFile.WriteLine(strData);
	objOutFile.Close();
	objFileSys = null;
	objOutFile = null;
}
//////////////////////////////////////////////////////////////////
// array ,json���C�u����
function in_array (needle, haystack, argStrict) {
    // Checks if the given value exists in the array  
    // 
    // version: 1006.1915
    // discuss at: http://phpjs.org/functions/in_array
		// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: vlado houba
    // +   input by: Billy
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);    // *     returns 1: true
    // *     example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
    // *     returns 2: false
    // *     example 3: in_array(1, ['1', '2', '3']);
    // *     returns 3: true    // *     example 3: in_array(1, ['1', '2', '3'], false);
    // *     returns 3: true
    // *     example 4: in_array(1, ['1', '2', '3'], true);
    // *     returns 4: false
    var key = '', strict = !!argStrict; 
    if (strict) {
        for (key in haystack) {
            if (haystack[key] === needle) {
                return true;            }
        }
    } else {
        for (key in haystack) {
            if (haystack[key] == needle) {                return true;
            }
        }
    }
     return false;
} 
// http://d.hatena.ne.jp/tilfin/20080702/1215019872
function toJSON(data){
  if (data === undefined) return;
  if (data === null) return "null";
  var type = typeof data;
  if (type == 'number' || type == 'boolean') {
    return data.toString();
  } else if (type == 'function' || type == 'unknown') {
    return;
  } else if (type == 'string' || data.constructor == String) {
    return '"' + data.replace(/\"|\n|\\/g, function(c){ return c == "\n" ? "\\n" : '\\' + c }) + '"'; //'
  } else if (data.constructor == Date) {
    return 'new Date("' + data.toString() + '")'; //'
  } else if (data.constructor == Array) {
    var items = [];
    for (var i = 0; i < data.length; i++) {
      var val = toJSON(data[i]);
      if (val != undefined)
          items.push(val);
    }
    return "[" + items.join(",") + "]";
  } else if (data.constructor == Object) {
    var props = [];
    for (var k in data) {
      var val = toJSON(data[k]);
      if (val != undefined)
          props.push(toJSON(k) + ":" + val);
    }
    return "{" + props.join(",") + "}";
  }
}

//http://d.hatena.ne.jp/sshi/20060904/p1
function fromJSON(strdata){
  if (strdata === undefined) return;
  if (strdata === null) return "null";
	return eval("("+strdata+")");
}

/*
 http://billyboy.blog81.fc2.com/blog-entry-183.html
 ���L�R�[�h��<head> �` </head>�ԂɋL�q���邩�A
���ۂɎ擾�������ꏊ�ɒ��ڏ����Ă��ǂ��B
���̃��[�U�[��`�֐��ugetQuerystring�v����L�[�̒l���擾����ꍇ�͈ȉ��̂悤�ɋL�q����΂悢�B
	var key_value = getQuerystring('���P�[�V����','�L�[��');
�Ⴆ�΁A�p�����[�^�["onlyUnpublished"�̒l���擾��������΁A
	var key_value = getQuerystring('onlyUnpublished');
�ɂȂ�B
�N�G���[������Ɏ擾�������p�����[�^�[���܂܂�Ă��Ȃ������ꍇ�́A""(�󕶎�)���Ԃ����B
��3�����Ƀp�����[�^�[�����݂��Ȃ������ꍇ�ɕԂ������l���w�肵�Ă�����
�w�肵���l���Ԃ��Ă���B
*/
/*
function getQuerystring(loc, key, default_)
{   
   if (default_==null) default_="";   
   key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");   
   var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");   

//	var qs = regex.exec(window.location.href);
	var qs = regex.exec(loc);
   if(qs == null)
    return default_;
   else  
    return qs[1];
}   
*/

/**
 * URL��͂��āA�N�G���������Ԃ�
 * @returns {Array} �N�G��������
 */
function getUrlVars(){
	var vars = [], max = 0, hash = "", array = "";
	var url = window.location.search;
		//?����菜�����߁A1����n�߂�B�����̃N�G��������ɑΉ����邽�߁A&�ŋ�؂�
	hash  = url.slice(1).split('&');	
	max = hash.length;
	for (var i = 0; i < max; i++) {
		array = hash[i].split('=');	//key�ƒl�ɕ����B
		vars.push(array[0]);	//�����ɃN�G���������key��}���B
		vars[array[0]] = array[1];	//��قǊm�ۂ���key�ɁA�l�����B
	}
	return vars;
}


function GetQueryString() {
  if (1 < document.location.search.length) {
	// �ŏ���1���� (?�L��) ����������������擾����
		var query = document.location.search.substring(1);
		// �N�G���̋�؂�L�� (&) �ŕ������z��ɕ�������
		var parameters = query.split('&');
		var result = new Object();
		for (var i = 0; i < parameters.length; i++) {
			// �p�����[�^���ƃp�����[�^�l�ɕ�������
			var element = parameters[i].split('=');
			var paramName = decodeURIComponent(element[0]);
			var paramValue = decodeURIComponent(element[1]);
			// �p�����[�^�����L�[�Ƃ��ĘA�z�z��ɒǉ�����
			result[paramName] = decodeURIComponent(paramValue);
		}
		return result;
	}
	return null;
}

/*
function location2filepath(href){
	var dir;
//	alert("target_filepath : "+ target_filepath);
	if(target_filepath != undefined ) href = target_filepath;
	var filepath = href.split('&')[0];
	filepath = filepath.replace("file:\/\/\/","");
	filepath = filepath.replace('http:\/\/hata2','F:');
	filepath = filepath.replace(/\//g,'\\'); // /

	//������Ȃ��ꍇ�� -1 ��Ԃ��܂�
//	alert(filepath.indexOf("srv_view.php"));
	
	if(filepath.indexOf("jsp_view.php") != -1){
		dir = filepath.split('?')[1].split('=')[1];
		dir = dir.replace(/\//g,'\\'); // /
		filepath = "F:\\java\\webapps\\javaload\\jspdir\\isemba\\"+ dir;
	}
	else if(filepath.indexOf("srv_view.php") != -1){
		dir = filepath.split('?')[1].split('=')[1];
		dir = dir.replace(/\//g,'\\'); // /
		filepath = "F:\\java\\webapps\\javaload\\WEB-INF\\classes\\isemba\\" + dir;
	}
	else if(filepath.indexOf("viewer.php") != -1){
		dir = filepath.split('?')[1].split('=')[1];
		dir = dir.replace(/\//g,'\\'); // /
		filepath = "F:\\java\\isemba\\" + dir;
	}
//	else {
//		filepath = filepath.replace('viewer.php?dir=','');
//		filepath = filepath.replace('http:\/\/hata2','F:');
//		filepath = filepath.replace(/\//g,'\\'); // /
//		alert(filepath);
//	}
	return filepath;
}

function make_link(path){
	var tmp = path.replace(/\\/g,"/");
	tmp = tmp.replace("F:/","http://hata2/");
	var url = "<a href=\"" + tmp + "\" target=_blank>" + tmp + "</a>";
	return url;
}
*/
