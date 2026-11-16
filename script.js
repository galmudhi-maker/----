
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// فتح وإغلاق القائمة
menuToggle.addEventListener("click", function () {
    nav.classList.toggle("open");
});

// إغلاق القائمة بعد اختيار صفحة
document.querySelectorAll(".nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("open");
    });
});

// التفاعل مع المواقف
function showAnswer(choice) {
    const answer = document.getElementById("answer");

    const messages = {
        revenge:
            "رد الإساءة قد يزيد الخلاف ويجعل الخصومة تستمر. يستطيع الإنسان أن يحفظ حقه دون أن يرد الإساءة بمثلها.",

        forgive:
            "العفو خُلُق عظيم، وقد قال النبي ﷺ: «وما زاد الله عبدًا بعفو إلا عزًّا». اختيار العفو عند القدرة من مكارم الأخلاق.",

        rights:
            "اختيار متوازن؛ يمكنك قبول الاعتذار والعفو مع وضع حدود واضحة تحميك من تكرار الإساءة. فالعفو لا يعني قبول الظلم."
    };

    answer.textContent = messages[choice];
    answer.classList.add("show");
}

// ظهور العناصر عند الوصول إليها
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(
    ".verse-card, .hadith-box, .path-card, .wisdom-card"
).forEach(function (element) {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);
});
