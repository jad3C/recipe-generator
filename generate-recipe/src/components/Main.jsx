import React from "react";
import IngredientList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
	const [ingredients, setIngredients] = React.useState([]);

	const addIngredient = (formData) => {
		const newIngredient = formData.get("ingredient");
		setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
	};

	const [recipe, setRecipe] = React.useState("");

	async function getRecipe() {
		const recipeMarkdown = await getRecipeFromMistral(ingredients);
		setRecipe(recipeMarkdown);
	}

	return (
		<main>
			<div className="container">
				<form action={addIngredient} className="add-ingredient-form">
					<input
						type="text"
						placeholder="e.g. chicken"
						aria-label="Add ingredient"
						name="ingredient"
					/>
					<button>+ Add ingredient</button>
				</form>
				{ingredients.length > 0 && (
					<IngredientList ingredients={ingredients} getRecipe={getRecipe} />
				)}
				{recipe && (
					<section className="recipe-recommend">
						<h2>Chef HF Recommends</h2>
						<ClaudeRecipe recipe={recipe} />
					</section>
				)}
			</div>
		</main>
	);
}
