import { Component } from 'react';

import { nanoid } from 'nanoid';

import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      {
        id: nanoid(),
        name: 'Rosi',
        number: 111 - 11 - 11,
      },

      {
        id: nanoid(),
        name: 'Eden',
        number: 222 - 22 - 22,
      },
    ],
    name: '',
    number: '',
  };

  addContact = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));

    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
      number: '',
    });
  }

  hangleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <div className={styles.phonebook}>
        <h2>Phonebook</h2>
        <form onSubmit={this.addContact} className={styles.phonebook__form}>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              onChange={this.hangleChange}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={styles.label}>
            <input
              className={styles.input}
              onChange={this.hangleChange}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit" className={styles.btn}>
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
