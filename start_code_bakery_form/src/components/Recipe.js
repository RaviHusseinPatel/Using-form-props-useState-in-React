

const Recipe = ({cakeName, ingredients, rating}) => {
    return (
        <div className="cake">
            <header>Cake: {cakeName} </header>
            <main>
                <ul>
                    <li>Ingredients: {ingredients}</li>
                    <li>Rating: {rating}</li>
                </ul>
            </main>
        </div>
    )
}

export default Recipe;