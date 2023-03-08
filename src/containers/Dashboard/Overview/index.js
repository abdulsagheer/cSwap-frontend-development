import React from "react";
import "./index.scss";
import Swap from "../../../assets/images/cSwap-light-logo.svg";
import Upwards from "../../../assets/images/upwards.svg";

const Overview = () => {
	return (
		<section>
			<h1 className="header">Overview - cSwap</h1>
			<div className="stats-values">
				<div>
					<img src={Swap} alt="swap" width={100} />
				</div>
				<div className="statistics">
					<div className="stats-value">
						<div className="stat-header">Total Value Locked</div>
						<div className="price">$327.56M</div>
					</div>
					<div className="stats-value">
						<div className="stat-header">24 hrs volume</div>
						<div className="price">
							$27,328,015
							<span className="percentage">
								<img src={Upwards} alt="upwards" />
								5.02%
							</span>
						</div>
					</div>
					<div className="stats-value">
						<div className="stat-header">CMDX Price</div>
						<div className="price">
							$0.0955
							<span className="percentage">
								<img src={Upwards} alt="upwards" />
								5.02%
							</span>
						</div>
					</div>
					<div className="stats-value">
						<div className="stat-header">24 hrs volume change</div>
						<div className="price">$12.34k</div>
					</div>
					<div className="stats-value">
						<div className="stat-header">Interchain Transfers</div>
						<div className="price">1234k</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Overview;
