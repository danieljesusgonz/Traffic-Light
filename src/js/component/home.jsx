import React from "react";
import { Fragment } from "react/cjs/react.production.min";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";
//create your first component
const Home = () => {
	const [selectedColor,setSelectedColor] = useState("");
	return (
		<>
		<div className="palito"></div>
		<div className="traffic-light">
			<div className={selectedColor === "red" ? "red on" : "red"} onClick = {() =>setSelectedColor("red")} ></div>
			<div className={selectedColor === "yellow" ? "yellow on" : "yellow"} onClick = {() =>setSelectedColor("yellow")}></div>
			<div className={selectedColor === "green" ? "green on" : "green"} onClick = {() =>setSelectedColor("green")}></div>
		</div>
		</>
	);
};
 
export default Home;

