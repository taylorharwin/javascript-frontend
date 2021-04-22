import React from "react";

const PrimaryButton = ({ name, onClick }) => (
	<button className="button-primary" onClick={onClick} type="button">
		{name}
	</button>
);

export default PrimaryButton;
