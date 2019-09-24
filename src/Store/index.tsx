import { createStore } from "redux";
// 引入reducer 
import reducers from "./reducers"
// 创建仓库
let store = createStore(reducers);
// 导出store仓库
export default store;