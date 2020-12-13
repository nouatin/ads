import React from 'react';
import coverage from '../../coverage.json';
const gridStyle = {
    display: "grid",
    gridTemplateColumns: "auto",
    gridColumnGap: "8px",
    gridRowGap: "8px"
}
console.log(coverage);

class Coverage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gridStyle, 
            coverage
        };
    }
    componentDidMount(){
        let columns = coverage.years.reduce((acc, y) => {return acc.concat("22px")}, []);
        columns = "auto " + columns.join(" ");
        this.setState(state => ({gridStyle: {...state.gridStyle, gridTemplateColumns: columns}}));
    }
    toggleBox = (e) => {
        let id = e.target.id;
        console.log(id);
        const [model, year] = id.split("_");
        this.setState(state => ({coverage: {...state.coverage, coverage:{...state.coverage.coverage, 
            [model]: state.coverage.coverage[model].includes(parseInt(year)) ? 
            state.coverage.coverage[model].filter(ele => ele != year) : 
            state.coverage.coverage[model].concat(parseInt(year))}}}));
    }

    render(){
        return (
            <div style={this.state.gridStyle}>
                <div className="logo"><div><img src="/images/acura.png" /></div></div>
                {this.state.coverage.years.map((y, i) => (<div key={i} className="alignY">{y}</div>))}
                {this.state.coverage["vehicle-models"].map((model, i) => {
                    return (<div key={i} style={{gridArea: i + 2 + " / 1"}} className="model" >{model}</div>);
                })}
                {(Object.entries(this.state.coverage.coverage)).reduce((acc, cover) => {
                    let line = this.state.coverage.years.reduce((arr, y) => {
                        return arr.concat([[cover[0] + "_" + y, cover[1].includes(y) ? 1 : 0]])
                    }, []);
                    return acc.concat(line);
                }, []).map(ele => (<div key={ele[0]} id={ele[0]} 
                    style={{backgroundColor: ele[1] === 1 ? "#0c74bc" : "#ececec"}} onClick={this.toggleBox} ></div>))}
            </div>
        )
    }    
}

export default Coverage;