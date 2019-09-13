import '../styles/App.css';
import React, {Component} from 'react';


class ListPageComponent extends Component {
    constructor(props) {
        super(props);

        this.getRegionList = this.getRegionList.bind(this)
    }

    getRegionList() {
        return [
            {
                name: 'Lorem ipsum',
                regions: [
                    {
                        name: 'Sed quis auctor',
                        organizations: []
                    },
                    {
                        name: 'Nulla vel',
                        organizations: [
                            {
                                name: 'Ut vel velit',
                                link: '#'
                            },
                            {
                                name: 'Aliquam sit',
                                link: '#'
                            },
                            {
                                name: 'Cras nec orci',
                                link: '#'
                            },
                        ]
                    },
                    {
                        name: 'Sed quis auctor',
                        organizations: []
                    },
                    {
                        name: 'Sed quis auctor',
                        organizations: []
                    },
                    {
                        name: 'Nulla vel',
                        organizations: [
                            {
                                name: 'Ut vel velit',
                                link: '#'
                            },
                            {
                                name: 'Aliquam sit',
                                link: '#'
                            },
                            {
                                name: 'Cras nec orci',
                                link: '#'
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Etiam mattis',
                regions: [
                    {
                        name: 'Sed quis auctor',
                        organizations: []
                    },
                    {
                        name: 'Sed quis auctor',
                        organizations: []
                    },
                    {
                        name: 'Sed quis auctor',
                        organizations: []
                    },
                    {
                        name: 'Sed quis auctor',
                        organizations: []
                    },
                    {
                        name: 'Nulla vel',
                        organizations: [
                            {
                                name: 'Ut vel velit',
                                link: '#'
                            },
                            {
                                name: 'Aliquam sit',
                                link: '#'
                            },
                            {
                                name: 'Cras nec orci',
                                link: '#'
                            },
                        ]
                    },
                    {
                        name: 'Sed quis auctor',
                        organizations: []
                    },
                    {
                        name: 'Nulla vel',
                        organizations: [
                            {
                                name: 'Ut vel velit',
                                link: '#'
                            },
                            {
                                name: 'Aliquam sit',
                                link: '#'
                            },
                            {
                                name: 'Cras nec orci',
                                link: '#'
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Morbi',
                regions: [
                    {
                        name: 'Sed quis auctor',
                        organizations: []
                    },
                    {
                        name: 'Nulla vel',
                        organizations: [
                            {
                                name: 'Ut vel velit',
                                link: '#'
                            },
                            {
                                name: 'Aliquam sit',
                                link: '#'
                            },
                            {
                                name: 'Cras nec orci',
                                link: '#'
                            },
                        ]
                    },
                    {
                        name: 'Sed quis auctor',
                        organizations: []
                    },
                    {
                        name: 'Sed quis auctor',
                        organizations: []
                    },
                    {
                        name: 'Nulla vel',
                        organizations: [
                            {
                                name: 'Ut vel velit',
                                link: '#'
                            },
                            {
                                name: 'Aliquam sit',
                                link: '#'
                            },
                            {
                                name: 'Cras nec orci',
                                link: '#'
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Nam quis',
                regions: [
                    {
                        name: 'Sed quis auctor',
                        organizations: []
                    },
                    {
                        name: 'Nulla vel',
                        organizations: [
                            {
                                name: 'Ut vel velit',
                                link: '#'
                            },
                            {
                                name: 'Aliquam sit',
                                link: '#'
                            },
                            {
                                name: 'Cras nec orci',
                                link: '#'
                            },
                        ]
                    },
                    {
                        name: 'Sed quis auctor',
                        organizations: []
                    },
                    {
                        name: 'Sed quis auctor',
                        organizations: []
                    },
                    {
                        name: 'Nulla vel',
                        organizations: [
                            {
                                name: 'Ut vel velit',
                                link: '#'
                            },
                            {
                                name: 'Aliquam sit',
                                link: '#'
                            },
                            {
                                name: 'Cras nec orci',
                                link: '#'
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Maecenas',
                regions: [
                    {
                        name: 'Sed quis auctor',
                        organizations: []
                    },
                    {
                        name: 'Nulla vel',
                        organizations: [
                            {
                                name: 'Ut vel velit',
                                link: '#'
                            },
                            {
                                name: 'Aliquam sit',
                                link: '#'
                            },
                            {
                                name: 'Cras nec orci',
                                link: '#'
                            },
                        ]
                    },
                    {
                        name: 'Sed quis auctor',
                        organizations: []
                    },
                    {
                        name: 'Sed quis auctor',
                        organizations: []
                    }
                ]
            },
        ];
    }

    render() {
        return (
            <div className="container list-page">
                <div className="col-12">
                    <h1 className="list-page-header">Учреждения досуга и спорта в Москве</h1>
                </div>
                {this.getRegionList().map((regionList, i) => {
                    return (<RegionList key={i} regionList={regionList}/>)
                })}
            </div>
        );
    }
}

class RegionList extends Component {
    render() {
        return (
            <div className="list-region col-3">
                <h3 className="list-region-header">{this.props.regionList.name}</h3>
                <div className="list-region-inner-wrapper">
                    {this.props.regionList.regions.map((region, i) => {
                        console.log(region);
                        return (<Region key={i} name={region.name} organizations={region.organizations}/>)
                    })}
                </div>
            </div>
        );
    }
}

class Region extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpened: false};

        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle() {
        this.setState(state => ({
            isOpened: !state.isOpened
        }));
    }

    render() {
        return (
            <div className="list-single-region">
                <div className={
                    'list-single-region-name '
                    + (this.props.organizations.length > 0 ? 'list-single-region-name-enabled ' : 'list-single-region-name-disabled ')
                    + (this.state.isOpened ? 'list-single-region-name-opened' : 'list-single-region-name-closed')
                } onClick={this.handleToggle}>
                    {this.props.name}
                </div>
                <div className={
                    'list-single-region-organizations '
                    + (this.state.isOpened ? 'list-single-region-organizations-opened' : '')
                }>
                    {this.props.organizations.map((organization, i) => {
                        return (<Organization key={i} name={organization.name} link={organization.link}/>)
                    })}
                </div>
            </div>
        );
    }
}

class Organization extends Component {
    render() {
        return (
            <div className="list-single-organization">
                <a href={this.props.link}>{this.props.name}</a>
            </div>
        );
    }
}

export default ListPageComponent;