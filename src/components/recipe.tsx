import React from "react"
import RecipeTreeOutputTd from "./RecipeTree/OutputTd";
import RecipeTreeInputTd from "./RecipeTree/InputTd";

const RecipeComponent: React.FC<any> = (props) => {
    const _itemCsv = props.itemArray.findByName(props.itemName)
    const _outputItemCsv_1 = props.itemArray.findByName(_itemCsv.recipes[0]?.output_1_item?.name)
    const _inputItemCsv_1  = props.itemArray.findByName(_itemCsv.recipes[0]?.input_1_item?.name)
    const _inputItemCsv_2  = props.itemArray.findByName(_itemCsv.recipes[0]?.input_2_item?.name)
    const _inputItemCsv_3  = props.itemArray.findByName(_itemCsv.recipes[0]?.input_3_item?.name)
    const _inputItemCsv_4  = props.itemArray.findByName(_itemCsv.recipes[0]?.input_4_item?.name)
    const output_1_td = _outputItemCsv_1 ? (<RecipeTreeOutputTd item={_outputItemCsv_1} />) : null
    const input_1_td = _inputItemCsv_1 ? (<RecipeTreeInputTd inputItem={_inputItemCsv_1} flow={_itemCsv.recipes[0].input_1_flow} itemArray={props.itemArray} />) : null
    const input_2_td = _inputItemCsv_2 ? (<RecipeTreeInputTd inputItem={_inputItemCsv_2} flow={_itemCsv.recipes[0].input_2_flow} itemArray={props.itemArray} />) : null
    const input_3_td = _inputItemCsv_3 ? (<RecipeTreeInputTd inputItem={_inputItemCsv_3} flow={_itemCsv.recipes[0].input_3_flow} itemArray={props.itemArray} />) : null
    const input_4_td = _inputItemCsv_4 ? (<RecipeTreeInputTd inputItem={_inputItemCsv_4} flow={_itemCsv.recipes[0].input_4_flow} itemArray={props.itemArray} />) : null
    const th_0 = output_1_td ? (<th className={"border border-gray-400 px-4 py-2 text-gray-800"}>Output1</th>) : null
    const th_1 = input_1_td ? (<th className={"border border-gray-400 px-4 py-2 text-gray-800"}>Input1</th>) : null
    const th_2 = input_2_td ? (<th className={"border border-gray-400 px-4 py-2 text-gray-800"}>Input2</th>) : null
    const th_3 = input_3_td ? (<th className={"border border-gray-400 px-4 py-2 text-gray-800"}>Input3</th>) : null
    const th_4 = input_4_td ? (<th className={"border border-gray-400 px-4 py-2 text-gray-800"}>Input4</th>) : null
    return (
        <table className={"border-separate border-gray-500 "}>
            <thead><tr>{th_0}{th_1}{th_2}{th_3}{th_4}</tr></thead>
            <tbody>
            {_itemCsv.recipes.map((recipe: any) => (
                 <tr key={recipe.id}>
                     {output_1_td}
                     {input_1_td}
                     {input_2_td}
                     {input_3_td}
                     {input_4_td}
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default RecipeComponent