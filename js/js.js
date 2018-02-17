w = window.innerWidth
	h = window.innerHeight

	colocabolas(20)

	function colocabolas(quantt){
		sv.innerHTML="";
		for(i=0;i<quantt;i++){
			randomX = Math.random()*w;
			randomY = Math.random()*h;
			sv.innerHTML += "<circle cx="+randomX+" cy="+randomY+" r=5 />";
		}

		sv.innerHTML += "<rect id=re x=10 y=10 width="+quad.value+" height="+quad.value+" />";
		sv.innerHTML += "<text id=tx x=20 y=200 fill=red>"+quantidadebolinhasnoquadrado()+"</text>";
	}

	b = 0;


	window.onmousemove=function(e){

		qd = parseInt(quad.value);
		qqt = quantidade.value=boli.value;
		tquadrado.innerHTML = qd;

		boli.onchange=function(){
			colocabolas(qqt);
		}

		re.setAttribute("width",qd);
		re.setAttribute("height",qd);

		quadrado.style.width=qd;
		quadrado.style.height=qd;


		x = e.clientX;
		y = e.clientY;

		if(e.buttons == 1){

			re.setAttribute("x",x-qd/2);
			re.setAttribute("y",y-qd/2);
			tx.setAttribute("x",x-(qd/2)+10);
			tx.setAttribute("y",y-(qd/2)+qd-10);


			areatotal = window.innerWidth*window.innerHeight;

			no = (quantidadebolinhasnoquadrado()*areatotal)/qd;

			tex = areatotal+"<br>";

			tx.innerHTML=quantidadebolinhasnoquadrado();
      
		}
	}

	function quantidadebolinhasnoquadrado(){
		if(typeof(qd) == "undefined")
			qd = 200;

		a = 0;
		for(i=0;i<sv.childElementCount;i++){

			bolX = parseFloat(sv.childNodes[i].getAttribute("cx"));
			bolY = parseFloat(sv.childNodes[i].getAttribute("cy"));

			qx = parseFloat(re.getAttribute("x"));
			qy = parseFloat(re.getAttribute("y"));

			if(bolX >= qx && bolX <= qx+qd && bolY >= qy && bolY <= qy+qd  )
				a++;
		}
		return a;
	}
