import React from 'react';
import ReactDOM from 'react-dom';

class Mycomponent2 extends React.Component
{    
    constructor(props)
    {
        super(props);
        this.state = {
            message : '이것은 Mycomponent2 입니다.' 
        }
    }   

    handleOnChange = (e) => {
        this.setState({
            message : e.target.value
        });
    }

    render(){
        return(
            <div>
                <input 
                    type = "text" 
                    name = "message" 
                    onChange = {this.handleOnChange} 
                />
                <h1>
                    {this.state.message}
                </h1>
            </div>
        )
    }
}

export default Mycomponent2;