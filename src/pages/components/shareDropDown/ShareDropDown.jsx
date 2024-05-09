import { useState } from "react";
import styles from "./ShareDropDown.module.scss";
import shareImg from "../../../assets/images/share.svg";
import completedImg from "../../../assets/images/completed.svg";
import closeImg from "../../../assets/images/close.svg";

// 카톡 공유하기 양식
const kakaoButton = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      kakao.init("62db234458ea681bebbd5058b4ac9e7e");
    }

    kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "롤링 프로젝트",
        description: "#코드잇 #10팀 #리액트 #살려줘",
        imageUrl:
          "https://github-production-user-asset-6210df.s3.amazonaws.com/64190056/328775094-19d8b7d8-0429-40b8-ae41-aa02fce49903.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240508%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240508T061553Z&X-Amz-Expires=300&X-Amz-Signature=0d0de67b30e1a7c16b48600340d35f951a39f9f9b8a4bca4ac76a914b2ae1b83&X-Amz-SignedHeaders=host&actor_id=105802492&key_id=0&repo_id=793432320",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },

      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
        {
          title: "앱으로 보기",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
      ],
    });
  }
};

const ShareDropDown = () => {
  const [shareShow, setShareShow] = useState(false);
  const [toast, setToast] = useState(false);

  const onClickShow = () => {
    setShareShow(!shareShow);
  };

  const onHandleCopyURL = () => {
    navigator.clipboard.writeText(window.location.href);
    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, [5000]);
  };

  const onCloseBtn = () => {
    setToast(false);
  };

  return (
    <>
      <div className={styles.share_container}>
        <button className={styles.share_btn} onClick={onClickShow}>
          <img src={shareImg} alt="공유이미지" />
        </button>
        <div className={styles.outside_container}>
          {shareShow && (
            <div className={styles.outside_share}>
              <div onClick={kakaoButton} className={styles.share_list}>
                카카오톡 공유
              </div>
              <div onClick={onHandleCopyURL} className={styles.share_list}>
                URL 공유
              </div>
            </div>
          )}
        </div>
      </div>
      {toast && (
        <div className={styles.toast_box}>
          <div className={styles.toast_message}>
            <img src={completedImg} alt="완료이미지" />
            URL이 복사 되었습니다.
          </div>
          <div>
            <img
              className={styles.closebtn}
              onClick={onCloseBtn}
              src={closeImg}
              alt="닫기이미지"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default ShareDropDown;
