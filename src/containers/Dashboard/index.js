import React from "react";
import SubHeader from "../../components/SubHeader";
import "./index.scss";

const Dashboard = ({ children }) => {
	return (
		<section>
			<SubHeader />
			{children}
		</section>
	);
};

export default Dashboard;
