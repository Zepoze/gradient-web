function gradient(){
	document.getElementById("result").style.display="";

	var Fcolor = document.forms["gradient"]["first_color"].value;
	var Scolor = document.forms["gradient"]["second_color"].value;

	if(Fcolor[0]!='#'){
		Fcolor = '#'+Fcolor;
	}

	if(Scolor[0]!='#'){
		Scolor = '#'+Scolor;
	}

	var a = Fcolor.slice(1,3);
	var b = Fcolor.slice(3,5);
	var d = Fcolor.slice(5);
	var e = Scolor.slice(1,3);
	var f = Scolor.slice(3,5);
	var g = Scolor.slice(5);

	var fr = parseInt(a,16);
	var fg = parseInt(b,16);
	var fb = parseInt(d,16);
	var sr = parseInt(e,16);
	var sg = parseInt(f,16);
	var sb = parseInt(g,16);
	
	var steps = document.forms["gradient"]["steps"].value; 
	var dr, dg, db;
	var final = [""];
	for(i=0; i<steps; i++){
		dr = (((steps-1)-i)/(steps-1))*fr+(i/(steps-1))*sr;
		dg = (((steps-1)-i)/(steps-1))*fg+(i/(steps-1))*sg;
		db = (((steps-1)-i)/(steps-1))*fb+(i/(steps-1))*sb;
		
		final[i] = (i+1 + '='+ Math.round(dr) +','+ Math.round(dg) +','+ Math.round(db) +'</br>');
	}
	//console.log(final);
	document.getElementById("result").innerHTML = final.join("");
}