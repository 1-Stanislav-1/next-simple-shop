import Head from "next/head";
import Header from "./header";

export default function Layout({ children }) {

	return <>
		<Head>
			<meta keywords="simple shop"></meta>
			<title>Simple shop</title>
		</Head>
		<Header/>
		<div className="container">
			{children}
		</div>
	</>

}