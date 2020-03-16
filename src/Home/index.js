import React from 'react';
import { getProductsData } from '../Utilities/commonMethods';

import './index.css';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productsData: getProductsData(),
            selectedProducts: []
        };
        this.hoverButtonClick = this.hoverButtonClick.bind(this);
    }

    hoverButtonClick(item){
        let selectedProducts = this.state.selectedProducts;
        if(selectedProducts.includes(item.id))
            delete selectedProducts[selectedProducts.indexOf(item.id)]
        else
            selectedProducts.push(item.id);

        this.setState({ selectedProducts: selectedProducts });
    }

    render(){
        console.log('state: ', this.state)
        const { productsData, selectedProducts } = this.state;
        return (
            <React.Fragment>
                <div className="product-container-full">
                    <div className="product-container">
                        {productsData.map((item)=>{
                            return <div className="product-list-view">
                                    <div className="bg-white">
                                        <div className="product-list-thumb">
                                            <div className={selectedProducts.includes(item.id) ? "overlay-active" : "overlay"}>
                                                <span onClick={() => this.hoverButtonClick(item)}>
                                                    {selectedProducts.includes(item.id) ? "REMOVE" : "COMPARE" }
                                                </span>
                                            </div>
                                            <img alt={item.name} className="item-img" src={item.image} />
                                        </div>
                                        <div className="product-footer">
                                            <div className="product-item-name">{item.name}</div>
                                            <div className="product-item-price">{item.price}</div>
                                            <div className="product-item-description">{item.description}</div>
                                        </div>
                                    </div>
                            </div>
                        })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
