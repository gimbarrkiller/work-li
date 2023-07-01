export interface ListState {
  listId: string[],
  fullList?: ItemType[],
  activeItem?: ItemType,
  isLoadingFullList: boolean,
}

export interface ItemType {
  id: string,
}
