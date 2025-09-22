import Card from "./Card";
import recipesData from "../data/recipes.json"

function Recipes() {
    return (
        <div className="cards-container">
            {recipesData.map(recipe => (
                <Card
                key={recipe.id}
                image={recipe.image}
                title={recipe.title}
                categories={recipe.categories}
                description={recipe.description}
                servings={recipe.servings} />
            ))}
        </div>
    )
}

export default Recipes