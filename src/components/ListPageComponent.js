import '../styles/App.css';
import React, {Component} from 'react';
import RegionList from "./RegionList";
import {connect} from "react-redux";

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
                                id: '1'
                            },
                            {
                                name: 'Aliquam sit',
                                id: '2'
                            },
                            {
                                name: 'Cras nec orci',
                                id: '3'
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
                                id: '4'
                            },
                            {
                                name: 'Aliquam sit',
                                id: '5'
                            },
                            {
                                name: 'Cras nec orci',
                                id: '6'
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
                                id: '7'
                            },
                            {
                                name: 'Aliquam sit',
                                id: '8'
                            },
                            {
                                name: 'Cras nec orci',
                                id: '9'
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
                                id: '10'
                            },
                            {
                                name: 'Aliquam sit',
                                id: '11'
                            },
                            {
                                name: 'Cras nec orci',
                                id: '12'
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
                                id: '13'
                            },
                            {
                                name: 'Aliquam sit',
                                id: '14'
                            },
                            {
                                name: 'Cras nec orci',
                                id: '15'
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
                                id: '16'
                            },
                            {
                                name: 'Aliquam sit',
                                id: '17'
                            },
                            {
                                name: 'Cras nec orci',
                                id: '18'
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
                                id: '19'
                            },
                            {
                                name: 'Aliquam sit',
                                id: '20'
                            },
                            {
                                name: 'Cras nec orci',
                                id: '21'
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
                                id: '22'
                            },
                            {
                                name: 'Aliquam sit',
                                id: '23'
                            },
                            {
                                name: 'Cras nec orci',
                                id: '24'
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
                                id: '25'
                            },
                            {
                                name: 'Aliquam sit',
                                id: '26'
                            },
                            {
                                name: 'Cras nec orci',
                                id: '27'
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
        if (typeof this.props.organization !== "undefined") {
            return false;
        }

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

const mapStateToProps = (state) => ({
    organization: state.app.organization,
});

const mapDispatchToProps = (dispatch) => ({

});

const ConnectedListPageComponent = connect(mapStateToProps, mapDispatchToProps)(ListPageComponent);

export default ConnectedListPageComponent;