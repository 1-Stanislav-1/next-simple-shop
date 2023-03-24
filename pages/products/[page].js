import {useRouter} from "next/router";
import Layout from "../../components/layout";
import Navigation from "../../components/productsNavigation";
import styles from "../../styles/products.module.scss";

export default function Products({ productsSlice, pagesTotal }) {

	const {query} = useRouter();

	return <Layout>
		<div className={styles.Products}>
			<h3>Products</h3>
			<ul>
				{productsSlice ? productsSlice.map(item => <li key={item.id}>
						<div className={styles.badge}>{item.id % 3 ? "top" : "new"}</div>
						<div className={styles.image} style={{ background: `url(${item.image})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}></div>
						<p className={styles.itemName}>{item.title}</p>
						<p className={styles.itemCategory}>{item.category}</p>
					</li>
				) : ""}
			</ul>
		<Navigation total={pagesTotal}/>
		</div>
	</Layout>
}

export async function getServerSideProps(context) {

	const response = await fetch("https://fakestoreapi.com/products");
	const products = await response.json();
	const currentPage = context.query.page;
	const pagesTotal = Math.ceil((products.length + 1) / 8);
	const productsSlice = products.slice(currentPage * 8 - 8, currentPage * 8);

	return {
		props: { productsSlice, pagesTotal }
	}

}