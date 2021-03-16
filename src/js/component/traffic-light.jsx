import React, { useState } from "react";

//include images into your bundle

//create your first component
export function TrafficLight() {
	const [colorLight, setColor] = useState("red");

	console.log(colorLight);

	return (
		<>
			<div className="pole"></div>
			<div className="blackBox">
				<div
					className="circle red"
					onClick={() => setColor("red")}></div>
				<div
					className="circle yellow"
					onClick={() => setColor("yellow")}></div>
				<div
					className="circle green"
					onClick={() => setColor(() => setColor("green"))}></div>
			</div>
		</>
	);
}
