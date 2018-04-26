
import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import ListPageItems from 'components/AntDesign/ListPage/index'

class ListPage extends React.Component {
  static defaultProps = {
    pathName: 'List',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - List" />
        <ListPageItems />
      </Page>
    )
  }
}

export default ListPage