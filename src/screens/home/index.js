import React, { Component } from 'react';
import HomeScreenContainer from './HomeScreenContainer'


class Home extends Component {
    render() {
        return (
            <HomeScreenContainer {...this.props} />
        )
    }
}


export default Home