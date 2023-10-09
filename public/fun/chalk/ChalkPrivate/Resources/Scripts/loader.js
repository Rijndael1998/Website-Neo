//Load the classes and files, in order
let synchronousScripts = ['Resources/Scripts/Class/cls_Renderable.js', 'Resources/Scripts/Class/cls_Renderable/cls_Character.js', 'Resources/Scripts/Class/cls_Renderable/cls_LivesDisplay.js', 'Resources/Scripts/Class/cls_Renderable/cls_Particle.js', 'Resources/Scripts/Class/cls_Renderable/cls_Particle/cls_PhysicsParticle.js', 'Resources/Scripts/Class/cls_Renderable/cls_Platform.js', 'Resources/Scripts/Class/cls_Renderable/cls_Platform/cls_TextBox.js', 'Resources/Scripts/Class/cls_Renderable/cls_Platform/cls_WaitingPlatform.js', 'Resources/Scripts/Class/cls_Renderable/cls_Pointer.js', 'Resources/Scripts/Library/p5.sound.min.js', 'Resources/Scripts/Levels/lv_Level_1.js', 'Resources/Scripts/sketch.js'];

var loaded = 0;
var numberOfLoadables = synchronousScripts.length;

function progressBarUpdate() {
	document.getElementById("progress").style.width = (loaded / numberOfLoadables) * 100 + "%";
	if(loaded == numberOfLoadables) {
		document.getElementById("progressBar").style.height = "0";
	} else {
		document.getElementById("progressBar").style.height = "1em";
	}
}

function progressBarIncrement() {
	loaded++;
	progressBarUpdate();
}

function loadNext() {
	progressBarUpdate();
	if(loaded == synchronousScripts.length) {
		progressBarUpdate();
		return false;
	}

	let script_DOM_element = document.createElement("script");
	script_DOM_element.src = synchronousScripts[loaded];
	script_DOM_element.addEventListener("load", loadNext); //loads files in order recursively
	console.log("added " + script_DOM_element.src);
	document.body.appendChild(script_DOM_element); //adds scripts to the bottom of the body tag
	loaded++;
}

loadNext();