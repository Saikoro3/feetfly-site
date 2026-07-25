(() => {
  "use strict";

  const SITE_CONFIG = Object.freeze({
    supportEmail: "raio.kharlharary@gmail.com",
    appStoreUrl: "",
    languageStorageKey: "feetfly-language"
  });

  const COPY = {
    en: {
      common: {
        skip: "Skip to content",
        altitude: "ALTITUDE",
        language: "Language",
        nav: {
          primary: "Primary navigation",
          home: "Home",
          how: "How it works",
          map: "The map",
          model: "The model",
          support: "Support",
          privacy: "Privacy"
        },
        demo: {
          start: "Start the descent",
          running: "Descending…",
          replay: "Replay the descent"
        },
        footer: {
          note: "A visual descent over a place you choose.",
          email: "Email us",
          copyright: "© FEET FLY. Built as an educational visualization."
        }
      },
      home: {
        title: "FEET FLY — A visual descent",
        description: "FEET FLY is an educational visual descent over a place you choose in Apple Maps.",
        hero: {
          eyebrow: "A map-based descent visualizer for iPhone",
          title: "A descent you can see.",
          lede: "Choose a place. Set a starting altitude. Watch a simplified atmosphere unfold all the way to the ground.",
          primary: "See how it works",
          secondary: "Get support",
          availability: "Coming to the App Store",
          note: "Educational visualization — not real-world safety guidance."
        },
        visual: {
          caption: "FLIGHT TRACE / 01",
          captionRight: "SATELLITE VIEW",
          status: "VISUALIZATION READY",
          location: "CUPERTINO, CA",
          aria: "Illustrated satellite-style map with a descending flight trace from ten thousand feet to ground",
          placeLabel: "PLACE / SELECTED",
          groundLabel: "GROUND / 0 M",
          phaseLabel: "PHASE",
          phaseReady: "READY",
          phaseFalling: "ATMOSPHERIC DESCENT",
          phaseLanded: "TOUCHDOWN",
          footnote: "The illustration is an atmospheric interface study, not live map imagery."
        },
        demo: {
          start: "Start the descent"
        },
        signal: {
          aria: "FEET FLY highlights",
          place: "Your place",
          altitude: "Your altitude",
          view: "One continuous view",
          educational: "Educational by design"
        },
        how: {
          eyebrow: "The ritual",
          title: "Three inputs. One long look down.",
          intro: "FEET FLY keeps the controls small so the descent can stay large."
        },
        steps: {
          place: {
            title: "Choose a place",
            body: "Search Apple Maps or tap a visible point. No device-location permission is requested.",
            meta: "SEARCH / TAP"
          },
          altitude: {
            title: "Set the altitude",
            body: "Enter feet or kilometres, then start from a familiar preset — 1 km, 10,000 ft, or Everest.",
            meta: "FEET / KM"
          },
          watch: {
            title: "Watch it unfold",
            body: "Altitude, speed, atmosphere, and camera perspective move together until touchdown.",
            meta: "1× / 2× / 4×"
          }
        },
        map: {
          eyebrow: "The map is the stage",
          title: "A place you recognize makes the distance feel real.",
          body: "The scene uses Apple satellite imagery and available 3D elevation as context. The camera begins overhead, then eases toward the ground as the simulated altitude falls.",
          item1: "Choose a city, address, landmark, or map point.",
          item2: "Keep the map and the physics on the same altitude.",
          item3: "Expect imagery and 3D detail to vary by place.",
          link: "Read the support notes →"
        },
        console: {
          aria: "Illustration of the FEET FLY in-flight interface",
          live: "IN FLIGHT",
          speedLabel: "DESCENT SPEED",
          phase: "ATMOSPHERIC DESCENT",
          bottomLeft: "CAMERA / OVERHEAD → GROUND",
          bottomRight: "PLAYBACK 1×"
        },
        model: {
          eyebrow: "Under the hood",
          title: "A simplified atmosphere, made visible.",
          intro: "The model is intentionally legible: enough structure to make the journey interesting, never a claim of prediction.",
          gravity: {
            title: "Gravity",
            body: "A constant Earth-gravity baseline keeps the motion easy to follow."
          },
          air: {
            title: "Air",
            body: "Pressure and density follow illustrative exponential curves as altitude changes."
          },
          drag: {
            title: "Drag",
            body: "Air resistance grows with velocity squared and opposes the descent."
          }
        },
        boundary: {
          label: "EDUCATIONAL SIMULATION",
          body: "FEET FLY does not model a person, equipment, terrain, weather, or safe procedures. Its imagery is atmospheric context, not real-world guidance."
        },
        closing: {
          eyebrow: "Keep looking down",
          title: "Curious about the view?",
          body: "Find answers about maps, the model, privacy, and the small choices that shape the descent.",
          cta: "Visit support"
        }
      },
      support: {
        title: "FEET FLY Support",
        description: "Support and frequently asked questions for FEET FLY.",
        hero: {
          eyebrow: "Support / FEET FLY",
          title: "Need a hand with the descent?",
          lede: "Send a note and include the few details below. It helps us see the same view you saw.",
          cta: "Email support"
        },
        contact: {
          kicker: "A useful note includes",
          title: "The shape of the problem.",
          item1: "iPhone or iPad model",
          item2: "iOS version",
          item3: "Starting altitude and unit",
          item4: "What you expected and what happened",
          item5: "Whether Apple Maps imagery was available",
          note: "Please do not include passwords, payment information, or anything you would not normally send by email."
        },
        faq: {
          eyebrow: "Common questions",
          title: "Before you write",
          q1: "Why does FEET FLY need a network connection?",
          a1: "The flight scene uses Apple satellite imagery and available 3D elevation. If the network is unavailable, the app prevents a new map-based flight from starting. If the connection drops during a flight, the simulation data can continue while the imagery may stop updating.",
          q2: "Does the app ask for my device location?",
          a2: "No. FEET FLY does not request device-location permission. You choose a place by searching Apple Maps or tapping on the visible map, and the selected place is used only for the current experience.",
          q3: "Why does the camera angle change near the ground?",
          a3: "The camera begins overhead and moves toward an oblique ground view during the final part of the descent. This keeps the change in perspective continuous rather than cutting to a new scene.",
          q4: "What do the 1×, 2×, and 4× controls change?",
          a4: "They change playback speed, not the underlying model. Tap the in-flight control to cycle through real time, two times, and four times speed.",
          q5: "Is the result real-world skydiving or aviation guidance?",
          a5: "No. FEET FLY is an educational visualization with illustrative gravity, air density, pressure, and drag. It does not model a person, equipment, terrain, weather, or safe procedures.",
          q6: "Why does the map look different from place to place?",
          a6: "Apple satellite imagery and 3D elevation coverage vary by location and network conditions. FEET FLY does not cache map imagery, so the current availability of Apple Maps affects the scene."
        },
        closing: {
          eyebrow: "Still curious?",
          title: "Tell us where the view went sideways.",
          body: "A short, specific note is perfect. We read support email as part of keeping the experiment clear and useful.",
          cta: "Write to support →"
        }
      },
      privacy: {
        title: "FEET FLY Privacy",
        description: "Privacy information for the FEET FLY app and website.",
        hero: {
          eyebrow: "Privacy / FEET FLY",
          title: "Privacy, plainly stated.",
          lede: "FEET FLY is a small visual experiment. This page explains what the app and this site do with information."
        },
        updatedLabel: "Last updated",
        updatedDate: "July 25, 2026",
        index: {
          kicker: "On this page",
          app: "App data",
          maps: "Apple Maps",
          support: "Support email",
          site: "This website",
          changes: "Changes"
        },
        app: {
          eyebrow: "01 / App data",
          title: "The app does not need to know where you are.",
          body1: "FEET FLY does not request device-location permission, require an account, run advertising, or use analytics SDKs. The selected place and the simulation settings are used to create the current experience on your device.",
          body2: "The app does not send selected places to a FEET FLY server, and it does not cache Apple Maps imagery. Network, map, and system services can still process information as part of providing their own features."
        },
        maps: {
          eyebrow: "02 / Apple Maps",
          title: "Maps are provided by Apple.",
          body: "When you search for a place or load satellite imagery and 3D elevation, FEET FLY uses Apple MapKit. Apple may receive and process requests needed to provide those map features under its own terms and privacy policy.",
          link: "Read Apple’s Privacy Policy ↗"
        },
        support: {
          eyebrow: "03 / Support email",
          title: "You choose what to send us.",
          body1: "If you email support, we receive the email address, message, and any attachments you decide to include. We use that information to respond to your request and diagnose the issue you describe.",
          body2: "Please do not send passwords, payment details, precise personal location information, or other sensitive information unless it is necessary and appropriate for your request.",
          link: "Contact FEET FLY support →"
        },
        site: {
          eyebrow: "04 / This website",
          title: "No trackers hiding in the map lines.",
          body: "This static site does not use cookies, advertising pixels, third-party analytics, or embedded external fonts. If you switch to Japanese, the site stores that language preference in your browser’s local storage so it can remember your choice. That preference is not sent to us."
        },
        changes: {
          eyebrow: "05 / Changes",
          title: "If this page changes, the date changes too.",
          body: "We may update this page when the app, website, or support process changes. The date at the top of this page identifies the latest revision."
        }
      },
      notFound: {
        title: "FEET FLY — Page not found",
        eyebrow: "404 / OUT OF RANGE",
        heading: "This view is not on the map.",
        body: "The page you followed may have drifted. Return to the start of the descent.",
        cta: "Back to FEET FLY"
      }
    },
    ja: {
      common: {
        skip: "本文へ移動",
        altitude: "高度",
        language: "言語",
        nav: {
          primary: "メインナビゲーション",
          home: "ホーム",
          how: "使い方",
          map: "マップ",
          model: "モデル",
          support: "サポート",
          privacy: "プライバシー"
        },
        demo: {
          start: "降下を始める",
          running: "降下中…",
          replay: "もう一度降下する"
        },
        footer: {
          note: "選んだ場所を、上空から眺めるビジュアル体験。",
          email: "メールで問い合わせる",
          copyright: "© FEET FLY. 教育目的のビジュアライゼーション。"
        }
      },
      home: {
        title: "FEET FLY — 見える降下",
        description: "FEET FLYは、Apple Mapsで選んだ場所を上空から降下していく教育用ビジュアライゼーションです。",
        hero: {
          eyebrow: "iPhoneのためのマップ連動型降下ビジュアライザー",
          title: "見える降下を。",
          lede: "場所を選び、高度を決める。簡略化した大気の変化を、地上までひと続きで眺めます。",
          primary: "体験の流れを見る",
          secondary: "サポートを見る",
          availability: "App Store公開準備中",
          note: "教育用ビジュアライゼーション — 現実の安全手順を示すものではありません。"
        },
        visual: {
          caption: "FLIGHT TRACE / 01",
          captionRight: "SATELLITE VIEW",
          status: "ビジュアライゼーション準備完了",
          location: "カリフォルニア州クパチーノ",
          aria: "1万フィートから地上へ降下する軌跡を重ねた、衛星写真風の地図イラスト",
          placeLabel: "場所 / 選択済み",
          groundLabel: "地上 / 0 M",
          phaseLabel: "フェーズ",
          phaseReady: "準備完了",
          phaseFalling: "大気圏を降下中",
          phaseLanded: "タッチダウン",
          footnote: "このイラストは大気を感じるためのUI表現であり、実際の地図画像ではありません。"
        },
        demo: {
          start: "降下を始める"
        },
        signal: {
          aria: "FEET FLYの特徴",
          place: "選んだ場所",
          altitude: "選んだ高度",
          view: "ひと続きの視点",
          educational: "教育目的の設計"
        },
        how: {
          eyebrow: "体験の流れ",
          title: "3つを決めて、長い降下を眺める。",
          intro: "操作は小さく、降下のスケールは大きく。FEET FLYはそんなバランスで作られています。"
        },
        steps: {
          place: {
            title: "場所を選ぶ",
            body: "Apple Mapsで検索するか、見えている地図をタップします。端末の位置情報許可は求めません。",
            meta: "検索 / タップ"
          },
          altitude: {
            title: "高度を決める",
            body: "フィートまたはキロメートルで入力し、1 km・10,000 ft・エベレストのプリセットから始められます。",
            meta: "フィート / km"
          },
          watch: {
            title: "変化を眺める",
            body: "高度・速度・大気・カメラの視点が連動し、タッチダウンまで移り変わります。",
            meta: "1倍 / 2倍 / 4倍"
          }
        },
        map: {
          eyebrow: "マップが舞台",
          title: "知っている場所だから、距離を感じられる。",
          body: "Appleの衛星画像と利用可能な3D標高データを、体験の背景として使います。カメラは真上から始まり、シミュレーション上の高度が下がると地上へ近づきます。",
          item1: "都市・住所・ランドマーク・地図上の地点を選べます。",
          item2: "マップの視点と物理モデルを同じ高度に合わせます。",
          item3: "衛星画像や3D表示の細かさは場所によって異なります。",
          link: "サポートの説明を読む →"
        },
        console: {
          aria: "FEET FLYの飛行中インターフェースのイラスト",
          live: "飛行中",
          speedLabel: "降下速度",
          phase: "大気圏を降下中",
          bottomLeft: "カメラ / 真上 → 地上",
          bottomRight: "再生 1倍"
        },
        model: {
          eyebrow: "モデルの中身",
          title: "簡略化した大気を、目に見える形に。",
          intro: "旅を面白くする構造は残しながら、予測をうたわない。モデルは意図的に読みやすくしています。",
          gravity: {
            title: "重力",
            body: "一定の地球重力を基準にして、動きの変化を追いやすくしています。"
          },
          air: {
            title: "空気",
            body: "高度に応じて、気圧と空気密度を簡略化した指数曲線で表現します。"
          },
          drag: {
            title: "抗力",
            body: "空気抵抗は速度の二乗に応じて強くなり、降下に逆らいます。"
          }
        },
        boundary: {
          label: "教育用シミュレーション",
          body: "FEET FLYは人・装備・地形・天候・安全手順をモデル化していません。画像は大気を感じるための背景であり、現実の案内ではありません。"
        },
        closing: {
          eyebrow: "視線を下へ",
          title: "この眺めについて知りたい？",
          body: "マップ、モデル、プライバシー、降下を形づくる小さな選択について説明します。",
          cta: "サポートを見る"
        }
      },
      support: {
        title: "FEET FLY サポート",
        description: "FEET FLYのサポートとよくある質問。",
        hero: {
          eyebrow: "サポート / FEET FLY",
          title: "降下について困っていますか？",
          lede: "下記の情報を添えてメールしてください。同じ景色を再現しやすくなります。",
          cta: "サポートにメールする"
        },
        contact: {
          kicker: "役立つ問い合わせに含めること",
          title: "問題のかたち。",
          item1: "iPhoneまたはiPadのモデル",
          item2: "iOSのバージョン",
          item3: "開始高度と単位",
          item4: "期待したことと起きたこと",
          item5: "Apple Mapsの画像が表示されていたか",
          note: "パスワード、決済情報、通常メールで送らない情報は記載しないでください。"
        },
        faq: {
          eyebrow: "よくある質問",
          title: "問い合わせる前に",
          q1: "なぜネットワーク接続が必要ですか？",
          a1: "飛行シーンではAppleの衛星画像と利用可能な3D標高データを使います。ネットワークがない場合、新しいマップ連動型の飛行は開始できません。飛行中に接続が切れた場合は、画像の更新が止まってもシミュレーションデータは継続できます。",
          q2: "端末の位置情報を取得しますか？",
          a2: "いいえ。FEET FLYは端末の位置情報許可を求めません。Apple Mapsで検索するか、表示されたマップをタップして場所を選び、その場所は現在の体験にだけ使います。",
          q3: "地上に近づくとカメラの角度が変わるのはなぜですか？",
          a3: "カメラは真上から始まり、降下の最後の区間で地上を斜めに見る視点へ移ります。別のシーンへ切り替えるのではなく、視点の変化を連続させています。",
          q4: "1倍・2倍・4倍の操作は何を変えますか？",
          a4: "物理モデルではなく、再生速度を変えます。飛行中のボタンをタップすると、リアルタイム・2倍・4倍を順番に切り替えられます。",
          q5: "現実のスカイダイビングや航空の案内ですか？",
          a5: "いいえ。FEET FLYは重力・空気密度・気圧・抗力を例示的に扱う教育用ビジュアライゼーションです。人・装備・地形・天候・安全手順はモデル化していません。",
          q6: "場所によってマップの見え方が違うのはなぜですか？",
          a6: "Appleの衛星画像と3D標高の対応状況は、場所やネットワーク条件によって異なります。FEET FLYはマップ画像をキャッシュしないため、Apple Mapsの現在の利用状況がシーンに影響します。"
        },
        closing: {
          eyebrow: "まだ気になりますか？",
          title: "どこで景色が崩れたか教えてください。",
          body: "短く具体的なメモで十分です。体験をわかりやすく保つために、サポートメールを確認しています。",
          cta: "サポートに書く →"
        }
      },
      privacy: {
        title: "FEET FLY プライバシー",
        description: "FEET FLYアプリとWebサイトのプライバシー情報。",
        hero: {
          eyebrow: "プライバシー / FEET FLY",
          title: "プライバシーを、明確に。",
          lede: "FEET FLYは小さなビジュアル実験です。アプリとこのサイトが情報をどう扱うかを説明します。"
        },
        updatedLabel: "最終更新",
        updatedDate: "2026年7月25日",
        index: {
          kicker: "このページの内容",
          app: "アプリのデータ",
          maps: "Apple Maps",
          support: "サポートメール",
          site: "このWebサイト",
          changes: "変更について"
        },
        app: {
          eyebrow: "01 / アプリのデータ",
          title: "アプリは、あなたがどこにいるかを知る必要がありません。",
          body1: "FEET FLYは端末の位置情報許可を求めず、アカウント、広告、分析SDKも必要としません。選んだ場所とシミュレーション設定は、端末上で現在の体験を作るために使います。",
          body2: "選択した場所をFEET FLYのサーバーへ送信したり、Apple Mapsの画像をキャッシュしたりすることはありません。ただし、ネットワーク・マップ・システムの各サービスは、それぞれの機能を提供するために情報を処理する場合があります。"
        },
        maps: {
          eyebrow: "02 / Apple Maps",
          title: "マップはAppleが提供します。",
          body: "場所を検索したり、衛星画像・3D標高を読み込んだりするとき、FEET FLYはApple MapKitを使います。Appleは、マップ機能の提供に必要なリクエストを、独自の規約とプライバシーポリシーに基づいて受信・処理する場合があります。",
          link: "Appleのプライバシーポリシーを読む ↗"
        },
        support: {
          eyebrow: "03 / サポートメール",
          title: "送る情報は、あなたが選びます。",
          body1: "サポートへメールすると、メールアドレス、本文、任意で添付したファイルを受け取ります。問い合わせへの返信と、記載された問題の確認に利用します。",
          body2: "必要かつ適切な場合を除き、パスワード、決済情報、正確な個人位置情報などの機微な情報は送らないでください。",
          link: "FEET FLYのサポートに連絡する →"
        },
        site: {
          eyebrow: "04 / このWebサイト",
          title: "地図の線にトラッカーは隠していません。",
          body: "この静的サイトは、Cookie、広告ピクセル、第三者分析、外部フォントの埋め込みを使用しません。日本語へ切り替えた場合は、選択を覚えておくために言語設定をブラウザのlocalStorageへ保存します。この設定が私たちへ送信されることはありません。"
        },
        changes: {
          eyebrow: "05 / 変更について",
          title: "このページが変われば、日付も変わります。",
          body: "アプリ、Webサイト、サポート方法に変更があった場合、このページを更新することがあります。ページ上部の日付が最新の改訂を示します。"
        }
      },
      notFound: {
        title: "FEET FLY — ページが見つかりません",
        eyebrow: "404 / 範囲外",
        heading: "この景色はマップにありません。",
        body: "リンク先が移動したのかもしれません。降下のスタート地点へ戻ってください。",
        cta: "FEET FLYへ戻る"
      }
    }
  };

  let currentLanguage = "en";
  const demoState = {
    running: false,
    completed: false,
    frame: null
  };

  function readStoredLanguage() {
    try {
      const stored = window.localStorage.getItem(SITE_CONFIG.languageStorageKey);
      return stored === "ja" || stored === "en" ? stored : "en";
    } catch {
      return "en";
    }
  }

  function writeStoredLanguage(language) {
    try {
      window.localStorage.setItem(SITE_CONFIG.languageStorageKey, language);
    } catch {
      // Private browsing modes may deny localStorage. The switch still works.
    }
  }

  function resolveCopy(key) {
    return key.split(".").reduce((value, part) => value?.[part], COPY[currentLanguage]);
  }

  function applyLanguage(language) {
    currentLanguage = language === "ja" ? "ja" : "en";
    document.documentElement.lang = currentLanguage;
    document.documentElement.dataset.language = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = resolveCopy(element.dataset.i18n);
      if (typeof value === "string") {
        element.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-meta]").forEach((element) => {
      const value = resolveCopy(element.dataset.i18nMeta);
      if (typeof value === "string") {
        element.setAttribute("content", value);
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = resolveCopy(element.dataset.i18nAriaLabel);
      if (typeof value === "string") {
        element.setAttribute("aria-label", value);
      }
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
      const isActive = button.dataset.language === currentLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelectorAll("[data-support-link]").forEach((link) => {
      link.href = buildMailto();
    });

    updateDemoLabels();
  }

  function buildMailto() {
    const subject = currentLanguage === "ja"
      ? "FEET FLY サポートについて"
      : "FEET FLY support request";
    const body = currentLanguage === "ja"
      ? "端末モデル:\niOSバージョン:\n開始高度・単位:\nネットワーク状態:\n\n発生したこと:\n"
      : "Device model:\niOS version:\nStarting altitude and unit:\nNetwork status:\n\nWhat happened:\n";
    return `mailto:${SITE_CONFIG.supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function updateDemoLabels() {
    const panel = document.querySelector("[data-flight-demo]");
    if (!panel) return;

    const label = panel.querySelector("[data-demo-label]");
    const phase = panel.querySelector("[data-demo-phase]");
    if (label) {
      const key = demoState.running
        ? "common.demo.running"
        : demoState.completed
          ? "common.demo.replay"
          : "common.demo.start";
      label.textContent = resolveCopy(key);
    }

    if (phase) {
      const key = demoState.running
        ? "home.visual.phaseFalling"
        : demoState.completed
          ? "home.visual.phaseLanded"
          : "home.visual.phaseReady";
      phase.textContent = resolveCopy(key);
      phase.dataset.i18n = key;
    }
  }

  function setupLanguageSwitch() {
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => {
        const language = button.dataset.language === "ja" ? "ja" : "en";
        writeStoredLanguage(language);
        applyLanguage(language);
      });
    });

    applyLanguage(readStoredLanguage());
  }

  function setupDemo() {
    const panel = document.querySelector("[data-flight-demo]");
    if (!panel) return;

    const button = panel.querySelector("[data-demo-toggle]");
    const altitude = panel.querySelector("[data-demo-altitude]");
    if (!button || !altitude) return;

    const setAltitude = (progress) => {
      const value = Math.max(0, Math.round(10_000 * (1 - progress)));
      const locale = currentLanguage === "ja" ? "ja-JP" : "en-US";
      altitude.textContent = new Intl.NumberFormat(locale).format(value);
    };

    const finish = () => {
      if (demoState.frame) {
        window.cancelAnimationFrame(demoState.frame);
        demoState.frame = null;
      }
      demoState.running = false;
      demoState.completed = true;
      panel.classList.add("has-landed");
      setAltitude(1);
      updateDemoLabels();
    };

    const start = () => {
      if (demoState.running) return;

      if (demoState.frame) {
        window.cancelAnimationFrame(demoState.frame);
        demoState.frame = null;
      }

      panel.classList.remove("has-landed");
      panel.classList.remove("is-descending");
      void panel.offsetWidth;
      panel.classList.add("is-descending");
      demoState.running = true;
      demoState.completed = false;
      setAltitude(0);
      updateDemoLabels();

      const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;
      if (reducedMotion) {
        finish();
        return;
      }

      const startedAt = window.performance.now();
      const duration = 5_000;
      const tick = (now) => {
        const progress = Math.min(1, (now - startedAt) / duration);
        setAltitude(progress);
        if (progress >= 1) {
          finish();
        } else {
          demoState.frame = window.requestAnimationFrame(tick);
        }
      };
      demoState.frame = window.requestAnimationFrame(tick);
    };

    button.addEventListener("click", start);
  }

  setupLanguageSwitch();
  setupDemo();
})();
