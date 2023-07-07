import { Component } from 'react';

import { nanoid } from 'nanoid';

import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      {
        id: nanoid(),
        name: 'Rosi',
      },

      {
        id: nanoid(),
        name: 'Eden',
      },
    ],
    name: '',
  };

  addContact = e => {
    e.preventDefault();

    const { name } = this.state;
    const newContact = {
      id: nanoid(),
      name,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));

    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
    });
  }

  hangleChange = e => {
    const { value } = e.currentTarget;
    this.setState({
      name: value,
    });
  };

  render() {
    const { contacts, name } = this.state;
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

          <button type="submit" className={styles.btn}>
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}