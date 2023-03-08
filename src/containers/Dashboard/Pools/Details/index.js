import React from "react";
import "./index.scss";
import Upwards from "../../../../assets/images/upwards.svg";
import Cmdx from "../../../../assets/images/cmdx.png";
import { Col, Row } from "../../../../components/common";
import Liquidity from "../../../../components/Charts/Liquidity";
import Volume from "../../../../components/Charts/Volume";

const PoolDetails = () => {
	return (
		<section>
			<h1 className="header">Pool Overview</h1>
			<div className="pool-values">
				<div>
					<img src={Cmdx} alt={"pool"} width="100" />
					<span className="pool-token">CMDX/CMST</span>
					<span className="pool-price">1 CMDX = 0.093064 CMST</span>
				</div>
				<div className="statistics">
					<div className="pool-value">
						<div className="pool-header">Liquidity</div>
						<div className="price">$67,749.3</div>
					</div>
					<div className="pool-value">
						<div className="pool-header">Liquidity(24h) change</div>
						<div className="price">
							<span className="percentage">
								<img src={Upwards} alt="upwards" width={20} height={30} />
								5.02%
							</span>
						</div>
					</div>
					<div className="pool-value">
						<div className="pool-header">Volume(24h)</div>
						<div className="price">$20,571.23</div>
					</div>
					<div className="pool-value">
						<div className="pool-header">Volume(24h) change</div>
						<div className="price">
							<span className="percentage">
								<img src={Upwards} alt="upwards" width={20} height={30} />
								5.02%
							</span>
						</div>
					</div>
					<div className="pool-value">
						<div className="pool-header">Fees</div>
						<div className="price">0.2%</div>
					</div>
				</div>
			</div>
			<div className="header">CMDX - Volume & Liquidity</div>
			<Row className="graphs">
				<Col>
					<Liquidity />
				</Col>
				<Col>
					<Volume />
				</Col>
			</Row>
		</section>
	);
};

export default PoolDetails;
