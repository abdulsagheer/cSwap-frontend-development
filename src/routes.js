import Assets from "./containers/Assets";
import Farm from "./containers/Farm";
import FarmDetails from "./containers/Farm/Details";
import Govern from "./containers/Govern";
import GovernDetails from "./containers/Govern/Details";
import Balances from "./containers/MyHome";
import Swap from "./containers/Swap";
import Dashboard from "./containers/Dashboard";
import Overview from "./containers/Dashboard/Overview";
import Pools from "./containers/Dashboard/Pools";
import Tokens from "./containers/Dashboard/Tokens";
import PoolDetails from "./containers/Dashboard/Pools/Details";
import TokenDetails from "./containers/Dashboard/Tokens/Details";

const routes = [
	{
		path: "/trade",
		element: <Swap />,
	},
	{
		path: "/assets",
		element: <Assets />,
	},
	{
		path: "/farm",
		element: <Farm />,
	},
	{
		path: "/govern",
		element: <Govern />,
	},
	{
		path: "/govern/:id",
		element: <GovernDetails />,
	},
	{
		path: "/portfolio",
		element: <Balances />,
	},
	{
		path: "/farm/:id",
		element: <FarmDetails />,
	},
	{
		path: "dashboard",
		element: <Dashboard />,
	},
	{
		path: "/overview",
		element: (
			<Dashboard>
				<Overview />
			</Dashboard>
		),
	},
	{
		path: "/pools",
		element: (
			<Dashboard>
				<Pools />
			</Dashboard>
		),
	},
	{
		path: "/pools/:id",
		element: (
			<Dashboard>
				<PoolDetails />
			</Dashboard>
		),
	},
	{
		path: "/tokens",
		element: (
			<Dashboard>
				<Tokens />
			</Dashboard>
		),
	},
	{
		path: "/tokens/:id",
		element: (
			<Dashboard>
				<TokenDetails />
			</Dashboard>
		),
	},
];

export default routes;
