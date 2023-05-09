import {Component, PropsWithChildren} from 'react'
import {View, Text} from '@tarojs/components'
import {AtButton} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import {CommonProps} from "../../../@types/common";
import {DvaProps} from "../../../@types/dva";
import {connect} from "react-redux";
import Taro from "@tarojs/taro";


interface ModelProps extends DvaProps, CommonProps {
  iflag?: number,
}

type IProps = ModelProps

interface IStates {
  // 通常用做状态变量 和 model中的state不同
  count: number,
}

@connect(({common, index, loading}) => ({
  ...common,
  ...index,
  loading
}))
export default class Index extends Component<IProps, IStates> {

  constructor(props: IProps) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  onClickAdd = (e: any) => {
    const {count} = this.state
    this.setState({count: count + 1})
    this.props.dispatch({
      type: 'index/test',
      payload: {}
    });
  }

  onClickDec = (e: any) => {
    const {count} = this.state
    this.setState({count: count - 1})
    this.props.dispatch({
      type: 'index/test',
      payload: {}
    });
  }

  render() {
    const {iflag, loading} = this.props
    const {count} = this.state
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton type='primary' onClick={this.onClickAdd}>+</AtButton>
        <AtButton onClick={this.onClickDec}>-</AtButton>
        <View><Text>count:{count} iflag:{iflag}</Text></View>
        <View><Text>Hello, World index
          loading {(loading && loading.effects['index/test']) ? 'doing' : 'did'}</Text></View>
        <AtButton onClick={
          () => {
            Taro.navigateTo({url: '/pages/pop/index'})
          }
        }
        >跳转</AtButton>

      </View>
    )
  }
}
