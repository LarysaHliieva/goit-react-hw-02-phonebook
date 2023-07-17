import { Component } from 'react';

import { nanoid } from 'nanoid';

import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
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

  getFilteredContacts() {
    const { contacts, filter } = this.state;

    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      item =>
        item.name.toLowerCase().includes(normalizedFilter) ||
        item.number.toLowerCase().includes(normalizedFilter)
    );
  }

  render() {
    const { name, number, filter } = this.state;

    const filteredContacts = this.getFilteredContacts();

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
        <label className={styles.label}>
          Find contacts by name
          <input
            className={styles.input}
            onChange={this.hangleChange}
            type="text"
            name="filter"
            value={filter}
          />
        </label>
        <ul>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
