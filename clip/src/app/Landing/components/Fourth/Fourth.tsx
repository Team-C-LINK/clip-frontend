'use client';

import * as C from './C.style';
import tail_left from './assets/image/tail_left.svg';
import tail_right from './assets/image/tail_right.svg';
import text_clippy from './assets/image/text_clippy.svg';
import cap_clippy from './assets/image/cap_clippy.svg';
import normal_clippy from './assets/image/normal_clippy.svg';

const Fourth = () => {
  return (
    <>
      <C.Frame>
        <C.FirstText>
          혹시 이런 이유 때문에 <br></br> 참여를 망설이고 계신가요?
        </C.FirstText>
        <C.conversation_all_wrap>
          <C.conversation_set_wrap>
            <C.conversation_wrap_left>
              <C.tail_left_wrap src={tail_left.src}></C.tail_left_wrap>
              <C.ConversationQuestionFrame>
                <C.question_wrap>Q.</C.question_wrap>&nbsp;누구나 참여할 수
                있나요?
              </C.ConversationQuestionFrame>
            </C.conversation_wrap_left>
            <C.conversation_wrap_right>
              <C.tail_right_wrap src={tail_right.src}></C.tail_right_wrap>
              <C.ConversationQuestionFrame_right>
                <C.answer_wrap>A.</C.answer_wrap>
                <div>
                  그럼요! <br></br> 연구조사는&nbsp;
                  <strong>누구나</strong>
                  <br></br>참여할 수 있답니다!
                </div>
              </C.ConversationQuestionFrame_right>
            </C.conversation_wrap_right>
            <C.conversation_clippy_1
              src={text_clippy.src}
            ></C.conversation_clippy_1>
          </C.conversation_set_wrap>
          <C.conversation_set_wrap>
            <C.conversation_wrap_left>
              <C.tail_left_wrap src={tail_left.src}></C.tail_left_wrap>
              <C.ConversationQuestionFrame>
                <C.question_wrap>Q.</C.question_wrap> &nbsp;믿을 수 있는
                연구인가요?
              </C.ConversationQuestionFrame>
            </C.conversation_wrap_left>
            <C.conversation_wrap_right>
              <C.tail_right_wrap src={tail_right.src}></C.tail_right_wrap>
              <C.ConversationQuestionFrame_right>
                <C.answer_wrap>A.</C.answer_wrap>
                <div>
                  네! <br></br> 클립은&nbsp;
                  <strong>대학 및 IRB</strong>에서
                  <br></br>인증한 연구만 올라와요!
                </div>
              </C.ConversationQuestionFrame_right>
            </C.conversation_wrap_right>
            <C.conversation_clippy_2
              src={cap_clippy.src}
            ></C.conversation_clippy_2>
          </C.conversation_set_wrap>
          <C.conversation_set_wrap>
            <C.conversation_wrap_left>
              <C.tail_left_wrap src={tail_left.src}></C.tail_left_wrap>
              <C.ConversationQuestionFrame>
                <C.question_wrap>Q.</C.question_wrap>&nbsp;참여하려면 준비
                서류가 많지 않나요?
              </C.ConversationQuestionFrame>
            </C.conversation_wrap_left>
            <C.conversation_wrap_right>
              <C.tail_right_wrap src={tail_right.src}></C.tail_right_wrap>
              <C.ConversationQuestionFrame_right>
                <C.answer_wrap>A.</C.answer_wrap>
                <div>
                  <strong>간편지원으로 빠르고</strong> <br></br>
                  편리하게 지원할 수 있어요!
                </div>
              </C.ConversationQuestionFrame_right>
            </C.conversation_wrap_right>
            <C.conversation_clippy_3
              src={normal_clippy.src}
            ></C.conversation_clippy_3>
          </C.conversation_set_wrap>
        </C.conversation_all_wrap>
      </C.Frame>
    </>
  );
};

export default Fourth;
