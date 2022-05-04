import React from "react"
import { graphql } from "gatsby"
import RecipeComponent from "../../components/recipe";
import ItemArray from "../../domain/Item/ItemArray";

const ItemPage: React.FC<any> = ({ data }) => {
    const itemArray = new ItemArray()
    data.allItemCsv.edges.forEach((item:any) => itemArray.push(item.node))

    return (
        <main>
            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
            <h1>{data.itemCsv.name_jp}</h1>
            <img src={data.itemCsv.image} />
            <RecipeComponent itemName={data.itemCsv.name} itemArray={itemArray} />
        </main>
    )
}

export default ItemPage

export const query = graphql`
query($slug: String){
  itemCsv(slug: {eq: $slug}) {
    name
    name_jp
    image
  }
  allItemCsv {
    edges {
      node {
        id
        image
        name
        name_jp
        slug
        recipes {
          id
          input_1_flow
          input_1_slug
          input_2_flow
          input_2_slug
          input_3_flow
          input_3_slug
          input_4_flow
          input_4_slug
          output_1_flow
          output_1_slug
          input_1_item {
            image
            name_jp
            name
          }
          input_2_item {
            image
            name
            name_jp
          }
          input_3_item {
            image
            name
            name_jp
          }
          input_4_item {
            name
            name_jp
            image
          }
          output_1_item {
            image
            name
            name_jp
          }
        }
      }
    }
  }
}
`
