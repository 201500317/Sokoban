
			arrFun = function(){
				var B=[
		           		[
		               		[1,0,1,1,1,1,1,1,1,1],
		               		[1,0,0,0,0,1,0,0,0,1],
			         		[1,0,3,0,0,0,0,0,0,1],
			         		[1,0,0,0,0,1,0,0,0,1],
			         		[1,0,1,1,0,1,0,0,1,1],
			         		[1,0,0,1,0,0,0,0,0,1],
			         		[1,0,0,1,0,1,0,0,0,1],
			         		[1,0,0,0,0,0,0,0,0,1],
			         		[1,0,0,0,1,1,0,0,0,1],
			         		[1,1,1,1,1,1,1,1,4,1]
		           		],
		           		[
		               		[1,0,1,1,1,1,1,1,1,1],
		               		[1,0,0,0,0,0,0,0,0,1],
			         		[1,1,1,1,1,1,1,1,0,1],
			         		[1,0,0,0,0,0,0,0,0,1],
			         		[1,0,0,0,0,0,0,0,1,1],
			         		[1,0,1,0,0,0,0,1,0,1],
			         		[1,0,0,0,3,0,0,0,0,1],
			         		[1,0,0,0,0,0,0,0,0,1],
			         		[1,0,0,0,0,0,0,0,0,1],
			         		[1,1,1,1,1,1,1,1,4,1]
		           		],
						[
					       [1,0,1,1,1,1,1,1,1,1],
					       [1,0,0,0,0,0,0,0,0,1],
					       [1,0,0,0,0,0,0,0,0,1],
					       [1,0,1,1,1,1,1,0,0,1],
					       [1,0,1,0,0,0,0,0,1,1],
					       [1,0,0,3,0,0,0,0,0,1],
					       [1,0,0,0,1,1,1,0,0,1],
					       [1,0,0,0,1,0,0,0,0,1],
					       [1,0,0,0,0,0,0,0,0,1],
					       [1,1,1,1,1,1,1,1,4,1]
		      	   		]
		       		  ];	
				return B;		
			}			
						var A = arrFun();
						var gs = 0;
					    var a=A[gs];						
					    var r;
						var x=1,y=0;
					  
		init=function(){
				var i,j;
				for(i=0;i<10;i++){
					for(j=0;j<10;j++){
						var d = document.createElement("div");
						d.style.cssText="width:50px;height:50px;position:absolute;";
						d.style.top=i*52+"px";
						d.style.left=j*52+"px";
						d.id=i+"_"+j;
						var k = a[i][j];
						if(k==0){
						  d.style.backgroundColor="white";
						}
						if(k==1){
						  d.style.background="url(../static/images/1.jpg)";
						}
						if(k==3){
						  d.style.background="url(../static/images/xz.jpeg)";
						}
						if(k==4){
						  d.style.background="url(../static/images/2.jpg)";
						}
						document.body.appendChild(d);
						document.getElementById("content").appendChild(d);
					}
				}
				r = document.createElement("div");
				r.style.cssText="width:50px;height:50px;position:absolute";
				r.style.top=0*52+"px";
				r.style.left=1*52+"px";
				r.style.background="url(../static/images/xx.jpg)";
				r.style.backgroudSize='50px 50px';
                document.getElementById("content").appendChild(r);
         }   
       	function mykeydown(){
		  var k = event.keyCode;
		  console.log(k);
		  if(k==87||k==38){
			  
			  if(a[y-1][x]==3&&a[y-2][x]==0){
				  console.log("向上推箱子");
				  var xz = document.getElementById((y-1)+"_"+x);
				  var lu = document.getElementById((y-2)+"_"+x);
				  a[y-1][x]=0;
				  a[y-2][x]=3;
				  xz.style.background=null;
				  xz.style.backgroundColor="white";
				  lu.style.background="url(../static/images/xz.jpeg)";
			  }
			  
			  if(y>0&&a[y-1][x]==0){
				  console.log("人物向上走");
			  	  r.style.top=parseInt(r.style.top)-52+"px";
				  y--;
			  }
		  }
		  if(k==83||k==40){
			 if(a[y+1][x]==3&&a[y+2][x]==4){
				 var xz = document.getElementById((y+1)+"_"+x);
				 a[y+1][x]=0;
				 xz.style.background=null;
				 xz.style.backgroundColor="white";
			 }
			
			 if(a[y+1][x]==3&&a[y+2][x]==0){
				  console.log("向下推箱子");
				  var xz = document.getElementById((y+1)+"_"+x);
				  var lu = document.getElementById((y+2)+"_"+x);
				  a[y+1][x]=0; //数组中箱子变成路
				  a[y+2][x]=3; //路变成箱子
				  xz.style.background=null;
				  xz.style.backgroundColor="white";
				  lu.style.background="url(../static/images/xz.jpeg)";
			   }
			  if(y<a.length-1&&a[y+1][x]==0){
				  console.log("人物向下走");
			  	  r.style.top=parseInt(r.style.top)+52+"px";
				  y++;
				  if(PassCard() == 0){
					 if(gs == A.length-1){
						 var cj = document.createElement("div");
						 cj.style.cssText = "width:345px;height:196px;position:absolute;top:130px;left:97px;z-index:10;";
						 cj.style.background="url(../static/images/CJ.jpg)";
						 document.getElementById("content").appendChild(cj);
						 return;
					 } 
				  	 var tg = document.createElement("div");
					 tg.setAttribute("id", "tg");
					 tg.style.cssText = "width:356px;height:215px;position:absolute;top:130px;left:97px;z-index:10;";
					 tg.style.background="url(../static/images/tg.jpg)";
					 document.getElementById("content").appendChild(tg);
					 var replay = document.createElement("button");	
					 replay.style.cssText="border: none;color: white;padding: 15px 12px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin: 4px 2px;cursor: pointer;position:absolute;top:138px;left:40px;background-color:green;"; 
					 replay.textContent="重玩本关";
					 tg.appendChild(replay);
					 replay.onclick=function(){
						var C = arrFun();
					 	a=C[gs];
						x=1,y=0;
						var t_g = document.getElementById("tg");
						document.getElementById("content").removeChild(t_g);
					 	document.getElementById("content").innerHTML="";
						init();
					 };
					 var next = document.createElement("button");	
					 next.style.cssText="border: none;color: white;padding: 15px 			12px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin: 4px 2px;cursor: pointer;position:absolute;top:138px;left:220px;background-color:green;"; 
					 next.textContent="下一关";
					 tg.appendChild(next);
					 next.onclick=function(){
						gs++;
						a=A[gs];
						x=1,y=0;
						var t_g = document.getElementById("tg");
						document.getElementById("content").removeChild(t_g);
					 	document.getElementById("content").innerHTML="";
						init();
						
					 };					 
				  }
				  	
			  }

		  }
		  if(k==65||k==37){
			  if(a[y][x-1]==3&&a[y][x-2]==0){
			  	console.log("向左推箱子");
				var xz = document.getElementById(y+"_"+(x-1));
				var lu = document.getElementById(y+"_"+(x-2));
				a[y][x-1]=0;
				a[y][x-2]=3;
				xz.style.background=null;
				xz.style.backgroundColor="white";
				lu.style.background="url(../static/images/xz.jpeg)";
			  }
			  
			  if(x>0&&a[y][x-1]==0){
				  console.log("人物向左走");
			  	  r.style.left=parseInt(r.style.left)-52+"px";
				  x--;
			  }
		  }
		  if(k==68||k==39){
			  if(a[y][x+1]==3&&a[y][x+2]==0){
			  	console.log("向右推箱子");
				var xz = document.getElementById(y+"_"+(x+1));
				var lu = document.getElementById(y+"_"+(x+2));
				a[y][x+1]=0;
				a[y][x+2]=3;
				xz.style.background=null;
				xz.style.backgroundColor="white";
				lu.style.background="url(../static/images/xz.jpeg)";
			  }			  
			  
			  if(x<a[0].length&&a[y][x+1]==0){
				  console.log("人物向右走");
			  	  r.style.left=parseInt(r.style.left)+52+"px";
				  x++;
			  }
			  
		  }
		  
		  if(k==32){
		  		var zd = document.createElement("div");
				zd.style.cssText="width:50px;height:50px;position:absolute;background:url(../static/images/zd.png)";
				zd.x = x+1;
				zd.y = y;
				zd.style.left=zd.x*52+"px";
				zd.style.top=zd.y*52+"px";
				document.getElementById("content").appendChild(zd);
				zdMove(zd);
		  }
		  
		}
		
	    function zdMove(zd){
			if(a[zd.y][zd.x] == 1){
				zd.remove(zd);
				document.getElementById(zd.y+"_"+zd.x).style.background=null;
				document.getElementById(zd.y+"_"+zd.x).style.backgroundColor= "white";
				a[zd.y][zd.x]=0;
			}else{			
				setTimeout(
					function(){
						zdMove(zd);
					},
				200);
				zd.style.left=zd.x*52+"px";
				zd.x++;
			}
			if(zd.x>a[0].length){
					zd.remove(zd);
			}

		}
		
		replay = function(){
			var C = arrFun();
			a=C[gs];
			x=1,y=0;
			document.getElementById("content").innerHTML="";
			init();
		}
		
		PassCard =	function(){
			var tw = 0;
			var i,j;
			for(i=0;i<10;i++){
				for(j=0;j<10;j++){
					if(a[i][j]==3){
						var tw =1;
						break;
					}
				}
			}
			
			return tw;
		}
		document.onkeydown = mykeydown;   
		   
		window.onload=init;
		
		
		
		
		
		
		
		
		
		
		
		
		
		