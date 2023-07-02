import React, {
  FC,
  useCallback,
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFullList, getItemInfo } from 'store/list/actionCreators';
import { listSelectors } from 'store/list/selectors';
import { ListContainer, ItemContainer } from 'containers';

import styles from './styles.module.scss';

export const HomePage: FC = () => {
  const dispatch = useDispatch();
  const { listId, isLoadingFullList, activeItem } = useSelector(listSelectors.getState);

  useEffect(() => {
    dispatch(getFullList());
  }, [dispatch]);

  const onClickItem = useCallback((id: string) => {
    dispatch(getItemInfo({ idItem: id }));
  }, [dispatch]);

  return (
    <div className={styles.home_container}>
      <ListContainer
        onClick={onClickItem}
        listId={listId}
        isLoadingFullList={isLoadingFullList}
        activeId={activeItem?.id}
      />
      <ItemContainer activeItem={activeItem} />
    </div>
  );
};
