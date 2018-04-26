
import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import ButtonPageItems from 'components/AntDesign/ButtonPage/index'

class ButtonPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <ButtonPageItems />
      </Page>
    )
  }
}

export default ButtonPage