$(window).on('resize', function() {
	document.documentElement.style.fontSize = $(document.documentElement).width()/3.75 + 'px';
});
document.body.addEventListener("touchmove",function(a){a.preventDefault()},!1);
function loadsuccess(a){
	console.log('页面载入完成');
	demo(".load").style.display="none";
	demo(".wrap").style.opacity="1";
	a&&demo(".main").addEventListener("touchmove",function(a){a.stopPropagation()},!1)
}
function myPlayer(speed){
	var ts = demo(".banner").getElementsByTagName("a"),
	tsl=ts.length,
	hide=function(){
		for(var m=0;m<tsl;m++){
			ts[m].style.display="none";
		}
	};
	var timer,k=0;
	var timer = setInterval(function(){
		hide()
		ts[k].style.display="block";
		if(k>ts.length-2){
			k=0;
		}
		else{
			k++;
		}
	},speed*1000);
	$('.banner a').on('swipeLeft',function(){
		clearInterval(timer),hide();
		var index=$(this).index();
		if (index==(tsl-1)) { 
			ts[0].style.display="block";
		}
		else{
			ts[index+1].style.display="block";
		}
	}).on('swipeRight',function(){
		clearInterval(timer),hide();
		var index=$(this).index();
		if (index==0) { 
			ts[tsl-1].style.display="block";
		}
		else{
			ts[index-1].style.display="block";
		}
	})
}
function alerttxt(t){
	var _alert=demo(".alert"),
	click=!0;
	if (click) {
		click=!1;
		_alert.style.display="block";
		_alert.innerHTML=t;
		setTimeout(function(){
			click=!0;
			_alert.style.display="none";
		},1000)
	}
}
$('.btn-fh').on("click",function(){
	return history.go(-1),!1;
})
