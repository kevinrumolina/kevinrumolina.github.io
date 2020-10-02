const mainClass = ".text-container";
const containerClasses = {
    info: `${mainClass}.home`,
    education: `${mainClass}.study`,
    experience: `${mainClass}.experience`,
    languages: `${mainClass}.languages`,
    skills: `${mainClass}.skill`
};
const buttonSelectors = {
    info: "info",
    education: "education",
    experience: "experience",
    languages: "languages",
    skills: "skills"
};

const hideContainers = () => {
    for (selector in containerClasses) {
        const container = document.querySelector(containerClasses[selector]);

        container.style.display = "none";
    }
}

const onClick = button => {
    const clickButton = document.getElementById(buttonSelectors[button]);
    const container = document.querySelector(containerClasses[button]);

    clickButton.onclick = function () {
        hideContainers();
        container.style.display = 'flex';
    }
};

const initializer = () => {
    for (button in buttonSelectors) {
        onClick(buttonSelectors[button]);
    }
};

initializer();