var questions = [
  {
    question:
      "Aku bisa melakukan ... Lebih baik daripada kebanyakan orang di sekitarku karena ....",
  },
  { question: "Apa hal paling aneh yang pernah kamu cari di Google Search?" },
  {
    question: "Apa hal paling bandel yang pernah kamu lakukan di masa kecilmu?",
  },
  {
    question: "Apa hal paling kekanak-kanakan yang masih sering kamu lakukan?",
  },
  {
    question:
      "Apa hal paling tidak penting yang pernah kamu beli secara online?",
  },
  { question: "Apa hal teraneh yang pernah kamu lakukan saat sendirian?" },
  {
    question:
      "Apa hal terbaik yang terjadi pada dirimu selama satu tahun ke belakang?",
  },
  { question: "Apa hal yang paling kamu syukuri di dalam gidupmu saat ini?" },
  { question: "Apa hal yang paling kamu takuti di dunia ini?" },
  {
    question:
      "Apa hal yang pernah menjadi rutinitasmu, tetapi sekarang tidak pernah kamu lakukan lagi?",
  },
  { question: "Apa hal yang saat ini paling sering kamu pikirkan saat ini?" },
  {
    question:
      "Apa hal yang sebenarnya kamu sukai, tapi kamu malu untuk mengakuinya?",
  },
  {
    question:
      "Apa hal yang sejak dulu ingin kamu lakukan, tapi sampai sekarang tidak pernah terjadi?",
  },
  { question: "Apa hal-hal kecil yang bisa membuat kamu bahagia?" },
  { question: "Apa kebohongan terakhirmu dan kepada siapa kamu berbohong?" },
  { question: "Apa kenangan paling berkesan dari masa kecilmu?" },
  { question: "Apa kesan pertamamu tentang aku?" },
  {
    question:
      "Apa nasihat orang tua yang sering kamu abaikan, tetapi sebetulnya kamu tahu nasihat mereka itu benar?",
  },
  { question: "Apa pendapatmu soal zodiak?" },
  { question: "Apa persoalan terburuk yang ada di sekitar kita saat ini?" },
  { question: "Apa pujian terbaik yang pernah kamu terima?" },
  { question: "Apa saran paling buruk yang pernah orang berikan kepada kamu?" },
  {
    question:
      "Apa topik pembicaraan yang akan membuat kamu bersemangat saat membahasnya?",
  },
  {
    question:
      "Apakah ada hal yang akan kamu sesali di masa depan jika kamu tetap menjalani hidup seperti sekarang ini?",
  },
  { question: "Apakah ada hal yang kamu sesali di dalam hidupmu?" },
  {
    question:
      "Apakah kamu pernah melakukan sesuatu hanya untuk terlihat keren? Hal apakah itu?",
  },
  { question: "Apakah menurutmu kebahagiaan bissa dibeli dengan uang?" },
  {
    question:
      "Bagaimana cara kamu berdamai dengan hal paling buruk yang pernah terjadi dalam hidupmu?",
  },
  {
    question:
      "Bagaimana cara terbaik untuk menghiburmu jika kamu sedang merasa sedih?",
  },
  { question: "Bagaimana teman-temanmu akan mendeskripsikan dirimu?" },
  { question: "Cara paling mudah untuk membuatku marah adalah dengan ..." },
  { question: "Caraku menunjukkan rasa sayang pada seseorang adalah ..." },
  {
    question: "Ceritakan padaku ringkasan kehidupanmu dalam waktu tiga menit!",
  },
  {
    question:
      "Ceritakan padaku satu waktu di mana kamu mengecewakan seseorang!",
  },
  { question: "Coba nilai aku hanya dari isi media sosialku!" },
  { question: 'Deskripsikan momen di mana kamu merasa paling "hidup"' },
  { question: 'Deskripsikan padaku gambaran "surga" yang ada di pikiranmu!' },
  { question: "Hal yang paling aku cintai dari diriku adalah ...." },
  {
    question:
      "Jika ada alasan mengapa seseorang tiddak menyukaimu, kira-kira apa alasan tersebut?",
  },
  {
    question:
      "Jika ada orang yang ingin lebih dekat dengan kamu, apa yang perlu dilakukan oleh orang tersebut?",
  },
  {
    question:
      "Jika kamu bertemu dengan dirimu 10 tahun yang lalu, apa yang akan kamu katakan padanya?",
  },
  {
    question:
      "Jika kamu bisa, apakah kamu ingin mengubah cara kamu dibesarkan oleh keluargamu?",
  },
  {
    question:
      "Jika kamu diberi pilihan untuk hidup selamanya, apakah kamu mau? Dengan kondisi seperti apa?",
  },
  {
    question:
      "Kalau 10 detik dari sekarang tiba-tiba ada serangan zombie, seberapa besar kemungkinan kita selamat? Bagaimana caranya?",
  },
  {
    question:
      "Kalau harus mendeskripsikan dirimu sebagai binatang, binatang apakah kamu?",
  },
  {
    question:
      "Kalau kamu bisa memilih untuk tinggal di mana saja, ke mana kamu akan pergi?",
  },
  {
    question:
      "Kalau kamu bisa mengubah satu hal dari seluruh lawan jenis kamu di dunia ini, apa yang ingin kamu ubah?",
  },
  {
    question:
      "Kalau kamu diberi kesempatan untuk melakukan perjalanan waktu, kamu memilih untuk pergi ke masa lalu atau masa depan?",
  },
  {
    question:
      "Kalau kamu hanya punya waktu hidup satu tahun lagi, apakah kamu akan mengubah cara kamu hidup sekarang?",
  },
  {
    question:
      "Kalau kamu terjebak di sebuah pulau. siapa yang kamu inginkan ada disana bersamamu?",
  },
  {
    question:
      "Kalau kita harus kehilangan salah satu dari lima panca indra, indra apa yang mampu kamu relakan?",
  },
  {
    question:
      "Kalau manusia bisa memiliki kekuatan super, apa kekuatan super yang mau kamu miliki?",
  },
  {
    question:
      "Kalau manusia bisa terlahir kembali, apakah kamu akan memilih untuk terlahir dengan jenis kelamin yang sama?",
  },
  {
    question:
      'Kegiatan apa yang terlintas di kepalamu saat mendengar kata "buang waktu"?',
  },
  {
    question:
      "Lagu apa yang baru kamu dengar bagian intronta saja, sudah membuat kamu merasa sedih?",
  },
  {
    question:
      "Lebih penting mana, menjadi orang jujur atau menjadi orang baik?",
  },
  { question: "Mana yang kamu pilih: penampilan atau kecerdasan?" },
  {
    question: "Mana yang kamu pilih: pengalaman baik atau pengalaman menarik?",
  },
  { question: "Mana yang lebih mendeskripsikan dirimu: pemimpi atau realis?" },
  {
    question:
      "Menurutmu, apa pengalaman yang harus dialamai oleh semua orang setidaknya satu kali?",
  },
  {
    question:
      "Menurutmu, apakah ada jenis kejahatan yang masih layak dimaafkan dengan alasan tertentu?",
  },
  { question: "Menurutmu, apakah aku terlihat high maintenance?" },
  {
    question: "Menurutmu, apakah kamu adalah orang yang selalu menepati janji?",
  },
  {
    question:
      "Menurutmu, apakah kita sesekali boleh berbohong untuk melindungi perasaan orang lain?",
  },
  {
    question:
      "Orang yang tidak mengenalku dengan baik selalu berasumsi bahwa aku ...",
  },
  { question: "Seberapa cepat kamu dapat mengambil sebuah keputusan?" },
  { question: "Seberapa percaaykah kamu dengan konsep soulmate?" },
  { question: "Seberapa persen kamu bahagia dengan kehidupanmu saat ini?" },
  { question: "Sebutkan hal yang menurutmu menarik dariku secara fisik!" },
  {
    question:
      "Sebutkan tiga hal yang menurut orang lain mungkin biasa saja, tapi menurutmu itu menyebalkan!",
  },
  { question: "Siapa tokoh fiksi yang ingin kamu temui di dunia nyata?" },
  {
    question:
      "Situasi seperti apa yang pernah membuat kamu merasa sangat kesepian? Dan bagaimana kamu mengatasinya?",
  },
  {
    question:
      "Apa alasan paling konyol yang pernah membuat kamu bertengkar dengan pasangan?",
  },
  {
    question:
      "Apa hal paling konyol yang pernah kamu lakukan saat jatuh cinta?",
  },
  { question: "Apa hal terakhir yang kamu bicarakan dengan mantan kekasihmu?" },
  {
    question:
      "Apa hal yang paling romantis yang pernah dilakukan seseorang untuk kamu / kamu lakukan untuk seseorang?",
  },
  {
    question:
      "Apa hal yang tidak pernah kamu bisa kamu kompromikan ketika menjalin hubungan?",
  },
  {
    question:
      "Apa opinimu soal memiliki privasi masing-masing di dalam sebuah hubungan?",
  },
  {
    question:
      "Apa opinimu soal perselingkuhan? Apalah menurutmu orang yang pernah berselingkuh bisa dimaafkan?",
  },
  {
    question:
      "Apa sifat burukmu yang paling tidak bisa kamu ubah? Bagaimana sifat itu memengaruhi hubunganmu?",
  },
  { question: "Ceritakan padaku tentang cinta pertamamu!" },
  {
    question:
      "Dalam hal memilih pasangan hidup, apa karakteristik seseorang yang paling tidak bisa kamu toleransi?",
  },
  { question: "Deskripsikan hubunganmu yang terakhir dengan judul film!" },
  {
    question:
      "Jika kamu punya anak nanti, apa saran yang akan kamu berikan padanya tentang cinta?",
  },
  {
    question:
      "Kalau kamu bisa menghabiskan waktu satu hari dengan siapapun, dengan siapa dan apa kegiatan yang akan kamu lakukan?",
  },
  { question: "Menurutku, cinta adalah ..." },
  { question: "Menurutku, kunci dari keberhasilan suatu hubungan adalah ..." },
  { question: "Menurutmu lebih baik dicintai atau mencintai?" },
  {
    question:
      "Menurutmu, apa hal yang bisa kamu ubah untuk menyelamatkan hubunganmu yang terakhir?",
  },
  {
    question:
      "Menurutmu, apakah cinta itu datang secara instan atau tumbuh bertahap seiring waktu?",
  },
  {
    question:
      "Seberapa pentingkah pernikahan untukmu? Apakah menikah itu keharusan atau pilihan?",
  },
  {
    question:
      "Sebutkan tiga alasan mengapa menurutmu kamu akan menjadi pasangan yang baik!",
  },
  {
    question:
      "Siapa selebriti yang paling mendekati gambaranmu soal pasangan ideal?",
  },
];
