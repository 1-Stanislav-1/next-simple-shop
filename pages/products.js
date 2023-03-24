import Layout from "../components/layout";
import styles from "../styles/products.module.scss";

export default function Products({ products }) {

	return <Layout>
		<div className={styles.Products}>
			<h3>Products</h3>
			<ul>
				{products.map(item =>
					<li key={item.id}>
						<div className={styles.badge}>{item.id % 3 ? "top" : "new"}</div>
						<div className={styles.image} style={{ background: `url(${item.image})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}></div>
						<p className={styles.itemName}>{item.title}</p>
						<p className={styles.itemCategory}>{item.category}</p>
					</li>
				)}
			</ul>
		</div>
	</Layout>

}

export async function getStaticProps(context) {

	const response = await fetch("https://fakestoreapi.com/products");
	const products = await response.json();

	return {
		props: { products }
	}

}