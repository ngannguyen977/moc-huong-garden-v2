import React from 'react';
import ReactDOM from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import { Collapse, Icon } from 'antd';

import { default as renderAnchorBasic } from './Basic/index.js';
import { default as renderAnchorStatic } from './Static/index.js';


const Panel = Collapse.Panel;


class AnchorItems extends React.Component {

  componentDidMount() {
    renderAnchorBasic(ReactDOM, document.getElementById("AnchorBasic"));
renderAnchorStatic(ReactDOM, document.getElementById("AnchorStatic"));

  }

  render() {
    return (
      <div className="AnchorDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Anchor</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card" id="components-anchor-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong className="text-capitalize">Basic</strong>
    </h5>
  </div>
    <div className="card-body pb-0">The simplest usage.
</div>
    <div className="card-body pb-0">
      <div id="AnchorBasic" />
    </div>
    <div className="cat__core__code-collapse">
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header={<span><i className="fa fa-code" style={{ fontSize: 16, color: '#9f9f9f' }}></i><span className="ml-2 text-primary">Show Code</span></span>} key="2" showArrow={false}>
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight} useInlineStyles={true}>
            {`import \{ Anchor \} from 'antd';
const \{ Link \} = Anchor;

ReactDOM.render(
  <Anchor>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>
, mountNode);
`}
          </SyntaxHighlighter>
        </Panel>
      </Collapse>
    </div>
</div>

                  </div>
                  <div className="col-lg-6">
                    <div className="card" id="components-anchor-demo-static">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong className="text-capitalize">Static Anchor</strong>
    </h5>
  </div>
    <div className="card-body pb-0">Do not change state when page is scrolling.
</div>
    <div className="card-body pb-0">
      <div id="AnchorStatic" />
    </div>
    <div className="cat__core__code-collapse">
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header={<span><i className="fa fa-code" style={{ fontSize: 16, color: '#9f9f9f' }}></i><span className="ml-2 text-primary">Show Code</span></span>} key="2" showArrow={false}>
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight} useInlineStyles={true}>
            {`import \{ Anchor \} from 'antd';
const \{ Link \} = Anchor;

ReactDOM.render(
  <Anchor affix=\{false\}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>
, mountNode);
`}
          </SyntaxHighlighter>
        </Panel>
      </Collapse>
    </div>
</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AnchorItems
