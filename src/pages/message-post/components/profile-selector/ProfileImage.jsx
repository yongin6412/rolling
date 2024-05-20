import { useState } from "react";
import { getImagesTest } from "../../../../services/api";
import styles from "./ProfileImage.module.scss";
import useFetch from "../../../../hooks/useFetch";

const INITIAL_PROFILES = {
  imageUrls: [
    "https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png",
  ],
};

function ProfileImage({ name, onChange }) {
  const fetchData = useFetch(
    () => getImagesTest("profile-images"),
    INITIAL_PROFILES
  ); // fetchData : response JSON

  const imageUrls = fetchData.imageUrls;
  const defaultProfile = imageUrls[0]; // 기본 프로필

  const [selected, setSelected] = useState(defaultProfile);

  const handleSelectUrl = (e) => {
    const { src } = e.target;
    setSelected(src);
    onChange(name, src);
  };

  const handleResetUrl = () => {
    setSelected(defaultProfile);
    onChange(name, defaultProfile);
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectedAvatarWrapper}>
        <img
          alt="선택한 프로필"
          src={selected}
          className={styles.selectedAvatar}
        />
        {selected !== defaultProfile && ( // 선택된 프로필이 기본 프로필이 아닐 때, 삭제 버튼 보이게 함
          <button className={styles.deleteButton} onClick={handleResetUrl}>
            x
          </button>
        )}
      </div>
      <div className={styles.avatarsSection}>
        <p>프로필 이미지를 선택해주세요!</p>
        <div className={styles.avatars}>
          {imageUrls.slice(1).map(
            (
              url,
              index // 기본 프로필 제외한 프로필 배열 목록
            ) => (
              <img
                key={index}
                alt="프로필 목록"
                src={url}
                className={styles.avatar}
                onClick={handleSelectUrl}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileImage;
