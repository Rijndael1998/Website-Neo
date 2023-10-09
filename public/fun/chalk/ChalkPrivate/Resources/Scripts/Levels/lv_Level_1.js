function lv_Level_1() {
	//////////////////////////////////////////////////////////////
	//////////////////LEVEL DESIGN PLATFORMS//////////////////////
	/////FRAME OF LEVEL///////////////////////
	//////////////////////////////////////////
	for(let i=11; i > -60; i--) {
		addPlatform(-1,i);
		addPlatform(0, i);
		addPlatform(80,i);
		addPlatform(81,i);
	}

	for(let i=9; i>-32; i--) {
		addPlatform(40,i);
	}

	for(let i = 0; i < 80; i++) {
		addPlatform(i,6);
		addPlatform(i,7);
		addPlatform(i,8);
		addPlatform(i,9);
		addPlatform(i,10);
		addPlatform(i,11);
		//addPlatform(round(random(10,200),round(random(3,5))));
	}
	//////////////////////////////////////////
	/////PLATFORMS////////////////////////////
	//////////////////////////////////////////

	//1 square;
	//YELLOW
	addPlatform(1,5);
	addPlatform(3,3);
	addPlatform(4,2);
	addPlatform(1,0);
	addPlatform(23,4);
	addPlatform(23,3);
	addPlatform(22,4);
	addPlatform(31,5);
	addPlatform(24,-7);//
	addPlatform(30,-11);
	addPlatform(36,-28);

	addPlatform(10,-15);
	addPlatform(13,-14);
	addPlatform(17,-7);
	addPlatform(34,-12);

	//BLUE
	addPlatform(79,5);//
	addPlatform(76,3);
	addPlatform(75,-11);
	addPlatform(75,-14);
	addPlatform(74,-22);
	addPlatform(72,-24);
	addPlatform(71,-3);
	addPlatform(68,-3);
	addPlatform(69,-14);
	addPlatform(60,-6);
	addPlatform(59,-27);
	addPlatform(58,-15);
	addPlatform(56,-16);
	addPlatform(52,-22);
	addPlatform(48,-27);
	addPlatform(46,-29);
	addPlatform(43,-24);
	addPlatform(41,-22);
	addPlatform(70,5);
	addPlatform(45,-30);
	addPlatform(50,-25);

	//2 square colisionPlatforms
	for (var i = 0; i < 2; i++) {
		//YELLOW
		addPlatform(7+i,-2);
		addPlatform(9+i,5);
		addPlatform(5+i,3);
		addPlatform(16+i,-3);
		addPlatform(5,-1+i);
		addPlatform(30+i,-23);
		addPlatform(27+i,-9);
		//addPlatform(36,-30+2*i);
		//addPlatform(14,2+i);

		addPlatform(13+i,-9);
		addPlatform(22+i,-11);
		addPlatform(38+i,-14);

		//BLUE
		addPlatform(78+i,1);
		addPlatform(68+i,4);
		addPlatform(74+i,-16);
		addPlatform(70+i,-20);
		addPlatform(69+i,-25);
		addPlatform(67+i,-18);
		addPlatform(57+i,-7);
		addPlatform(51+i,-26);
		addPlatform(44+i,-20);
		addPlatform(41+i,-6);

	}

	//3 square colisionPlatforms
	for (var i = 0; i < 3; i++) {
		//YELLOW
		addPlatform(12,-1+2*i);
		//high
		addPlatform(20+i,-5);
		addPlatform(33+i,-24-i);
		//low
		addPlatform(17+i,2);
		addPlatform(21+i,5);

		addPlatform(4+i, -15);
		addPlatform(33+i, -7);

		//BLUE
		addPlatform(73+i,-1);
		addPlatform(74+i,-5);
		addPlatform(69+i,-10);
		addPlatform(59+i,-24);
		addPlatform(55+3*i,-2);
		addPlatform(53+i,-9);
		addPlatform(45+i,5);
		addPlatform(41+i,2);
		addPlatform(45+3*i,-5+i);
		addPlatform(44+i,-8);
		addPlatform(43+i,-26);
	}

	//4 square colisionPlatforms
	for (var i = 0; i < 4; i++) {
		//YELLOW
		addPlatform(24+i,-21);
		addPlatform(34+i,-18);
		addPlatform(34-i,-30-i);

		addPlatform(1+3*i,-13+i);
		addPlatform(17+i,-14);
		addPlatform(14,-21+2*i);
		addPlatform(36+i,-2);

		addPlatform(36+i,-32);
		addPlatform(41+i,-32);

		//BLUE
		addPlatform(66+i,5);
		addPlatform(63+i,-26);
		addPlatform(56+i,-11);
		addPlatform(47+2*i,0);
		addPlatform(55,-25+2*i);
		addPlatform(56,-26+2*i);


	}

	//8 blocks
	for (var i=0; i<9; i++) {
		addPlatform(18+i,-22+i);
		addPlatform(29,-13+2*i);
		//addPlatform(36+i,-32);

		//BLUE
		addPlatform(46+2*i,3);//
		addPlatform(48+i,-10-i);//

		addPlatform(75,-26+i);//
		addPlatform(79,-23+2*i);//
	}

	for (var i = 0; i<4;i++){
		for (var j=0; j<3; j++) {
			for (var k=0; k<2; k++){
				addPlatform(64-2*j+i,-20+k+4*i+2*j);
			}
		}
	}

	/////////////////SIGNS TEXT BOXES
	//renderableBottom.push(new TextBox(3,5,"Objective: Go UP"));
	addTextbox(3,5,"Objective: Hop in the box");
	addTextbox(8,-3,"Hint: It's higher UP");
	addTextbox(12,5,"HARD jumps");
	addTextbox(24,5,"Stuck?");
	addTextbox(29,5,"HARDER jumps");
	addTextbox(5,-16,"Just a bit more.");
	addTextbox(38,-15,"This platform's got your back.");
	addTextbox(38,-33,"'C' to change player");    

	//renderableBottom.push(new TextBox(29,-12,"Why?"));//(top of harder jumps)
	addTextbox(77,5,"Meet Yellow.");
	addTextbox(68,3,"Hint: UP.");
	addTextbox(79,-24,"Wrong way.");
	addTextbox(52,-23,"Just a bit more.");

	//////////////////////////////////////////
	/////END of LEVEL DESIGN//////////////////
	//////////////////////////////////////////
}