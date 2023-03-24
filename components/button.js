import Router from "next/router";

export default function Button(props) {

	function goToProductList() {
		Router.push("/products/1");
	}

	return <button className={props.newStyle} onClick={goToProductList}>Shop now</button>

}