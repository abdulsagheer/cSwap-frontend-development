import React from "react";
import "./index.scss";
import Upwards from "../../../../assets/images/upwards.svg";
import cmdx from "../../../../assets/images/tokens/cmdx.svg";
import { Table } from "antd";
import Cmdx from "../../../../assets/images/cmdx.png";
import { Col, Row } from "../../../../components/common";
import Liquidity from "../../../../components/Charts/Liquidity";
import Volume from "../../../../components/Charts/Volume";

const data = [
	{
		key: "1",
		pool: "CMDX/CMST",
		liquidity: "$481,997.4",
		volume: "$20,571.23",
		volumeChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidityChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		fees: "$0.06",
	},
	{
		key: "2",
		pool: "CMDX/CMST",
		liquidity: "$481,997.4",
		volume: "$20,571.23",
		volumeChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidityChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		fees: "$0.06",
	},
	{
		key: "3",
		pool: "CMDX/CMST",
		liquidity: "$481,997.4",
		volume: "$20,571.23",
		volumeChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidityChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		fees: "$0.06",
	},
	{
		key: "4",
		pool: "CMDX/CMST",
		liquidity: "$481,997.4",
		volume: "$20,571.23",
		volumeChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidityChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		fees: "$0.06",
	},
	{
		key: "5",
		pool: "CMDX/CMST",
		liquidity: "$481,997.4",
		volume: "$20,571.23",
		volumeChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidityChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		fees: "$0.06",
	},
	{
		key: "6",
		pool: "CMDX/CMST",
		liquidity: "$481,997.4",
		volume: "$20,571.23",
		volumeChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidityChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		fees: "$0.06",
	},
	{
		key: "7",
		pool: "CMDX/CMST",
		liquidity: "$481,997.4",
		volume: "$20,571.23",
		volumeChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidityChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		fees: "$0.06",
	},
	{
		key: "8",
		pool: "CMDX/CMST",
		liquidity: "$481,997.4",
		volume: "$20,571.23",
		volumeChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidityChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		fees: "$0.06",
	},
	{
		key: "9",
		pool: "CMDX/CMST",
		liquidity: "$481,997.4",
		volume: "$20,571.23",
		volumeChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidityChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		fees: "$0.06",
	},
	{
		key: "10",
		pool: "CMDX/CMST",
		liquidity: "$481,997.4",
		volume: "$20,571.23",
		volumeChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidityChange: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		fees: "$0.06",
	},
];

const columns = [
	{
		title: "Pool",
		dataIndex: "pool",
		key: "pool",
		render: (text, record) => (
			<div
				style={{ cursor: "pointer" }}>
				<img src={Cmdx} alt={"pool"} width="50" />
				<span>{text}</span>
			</div>
		),
	},
	{
		title: "Liquidity",
		dataIndex: "liquidity",
	},
	{
		title: "Volume",
		dataIndex: "volume",
	},
	{
		title: "Volume Change",
		dataIndex: "volumeChange",
	},
	{
		title: "Liquidity Change",
		dataIndex: "liquidityChange",
	},
	{
		title: "Fees",
		dataIndex: "fees",
	},
];

const TokenDetails = () => {
	return (
		<section>
			<h1 className="header">Pool Overview</h1>
			<div className="token-values">
				<div>
					<img src={cmdx} alt={"token"} width="50" />
					<span className="token-header">CMDX</span>
				</div>
				<div className="statistics">
					<div className="token-value">
						<div className="token-header">Price</div>
						<div className="price">$0.0955</div>
					</div>
					<div className="token-value">
						<div className="token-header">Price(24h)</div>
						<div className="price">
							<span className="percentage">
								<img src={Upwards} alt="upwards" width={20} height={30} />
								5.02%
							</span>
						</div>
					</div>
					<div className="token-value">
						<div className="token-header">Volume(24h)</div>
						<div className="price">$20,571.23</div>
					</div>
					<div className="token-value">
						<div className="token-header">Volume(24h) change</div>
						<div className="price">
							<span className="percentage">
								<img src={Upwards} alt="upwards" width={20} height={30} />
								5.02%
							</span>
						</div>
					</div>
					<div className="token-value">
						<div className="token-header">Liquidity</div>
						<div className="price">$75.81M</div>
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
			<div
				style={{
					fontWeight: "600",
					fontSize: "32px",
					lineHeight: "42px",
					color: "#FFFFFF",
					margin: "20px 0",
				}}>
				Pools
			</div>
			<div className="custom-table token-table">
				<Table
					dataSource={data}
					columns={columns}
					className="custom-table pools-table"
					pagination={{
						total: 10,
						showSizeChanger: true,
						defaultPageSize: 5,
						pageSizeOptions: ["5", "10", "20", "50"],
					}}
				/>
			</div>
		</section>
	);
};

export default TokenDetails;
