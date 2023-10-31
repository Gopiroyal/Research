document.addEventListener("DOMContentLoaded", function () {
    const healthForm = document.getElementById("healthForm");
    const symptomLinks = document.getElementById("symptomLinks");
    const results = document.getElementById("results");

    healthForm.addEventListener("submit", function (e) {
        e.preventDefault();
        symptomLinks.innerHTML = ""; // Clear previous results

        const questions = [
            "pain",
            "vomiting",
            "nausea",
            "constipation",
            "breathlessness",
            "balance",
            "bodyimage",
            "diarrhea",
            "drymouth",
            "fatigue"
        ];

        questions.forEach(function (question) {
            const value = document.querySelector(`input[name=${question}]:checked`).value;
            if (value === "Yes") {
                const link = document.createElement("a");
                link.href = getSymptomLink(question);
                link.textContent = capitalizeFirstLetter(question);
                const listItem = document.createElement("li");
                listItem.appendChild(link);
                symptomLinks.appendChild(listItem);
            }
        });

        if (symptomLinks.childElementCount > 0) {
            results.style.display = "block";
        } else {
            results.style.display = "none";
        }
    });

    function getSymptomLink(symptom) {
        const links = {
            pain: "https://www.cancer.org/cancer/managing-cancer/side-effects/pain/pain.html",
            vomiting: "https://www.healthlinkbc.ca/illnesses-conditions/cancer/cancer-controlling-cancer-pain",
            nausea: "https://www.healthlinkbc.ca/illnesses-conditions/cancer/cancer-controlling-cancer-pain",
            constipation: "http://www.bccancer.bc.ca/health-info/coping-with-cancer/managing-symptoms-side-effects/constipation-caused-by-your-medications",
             breathlessness: "https://www.youtube.com/watch?v=nxw7rAmQeAI&t=102s",
            balance: "http://www.bccancer.bc.ca/health-info/coping-with-cancer/managing-symptoms-side-effects/balance-coordination",
            bodyimage:"http://www.bccancer.bc.ca/health-info/coping-with-cancer/managing-symptoms-side-effects/balance-coordination",
            diarrhea:"https://www.cancer.gov/about-cancer/treatment/side-effects/diarrhea",
            drymouth:"https://www.youtube.com/watch?v=PuLBtVTGo9I&t=82s",
            fatigue:"https://www.breastcancer.org/treatment-side-effects/fatigue"
        };
        return links[symptom];
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
