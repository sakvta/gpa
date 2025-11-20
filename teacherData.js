const teacherData = [
  {
    name: "X.X-1",
    lessons: [
      { code: "ACC121", day: "Friday", time: "7:40-10:30", group: "1-100" },
    ],
  },
  {
    name: "Б.АВИРМЭД",
    lessons: [
      { code: "AUD331", day: "Monday", time: "10:40-13:30", group: "101" },
      { code: "ACCS432", day: "Monday", time: "14:20-17:10", group: "102" },
      { code: "AUD433", day: "Friday", time: "10:40-13:30", group: "103" },
    ],
  },
  {
    name: "Г.ГАНТУЛГА",
    lessons: [
      { code: "ACC335", day: "Monday", time: "7:40-10:30", group: "130" },
      { code: "ACC434", day: "Monday", time: "10:40-13:30", group: "132" },
      { code: "AUD331", day: "Wednesday", time: "7:40-10:30", group: "131" },
      { code: "ACC336", day: "Wednesday", time: "10:40-13:30", group: "133" },
    ],
  },
  {
    name: "Б.Ганчимэг",
    lessons: [
      { code: "ACC221", day: "Tuesday", time: "7:40-10:30", group: "1-110" },
      { code: "ACC436", day: "Wednesday", time: "7:40-10:30", group: "104" },
      { code: "ACC226", day: "Friday", time: "7:40-10:30", group: "1-105" },
      { code: "ACC226", day: "Friday", time: "10:40-13:30", group: "1-104" },
    ],
  },
  {
    name: "Ж.ДАВААЖАРГАЛ",
    lessons: [
      { code: "CMG221", day: "Thursday", time: "10:40-13:30", group: "107" },
      { code: "CMG222", day: "Thursday", time: "14:20-17:10", group: "108" },
      { code: "CMG222", day: "Friday", time: "7:40-10:30", group: "109" },
      { code: "CMG331", day: "Friday", time: "10:40-13:30", group: "111" },
    ],
  },
  {
    name: "П.ДОРЖПҮРЭВ",
    lessons: [
      { code: "TAX331", day: "Tuesday", time: "10:40-13:30", group: "115" },
      { code: "TAX432", day: "Tuesday", time: "14:20-17:10", group: "116" },
      { code: "TAX331", day: "Wednesday", time: "14:20-17:10", group: "114" },
    ],
  },
  {
    name: "Б.ДЭЛГЭРСАЙХАН",
    lessons: [
      { code: "CMA327", day: "Monday", time: "10:40-13:30", group: "105" },
      { code: "CMA327", day: "Monday", time: "14:20-17:10", group: "106" },
    ],
  },
  {
    name: "Ж.ӨЛЗИЙБАЯР",
    lessons: [
      { code: "ACC222", day: "Wednesday", time: "10:40-13:30", group: "112" },
      { code: "ACC226", day: "Wednesday", time: "14:20-17:10", group: "1-103" },
    ],
  },
  {
    name: "Ч.ӨНӨРЖАРГАЛ",
    lessons: [
      { code: "TAX433", day: "Monday", time: "10:40-13:30", group: "134" },
      { code: "TAX431", day: "Monday", time: "14:20-17:10", group: "137" },
      { code: "TAX331", day: "Tuesday", time: "10:40-13:30", group: "136" },
      { code: "TAX331", day: "Tuesday", time: "14:20-17:10", group: "2-105" },
    ],
  },
  {
    name: "A.ОДГЭРЭЛ",
    lessons: [
      { code: "AUD432", day: "Friday", time: "7:40-10:30", group: "135" },
      { code: "AUD331", day: "Friday", time: "10:40-13:30", group: "100" },
    ],
  },
  {
    name: "Т.ПҮРЭВДУЛАМ",
    lessons: [
      { code: "CMG432", day: "Monday", time: "10:40-13:30", group: "123" },
      { code: "CMG222", day: "Tuesday", time: "10:40-13:30", group: "2-103" },
      { code: "CMG221", day: "Tuesday", time: "14:20-17:10", group: "122" },
      { code: "ACC226", day: "Wednesday", time: "10:40-13:30", group: "1-102" },
      { code: "CMA327", day: "Friday", time: "7:40-10:30", group: "121" },
      { code: "ACC121", day: "Friday", time: "10:40-13:30", group: "1-101" },
    ],
  },
  {
    name: "Ц.ПҮРЭВТУЯА",
    lessons: [
      { code: "CMA327", day: "Monday", time: "7:40-10:30", group: "126" },
      { code: "CMG331", day: "Monday", time: "10:40-13:30", group: "127" },
      { code: "CMA326", day: "Thursday", time: "7:40-10:30", group: "125" },
      { code: "CMA226", day: "Thursday", time: "10:40-13:30", group: "124" },
    ],
  },
  {
    name: "Б.ХАЛИУНАА",
    lessons: [
      { code: "ACC226", day: "Wednesday", time: "10:40-13:30", group: "1-108" },
      { code: "ACC226", day: "Wednesday", time: "14:20-17:10", group: "1-109" },
      { code: "ACC226", day: "Friday", time: "7:40-10:30", group: "2-102" },
      { code: "ACC226", day: "Friday", time: "10:40-13:30", group: "2-101" },
    ],
  },
  {
    name: "Ц.ХАТАНХАНГАЙ",
    lessons: [
      { code: "ACC337", day: "Monday", time: "10:40-13:30", group: "128" },
      { code: "AIS331", day: "Monday", time: "14:20-17:10", group: "129" },
    ],
  },
  {
    name: "Н.ШИНЭ-ӨЛЗИЙ",
    lessons: [
      { code: "ACC226", day: "Thursday", time: "7:40-10:30", group: "1-106" },
      { code: "ACC222", day: "Thursday", time: "10:40-13:30", group: "2-100" },
      { code: "ACC226", day: "Friday", time: "10:40-13:30", group: "1-107" },
    ],
  },
  {
    name: "П.ЭЛБЭГЗАЯА",
    lessons: [
      { code: "CMG221", day: "Tuesday", time: "7:40-10:30", group: "120" },
      { code: "CMA327", day: "Tuesday", time: "10:40-13:30", group: "118" },
      { code: "CMA327", day: "Wednesday", time: "7:40-10:30", group: "119" },
      { code: "CMA226", day: "Wednesday", time: "10:40-13:30", group: "117" },
    ],
  },
  {
    name: "С.Баярбаатар",
    lessons: [
      { code: "FIN445", day: "Tuesday", time: "10:40-13:30", group: "264" },
      { code: "FIN445", day: "Tuesday", time: "14:20-17:10", group: "265" },
    ],
  },
  {
    name: "Л.БОЛОРЦЭЦЭГ",
    lessons: [
      { code: "FIN334", day: "Monday", time: "10:40-13:30", group: "240" },
      { code: "FIN444", day: "Monday", time: "14:20-17:10", group: "262" },
      { code: "FIN442", day: "Wednesday", time: "7:40-10:30", group: "256" },
      { code: "FIN444", day: "Thursday", time: "7:40-10:30", group: "261" },
      { code: "FIN122", day: "Thursday", time: "10:40-13:30", group: "1-210" },
      { code: "FIN122", day: "Friday", time: "7:40-10:30", group: "203" },
      { code: "FIN330", day: "Friday", time: "10:40-13:30", group: "2-205" },
    ],
  },
  {
    name: "Д.БОЛЬТОГТОХ",
    lessons: [
      { code: "FIN330", day: "Wednesday", time: "7:40-10:30", group: "2-204" },
      { code: "FIN330", day: "Thursday", time: "10:40-13:30", group: "225" },
      { code: "FIN433", day: "Thursday", time: "14:20-17:10", group: "246" },
    ],
  },
  {
    name: "Я.ДАШПИЛ",
    lessons: [
      { code: "FIN435", day: "Monday", time: "7:40-10:30", group: "250" },
      { code: "FIN447", day: "Monday", time: "10:40-13:30", group: "266" },
      { code: "FIN321", day: "Friday", time: "7:40-10:30", group: "2-202" },
    ],
  },
  {
    name: "Ж.ДЭЛГЭРСАЙХАН",
    lessons: [
      { code: "FIN334", day: "Wednesday", time: "14:20-17:10", group: "239" },
    ],
  },
  {
    name: "Э.ЖАРГАЛМАА",
    lessons: [
      { code: "FIN431", day: "Monday", time: "14:20-17:10", group: "244" },
      { code: "FIN321", day: "Tuesday", time: "7:40-10:30", group: "221" },
      { code: "FIN221", day: "Tuesday", time: "10:40-13:30", group: "210" },
      { code: "FIN122", day: "Wednesday", time: "14:20-17:10", group: "1-203" },
      { code: "BMG432", day: "Thursday", time: "10:40-13:30", group: "278" },
      { code: "INS423", day: "Thursday", time: "14:20-17:10", group: "273" },
      { code: "FIN221", day: "Friday", time: "7:40-10:30", group: "209" },
      { code: "FIN226", day: "Friday", time: "10:40-13:30", group: "217" },
    ],
  },
  {
    name: "Н.МӨНХЖАРГАЛ",
    lessons: [
      { code: "FIN122", day: "Wednesday", time: "7:40-10:30", group: "1-202" },
      { code: "FIN122", day: "Thursday", time: "14:20-17:10", group: "1-206" },
    ],
  },
  {
    name: "Б.Номин",
    lessons: [
      { code: "FIN334", day: "Monday", time: "7:40-10:30", group: "238" },
      { code: "FIN333", day: "Monday", time: "10:40-13:30", group: "232" },
      { code: "FIN221", day: "Tuesday", time: "7:40-10:30", group: "205" },
      { code: "FIN122", day: "Tuesday", time: "10:40-13:30", group: "201" },
      { code: "FIN321", day: "Wednesday", time: "10:40-13:30", group: "2-200" },
      { code: "FIN226", day: "Wednesday", time: "14:20-17:10", group: "1-212" },
      { code: "FIN444", day: "Thursday", time: "10:40-13:30", group: "258" },
      { code: "FIN221", day: "Thursday", time: "14:20-17:10", group: "204" },
    ],
  },
  {
    name: "Ц.НОМИН-ЭРДЭНЭ",
    lessons: [
      { code: "FIN334", day: "Monday", time: "14:20-17:10", group: "242" },
      { code: "INV421", day: "Tuesday", time: "7:40-10:30", group: "274" },
      { code: "INV421", day: "Tuesday", time: "10:40-13:30", group: "275" },
      { code: "FMCS432", day: "Wednesday", time: "7:40-10:30", group: "268" },
      { code: "FMCS432", day: "Wednesday", time: "14:20-17:10", group: "269" },
      { code: "FIN334", day: "Thursday", time: "10:40-13:30", group: "241" },
      { code: "FMCS432", day: "Thursday", time: "14:20-17:10", group: "270" },
    ],
  },
  {
    name: "С.ӨНӨРЖАРГАЛ",
    lessons: [
      { code: "FIN321", day: "Monday", time: "7:40-10:30", group: "224" },
      { code: "FIN221", day: "Monday", time: "10:40-13:30", group: "212" },
      { code: "FIN333", day: "Tuesday", time: "10:40-13:30", group: "237" },
      { code: "FIN333", day: "Tuesday", time: "14:20-17:10", group: "236" },
      { code: "FIN441", day: "Thursday", time: "10:40-13:30", group: "255" },
      { code: "FIN441", day: "Thursday", time: "14:20-17:10", group: "254" },
    ],
  },
  {
    name: "Т.ОЮУНГЭРЭЛ",
    lessons: [
      { code: "FIN330", day: "Monday", time: "10:40-13:30", group: "2-203" },
      { code: "FIN321", day: "Monday", time: "14:20-17:10", group: "222" },
      { code: "FIN433", day: "Tuesday", time: "10:40-13:30", group: "247" },
      { code: "FIN433", day: "Tuesday", time: "14:20-17:10", group: "248" },
      { code: "FIN221", day: "Wednesday", time: "14:20-17:10", group: "211" },
      { code: "MGM334", day: "Tuesday", time: "10:40-13:30", group: "319" },
    ],
  },
  {
    name: "Е.СОЁЛМАА",
    lessons: [
      { code: "FIN444", day: "Monday", time: "7:40-10:30", group: "259" },
      { code: "FIN435", day: "Monday", time: "10:40-13:30", group: "249" },
      { code: "FIN333", day: "Tuesday", time: "10:40-13:30", group: "233" },
      { code: "FIN444", day: "Tuesday", time: "14:20-17:10", group: "260" },
      { code: "FIN333", day: "Thursday", time: "7:40-10:30", group: "234" },
    ],
  },
  {
    name: "Э.ТАМИР",
    lessons: [
      { code: "FIN333", day: "Monday", time: "10:40-13:30", group: "235" },
      { code: "FIN439", day: "Monday", time: "14:20-17:10", group: "252" },
      { code: "BMG332", day: "Tuesday", time: "7:40-10:30", group: "277" },
      { code: "FTF433", day: "Tuesday", time: "10:40-13:30", group: "271" },
      { code: "MGM331", day: "Monday", time: "14:20-17:10", group: "325" },
      { code: "BUS431", day: "Tuesday", time: "7:40-10:30", group: "323" },
      { code: "MGM331", day: "Tuesday", time: "10:40-13:30", group: "322" },
      { code: "BUS126", day: "Wednesday", time: "7:40-10:30", group: "1-309" },
      { code: "BUS126", day: "Wednesday", time: "10:40-13:30", group: "1-312" },
      { code: "MGM121", day: "Thursday", time: "10:40-13:30", group: "1-302" },
      { code: "MGM331", day: "Thursday", time: "14:20-17:10", group: "324" },
    ],
  },
  {
    name: "Э.Төгсжаргал",
    lessons: [
      { code: "FIN321", day: "Monday", time: "10:40-13:30", group: "220" },
      { code: "FIN226", day: "Monday", time: "14:20-17:10", group: "216" },
      { code: "FIN431", day: "Wednesday", time: "10:40-13:30", group: "243" },
      { code: "INS421", day: "Wednesday", time: "14:20-17:10", group: "272" },
      { code: "FIN221", day: "Thursday", time: "10:40-13:30", group: "208" },
      { code: "INS122", day: "Thursday", time: "14:20-17:10", group: "1-207" },
    ],
  },
  {
    name: "Б.ТУЛГА",
    lessons: [
      { code: "FIN433", day: "Monday", time: "7:40-10:30", group: "245" },
      { code: "FIN321", day: "Monday", time: "10:40-13:30", group: "219" },
      { code: "FIN226", day: "Wednesday", time: "14:20-17:10", group: "1-213" },
      { code: "FIN221", day: "Thursday", time: "7:40-10:30", group: "207" },
      { code: "FIN226", day: "Thursday", time: "14:20-17:10", group: "215" },
      { code: "FIN321", day: "Friday", time: "7:40-10:30", group: "2-201" },
      { code: "FIN122", day: "Friday", time: "10:40-13:30", group: "202" },
    ],
  },
  {
    name: "Т.ТУУЛ",
    lessons: [
      { code: "FIN321", day: "Monday", time: "7:40-10:30", group: "223" },
      { code: "INV421", day: "Monday", time: "10:40-13:30", group: "276" },
      { code: "FIN435", day: "Tuesday", time: "7:40-10:30", group: "251" },
      { code: "FIN442", day: "Tuesday", time: "10:40-13:30", group: "257" },
      { code: "FIN221", day: "Wednesday", time: "7:40-10:30", group: "1-211" },
      { code: "FIN447", day: "Wednesday", time: "14:20-17:10", group: "267" },
    ],
  },
  {
    name: "Т.ТУЯА",
    lessons: [
      { code: "FIN332", day: "Tuesday", time: "10:40-13:30", group: "227" },
      { code: "FIN332", day: "Tuesday", time: "14:20-17:10", group: "226" },
      { code: "FIN122", day: "Wednesday", time: "10:40-13:30", group: "1-209" },
      { code: "FIN122", day: "Wednesday", time: "14:20-17:10", group: "1-208" },
      { code: "FIN332", day: "Thursday", time: "10:40-13:30", group: "228" },
    ],
  },
  {
    name: "А.Энхсүрэн",
    lessons: [
      { code: "FIN122", day: "Monday", time: "7:40-10:30", group: "200" },
      { code: "FIN441", day: "Monday", time: "10:40-13:30", group: "253" },
      { code: "FIN445", day: "Tuesday", time: "14:20-17:10", group: "263" },
      { code: "FIN122", day: "Wednesday", time: "7:40-10:30", group: "1-204" },
      { code: "FIN122", day: "Wednesday", time: "14:20-17:10", group: "1-200" },
    ],
  },
  {
    name: "Ж.Эрдэнэчулуун",
    lessons: [
      { code: "FIN221", day: "Wednesday", time: "10:40-13:30", group: "213" },
      { code: "FIN122", day: "Wednesday", time: "14:20-17:10", group: "1-201" },
      { code: "FIN221", day: "Thursday", time: "10:40-13:30", group: "214" },
      { code: "FIN226", day: "Thursday", time: "14:20-17:10", group: "218" },
    ],
  },
  {
    name: "X.X-10",
    lessons: [
      { code: "BUS446", day: "Monday", time: "7:40-10:30", group: "302" },
      { code: "MGM332", day: "Monday", time: "14:20-17:10", group: "300" },
      { code: "BUS321", day: "Wednesday", time: "10:40-13:30", group: "2-302" },
      { code: "BUS321", day: "Friday", time: "7:40-10:30", group: "2-303" },
    ],
  },
  {
    name: "X.X-11",
    lessons: [
      { code: "BUS126", day: "Wednesday", time: "7:40-10:30", group: "1-311" },
      { code: "BUS126", day: "Wednesday", time: "10:40-13:30", group: "1-310" },
      { code: "BUS321", day: "Wednesday", time: "14:20-17:10", group: "2-300" },
    ],
  },
  {
    name: "X.X-12",
    lessons: [
      { code: "MGM221", day: "Wednesday", time: "10:40-13:30", group: "1-308" },
      { code: "MGM221", day: "Wednesday", time: "14:20-17:10", group: "1-307" },
    ],
  },
  {
    name: "П.БАЯРЖАРГАЛ",
    lessons: [
      { code: "MGM333", day: "Tuesday", time: "10:40-13:30", group: "314" },
      { code: "MGM432", day: "Tuesday", time: "14:20-17:10", group: "313" },
      { code: "MGM333", day: "Wednesday", time: "14:20-17:10", group: "315" },
      { code: "MGM121", day: "Thursday", time: "10:40-13:30", group: "1-300" },
      { code: "MGM121", day: "Thursday", time: "14:20-17:10", group: "1-301" },
    ],
  },
  {
    name: "Б.БАЯРСАЙХАН",
    lessons: [
      { code: "MGM433", day: "Tuesday", time: "10:40-13:30", group: "305" },
      { code: "MGM332", day: "Wednesday", time: "7:40-10:30", group: "303" },
      { code: "MGM332", day: "Wednesday", time: "10:40-13:30", group: "304" },
      { code: "BMGM432", day: "Thursday", time: "10:40-13:30", group: "2-304" },
    ],
  },
  {
    name: "Ц.БУЛГАН",
    lessons: [
      { code: "MGM435", day: "Monday", time: "10:40-13:30", group: "320" },
      { code: "BMGM435", day: "Monday", time: "14:20-17:10", group: "2-305" },
    ],
  },
  {
    name: "Л.ГАНТУЯА",
    lessons: [
      { code: "BUS321", day: "Monday", time: "10:40-13:30", group: "312" },
      { code: "MGM221", day: "Wednesday", time: "10:40-13:30", group: "1-315" },
      { code: "MGM221", day: "Wednesday", time: "14:20-17:10", group: "1-314" },
    ],
  },
  {
    name: "Б.ИДЭРЦОГТ",
    lessons: [
      { code: "MGM331", day: "Wednesday", time: "10:40-13:30", group: "306" },
      { code: "BUS435", day: "Wednesday", time: "14:20-17:10", group: "307" },
      { code: "MGM121", day: "Thursday", time: "10:40-13:30", group: "1-304" },
      { code: "MGM121", day: "Thursday", time: "14:20-17:10", group: "1-303" },
    ],
  },
  {
    name: "Э.Мөнгөншагай",
    lessons: [
      { code: "BBUS446", day: "Friday", time: "7:40-10:30", group: "2-306" },
    ],
  },
  {
    name: "Г.НАРАНТУНГАЛАГ",
    lessons: [
      { code: "MGM439", day: "Monday", time: "14:20-17:10", group: "309" },
    ],
  },
  {
    name: "Б.Оюун",
    lessons: [
      { code: "MGM442", day: "Thursday", time: "7:40-10:30", group: "308" },
    ],
  },
  {
    name: "Г.САЙНБИЛЭГ",
    lessons: [
      { code: "BMCS432", day: "Tuesday", time: "14:20-17:10", group: "310" },
      { code: "BMCS432", day: "Wednesday", time: "14:20-17:10", group: "311" },
    ],
  },
  {
    name: "Э.ЦОВОО",
    lessons: [
      { code: "BMGM331", day: "Monday", time: "10:40-13:30", group: "2-307" },
      { code: "BUS433", day: "Wednesday", time: "7:40-10:30", group: "326" },
      { code: "MGM431", day: "Wednesday", time: "10:40-13:30", group: "327" },
    ],
  },
  {
    name: "Л.Шинэбаяр",
    lessons: [
      { code: "BUS431", day: "Tuesday", time: "14:20-17:10", group: "301" },
    ],
  },
  {
    name: "Ш.ЭРДЭНЭБУЯН",
    lessons: [
      { code: "MGM332", day: "Thursday", time: "10:40-13:30", group: "321" },
    ],
  },
  {
    name: "С.ЭРХЭМБАЯР",
    lessons: [
      { code: "MGM431", day: "Tuesday", time: "10:40-13:30", group: "318" },
      { code: "BUS433", day: "Tuesday", time: "14:20-17:10", group: "316" },
      { code: "MGM431", day: "Thursday", time: "10:40-13:30", group: "317" },
      { code: "MGM121", day: "Thursday", time: "14:20-17:10", group: "1-306" },
    ],
  },
  {
    name: "X.X-13",
    lessons: [
      { code: "SWM231", day: "Tuesday", time: "10:40-13:30", group: "421" },
      { code: "BIS121", day: "Wednesday", time: "7:40-10:30", group: "1-418" },
      { code: "BIS122", day: "Wednesday", time: "10:40-13:30", group: "1-419" },
      { code: "BIS124", day: "Thursday", time: "10:40-13:30", group: "1-421" },
      { code: "BIS123", day: "Friday", time: "7:40-10:30", group: "1-420" },
      { code: "EXC321", day: "Friday", time: "10:40-13:30", group: "1-417" },
    ],
  },
  {
    name: "Д.АНХТУЯА",
    lessons: [
      { code: "ISM221", day: "Wednesday", time: "10:40-13:30", group: "1-410" },
      { code: "ISM221", day: "Wednesday", time: "14:20-17:10", group: "1-411" },
      { code: "ISM221", day: "Thursday", time: "10:40-13:30", group: "1-412" },
      { code: "ISM221", day: "Thursday", time: "14:20-17:10", group: "418" },
    ],
  },
  {
    name: "Б.БАТ-ОРГИЛ",
    lessons: [
      { code: "DBP221", day: "Wednesday", time: "10:40-13:30", group: "2-401" },
      { code: "DBP221", day: "Wednesday", time: "14:20-17:10", group: "2-400" },
      { code: "APF221", day: "Thursday", time: "10:40-13:30", group: "1-405" },
      { code: "APF221", day: "Thursday", time: "14:20-17:10", group: "1-404" },
    ],
  },
  {
    name: "Ш.ГАНБОЛД",
    lessons: [
      { code: "APF221", day: "Wednesday", time: "14:20-17:10", group: "1-406" },
      { code: "APF221", day: "Thursday", time: "7:40-10:30", group: "1-407" },
      { code: "APF221", day: "Friday", time: "7:40-10:30", group: "1-401" },
      { code: "APF221", day: "Friday", time: "10:40-13:30", group: "1-400" },
    ],
  },
  {
    name: "Ц.ГҮНДЭГМАА",
    lessons: [
      { code: "FTC321", day: "Monday", time: "10:40-13:30", group: "404" },
      { code: "DBM433", day: "Monday", time: "14:20-17:10", group: "409" },
      { code: "ISA333", day: "Wednesday", time: "10:40-13:30", group: "400" },
      { code: "FTC321", day: "Wednesday", time: "14:20-17:10", group: "403" },
      { code: "DBD221", day: "Thursday", time: "10:40-13:30", group: "402" },
      { code: "DBD221", day: "Thursday", time: "14:20-17:10", group: "401" },
    ],
  },
  {
    name: "Б.Гэрэлтцолмон",
    lessons: [
      { code: "DBM432", day: "Tuesday", time: "10:40-13:30", group: "422" },
      { code: "DWM431", day: "Thursday", time: "14:20-17:10", group: "423" },
    ],
  },
  {
    name: "Б.ГЭРЭЭДЭЙ",
    lessons: [
      { code: "WEB231", day: "Tuesday", time: "17:20-20:10", group: "414" },
    ],
  },
  {
    name: "М.Очирболд",
    lessons: [
      { code: "ISP324", day: "Thursday", time: "14:20-17:10", group: "412" },
    ],
  },
  {
    name: "Н.САРАНЧИМЭГ",
    lessons: [
      { code: "ISA332", day: "Thursday", time: "7:40-10:30", group: "416" },
      { code: "ISA332", day: "Thursday", time: "10:40-13:30", group: "417" },
    ],
  },
  {
    name: "А.Уянга-Эрдэнэ",
    lessons: [
      { code: "ISM435", day: "Friday", time: "10:40-13:30", group: "415" },
    ],
  },
  {
    name: "Г.Халиунаа",
    lessons: [
      { code: "ISM432", day: "Friday", time: "14:20-17:10", group: "413" },
    ],
  },
  {
    name: "Н.ХӨГЖИЛТ",
    lessons: [
      { code: "ISA231", day: "Tuesday", time: "10:40-13:30", group: "410" },
      { code: "APF221", day: "Thursday", time: "7:40-10:30", group: "1-402" },
      { code: "APF221", day: "Thursday", time: "10:40-13:30", group: "1-403" },
    ],
  },
  {
    name: "Д.ХУЛАН",
    lessons: [
      { code: "ISA334", day: "Monday", time: "10:40-13:30", group: "419" },
      { code: "ISFP431", day: "Wednesday", time: "14:20-17:10", group: "420" },
      { code: "ISA331", day: "Thursday", time: "7:40-10:30", group: "2-402" },
      { code: "ISA331", day: "Thursday", time: "10:40-13:30", group: "2-403" },
    ],
  },
  {
    name: "Л.ЭРДЭНЭСАЙХАН",
    lessons: [
      { code: "SWE222", day: "Monday", time: "10:40-13:30", group: "405" },
      { code: "CGR321", day: "Monday", time: "14:20-17:10", group: "406" },
      { code: "SWE222", day: "Thursday", time: "14:20-17:10", group: "1-415" },
      { code: "SWE222", day: "Friday", time: "7:40-10:30", group: "1-416" },
    ],
  },
  {
    name: "Б.ЭРДЭНЭЦОГТ",
    lessons: [
      { code: "ENT221", day: "Thursday", time: "11:40-13:30", group: "1-2009" },
      { code: "ENT221", day: "Friday", time: "7:40-09:30", group: "1-2012" },
      { code: "ENT221", day: "Friday", time: "09:40-11:30", group: "1-2011" },
    ],
  },
  {
    name: "Г.ЭРДЭНЭЦЭЦЭГ",
    lessons: [
      { code: "DBP221", day: "Wednesday", time: "14:20-17:10", group: "408" },
      { code: "ISM221", day: "Thursday", time: "7:40-10:30", group: "1-413" },
      { code: "ISM221", day: "Thursday", time: "10:40-13:30", group: "1-414" },
      { code: "DBP221", day: "Thursday", time: "14:20-17:10", group: "407" },
    ],
  },
  {
    name: "X.X-16",
    lessons: [
      { code: "ECN112", day: "Thursday", time: "7:40-10:30", group: "1-519" },
      { code: "ECN112", day: "Friday", time: "7:40-10:30", group: "1-511" },
    ],
  },
  {
    name: "X.X-17",
    lessons: [
      { code: "ECN223", day: "Friday", time: "7:40-10:30", group: "1-528" },
      { code: "ECN223", day: "Friday", time: "10:40-13:30", group: "1-529" },
    ],
  },
  {
    name: "М.Анармаа",
    lessons: [
      { code: "ECN112", day: "Wednesday", time: "10:40-13:30", group: "1-524" },
      { code: "ECN116", day: "Wednesday", time: "14:20-17:10", group: "1-503" },
      { code: "ECN116", day: "Thursday", time: "7:40-10:30", group: "1-505" },
      { code: "ECN116", day: "Thursday", time: "10:40-13:30", group: "1-507" },
      { code: "ECN112", day: "Friday", time: "7:40-10:30", group: "1-513" },
      { code: "ECN112", day: "Friday", time: "10:40-13:30", group: "1-512" },
    ],
  },
  {
    name: "Ц.БАТСҮХ",
    lessons: [
      { code: "ECN436", day: "Tuesday", time: "10:40-13:30", group: "527" },
      { code: "ECN225", day: "Wednesday", time: "10:40-13:30", group: "2-502" },
      { code: "ECN439", day: "Wednesday", time: "14:20-17:10", group: "528" },
    ],
  },
  {
    name: "Б.БОЛОРСУВД",
    lessons: [
      { code: "ECN115", day: "Wednesday", time: "7:40-10:30", group: "1-526" },
      { code: "ECN341", day: "Wednesday", time: "10:40-13:30", group: "518" },
      { code: "ECN112", day: "Thursday", time: "7:40-10:30", group: "1-517" },
      { code: "ECN112", day: "Thursday", time: "10:40-13:30", group: "1-520" },
    ],
  },
  {
    name: "Б.ЛХАГВАЖАРГАЛ",
    lessons: [
      { code: "ECN447", day: "Monday", time: "10:40-13:30", group: "514" },
      { code: "ECN224", day: "Wednesday", time: "7:40-10:30", group: "2-501" },
      { code: "ECN112", day: "Friday", time: "7:40-10:30", group: "1-509" },
      { code: "ECN112", day: "Friday", time: "10:40-13:30", group: "1-514" },
    ],
  },
  {
    name: "П.НОМУУНЗАЯА",
    lessons: [
      { code: "ECN443", day: "Monday", time: "7:40-10:30", group: "534" },
      { code: "ECN112", day: "Wednesday", time: "7:40-10:30", group: "1-522" },
      { code: "ECN116", day: "Wednesday", time: "10:40-13:30", group: "1-500" },
      { code: "ECN116", day: "Thursday", time: "7:40-10:30", group: "1-504" },
      { code: "ECN116", day: "Thursday", time: "10:40-13:30", group: "1-506" },
      { code: "ECN112", day: "Friday", time: "7:40-10:30", group: "1-515" },
      { code: "ECN112", day: "Friday", time: "10:40-13:30", group: "1-516" },
    ],
  },
  {
    name: "Д.ӨНӨРЖАРГАЛ",
    lessons: [
      { code: "ECN112", day: "Wednesday", time: "7:40-10:30", group: "1-521" },
      { code: "ECN115", day: "Wednesday", time: "10:40-13:30", group: "1-527" },
      { code: "ECN112", day: "Thursday", time: "7:40-10:30", group: "1-525" },
      { code: "ECN112", day: "Thursday", time: "10:40-13:30", group: "1-518" },
      { code: "ECN435", day: "Friday", time: "7:40-10:30", group: "509" },
      { code: "ECN112", day: "Friday", time: "10:40-13:30", group: "1-510" },
    ],
  },
  {
    name: "Э.Сугарбаяр",
    lessons: [
      { code: "ECN325", day: "Tuesday", time: "7:40-10:30", group: "500" },
    ],
  },
  {
    name: "Д.ТҮВШИНЖАРГАЛ",
    lessons: [
      { code: "ECN342", day: "Tuesday", time: "10:40-13:30", group: "504" },
      { code: "ECN449", day: "Tuesday", time: "14:20-17:10", group: "503" },
      { code: "ECN116", day: "Wednesday", time: "7:40-10:30", group: "1-501" },
      { code: "ECN116", day: "Wednesday", time: "10:40-13:30", group: "1-502" },
    ],
  },
  {
    name: ".MENGGEN",
    lessons: [
      { code: "CHS212B", day: "Monday", time: "7:40-10:30", group: "2-706" },
      {
        code: "CHS212B",
        day: "Wednesday",
        time: "10:40-13:30",
        group: "2-707",
      },
      { code: "CHS212B", day: "Thursday", time: "7:40-10:30", group: "2-706" },
      { code: "CHS212B", day: "Friday", time: "10:40-13:30", group: "2-707" },
    ],
  },
  {
    name: "X.X-19",
    lessons: [
      { code: "AEN113A", day: "Monday", time: "7:40-10:30", group: "738" },
      { code: "AEN112A", day: "Monday", time: "10:40-13:30", group: "736" },
      { code: "ENG321", day: "Monday", time: "14:20-17:10", group: "739" },
      { code: "AEN113A", day: "Wednesday", time: "7:40-10:30", group: "738" },
      { code: "AEN112A", day: "Wednesday", time: "14:20-17:10", group: "736" },
      { code: "ACE112A", day: "Friday", time: "7:40-10:30", group: "726" },
      { code: "ACE112A", day: "Friday", time: "10:40-13:30", group: "725" },
    ],
  },
  {
    name: "X.X-20",
    lessons: [
      { code: "AEN111A", day: "Monday", time: "7:40-10:30", group: "731" },
      { code: "AEN111A", day: "Monday", time: "10:40-13:30", group: "732" },
      { code: "ACE113A", day: "Tuesday", time: "7:40-10:30", group: "729" },
      { code: "ENG328", day: "Wednesday", time: "14:20-17:10", group: "741" },
      { code: "ESP332", day: "Thursday", time: "7:40-10:30", group: "748" },
      { code: "ACE113B", day: "Thursday", time: "14:20-17:10", group: "730" },
      { code: "AEN111A", day: "Friday", time: "7:40-10:30", group: "731" },
      { code: "AEN111A", day: "Friday", time: "10:40-13:30", group: "732" },
    ],
  },
  {
    name: "X.X-21",
    lessons: [
      { code: "ESP331", day: "Thursday", time: "7:40-10:30", group: "745" },
      { code: "ESP331", day: "Thursday", time: "14:20-17:10", group: "746" },
      { code: "ESP332", day: "Friday", time: "7:40-10:30", group: "747" },
    ],
  },
  {
    name: "L.YI-CEN",
    lessons: [
      { code: "CHS212A", day: "Tuesday", time: "7:40-10:30", group: "2-702" },
      { code: "CHS212B", day: "Tuesday", time: "10:40-13:30", group: "2-705" },
      { code: "CHS212A", day: "Wednesday", time: "7:40-10:30", group: "2-704" },
      {
        code: "CHS212B",
        day: "Wednesday",
        time: "10:40-13:30",
        group: "2-705",
      },
      { code: "CHS212A", day: "Friday", time: "7:40-10:30", group: "2-704" },
    ],
  },
  {
    name: "Л.БОЛОРТАМИР",
    lessons: [
      { code: "ACE111A", day: "Monday", time: "7:40-10:30", group: "705" },
      { code: "ACE111B", day: "Monday", time: "14:20-17:10", group: "714" },
      { code: "ACE111A", day: "Wednesday", time: "7:40-10:30", group: "704" },
      { code: "ACE111B", day: "Wednesday", time: "14:20-17:10", group: "713" },
    ],
  },
  {
    name: "А.ГЭРЭЛЧИМЭГ",
    lessons: [
      { code: "ACE111A", day: "Monday", time: "10:40-13:30", group: "700" },
      { code: "ACE111B", day: "Monday", time: "14:20-17:10", group: "718" },
      { code: "ACE111B", day: "Tuesday", time: "10:40-13:30", group: "723" },
      { code: "ACE111B", day: "Tuesday", time: "14:20-17:10", group: "724" },
      { code: "EPO113", day: "Wednesday", time: "7:40-10:30", group: "1-708" },
      { code: "ACE111B", day: "Wednesday", time: "14:20-17:10", group: "708" },
      { code: "ACE111A", day: "Thursday", time: "10:40-13:30", group: "707" },
      { code: "ACE111B", day: "Thursday", time: "14:20-17:10", group: "719" },
    ],
  },
  {
    name: "Д.НАРАНТУЯА",
    lessons: [
      { code: "ACE111B", day: "Monday", time: "14:20-17:10", group: "709" },
    ],
  },
  {
    name: "Д.ОТГОНСҮХ",
    lessons: [
      { code: "ACE111A", day: "Monday", time: "7:40-10:30", group: "706" },
      { code: "AEN111B", day: "Monday", time: "10:40-13:30", group: "733" },
      { code: "ACE111B", day: "Monday", time: "17:20-20:10", group: "720" },
      { code: "ACE111B", day: "Tuesday", time: "7:40-10:30", group: "717" },
      { code: "ACE111B", day: "Tuesday", time: "14:20-17:10", group: "710" },
      { code: "AEN111B", day: "Tuesday", time: "17:20-20:10", group: "733" },
      { code: "AEN111B", day: "Wednesday", time: "14:20-17:10", group: "735" },
      { code: "ACE111A", day: "Wednesday", time: "17:20-20:10", group: "701" },
      { code: "ENG329", day: "Thursday", time: "7:40-10:30", group: "744" },
      { code: "ACE111B", day: "Thursday", time: "10:40-13:30", group: "722" },
      { code: "AEN111B", day: "Thursday", time: "14:20-17:10", group: "735" },
      { code: "ENG329", day: "Friday", time: "7:40-10:30", group: "742" },
      { code: "ENG329", day: "Friday", time: "10:40-13:30", group: "743" },
    ],
  },
  {
    name: "Л.ОЮУНБОЛОР",
    lessons: [
      { code: "CHS112B", day: "Monday", time: "10:40-13:30", group: "1-705" },
      { code: "LCH243", day: "Monday", time: "14:20-17:10", group: "750" },
      { code: "CHS112B", day: "Tuesday", time: "7:40-10:30", group: "1-704" },
      { code: "CHS112B", day: "Tuesday", time: "10:40-13:30", group: "1-703" },
      { code: "CHS112B", day: "Wednesday", time: "7:40-10:30", group: "1-704" },
      {
        code: "CHS112B",
        day: "Wednesday",
        time: "10:40-13:30",
        group: "1-703",
      },
      { code: "CHS112B", day: "Friday", time: "10:40-13:30", group: "1-705" },
    ],
  },
  {
    name: "Ц.ТӨМӨРБАРС",
    lessons: [
      { code: "ACE111B", day: "Monday", time: "7:40-10:30", group: "712" },
      { code: "ACE111A", day: "Tuesday", time: "7:40-10:30", group: "702" },
      { code: "AEN111B", day: "Tuesday", time: "14:20-17:10", group: "734" },
      { code: "IIS210", day: "Wednesday", time: "10:40-13:30", group: "1-706" },
      { code: "ACE111B", day: "Wednesday", time: "14:20-17:10", group: "715" },
      { code: "AEN111B", day: "Thursday", time: "14:20-17:10", group: "734" },
    ],
  },
  {
    name: "М.ТУНГАЛАГТУЯА",
    lessons: [
      { code: "AEN112B", day: "Monday", time: "10:40-13:30", group: "737" },
      { code: "ACE111A", day: "Tuesday", time: "7:40-10:30", group: "703" },
      { code: "ACE112B", day: "Tuesday", time: "10:40-13:30", group: "727" },
      { code: "ACE112B", day: "Wednesday", time: "7:40-10:30", group: "728" },
      { code: "AEN112B", day: "Wednesday", time: "14:20-17:10", group: "737" },
    ],
  },
  {
    name: "Э.ҮҮРИЙНТУЯА",
    lessons: [
      { code: "SIP313", day: "Tuesday", time: "10:40-13:30", group: "752" },
      { code: "ACE111B", day: "Tuesday", time: "14:20-17:10", group: "711" },
      { code: "ACE111B", day: "Thursday", time: "10:40-13:30", group: "721" },
      { code: "ACE111B", day: "Thursday", time: "14:20-17:10", group: "716" },
      { code: "ENG321", day: "Friday", time: "10:40-13:30", group: "740" },
    ],
  },
  {
    name: "Ц.ЧУЛУУНЦЭЦЭГ",
    lessons: [
      { code: "CHS112A", day: "Monday", time: "7:40-10:30", group: "1-702" },
      { code: "CHS212A", day: "Monday", time: "10:40-13:30", group: "2-703" },
      { code: "CHS112A", day: "Tuesday", time: "7:40-10:30", group: "1-700" },
      { code: "CHS112A", day: "Tuesday", time: "10:40-13:30", group: "1-701" },
      { code: "CHS112A", day: "Wednesday", time: "7:40-10:30", group: "1-700" },
      {
        code: "CHS112A",
        day: "Wednesday",
        time: "10:40-13:30",
        group: "1-701",
      },
      { code: "LCH243", day: "Thursday", time: "7:40-10:30", group: "749" },
      { code: "CHS212A", day: "Thursday", time: "10:40-13:30", group: "2-703" },
      { code: "CHS112A", day: "Friday", time: "7:40-10:30", group: "1-702" },
      { code: "LCH243", day: "Friday", time: "10:40-13:30", group: "751" },
    ],
  },
  {
    name: "Г.ДАВААЖАРГАЛ",
    lessons: [
      { code: "MLS111", day: "Thursday", time: "09:40-11:30", group: "2-617" },
      { code: "MLS111", day: "Thursday", time: "14:20-16:10", group: "1-613" },
    ],
  },
  {
    name: "X.X-22",
    lessons: [
      {
        code: "APL321",
        day: "Monday",
        time: "7:40-8:30",
        group: "APL321-Лекц",
      },
      { code: "CRL222", day: "Friday", time: "09:40-11:30", group: "1-918" },
    ],
  },
  {
    name: "X.X-23",
    lessons: [
      { code: "APL321", day: "Tuesday", time: "11:40-13:30", group: "903" },
      { code: "APL321", day: "Tuesday", time: "14:20-16:10", group: "902" },
      { code: "APL321", day: "Friday", time: "09:40-11:30", group: "901" },
      { code: "APL321", day: "Friday", time: "11:40-13:30", group: "900" },
    ],
  },
  {
    name: "С.БАТХҮЛЭГ",
    lessons: [
      {
        code: "LAW122",
        day: "Monday",
        time: "7:40-8:30",
        group: "LAW122-Лекц",
      },
      { code: "LAW122", day: "Tuesday", time: "7:40-09:30", group: "1-900" },
      { code: "LAW122", day: "Tuesday", time: "09:40-11:30", group: "1-901" },
      { code: "LAW122", day: "Tuesday", time: "11:40-13:30", group: "1-904" },
      { code: "LAW122", day: "Thursday", time: "7:40-09:30", group: "1-902" },
      { code: "LAW122", day: "Thursday", time: "09:40-11:30", group: "1-903" },
    ],
  },
  {
    name: "Д.БЭЛГҮҮН",
    lessons: [
      {
        code: "IBT431",
        day: "Monday",
        time: "10:40-11:30",
        group: "IBT431-Лекц",
      },
      { code: "IBT431", day: "Tuesday", time: "7:40-09:30", group: "910" },
      { code: "IBT431", day: "Tuesday", time: "09:40-11:30", group: "911" },
      { code: "LAW321", day: "Thursday", time: "09:40-11:30", group: "2-908" },
      { code: "LAW321", day: "Friday", time: "7:40-09:30", group: "2-915" },
      { code: "LAW321", day: "Friday", time: "09:40-11:30", group: "2-914" },
    ],
  },
  {
    name: "Ц.ДАВААСҮРЭН",
    lessons: [
      {
        code: "IBL431",
        day: "Monday",
        time: "09:40-10:30",
        group: "IBL431-Лекц",
      },
      {
        code: "CLA431",
        day: "Monday",
        time: "12:40-13:30",
        group: "CLA431-Лекц",
      },
      {
        code: "ICL331",
        day: "Monday",
        time: "14:20-15:10",
        group: "ICL331-Лекц",
      },
      { code: "IBL431", day: "Tuesday", time: "11:40-13:30", group: "2-903" },
      { code: "IBL431", day: "Tuesday", time: "14:20-16:10", group: "931" },
      { code: "ICL331", day: "Wednesday", time: "09:40-11:30", group: "933" },
      { code: "ICL331", day: "Wednesday", time: "11:40-13:30", group: "928" },
      { code: "CLA431", day: "Wednesday", time: "14:20-16:10", group: "929" },
      { code: "CVL222", day: "Friday", time: "7:40-09:30", group: "930" },
      { code: "CVL222", day: "Friday", time: "09:40-11:30", group: "932" },
      { code: "CVL222", day: "Friday", time: "11:40-13:30", group: "934" },
    ],
  },
  {
    name: "Б.ДЭЛГЭРМАА",
    lessons: [
      {
        code: "MHL121",
        day: "Monday",
        time: "8:40-09:30",
        group: "MHL121-Лекц",
      },
      { code: "MHL121", day: "Tuesday", time: "7:40-09:30", group: "1-906" },
      { code: "MHL121", day: "Tuesday", time: "09:40-11:30", group: "1-909" },
      { code: "MHL121", day: "Tuesday", time: "11:40-13:30", group: "1-905" },
      { code: "LAW321", day: "Wednesday", time: "7:40-09:30", group: "1-916" },
      { code: "LAW321", day: "Wednesday", time: "09:40-11:30", group: "2-911" },
      { code: "LAW321", day: "Wednesday", time: "11:40-13:30", group: "2-912" },
      { code: "LAW321", day: "Thursday", time: "09:40-11:30", group: "2-910" },
      { code: "MHL121", day: "Thursday", time: "11:40-13:30", group: "1-908" },
      { code: "MHL121", day: "Thursday", time: "14:20-16:10", group: "1-907" },
    ],
  },
  {
    name: "Б.МӨНГӨННАХИА",
    lessons: [
      {
        code: "ECL322",
        day: "Monday",
        time: "8:40-09:30",
        group: "ECL322-Лекц",
      },
      { code: "ECL322", day: "Wednesday", time: "7:40-09:30", group: "904" },
    ],
  },
  {
    name: "Б.Мөнх-Эрдэнэ",
    lessons: [
      {
        code: "CPL431",
        day: "Monday",
        time: "16:20-17:10",
        group: "CPL431-Лекц",
      },
      {
        code: "FOL431",
        day: "Monday",
        time: "17:20-18:10",
        group: "FOL431-Лекц",
      },
      { code: "CPL431", day: "Wednesday", time: "7:40-09:30", group: "905" },
      { code: "FOL431", day: "Wednesday", time: "09:40-11:30", group: "906" },
    ],
  },
  {
    name: "Т.НАРАНЦОГТ",
    lessons: [
      {
        code: "LSO211",
        day: "Monday",
        time: "7:40-8:30",
        group: "LSO211-Лекц",
      },
      {
        code: "CPL322",
        day: "Monday",
        time: "8:40-09:30",
        group: "CPL322-Лекц",
      },
      { code: "CPL322", day: "Tuesday", time: "7:40-09:30", group: "2-901" },
      { code: "CPL322", day: "Wednesday", time: "7:40-09:30", group: "926" },
      { code: "LSO211", day: "Thursday", time: "7:40-09:30", group: "925" },
      { code: "LSO211", day: "Friday", time: "7:40-09:30", group: "927" },
    ],
  },
  {
    name: "Ч.ӨНӨРБАЯР",
    lessons: [
      {
        code: "PHL112",
        day: "Monday",
        time: "09:40-10:30",
        group: "PHL122-Лекц",
      },
      { code: "PHL112", day: "Tuesday", time: "7:40-09:30", group: "1-914" },
      { code: "PHL112", day: "Tuesday", time: "09:40-11:30", group: "1-910" },
      { code: "PHL112", day: "Tuesday", time: "11:40-13:30", group: "1-911" },
      { code: "PHL112", day: "Thursday", time: "09:40-11:30", group: "1-913" },
      { code: "PHL112", day: "Thursday", time: "11:40-13:30", group: "1-912" },
    ],
  },
  {
    name: "Л.ОТГОНБАЯР",
    lessons: [
      {
        code: "FML331",
        day: "Monday",
        time: "09:40-10:30",
        group: "FML331-Лекц",
      },
      {
        code: "CLT333",
        day: "Monday",
        time: "10:40-11:30",
        group: "CLT333-Лекц",
      },
      {
        code: "ATL432",
        day: "Monday",
        time: "11:40-12:30",
        group: "ATL432-Лекц",
      },
      { code: "ATL432", day: "Tuesday", time: "11:40-13:30", group: "916" },
      { code: "ATL432", day: "Tuesday", time: "14:20-16:10", group: "917" },
      { code: "FML331", day: "Wednesday", time: "11:40-13:30", group: "935" },
      { code: "CLT333", day: "Wednesday", time: "14:20-16:10", group: "915" },
    ],
  },
  {
    name: "Д.ОЮУН",
    lessons: [
      {
        code: "LAW321",
        day: "Monday",
        time: "7:40-8:30",
        group: "LAW321-Лекц",
      },
      {
        code: "FAL341",
        day: "Monday",
        time: "16:20-17:10",
        group: "FAL341-Лекц",
      },
      { code: "FAL341", day: "Tuesday", time: "09:40-11:30", group: "912" },
      { code: "LAW321", day: "Wednesday", time: "7:40-09:30", group: "1-915" },
      { code: "LAW321", day: "Friday", time: "7:40-09:30", group: "2-904" },
      { code: "LAW321", day: "Friday", time: "09:40-11:30", group: "2-906" },
      { code: "LAW321", day: "Friday", time: "11:40-13:30", group: "2-905" },
    ],
  },
  {
    name: "А.Сэргэлэнтуяа",
    lessons: [
      {
        code: "PFL431",
        day: "Monday",
        time: "15:20-16:10",
        group: "PFL431-Лекц",
      },
      { code: "PFL431", day: "Thursday", time: "7:40-09:30", group: "914" },
    ],
  },
  {
    name: "М.Түвшинжаргал",
    lessons: [
      {
        code: "BUL332",
        day: "Monday",
        time: "12:40-13:30",
        group: "BUL332-Лекц",
      },
      { code: "BUL332", day: "Tuesday", time: "7:40-09:30", group: "923" },
      {
        code: "BUL334",
        day: "Tuesday",
        time: "16:20-17:10",
        group: "BUL334-Лекц",
      },
      { code: "BUL334", day: "Wednesday", time: "7:40-09:30", group: "922" },
      { code: "BUL332", day: "Thursday", time: "7:40-09:30", group: "2-900" },
      { code: "BUL334", day: "Friday", time: "7:40-09:30", group: "924" },
    ],
  },
  {
    name: "Г.Халиун",
    lessons: [
      {
        code: "CVL222",
        day: "Monday",
        time: "11:40-12:30",
        group: "CVL222-Лекц",
      },
      {
        code: "CVL221",
        day: "Tuesday",
        time: "16:20-17:10",
        group: "CVL221-Лекц",
      },
      { code: "CVL222", day: "Thursday", time: "11:40-13:30", group: "2-902" },
      { code: "CVL221", day: "Friday", time: "7:40-09:30", group: "1-919" },
    ],
  },
  {
    name: "Л.ХАШ",
    lessons: [
      {
        code: "CDL341",
        day: "Monday",
        time: "15:20-16:10",
        group: "CDL341-Лекц",
      },
      {
        code: "CRP223",
        day: "Tuesday",
        time: "17:20-18:10",
        group: "CRP223-Лекц",
      },
      { code: "CDL341", day: "Thursday", time: "14:20-16:10", group: "918" },
      { code: "CRP223", day: "Friday", time: "7:40-09:30", group: "919" },
      { code: "CRP223", day: "Friday", time: "09:40-11:30", group: "920" },
      { code: "CRP223", day: "Friday", time: "11:40-13:30", group: "921" },
    ],
  },
  {
    name: "Ж.ХУЛАН",
    lessons: [
      {
        code: "LSL221",
        day: "Monday",
        time: "10:40-11:30",
        group: "LSL221-Лекц",
      },
      { code: "LAW321", day: "Tuesday", time: "7:40-09:30", group: "2-907" },
      { code: "LSL221", day: "Tuesday", time: "09:40-11:30", group: "2-916" },
      { code: "LAW321", day: "Friday", time: "7:40-09:30", group: "1-917" },
      { code: "LAW321", day: "Friday", time: "09:40-11:30", group: "2-909" },
      { code: "LSL221", day: "Friday", time: "11:40-13:30", group: "913" },
    ],
  },
  {
    name: "Б.ХЭРЛЭНЧИМЭГ",
    lessons: [
      {
        code: "LRT432",
        day: "Monday",
        time: "7:40-8:30",
        group: "LRT432-Лекц",
      },
      {
        code: "IPL432",
        day: "Monday",
        time: "8:40-09:30",
        group: "IPL432-Лекц",
      },
      { code: "IPL432", day: "Tuesday", time: "7:40-09:30", group: "907" },
      { code: "IPL432", day: "Tuesday", time: "09:40-11:30", group: "909" },
      { code: "LRT432", day: "Wednesday", time: "11:40-13:30", group: "908" },
    ],
  },
  {
    name: "А.ДӨЛГӨӨН",
    lessons: [
      {
        code: "INT441",
        day: "Monday",
        time: "7:40-8:30",
        group: "INT441-Лекц",
      },
      {
        code: "DCO413",
        day: "Monday",
        time: "8:40-09:30",
        group: "DCO413-Лекц",
      },
      {
        code: "INT411",
        day: "Monday",
        time: "09:40-10:30",
        group: "INT411-Лекц",
      },
      {
        code: "FTF432",
        day: "Monday",
        time: "10:40-11:30",
        group: "FTF432-Лекц",
      },
      {
        code: "INT336",
        day: "Monday",
        time: "11:40-12:30",
        group: "INT336-Лекц",
      },
      { code: "INT441", day: "Tuesday", time: "14:20-16:10", group: "1106" },
      { code: "DCO413", day: "Tuesday", time: "16:20-18:10", group: "1110" },
      { code: "INT411", day: "Thursday", time: "7:40-09:30", group: "1104" },
      { code: "FTF432", day: "Thursday", time: "09:40-11:30", group: "1105" },
      { code: "INT336", day: "Friday", time: "09:40-11:30", group: "1107" },
    ],
  },
  {
    name: "Д.ОТГОНБОЛД",
    lessons: [
      {
        code: "HSS115",
        day: "Tuesday",
        time: "17:20-18:10",
        group: "HSS115-Лекц",
      },
      { code: "HSS115", day: "Wednesday", time: "7:40-09:30", group: "2-612" },
      { code: "HSS115", day: "Wednesday", time: "09:40-11:30", group: "2-613" },
      { code: "HSS115", day: "Friday", time: "7:40-09:30", group: "2-611" },
      { code: "HSS115", day: "Friday", time: "09:40-11:30", group: "2-614" },
    ],
  },
  {
    name: "Б.ТҮВШИНЖАРГАЛ",
    lessons: [
      {
        code: "INT321",
        day: "Monday",
        time: "12:40-13:30",
        group: "INT321-Лекц",
      },
      {
        code: "INT341",
        day: "Monday",
        time: "14:20-15:10",
        group: "INT341-Лекц",
      },
      {
        code: "SMB331",
        day: "Monday",
        time: "15:20-16:10",
        group: "SMB331-Лекц",
      },
      { code: "INT321", day: "Wednesday", time: "11:40-13:30", group: "1108" },
      { code: "INT341", day: "Wednesday", time: "14:20-16:10", group: "1109" },
      { code: "SMB331", day: "Friday", time: "11:40-13:30", group: "1103" },
    ],
  },
  {
    name: "М.ХАЛИУН",
    lessons: [
      {
        code: "INT324",
        day: "Tuesday",
        time: "7:40-8:30",
        group: "INT324-Лекц",
      },
      {
        code: "INT335",
        day: "Tuesday",
        time: "8:40-09:30",
        group: "INT335-Лекц",
      },
      {
        code: "INT334",
        day: "Tuesday",
        time: "09:40-10:30",
        group: "INT334-Лекц",
      },
      { code: "INT324", day: "Wednesday", time: "7:40-09:30", group: "1100" },
      { code: "INT335", day: "Wednesday", time: "09:40-11:30", group: "1101" },
      { code: "INT334", day: "Friday", time: "7:40-09:30", group: "1102" },
      { code: "INT324", day: "Friday", time: "09:40-11:30", group: "2-1000" },
    ],
  },
  {
    name: "Б.АРИУНЗАЯА",
    lessons: [
      {
        code: "TTM222",
        day: "Tuesday",
        time: "16:20-17:10",
        group: "TTM222-Лекц",
      },
      {
        code: "TTM222",
        day: "Wednesday",
        time: "09:40-11:30",
        group: "1-1003",
      },
      {
        code: "TTM222",
        day: "Wednesday",
        time: "11:40-13:30",
        group: "1-1002",
      },
      {
        code: "HOSP350",
        day: "Thursday",
        time: "16:20-17:10",
        group: "HOSP350-Лекц",
      },
      { code: "HOSP350", day: "Friday", time: "09:40-11:30", group: "1003" },
    ],
  },
  {
    name: "Ч.БОЛОРМАА",
    lessons: [
      {
        code: "ECL121",
        day: "Tuesday",
        time: "17:20-18:10",
        group: "ECL121-Лекц",
      },
      {
        code: "ECL121",
        day: "Wednesday",
        time: "09:40-11:30",
        group: "1-1001",
      },
      {
        code: "ECL121",
        day: "Wednesday",
        time: "11:40-13:30",
        group: "1-1000",
      },
    ],
  },
  {
    name: "Ц.ДАШЦЭРЭН",
    lessons: [
      {
        code: "TTM211",
        day: "Thursday",
        time: "17:20-18:10",
        group: "TTM211-Лекц",
      },
      { code: "TTM211", day: "Friday", time: "7:40-09:30", group: "1001" },
    ],
  },
  {
    name: "Д.МӨНГӨНТУУЛ",
    lessons: [
      {
        code: "ent121",
        day: "Wednesday",
        time: "16:20-17:10",
        group: "ENT21-Лекц",
      },
      { code: "ent121", day: "Thursday", time: "09:40-11:30", group: "1002" },
    ],
  },
  {
    name: "Б.МӨНХТОГТОХ",
    lessons: [
      {
        code: "TTM316",
        day: "Wednesday",
        time: "17:20-18:10",
        group: "TTM316-Лекц",
      },
      { code: "TTM316", day: "Thursday", time: "11:40-13:30", group: "1010" },
      {
        code: "TOR309",
        day: "Thursday",
        time: "17:20-18:10",
        group: "TOR309-Лекц",
      },
      { code: "TOR309", day: "Friday", time: "7:40-09:30", group: "1011" },
    ],
  },
  {
    name: "Б.ЦОГТБАЯР",
    lessons: [
      {
        code: "TTM315",
        day: "Tuesday",
        time: "16:20-17:10",
        group: "TTM315-Лекц",
      },
      {
        code: "TOL420",
        day: "Tuesday",
        time: "17:20-18:10",
        group: "TOL420-Лекц",
      },
      { code: "TTM315", day: "Thursday", time: "7:40-09:30", group: "1000" },
      { code: "TOL420", day: "Friday", time: "11:40-13:30", group: "1004" },
    ],
  },
  {
    name: "Г.АВИРМЭД",
    lessons: [
      {
        code: "MAT112",
        day: "Tuesday",
        time: "7:40-8:30",
        group: "MAT112-Лекц",
      },
      { code: "MAT115", day: "Tuesday", time: "09:40-11:30", group: "627" },
      { code: "MAT112", day: "Thursday", time: "7:40-09:30", group: "1-623" },
      { code: "MAT112", day: "Thursday", time: "09:40-11:30", group: "1-622" },
      { code: "MAT115", day: "Friday", time: "7:40-09:30", group: "626" },
    ],
  },
  {
    name: "Д.АМЬБӨХ",
    lessons: [
      { code: "PHE149", day: "Monday", time: "09:40-11:30", group: "600" },
      { code: "PHE149", day: "Monday", time: "11:40-13:30", group: "601" },
      { code: "PHE149", day: "Monday", time: "14:20-16:10", group: "602" },
      { code: "PHE149", day: "Monday", time: "16:20-18:10", group: "603" },
      { code: "PHE149", day: "Wednesday", time: "7:40-09:30", group: "604" },
      { code: "PHE149", day: "Wednesday", time: "09:40-11:30", group: "605" },
      { code: "PHE142", day: "Wednesday", time: "11:40-13:30", group: "607" },
      { code: "PHE142", day: "Wednesday", time: "16:20-18:10", group: "608" },
    ],
  },
  {
    name: "Н.АРГИЛСАН",
    lessons: [
      { code: "MAT115", day: "Tuesday", time: "11:40-13:30", group: "632" },
      { code: "MAT115", day: "Tuesday", time: "14:20-16:10", group: "633" },
      { code: "MAT115", day: "Thursday", time: "7:40-09:30", group: "1-624" },
      { code: "MAT115", day: "Thursday", time: "09:40-11:30", group: "1-626" },
    ],
  },
  {
    name: "Л.АРИУНАА",
    lessons: [
      {
        code: "MAT115",
        day: "Monday",
        time: "17:20-18:10",
        group: "MAT115-Лекц",
      },
      { code: "MAT115", day: "Tuesday", time: "09:40-11:30", group: "1-625" },
      { code: "MAT115", day: "Tuesday", time: "14:20-16:10", group: "628" },
      { code: "MAT115", day: "Tuesday", time: "16:20-18:10", group: "629" },
      { code: "MAT115", day: "Wednesday", time: "14:20-16:10", group: "630" },
      { code: "MAT115", day: "Wednesday", time: "16:20-18:10", group: "661" },
      { code: "MAT115", day: "Friday", time: "09:40-11:30", group: "662" },
      { code: "MAT115", day: "Friday", time: "11:40-13:30", group: "1-627" },
    ],
  },
  {
    name: "Ц.ГЭРЭЛ",
    lessons: [
      {
        code: "HSS111",
        day: "Monday",
        time: "8:40-09:30",
        group: "HSS111-Лекц",
      },
      { code: "HSS111", day: "Monday", time: "14:20-16:10", group: "1-615" },
      { code: "HSS111", day: "Wednesday", time: "11:40-13:30", group: "1-636" },
      { code: "HSS111", day: "Thursday", time: "7:40-09:30", group: "1-614" },
      { code: "HSS111", day: "Friday", time: "7:40-09:30", group: "1-616" },
      { code: "HSS111", day: "Friday", time: "09:40-11:30", group: "1-617" },
      { code: "HSS111", day: "Friday", time: "11:40-13:30", group: "1-635" },
    ],
  },
  {
    name: "Ч.ДАВААСҮРЭН",
    lessons: [
      { code: "ECN222", day: "Monday", time: "14:20-16:10", group: "634" },
      { code: "ECN222", day: "Monday", time: "16:20-18:10", group: "635" },
      { code: "ECN221", day: "Tuesday", time: "7:40-09:30", group: "1-633" },
      { code: "ECN221", day: "Tuesday", time: "09:40-11:30", group: "642" },
      { code: "ECN221", day: "Tuesday", time: "11:40-13:30", group: "643" },
      { code: "ECN222", day: "Wednesday", time: "11:40-13:30", group: "2-604" },
      { code: "ECN222", day: "Wednesday", time: "14:20-16:10", group: "636" },
      { code: "MAT115", day: "Wednesday", time: "16:20-18:10", group: "631" },
      { code: "ECN222", day: "Thursday", time: "11:40-13:30", group: "2-609" },
      { code: "ECN221", day: "Thursday", time: "14:20-16:10", group: "644" },
      { code: "ECN222", day: "Friday", time: "7:40-09:30", group: "2-606" },
      { code: "ECN221", day: "Friday", time: "09:40-11:30", group: "641" },
      { code: "ECN221", day: "Friday", time: "11:40-13:30", group: "1-634" },
    ],
  },
  {
    name: "Г.ДАГВАСҮРЭН",
    lessons: [
      { code: "ECN221", day: "Tuesday", time: "7:40-09:30", group: "660" },
      { code: "ECN221", day: "Tuesday", time: "09:40-11:30", group: "639" },
      { code: "ECN221", day: "Tuesday", time: "11:40-13:30", group: "640" },
      { code: "ECN221", day: "Thursday", time: "09:40-11:30", group: "1-628" },
      { code: "ECN222", day: "Thursday", time: "11:40-13:30", group: "2-603" },
      { code: "ECN222", day: "Thursday", time: "14:20-16:10", group: "2-602" },
      { code: "ECN222", day: "Friday", time: "09:40-11:30", group: "2-601" },
      { code: "ECN222", day: "Friday", time: "11:40-13:30", group: "2-610" },
    ],
  },
  {
    name: "О.Мөнгөнсор",
    lessons: [
      { code: "HSS241", day: "Tuesday", time: "7:40-09:30", group: "1-605" },
      { code: "HSS241", day: "Tuesday", time: "09:40-11:30", group: "1-606" },
      { code: "HSS241", day: "Friday", time: "09:40-11:30", group: "1-608" },
      { code: "HSS241", day: "Friday", time: "11:40-13:30", group: "1-607" },
    ],
  },
  {
    name: "Ч.НАРАНЧИМЭГ",
    lessons: [
      {
        code: "ECN221",
        day: "Monday",
        time: "16:20-17:10",
        group: "ECN221-Лекц",
      },
      {
        code: "ECN222",
        day: "Monday",
        time: "17:20-18:10",
        group: "ECN222-Лекц",
      },
      { code: "ECN221", day: "Tuesday", time: "11:40-13:30", group: "645" },
      { code: "ECN221", day: "Tuesday", time: "14:20-16:10", group: "646" },
      { code: "ECN221", day: "Tuesday", time: "16:20-18:10", group: "648" },
      { code: "ECN222", day: "Wednesday", time: "7:40-09:30", group: "2-607" },
      { code: "ECN221", day: "Wednesday", time: "09:40-11:30", group: "1-631" },
      { code: "ECN221", day: "Wednesday", time: "11:40-13:30", group: "1-630" },
      { code: "ECN222", day: "Wednesday", time: "14:20-16:10", group: "638" },
      { code: "ECN222", day: "Thursday", time: "7:40-09:30", group: "2-605" },
      { code: "ECN221", day: "Thursday", time: "09:40-11:30", group: "647" },
      { code: "ECN221", day: "Thursday", time: "11:40-13:30", group: "649" },
      { code: "ECN221", day: "Thursday", time: "14:20-16:10", group: "650" },
      { code: "ECN222", day: "Friday", time: "7:40-09:30", group: "2-608" },
      { code: "ECN221", day: "Friday", time: "09:40-11:30", group: "1-632" },
      { code: "ECN222", day: "Friday", time: "11:40-13:30", group: "637" },
    ],
  },
  {
    name: "С.НОРЖИНЛХАМ",
    lessons: [
      {
        code: "MLS111",
        day: "Monday",
        time: "7:40-8:30",
        group: "MLS111-Лекц",
      },
      { code: "MLS111", day: "Wednesday", time: "14:20-16:10", group: "1-612" },
      { code: "MLS111", day: "Wednesday", time: "16:20-18:10", group: "620" },
      { code: "MLS111", day: "Friday", time: "7:40-09:30", group: "1-609" },
      { code: "MLS111", day: "Friday", time: "09:40-11:30", group: "621" },
    ],
  },
  {
    name: "Д.ОЮУНЦЭЦЭГ",
    lessons: [
      { code: "MLS111", day: "Tuesday", time: "7:40-09:30", group: "619" },
      { code: "MLS111", day: "Tuesday", time: "09:40-11:30", group: "622" },
      { code: "MLS111", day: "Wednesday", time: "09:40-11:30", group: "1-610" },
      { code: "MLS111", day: "Wednesday", time: "11:40-13:30", group: "1-611" },
    ],
  },
  {
    name: "Б.ПҮРЭВДОРЖ",
    lessons: [
      { code: "PHE142", day: "Tuesday", time: "7:40-09:30", group: "606" },
      { code: "PHE142", day: "Tuesday", time: "09:40-11:30", group: "609" },
      { code: "PHE142", day: "Tuesday", time: "11:40-13:30", group: "610" },
      { code: "PHE142", day: "Tuesday", time: "14:20-16:10", group: "611" },
      { code: "PHE142", day: "Tuesday", time: "16:20-18:10", group: "612" },
      { code: "PHE141", day: "Thursday", time: "09:40-11:30", group: "614" },
      { code: "PHE141", day: "Thursday", time: "11:40-13:30", group: "615" },
      { code: "PHE141", day: "Thursday", time: "14:20-16:10", group: "616" },
      { code: "PHE141", day: "Thursday", time: "16:20-18:10", group: "617" },
      { code: "PHE142", day: "Friday", time: "14:20-16:10", group: "613" },
      { code: "PHE141", day: "Friday", time: "16:20-18:10", group: "618" },
    ],
  },
  {
    name: "Б.Пүрэвнамжил",
    lessons: [
      {
        code: "BET322",
        day: "Monday",
        time: "12:40-13:30",
        group: "BET322-Лекц",
      },
      { code: "BET322", day: "Tuesday", time: "11:40-13:30", group: "651" },
      { code: "BET322", day: "Tuesday", time: "14:20-16:10", group: "652" },
      { code: "BET322", day: "Tuesday", time: "16:20-18:10", group: "653" },
      { code: "BET322", day: "Wednesday", time: "7:40-09:30", group: "656" },
      { code: "BET322", day: "Wednesday", time: "09:40-11:30", group: "657" },
      { code: "BET322", day: "Friday", time: "7:40-09:30", group: "654" },
      { code: "BET322", day: "Friday", time: "09:40-11:30", group: "655" },
      { code: "BET322", day: "Friday", time: "11:40-13:30", group: "2-600" },
    ],
  },
  {
    name: "Г.УЯНГА",
    lessons: [
      { code: "HSS241", day: "Friday", time: "7:40-09:30", group: "623" },
      { code: "HSS241", day: "Friday", time: "09:40-11:30", group: "624" },
      { code: "HSS241", day: "Friday", time: "11:40-13:30", group: "625" },
      { code: "HSS241", day: "Friday", time: "14:20-16:10", group: "658" },
    ],
  },
  {
    name: "Д.ЦОГЗОЛСҮРЭН",
    lessons: [
      {
        code: "HSS241",
        day: "Monday",
        time: "10:40-11:30",
        group: "HSS241-Лекц",
      },
      { code: "HSS241", day: "Tuesday", time: "11:40-13:30", group: "1-604" },
      { code: "HSS241", day: "Tuesday", time: "14:20-16:10", group: "659" },
      { code: "HSS241", day: "Wednesday", time: "7:40-09:30", group: "1-602" },
      { code: "HSS241", day: "Wednesday", time: "09:40-11:30", group: "1-601" },
      { code: "HSS241", day: "Wednesday", time: "11:40-13:30", group: "1-600" },
      { code: "HSS241", day: "Friday", time: "7:40-09:30", group: "1-603" },
      { code: "HSS241", day: "Friday", time: "09:40-11:30", group: "2-615" },
      { code: "HSS241", day: "Friday", time: "11:40-13:30", group: "2-616" },
    ],
  },
  {
    name: "Б.ЦЭЦГЭЭ",
    lessons: [
      { code: "PHE145", day: "Friday", time: "7:40-09:30", group: "663" },
      { code: "PHE145", day: "Friday", time: "09:40-11:30", group: "665" },
      { code: "PHE145", day: "Friday", time: "11:40-13:30", group: "664" },
    ],
  },
  {
    name: "М.АНХБАЯР",
    lessons: [
      { code: "ENT221", day: "Thursday", time: "11:40-13:30", group: "1-2001" },
    ],
  },
  {
    name: "Б.БАТ-АМГАЛАН",
    lessons: [
      {
        code: "ENT221",
        day: "Monday",
        time: "09:40-10:30",
        group: "ENT221-Лекц",
      },
      { code: "ENT221", day: "Friday", time: "7:40-09:30", group: "1-2005" },
    ],
  },
  {
    name: "Б.Лхагвасүрэн",
    lessons: [
      { code: "ENT221", day: "Tuesday", time: "09:40-11:30", group: "1-2010" },
      {
        code: "ENT221",
        day: "Wednesday",
        time: "11:40-13:30",
        group: "1-2003",
      },
      { code: "ENT221", day: "Friday", time: "09:40-11:30", group: "1-2004" },
    ],
  },
  {
    name: "Т.УУГАНБОЛД",
    lessons: [
      { code: "ENT221", day: "Thursday", time: "09:40-11:30", group: "1-2000" },
    ],
  },
  {
    name: "Б.Энхтунгалаг",
    lessons: [
      { code: "ENT221", day: "Tuesday", time: "7:40-09:30", group: "1-2007" },
      {
        code: "ENT221",
        day: "Wednesday",
        time: "09:40-11:30",
        group: "1-2002",
      },
      { code: "ENT221", day: "Friday", time: "09:40-11:30", group: "1-2006" },
    ],
  },
  {
    name: "Г.ЭНХЦЭЦЭГ",
    lessons: [
      {
        code: "ENT221",
        day: "Wednesday",
        time: "14:20-16:10",
        group: "2-2000",
      },
    ],
  },
  {
    name: "Г.Гантогтох",
    lessons: [
      {
        code: "HSS114",
        day: "Monday",
        time: "8:40-09:30",
        group: "HSS114-Лекц",
      },
      { code: "HSS114", day: "Tuesday", time: "7:40-09:30", group: "1-620" },
      { code: "HSS114", day: "Tuesday", time: "09:40-11:30", group: "1-621" },
      { code: "HSS114", day: "Thursday", time: "7:40-09:30", group: "1-618" },
      { code: "HSS114", day: "Thursday", time: "09:40-11:30", group: "1-619" },
    ],
  },
  {
    name: "З.АМИНА",
    lessons: [
      { code: "MKT221", day: "Tuesday", time: "7:40-10:30", group: "803" },
      { code: "MKT221", day: "Tuesday", time: "10:40-13:30", group: "804" },
      { code: "MKT332", day: "Wednesday", time: "10:40-13:30", group: "808" },
      { code: "MKT221", day: "Wednesday", time: "14:20-17:10", group: "805" },
      { code: "MKT221", day: "Friday", time: "7:40-10:30", group: "1-801" },
      { code: "MKT221", day: "Friday", time: "10:40-13:30", group: "1-800" },
    ],
  },
  {
    name: "Б.Батмөнх",
    lessons: [
      { code: "MKT431", day: "Tuesday", time: "10:40-13:30", group: "810" },
    ],
  },
  {
    name: "Б.ГАНШАГАЙ",
    lessons: [
      { code: "MKT441", day: "Monday", time: "10:40-13:30", group: "815" },
      { code: "MKT331", day: "Monday", time: "14:20-17:10", group: "806" },
      { code: "MKT441", day: "Tuesday", time: "10:40-13:30", group: "814" },
      { code: "MKT331", day: "Friday", time: "10:40-13:30", group: "2-800" },
    ],
  },
  {
    name: "Б.Золзаяа",
    lessons: [
      { code: "MKT331", day: "Tuesday", time: "14:20-17:10", group: "807" },
      { code: "MKT221", day: "Wednesday", time: "7:40-10:30", group: "802" },
      { code: "MKT221", day: "Wednesday", time: "14:20-17:10", group: "801" },
      { code: "MKT221", day: "Thursday", time: "7:40-10:30", group: "800" },
      { code: "MKT221", day: "Thursday", time: "10:40-13:30", group: "1-803" },
    ],
  },
  {
    name: "С.МӨНХБАЯР",
    lessons: [
      { code: "MMCS432", day: "Tuesday", time: "7:40-10:30", group: "818" },
      { code: "MMCS432", day: "Tuesday", time: "10:40-13:30", group: "819" },
      { code: "MKT433", day: "Wednesday", time: "7:40-10:30", group: "812" },
    ],
  },
  {
    name: "Б.НАНДИН-ЭРДЭНЭ",
    lessons: [
      { code: "MKT446", day: "Monday", time: "7:40-10:30", group: "816" },
      { code: "MKT448", day: "Monday", time: "10:40-13:30", group: "817" },
    ],
  },
  {
    name: "С.САЙН-ОД",
    lessons: [
      { code: "MKT432", day: "Monday", time: "14:20-17:10", group: "811" },
      { code: "MKT341", day: "Tuesday", time: "14:20-17:10", group: "809" },
    ],
  },
  {
    name: "Б.Энхбаяр",
    lessons: [
      { code: "MKT435", day: "Tuesday", time: "14:20-17:10", group: "813" },
    ],
  },
];
