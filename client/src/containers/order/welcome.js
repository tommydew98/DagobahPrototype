import React, {Component} from 'react'
import '../../css/order/menu.css'

class Welcome extends Component {

    render() {
        return (
            <div className="welcome-bg">
                Welcome to DAGOBAH
                <button onClick={()=>this.props.changeView("main")}>Start Ordering Now</button>
            </div>
        );
    }
}

export default Welcome;