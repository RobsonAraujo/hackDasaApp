import { connect } from 'react-redux'
import HomeScreen from './HomeScreenComponent'


const mapStateToProps = state => {
  return {
    someState: state.someReducer.someState
  }
}


const HomeScreenContainer = connect(
  mapStateToProps,
  null
)(HomeScreen)

export default HomeScreenContainer