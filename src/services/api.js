// 함수 정리 --> https://www.notion.so/sprint-part2-10/API-385ccff1c1c3489b8851e86cbde0b38f?pvs=4
// API 명세서 --> https://codeit.notion.site/API-d9eecacf2dbd4f268baf33cd11190a78
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
export async function getRecipientsList({ limit = 4, sort = "" } = {}) {
  return await GET(`${BASE_URL}/recipients/?limit=${limit}&sort=${sort}`);
}

// GET : 생성된 롤링페이퍼 정보
export async function getRecipientDetail(recipientId) {
  return await GET(`${BASE_URL}/recipients/${recipientId}/`);
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

// (임시) GET : 프로필 or 배경 이미지
export async function getImagesTest(imgType) {
  return await GET(`${IMG_URL}/${imgType}/`);
}

export async function getCustomRecipient(url) {
  return await GET(url);
}

// POST API Layer
export async function POST(URL, formData) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // JSON 데이터를 보내는 경우
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to post data : ", error);
    throw error;
  }
}

// POST : 롤링페이퍼 생성 폼
export async function postPaper(formData) {
  const fetchData = await POST(`${BASE_URL}/recipients/`, formData);
  return fetchData;
}

// POST : 메시지카드 생성 폼
export async function postMessage(formData, recipientId) {
  await POST(`${BASE_URL}/recipients/${recipientId}/messages/`, formData);
}

// POST : 이모지 추가
export async function postReaction(formData, recipientId) {
  await POST(`${BASE_URL}/recipients/${recipientId}/reactions/`, formData);
}

// DELETE API Layer
export async function DELETE(URL) {
  try {
    const response = await fetch(URL, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to delete data : ", error);
    throw error;
  }
}

// DELETE : 롤링페이퍼 삭제
export async function deletePaper(recipientId) {
  await DELETE(`${BASE_URL}/recipients/${recipientId}/`);
}

// DELETE : 메시지카드 삭제
export async function deleteMessage(senderIds) {
  for (const senderId of senderIds) {
    await DELETE(`${BASE_URL}/messages/${senderId}/`);
  }
}
