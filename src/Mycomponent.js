import React from 'react';
import ReactDOM from 'react-dom'

class Mycomponent extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            num : 0,

        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                num : this.state.num + 0.1,

            })
            
        }, 3000);
        
    }
    render(){
        return(
            <div>
            <h1>{this.state.num}</h1>

            </div>
        )
    }

}

export default Mycomponent;