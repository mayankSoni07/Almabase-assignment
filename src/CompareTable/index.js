import React from 'react';

import './index.css';

class CompareTable extends React.Component {
    render(){
        console.log('compare table: ', this.props, this.state)
        const { selectedProducts, selectedProductsKeys, renderTableContent } = this.props;
        return (
            <React.Fragment>
                <table>
                    <tbody>
                        <tr>
                            <th>FILTERS</th>
                            { selectedProductsKeys.map((item) => <th key={item}>{selectedProducts[item].name}</th>) }
                        </tr>
                        {Object.keys(renderTableContent).map((key)=>{
                            return <tr key={key}>
                                <td>{key}</td>
                                {renderTableContent[key].map((item)=>{
                                    return <td key={key+Math.random()}>{typeof item == "object" ? item.join(", ") : item}</td>
                                })}
                            </tr>
                        })}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default CompareTable;
