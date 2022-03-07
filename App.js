import SrcApp from "@app";
import * as React from "react";
import { Provider } from "react-redux";
import { store } from "@redux/store";

function App() {
	return (
		<Provider store={store}>
			<SrcApp />
		</Provider>
	);
}

export default App;
