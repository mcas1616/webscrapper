import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import InputUrl from "../../components/InputUrl";
import PageContents from "../../components/PageContents";

class MainPage extends React.Component{
    constructor(props){
        super(props);
    }


    render() {
        console.log(this.props);
        return(
            <div>
                <InputUrl getPageResult={this.props.getPageResult} />
                <PageContents pageResult={this.props.pageResult}/>
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