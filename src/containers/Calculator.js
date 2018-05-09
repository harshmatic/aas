import React from 'react';
import { cyan600, pink600, purple600, orange600 } from 'material-ui/styles/colors';
import globalStyles from '../styles';
import Data from '../data';
import { Link } from 'react-router';
import Breadcrumb from '../components/Breadcrumb';
import { blue500 } from 'material-ui/styles/colors';
import AvPlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';
import Pannel from '../components/Pannel';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const iconStyles = {
    marginTop: 24,
};
const Calculator = () => {
    let header = <table style={{ width: '100%' }}>
        <thead>
            <th>aassdf</th>
            <th>aassdf</th>
            <th>aassdf</th>
            <th>aassdf</th>
            <th>aassdf</th>
        </thead>
    </table>
    let content = <Table selectable={false}>
        
        <TableBody displayRowCheckbox={false}>
            <TableRow>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>John Smith</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
                <TableRowColumn>John Smith</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn>Randal White</TableRowColumn>
                <TableRowColumn>Unemployed</TableRowColumn>
                <TableRowColumn>John Smith</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>3</TableRowColumn>
                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
                <TableRowColumn>John Smith</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>4</TableRowColumn>
                <TableRowColumn>Steve Brown</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
                <TableRowColumn>John Smith</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>5</TableRowColumn>
                <TableRowColumn>Christopher Nolan</TableRowColumn>
                <TableRowColumn>Unemployed</TableRowColumn>
                <TableRowColumn>John Smith</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
        </TableBody>
    </Table>;
    return (
        <div>
            <Breadcrumb active='Calculator' inactive={['Home']} />

            <div className="row">

                <div className="col-lg-12">
                    <h1>Calculator</h1>
                </div>

                <div className="col-lg-12">
                    Search Criteria
                </div>

                <div className="col-md-12 plan">
                    <Pannel header={header} content={content} />
                </div>

                <div className="col-md-12 plan">
                <Pannel header={header} content={content} />
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
                </div>

                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                </div>
            </div>
        </div>
    );
};

export default Calculator;
