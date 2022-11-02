import React from "react";
import ReactDOM from "react-dom/client";
import App from "./container/App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const url = process.env.REACT_APP_FRONT_URL;
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				<Auth0Provider
					domain={domain}
					clientId={clientId}
					redirectUri={`${url}/menu`}
				>
					<App />
				</Auth0Provider>
			</React.StrictMode>
		</BrowserRouter>
	</Provider>
);
