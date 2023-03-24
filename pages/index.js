import Layout from "../components/layout";
import Button from "../components/button";
import styles from "../styles/main.module.scss";
import buttonStyles from "../styles/button.module.scss";

export default function MainPage() {

	function getRandomStile() {
		const stylesArray = [buttonStyles.defaultButton, buttonStyles.anotherButton, buttonStyles.someDifferentButton];
		const styleNumber = Math.floor(Math.random() * 3)
		return stylesArray[styleNumber];
	}

	return <Layout>
		<div className={styles.Main}>
			<h3>Main page</h3>
			<p>Welcome! Your are on the main page of this super shop.</p>
			<Button newStyle={getRandomStile()}/>
		</div>
	</Layout>

}