import Recipe from "./Recipe";

// const RecipeList = ({cakes}) => {
    

//     // const cakes = [
//     //     {
//     //         cakeName: "Lemon Drizzle",
//     //         ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
//     //         rating: 5
//     //     },
//     //     {
//     //         cakeName: "Tea Loaf",
//     //         ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
//     //         rating: 3
//     //     },
//     //     {
//     //         cakeName: "Brownie",
//     //         ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
//     //         rating: 4
//     //     },
//     //     {
//     //         cakeName: "Carrot Cake",
//     //         ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
//     //         rating: 5
//     //     }
//     // ]






//     return (
//         <>
//             <section>
//                 {
//                     cakes.map((cake, index) => {
//                         return(
//                             <div key={index}>
//                                 <h3>{cake.cakeName}</h3>
//                                 <ul>
//                                     {cake.ingredients.map((ingredients, index) => {
//                                         return(
//                                             <li key={index}>{ingredients}</li>
//                                         )
//                                     })}
//                                 </ul>
//                             </div>
//                         )
//                     })
//                 }
//             </section>
//             <section>
//                 <h4>Average cake rating: </h4>
//                 <p>{(cakes.reduce((total, cake) => total + cake.rating, 0) / cakes.length)}</p>
//             </section>
//         </>
//     )

// }

const RecipeList = ({cakes})=> {
    //console.log(cakes);
    return (
        <>
            <h3>Hello from CakeList</h3>
            {
                cakes.map((cake, index)=> {
                    return <Recipe key={index} cakeName={cake.cakeName} ingredients={cake.ingredients} rating={cake.rating} />
                })
            }
        </>
    );
}

export default RecipeList;


//