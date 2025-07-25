const quizData = [
// 1
{
  question: "იპოვეთ $\\vec{m}(-3; 3; -2)$ ვექტორის სიგრძე:",
  options: ["$4$", "$2\\sqrt{5}$", "$5$", "$\\sqrt{26}$", "$2\\sqrt{6}$", "$\\sqrt{22}$"],
  correct: 5,
  tags: ["vector", "geometry"]
},

// 2
{
  question: "იპოვეთ კუთხის კოსინუსი $\\vec{m}(-3; \\sqrt{3}; -2)$ ვექტორსა და კოორდინატთა სისტემის $OZ$ ღერძს შორის.",
  options: ["$\\frac{1}{2}$", "$\\frac{1}{3}$", "$\\frac{1}{5}$", "$\\frac{1}{6}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{\\sqrt{3}}{3}$"],
  correct: 0,
  tags: ["vector", "angle"]
},

// 3
{
  question: "$\\sqrt{x + 5} + 1 = x$ განტოლების ამონახსნების ჯამია:",
  options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$5.4$"],
  correct: 3,
  tags: ["equation", "roots"]
},

// 4
{
  question: "რომელ წერტილში აისახება $(-\\sqrt{3}; 1)$ წერტილი კოორდინატთა სათავის მიმართ $150^{\\circ}$-ით (იგულისხმება საათის ისრის მოძრაობის საწინააღმდეგო მიმართულებით) მობრუნებისას?",
  options: ["$(-2; -1)$", "$(1; -\\sqrt{3})$", "$(2; -1)$", "$(-1; -\\sqrt{3})$", "$(0; -3)$", "$(\\sqrt{3}; -2)$"],
  correct: 1,
  tags: ["rotation", "geometry"]
},

// 5
{
  question: "ყუთში დევს $2$ წითელი, $3$ შავი და $4$ თეთრი ბურთი. ყუთიდან შემთხვევით ვიღებთ $2$ ბურთს. რა არის იმის ალბათობა, რომ ერთი მათგანი იქნება თეთრი, მეორე მათგანი კი - შავი?",
  options: ["$\\frac{1}{4}$", "$\\frac{2}{3}$", "$\\frac{1}{3}$", "$\\frac{3}{4}$", "$\\frac{1}{6}$", "$\\frac{5}{6}$"],
  correct: 2,
  tags: ["probability"]
},

// 6
{
  question: "$\\vec{x}$ არის $(1;1;1)$ ვექტორისა და $(1;1;2)$ ვექტორის ვექტორული ნამრავლი, $\\vec{y}$ არის $(1;1;3)$ ვექტორისა და $(2;1;1)$ ვექტორის ვექტორული ნამრავლი. ქვემოთჩამოთვლილთაგან, რისი ტოლია $\\vec{x}$ და $\\vec{y}$ ვექტორების სკალარული ნამრავლი?",
  options: ["$3$", "$-2$", "$-7$", "$4$", "$5$", "$-10$"],
  correct: 2,
  tags: ["vector", "dotproduct"]
},

// 7
{
  question: "იპოვეთ $x + y$ გამოსახულების უმცირესი მნიშვნელობა, თუ ეს რიცხვები აკმაყოფილებენ პირობას:\n\n$\\left\\{\\begin{aligned} y &\\geq x \\\\ y &\\leq -2x + 3 \\\\ y &\\geq 0{,}5x + 1 \\end{aligned}\\right.$",
  options: ["$1{,}8$", "$2$", "$2{,}2$", "$3$", "$3{,}6$", "$4$"],
  correct: [0,1,2,3,4,5],
  tags: ["inequalities", "optimization"]
},

// 8
{
  question: "იპოვეთ $a$-ს ყველა მნიშვნელობა, რომლისთვისაც $\\cos(1 - 2x) = 2a - 1$ განტოლებას გააჩნია ამონახსნი.",
  options: ["$a \\in \$ ∅", "$a \\in \\mathbb{R}$", "$a \\in [0{,}5; 1]$", "$a \\in [-1;1]$", "$a \\in [-1; 0{,}5]$", "$a \\in [0; 1]$"],
  correct: 5,
  tags: ["trigonometry", "domain"]
},

// 9
{
  question: "იპოვეთ $a$-ს უდიდესი უარყოფითი მნიშვნელობა, რომლისთვისაც $y = \\cos(6x - \\frac{\\pi a}{7})$ ფუნქცია უდიდეს მნიშვნელობას იღებს, როცა $x = \\pi$.",
  options: ["$-9$", "$-7$", "$-6$", "$-4$", "$-12$", "$-14$"],
  correct: 1,
  tags: ["trig", "function maximum"]
},

// 10
{
  question: "რამდენაირად შეიძლება $29$ თეთრის გადახდა, თუ გვაქვს მხოლოდ $1$-თეთრიანი და $5$-თეთრიანი მონეტები.",
  options: ["$3$", "$5$", "$6$", "$7$", "$28$", "$29$"],
  correct: 2,
  tags: ["combinatorics", "money"]
},

// 11
{
  question: "იპოვეთ $x$ ცვლადის დადებითი მნიშვნელობა, რომლისთვისაც ვექტორები $\\vec{a}(x; x; -1)$ და $\\vec{b}(1; x-2; 2)$ ურთიერთმართობულია.",
  options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
  correct: 1,
  tags: ["vectors", "orthogonal"]
},

// 12
{
  question: "იპოვეთ $\\left(x^{-\\frac{1}{5}} + x^{\\frac{1}{3}}\\right)^{10}$ განაშალის შუა წევრი.",
  options: ["$112x^6$", "$252x^{\\frac{2}{3}}$", "$28x^5$", "$56x^3$", "$60x^2$", "$2x^8$"],
  correct: 1,
  tags: ["binomial", "algebra"]
},

// 13
{
  question: "იპოვეთ $n$, თუ: $C_{n+4}^{n+1} + C_{n+3}^n = \\frac{13(n+2)(n+3)}{6}$",
  options: ["$6$", "$9$", "$4$", "$3$", "$12$", "ასეთი $n$ არ არსებობს"],
  correct: 2,
  tags: ["combinatorics", "equations"]
},

// 14
{
  question: "ოთხი მოსწავლე უნდა განაწილდეს $4$ კლასში. იპოვეთ ალბათობა იმისა, რომ ოთხივე მოსწავლე განსხვავებულ კლასში მოხვდება.",
  options: ["$\\frac{1}{3}$", "$\\frac{3}{32}$", "$\\frac{5}{16}$", "$\\frac{120}{343}$", "$\\frac{3}{128}$", "$1$"],
  correct: 1,
  tags: ["probability", "distribution"]
},

// 15
{
  question: "მოცემულია $3\\sin x + 4\\cos x = a$ განტოლება, სადაც $a$ $[-7; 8]$ შუალედიდან შემთხვევით აღებული რიცხვია. იპოვეთ ალბათობა იმისა, რომ მოცემულ განტოლებას ექნება ამონახსნი.",
  options: ["$\\frac{1}{4}$", "$\\frac{2}{3}$", "$\\frac{1}{3}$", "$\\frac{3}{4}$", "$\\frac{1}{6}$", "$\\frac{5}{6}$"],
  correct: 1,
  tags: ["probability", "trig"]
},

// 16
{
  question: "მართკუთხა პარალელეპიპედის წახნაგების ფართობებია $4$, $9$ და $16$. იპოვეთ ამ პარალელეპიპედის უდიდესი წიბოს სიგრძე.",
  options: ["$12$", "$9$", "$8$", "$6$", "$4$", "$3$"],
  correct: 3,
  tags: ["geometry", "3D"]
},

// 17
{
  image: "class-10/images/image2.png",
  question: "მდინარის კალაპოტი $AC$ მონაკვეთზე წრფის ნაწილს წარმოადგენს. ჩიტი მდინარის ნაპირზე მდგარი ხის $B$ წვეროდან ჩამოფრინდა, $AC$ მონაკვეთზე მდებარე $K$ წერტილში დალია წყალი და აფრინდა მდინარის ნაპირზე მდგარი მეორე ხის $D$ წვეროში. იპოვეთ $BK+KD$-ს უმცირესი მნიშვნელობა, თუ $AB = 3$მ, $CD = 5$მ, $AC = 15$მ.",
  options: ["$20$", "$19$", "$18$", "$17$", "$16$", "$15$"],
  correct: 3,
  tags: ["geometry", "minimum path"]
},

// 18
{
  question: "რამდენი სამნიშნა ნატურალური რიცხვი არსებობს, რომლის ჩანაწერშიც ორი ერთნაირი ციფრი მაინც მონაწილეობს?",
  options: ["$125$", "$512$", "$196$", "$252$", "$520$", "$162$"],
  correct: 3,
  tags: ["combinatorics", "digits"]
},

// 19
{
  question: "რამდენი მთელი რიცხვი შედის $\\sqrt{2x + 3} \\geq x$ უტოლობის ამონახსნთა სიმრავლეში?",
  options: ["$5$", "$9$", "$3$", "$6$", "$4$", "$8$"],
  correct: 0,
  tags: ["inequality", "domain"]
},

// 20
{
  question: "$A(1;1;1), B(1;7;1), C(8;0;1)$. რისი ტოლია $ABC$ სამკუთხედის ფართობი?",
  options: ["$15$", "$10$", "$35$", "$21$", "$27$", "$30$"],
  correct: 3,
  tags: ["geometry", "area"]
},

// 21
{
  question: "ამოხსენით უტოლობა $\\sqrt{x + 2} \\leq -x$.",
  options: ["$x \\in \$ ∅", "$x \\in \\mathbb{R}$", "$[-2;-1]$", "$[-1;0]$", "$[-1; -0.5]$", "$[-2; 0]$"],
  correct: 2,
  tags: ["inequality", "roots"]
},

// 22
{
  question: "$f$ არის გარდაქმნა კოეფიციენტით $3$ და ჰომოთეტიის ცენტრით $(0; 0)$. რომელ წრფეში გადაიყვანს $f$ გარდაქმნა $y = -x + 2$ წრფეს?",
  options: ["$y = -x + 2$", "$y = -x + 4$", "$y = x + 5$", "$y = -3x + 6$", "$y = -x + 6$", "$y = -3x + 5$"],
  correct: 4,
  tags: ["transformation", "homothety"]
},

// 23
{
  question: "$ABCDA_1B_1C_1D_1$ კუბში $M$ არის $B_1C_1$ წიბოს შუაწერტილი, ხოლო $K$ არის $CC_1$ წიბოს შუაწერტილი. იპოვეთ კუთხე $AM$ და $B_1K$ წრფეებს შორის.",
  options: ["$60^\\circ$", "$90^\\circ$", "$45^\\circ$", "$\\arccos 0{,}4$", "$\\arccos 0{,}6$", "$\\arccos 0{,}8$"],
  correct: 1,
  tags: ["geometry", "angle"]
},

// 24
{
  question: "კომპანიის თანამშრომლების $80\\%$ იყო ბეჯითი, ხოლო $20\\%$ იყo ზარმაცი. თანამშრომლების რაღაც ნაწილი გაუშვეს სამსახურიდან. ცნობილია, რომ ბეჯითი თანამშრომლების $10\\%$ გაუშვეს სამსახურიდან. ალბათობა იმისა, რომ სამსახურიდან გაშვებული შემთხვევით შერჩეული ადამიანი არის ბეჯითი, $0{,}32$-ის ტოლია. ზარმაცი თანამშრომლების რამდენი პროცენტი გაუშვეს სამსახურიდან?",
  options: ["$58\\%$", "$64\\%$", "$75\\%$", "$80\\%$", "$85\\%$", "$90\\%$"],
  correct: 4,
  tags: ["probability", "percentage"]
},

// 25
{
  question: "ქვემოთჩამოთვლილთაგან, რისი ტოლი შეიძლება იყოს $a$, თუ ცნობილია, რომ $(x;1;a)$ და $(-x;2x;3)$ ვექტორებს შორის კუთხე ბლაგვია $x$-ის ნებისმიერი მნიშვნელობისთვის?",
  options: ["$-0{,}5$", "$-0{,}2$", "$-0{,}1$", "$0$", "$0{,}3$", "$0{,}7$"],
  correct: 0,
  tags: ["vectors", "angle"]
}
];
