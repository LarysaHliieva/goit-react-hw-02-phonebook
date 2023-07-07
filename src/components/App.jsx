import { Component } from 'react';

import styles from './App.module.css';

export class App extends Component {
  render() {
    return (
      <div className={styles.phonebook}>
        <h2>Phonebook</h2>
        <form className={styles.phonebook__form}>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
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
          <li>Rosi</li>
          <li>Eden</li>
          <li>Hermione</li>
        </ul>
      </div>
    );
  }
}
