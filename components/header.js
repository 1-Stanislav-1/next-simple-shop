import Link from "next/link";

export default function Header() {

	return <div className="Header">
		<h1>Simple shop</h1>
		<nav className="Header-navigation">
			<Link href="/">Main page</Link>
			<Link href="/products">ALL Products list</Link>
		</nav>
	</div>

}