// 导入类型校验的接口
// 用来约束state的
import { Store }  from "../types"
// 导入约束action的接口
import { Action } from "../actions/counter"
// 引入action动作行为的常量
import * as types from "../actions-type"

let initState: Store = { number : 0}

export default function (state: Store=initState, action: Action) {
    switch(action.type) {
        case types.ADD:
            // 当action动作行为是ADD的时候，给number加1
            return { number: state.number + 1 }
        case types.SUBTRACT:
            // 当action动作行为是SUBTRACT的时候，给number减1
            return { number:state.number - 1 }
        default:
            // 当没有匹配到则返回原本的state
            return state
    }
}