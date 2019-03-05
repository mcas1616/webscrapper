import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
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
    textFiled : {
        margin: '8px',
        padding: '10, 14',
        width: '100%',
    },
    button: {
        position: 'absolute',
        top: '0',
        right: '0',
        margin: '0',
        height: '100%'
    },
});

class InputUrl extends React.Component{
    constructor(props){
        super(props);
        this.state = {url: ''};
    }

    render() {
        const { classes } = this.props;
        return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                            <div>Page URL</div>
                            <TextField
                                id="outlined-bare"
                                className={classes.textField}
                                onChange={(e)=>(this.setState({url:e.target.value}))}
                                fullWidth
                                placeholder="http(s)://"
                                margin="normal"
                                variant="outlined"
                                style={{backgroundColor: 'white'}}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Button variant="contained" color="primary" className={classes.button} onClick={() => this.props.getPageResult(this.state.url)}>
                                                LOAD
                                            </Button>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
        );
    }
}

InputUrl.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputUrl);