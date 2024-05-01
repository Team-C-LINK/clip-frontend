import AnnouncementType from '../type/Announcment';

const createFilteredList = (
  list: AnnouncementType[],
  recruitState: boolean,
  _filterState: string
) => {
  return list
    ?.filter((item) => (recruitState ? item.isRecruiting === true : true))
    .filter((item) =>
      _filterState === '전체 공고' ? item : item.category === _filterState
    );
};

export default createFilteredList;
