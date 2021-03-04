import React from 'react';
import { connect } from 'react-redux';
import MainBlock from './MainBlock';
import { getDataTC } from './../../Redux/commonReducer';

class MainBlockContainer extends React.Component {
    componentDidMount() {
        this.props.getDataTC();
    }
    render() {
        return this.props.filterData && this.props.filterData.length > 0 ?
            <MainBlock arrayRecievedUsers={ this.props.filterData } /> :
            <MainBlock arrayRecievedUsers={ this.props.arrayRecievedUsers } />;
    }
}

let mapStateToProps = (state) => {
    return {
        filterData: state.common.filterData,
        arrayRecievedUsers: state.common.arrayRecievedUsers
    }
}

export default connect(mapStateToProps, { getDataTC })(MainBlockContainer);