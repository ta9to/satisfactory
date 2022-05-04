exports.createSchemaCustomization = ({ actions, schema }) => {
    const { createTypes } = actions
    const typeDefs = `
        type ItemCsv implements Node {
            recipes: [RecipeCsv] @link(by: "output_1_slug", from: "slug")
        }
        type RecipeCsv implements Node {
            output_1_item: ItemCsv @link(by: "slug", from: "output_1_slug")
            input_1_item: ItemCsv @link(by: "slug", from: "input_1_slug")
            input_2_item: ItemCsv @link(by: "slug", from: "input_2_slug")
            input_3_item: ItemCsv @link(by: "slug", from: "input_3_slug")
            input_4_item: ItemCsv @link(by: "slug", from: "input_4_slug")
        }
    `
    createTypes(typeDefs)
}