import { useEffect, useState } from "react";
import { getImages } from "../../../../services/api";
import styles from "./ProfileImage.module.scss";

function ProfileImage({ name, onChange }) {
  const [imgUrls, setImgUrls] = useState([]);
  const [selected, setSelected] = useState("");

  const fetchImgUrls = async () => {
    const imgUrlArray = await getImages("profile-images");
    setSelected(imgUrlArray[0]);
    setImgUrls(imgUrlArray.slice(1));
  };

  const handleUrlChange = () => {
    onChange(name, selected);
  };

  const selectUrl = (e) => {
    setSelected(e.target.src);
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
          onChange={handleUrlChange}
        />
      </div>
      <div className={styles.avatarsSection}>
        <p>프로필 이미지를 선택해주세요!</p>
        <div className={styles.avatars}>
          {imgUrls.map((url) => (
            <img
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
