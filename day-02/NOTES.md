# Day 02 — JavaScript Fundamentals

## 1. const vs let

### const

استخدم `const` لما المتغير نفسه مش هيتغير.

```js
const name = "Mohammed";
```

لكن لو `const` فيها Array أو Object، أقدر أغير المحتوى:

```js
const numbers = [1, 2];

numbers.push(3);
```

ده صحيح لأننا غيرنا محتوى الـArray، مش غيرنا المتغير نفسه.

### let

استخدم `let` لما قيمة المتغير هتتغير:

```js
let score = 50;

score = 80;
```

**قاعدة سريعة:**
`const` = القيمة نفسها مش هتتغير
`let` = القيمة ممكن تتغير

---

# 2. JavaScript Primitive Types

JavaScript عندها 7 Primitive Types:

```text
1. String
2. Number
3. BigInt
4. Boolean
5. Undefined
6. Null
7. Symbol
```

أمثلة:

```js
"Hello"       // String
42            // Number
42n           // BigInt
true          // Boolean
undefined     // Undefined
null          // Null
Symbol("id")   // Symbol
```

---

# 3. typeof

`typeof` بتعرف نوع القيمة.

```js
typeof "Hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
```

## typeof null

```js
typeof null
// "object"
```

ده سلوك قديم في JavaScript.

لو عايز أتأكد إن القيمة `null`:

```js
value === null
```

---

# 4. typeof Array

```js
typeof []
// "object"
```

لأن الـArray تعتبر Object في JavaScript.

الطريقة الصحيحة لمعرفة إذا كانت Array:

```js
Array.isArray([])
```

النتيجة:

```js
true
```

---

# 5. Type Conversion

أقدر أحول String إلى Number:

```js
const value = "42";

Number(value);
// 42
```

وأتأكد:

```js
typeof Number("42");
// "number"
```

## Number → String

```js
String(42);
// "42"
```

```js
typeof String(42);
// "string"
```

---

# 6. Number("hello")

```js
Number("hello");
// NaN
```

`NaN` معناها:

**Not a Number**

لكن المفاجأة:

```js
typeof NaN
// "number"
```

لأن `NaN` تعتبر قيمة خاصة من نوع Number.

---

# 7. parseInt vs Number

```js
parseInt("42px");
// 42
```

لكن:

```js
Number("42px");
// NaN
```

السبب:

`parseInt()` بيقرأ الرقم الموجود في البداية.

`Number()` بيحاول يحول القيمة كلها إلى Number.

---

# 8. Truthy & Falsy

في JavaScript فيه 8 قيم Falsy:

```text
false
0
-0
0n
""
null
undefined
NaN
```

أي قيمة غير دول غالبًا Truthy.

مثال:

```js
Boolean("");
// false

Boolean("hello");
// true

Boolean([]);
// true

Boolean({});
// true
```

مهم:

```js
Boolean("false");
// true
```

لأن `"false"` عبارة عن String غير فارغة.

---

# 9. === vs ==

الأفضل استخدام:

```js
===
```

لأنه يقارن **القيمة والنوع**.

```js
"5" === 5
// false
```

لكن:

```js
"5" == 5
// true
```

`==` بيعمل Type Coercion تلقائي، وده ممكن يعمل Bugs.

**القاعدة:** استخدم `===` و`!==`.

---

# 10. || vs ??

## ||

`||` يعتبر كل Falsy values سبب لاستخدام الـfallback.

```js
const value = 0;

value || "fallback";
// "fallback"
```

المشكلة إن `0` قيمة صحيحة وممكن تكون مهمة.

## ??

`??` يستخدم الـfallback فقط لو القيمة:

```text
null
undefined
```

مثال:

```js
const value = 0;

value ?? "fallback";
// 0
```

**قاعدة سريعة:**

استخدم `??` لما `0` أو `""` أو `false` تعتبر قيم صحيحة ومهمة.

---

# 11. if / else if / else

لما عندي أكثر من حالة:

```js
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}
```

الترتيب مهم.

---

# 12. Ternary

مناسب لحالة بسيطة:

```js
const result = score >= 60 ? "pass" : "fail";
```

بدل:

```js
if (score >= 60) {
  result = "pass";
} else {
  result = "fail";
}
```

مش الأفضل استخدام Nested Ternary للحالات الكثيرة لأنها بتصعب القراءة.

---

# 13. switch

مفيد لما بقارن نفس القيمة بعدة حالات:

```js
switch (grade) {
  case "A":
    console.log("Excellent");
    break;

  case "B":
    console.log("Very good");
    break;

  default:
    console.log("Unknown grade");
}
```

## مهم جدًا: break

لو نسيت `break`، البرنامج ممكن يكمل للحالة التالية.

مثال:

```js
case "B":
  console.log("B");
// missing break

case "C":
  console.log("C");
```

