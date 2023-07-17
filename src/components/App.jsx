import { Component } from 'react';

import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  hangleFilter = e => {
    const { value } = e.currentTarget;
    this.setState({
      filter: value,
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
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className={styles.phonebook}>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter hangleFilter={this.hangleFilter} />
        <ContactList items={filteredContacts} />
      </div>
    );
  }
}
