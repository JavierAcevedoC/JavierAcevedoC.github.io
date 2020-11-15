import React from 'react';
import './portfolio.sass';
import { IPortfolio } from '../../types/portfolio.interface';
export class Portfolio extends React.Component<IPortfolio, IPortfolio> {
    constructor (props: IPortfolio) {
        super(props);
        this.setPropertiesPortfolio(props);        
    }

    private setPropertiesPortfolio(props: IPortfolio): void {
        this.state = {
            name: props.name,
            url: !!props.url ? props.url : '',
            company: props.company,
            date: !!props.date ? props.date : ''
        };
    }

    public render() {
        return <div className="portfolio">
            <h2 className="title">{this.state.company}</h2>
            <img src={this.state.url} alt=""/>
            <h3 className="subtitle">{this.state.name}</h3>
            <h3 className="subtitle2">{this.state.date}</h3>
        </div>
    }
}



