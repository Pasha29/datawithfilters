import React from 'react';
import { connect } from 'react-redux';
import Filters from './Filters';
import { getFilterDataTC, getDataTC } from './../../Redux/commonReducer';

class FiltersContainer extends React.Component {
    render() {
        return (
            <Filters getDataTC={this.props.getDataTC} getFilterDataTC={this.props.getFilterDataTC}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        filterData: state.common.filterData
    }
}

export default connect(mapStateToProps, { getFilterDataTC, getDataTC })(FiltersContainer);