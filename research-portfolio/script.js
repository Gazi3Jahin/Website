/* =========================================
   ANIMATED RESEARCH AREAS
========================================= */

const researchAreas = [
    "Explainable Machine Learning",
    "Deep Neural Networks",
    "Artificial Intelligence",
    "Natural Language Processing",
    "Trustworthy & Robust AI Systems",
    "Federated & Privacy-Preserving AI",
    "Computer Vision"
];


const animatedResearch =
    document.getElementById("animatedResearch");


let currentResearch = 0;


function changeResearchArea() {

    // Fade/slide out
    animatedResearch.style.opacity = "0";

    animatedResearch.style.transform =
        "translateY(-12px)";


    setTimeout(() => {

        currentResearch =
            (currentResearch + 1) %
            researchAreas.length;


        animatedResearch.textContent =
            researchAreas[currentResearch];


        // Restart animation
        animatedResearch.style.animation = "none";

        void animatedResearch.offsetWidth;

        animatedResearch.style.animation =
            "researchTextIn 0.65s ease";


        animatedResearch.style.opacity = "1";

        animatedResearch.style.transform =
            "translateY(0)";

    }, 350);
}


/*
    Change research area every 2.5 seconds
*/

setInterval(changeResearchArea, 2500);



/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton =
    document.getElementById("menuButton");


const navigation =
    document.querySelector(".navigation");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");

});


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

const navigationLinks =
    document.querySelectorAll(".navigation a");


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

    });

});

// =========================================
// EXPERIENCE TABS
// =========================================

const experienceTabs = document.querySelectorAll(".experience-tab");
const experienceContents = document.querySelectorAll(
    ".experience-tab-content"
);

experienceTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const target = tab.dataset.tab;


        // Remove active state from all tabs

        experienceTabs.forEach(item => {
            item.classList.remove("active");
        });


        // Hide all content

        experienceContents.forEach(content => {
            content.classList.remove("active");
        });


        // Activate clicked tab

        tab.classList.add("active");


        // Show corresponding content

        const targetContent = document.getElementById(target);

        if (targetContent) {
            targetContent.classList.add("active");
        }

    });

});

    const projectTabs = document.querySelectorAll(".project-tab");
    const projectContents = document.querySelectorAll(".project-tab-content");

    projectTabs.forEach(tab => {

        tab.addEventListener("click", () => {

            const target = tab.dataset.project;

            projectTabs.forEach(item => {
                item.classList.remove("active");
            });

            projectContents.forEach(content => {
                content.classList.remove("active");
            });

            tab.classList.add("active");

            document
                .getElementById(target)
                .classList.add("active");

        });

    });

document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       SKILLS TABS
    ================================= */

    const skillTabs = document.querySelectorAll(".skills-tab");
    const skillPanels = document.querySelectorAll(".skills-panel");

    skillTabs.forEach(tab => {

        tab.addEventListener("click", () => {

            const target = tab.dataset.target;

            skillTabs.forEach(item => {
                item.classList.remove("active");
            });

            skillPanels.forEach(panel => {
                panel.classList.remove("active");
            });

            tab.classList.add("active");

            document
                .getElementById(target)
                .classList.add("active");

        });

    });


    /* ================================
       AWARDS TABS
    ================================= */

    const awardsTabs = document.querySelectorAll(".awards-tab");
    const awardsPanels = document.querySelectorAll(".awards-panel");

    awardsTabs.forEach(tab => {

        tab.addEventListener("click", () => {

            const target = tab.dataset.target;

            awardsTabs.forEach(item => {
                item.classList.remove("active");
            });

            awardsPanels.forEach(panel => {
                panel.classList.remove("active");
            });

            tab.classList.add("active");

            document
                .getElementById(target)
                .classList.add("active");

        });

    });

});

document.querySelectorAll(".skills-section").forEach((section) => {
    const tabs = section.querySelectorAll(".skills-tab");
    const panels = section.querySelectorAll(".skills-panel");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const targetId = tab.dataset.target;
            const targetPanel = section.querySelector(
                `#${CSS.escape(targetId)}`
            );

            if (!targetPanel) return;

            // Update navigation state
            tabs.forEach((item) => {
                const isActive = item === tab;

                item.classList.toggle("active", isActive);
                item.setAttribute("aria-selected", String(isActive));
                item.tabIndex = isActive ? 0 : -1;
            });

            // Display the selected panel
            panels.forEach((panel) => {
                const isActive = panel === targetPanel;

                panel.classList.toggle("active", isActive);
                panel.hidden = !isActive;
            });
        });
    });

    // Initialize the selected category
    tabs.forEach((tab) => {
        const isActive = tab.classList.contains("active");

        tab.setAttribute("aria-selected", String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach((panel) => {
        panel.hidden = !panel.classList.contains("active");
    });
});