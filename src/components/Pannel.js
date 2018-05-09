import React, { PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Add from 'material-ui/svg-icons/content/add';
import Remove from 'material-ui/svg-icons/content/remove';
import { grey300 } from 'material-ui/styles/colors';
class Pannel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    handleExpandChange = () => {
        let expanded = this.state.expanded
        this.setState({ expanded: !expanded });
    };

    render() {
        const{ header, content } = this.props;
        return (
            <div className='pannel'>
                <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                    <CardHeader
                        title={header}
                        actAsExpander={true}
                        showExpandableButton={true}
                        openIcon={<Remove />}
                        closeIcon={<Add />}
                        iconStyle={{ left: -10, right: 'auto' }}
                        titleStyle={{ marginLeft: 10 }}
                        textStyle={{ paddingRight: 5, width:'100%' }}
                        style={{ backgroundColor: grey300 }}
                    />
                    <CardText expandable={true}>
                        {content}
                    </CardText>

                </Card>
            </div>
        )
    }
}

Pannel.propTypes = {
    content: PropTypes.any,
    header: PropTypes.any,
    classStyle: PropTypes.array
};

export default Pannel;
