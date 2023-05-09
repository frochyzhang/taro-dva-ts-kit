import { Component, PropsWithChildren } from 'react'
import 'taro-ui/dist/style/index.scss'
import './app.scss'
import dva from "./utils/dva";
import models from "./models";
import {Provider} from "react-redux";

const dvaApp = dva.createApp({
  initialState: {},
  models: models
});
const store = dvaApp.getStore();
class App extends Component<PropsWithChildren> {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
        </Provider>
    )
  }
}

export default App
