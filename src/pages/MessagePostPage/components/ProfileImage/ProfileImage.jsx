import { useEffect, useRef, useState } from "react";
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

  const handleUrlChange = (e) => {
    const selectedUrl = e.target.value;
    setSelected(selectedUrl);
    onChange(e);
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
        <input
          className={styles.urlInput}
          name={name}
          value={selected}
          onChange={handleUrlChange}
        />
        <img src={selected} className={styles.selectedAvatar} />
      </div>
      <div className={styles.avatarsSection}>
        <p>프로필 이미지를 선택해주세요!</p>
        <div className={styles.avatars}>
          {imgUrls.map((url) => (
            <img src={url} className={styles.avatar} onClick={selectUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileImage;
