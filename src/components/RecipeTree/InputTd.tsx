import React from "react";
import RecipeComponent from "../recipe";

const RecipeTreeInputTd: React.FC<any> = (props) => {
    return (
        <>
            <td className={"border border-gray-400 px-4 py-2"}>
                <img width={40} src={props.inputItem.image} alt={props.inputItem.name} />
                <p>{props.flow}/m</p>
                <p>{props.inputItem.name_jp}</p>
                <RecipeComponent itemName={props.inputItem.name} itemArray={props.itemArray} />
            </td>
        </>
    )
}

export default RecipeTreeInputTd
