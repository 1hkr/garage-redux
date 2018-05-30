import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Aside from '../components/aside';
import { fetchCars } from '../actions/index';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  render () {
    if (this.props.cars.length === 0) {
      return [
        <Aside key="aside" garage={this.props.garage} />,
        <div className="no-car" key="nocar">No car yet</div>
      ];
    }

    return [
      <Aside key="aside" garage={this.props.garage} />,
      <div className="list-container">
        {this.props.cars.map((car) => {
          return (
            <div className="car-smallad">
              <img className="car-logo" src="assets/images/logo_square.svg" alt="car" />
              <div className="car-details">
                <span key={car.id}> {car.brand} - {car.model} </span>
                <ul>
                  <li><strong>Owner:</strong> {car.owner}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
