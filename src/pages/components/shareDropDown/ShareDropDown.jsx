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
          "https://private-user-images.githubusercontent.com/64190056/328775094-19d8b7d8-0429-40b8-ae41-aa02fce49903.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUyMzY3MDQsIm5iZiI6MTcxNTIzNjQwNCwicGF0aCI6Ii82NDE5MDA1Ni8zMjg3NzUwOTQtMTlkOGI3ZDgtMDQyOS00MGI4LWFlNDEtYWEwMmZjZTQ5OTAzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTA5VDA2MzMyNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZhMTllMzEzNDYzMTM4NzM0YTQ5OTU0NGJmYzMwZDgyODkzZTQ3NDQwNDJjN2Y1NWQ3M2Q0MTlkN2FjNjQ0NjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.5GuPi2udTUSSHNeBTZBVCdvV8TrCdpaDD7KJcbquq0A",
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
      </div>
    </>
  );
};
export default ShareDropDown;
