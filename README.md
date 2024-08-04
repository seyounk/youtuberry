# YouTuBerry

YouTuBerry는 YouTube 동영상의 요약 정보를 제공하는 Chrome 확장 프로그램입니다.

## 설치 및 실행

### 클라이언트

1. `client` 디렉토리로 이동:
    ```bash
    cd youtuberry/client
    ```
2. 의존성 설치:
    ```bash
    npm install
    ```
3. 개발 서버 시작:
    ```bash
    npm start
    ```

### 서버

1. `server` 디렉토리로 이동:
    ```bash
    cd youtuberry/server
    ```
2. 의존성 설치:
    ```bash
    npm install
    ```
3. 환경 변수 설정:
    `config.js` 파일을 생성하고 다음 내용을 추가합니다:
    ```javascript
    module.exports = {
      CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID',
      CLIENT_SECRET: 'YOUR_GOOGLE_CLIENT_SECRET',
      REDIRECT_URL: 'YOUR_REDIRECT_URL',
      MONGODB_URI: 'YOUR_MONGODB_CONNECTION_STRING'
    };
    ```
4. 서버 시작:
    ```bash
    npm start
    ```

### 데이터베이스

1. MongoDB 설치 및 실행:
    - MongoDB를 설치하고 실행합니다.
    - `database/config.js` 파일에 MongoDB 연결 문자열을 설정합니다.

## Chrome 확장 프로그램 로드

1. Chrome 브라우저에서 `chrome://extensions/`로 이동합니다.
2. 오른쪽 상단의 "개발자 모드"를 켭니다.
3. "압축 해제된 확장 프로그램 로드" 버튼을 클릭합니다.
4. `client` 디렉토리를 선택합니다.

## YouTube에서 테스트

1. YouTube에 방문하여 동영상을 클릭합니다.
2. YouTuBerry 확장 프로그램이 동작하는지 확인합니다.

## 기여

기여를 환영합니다! Pull Request를 제출해 주세요.
