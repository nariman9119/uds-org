import '../styles/App.css';
import React, {Component} from 'react';
import Region from "./Region";


class RegionList extends Component {
    render() {
        return (
            <div className="list-region col-3">
                <h3 className="list-region-header">{this.props.regionList.name}</h3>
                <div className="list-region-inner-wrapper">
                    {this.props.regionList.regions.map((region, i) => {
                        return (<Region key={i} name={region.name} organizations={region.organizations}/>)
                    })}
                </div>
            </div>
        );
    }
}

export default RegionList