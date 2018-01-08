import React, { Component } from 'react'
import Link from './Link'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class LinkList extends Component {

  render() {

    // const linksToRender = [{
    //   id: '1',
    //   description: 'The Coolest GraphQL Backend 😎',
    //   url: 'https://www.graph.cool'
    // }, {
    //   id: '2',
    //   description: 'The Best GraphQL Client',
    //   url: 'http://dev.apollodata.com/'
    // }]

    

    // 1
    if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
      return <div>Loading</div>
    }

    // 2
    if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
      return <div>Error</div>
    }

    // 3
    const linksToRender = this.props.allLinksQuery.allLinks

    return (
      <div>
        {linksToRender.map(link => (
          <Link key={link.id} link={link}/>
        ))}
      </div>
    )
  }

}

const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`

export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery'}) (LinkList)