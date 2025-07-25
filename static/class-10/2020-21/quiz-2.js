const quizData = [
  // Question 1
  {
    question: "$C_{10}^{2} + C_{10}^{3} = $",
    options: ["$60$", "$90$", "$100$", "$120$", "$165$", "$180$"],
    correct: 4,
    tags: ["ბინომი", "კომბინატორიკა"]
  },
  // Question 2
  {
    question: "თუ $\\vec{m}(2; -1; 3)$ $\\ \\vec{n}(1; 3; k)$ და $\\vec{m} \\perp \\vec{n}$ მაშინ $k$ $=$",
    options: ["$\\frac{1}{2}$", "$3$", "$\\frac{1}{3}$", "$5$", "$\\frac{7}{8}$", "$2$"],
    correct: 2,
    tags: ["ვექტორები"]
  },
  // Question 3
  {
    question: "რამდენი განსხვავებული ხერხით შეიძლება $15$ ადამიანის თანაბრად გადანაწილება სამ $A$, $B$ და $C$ ჯგუფში?",
    options: ["$A_{15}^5 \\cdot A_{10}^5$", "$C_{15}^5 \\cdot A_{10}^5$", "$C_{15}^5 \\cdot C_{10}^5$", "$A_{15}^{10}$", "$C_{15}^5$", "$A_{15}^5$"],
    correct: 2,
    tags: ["კომბინატორიკა"]
  },
  // Question 4
  {
    question: "$ABC$ სამკუთხედში გავლებულია $AD$ ბისექტრისა. გამოსახეთ $\\vec{AD}$ ვექტორი $\\vec{AB}$ და $\\vec{AC}$ ვექტორების საშუალებით, თუ $AB = 4$ და $AC = 6$.",
    options: [
      "$3\\vec{AB} + 2\\vec{AC}$",
      "$3\\vec{AB} − 2\\vec{AC}$",
      "$\\frac{3}{10}\\vec{AB} + \\frac{2}{5}\\vec{AC}$",
      "$\\frac{3}{5}\\vec{AB} + \\frac{2}{5}\\vec{AC}$",
      "$\\frac{3}{10}\\vec{AB} − \\frac{2}{5}\\vec{AC}$",
      "$\\frac{3}{5}\\vec{AB} − \\frac{2}{5}\\vec{AC}$"
    ],
    correct: 3,
    tags: ["ვექტორები"]
  },
  // Question 5
  {
    question: "რისი ტოლია $\\vec{AB}$ ვექტორის სიგრძე თუ მოცემულია $\\vec{AC}(2, 6)$ და $\\vec{BC}(-1, 2)$ ვექტორები?",
    options: ["$2$", "$3$", "$4$", "$5$", "$6$", "$7$"],
    correct: 3,
    tags: ["ვექტორები", "კუთხეს გამოთვლა"]
  },
  // Question 6
  {
    question: "ერთ წრფეზე $10$ წერტილია მონიშნული, მის პარალელურ წრფეზე კი $9$ წერტილი. რამდენი განსხვავებული ოთხკუთხედი არსებობს რომლის წვეროები მოცემულ წერტილებშია?",
    options: [
      "$A_{10}^2 \\cdot A_9^2$",
      "$C_{10}^2 \\cdot C_9^2$",
      "$10 \\cdot 9$",
      "$C_9^1 \\cdot C_{10}^3$",
      "$A_9^2 \\cdot 10$",
      "$A_{10}^2 \\cdot 9$"
    ],
    correct: 1,
    tags: ["კომბინატორიკა"]
  },
  // Question 7
  {
    question: "რამდენი ექვსნიშნა რიცხვის დაწერაა შესაძლებელი $1, 2, 3, 4, 5, 6$ ციფრების გამოყენებით, თუ ყოველი ციფრი გვხვდება მხოლოდ ერთხელ და არცერთი ორი ლუწი ციფრი ერთმანეთის გვერდით არ დგას.",
    options: ["$36$", "$48$", "$72$", "$90$", "$144$", "$150$"],
    correct: 4,
    tags: ["კომბინატორიკა", "არითმეტიკა"]
  },
  // Question 8
  {
    question: "იპოვეთ მანძილი საკოორდინატო სივრცეში მოცემული $A(1; 2; 3)$ წერტილიდან $OX$ ღერძამდე.",
    options: ["$\\sqrt{13}$", "$\\sqrt{32}$", "$\\sqrt{26}$", "$\\sqrt{34}$", "$\\sqrt{26}$", "$\\sqrt{29}$"],
    correct: 0,
    tags: ["გეომეტრია", "მანძილი წრფიდან"]
  },
  // Question 9
  {
    question: "ამოხსენით განტოლება: $11C_{2x}^{x} = 6C_{2x+1}^{x+1}$",
    options: ["$2$", "$3$", "$4$", "$5$", "$6$", "$7$"],
    correct: 3,
    tags: ["კომბინატორიკა", "განტოლება"]
  },
  // Question 10
  {
    question: "$N$ წერტილის კოორდინატებია $(-1;1;-2)$ ხოლო K წერტილის $(1;-2;4)$. იპოვეთ კუთხის კოსინუსი $\\vec{NK}$ ვექტორსა და $OZ$ ღერძს შორის.",
    options: ["$\\frac{3}{4}$", "$\\frac{4}{5}$", "$\\frac{5}{6}$", "$\\frac{6}{7}$", "$\\frac{7}{8}$", "$\\frac{8}{9}$"],
    correct: 3,
    tags: ["კოსინუსი", "ვექტორები"]
  },
  // Question 11
  {
    question: "რამდენი განსხვავებული ამონახსნი გააჩნია $x - \\sqrt{-x} + 2 = 0$ განტოლებას?",
    options: ["არცერთი", "$1$", "$2$", "$3$", "$4$", "უამრავი"],
    correct: 1,
    tags: ["რადიკალები", "განტოლება"]
  },
  // Question 12
  {
    question: "რამდენი განსხვავებული მთელი ამონახსნი გააჩნია $x < \\sqrt{x - 2}$ უტოლობას?",
    options: ["არცერთი", "$1$", "$2$", "$3$", "$4$", "უამრავი"],
    correct: 0,
    tags: ["უთანასწორობა", "რადიკალები"]
  },
  // Question 13
  {
    question: "რამდენი განსხვავებული მთელი ამონახსნი გააჩნია $x \\leq \\sqrt{x + 2}$ უტოლობას?",
    options: ["$2$", "$3$", "$4$", "$5$", "$6$", "უამრავი"],
    correct: 3,
    tags: ["უთანასწორობა", "რადიკალები"]
  },
  // Question 14
  {
    question: "რამდენი განსხვავებული გზით შეუძლია იას $5$ სხვადასხვა რვეულის ორ კარადაში განაწილება (შესაძლებელია ყველა რვეული ერთ კარადაში ჩადოს)?",
    options: ["$5$", "$10$", "$16$", "$18$", "$32$", "$36$"],
    correct: 4,
    tags: ["კომბინატორიკა"]
  },
  // Question 15
  {
    question: "ნიკას მიუტანეს რამდენიმე სათამაშო. მან უნდა აირჩიოს $2$. მას არჩევა შეუძლია $78$ განსხვავებული გზით. სულ რამდენი სათამაშო მიუტანეს ნიკას?",
    options: ["$12$", "$13$", "$14$", "$15$", "$16$", "$17$"],
    correct: 1,
    tags: ["საშუალო", "არითმეტიკა"]
  },
  // Question 16
  {
    question: "სულ რამდენი განსხვავებული განლაგება მიიღება ფერების მიხედვით, თუ ერთ რიგში დავაწყობთ $3$ შავ, $2$ თეთრ და $2$ წითელ ბურთს?",
    options: ["$120$", "$210$", "$90$", "$140$", "$70$", "$240$"],
    correct: 1,
    tags: ["კომბინატორიკა"]
  },
  // Question 17
  {
    question: "$\\vec{a}$ და $\\vec{b}$ ვექტორებს შორის კუთხე $60^\\circ$-ია, ხოლო $\\vec{c}$ ვექტორი ორივეს პერპენდიკულარია. ამავე დროს $|\\vec{a}| = 3$, $|\\vec{b}| = 2$, $|c| = 1$. იპოვეთ $\\vec{a} - \\vec{b} + \\vec{c}$ ვექტორის სიგრძე.",
    options: ["$2\\sqrt{3}$", "$3\\sqrt{2}$", "$2\\sqrt{2}$", "$3\\sqrt{3}$", "$\\sqrt{6}$", "$4$"],
    correct: 2,
    tags: ["ვექტორები", "გეომეტრია"]
  },
  // Question 18
  {
    question: "თუ წესიერ ექვსკუთხა პირამიდაში წვეროსთან მდებარე ბრტყელი კუთხე $\\alpha$-ს ტოლია, ხოლო ფუძესთან მდებარე ორწახნაგა კუთხის სიდიდე $\\beta$-ს, მაშინ:",
    options: [
      "$\\cos \\beta = \\sqrt{3} \\tan\\frac{\\alpha}{2}$",
      "$\\cos \\beta = \\sqrt{2} \\tan\\frac{\\alpha}{2}$",
      "$\\cos \\beta = \\tan\\frac{\\alpha}{2}$",
      "$\\sin \\beta = \\sqrt{3} \\tan\\frac{\\alpha}{2}$",
      "$\\sin \\beta = \\sqrt{2} \\tan\\frac{\\alpha}{2}$",
      "$\\sin \\beta = \\tan\\frac{\\alpha}{2}$"
    ],
    correct: 0,
    tags: ["ტრიგონომეტრია"]
  },
  // Question 19
  {
    question: "მართკუთხა პარალელეპიპედის წახნაგების ფართობებია $4$, $9$ და $16$. იპოვეთ ამ პარალელეპიპედის უდიდესი წიბოს სიგრძე.",
    options: ["$2$", "$3$", "$4$", "$5$", "$6$", "$8$"],
    correct: 4,
    tags: ["რიცხვები", "მთელი რიცხვები"]
  },
  // Question 20
  {
    question: "$\\sqrt[4]{x + 10} > \\sqrt{2 - x}$ უტოლობის ამონახსენია?",
    options: [
      "$(-10; 2]$",
      "$(-1; 5)$",
      "$(-10; -1)$",
      "$(-1; 2]$",
      "∅",
      "$\\mathbb{R}$"
    ],
    correct: 3,
    tags: ["უთანასწორობა", "რადიკალები"]
  },
  // Question 21
  {
    image: "class-10/images/image1.png",
    question: "ნახაზზე კუთხის წვეროზე და გვერდებზე მონიშნულია $6$ წერტილი. რამდენი განსხვავებული სამკუთხედი არსებობს, რომელთა წვეროები მონიშნული წერტილებია?",
    options: ["$9$", "$18$", "$15$", "$6$", "$20$", "$10$"],
    correct: 2,
    tags: ["კომბინატორიკა", "პერმუტაციები"]
  },
  // Question 22
  {
    question: "$\\cos(\\arctan x) = $",
    options: [
      "$1 + x^2$",
      "$1 - x^2$",
      "$\\sqrt{1 + x^2}$",
      "$\\sqrt{1 - x^2}$",
      "$\\frac{1}{\\sqrt{1 + x^2}}$",
      "$\\frac{x}{\\sqrt{1 + x^2}}$"
    ],
    correct: 4,
    tags: ["ტრიგონომეტრია", "ინვერსული"]
  },
  // Question 23
  {
    question: "$ABCD$ კვადრატის $BC$ გვერდზე აღებულია $M$ წერტილი ისე, რომ $BM:MC = 3:1$. $N$ წერტილი $CD$ გვერდის შუაწერტილია. იპოვეთ კუთხის კოსინუსი $AM$ და $BN$ წრფეებს შორის.",
    options: [
      "$\\frac{\\sqrt{3}}{5}$",
      "$\\frac{\\sqrt{2}}{8}$",
      "$\\frac{3}{\\sqrt{70}}$",
      "$\\frac{2\\sqrt{5}}{25}$",
      "$\\frac{\\sqrt{7}}{12}$",
      "$\\frac{\\sqrt{2}}{10}$"
    ],
    correct: 3,
    tags: ["გეომეტრია"]
  },
  // Question 24
  {
    question: "$x, y, z$ არაუარყოფითი რიცხვებისათვის სრულდება $x + y + z = 14$ ტოლობა. იპოვეთ $\\sqrt{x} + 2\\sqrt{y} + 3\\sqrt{z}$ გამოსახულების უდიდესი მნიშვნელობა:",
    options: ["$12$", "$13$", "$14$", "$15$", "$16$", "$17$"],
    correct: 2,
    tags: ["მინიმუმი", "ალგებრა"]
  },
  // Question 25
  {
    question: "რამდენი განსხვავებყლი გზით შეგვიძლია რიცხვი $25$ წარმოვადგინოთ $6$ ნატურალური რიხცხვის ჯამის სახით (ჯამის წარმოდგენა განსხვავებულად ითვლება მაშინაც თუ მასში რომელიმე არატოლი შესაკრებები გადანაცვლებულია)?",
    options: ["$A_{25}^6$", "$C_{25}^6$", "$C_{24}^5$", "$C_{25}^5$", "$A_9^2 \\cdot 10$", "$A_{10}^2 \\cdot 9$"],
    correct: 2,
    tags: ["კომბინატორიკა", "პერმუტაციები"]
  }
];
