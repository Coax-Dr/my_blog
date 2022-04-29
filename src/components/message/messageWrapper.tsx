import React from "react";
import MessageContent from "./messageContent";
import { debounce } from "lodash";

interface IMessage {
  content: string;
  type: string;
  key: string;
}

interface IState {
  msgList: IMessage[]
}

class MessageWrapper extends React.Component {

  state: IState = {
    msgList: []
  }

  /**
   * 添加消息
   */
  addMsg = debounce((add: IMessage) => this.setState({ msgList: this.state.msgList.concat(add) }), 2000);

  /**
   * 删除消息
   */
  delMsg = (key: IMessage["key"]) => {
    console.log("删除", key);
    this.setState({ msgList: this.state.msgList.filter(m => m.key !== key) });
  }
  render () {
    const { msgList } = this.state;
    console.log("msgList", msgList)
    return (
      <React.Fragment>
        {msgList.map(m => <MessageContent content={m.content} type={m.type} onDel={() => this.delMsg(m.key)} />)}
      </React.Fragment>
    )
  }
}
export default MessageWrapper;