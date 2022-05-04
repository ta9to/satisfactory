import * as React from "react"
import { graphql, PageProps, Link } from "gatsby"

const IndexPage = (
    { data: { allItemCsv } }: PageProps<any>
) => {
    return (
        <main>
            <table>
                <thead>
                <tr><th>#</th><th>name</th></tr>
                </thead>
                <tbody>
                {allItemCsv.edges.map((item: any) => (
                    <tr key={item.node.id}>
                        <td><img width='40' src={item.node.image} alt={item.node.name} /></td>
                        <td><Link to={`/items/${item.node.slug}`}>{item.node.name_jp}</Link></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </main>
    )
}

export default IndexPage

export const IndexQuery = graphql`
query MyQuery {
  allItemCsv {
    edges {
      node {
        id
        name
        slug
        name_jp
        image
        description
      }
    }
  }
}
`