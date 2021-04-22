import React from "react";

const IconCard = ({ name, IconComponent }) => {
	console.log(IconComponent);
	return (
		<div className="icon-card">
			<strong>{name}</strong>
			<div>{IconComponent}</div>
		</div>
	);
};

export default IconCard;
