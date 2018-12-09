	var myarr = new Array();
	$=function(str){
		if(str.search("#")==0){				//自定义选择器（id）
			var s=  str.split("#")[1];
			return document.getElementById(s);
		}
		
	}
	init = function(){
		var content = document.getElementById("content");
		var hei = content.offsetHeight; //地图的高度
		var wid = content.offsetWidth; //地图的宽度
		//竖排格子数
		var count_hei = hei / 52;	 
		//横排格子数       
		var count_wid = wid / 52;
		for(var i=0;i<count_hei;i++){
			myarr[i] = new Array();
			for(var j=0;j<count_wid;j++){
				myarr[i][j] = 5;
				var d = document.createElement("div");
				d.style.cssText="width:50px;height:50px;position:absolute;";
				d.style.top=i*52+"px";
				d.style.left=j*52+"px";		
				d.id=i+"_"+j;
				divonclick(d);
				d.setAttribute("name","map");
				document.body.appendChild(d);
				document.getElementById("content").appendChild(d);		
			}
		}
		
	}
	
	divonclick=function(d){
		d.onclick=function(){
			var  val = parseInt($("#select").value);
			var id = d.id;
			console.log(id);
			var x = id.split("_")[0];
			var y = id.split("_")[1];
			myarr[x][y]=val;
			if(val == 0){
				d.style.background=null;
				d.style.backgroundColor="white";
			}
			if(val == 1){
				d.style.background="url(../static/images/1.jpg)";
			}
		}
	}
	
	window.onload=init;
	