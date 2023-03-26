import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FormContact.module.css';




export class FormContact extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
   const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: ''});
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={css.form}>Name </label>
        <input
          className={css.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder='Name'
          onChange={this.handleChange}
          value={name}
        />
        <label className={css.formLabel}>Number </label>
        <input
        className={css.formInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder='111-11-11'
          onChange={this.handleChange}
          value={number}
        />
        <button className={css.form_btn} type="submit">Add contact</button>
      </form>
    );
  }
}

FormContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default FormContact;