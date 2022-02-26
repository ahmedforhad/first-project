clock.js>_
var state=false;
function toggle(){
	var body =document.getElementById('body');
	var clock= document.getElementById('clock');
	var mode=document.getElementById('bt');
	var state=document.getElementById('center');
	var second=document.getElementById('second');
	if (state){
		body.style.background="#c1c1c4";
		clock.className="clock1";
		mode.innertext="dark mode";
		mode.style.background="#111";
		mode.style.color="#eee";
		center.style.background="#363436";
		second.style.background="1f221e";
		state=false;
	}
	else{
		body.style.background="#1c1f1c";
		clock.className="clock1";
		mode.innertext="light mode";
		mode.style.background="#eee";
		mode.style.color=#111;
		center.style.background="#cbc";
		second.style.background="#e2e1f6";
		state=true;
	}
}
setInterval()=>{
	d = new date();
	htime=d.gethours();
	mtime=d.getminutes();
	stime=d.getseconds();

	hrotation = 30 *htime + mtime/2;
	mrotation = 6* mtime;
	srotation= 6* stime;
	hour.style.transform='rotate(${hrotation}deg)';
	mtime.style.transform='rotate(${mrotation}deg)';
	second.style.transform='rotate(${srotation}deg)';
}, 1000>;
