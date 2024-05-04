// API 정리 --> https://www.notion.so/sprint-part2-10/API-385ccff1c1c3489b8851e86cbde0b38f?pvs=4
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
    console.error("Failed to get data : ", error);
    throw error;
  }
}

// GET : 롤링페이퍼 목록
export async function getRecipientsList() {
  return await GET(`${BASE_URL}/recipients/`);
}

// GET : 생성된 롤링페이퍼 정보
export async function getRecipientDetail(postId) {
  return await GET(`${BASE_URL}/recipients/${postId}/`);
}

// GET : 생성된 롤링페이퍼 - 메시지 리스트
export async function getMessages(recipientId) {
  return await GET(`${BASE_URL}/recipients/${recipientId}/messages/`);
}

// GET : 롤링페이퍼 헤더 - 이모지 정보
// 이모지 아이콘 화면크기에 맞춰서 가져오는 limit변경
export async function getReactions(recipientId, dataSlice = 8) {
  return await GET(
    `${BASE_URL}/recipients/${recipientId}/reactions/?limit=${dataSlice}`
  );
}

// GET : 프로필 or 배경 이미지
export async function getImages(imgType) {
  const fetchData = await GET(`${IMG_URL}/${imgType}/`);
  return fetchData.imageUrls;
}
