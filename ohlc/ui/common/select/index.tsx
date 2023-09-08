import React, { ChangeEvent } from 'react'; 

import styles from './styles.module.css'

const Select = ({ options = [], onChange = (value: string) => {} }) => {
  return (
    <div>
      <select
        onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
        className={styles.container}
      >
        {options.map(({ value, label }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
