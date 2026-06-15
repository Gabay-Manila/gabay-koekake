const allQuestions = [
  // グループ1
  {
    id: 1,
    scene: "利用者様が「ちょっと手伝ってほしい」と言っています。",
    correct: "かしこまりました。何かお手伝いできることはありますか。",
    wrong1: "はい、わかりました。後でいいですか。",
    wrong2: "今忙しいので少し待ってください。",
    hint: "「かしこまりました」は丁寧な受け答えの基本です。",
    category: "基本の声かけ",
    tl_scene: "Sinabi ng kliyente na 'Gusto ko ng tulong.'",
    tl_hint: "Ang 'Kashikomarimashita' ang pinaka-magalang na paraan ng pagtugon sa kahilingan. Palaging tanggapin ang kahilingan nang may respeto at kaagad na alamin kung ano ang kailangan."
  },
  {
    id: 2,
    scene: "利用者様が食事中に何か困っていそうです。",
    correct: "何かお困りのことはありませんか。",
    wrong1: "何か問題がありますか。",
    wrong2: "どうして食べないんですか。",
    hint: "柔らかく、相手が答えやすい聞き方をしましょう。",
    category: "基本の声かけ",
    tl_scene: "Tila may problema ang kliyente habang kumakain.",
    tl_hint: "Magtanong nang malambot at sa paraang madaling masagot ng kliyente. Iwasan ang mga tanong na maaaring magpahiya o magpigil sa kanila na sumagot nang tapat."
  },
  {
    id: 3,
    scene: "利用者様が自分でボタンを留めようとして苦戦しています。",
    correct: "やりにくいところは、お手伝いしましょうか。",
    wrong1: "あ、代わりにやってあげますよ。",
    wrong2: "難しそうですね、自分でできますか。",
    hint: "まず本人の意思を確認してからサポートしましょう。",
    category: "基本の声かけ",
    tl_scene: "Nahihirapan ang kliyente sa pagtatali ng kanyang butones.",
    tl_hint: "Huwag agad na kumilos nang walang pahintulot. Tanungin muna kung gusto nilang tulungan. Iginagalang nito ang kalayaan at dignidad ng kliyente."
  },
  {
    id: 4,
    scene: "朝、起きてこられた利用者様に挨拶をします。",
    correct: "おはようございます。昨夜はよく眠れましたか？",
    wrong1: "おはようございます。もう朝ですよ、起きてください。",
    wrong2: "おはようございます。体調はどうですか？悪くないですか？",
    hint: "朝の挨拶に続けて、睡眠の状態を優しく気遣う言葉を添えましょう。",
    category: "基本の声かけ",
    tl_scene: "Binabati ang kliyente na nagising na sa umaga.",
    tl_hint: "Pagkatapos ng magandang umaga, magdagdag ng mapagmalasakit na tanong tungkol sa tulog. Nagpapakita ito ng tunay na pagmamalasakit sa kalusugan ng kliyente."
  },
  {
    id: 5,
    scene: "夜、就寝前の挨拶をします。",
    correct: "おやすみなさい。また明日、よろしくお願いいたします。",
    wrong1: "もう寝る時間ですよ。おやすみなさい。",
    wrong2: "明日は早いので、早く寝てくださいね。",
    hint: "一日の終わりを心地よく迎えていただけるよう、丁寧な挨拶で締めくくります。",
    category: "基本の声かけ",
    tl_scene: "Nagpapaalam sa kliyente bago matulog sa gabi.",
    tl_hint: "Tapusin ang araw nang may magalang at mainit na pagbati. Ang 'Yoroshiku onegai itashimasu' ay nagpapahayag na ikaw ay handa para sa susunod na araw."
  },
  {
    id: 6,
    scene: "食事のメニューを説明して、食べ始めてもらおうとしています。",
    correct: "今日のメインは肉じゃがです。温かいうちにどうぞ召し上がってください。",
    wrong1: "ご飯ができたので、残さず食べてくださいね。",
    wrong2: "肉じゃがですから、スプーンで食べてください。",
    hint: "料理のおすすめポイントを伝えることで、食欲が湧くような声かけになります。",
    category: "基本の声かけ",
    tl_scene: "Ipinapaliwanag ang menu ng pagkain at hinihikayat ang kliyente na magsimulang kumain.",
    tl_hint: "Ilarawan ang pagkain sa paraang nakaka-engganyo. Ang pagsasabi ng 'habang mainit' ay nagdadagdag ng positibong imahe at nagpapalakas ng gana sa pagkain."
  },
  {
    id: 7,
    scene: "気づかず利用者様を不快にさせてしまいました。",
    correct: "気がつかなくて、すみません。",
    wrong1: "すみません、そういうつもりじゃなかったんです。",
    wrong2: "え、そうでしたか。わかりました。",
    hint: "謝罪は素直に、シンプルに伝えましょう。",
    category: "謝るとき",
    tl_scene: "Naging dahilan ng hindi komportableng pakiramdam ng kliyente nang hindi sinasadya.",
    tl_hint: "Humingi ng tawad nang simple at tapat. Huwag magbigay ng maraming paliwanag o dahilan. Ang simpleng paghingi ng tawad ay mas epektibo at mas magalang."
  },
  {
    id: 8,
    scene: "利用者様がお茶を手伝ってくれました。",
    correct: "いつもありがとうございます。助かります。",
    wrong1: "ありがとうございます。",
    wrong2: "お手伝いしてもらえて楽でした。",
    hint: "「助かります」の一言が加わると感謝の気持ちがより伝わります。",
    category: "お礼を言う",
    tl_scene: "Tumulong ang kliyente sa paghahanda ng tsaa.",
    tl_hint: "Ang dagdag na 'Tasukarimasu (nakatulong ka)' ay nagpapalalim ng pasasalamat. Nararamdaman ng kliyente na mahalaga ang kanilang tulong at nagdudulot ng kasiyahan."
  },
  {
    id: 9,
    scene: "利用者様が「いつも迷惑をかけてごめんね」と縮こまっています。",
    correct: "とんでもないです。〇〇様とお話しできて、私もいつも元気をいただいていますよ。",
    wrong1: "仕事ですから、気にしないでください。",
    wrong2: "迷惑だなんて思ってたら、この仕事はできませんよ。",
    hint: "「仕事だから」という割り切った言葉より、存在そのものを肯定する言葉が安心感を与えます。",
    category: "基本の声かけ",
    tl_scene: "Sinabi ng kliyente na 'Patawad na lagi ka akong nagagambala' at mukhang nahihiya.",
    tl_hint: "Huwag sabihing 'trabaho ko lang ito.' Sa halip, ipahayag na ang kliyente mismo ay nagbibigay sa iyo ng lakas at kasiyahan. Tinatanggap nito ang kanilang pagkatao, hindi lang kanilang pangangailangan."
  },
  {
    id: 10,
    scene: "施設内の行事（お祭りや誕生日会）が成功し、利用者様が喜んでいます。",
    correct: "〇〇様の笑顔がたくさん見られて、私たちスタッフも本当に嬉しいです！",
    wrong1: "準備が大変だったので、喜んでもらえて良かったです。",
    wrong2: "楽しかったですね。また来年やりましょう。",
    hint: "利用者様の喜びをスタッフの喜びとして共有することで、関係性がより深まります。",
    category: "お礼を言う",
    tl_scene: "Matagumpay ang isang event sa pasilidad at masaya ang kliyente.",
    tl_hint: "Ibahagi ang kasiyahan ng kliyente bilang kasiyahan mo rin. Nagpapalakip ito ng ugnayang mas malalim sa pagitan ng staff at kliyente."
  },

  // グループ2
  {
    id: 11,
    scene: "居室に入ろうとしています。ドアをノックしました。",
    correct: "失礼します。",
    wrong1: "入りますよ。",
    wrong2: "ちょっといいですか。",
    hint: "居室に入るときは必ず「失礼します」と一言添えましょう。",
    category: "居室への声かけ",
    tl_scene: "Kumakatok sa pinto bago pumasok sa silid ng kliyente.",
    tl_hint: "Palaging sabihin ang 'Shitsurei shimasu' bago pumasok. Iginagalang nito ang pribadong espasyo at dignidad ng kliyente. Ito ay isang pangunahing etiketa sa pag-aalaga."
  },
  {
    id: 12,
    scene: "利用者様に飲み物をお持ちしようとしています。",
    correct: "暖かいのと、冷たいの、どちらがよろしいですか。",
    wrong1: "お茶でいいですか。",
    wrong2: "何か飲みますか。",
    hint: "選択肢を提示することで、利用者様が自分で決められます。",
    category: "居室への声かけ",
    tl_scene: "Magdadala ng inumin para sa kliyente.",
    tl_hint: "Magbigay ng mga pagpipilian para makapili ang kliyente. Ang kakayahang pumili ay nagpapanatili ng dignidad at awtonomiya, kahit maliit na desisyon lamang."
  },
  {
    id: 13,
    scene: "今日の午後にリハビリ体操の予定があることを伝えます。",
    correct: "今日の午後はリハビリ体操がありますが、それまでゆっくりなさってくださいね。",
    wrong1: "午後にリハビリがありますから、準備しておいてください。",
    wrong2: "後でリハビリがあるので、休んでいてください。",
    hint: "予定を伝えるときも、それまでの時間を大切にする声かけが◎",
    category: "居室への声かけ",
    tl_scene: "Ipinapaalam ang iskedyul ng rehabilitation exercise ngayong hapon.",
    tl_hint: "Kapag nagpapaalam ng iskedyul, idagdag na 'magpahinga muna hanggang noon.' Ipinapakita nito na pinahahalagahan mo ang oras at kaginhawaan ng kliyente bago ang aktibidad."
  },
  {
    id: 14,
    scene: "利用者様の部屋が少し暗くなってきました。",
    correct: "お部屋は暗くないですか。電気をつけましょうか。",
    wrong1: "暗いですね。電気つけますね。",
    wrong2: "電気つけましょう。",
    hint: "勝手にするのではなく、一言確認してから行動しましょう。",
    category: "居室への声かけ",
    tl_scene: "Medyo naging madilim na ang silid ng kliyente.",
    tl_hint: "Huwag kumilos nang walang pahintulot. Tanungin muna ang kliyente bago mag-on ng ilaw. Ang munting pagtatanong na ito ay nagpapakita ng paggalang sa kanilang kagustuhan."
  },
  {
    id: 15,
    scene: "利用者様がナースコールを手の届かない場所に置いてしまっています。",
    correct: "ナースコールは手元に置いておきますね。",
    wrong1: "ナースコールが遠いですよ。危ないじゃないですか。",
    wrong2: "ナースコール、そんな所に置いておかないでください。",
    hint: "注意するのではなく、さりげなく安全を確保する声かけが理想的です。",
    category: "居室への声かけ",
    tl_scene: "Ang nurse call button ay nasa lugar na hindi maaabot ng kliyente.",
    tl_hint: "Huwag pagsabihan ang kliyente. Sa halip, tahimik na ayusin ang sitwasyon nang may magalang na paunawa. Pinapanatili nito ang kaligtasan nang hindi pinahihiya ang kliyente."
  },
  {
    id: 16,
    scene: "他のケアがあり、すぐに対応できない状況です。",
    correct: "こちらが終わったら、すぐ参ります。2、3分お待ちいただけますか。",
    wrong1: "ちょっと待っててください。",
    wrong2: "今手が離せないので後で来ます。",
    hint: "待ってもらう際は、具体的な時間の目安を伝えましょう。",
    category: "待ってもらう",
    tl_scene: "May ibang pag-aalaga at hindi kaagad makatutugon.",
    tl_hint: "Kapag nagpapaalam ng paghihintay, laging ibigay ang tiyak na oras. Ang 'ilang minuto' ay nagbibigay ng malinaw na inaasahan at nagpapababa ng pagkabalisa ng kliyente."
  },
  {
    id: 17,
    scene: "お風呂に入る時間になったことを伝えます。",
    correct: "お風呂の準備ができました。温かいお湯でさっぱりしましょうか。",
    wrong1: "お風呂の時間です。遅れると困るので早く行きましょう。",
    wrong2: "今日はお風呂の日ですから、準備してください。",
    hint: "義務的な響きを避け、「さっぱりしましょう」「気持ちいいですよ」と前向きなイメージを伝えます。",
    category: "居室への声かけ",
    tl_scene: "Panahon na para maligo ang kliyente.",
    tl_hint: "Iwasan ang tono ng utos. Gumamit ng positibong salita tulad ng 'magiging masaya' o 'magiging komportable.' Ginagawa nitong kasiya-siya ang isang rutinang aktibidad."
  },
  {
    id: 18,
    scene: "爪切りや耳掃除など、少し時間がかかるケアをお願いしたい時です。",
    correct: "爪が少し伸びてきましたね。今から10分ほどお時間をいただいてもよろしいですか？",
    wrong1: "爪を切るので、そこに座ってください。",
    wrong2: "爪切りをします。手を出してください。",
    hint: "これからのケア内容と、おおよその所要時間を伝えて同意を得ます。",
    category: "待ってもらう",
    tl_scene: "Nais magsagawa ng pag-aalaga tulad ng paggupit ng kuko na kailangan ng ilang oras.",
    tl_hint: "Palaging ipaliwanag ang gagawin at kung gaano katagal bago magsimula. Ang pagkuha ng pahintulot ay pangunahing prinsipyo ng mabuting pag-aalaga."
  },
  {
    id: 19,
    scene: "車椅子からベッドへの移乗の際、少しお体に触れる必要があります。",
    correct: "ベッドへ移りますね。少しお体に触れてもお怪我はありませんか？",
    wrong1: "動かしますよ。よいしょ。",
    wrong2: "体に触りますからね。我慢してください。",
    hint: "ボディメカニクスを用いた介助の際も、体に触れる前の事前告知と確認が必須です。",
    category: "基本の声かけ",
    tl_scene: "Kailangan hawakan ang katawan ng kliyente para sa paglipat mula wheelchair patungong kama.",
    tl_hint: "Palaging ipaalam bago hawakan ang katawan ng kliyente. Tanungin din kung may sakit o sugat. Ito ay nagpapakita ng paggalang at nagpipigil ng aksidente."
  },
  {
    id: 20,
    scene: "忙しい時間帯に、利用者様から「ちょっとお話を聞いて」と頼まれました。",
    correct: "ぜひお話を聞かせてください。ただ、今から5分だけ別の用事を済ませてきてもよろしいですか？",
    wrong1: "今とても忙しいので、後にしてくれませんか？",
    wrong2: "話なら他のスタッフに聞いてもらってください。",
    hint: "話を聴きたいという姿勢を見せつつ、具体的な時間を提示して待ってもらう交渉をします。",
    category: "待ってもらう",
    tl_scene: "Nais makipag-usap ng kliyente sa abalang oras.",
    tl_hint: "Ipakita na gustong makinig, ngunit humingi ng ilang minuto muna. Ang pagbibigay ng tiyak na oras at positibong saloobin ay nagpaparamdam sa kliyente na mahalaga sila."
  },

  // グループ3
  {
    id: 21,
    scene: "利用者様が廊下でゆっくり歩いています。",
    correct: "焦らないで、ごゆっくりどうぞ。",
    wrong1: "急いでください。転ぶといけないので。",
    wrong2: "もっとしっかり歩けますか？",
    hint: "相手のペースを尊重する声かけが大切です。",
    category: "注意を促す",
    tl_scene: "Dahan-dahang naglalakad ang kliyente sa koridor.",
    tl_hint: "Igalang ang bilis ng kliyente. Ang pagmamadali sa kanila ay nagdudulot ng stress at panganib pa. Ang 'dahan-dahan lang' ay nagpapalakas ng loob at nagpaparamdam ng kaligtasan."
  },
  {
    id: 22,
    scene: "段差のある場所を利用者様と一緒に歩いています。",
    correct: "段差がありますので、お気をつけください。",
    wrong1: "危ないですよ！転ばないでください。",
    wrong2: "ここ段差あるから、ちゃんと見て歩いて。",
    hint: "危険を知らせるときも、穏やかな言い方が安心感を与えます。",
    category: "注意を促す",
    tl_scene: "Naglalakad kasama ang kliyente sa lugar na may agwat sa sahig.",
    tl_hint: "Kapag nagbababala ng panganib, gumamit ng mahinahon na tono. Ang pagsigaw o malakas na babala ay maaaring magpagulat at magdulot ng mas malaking panganib."
  },
  {
    id: 23,
    scene: "車椅子を押して移動を始めようとしています。",
    correct: "それでは、食堂へ向けて動きますね。お足元は大丈夫ですか？",
    wrong1: "出発しますよ。しっかりつかまっていてください。",
    wrong2: "食堂に行きますから、動かしますね。",
    hint: "車椅子を動かす際は、行き先を伝え、足の位置などの安全を確認してから動かします。",
    category: "注意を促す",
    tl_scene: "Magsisimulang itulak ang wheelchair ng kliyente.",
    tl_hint: "Bago gumalaw, sabihin ang patutunguhan at tiyaking ligtas ang mga paa. Ang pagsasabi ng destinasyon ay nagbibigay ng kontrol at katahimikan sa kliyente."
  },
  {
    id: 24,
    scene: "利用者様が歩行中にふらつき、転びそうに見えてハッとしました。",
    correct: "おっと、失礼します。少しバランスを崩されましたね、支えますね。",
    wrong1: "危ない！！ 何をやってるんですか！",
    wrong2: "ほら言わんこっちゃない、だから車椅子にすればいいのに。",
    hint: "大声で叫ぶと驚いて余計に転倒する危険があります。冷静に体を受け止めながら声をかけます。",
    category: "注意を促す",
    tl_scene: "Natisod ang kliyente habang naglalakad at malapit nang mahulog.",
    tl_hint: "Huwag sumigaw dahil maaaring mas magulat ang kliyente at mahulog. Mahinahon na hawakan at sabihing susuportahan mo sila. Ang kalmadong tugon ay mas ligtas at mas epektibo."
  },
  {
    id: 25,
    scene: "冬の寒い日に、利用者様が薄着で外出しようとしています。",
    correct: "今日は外がとても冷え込んでいますよ。温かい上着を一枚羽織っていきませんか？",
    wrong1: "そんな格好じゃ風邪をひきますよ！ 着替えてください。",
    wrong2: "冬なのに薄着すぎます。おかしいですよ。",
    hint: "相手の行動を否定せず、外の気温の情報を伝えながら、自発的な選択を促します。",
    category: "注意を促す",
    tl_scene: "Malamig na araw ngunit manipis ang damit ng kliyenteng gustong lumabas.",
    tl_hint: "Huwag direktang punahin ang damit. Sa halip, ibahagi ang impormasyon tungkol sa temperatura at hayaang pumili ang kliyente. Iginagalang nito ang kalayaan nila sa pagpapasya."
  },
  {
    id: 26,
    scene: "食事が終わり、食器を片付けようとしています。",
    correct: "美味しかったですね。お皿をお下げしてもよろしいですか？",
    wrong1: "ごちそうさまでした。片付けますね。",
    wrong2: "全部食べましたね。お皿をもらっていきます。",
    hint: "食事が済んだことを確認し、お皿を下げる許可を必ず得てから行動します。",
    category: "基本の声かけ",
    tl_scene: "Tapos na ang pagkain at kukuhanin na ang mga pinggan.",
    tl_hint: "Palaging humingi ng pahintulot bago alisin ang mga pinggan. Ang simpleng tanong na ito ay nagpapakita ng paggalang at nagbibigay sa kliyente ng kontrol sa kanilang sariling espasyo."
  },
  {
    id: 27,
    scene: "利用者様がトイレに行きたいと手を挙げています。",
    correct: "お手洗いですね。すぐにご案内いたします。",
    wrong1: "ちょっと待ってください、今スタッフが足りないので。",
    wrong2: "さっき行ったばかりですが、またですか？",
    hint: "排泄の訴えには恥ずかしさや不安が伴うため、否定せず迅速・丁寧に受け止めます。",
    category: "基本の声かけ",
    tl_scene: "Itinaas ng kliyente ang kamay na nagpapahiwatig na gustong pumunta sa banyo.",
    tl_hint: "Ang pag-aayos ng CR ay isang sensitibong bagay para sa kliyente. Tumugon nang mabilis at walang paghuhusgya. Huwag kailanman tanungin kung bakit muli silang pupunta."
  },
  {
    id: 28,
    scene: "排泄の介助が終わり、衣服を整える場面です。",
    correct: "すっきりしましたね。ズボンを上げてもよろしいですか？",
    wrong1: "はい、終わりましたよ。ズボン上げますね。",
    wrong2: "寒いですから、早くズボンを上げちゃいましょう。",
    hint: "デリケートな介助だからこそ、一つひとつの動作の前に必ず確認の声をかけます。",
    category: "基本の声かけ",
    tl_scene: "Tapos na ang tulong sa CR at inaayos na ang damit.",
    tl_hint: "Dahil sensitibo ang ganitong tulong, kailangan tanungin bago bawat hakbang. Nagpaparamdam ito ng respeto at nagpoprotekta sa dignidad ng kliyente sa pinaka-personal na sandali."
  },
  {
    id: 29,
    scene: "利用者様が「私の財布がない、誰かに盗まれた」と怒っています。",
    correct: "それは心配ですね。私も一緒に探しますので、心当たりを教えていただけますか？",
    wrong1: "誰も盗むわけないじゃないですか！ 勘違いですよ。",
    wrong2: "いつも同じ場所に置いてありますよ。よく見てください。",
    hint: "まず「大切なものがなくて不安な気持ち」に寄り添います。",
    category: "基本の声かけ",
    tl_scene: "Galit ang kliyente na nagsasabing 'Nawala ang aking pitaka, may nagnakaw!'",
    tl_hint: "Huwag agad na itanggi ang kanilang sinasabi. Una, kilalanin ang kanilang pagkabahala at alok na tumulong sa paghahanap. Ang pakiramdam ng pagkawala ay tunay para sa kanila, kahit hindi totoo."
  },
  {
    id: 30,
    scene: "利用者様が食事を服にこぼしてしまい、ひどく恥ずかしがっています。",
    correct: "お洋服に少しついてしまいましたね。すぐに綺麗なお召し物と着替えましょうか。",
    wrong1: "あーあ、汚しちゃいましたね。気をつけないとダメですよ。",
    wrong2: "大丈夫、大丈夫！ 誰も見ていませんから気にする必要ないです。",
    hint: "恥ずかしい気持ちに配慮し、責める言葉は一切使わず、すぐに解決策を提案します。",
    category: "謝るとき",
    tl_scene: "Naibuwis ng kliyente ang pagkain sa damit at lubos na nahihiya.",
    tl_hint: "Huwag sisihin o gawing biro. Agad na mag-alok ng solusyon tulad ng pagpapalit ng damit. Pinoprotektahan nito ang dignidad ng kliyente sa mahirap na sandali."
  },

  // グループ4
  {
    id: 31,
    scene: "利用者様の表情が暗く、元気がなさそうです。",
    correct: "どうなさいましたか。",
    wrong1: "元気ないですね。どうしたの？",
    wrong2: "顔色が悪いですよ。大丈夫ですか。",
    hint: "「どうなさいましたか」は丁寧に相手の状態を確認する言葉です。",
    category: "体調確認",
    tl_scene: "Mukhang malungkot at walang sigla ang kliyente.",
    tl_hint: "Ang 'Dou nasaimashita ka' ay maingat at mapagmaalasakit na paraan ng pagtatanong. Iwasan ang mga pahayag tulad ng 'mukhang masama' na maaaring magpahiya o magpababa ng loob ng kliyente."
  },
  {
    id: 32,
    scene: "複雑な説明が必要な場面で、日本人スタッフの助けが必要です。",
    correct: "私より詳しくお話しできるスタッフを呼んで参りますので、少々お待ちください。",
    wrong1: "難しくてわかりません。他の人に聞いてください。",
    wrong2: "日本人スタッフを呼びます。待ってて。",
    hint: "引き継ぎの際は、自分の限界を素直に伝えながらも、丁寧な言葉遣いが大切です。",
    category: "引き継ぎ",
    tl_scene: "Kailangan ng kumplikadong paliwanag at kailangan ng tulong ng Japanese staff.",
    tl_hint: "Para sa mga Filipino caregiver, natural na may mga sandali na kailangan ng tulong sa wika. Sabihin ito nang magalang at agad na hanapin ang tamang staff. Ito ay propesyonal na gawi, hindi kakulangan."
  },
  {
    id: 33,
    scene: "車椅子のスピードが少し速く、利用者様が不安そうにしています。",
    correct: "少し急いでしまいましたね。スピードを落としますのでご安心ください。",
    wrong1: "これくらいのスピードなら大丈夫ですよ。",
    wrong2: "時間が遅れているので、少し我慢してください。",
    hint: "利用者様の不安に気づいたらすぐに共感し、安心してもらえる対応をとります。",
    category: "体調確認",
    tl_scene: "Medyo mabilis ang wheelchair at mukhang nababahala ang kliyente.",
    tl_hint: "Kapag napansin ang pagkabahala ng kliyente, agad na kumilos at huwag balewalain. Ang pagsasabi na ikaw ang nagkamali (hindi sila) ay nagpaparamdam ng kaligtasan at tiwala."
  },
  {
    id: 34,
    scene: "入浴中、湯船に浸かっている利用者様に声をかけます。",
    correct: "お湯加減はいかがですか？ ぬるかったり熱かったりしませんか？",
    wrong1: "気持ちいいですか？ ちょうどいいですよね。",
    wrong2: "のぼせるといけないので、あと3分で上がりますね。",
    hint: "お湯の温度が快適かどうか、相手の感覚を具体的に尋ねることが大切です。",
    category: "体調確認",
    tl_scene: "Nakababad ang kliyente sa banyo at kausapin sila.",
    tl_hint: "Tanungin nang tiyak kung malamig o mainit ang tubig. Huwag ipagpalagay na komportable ang lahat. Ang mataas na temperatura ay mapanganib para sa matatanda."
  },
  {
    id: 35,
    scene: "利用者様が薬を飲むのを「飲みたくない」と拒否しています。",
    correct: "お体が楽になるための大切なお薬なのですが、何か飲みにくい理由がありますか？",
    wrong1: "お医者様からの薬ですから、絶対に飲まないとダメです。",
    wrong2: "飲まないと病気が悪化して、入院することになりますよ。",
    hint: "拒否する理由（粒が大きい、味が嫌など）を優しく聞き出します。",
    category: "体調確認",
    tl_scene: "Tumatanggi ang kliyente na uminom ng gamot.",
    tl_hint: "Huwag pilitin o takutin. Tanungin nang malambot kung bakit ayaw uminom—maaaring malaki ang tableta o hindi maganda ang lasa. Ang pag-unawa sa dahilan ay susi sa tamang solusyon."
  },
  {
    id: 36,
    scene: "看護師（ナース）による医療的な確認が必要な質問をされました。",
    correct: "大切なお体のことですので、看護師にしっかりと確認して、すぐにお返事いたしますね。",
    wrong1: "私は介護職なので、そういう難しいことは分かりません。",
    wrong2: "たぶん大丈夫だと思いますよ。様子を見ましょう。",
    hint: "曖昧な返事をせず、専門職へ繋ぐことを丁寧に伝えることで信頼感が生まれます。",
    category: "引き継ぎ",
    tl_scene: "Nagtatanong ang kliyente tungkol sa medikal na bagay na kailangan ng nurse.",
    tl_hint: "Huwag mag-alinlangan na i-refer sa nurse. Huwag din magbigay ng hindi siguradong sagot. Ang pagiging tapat at mabilis na pag-refer ay nagpapalakas ng tiwala ng kliyente sa iyo."
  },
  {
    id: 37,
    scene: "利用者様の体温を測ろうとしたら、脇の下が汗で濡れていました。",
    correct: "少し汗をかかれていますね。タオルで優しく拭いてから、お熱を測りますね。",
    wrong1: "汗をかいているので、これじゃ測れません。",
    wrong2: "濡れてますよ。ちゃんと拭いてください。",
    hint: "スタッフがさりげなく解消し、心地よく検温に協力してもらえるよう声をかけます。",
    category: "体調確認",
    tl_scene: "Basang-basa ng pawis ang kilikili ng kliyente bago sukat ng temperatura.",
    tl_hint: "Huwag iparamdam na abala ang pawis. Sa halip, maingat na punasan at ipagpatuloy ang pag-aalaga. Ang mahinahon at maingat na gawi ay nagpapalakas ng tiwala ng kliyente."
  },
  {
    id: 38,
    scene: "利用者様が「最近足が痛くて大変なんです」と言いました。",
    correct: "それは大変ですね。",
    wrong1: "皆さんそういう悩みがありますよ。",
    wrong2: "痛み止めを飲めばいいじゃないですか。",
    hint: "まず共感の言葉を伝えることが大切です。",
    category: "相づちを打つ",
    tl_scene: "Sinabi ng kliyente na 'Masakit ang aking paa kamakailan, napakahirap.'",
    tl_hint: "Una sa lahat, magpakita ng empatiya. Huwag agad na magbigay ng solusyon o ikumpara sa iba. Ang kliyente ay nangangailangan munang maramdamang naririnig at nauunawaan sila."
  },
  {
    id: 39,
    scene: "他のスタッフの悪口や不満を言ってきた時です。",
    correct: "そのように感じられて、少し悲しいお気持ちになったのですね。",
    wrong1: "あのスタッフはとても良い人ですよ。あなたの誤解です。",
    wrong2: "私に他の人の文句を言われても困ります。",
    hint: "まずはその不満の裏にある「感情」を受け止めます。",
    category: "相づちを打つ",
    tl_scene: "Nagreklamo ang kliyente tungkol sa ibang staff.",
    tl_hint: "Huwag depensahan o kondenahin ang ibang staff. Sa halip, tuunan ng pansin ang emosyon ng kliyente sa likod ng reklamo. Ang pakiramdam na naririnig ay sapat na para maibsan ang damdamin."
  },
  {
    id: 40,
    scene: "利用者様が「家に帰りたい」と寂しそうに荷物をまとめています。",
    correct: "お家に帰りたくなったのですね。そのお気持ち、よく分かります。",
    wrong1: "ここが今のお家ですよ。帰る場所はありません。",
    wrong2: "外はもう暗いし、バスもないから帰れませんよ。",
    hint: "「帰りたい」という切ない気持ちに深く共感します。",
    category: "相づちを打つ",
    tl_scene: "Malungkot na nagtitipon ng gamit ang kliyente na gustong umuwi.",
    tl_hint: "Huwag balewalain o punahin ang kanilang pagnanasa. Una, kilalanin ang kalungkutan ng 'gustong umuwi.' Ang emosyon ay tunay kahit hindi posible ang pagkilos. Makiisa sa kanilang pakiramdam."
  },

  // グループ5
  {
    id: 41,
    scene: "利用者様が「昔よく海に行ったんだよ」と話してくれました。",
    correct: "それはいい思い出ですね。",
    wrong1: "へえ、そうですか。",
    wrong2: "今はもう行けないですよね。",
    hint: "利用者様の話に共感しながら、ポジティブな相づちを打ちましょう。",
    category: "相づちを打つ",
    tl_scene: "Ikinuwento ng kliyente na 'Dati, madalas akong pumunta sa dagat.'",
    tl_hint: "Tumugon nang may positibong empatiya sa mga alaala. Huwag banggitin ang mga limitasyon ng kasalukuyan. Ang magagandang alaala ay nagbibigay ng kagalakan at nagpapanatili ng pagkakakilanlan ng kliyente."
  },
  {
    id: 42,
    scene: "利用者様の髪型が今日はいつもと違います。",
    correct: "今日はいつもと髪型が違いますね。よくお似合いですよ。",
    wrong1: "あれ、髪切ったんですか？",
    wrong2: "いつもと違いますね。",
    hint: "外見の変化に気づいたときは、ポジティブな言葉で伝えましょう。",
    category: "廊下での声かけ",
    tl_scene: "Iba ang gupit ng buhok ng kliyente ngayon kaysa dati.",
    tl_hint: "Kapag napansin ang pagbabago sa hitsura, sabihin ito nang positibo. Ang pagpuna sa pagbabago ay nagpapakita na pinagtutuunan mo ng pansin ang kliyente, at nagpapalakas ng kanilang kumpiyansa."
  },
  {
    id: 43,
    scene: "利用者様が今日は顔色がよく、いきいきしています。",
    correct: "今日は顔色がいいですね。",
    wrong1: "今日は元気そうですね、珍しいですね。",
    wrong2: "調子がよさそうですね！昨日と全然違う。",
    hint: "肯定的な気づきをシンプルに伝えましょう。",
    category: "廊下での声かけ",
    tl_scene: "Mukhang malusog at masaya ang kliyente ngayon.",
    tl_hint: "Sabihin ang positibong pagbabago nang simple at tapat. Iwasan ang mga salitang nagpapahiwatig na hindi ito normal, tulad ng 'bihira' o 'kakaiba.' Ang simpleng papuri ay sapat at epektibo."
  },
  {
    id: 44,
    scene: "利用者様が何かを話し終えました。大変だったことがわかりました。",
    correct: "ご苦労されたのですね。",
    wrong1: "それは辛かったですね。でも今は大丈夫ですよ。",
    wrong2: "よかったですね、乗り越えられて。",
    hint: "相手の苦労をそのまま受け止める言葉が共感を伝えます。",
    category: "相づちを打つ",
    tl_scene: "Natapos na magsalita ang kliyente. Nalaman na mahirap ang pinagdaanan nila.",
    tl_hint: "Tanggapin ang kanilang paghihirap nang walang karagdagang salita. Huwag agad mag-alok ng solusyon o positibong pananaw. Ang simpleng 'napagdaanan mo pala ang ganyan' ay nagpapalakas ng koneksyon."
  },
  {
    id: 45,
    scene: "レクリエーション（ゲームや体操）への参加を誘います。",
    correct: "これからみんなでゲームをします。もしよろしければ、見学だけでもいかがですか？",
    wrong1: "レクリエーションが始まるので、全員参加してください。",
    wrong2: "部屋にいると退屈ですから、絶対に来てくださいね。",
    hint: "「見学だけでも」とハードルを下げることで、参加しやすくなります。",
    category: "廊下での声かけ",
    tl_scene: "Inaanyayahan ang kliyente na sumali sa recreational activity.",
    tl_hint: "Huwag pilitin. Mag-alok ng 'manonood ka lang' bilang mas madaling opsyon. Nagbibigay ito ng pagkakataon na lumahok kahit hindi handa para sa buong aktibidad. Ang kalayaang pumili ay mahalaga."
  },
  {
    id: 46,
    scene: "レクリエーション中、利用者様が上手に見事な作品を作りました。",
    correct: "素晴らしい出来栄えですね！ 色使いがとても綺麗です。",
    wrong1: "上手ですね。まぁまぁ良いんじゃないですか。",
    wrong2: "できたんですね。良かったです。",
    hint: "具体的にどこが良いかを伝えると嬉しさが倍増します。",
    category: "相づちを打つ",
    tl_scene: "Gumawa ang kliyente ng magandang obra sa panahon ng recreational activity.",
    tl_hint: "Purihin nang tiyak at detalyado. Sabihin kung ano mismo ang maganda—ang kulay, ang hugis, atbp. Ang tiyak na papuri ay mas makabuluhan kaysa pangkalahatang papuri at nagpapalakas ng self-esteem."
  },
  {
    id: 47,
    scene: "利用者様が何度も同じ昔話をスタッフに話してくれます。",
    correct: "そうだったのですね。いつ聞いても本当に素敵なお話ですね。",
    wrong1: "その話、さっきも聞きましたよ。",
    wrong2: "もう何度も聞いたので、別の話にしてください。",
    hint: "初めて聞いたかのように、新鮮な気持ちで耳を傾けるのが傾聴の基本です。",
    category: "相づちを打つ",
    tl_scene: "Paulit-ulit na ikinukuwento ng kliyente ang parehong lumang kwento.",
    tl_hint: "Makinig nang parang unang beses mo itong naririnig. Para sa kliyente, mahalaga ang kwentong iyon. Ang paulit-ulit na pagkukwento ay maaaring senyales ng pangangailangan sa koneksyon at pagpapatunay."
  },
  {
    id: 48,
    scene: "面会に来ていたご家族が帰る際、利用者様が寂しそうにしています。",
    correct: "たくさんお話しできて嬉しかったですね。またすぐ来てくださいますよ。",
    wrong1: "泣かないでください。また来週来ますから。",
    wrong2: "ご家族も忙しいんだから、困らせちゃダメですよ。",
    hint: "ご家族との楽しかった時間を振り返り、次の楽しみに意識を向けられるよう励まします。",
    category: "廊下での声かけ",
    tl_scene: "Umalis na ang pamilya ng kliyente pagkatapos ng pagbisita at mukhang malungkot ang kliyente.",
    tl_hint: "Bigyang-diin ang magagandang nangyari sa pagbisita at ang pag-asa ng susunod na pagkikita. Huwag sabihing 'huwag umiyak'—ang luha ay natural at dapat igalang. Tulungan silang tumingin sa harapan."
  },
  {
    id: 49,
    scene: "利用者様がご自身の力で一生懸命にリハビリを頑張っています。",
    correct: "一歩一歩、とても力強く歩けていますね。その調子です！",
    wrong1: "もっと早く歩けますか？ 頑張って！",
    wrong2: "リハビリなんだから、もっと真面目にやってください。",
    hint: "成果だけでなく、頑張っている「プロセス（過程）」を具体的に褒めるのが効果的です。",
    category: "廊下での声かけ",
    tl_scene: "Buong pusong nagpe-practice ng paglalakad ang kliyente sa rehabilitation.",
    tl_hint: "Purihin ang proseso, hindi lang ang resulta. Sabihing 'bawat hakbang ay malakas'—nagpapakita ito na nakikita mo ang kanilang pagsisikap. Mas epektibo ito kaysa pagmamadali sa kanila."
  },
  {
    id: 50,
    scene: "利用者様がご自身の趣味（編み物や将棋など）について熱心に語っています。",
    correct: "本当に奥が深いのですね！ ぜひ今度、私にもコツを教えていただけますか？",
    wrong1: "へえ、すごいですね。私には難しそうです。",
    wrong2: "お上手なんですね。また今度聞かせてください。",
    hint: "相手を「先生」として敬うような姿勢を見せることで、自己肯定感を高めていただけます。",
    category: "相づちを打つ",
    tl_scene: "Masemangat na nagkukuwento ang kliyente tungkol sa kanilang libangan tulad ng pag-uukit o chess.",
    tl_hint: "Igalang ang kliyente bilang 'guro' sa kanilang larangan. Humingi ng maturuan—nagpapalakas ito ng kanilang self-esteem at nagbibigay ng layunin. Ang pakiramdam na 'mahalaga ang aking nalalaman' ay napakaimportante para sa matatanda."
  }
];