هيطبع B وبعدها C.

ده اسمه:

**Fall-through**

---

# 14. Logical Operators

## AND — &&

كل الشروط لازم تكون صحيحة:

```js
if (score >= 70 && attendance >= 80) {
  console.log("Certificate awarded");
}
```

يعني:

Score >= 70
**AND**
Attendance >= 80

---

## OR — ||

يكفي شرط واحد يكون صحيح:

```js
if (score < 60 || attendance < 50) {
  console.log("Review needed");
}
```

يعني:

Score < 60
**OR**
Attendance < 50

---

# 15. Loops

## for

استخدمها لما أعرف عدد التكرارات.

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

## for...of

للتكرار على القيم داخل Array.

```js
const tracks = ["JS", "Node", "React"];

for (const track of tracks) {
  console.log(track);
}
```

---

## for...in

للتكرار على Keys داخل Object.

```js
const student = {
  name: "Mohammed",
  age: 25
};

for (const key in student) {
  console.log(key);
  console.log(student[key]);
}
```

---

## while

يستمر طالما الشرط `true`.

```js
let value = 100;

while (value >= 1) {
  console.log(value);
  value = value / 2;
}
```

---

## do...while

ينفذ الكود **مرة واحدة على الأقل** حتى لو الشرط `false`.

```js
let number = 10;

do {
  console.log(number);
} while (number < 10);
```

---

# 16. break vs continue

## continue

يتخطى الـiteration الحالية ويكمل.

```js
for (const score of scores) {
  if (score < 50) {
    continue;
  }

  console.log(score);
}
```

يعني تجاهل الدرجات الأقل من 50.

---

## break

يوقف الـloop بالكامل.

```js
for (const score of scores) {
  if (score > 95) {
    break;
  }
}
```

يعني أول ما يلاقي رقم أكبر من 95، يوقف.

---

# 17. Template Literals

بدل:

```js
"Hello " + name
```

استخدم:

```js
`Hello ${name}`
```

مفيد جدًا مع النصوص والمتغيرات.

---

# 18. Arrays

Array بتخزن مجموعة قيم:

```js
const scores = [90, 80, 70];
```

الوصول لعنصر:

```js
scores[0];
// 90
```

إضافة عنصر:

```js
scores.push(60);
```

عدد العناصر:

```js
scores.length;
```

---

# 19. Objects

Object بيخزن بيانات في شكل Key / Value:

```js
const student = {
  name: "Mohammed",
  age: 25,
  score: 90
};
```

الوصول:

```js
student.name;
student.score;
```

أو:

```js
student["name"];
```

---

# 20. DOM

الـDOM هو تمثيل صفحة HTML داخل المتصفح.

JavaScript في المتصفح تقدر تتعامل مع HTML:

```js
document.getElementById("scoreInput");
```

وتغير المحتوى:

```js
message.textContent = "Hello";
```

لكن JavaScript التي تعمل في Node.js لا تملك `document` الخاص بالمتصفح.

لذلك:

```text
app.js
→ Browser
→ DOM موجود

report-card.js
→ Node.js
→ DOM غير موجود
```

---

# 21. Node.js vs Browser

## Node.js

مناسب لتشغيل JavaScript خارج المتصفح.

```bash
node file.js
```

يقدر يتعامل مع:

* Files
* Server
* APIs
* Backend

لكن لا يملك DOM الخاص بالصفحة.

## Browser

يشغل JavaScript داخل صفحة الويب.

يقدر يتعامل مع:

* HTML
* CSS
* DOM
* Events
* User interaction

---

# 22. أهم أخطاء Day 02

## Error 1 — switch fall-through

**المشكلة:**

نسيت `break`.

**النتيجة:**

الـswitch كمل للحالات التالية.

**الحل:**

إضافة:

```js
break;
```

---

## Error 2 — typeof null

مش Error حقيقي، لكنه سلوك misleading:

```js
typeof null
// "object"
```

الحل:

```js
value === null
```

---

## Error 3 — typeof Array

```js
typeof []
// "object"
```

الحل:

```js
Array.isArray(value)
```

---

# 23. Quick Revision

احفظ دول كويس:

```text
const → المتغير نفسه لا يتغير
let → المتغير ممكن يتغير

=== → قيمة + نوع
==  → مقارنة مع تحويل تلقائي

&& → AND
|| → OR
?? → null أو undefined فقط

break → يوقف الـloop
continue → يتخطى التكرار الحالي

for → عدد تكرارات معروف
for...of → قيم Array
for...in → Keys Object
while → طالما الشرط صحيح
do...while → ينفذ مرة على الأقل

typeof null → "object"
typeof [] → "object"
Array.isArray([]) → true
typeof NaN → "number"

Number("42") → 42
Number("hello") → NaN
parseInt("42px") → 42
Number("42px") → NaN
```


