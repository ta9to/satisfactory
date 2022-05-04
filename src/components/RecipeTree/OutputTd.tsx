import React from "react";

const RecipeTreeOutputTd: React.FC<any> = (props) => {
    return (
        <td className={"border border-gray-400 px-4 py-2"}>
            <img width={40} src={props.item.image} alt={props.item.name} />
            {/*<p>{props.item.name_jp}</p>*/}
            <p>{props.item.recipes[0].output_1_flow}/m</p>
        </td>
    )
}

export default RecipeTreeOutputTd
