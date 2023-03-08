import "./index.scss";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const SubHeader = () => {
	return (
		<Menu mode="horizontal" className="navbar">
			<Menu.Item key="overview" className="navbar-item">
				<Link to="/overview">Overview</Link>
			</Menu.Item>
			<Menu.Item key="pools" className="navbar-item">
				<Link to="/pools">Pools</Link>
			</Menu.Item>
			<Menu.Item key="tokens" className="navbar-item">
				<Link to="/tokens">Tokens</Link>
			</Menu.Item>
		</Menu>
	);
};

export default SubHeader;
