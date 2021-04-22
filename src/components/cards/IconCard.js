import React from "react";

const IconCard = ({ name, children }) => {
	return (
		<div className="icon-card">
			<strong>{name}</strong>
			<div>{children}</div>
		</div>
	);
};

export default IconCard;
