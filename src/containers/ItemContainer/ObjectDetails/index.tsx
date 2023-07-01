import React, { FC } from 'react';
import { ItemType } from 'types';
import cn from 'classnames';

import styles from './styles.module.scss';
import { dateFormat } from '../../../utils';

interface Props {
  object?: ItemType;
}
const isDate = (value: string): boolean => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;

  return dateRegex.test(value) || dateTimeRegex.test(value);
};

export const ObjectDetails: FC<Props> = ({ object }) => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const formatValue = (value: any, depth: number) => {
    if(value === null) {
      return '';
    }
    if (typeof value === 'object') {
      return (
        <div style={{ marginLeft: `${depth * 10}px` }}>
          {Object.entries(value).map(([key, val]) => (
            <div key={key}>
              <span>
                {key}
                :
              </span>
              {formatValue(val, depth + 1)}
            </div>
          ))}
        </div>
      );
    }
    if (typeof value === 'boolean') {
      return (
        <span
          className={cn({
            [styles.green]: value,
            [styles.red]: !value,
          })}
        >
          {value.toString()}
        </span>
      );
    }
    if (typeof value === 'string' && value.startsWith('http')) {
      return (
        <a
          href={value}
          className={styles.link}
        >
          {value}
        </a>
      );
    }
    if (typeof value === 'string' && isDate(value)) {
      return <span>{dateFormat(value)}</span>;
    }
    return <span>{value}</span>;
  };

  return (
    <div className={styles.object_detail_container}>
      {object && Object.entries(object).map(([key, value]) => (
        <div key={key}>
          <span>
            {key}
            :
          </span>
          {formatValue(value, 1)}
        </div>
      ))}
    </div>
  );
};

export default ObjectDetails;
