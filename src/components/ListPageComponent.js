import '../styles/App.css';
import React, {Component} from 'react';
import RegionList from "./RegionList";

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
                                link: 'temp'
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





export default ListPageComponent;