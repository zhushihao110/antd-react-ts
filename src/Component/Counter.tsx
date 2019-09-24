import * as React from "react"
import { Button } from "antd"

import { connect } from "react-redux";

import actions from "Store/actions/counter";

import { Store } from "Store/types";

interface IProps {
    number: number

    add: any

    subtract: any

    name?: string
}

interface IState {
    number: number
}
class Conuter extends React.Component<IProps, IState> {
    state = {
        number: 0
    }
    render () {
        console.log(this.props)
        let { number, add, subtract, name} = this.props
        return(
            <div>
                <p>{name}</p>
                <p>{number}</p>
                <Button type="primary" onClick={add}>+</Button>
                <Button type="primary" onClick={subtract}>-</Button>
            </div>
        )
    }
}


let mapStateToProps = function (state:Store) {
    return state
}

export default connect(
    mapStateToProps,
    actions
)(Conuter);