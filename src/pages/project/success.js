/**
 * Created by zk on 2018/4/23
 */
import React from 'react';
import { Modal,Icon,Button } from 'antd-mobile';
function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

export default class InvestSuccess extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
        };
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
          [key]: false,
        });
    }
    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
          return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
          e.preventDefault();
        }
    }

    render(){
        return(
            <div className="success-bg padding-sm">
                <div>
                    <Icon type="cross" color="#fff" size="md" onClick={()=>{window.history.go(-1)}} />
                </div>
                <div className="tac">
                    <img height="80" alt="" src={require("assets/images/home/success.jpg")} />
                </div>
                <div className="white-bg padding-sm radius-2">
                    <div className="tac">
                        <span className="fz12">出借金额（元）</span> <br /><br />
                        <strong className="fz24 red-color">30000</strong>
                        <div className="line-font fz12 margin-vertical-sm"><span>恭喜获得</span></div>
                        <div className="table">
                            <table>
                            <tbody>
                                <tr>
                                    <td width="45%" className="tar"><img height="24" alt="" src={require("assets/images/icon/goldcoin.png")} />
                                    </td>
                                    <td width="55%" className="tal">金币600个</td>
                                </tr>
                                <tr>
                                    <td className="tar"><img height="24" alt="" src={require("assets/images/icon/packet.png")} />
                                    </td>
                                    <td className="tal">福袋20元</td>
                                </tr>
                                <tr>
                                    <td className="tar"><img height="24" alt="" src={require("assets/images/icon/gress.png")} />
                                    </td>
                                    <td className="tal">羊草50颗</td>
                                </tr>
                                <tr>
                                    <td className="tar"><img height="21" alt="" src={require("assets/images/icon/gift.png")} />
                                    </td>
                                    <td className="tal">
                                        活动返现21.29元<br />
                                        <span className="fz12 lightgrey-color margin-top">满标计息后到账</span>
                                        </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>

                        <div className="padding-horizontal">
                            <Button className="btn-lg margin-top-sm" type="warning">查看详情</Button>
                        </div>
                        <div className="line-font fz12 margin-vertical-sm"><span>折扣商品</span></div>
                    
                    </div>
                      <div className="goods-item">
                        <img className="goods-item-img" src="https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png" alt="" />
                        <div className="oh">
                          <div className="ellipsis margin-vertical-sm">不是所有的兼职汪都需要风吹日晒不是所有的兼职汪都需要风吹日晒</div>
                          <div>
                            <span className="orange-color">5000金币
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="goods-item">
                        <img className="goods-item-img" src="https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png" alt="" />
                        <div className="oh">
                          <div className="ellipsis margin-vertical-sm">不是所有的兼职汪都需要风吹日晒不是所有的兼职汪都需要风吹日晒</div>
                          <div>
                            <span className="orange-color">5000金币
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="margin-sm tac">
                        <a className="red-color">查看更多</a>
                      </div>

                </div>

                <Modal
                  visible={true}
                  transparent
                  maskClosable={false}
                  onClose={this.onClose('modal')}
                  title={
                        <span className="fz16">交易成功分享红包</span>
                  }
                  footer={[{ text: '关闭', onPress: () => { console.log('ok'); this.onClose('modal')(); } }]}
                  wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                  <div style={{ height: 142, overflow: 'scroll' }}>
                    <div className="red-color margin-vertical-sm">
                        恭喜获得10个红包
                    </div>
                    <div className="gray-color">
                        分享好友可用于抵现哦
                    </div>
                    <div className="padding-horizontal">
                        <Button className="btn-lg margin-top-sm" type="warning">分享好友</Button>
                    </div>
                  </div>
                </Modal>
            </div>

        )
    }
}