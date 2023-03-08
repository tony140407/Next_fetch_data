# Next_fetch_data

## Demo 位置

https://next-fetch-data-mu.vercel.app/

## 簡介

其中一份作業，
大略目標為

1. 使用在影片載入前使用一張預設圖片取代(避免使用者看到預料外的東西)
    > 應該要用 Suspense 但我當時寫了一個 useDetectVideoCanPlay 的 hook 判斷
2. 存取影片(一小時)，避免多次向 serve 請求資源
3. 下方介紹隨螢幕大小保持固定比例縮放
