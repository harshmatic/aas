import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import { blue500 } from 'material-ui/styles/colors';
import AvPlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';

class Breadcrumb extends React.Component {

  render() {
    const {active, inactive} = this.props;
    let len = inactive.length;

    return (
        <div className="row bread">
        {inactive.map((item,i) => 
             {return(
                 <div key={i} style={{display:'flex'}}>
             <Link to='/' activeClassName="inactiveBread">Home</Link>
             {len==i+1?<div  className="ico"><AvPlayCircleOutline color={blue500} /></div>:''}
             </div>
            )
             
             }
        )}            
            <span  className="activeBread">{active}</span>
        </div>
      );
  }
}

Breadcrumb.propTypes = {
  active: PropTypes.string.isRequired,
  inactive: PropTypes.array.isRequired
};

export default Breadcrumb;
