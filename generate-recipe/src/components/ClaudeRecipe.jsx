import ReactMarkdown from "react-markdown";
export default function ClaudeRecipe(props) {
	return (
		<article
			className="suggested-recipe-con list-ingredients"
			aria-live="polite"
		>
			<ReactMarkdown>{props.recipe}</ReactMarkdown>
		</article>
	);
}
