import React, { Component } from 'react';
import SPJson from '../data/SP.json';

class SPList extends Component {
    render() {
        return (
            <div>
                <h1>Hello there</h1>
                {SPJson.map((SPJsonData, index)=>{
                    return <h1>{SPJsonData.year} {SPJsonData.totalReturn}</h1>
                })}
            </div>
        )
    }
}

export default SPList;