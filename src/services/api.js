const BASE_URL = "https://rolling-api.vercel.app/6-10";
const IMG_URL = "https://rolling-api.vercel.app";

// GET API Layer
async function GET(URL) {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to GET Data : ", error);
    throw error;
  }
}

// GET : 롤링페이퍼 목록
export async function getRecipientsList() {
  return await GET(`${BASE_URL}/recipients/`);
}

// GET : 생성된 롤링페이퍼 정보
export async function getRecipients(postId) {
  return await GET(`${BASE_URL}/recipients/${postId}/`);
}

// GET : 프로필 or 배경 이미지
export async function getImages(imgType) {
  const fetchData = await GET(`${IMG_URL}/${imgType}/`);
  return fetchData.imageUrls;
}
