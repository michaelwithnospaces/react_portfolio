const logotext = "MICHAEL MINH NGUYEN";
const meta = {
    title: "Minhovate",
    description: "I’m Michael Nguyen, Computer Science Major at Texas A&M",
};

const introdata = {
    title: "I’m Michael Nguyen",
    animated: {
        first: "Coding fuels my passion.",
        second: "Space inspires my curiosity.",
        third: "AI drives my creativity.",
    },
    description: "Computer science student at Texas A&M with interest in Space Systems Engineering, Software Development, and AI.",
    your_img_url: require("./assets/images/background.png"),
};

const dataabout = {
    title: "Who I Am",
    aboutme: "I'm Michael Nguyen, a computer science student at Texas A&M University, specializing in space systems engineering, software development, and AI. With experience in CubeSat missions, space software development, and data science projects, I've honed my skills in Python, C++, F’ Flight Software, and machine learning frameworks. At Space Dynamics Laboratory and the University Nanosatellite Program, I've contributed to cutting-edge aerospace projects while currently enhancing the SynthMining platform and developing advanced networking with Proxmox VE. In my free time, I love riding my Honda CBR300 motorcycle, organizing and attending rides, and casually gaming. I'm working towards a career that merges software engineering with innovative space systems.",
};
const worktimeline = [
    {
        jobtitle: "Space Dynamics Laboratory",
        where: "System Engineer",
        date: "2023",
    },
    {
        jobtitle: "NASA University Nanosatellite Program",
        where: "Software Lead",
        date: "2023",
    },
    {
        jobtitle: "Tarrant County College",
        where: "Tutor",
        date: "2022-2024",
    },
    {
        jobtitle: "Sovereign Lending Group",
        where: "Loan Originator",
        date: "2021-2022",
    },
    {
        jobtitle: "Applebees",
        where: "Waitstaff",
        date: "2020-2021",
    },
    {
        jobtitle: "Leaps4Lease",
        where: "Co-founder/Owner",
        date: "2020-2023",
    },
    {
        jobtitle: "Amerishine",
        where: "Web Developer",
        date: "2018-2020",
    },
];

const skills = [{
        name: "C++",
        value: 90,
    },
    {
        name: "C",
        value: 85,
    },
    {
        name: "Python",
        value: 90,
    },
    {
        name: "Java",
        value: 40,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "HTML",
        value: 60,
    },
    {
        name: "CSS",
        value: 60,
    },
    {
        name: "Javascript",
        value: 75,
    },
    {
        name: "SQL",
        value: 40,
    },
];

const services = [{
        title: "Backend Development",
        description: "Flight Software",
    },
    {
        title: "Artificial Intelligence/Machine Learning",
        description: "Generative Adversarial Networks, Natural Language Processing, PyTorch, Numpy, Matplotlib",
    },
    {
        title: "Operating Systems",
        description: "Windows (XP, 7, 10, 11), Mac OS 9, Linux (Ubuntu, Debian, Arch, Proxmox, Alpine)",
    },
    {
        title: "Networking",
        description: "Packetized communications protocols (IP/UDP, IP/TCP), Virtual Enviroments, Virtual Machines",
    },
    {
        title: "Other",
        description: "Git, Nodejs",
    },
];

const dataportfolio = [{
        img: require("./assets/greyscale/ASCEND.png"),
        description: "Advanced Slew Control (with) Event-based Neuromorphic Detection (ASCEND) Cube Satellite",
        link: "#",
    },
    {
        img: require("./assets/greyscale/DOLLARSIM.png"),
        description: "Cross-platform Family Finance Application",
        link: "#",
    },
    {
        img: require("./assets/greyscale/HOMELAB.png"),
        description: "Virtualized Dedicated Home and Media Server",
        link: "#",
    },
    {
        img: require("./assets/greyscale/MNIST.png"),
        description: "MNIST 1-Layer Neural Network",
        link: "#",
    },
    {
        img: require("./assets/greyscale/AGS6.png"),
        description: "Space-based Radiofrequency Array Device and Dosimeter Cube Satellite",
        link: "#",
    },
    {
        img: require("./assets/greyscale/STADR.png"),
        description: "Star Tracking and Debris Recognition (STADR) Cube Satellite",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "michaelmn@tamu.edu",
    YOUR_PHONE: "(682) 331-2966",
    description: "🛰️ For urgent matters, collaboration opportunities or space-related queries, hold tight - our communication satellites will align shortly.", 
    // https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_d3qd3n4",
    YOUR_TEMPLATE_ID: "template_bqwr41b",
    YOUR_USER_ID: "CbBA0mNc_SroX950_",
};

const socialprofils = {
    github: "https://github.com/michaelwithnospaces",
    linkedin: "https://www.linkedin.com/in/nguyen-m-michael/",
    instagram: "https://www.instagram.com/michaelwithnospaces/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};