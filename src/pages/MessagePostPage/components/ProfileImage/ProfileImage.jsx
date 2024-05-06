import { useEffect, useState } from "react";
import { getImages } from "../../../../services/api";

import styles from "./ProfileImage.module.scss";

function ProfileImage({ name, onChange }) {
  const [selected, setSelected] = useState("");
  const [urlOptions, setUrlOptions] = useState([]);

  const fetchImgUrls = async () => {
    const imgUrls = await getImages("profile-images");
    setSelected(imgUrls[0]);
    setUrlOptions(imgUrls.slice(1));
  };

  const selectUrl = (e) => {
    const { src } = e.target;
    setSelected(src);
    onChange(name, src);
  };

  useEffect(() => {
    fetchImgUrls();
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <img
          alt="선택한 프로필"
          src={selected}
          className={styles.selectedAvatar}
        />
      </div>
      <div className={styles.avatarsSection}>
        <p>프로필 이미지를 선택해주세요!</p>
        <div className={styles.avatars}>
          {urlOptions.slice(1).map((url, index) => (
            <img
              key={index}
              alt="프로필 목록"
              src={url}
              className={styles.avatar}
              onClick={selectUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileImage;
