import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class MainPage extends React.Component{
    getPageResult = () => {
        console.log('getPageResult');
        this.props.getPageResult('https://www.naver.com');
    }

    createMarkup = () => {
        return {__html: this.props.pageResult};
    }
    render() {
        console.log(this.props);
        return(
            <div>
                <button onClick={this.getPageResult}>
                    GetUrl
                </button>
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