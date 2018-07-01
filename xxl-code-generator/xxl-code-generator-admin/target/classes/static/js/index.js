$(function () {
	var $codeTextAreaId = ['controller_ide', 'service_ide'];
	
    /**
     * 初始化 table sql
     */
    var tableSqlIDE;
    function initTableSql() {
        tableSqlIDE = CodeMirror.fromTextArea(document.getElementById("tableSql"), {
            lineNumbers: true,
            matchBrackets: true,
            mode: "text/x-sql",
            lineWrapping:false,
            readOnly:false,
            foldGutter: true,
            gutters:["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
        });
        tableSqlIDE.setSize('auto','auto');
    }
    initTableSql();

    /**
     * 初始化 code area
     */

    var controller_ide;
    var service_ide;
    var service_impl_ide;
    var dao_ide;
    var mybatis_ide;
    var model_ide;
    function initCodeArea(){

        // controller_ide
        controller_ide = CodeMirror.fromTextArea(document.getElementById("controller_ide"), {
            lineNumbers: true,
            matchBrackets: true,
            mode: "text/x-java",
            lineWrapping:true,
            readOnly:true,
            foldGutter: true,
            gutters:["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
        });
        controller_ide.setSize('auto','auto');
        controller_ide.setOption('name', 'controllerCode');

        // service_ide
        service_ide = CodeMirror.fromTextArea(document.getElementById("service_ide"), {
            lineNumbers: true,
            matchBrackets: true,
            mode: "text/x-java",
            lineWrapping:true,
            readOnly:true,
            foldGutter: true,
            gutters:["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
        });
        service_ide.setSize('auto','auto');
        service_ide.setOption('name', 'serviceCode');

        // service_impl_ide
        service_impl_ide = CodeMirror.fromTextArea(document.getElementById("service_impl_ide"), {
            lineNumbers: true,
            matchBrackets: true,
            mode: "text/x-java",
            lineWrapping:true,
            readOnly:true,
            foldGutter: true,
            gutters:["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
        });
        service_impl_ide.setSize('auto','auto');
        service_impl_ide.setOption('name', 'serviceImplCode');

        // dao_ide
        dao_ide = CodeMirror.fromTextArea(document.getElementById("dao_ide"), {
            lineNumbers: true,
            matchBrackets: true,
            mode: "text/x-java",
            lineWrapping:true,
            readOnly:true,
            foldGutter: true,
            gutters:["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
        });
        dao_ide.setSize('auto','auto');
        dao_ide.setOption('name', 'daoCode');

        // mybatis_ide
        mybatis_ide = CodeMirror.fromTextArea(document.getElementById("mybatis_ide"), {
            lineNumbers: true,
            matchBrackets: true,
            mode: "text/html",
            lineWrapping:true,
            readOnly:true
        });
        mybatis_ide.setSize('auto','auto');
        mybatis_ide.setOption('name', 'mybatisCode');

        // model_ide
        model_ide = CodeMirror.fromTextArea(document.getElementById("model_ide"), {
            lineNumbers: true,
            matchBrackets: true,
            mode: "text/x-java",
            lineWrapping:true,
            readOnly:true,
            foldGutter: true,
            gutters:["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
        });
        model_ide.setSize('auto','auto');
        model_ide.setOption('name', 'modelCode');

    }

    initCodeArea();

    /**
     * 生成代码
     */
    $('#codeGenerate').click(function () {
        var tableSql = tableSqlIDE.getValue();
        $.ajax({
            type : 'POST',
            url : base_url + "/codeGenerate",
            data : {"tableSql" : tableSql},
            dataType : "json",
            success : function(data){
                if (data.code == 200) {
                    layer.open({
                        icon: '1',
                        content: "代码生成成功" ,
                        end: function(layero, index){
                            controller_ide.setValue(data.data.controller_code);
                            controller_ide.setSize('auto','auto');
                            service_ide.setValue(data.data.service_code);
                            service_ide.setSize('auto','auto');
                            service_impl_ide.setValue(data.data.service_impl_code);
                            service_impl_ide.setSize('auto','auto');
                            dao_ide.setValue(data.data.dao_code);
                            dao_ide.setSize('auto','auto');
                            mybatis_ide.setValue(data.data.mybatis_code);
                            mybatis_ide.setSize('auto','auto');
                            model_ide.setValue(data.data.model_code);
                            model_ide.setSize('auto','auto');
                        }
                    });
                } else {
                    layer.open({
                        icon: '2',
                        content: (data.msg||'代码生成失败')
                    });
                }
            }
        });
    });
    $('#codeDownload').click(function(){
    	var tempCodeStr = null;
    	var ides = {controller_ide, service_ide, service_impl_ide, dao_ide, mybatis_ide, model_ide};// 
    	var codesMap = {};
    	var codesJson = "{"
    	$.each(ides, function(index){
    		tempCodeStr = ides[index];
    		var name = tempCodeStr.getOption('name');
    		var value = tempCodeStr.getValue();
    		codesMap[name] = value;
    		codesJson += "\"" + name + "\":\"" + value + "\""; 
    	});
    	codesJson += "}";
    	alert(codesJson.length);
    	$.ajax({
    		url: base_url + "/codeDownload",
    		data : {codes : codesJson},
    		success: function(data){
    			layer.open({
                    icon: '1',
                    content: "代码下载成功"
                });
    		}
    	});	
    });
    
});