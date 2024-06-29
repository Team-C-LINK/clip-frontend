import Spacer from '../../Spacer/Spacer';
import * as S from './SideBar.style';
import hamburger_purple from './image/hamburger_purple.svg';
import hamburger_gray from './image/hamburger_gray.svg';
import withdraw_gray from './image/withdraw_gray.svg';
import withdraw_purple from './image/withdraw_purple.svg';
import calendar_gray from './image/calendar_gray.svg';
import calendar_purple from './image/calendar_purple.svg';
import researcher_gray from './image/researcher_gray.svg';
import researcher_purple from './image/researcher_purple.svg';
import point_gray from './image/point_gray.svg';
import { useState } from 'react';
import Divider from '../../Divider/Divider';

interface SideBarProps {
  curCategory: string;
}

const SideBar: React.FC<SideBarProps> = ({ curCategory }) => {
  const handleCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === 'allMember')
      window.location.href = '/admin/member/all';

    if (e.currentTarget.id === 'withdraw')
      window.location.href = '/admin/member/withdraw';

    if (e.currentTarget.id === 'announcement')
      window.location.href = '/admin/announcement/all';

    if (e.currentTarget.id === 'researcher')
      window.location.href = '/admin/researcher/all';

    if (e.currentTarget.id === 'point')
      window.location.href = '/admin/announcement/all';
  };

  return (
    <S.wrap>
      <Spacer height="10.5rem"></Spacer>
      <S.menu_wrap>
        <S.title>회원 관리</S.title>
        {curCategory === 'allMember' ? (
          <S.menu_item_selected>
            <S.menu_image src={hamburger_purple.src}></S.menu_image>
            <S.menu_item_text>전체 회원 관리</S.menu_item_text>
          </S.menu_item_selected>
        ) : (
          <S.menu_item_unselected id={'allMember'} onClick={handleCategory}>
            <S.menu_image src={hamburger_gray.src}></S.menu_image>
            <S.menu_item_text>전체 회원 관리</S.menu_item_text>
          </S.menu_item_unselected>
        )}

        {curCategory === 'withdraw' ? (
          <S.menu_item_selected>
            <S.menu_image src={withdraw_purple.src}></S.menu_image>
            <S.menu_item_text>탈퇴 회원 관리</S.menu_item_text>
          </S.menu_item_selected>
        ) : (
          <S.menu_item_unselected id={'withdraw'} onClick={handleCategory}>
            <S.menu_image src={withdraw_gray.src}></S.menu_image>
            <S.menu_item_text>탈퇴 회원 관리</S.menu_item_text>
          </S.menu_item_unselected>
        )}

        <Divider $size="18rem"></Divider>

        {curCategory === 'announcement' ? (
          <S.menu_item_selected>
            <S.menu_image src={calendar_purple.src}></S.menu_image>
            <S.menu_item_text>전체 공고 관리</S.menu_item_text>
          </S.menu_item_selected>
        ) : (
          <S.menu_item_unselected id={'announcement'} onClick={handleCategory}>
            <S.menu_image src={calendar_gray.src}></S.menu_image>
            <S.menu_item_text>전체 공고 관리</S.menu_item_text>
          </S.menu_item_unselected>
        )}

        {curCategory === 'researcher' ? (
          <S.menu_item_selected>
            <S.menu_image src={researcher_purple.src}></S.menu_image>
            <S.menu_item_text>연구자 관리</S.menu_item_text>
          </S.menu_item_selected>
        ) : (
          <S.menu_item_unselected id={'researcher'} onClick={handleCategory}>
            <S.menu_image src={researcher_gray.src}></S.menu_image>
            <S.menu_item_text>연구자 관리</S.menu_item_text>
          </S.menu_item_unselected>
        )}

        {curCategory === 'point' ? (
          <S.menu_item_selected>
            <S.menu_image src={point_gray.src}></S.menu_image>
            <S.menu_item_text>포인트 관리</S.menu_item_text>
          </S.menu_item_selected>
        ) : (
          <S.menu_item_unselected id={'point'} onClick={handleCategory}>
            <S.menu_image src={point_gray.src}></S.menu_image>
            <S.menu_item_text>포인트 관리</S.menu_item_text>
          </S.menu_item_unselected>
        )}
      </S.menu_wrap>
    </S.wrap>
  );
};

export default SideBar;
