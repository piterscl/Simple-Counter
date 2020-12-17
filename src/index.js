//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.min.css";

//include your index.scss file into the bundle
import "./index.css";

const bodyStyles = {
	background: "black"
};

const cardStyles = {
	background: "#2f2f2f",
	color: "white",
	margin: "10px",
	fontSize: "60px",
	textAlign: "center"
};

Counter.propTypes = {
	numeroUno: PropTypes.string,
	numeroDos: PropTypes.string,
	numeroTres: PropTypes.string,
	numeroCuatro: PropTypes.string,
	numeroCinco: PropTypes.string,
	numeroSeis: PropTypes.string
};

//import your own components
function Counter(props) {
	return (
		<div className="container" style={bodyStyles}>
			<div className="row">
				<div className="col-2" style={cardStyles}>
					<i className="far fa-clock" />
				</div>
				<div className="col" style={cardStyles}>
					{props.numeroSeis % 10}
				</div>
				<div className="col" style={cardStyles}>
					{props.numeroCinco % 10}
				</div>
				<div className="col" style={cardStyles}>
					{props.numeroCuatro % 10}
				</div>
				<div className="col" style={cardStyles}>
					{props.numeroTres % 10}
				</div>
				<div className="col" style={cardStyles}>
					{props.numeroDos % 10}
				</div>
				<div className="col" style={cardStyles}>
					{props.numeroUno % 10}
				</div>
			</div>
		</div>
	);
}

let counter = 0;
setInterval(function() {
	const seis = Math.floor(counter / 10000);
	const cinco = Math.floor(counter / 10000);
	const cuatro = Math.floor(counter / 1000);
	const tres = Math.floor(counter / 100);
	const dos = Math.floor(counter / 10);
	const uno = Math.floor(counter / 1);
	console.log(seis, cinco, cuatro, tres, dos, uno);
	counter++;
	ReactDOM.render(
		<Counter
			numeroUno={uno}
			numeroDos={dos}
			numeroTres={tres}
			numeroCuatro={cuatro}
			numeroCinco={cinco}
			numeroSeis={seis}
		/>,
		document.querySelector("#app")
	);
}, 1000);
