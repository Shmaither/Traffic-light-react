import React, { useState } from "react";

//include images into your bundle

//create your first component
export function TrafficLight() {
	const [colorLight, setColor] = useState(null);

	return (
		<>
			<div className="pole"></div>
			<div className="blackBox">
				<div
					className={
						"circle red " + (colorLight == "red" ? "glow" : null)
					}
					onClick={() => setColor("red")}></div>
				<div
					className={
						"circle yellow " +
						(colorLight == "yellow" ? "glow" : null)
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						"circle green " +
						(colorLight == "green" ? "glow" : null)
					}
					onClick={() => setColor("green")}></div>
			</div>
		</>
	);
}
