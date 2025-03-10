export default function IngredientList(props) {
	const ingredientsList = props.ingredients.map((ingredient) => (
		<li key={ingredient}>{ingredient}</li>
	));

	return (
		<section className="ingredient-con">
			<div className="ingredients-info list-ingredients">
				<h2>Ingredients on hand:</h2>
				<ul aria-live="polite">{ingredientsList}</ul>
			</div>

			{props.ingredients.length >= 4 && (
				<div className="recipe-con">
					<div className="recipe-con-text">
						<h3>Ready for a recipe?</h3>
						<p>Generate a recipe from your list of ingredients.</p>
					</div>
					<div className="recipe-con-btn">
						<button onClick={props.getRecipe}>Get a recipe</button>
					</div>
				</div>
			)}
		</section>
	);
}
