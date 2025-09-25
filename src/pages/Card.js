import React from "react";

function Card({image, title, categories, description, servings}) {
    return (
        <div className="recipe-card">
            <img src={image} alt={title} className="recipe-img" loading="lazy" />
            <div className="recipe-card-content">
                <h2>{title}</h2>
                <div className="categories">
                    {categories.map((category, index) => (
                        <span key={index} className="category">{category}</span>
                    ))}
                </div>
                <p>{description}</p>
                <div className="foot">
                    <p className="servings">Serves {servings} people</p>
                    <button className="see-more">View Recipe</button>
                </div>
            </div>
        </div>
    )
}

export default Card