const quizData = [
    {
        question: "მოცემული გვაქვს მიმდევრობა $X_n= \\begin{cases} 1 + \\frac{1}{n} & n=2k+1 \\\\ -2 + \\frac{1}{n} & n=2k \\end{cases}$. ჩამოთვლილთაგან რომელია სამართლიანი?",
        options: [
            "$\\lim\\limits_{n\\to\\infty}X_n=0$",
            "$\\lim\\limits_{n\\to\\infty}X_n=1$",
            "$\\lim\\limits_{n\\to\\infty}X_n=-1$",
            "$\\lim\\limits_{n\\to\\infty}X_n=-2$",
            "$\\lim\\limits_{n\\to\\infty}X_n=2$",
            "$X_n$ მიმდევრობას არ აქვს ზღვარი"
        ],
        correct: 5,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "დაალაგეთ ზრდადობით $a=e^{-2}$; $b=\\log_{0.1} e$; $c=e^{-4}$. სადაც $e=\\lim\\limits_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^n$",
        options: [
            "$a; b; c$",
            "$a; c; b$",
            "$b; a; c$",
            "$b; c; a$",
            "$c; a; b$",
            "$c; b; a$"
        ],
        correct: 5,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "ცნობილია, რომ $\\lim_{n\\to\\infty}|X_n|=5$. განვიხილოთ $Y_n=2\\cdot X_n$ მიმდევრობა. ჩამოთვლილთაგან რომელი წინადადებაა აუცილებლად სამართლიანი?",
        options: [
            "$\\lim\\limits_{n\\to\\infty}|Y_n|=5$",
            "$\\lim\\limits_{n\\to\\infty}Y_n=10$",
            "$\\lim\\limits_{n\\to\\infty}(Y_n\\cdot X_n)=50$",
            "$\\lim\\limits_{n\\to\\infty}(Y_n+X_n)=15$",
            "$\\lim\\limits_{n\\to\\infty}(Y_n-X_n)=5$",
            "$\\lim\\limits_{n\\to\\infty}Y_n=-10$"
        ],
        correct: 2,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "საკოორდინატო სიბრტყეზე მოცემულია ორი წრფის გრაფიკი $5x+3y-2=0$; $\\sqrt{17}x-\\sqrt{17}y+5=0$. იპოვეთ რისი ტოლია ამ წრფეებს შორის კუთხის კოსინუსი.",
        options: [
            "$\\frac{\\sqrt{3}}{2}$",
            "$\\frac{\\sqrt{17}}{17}$",
            "$\\frac{\\sqrt{5}-1}{2}$",
            "$\\frac{\\sqrt{6}-2}{4}$",
            "$\\frac{\\sqrt{2}}{2}$",
            "$\\frac{1}{2}$"
        ],
        correct: 1,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "საკოორდინატო სიბრტყეზე დახაზულია $y=-3x$ წრფის გრაფიკი. ამავე სიბრტყეზე მონიშნულია ორი განსხვავებული $A(-1;a)$ და $B(-1;b)$ წერტილი. რისი ტოლია ამ წერტილებს შორის მანძილი თუ თითოეული მათგანი წრფის გრაფიკიდან $\\sqrt{10}$-ის ტოლი მანძილითაა დაშორებული?",
        options: [
            "$8$",
            "$22$",
            "$18$",
            "$16$",
            "$20$",
            "$14$"
        ],
        correct: 4,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "გამოთვალეთ, რისი ტოლია $\\lim\\limits_{n\\to\\infty} \\left(1+\\frac{3}{n}\\right)^{2n+1}$ ზღვრის მნიშვნელობა?",
        options: [
            "$e^{-6}$",
            "$e^{6}$",
            "$e^{2}$",
            "$e^{-2}$",
            "$e^{3}$",
            "$e^{-3}$"
        ],
        correct: 1,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "გამოთვალეთ, რისი ტოლია $\\lim\\limits_{n\\to\\infty} \\frac{3n^3+8n^2-6}{-n^3+2n^2+n}$ ზღვრის მნიშვნელობა?",
        options: [
            "$-1$",
            "$-2$",
            "$-3$",
            "$1$",
            "$2$",
            "$3$"
        ],
        correct: 2,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "იპოვეთ $f(x)=(x^2+1)^{2x}$. რისი ტოლია $f'(0)$ გამოსახულების მნიშვნელობა?",
        options: [
            "$0$",
            "$-1$",
            "$1$",
            "$-2$",
            "$2$",
            "$3$"
        ],
        correct: 0,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "მოცემულია $f(x)=\\begin{cases} a & x\\in[-0{,}5;0{,}5] \\\\ \\frac{1}{x^2} & x\\notin[-0{,}5;0{,}5] \\end{cases}$ რისი ტოლი უნდა იყოს $a$, რომ ფუნქცია იყოს უწყვეტი?",
        options: [
            "$0{,}5$",
            "$0{,}25$",
            "$1$",
            "$-2$",
            "$2$",
            "$4$"
        ],
        correct: 5,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "ცილინდრის ღერძული კვეთა კვადრატია. ამ ცილინდრზე შემოხაზულია სფერო ისე, რომ ცილინდრის ფუძეების წრეწირები ეხება სფეროს ზედაპირს. ამავე ცილინდრში ჩახაზულია კონუსი ისე, რომ კონუსს და ცილინდრს საერთო ფუძე აქვთ და კონუსის წვერო ცილინდრის მეორე ფუძის ცენტრშია. იპოვეთ რისი ტოლია კონუსის გვერდითი ზედაპირის, ცილინდრის გვერდითი ზედაპირის და სფეროს სრული ზედაპირების ფართობების შეფარდება.",
        options: [
            "$\\sqrt{5}:6:10$",
            "$\\sqrt{5}:8:10$",
            "$\\sqrt{5}:4:8$",
            "$\\sqrt{5}:4:10$",
            "$\\sqrt{5}:6:8$",
            "$\\sqrt{5}:5:9$"
        ],
        correct: 2,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "გამოთვალეთ რისი ტოლია $\\lim\\limits_{x\\to+\\infty}\\frac{\\ln(\\frac{1}{x})}{e^x\\cdot \\frac{1}{x}}$ ზღვრის მნიშვნელობა?",
        options: [
            "$0$",
            "$1$",
            "$2$",
            "$3$",
            "$4$",
            "$5$"
        ],
        correct: 0,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "რამდენი ამონახსნი აქვს $f'(x)=0$ განტოლებას, სადაც $f(x)=\\arctan(x)+\\arccos(x)$",
        options: [
            "არცერთი",
            "$1$",
            "$2$",
            "$3$",
            "$4$",
            "უამრავი"
        ],
        correct: 1,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "მოცემულია, რომ $f'(x)=2x+2$ და $g'(x)=3-x$. რისი ტოლია $\\lim\\limits_{a\\to0}\\frac{f(x+a)+2g(x+a)-f(x)-2g(x)}{a}$?",
        options: [
            "$10$",
            "$8$",
            "$6$",
            "$4$",
            "$2$",
            "$0$"
        ],
        correct: 1,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "რისი ტოლია იმ წაკვეთილი კონუსის გვერდითი ზედაპირის ფართობი, რომლის ფუძის რადიუსებია $1$ და $4$ ხოლო სიმაღლე კი $4$-ია?",
        options: [
            "$25\\pi$",
            "$20\\pi$",
            "$30\\pi$",
            "$15\\pi$",
            "$50\\pi$",
            "$22{,}5\\pi$"
        ],
        correct: 0,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "დათვალეთ რისი ტოლია $\\lim\\limits_{x\\to0}\\frac{(\\sin x)^2}{e^x-x-1}$ ზღვრის მნიშვნელობა?",
        options: [
            "$0$",
            "$1$",
            "$2$",
            "$3$",
            "$4$",
            "$5$"
        ],
        correct: 2,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "რისი ტოლია იმ სამკუთხედის ფართობი, რომელიც შემოსაზღვრულია $y=x+2$; $y=-2x+5$ და $y=-0.5x+2$ წრფეებით?",
        options: [
            "$0{,}5$",
            "$1$",
            "$1{,}5$",
            "$2$",
            "$2{,}5$",
            "$3$"
        ],
        correct: 2,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "რისი ტოლია $y=x-3$ წრფიდან $y=x^2$ პარაბოლამდე უმცირესი მანძილი?",
        options: [
            "$\\frac{1}{\\sqrt{2}}$",
            "$\\frac{1}{4\\sqrt{2}}$",
            "$\\frac{1}{2\\sqrt{2}}$",
            "$\\frac{3}{\\sqrt{2}}$",
            "$\\frac{11}{4\\sqrt{2}}$",
            "$\\frac{3}{\\sqrt{2}}$"
        ],
        correct: 4,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "მოცემულია $f(x)=(\\sin\\sqrt{1-x^2})^2$ ფუნქცია. რამდენი ამონახსნი აქვს $f'(x)=0$ განტოლებას?",
        options: [
            "$0$",
            "$1$",
            "$2$",
            "$3$",
            "$4$",
            "არცერთი წინა პასუხი არაა სწორი"
        ],
        correct: 1,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "რომელ წერტილში კვეთს აბცისთა ღერძს $y=2^x$ ფუნქციის $(1;2)$ წერტილზე გამავალი მხები?",
        options: [
            "$(2; 0)$",
            "$(\\log_2(2e^{-1}); 0)$",
            "$(\\log_2 e; 0)$",
            "$(-\\log_2 e; 0)$",
            "$(-2; 0)$",
            "$(-1; 0)$"
        ],
        correct: 1,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "კონუსის სიმაღლეა $9$, ხოლო მისი ფუძის რადიუსია $12$. ამ კონუსში ჩახაზულია ბირთვი (ბირთვი ეხება კონუსის ფუძეს ცენტრში და ეხება კონუსის გვერდით ზედაპირს). იპოვეთ რისი ტოლია ბირთვის მოცულობისა და კონუსის მოცულობების შეფარდება.",
        options: [
            "$16:81$",
            "$9:25$",
            "$16:25$",
            "$25:64$",
            "$25:81$",
            "$49:100$"
        ],
        correct: 0,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "იპოვეთ რისი ტოლია $(0; -16)$ წერტილზე გამავალი $y=x^3$ ფუნქციის მხების შეხების წერტილის კოორდინატების ჯამი?",
        options: [
            "$4$",
            "$8$",
            "$6$",
            "$10$",
            "$12$",
            "$16$"
        ],
        correct: 3,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "რისი ტოლია $f'\\left(\\frac{\\pi}{4}\\right)$ თუ $f(x)=\\frac{(\\tan x)^2}{\\cos x}$?",
        options: [
            "$5\\sqrt{2}$",
            "$\\sqrt{2}+2$",
            "$4\\sqrt{2}-2$",
            "$2\\sqrt{2}+2$",
            "$4\\sqrt{2}+2$",
            "$4\\sqrt{2}$"
        ],
        correct: 0,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "$A(3;a)$ წერტილზე გავლებულია ორი ურთიერთმართობული წრფე $y=k_1x+b_1$ და $y=k_2x+b_2$ რომლებიც $OY$ ღერძს კვეთენ ისეთ წერტილებში, რომელთა შორის მანძილია $9$. რისი ტოლია $|k_1 + k_2|$?",
        options: [
            "$1$",
            "$\\sqrt{5}$",
            "$2$",
            "$2{,}5$",
            "$3$",
            "$1{,}5$"
        ],
        correct: 1,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "სფეროში ჩახაზულია ცილინდრი ისე, რომ ცილინდრის ორივე ფუძე სფეროს ზედაპირზეა. იპოვეთ მოცემული ცილინდრის ფუძის დიამეტრის შეფარდება ცილინდრის სიმაღლესთან თუ სფეროს სრული ზედაპირის ფართობი ცილინდრის სრული ზედაპირის ფართობზე ორჯერ მეტია.",
        options: [
            "$1:2$",
            "$2:3$",
            "$3:2$",
            "$\\sqrt{2}-1$",
            "$\\sqrt{3}-1$",
            "$\\sqrt{5}-2$"
        ],
        correct: 0,
        tags: ["Geometry", "Surface Area"]
    },
    {
        question: "$y=kx+k$ წრფე ეხება $y=x^2+2x+3$ და $y=-x^2-2x-3$ პარაბოლებს. იპოვეთ რისი ტოლია შეხების წერტილებს შორის მანძილი.",
        options: [
            "$6\\sqrt{3}$",
            "$\\frac{\\sqrt{53}}{2}$",
            "$6\\sqrt{2}$",
            "$\\frac{\\sqrt{67}}{2}$",
            "$3\\sqrt{2}$",
            "$\\frac{\\sqrt{77}}{2}$"
        ],
        correct: 2,
        tags: ["Geometry", "Surface Area"]
    }
];