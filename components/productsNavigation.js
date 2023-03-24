import Link from "next/link";
import {useRouter} from "next/router";
import styles from "../styles/productsNav.module.scss";

export default function Navigation(props) {

	const {query} = useRouter();

	function getPreviousPage() {
		if (query.page > 1) return Number(query.page) - 1;
		else return 1;
	}

	function getNextPage() {
		if (query.page < props.total) return Number(query.page) + 1;
		else return query.page;
	}

	return <nav className={styles.Navigation}>

		{
			query.page > 1 
			? 
			<Link href={`/products/${getPreviousPage()}`}>Previous page</Link>
			:
			<div>Previous page</div>
		}

		{
			query.page < props.total
			?
			<Link href={`/products/${getNextPage()}`}>Next page</Link>
			:
			<div>Next page</div>
		}
	</nav>

}