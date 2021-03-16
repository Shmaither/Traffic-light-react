import React, { useState } from "react";

//include images into your bundle

//create your first component
export function TrafficLight() {
	const [colorLight, setColor] = useState(null);

	let redGlow = "";
	let yellowGlow = "";
	let greenGlow = "";

	function fAssignedGlow(color) {
		setColor(color);

		redGlow = colorLight === "red" ? "glow" : "";
		console.log(redGlow);
		yellowGlow = colorLight === "yellow" ? "glow" : "";
		console.log(yellowGlow);
		greenGlow = colorLight === "green" ? "glow" : "";
		console.log(greenGlow);
	}

	return (
		<>
			<div className="pole"></div>
			<div className="blackBox">
				<div
					className={"circle red " + redGlow}
					onClick={() => fAssignedGlow("red")}></div>
				<div
					className={"circle yellow " + yellowGlow}
					onClick={() => fAssignedGlow("yellow")}></div>
				<div
					className={"circle green " + greenGlow}
					onClick={() => fAssignedGlow("green")}></div>
			</div>
		</>
	);
}
