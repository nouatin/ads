import React from 'react';
import Menu from './Menu';
import Coverage from './Coverage';

class Ads extends React.Component{
    constructor(props){
        super(props);        
    }

    render(){
        return (
            <div>
                <Menu />
                <div className="content" >
                    <Coverage />
                </div>
                               
            </div>
        )
    }    
}

export default Ads;