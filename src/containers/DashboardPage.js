import React from 'react';
import { cyan600, pink600, purple600, orange600 } from 'material-ui/styles/colors';
import globalStyles from '../styles';
import Data from '../data';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import FontAwesome from 'react-fontawesome';
import Breadcrumb from '../components/Breadcrumb';
const style = {
  height: 150,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
const well = { paddingTop: 35, paddingBottom: 10 }
const DashboardPage = () => {

  return (
    <div>
      <Breadcrumb active='Dashboard' inactive={[]} />

      <div className="row">

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <Paper style={style} zDepth={4}> <div style={well}>
            <FontAwesome
              className='super-crazy-colors'
              name='calculator'
              size='4x'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', paddingBottom: 10, paddingLeft: 6 }}
            /> <br />
            <Link to='/calulator' className="inactiveBread">Calulator</Link>
          </div>
          </Paper>
        </div>


        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
        <Paper style={style} zDepth={4}> <div style={well}>
            <FontAwesome
              className='super-crazy-colors'
              name='check-square'
              size='4x'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', paddingBottom: 10, paddingLeft: 6 }}
            /> <br />
            <Link to='/calulator' className="inactiveBread">Approval Form</Link>
          </div>
          </Paper>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
        <Paper style={style} zDepth={4}> <div style={well}>
            <FontAwesome
              className='super-crazy-colors'
              name='file'
              size='4x'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', paddingBottom: 10, paddingLeft: 6 }}
            /> <br />
            <Link to='/calulator' className="inactiveBread">Process</Link>
          </div>
          </Paper>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">

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

export default DashboardPage;
