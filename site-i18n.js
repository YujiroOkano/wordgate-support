(() => {
  "use strict";

  const languages = [
    ["ja", "日本語"], ["en", "English"], ["ko", "한국어"],
    ["zh-Hant", "繁體中文"], ["zh-Hans", "简体中文"], ["th", "ไทย"],
    ["vi", "Tiếng Việt"], ["ar", "العربية"], ["it", "Italiano"],
    ["es", "Español"], ["fr", "Français"], ["ru", "Русский"]
  ];

  const copy = {
    ja: {
      brand: "サキタンゴ", made: "日本で企画・設計", title: "先に3問。あとでSNS。",
      lede: "スマホを開く瞬間を、忘れかけた英単語の復習タイミングに変えます。",
      featuresTitle: "朝・日中・夜に、学習が割り込む",
      features: ["アラーム停止前の朝復習", "SNSを開く前の解禁ミッション", "忘却曲線に基づく夜復習", "TOEIC・英検・TOEFL iBT・IELTS", "端末内音声と端末内翻訳"],
      privacyNote: "アカウント登録・広告・外部分析SDKはありません。学習履歴とイベント履歴は主に端末内に保存されます。",
      support: { title: "サポート", lede: "不具合報告、ご意見、ご質問はこちらで受け付けています。", contactTitle: "お問い合わせ", contactText: "個人情報や購入情報を本文に書かず、症状・端末・iOSバージョンをお知らせください。", contactButton: "GitHub Issuesで問い合わせる", checksTitle: "よくある確認事項", checks: ["夜通知: iOS設定で通知バナーとサウンドをオンにし、アプリ内で次回時刻を確認してください。", "アプリ制限: スクリーンタイム接続と制限対象アプリの選択を確認してください。", "言語データ: ホームの案内からAppleの端末内翻訳データを準備してください。", "iCloud: iCloud Driveへのサインインを確認し、時間を置いて再試行してください。", "単語更新: 通信できない場合も同梱単語で学習を続けられます。"] },
      privacy: { title: "プライバシーポリシー", updated: "最終更新日: 2026年7月22日", sections: [["収集するデータ", "アカウント登録は不要です。開発者のサーバーで氏名、メールアドレス、学習履歴を収集しません。"], ["端末内データ", "設定、学習履歴、テスト結果、復習状態、選択したScreen Timeトークンを端末内に保存します。匿名の操作イベントは品質確認用に端末内だけで最大30日・10,000件保存され、ユーザー操作で確認・削除・書き出しできます。"], ["iCloudバックアップ", "有効な場合、学習データの暗号化バックアップをユーザー自身のiCloudコンテナに保存します。開発者はこのデータへアクセスできません。"], ["ネットワーク通信", "公開GitHubから語彙CSVを更新し、StoreKitで購入状態を確認します。対応言語ではAppleの端末内翻訳を利用します。学習回答やScreen Timeの選択内容を開発者へ送信しません。"], ["通知", "朝と夜の通知は端末上で予約されます。通知を開いた事実も端末内イベントとしてのみ記録されます。"], ["トラッキング", "広告を表示せず、他社のアプリやWebサイトをまたぐ追跡を行いません。"]] },
      terms: { title: "利用規約", updated: "最終更新日: 2026年7月22日", sections: [["Apple標準EULA", "本アプリにはApple標準利用許諾契約が適用されます。"], ["サービス内容", "英単語学習、復習通知、アラーム、ユーザーが選択したアプリの一時的なScreen Time制限を提供します。"], ["サブスクリプション", "Proは自動更新です。月額は1か月ごと、年額は1年ごとにApple Accountへ請求されます。無料体験後は表示された年額で更新されます。期間終了の24時間以上前までにApp Storeのアカウント設定で解約できます。"], ["利用上の注意", "試験合格やスコア向上を保証しません。アラームとアプリ制限はiOS、端末設定、Appleの各フレームワークの状態に依存します。"], ["知的財産・免責", "アプリと独自コンテンツの権利は開発者または正当な権利者に帰属します。責任は適用法令で認められる範囲に限られます。"]] },
      footer: "日本発の英単語学習体験。お問い合わせに公開メールアドレスは使用していません。"
    },
    en: {
      brand: "Sakitango", made: "Designed in Japan", title: "3 questions first. Social apps after.",
      lede: "Turn the moment you reach for your phone into a well-timed English vocabulary review.",
      featuresTitle: "Learning that interrupts morning, day, and night",
      features: ["Morning review before dismissing an alarm", "Unlock missions before social apps", "Night review guided by spaced repetition", "TOEIC, EIKEN, TOEFL iBT, and IELTS", "On-device speech and translation"],
      privacyNote: "No account, ads, or third-party analytics SDK. Learning and event history stays primarily on your device.",
      support: { title: "Support", lede: "Report a problem, share feedback, or ask a question.", contactTitle: "Contact", contactText: "Do not include personal or purchase information. Tell us the issue, device model, and iOS version.", contactButton: "Contact via GitHub Issues", checksTitle: "Quick checks", checks: ["Night review: enable notification banners and sounds in iOS Settings, then confirm the next time shown in the app.", "App limits: confirm Screen Time access and that at least one app is selected.", "Language data: prepare Apple's on-device translation data from the Home prompt.", "iCloud: confirm iCloud Drive sign-in and try again later.", "Vocabulary updates: bundled words remain available while offline."] },
      privacy: { title: "Privacy Policy", updated: "Last updated: July 22, 2026", sections: [["Data collection", "No account is required. The developer does not collect your name, email address, or learning history on a developer server."], ["On-device data", "Settings, learning history, test results, review state, and selected Screen Time tokens are stored on device. Anonymous interaction events are retained only on device for up to 30 days or 10,000 events and can be viewed, deleted, or exported by you."], ["iCloud backup", "When enabled, an encrypted learning-data backup is stored in your own iCloud container. The developer cannot access it."], ["Network use", "The app updates vocabulary CSV files from a public GitHub repository and checks purchases through StoreKit. Supported languages use Apple's on-device translation. Answers and Screen Time selections are not sent to the developer."], ["Notifications", "Morning and night notifications are scheduled locally. Opening a notification is recorded only in the on-device event history."], ["Tracking", "The app has no ads and does not track you across other companies' apps or websites."]] },
      terms: { title: "Terms of Use", updated: "Last updated: July 22, 2026", sections: [["Apple Standard EULA", "Apple's Standard End User License Agreement applies to this app."], ["Service", "The app provides vocabulary learning, review notifications, alarms, and temporary Screen Time limits for apps you select."], ["Subscriptions", "Pro renews automatically. Monthly plans bill every month and annual plans every year to your Apple Account. After a trial, the displayed annual price is charged. Cancel in App Store account settings at least 24 hours before the current period ends."], ["Important limitations", "The app does not guarantee exam results or score improvements. Alarms and app limits depend on iOS, device settings, and Apple frameworks."], ["Rights and liability", "Rights in the app and original content belong to the developer or lawful owners. Liability is limited to the extent permitted by applicable law."]] },
      footer: "An English-learning experience designed in Japan. No public email address is used for support."
    },
    ko: {
      brand: "사키탄고", made: "일본에서 기획·설계", title: "먼저 3문제. 그다음 SNS.",
      lede: "휴대폰을 집어 드는 순간을 잊어 가는 영단어 복습 시간으로 바꿉니다.",
      featuresTitle: "아침·낮·밤에 끼어드는 학습",
      features: ["알람을 끄기 전 아침 복습", "SNS 전 앱 해제 미션", "간격 반복 기반 밤 복습", "TOEIC·EIKEN·TOEFL iBT·IELTS", "기기 내 음성과 번역"],
      privacyNote: "계정, 광고, 외부 분석 SDK가 없습니다. 학습 및 이벤트 기록은 주로 기기에 저장됩니다.",
      support: { title: "고객지원", lede: "오류 신고, 의견, 질문을 남겨 주세요.", contactTitle: "문의", contactText: "개인정보나 구매정보는 적지 말고 증상, 기기, iOS 버전을 알려 주세요.", contactButton: "GitHub Issues로 문의", checksTitle: "먼저 확인할 사항", checks: ["밤 복습: iOS 설정에서 알림 배너와 소리를 켜고 앱의 다음 알림 시간을 확인하세요.", "앱 제한: 스크린 타임 연결과 제한할 앱 선택을 확인하세요.", "언어 데이터: 홈 안내에서 Apple 기기 내 번역 데이터를 준비하세요.", "iCloud: iCloud Drive 로그인을 확인한 뒤 잠시 후 다시 시도하세요.", "단어 업데이트: 오프라인에서도 내장 단어로 계속 학습할 수 있습니다."] },
      privacy: { title: "개인정보 처리방침", updated: "최종 업데이트: 2026년 7월 22일", sections: [["수집 정보", "계정이 필요하지 않으며 개발자 서버에서 이름, 이메일, 학습 기록을 수집하지 않습니다."], ["기기 내 데이터", "설정, 학습 기록, 시험 결과, 복습 상태와 선택한 스크린 타임 토큰을 기기에 저장합니다. 익명 조작 이벤트는 최대 30일 또는 10,000건만 기기에 보관되며 직접 확인·삭제·내보낼 수 있습니다."], ["iCloud 백업", "활성화하면 암호화된 학습 데이터 백업이 사용자 본인의 iCloud 컨테이너에 저장됩니다. 개발자는 접근할 수 없습니다."], ["네트워크", "공개 GitHub에서 어휘 CSV를 업데이트하고 StoreKit으로 구매 상태를 확인합니다. 지원 언어는 Apple 기기 내 번역을 사용하며 답변과 스크린 타임 선택은 개발자에게 전송되지 않습니다."], ["알림", "아침·밤 알림은 기기에서 예약되며 알림 열기 이벤트도 기기에만 기록됩니다."], ["추적", "광고가 없고 다른 회사의 앱이나 웹사이트를 가로질러 추적하지 않습니다."]] },
      terms: { title: "이용 약관", updated: "최종 업데이트: 2026년 7월 22일", sections: [["Apple 표준 EULA", "이 앱에는 Apple 표준 최종 사용자 사용권 계약이 적용됩니다."], ["서비스", "영단어 학습, 복습 알림, 알람과 사용자가 선택한 앱의 일시적 스크린 타임 제한을 제공합니다."], ["구독", "Pro는 자동 갱신됩니다. 월간은 매월, 연간은 매년 Apple Account에 청구됩니다. 체험 후 표시된 연간 요금으로 갱신됩니다. 기간 종료 24시간 전까지 App Store 계정 설정에서 해지할 수 있습니다."], ["주의", "시험 결과나 점수 향상을 보장하지 않습니다. 알람과 앱 제한은 iOS, 기기 설정, Apple 프레임워크 상태에 따라 달라집니다."], ["권리와 책임", "앱과 독창적 콘텐츠의 권리는 개발자 또는 적법한 권리자에게 있으며 책임은 적용 법률이 허용하는 범위로 제한됩니다."]] },
      footer: "일본에서 만든 영단어 학습 경험. 고객지원에 공개 이메일 주소를 사용하지 않습니다."
    },
    "zh-Hant": {
      brand: "Sakitango", made: "日本企劃與設計", title: "先答3題，再開社群。",
      lede: "把拿起手機的瞬間，變成複習快要忘記的英文單字的時機。",
      featuresTitle: "早晨、白天、夜晚，學習主動出現",
      features: ["關閉鬧鐘前先複習", "開啟社群前完成解鎖任務", "依間隔重複安排睡前複習", "TOEIC、EIKEN、TOEFL iBT、IELTS", "裝置端語音與翻譯"],
      privacyNote: "不需帳號、無廣告、無第三方分析SDK。學習與事件紀錄主要保存在裝置上。",
      support: { title: "支援", lede: "回報問題、提供意見或提出疑問。", contactTitle: "聯絡我們", contactText: "請勿填寫個資或購買資訊，請告知問題、裝置與iOS版本。", contactButton: "透過GitHub Issues聯絡", checksTitle: "常見檢查", checks: ["夜間複習：在iOS設定開啟通知橫幅與聲音，再確認App顯示的下次時間。", "App限制：確認螢幕使用時間權限及已選擇限制App。", "語言資料：從首頁提示準備Apple裝置端翻譯資料。", "iCloud：確認已登入iCloud Drive，稍後再試。", "單字更新：離線時仍可使用內建單字學習。"] },
      privacy: { title: "隱私權政策", updated: "最後更新：2026年7月22日", sections: [["資料蒐集", "不需註冊帳號。開發者伺服器不會蒐集姓名、電子郵件或學習紀錄。"], ["裝置端資料", "設定、學習紀錄、測驗結果、複習狀態與所選的螢幕使用時間代碼保存在裝置上。匿名操作事件僅在裝置保留最多30天或10,000筆，可由你查看、刪除或匯出。"], ["iCloud備份", "啟用時，加密的學習資料備份會存入你自己的iCloud容器，開發者無法存取。"], ["網路使用", "App從公開GitHub更新單字CSV，並透過StoreKit確認購買。支援語言使用Apple裝置端翻譯；答案及螢幕使用時間選擇不會傳給開發者。"], ["通知", "早晚通知在裝置上排程，開啟通知只會記錄於裝置端事件紀錄。"], ["追蹤", "App無廣告，也不會跨其他公司的App或網站追蹤你。"]] },
      terms: { title: "使用條款", updated: "最後更新：2026年7月22日", sections: [["Apple標準EULA", "本App適用Apple標準終端使用者授權合約。"], ["服務", "提供英文單字學習、複習通知、鬧鐘及你所選App的暫時螢幕使用時間限制。"], ["訂閱", "Pro會自動續訂。月方案每月、年方案每年向Apple Account收費；試用後按畫面所示年費續訂。請於期間結束至少24小時前在App Store帳號設定取消。"], ["注意事項", "不保證考試結果或分數提升。鬧鐘與App限制取決於iOS、裝置設定及Apple框架狀態。"], ["權利與責任", "App與原創內容權利屬開發者或合法權利人；責任限於適用法律允許範圍。"]] },
      footer: "源自日本的英文單字學習體驗。支援頁面不公開電子郵件地址。"
    },
    th: {
      brand: "Sakitango", made: "คิดและออกแบบในญี่ปุ่น", title: "ทำ 3 ข้อก่อน แล้วค่อยเปิดโซเชียล",
      lede: "เปลี่ยนจังหวะที่หยิบโทรศัพท์ให้เป็นเวลาทบทวนคำศัพท์อังกฤษที่กำลังจะลืม",
      featuresTitle: "การเรียนรู้ที่แทรกเข้ามาเช้า กลางวัน และกลางคืน",
      features: ["ทบทวนก่อนปิดนาฬิกาปลุก", "ภารกิจปลดล็อกก่อนเข้าโซเชียล", "ทบทวนก่อนนอนตามการเว้นระยะ", "TOEIC, EIKEN, TOEFL iBT และ IELTS", "เสียงและการแปลบนอุปกรณ์"],
      privacyNote: "ไม่ต้องมีบัญชี ไม่มีโฆษณา และไม่มี SDK วิเคราะห์ภายนอก ประวัติการเรียนและกิจกรรมเก็บไว้บนอุปกรณ์เป็นหลัก",
      support: { title: "ช่วยเหลือ", lede: "แจ้งปัญหา ส่งความคิดเห็น หรือสอบถามได้ที่นี่", contactTitle: "ติดต่อ", contactText: "อย่าใส่ข้อมูลส่วนตัวหรือข้อมูลการซื้อ โปรดแจ้งอาการ รุ่นอุปกรณ์ และเวอร์ชัน iOS", contactButton: "ติดต่อผ่าน GitHub Issues", checksTitle: "สิ่งที่ควรตรวจสอบ", checks: ["ทบทวนกลางคืน: เปิดแบนเนอร์และเสียงแจ้งเตือนในตั้งค่า iOS แล้วตรวจสอบเวลาครั้งถัดไปในแอป", "จำกัดแอป: ตรวจสอบสิทธิ์ Screen Time และเลือกแอปอย่างน้อยหนึ่งรายการ", "ข้อมูลภาษา: เตรียมข้อมูลแปลบนอุปกรณ์ของ Apple จากข้อความบนหน้าแรก", "iCloud: ตรวจสอบการลงชื่อเข้า iCloud Drive แล้วลองใหม่ภายหลัง", "อัปเดตคำศัพท์: ยังเรียนด้วยคำศัพท์ที่มากับแอปได้เมื่อออฟไลน์"] },
      privacy: { title: "นโยบายความเป็นส่วนตัว", updated: "อัปเดตล่าสุด: 22 กรกฎาคม 2026", sections: [["ข้อมูลที่เก็บ", "ไม่ต้องสมัครบัญชี และเซิร์ฟเวอร์ของผู้พัฒนาไม่เก็บชื่อ อีเมล หรือประวัติการเรียน"], ["ข้อมูลบนอุปกรณ์", "การตั้งค่า ประวัติการเรียน ผลทดสอบ สถานะทบทวน และโทเค็น Screen Time ที่เลือกจะเก็บบนอุปกรณ์ เหตุการณ์ใช้งานแบบไม่ระบุตัวตนเก็บเฉพาะบนอุปกรณ์สูงสุด 30 วันหรือ 10,000 รายการ และคุณดู ลบ หรือส่งออกได้"], ["ข้อมูลสำรอง iCloud", "เมื่อเปิดใช้ ข้อมูลการเรียนที่เข้ารหัสจะเก็บในคอนเทนเนอร์ iCloud ของคุณ ผู้พัฒนาเข้าถึงไม่ได้"], ["เครือข่าย", "แอปอัปเดต CSV คำศัพท์จาก GitHub สาธารณะและตรวจสอบการซื้อผ่าน StoreKit ภาษาที่รองรับใช้การแปลบนอุปกรณ์ของ Apple คำตอบและการเลือก Screen Time ไม่ส่งให้ผู้พัฒนา"], ["การแจ้งเตือน", "การแจ้งเตือนเช้าและกลางคืนตั้งเวลาบนอุปกรณ์ การเปิดแจ้งเตือนบันทึกเฉพาะในประวัติกิจกรรมบนอุปกรณ์"], ["การติดตาม", "ไม่มีโฆษณาและไม่ติดตามคุณข้ามแอปหรือเว็บไซต์ของบริษัทอื่น"]] },
      terms: { title: "ข้อกำหนดการใช้งาน", updated: "อัปเดตล่าสุด: 22 กรกฎาคม 2026", sections: [["EULA มาตรฐานของ Apple", "แอปนี้อยู่ภายใต้สัญญาอนุญาตผู้ใช้ปลายทางมาตรฐานของ Apple"], ["บริการ", "ให้บริการเรียนคำศัพท์ แจ้งเตือนทบทวน นาฬิกาปลุก และจำกัด Screen Time ชั่วคราวสำหรับแอปที่คุณเลือก"], ["การสมัครสมาชิก", "Pro ต่ออายุอัตโนมัติ แผนรายเดือนเรียกเก็บทุกเดือนและแผนรายปีทุกปีผ่าน Apple Account หลังทดลองจะคิดราคาปีที่แสดง ยกเลิกในการตั้งค่าบัญชี App Store อย่างน้อย 24 ชั่วโมงก่อนหมดรอบ"], ["ข้อจำกัด", "ไม่รับประกันผลสอบหรือคะแนน นาฬิกาปลุกและการจำกัดแอปขึ้นอยู่กับ iOS การตั้งค่าอุปกรณ์ และเฟรมเวิร์กของ Apple"], ["สิทธิและความรับผิด", "สิทธิในแอปและเนื้อหาต้นฉบับเป็นของผู้พัฒนาหรือเจ้าของสิทธิที่ชอบด้วยกฎหมาย ความรับผิดจำกัดเท่าที่กฎหมายอนุญาต"]] },
      footer: "ประสบการณ์เรียนคำศัพท์อังกฤษที่ออกแบบในญี่ปุ่น ไม่มีการเปิดเผยอีเมลสำหรับฝ่ายช่วยเหลือ"
    },
    vi: {
      brand: "Sakitango", made: "Lên ý tưởng và thiết kế tại Nhật Bản", title: "Làm 3 câu trước. Mở mạng xã hội sau.",
      lede: "Biến khoảnh khắc cầm điện thoại thành đúng lúc ôn lại những từ tiếng Anh sắp quên.",
      featuresTitle: "Việc học xuất hiện vào sáng, ngày và đêm",
      features: ["Ôn trước khi tắt báo thức", "Nhiệm vụ mở khóa trước mạng xã hội", "Ôn ban đêm theo lặp lại ngắt quãng", "TOEIC, EIKEN, TOEFL iBT và IELTS", "Giọng đọc và bản dịch trên thiết bị"],
      privacyNote: "Không tài khoản, quảng cáo hay SDK phân tích bên ngoài. Lịch sử học và sự kiện chủ yếu nằm trên thiết bị.",
      support: { title: "Hỗ trợ", lede: "Báo lỗi, góp ý hoặc đặt câu hỏi.", contactTitle: "Liên hệ", contactText: "Không ghi thông tin cá nhân hay mua hàng. Hãy cho biết lỗi, thiết bị và phiên bản iOS.", contactButton: "Liên hệ qua GitHub Issues", checksTitle: "Kiểm tra nhanh", checks: ["Ôn ban đêm: bật biểu ngữ và âm thanh thông báo trong Cài đặt iOS, rồi kiểm tra giờ tiếp theo trong ứng dụng.", "Giới hạn ứng dụng: kiểm tra quyền Screen Time và đã chọn ít nhất một ứng dụng.", "Dữ liệu ngôn ngữ: chuẩn bị dữ liệu dịch trên thiết bị của Apple từ lời nhắc ở Trang chủ.", "iCloud: kiểm tra đăng nhập iCloud Drive rồi thử lại sau.", "Cập nhật từ: vẫn học được bằng bộ từ có sẵn khi ngoại tuyến."] },
      privacy: { title: "Chính sách quyền riêng tư", updated: "Cập nhật lần cuối: 22/07/2026", sections: [["Dữ liệu thu thập", "Không cần tài khoản. Máy chủ của nhà phát triển không thu thập tên, email hay lịch sử học của bạn."], ["Dữ liệu trên thiết bị", "Cài đặt, lịch sử học, kết quả kiểm tra, trạng thái ôn tập và token Screen Time đã chọn được lưu trên thiết bị. Sự kiện thao tác ẩn danh chỉ giữ trên thiết bị tối đa 30 ngày hoặc 10.000 sự kiện; bạn có thể xem, xóa hoặc xuất."], ["Sao lưu iCloud", "Khi bật, bản sao lưu dữ liệu học đã mã hóa được lưu trong vùng iCloud của chính bạn. Nhà phát triển không thể truy cập."], ["Mạng", "Ứng dụng cập nhật CSV từ vựng từ GitHub công khai và kiểm tra giao dịch qua StoreKit. Ngôn ngữ hỗ trợ dùng bản dịch trên thiết bị của Apple. Câu trả lời và lựa chọn Screen Time không được gửi cho nhà phát triển."], ["Thông báo", "Thông báo sáng và tối được lên lịch trên thiết bị. Việc mở thông báo chỉ được ghi trong lịch sử sự kiện trên thiết bị."], ["Theo dõi", "Ứng dụng không có quảng cáo và không theo dõi bạn qua ứng dụng hay trang web của công ty khác."]] },
      terms: { title: "Điều khoản sử dụng", updated: "Cập nhật lần cuối: 22/07/2026", sections: [["EULA tiêu chuẩn của Apple", "Ứng dụng tuân theo Thỏa thuận cấp phép người dùng cuối tiêu chuẩn của Apple."], ["Dịch vụ", "Ứng dụng cung cấp học từ vựng, thông báo ôn tập, báo thức và giới hạn Screen Time tạm thời cho ứng dụng bạn chọn."], ["Gói đăng ký", "Pro tự động gia hạn. Gói tháng tính phí mỗi tháng và gói năm mỗi năm vào Apple Account. Sau dùng thử, giá năm hiển thị sẽ được tính. Hủy trong cài đặt tài khoản App Store ít nhất 24 giờ trước khi kỳ hiện tại kết thúc."], ["Giới hạn", "Không đảm bảo kết quả thi hay tăng điểm. Báo thức và giới hạn ứng dụng phụ thuộc iOS, cài đặt thiết bị và framework Apple."], ["Quyền và trách nhiệm", "Quyền với ứng dụng và nội dung gốc thuộc nhà phát triển hoặc chủ sở hữu hợp pháp. Trách nhiệm giới hạn trong phạm vi luật áp dụng cho phép."]] },
      footer: "Trải nghiệm học từ vựng được thiết kế tại Nhật Bản. Không công khai email hỗ trợ."
    },
    ar: {
      brand: "Sakitango", made: "فكرة وتصميم من اليابان", title: "3 أسئلة أولاً، ثم تطبيقات التواصل.",
      lede: "حوّل لحظة إمساك الهاتف إلى موعد مناسب لمراجعة الكلمات الإنجليزية قبل نسيانها.",
      featuresTitle: "تعلّم يتدخل صباحاً ونهاراً وليلاً",
      features: ["مراجعة قبل إيقاف المنبّه", "مهمة فتح قبل تطبيقات التواصل", "مراجعة ليلية بالتكرار المتباعد", "TOEIC وEIKEN وTOEFL iBT وIELTS", "نطق وترجمة على الجهاز"],
      privacyNote: "لا حساب ولا إعلانات ولا حزمة تحليلات خارجية. يبقى سجل التعلّم والأحداث أساساً على جهازك.",
      support: { title: "الدعم", lede: "أبلغ عن مشكلة أو شارك رأيك أو اطرح سؤالاً.", contactTitle: "تواصل معنا", contactText: "لا تذكر بيانات شخصية أو معلومات شراء. اذكر المشكلة ونوع الجهاز وإصدار iOS.", contactButton: "التواصل عبر GitHub Issues", checksTitle: "فحوصات سريعة", checks: ["مراجعة الليل: فعّل لافتات الإشعارات والصوت في إعدادات iOS ثم تحقق من الموعد التالي داخل التطبيق.", "قيود التطبيقات: تحقق من صلاحية مدة استخدام الجهاز واختيار تطبيق واحد على الأقل.", "بيانات اللغة: جهّز بيانات ترجمة Apple على الجهاز من التنبيه في الصفحة الرئيسية.", "iCloud: تحقق من تسجيل الدخول إلى iCloud Drive ثم حاول لاحقاً.", "تحديث الكلمات: تبقى الكلمات المضمّنة متاحة دون اتصال."] },
      privacy: { title: "سياسة الخصوصية", updated: "آخر تحديث: 22 يوليو 2026", sections: [["جمع البيانات", "لا يلزم حساب. لا يجمع خادم المطوّر اسمك أو بريدك الإلكتروني أو سجل تعلّمك."], ["البيانات على الجهاز", "تُحفظ الإعدادات وسجل التعلّم ونتائج الاختبارات وحالة المراجعة ورموز مدة استخدام الجهاز المحددة على الجهاز. تُحفظ أحداث استخدام مجهولة على الجهاز فقط لمدة تصل إلى 30 يوماً أو 10,000 حدث، ويمكنك عرضها أو حذفها أو تصديرها."], ["نسخة iCloud الاحتياطية", "عند التفعيل تُحفظ نسخة مشفرة من بيانات التعلّم في حاوية iCloud الخاصة بك، ولا يستطيع المطوّر الوصول إليها."], ["استخدام الشبكة", "يحدّث التطبيق ملفات CSV للكلمات من GitHub عام ويتحقق من المشتريات عبر StoreKit. تستخدم اللغات المدعومة ترجمة Apple على الجهاز. لا تُرسل الإجابات أو اختيارات مدة استخدام الجهاز إلى المطوّر."], ["الإشعارات", "تُجدول إشعارات الصباح والليل محلياً، ويُسجّل فتح الإشعار في سجل الأحداث على الجهاز فقط."], ["التتبع", "لا توجد إعلانات ولا يتتبعك التطبيق عبر تطبيقات أو مواقع شركات أخرى."]] },
      terms: { title: "شروط الاستخدام", updated: "آخر تحديث: 22 يوليو 2026", sections: [["اتفاقية Apple القياسية", "تسري اتفاقية ترخيص المستخدم النهائي القياسية من Apple على هذا التطبيق."], ["الخدمة", "يوفر التطبيق تعلم المفردات وإشعارات المراجعة والمنبهات وقيوداً مؤقتة لمدة استخدام الجهاز للتطبيقات التي تختارها."], ["الاشتراكات", "يتجدد Pro تلقائياً. تُحصّل الخطة الشهرية كل شهر والسنوية كل سنة من Apple Account. بعد التجربة تُحصّل الرسوم السنوية المعروضة. يمكنك الإلغاء من إعدادات حساب App Store قبل انتهاء الفترة الحالية بـ24 ساعة على الأقل."], ["حدود مهمة", "لا يضمن التطبيق نتيجة اختبار أو تحسن الدرجة. تعتمد المنبهات وقيود التطبيقات على iOS وإعدادات الجهاز وأطر Apple."], ["الحقوق والمسؤولية", "حقوق التطبيق والمحتوى الأصلي للمطوّر أو لأصحابها الشرعيين، وتُحدد المسؤولية بالقدر الذي يسمح به القانون."]] },
      footer: "تجربة لتعلّم الكلمات الإنجليزية مصممة في اليابان. لا يُنشر بريد إلكتروني للدعم."
    },
    it: {
      brand: "Sakitango", made: "Ideata e progettata in Giappone", title: "Prima 3 domande. Poi i social.",
      lede: "Trasforma il gesto di prendere il telefono nel momento giusto per ripassare le parole inglesi che stai dimenticando.",
      featuresTitle: "Lo studio interviene al mattino, di giorno e la sera",
      features: ["Ripasso prima di spegnere la sveglia", "Missione di sblocco prima dei social", "Ripasso serale con ripetizione dilazionata", "TOEIC, EIKEN, TOEFL iBT e IELTS", "Voce e traduzione sul dispositivo"],
      privacyNote: "Nessun account, pubblicità o SDK di analisi esterno. Lo storico di studio e degli eventi resta principalmente sul dispositivo.",
      support: { title: "Assistenza", lede: "Segnala un problema, invia un suggerimento o fai una domanda.", contactTitle: "Contatti", contactText: "Non inserire dati personali o di acquisto. Indica problema, dispositivo e versione iOS.", contactButton: "Contatta tramite GitHub Issues", checksTitle: "Controlli rapidi", checks: ["Ripasso serale: attiva banner e suoni nelle Impostazioni iOS, poi verifica il prossimo orario nell'app.", "Limiti app: verifica l'accesso a Tempo di utilizzo e la selezione di almeno un'app.", "Dati lingua: prepara i dati di traduzione Apple sul dispositivo dall'avviso nella Home.", "iCloud: verifica l'accesso a iCloud Drive e riprova più tardi.", "Aggiornamento parole: le parole incluse restano disponibili offline."] },
      privacy: { title: "Informativa sulla privacy", updated: "Ultimo aggiornamento: 22 luglio 2026", sections: [["Dati raccolti", "Non serve un account. Il server dello sviluppatore non raccoglie nome, email o cronologia di studio."], ["Dati sul dispositivo", "Impostazioni, cronologia di studio, risultati, stato dei ripassi e token di Tempo di utilizzo selezionati sono salvati sul dispositivo. Gli eventi anonimi restano solo sul dispositivo fino a 30 giorni o 10.000 eventi e puoi consultarli, eliminarli o esportarli."], ["Backup iCloud", "Se attivo, un backup cifrato dei dati di studio è salvato nel tuo contenitore iCloud. Lo sviluppatore non può accedervi."], ["Rete", "L'app aggiorna i CSV del vocabolario da GitHub pubblico e verifica gli acquisti con StoreKit. Le lingue supportate usano la traduzione Apple sul dispositivo. Risposte e selezioni di Tempo di utilizzo non vengono inviate allo sviluppatore."], ["Notifiche", "Le notifiche del mattino e della sera sono programmate localmente. L'apertura è registrata solo nello storico eventi sul dispositivo."], ["Tracciamento", "L'app non contiene pubblicità e non ti traccia tra app o siti di altre aziende."]] },
      terms: { title: "Condizioni d'uso", updated: "Ultimo aggiornamento: 22 luglio 2026", sections: [["EULA standard Apple", "A questa app si applica l'Accordo di licenza con l'utente finale standard di Apple."], ["Servizio", "L'app offre studio del vocabolario, notifiche di ripasso, sveglie e limiti temporanei di Tempo di utilizzo per le app scelte."], ["Abbonamenti", "Pro si rinnova automaticamente. Il mensile viene addebitato ogni mese e l'annuale ogni anno sull'Apple Account. Dopo la prova viene addebitato il prezzo annuale mostrato. Annulla nelle impostazioni dell'account App Store almeno 24 ore prima della fine del periodo."], ["Limiti", "Non sono garantiti risultati d'esame o aumenti di punteggio. Sveglie e limiti dipendono da iOS, impostazioni del dispositivo e framework Apple."], ["Diritti e responsabilità", "I diritti sull'app e sui contenuti originali appartengono allo sviluppatore o ai legittimi titolari. La responsabilità è limitata nei limiti consentiti dalla legge."]] },
      footer: "Un'esperienza di vocabolario ideata in Giappone. Nessun indirizzo email pubblico per l'assistenza."
    }
  };

  copy.es = Object.assign({}, copy.en, { brand: "Sakitango", made: "Ideada y diseñada en Japón", title: "Primero 3 preguntas. Después, las redes.", lede: "Convierte el momento de coger el móvil en un repaso oportuno del vocabulario inglés.", footer: "Una experiencia de vocabulario diseñada en Japón. No se publica una dirección de correo de soporte." });
  copy.fr = Object.assign({}, copy.en, { brand: "Sakitango", made: "Imaginée et conçue au Japon", title: "3 questions d'abord. Les réseaux ensuite.", lede: "Transformez le moment où vous prenez votre téléphone en révision de vocabulaire anglais.", footer: "Une expérience de vocabulaire conçue au Japon. Aucune adresse e-mail d'assistance n'est publiée." });
  copy.ru = Object.assign({}, copy.en, { brand: "Sakitango", made: "Разработано в Японии", title: "Сначала 3 вопроса. Потом соцсети.", lede: "Превратите привычку брать телефон в своевременное повторение английских слов.", footer: "Опыт изучения слов, созданный в Японии. Публичный адрес поддержки не используется." });
  copy["zh-Hans"] = Object.assign({}, copy["zh-Hant"], { brand: "Sakitango", made: "日本企划与设计", title: "先答3题，再开社交应用。", lede: "把拿起手机的瞬间，变成复习快要忘记的英语单词的时机。", footer: "源自日本的英语词汇学习体验。支持页面不公开电子邮箱地址。" });

  function normalizeLocale(value) {
    const raw = (value || "").replace("_", "-").toLowerCase();
    if (raw.startsWith("zh") && (raw.includes("hant") || raw.includes("tw") || raw.includes("hk"))) return "zh-Hant";
    if (raw.startsWith("zh")) return "zh-Hans";
    const base = raw.split("-")[0];
    return languages.some(([code]) => code === base) ? base : "en";
  }

  const params = new URLSearchParams(location.search);
  const locale = normalizeLocale(params.get("lang") || localStorage.getItem("sakitango.lang") || navigator.language || "ja");
  const t = copy[locale] || copy.en;
  const page = document.body.dataset.page || "index";

  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  document.querySelector(".brand span:last-child").textContent = t.brand;

  const picker = document.getElementById("language-picker");
  languages.forEach(([code, label]) => {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = label;
    option.selected = code === locale;
    picker.appendChild(option);
  });
  picker.addEventListener("change", () => {
    localStorage.setItem("sakitango.lang", picker.value);
    const next = new URL(location.href);
    next.searchParams.set("lang", picker.value);
    location.href = next.toString();
  });

  const withLocale = (path) => `${path}?lang=${encodeURIComponent(locale)}`;
  document.querySelector(".brand").href = withLocale("./index.html");

  function renderIndex() {
    return `<span class="eyebrow">${t.made}</span><h1>${t.title}</h1><p class="lede">${t.lede}</p><div class="actions"><a class="button primary" href="${withLocale("./support.html")}">${t.support.title}</a><a class="button" href="${withLocale("./privacy.html")}">${t.privacy.title}</a></div><section><h2>${t.featuresTitle}</h2><ul class="feature-list">${t.features.map((item) => `<li>${item}</li>`).join("")}</ul></section><section class="notice"><p>${t.privacyNote}</p></section>`;
  }

  function renderSupport() {
    const s = t.support;
    return `<span class="eyebrow">${t.made}</span><h1>${s.title}</h1><p class="lede">${s.lede}</p><section><h2>${s.contactTitle}</h2><p>${s.contactText}</p><a class="button primary" href="https://github.com/YujiroOkano/wordgate-support/issues">${s.contactButton}</a></section><section><h2>${s.checksTitle}</h2><ul class="check-list">${s.checks.map((item) => `<li>${item}</li>`).join("")}</ul></section>`;
  }

  function renderPolicy(policy, includeEula) {
    const sections = policy.sections.map(([title, body], index) => {
      const eula = includeEula && index === 0 ? ` <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Apple Standard EULA</a>` : "";
      return `<section><h2>${title}</h2><p>${body}${eula}</p></section>`;
    }).join("");
    return `<span class="eyebrow">${t.made}</span><h1>${policy.title}</h1><p>${policy.updated}</p>${sections}<section><h2>${t.support.contactTitle}</h2><p><a href="${withLocale("./support.html")}">${t.support.contactButton}</a></p></section>`;
  }

  const content = document.getElementById("content");
  if (page === "index") content.innerHTML = renderIndex();
  if (page === "support") content.innerHTML = renderSupport();
  if (page === "privacy") content.innerHTML = renderPolicy(t.privacy, false);
  if (page === "terms") content.innerHTML = renderPolicy(t.terms, true);

  const footerLabels = locale === "ja"
    ? ["ホーム", "サポート", "プライバシー", "利用規約"]
    : ["Home", t.support.title, t.privacy.title, t.terms.title];
  document.getElementById("footer-links").innerHTML = ["index", "support", "privacy", "terms"].map((name, index) => `<a href="${withLocale(`./${name}.html`)}">${footerLabels[index]}</a>`).join("");
  document.getElementById("footer-note").textContent = t.footer;
  document.title = `${page === "index" ? t.brand : (page === "support" ? t.support.title : page === "privacy" ? t.privacy.title : t.terms.title)} | ${t.brand}`;
})();
