import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';
import Aside from '../components/aside';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(values, (car) => {
      this.props.history.push('/');
      return car;
    });
  }

  render() {
    return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/">Back to list</Link>
      </Aside>,
      <div className="form-container" style={{ backgroundImage: "url('/assets/images/form.jpg')" }}>
        <div className="overlay" />

        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <label htmlFor="InputBrand">Brand</label>
            <Field
              label="Brand"
              name="brand"
              type="text"
              component="input"
              className="form-control"
              placeholder="Renault"
            />
          </div>

          <div className="form-group">
            <label htmlFor="InputModel">Model</label>
            <Field
              label="Model"
              name="model"
              type="text"
              component="input"
              className="form-control"
              placeholder="R5"
            />
          </div>

          <div className="form-group">
            <label htmlFor="InputOwner">Owner</label>
            <Field
              label="Owner"
              name="owner"
              type="text"
              component="input"
              className="form-control"
              placeholder="Michel Flantier"
            />
          </div>

          <div className="form-group">
            <label htmlFor="InputPlate">Plate</label>
            <Field
              label="Plate"
              name="plate"
              type="text"
              component="input"
              className="form-control"
              placeholder="XXXXXX"
            />
          </div>

          <button
            className="btn btn-primary"
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Create Car
          </button>
        </form>
      </div>
    ];
  }
}

export default reduxForm({ form: 'newCarForm' })(
  connect(null, { createCar })(CarsNew)
);
