import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
    root: {
        flexGrow: 1,
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
        margin: '50px 0',
        backgroundColor: 'white'
    },
    paper: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
        boxShadow: 'none',
    },
    pageContent: {
        overflow:'auto',
        border: '1px solid black',
        zoom: '0.75',
    },
});

class PageContents extends React.Component{
    constructor(props){
        super(props);
    }

    createMarkup = (pageResult) => {
        return {__html: pageResult};
    }
    onMouseHover = (event) => {
        if (event.type == 'mouseover') {
            event.target.style.background = 'pink';
            event.target.style.color = 'blue';
        }
        if (event.type == 'mouseout') {
            event.target.style.background = '';
            event.target.style.color = '';
        }
    }

    render() {
        const { classes } = this.props;
        console.log('PageContents render()', this.props.pageResult);
        return (
            <div>
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        <Grid item xs={8}>
                            <Paper className={classes.paper}>
                                {this.props.pageResult == '' ? '' : <div className={classes.pageContent} onMouseOver={this.onMouseHover} onMouseOut={this.onMouseHover} dangerouslySetInnerHTML={this.createMarkup(this.props.pageResult)}></div>}
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

PageContents.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageContents);