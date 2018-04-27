import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import PaginationItems from 'components/AntDesign/Pagination/index'

class PaginationPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <PaginationItems />
      </Page>
    )
  }
}

export default PaginationPage