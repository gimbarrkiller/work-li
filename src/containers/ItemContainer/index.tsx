import React, { FC, memo } from 'react';
import cn from 'classnames';

import { ItemType } from 'store/list/types';

import ObjectDetails from './ObjectDetails';

import styles from './styles.module.scss';

type ItemContainerProps = {
  activeItem?: ItemType;
};

export const ItemContainer: FC<ItemContainerProps> = memo(({ activeItem }) => (
  <div
    className={cn(styles.item_container, {
      [styles.item_container_content]: activeItem,
    })}
  >
    {activeItem ? (
      <ObjectDetails object={activeItem} />
    ) : (
      <p className={styles.item_container_text}>
        Выберите  объект
      </p>
    )}
  </div>
));
