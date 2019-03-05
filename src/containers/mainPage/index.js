import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import InputUrl from "../../components/InputUrl";

class MainPage extends React.Component{
    constructor(props){
        super(props);
    }

    createMarkup = () => {
        return {__html: this.props.pageResult};
    }

    render() {
        console.log(this.props);
        return(
            <div>
                <InputUrl getPageResult={this.props.getPageResult}/>
                <div dangerouslySetInnerHTML={this.createMarkup()}>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        pageResult: state.url.get("pageResult")
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPageResult: (url) => {dispatch(actions.getPageResult(url))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);