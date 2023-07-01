import React, { CSSProperties, FC, memo } from 'react';
import { VariableSizeList } from 'react-window';
import cn from 'classnames';

import { Loader } from 'components';

import styles from './styles.module.scss';

type ListContainerProps = {
  onClick: (id: string) => void;
  listId: string[];
  isLoadingFullList: boolean;
  activeId?: string;
};
const VirtualizedList: FC<Omit<ListContainerProps, 'isLoadingFullList'>> = ({ listId, onClick, activeId }) => {
  const getItemSize = () => 40;
  const getHeightScreen = () => window.screen.availHeight * 0.95;

  const renderItem = ({ index, style }: { index: number, style: CSSProperties }) => {
    const id = listId[index];

    return (
      <button
        key={id}
        style={style}
        className={cn({ [styles.btn_active]: id === activeId })}
        onClick={() => onClick(id)}
      >
        {id}
      </button>
    );
  };

  return (
    <VariableSizeList
      itemCount={listId.length}
      itemSize={getItemSize}
      height={getHeightScreen()} // Высота контейнера списка
      width="100%" // Ширина контейнера списка
    >
      {renderItem}
    </VariableSizeList>
  );
};

export const ListContainer: FC<ListContainerProps> = memo(({
  onClick,
  isLoadingFullList,
  listId,
  activeId,
}) => (
  <div
    className={cn(styles.list_container, {
      [styles.list_container_loader]: isLoadingFullList,
    })}
  >
    {isLoadingFullList ? (
      <Loader />
    ) : (
      <VirtualizedList
        listId={listId}
        onClick={onClick}
        activeId={activeId}
      />
    )}
  </div>
));
