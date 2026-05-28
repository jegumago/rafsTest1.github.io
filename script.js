document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. OPTION 1: TERMINAL BOOT SEQUENCE ENGINE
    // ==========================================
    const bootLines = [
        "Initializing RAFS_OS kernel recovery sequence...",
        "Loading cryptographic protocols... DONE",
        "Establishing contact with remote workspace repository...",
        "Verifying structural storage assets: [index.html, style.css, script.js]",
        "Allocating memory arrays for interactive hardware profiles...",
        "Bypassing security barriers... SUCCESS",
        "Loading personal identity parameters... DECRYPTED",
        "Wake up, Engineer..."
    ];

    const bootLog = document.getElementById('boot-log');
    const bootScreen = document.getElementById('boot-screen');
    const mainUi = document.getElementById('main-ui');
    let lineIndex = 0;

    function printBootLine() {
        if (lineIndex < bootLines.length) {
            const p = document.createElement('p');
            p.textContent = `> ${bootLines[lineIndex]}`;
            bootLog.appendChild(p);
            bootScreen.scrollTop = bootScreen.scrollHeight;
            lineIndex++;
            setTimeout(printBootLine, 350); // Speed of system printing output
        } else {
            setTimeout(() => {
                bootScreen.classList.add('hidden');
                mainUi.classList.remove('hidden');
                // Trigger the typewriter effect once the screen boots
                startMissionLogs();
            }, 800);
        }
    }
    printBootLine();

    // ==========================================
    // 2. OPTION 2: CORE OVERCLOCK SYSTEM TOGGLE
    // ==========================================
    const overclockBtn = document.getElementById('overclock-btn');
    const statusText = document.getElementById('sys-status-text');

    overclockBtn.addEventListener('click', () => {
        document.body.classList.toggle('overclocked');
        if (document.body.classList.contains('overclocked')) {
            statusText.textContent = "OVERCLOCKED // UNSTABLE";
            statusText.className = "metric-value";
            statusText.style.color = "var(--accent-critical)";
            overclockBtn.textContent = "RESTORE_DEFAULT";
        } else {
            statusText.textContent = "NOMINAL";
            statusText.className = "metric-value status-green";
            statusText.style.color = "";
            overclockBtn.textContent = "CORE_OVERCLOCK";
        }
    });

    // ==========================================
    // 3. OPTION 5: INVENTORY DATA DATABASE
    // ==========================================
    const itemData = {
        ansible: {
            title: "Ansible.cfg",
            rarity: "LEGENDARY",
            level: "95%",
            desc: "Core configuration engine used to manipulate remote environments, enforce state patterns, and automate deployment orchestrations without agent dependencies."
        },
        docker: {
            title: "Docker.dmg",
            rarity: "EPIC",
            level: "90%",
            desc: "Container runtime architecture used to isolate services, guarantee uniform execution nodes across clusters, and eliminate host file system contamination."
        },
        linux: {
            title: "Kernel.bin (Linux)",
            rarity: "MYTHIC",
            level: "92%",
            desc: "Native environment foundation. Expert proficiency in file architecture permissions, systemd service management, shell process parsing, and overall administration."
        },
        aws: {
            title: "Cloud.infra (AWS)",
            rarity: "RARE",
            level: "85%",
            desc: "Secure hyperscaler deployment hub. Utilized to host dynamic applications, maintain network traffic topologies, and connect persistent storage elements."
        },
        git: {
            title: "VCS.git",
            rarity: "COMMON",
            level: "98%",
            desc: "Sub-version controls map. Tracks local iterations, merges collaborative asset layers, and pushes cleanly via custom remote pipelines."
        },
        lifecycle: {
            title: "User_Lifecycle.exe",
            rarity: "RARE",
            level: "88%",
            desc: "Core IT operational protocol. Manages the seamless automated onboarding/offboarding pipelines, permissions tracking, and structural workspace architecture allocation."
        }
    };

    const slots = document.querySelectorAll('.inv-slot');
    const displayTitle = document.getElementById('item-title');
    const displayRarity = document.getElementById('item-rarity');
    const displayLevel = document.getElementById('item-level');
    const displayDesc = document.getElementById('item-desc');

    slots.forEach(slot => {
        slot.addEventListener('click', (e) => {
            slots.forEach(s => s.classList.remove('active'));
            e.target.classList.add('active');

            const itemKey = e.target.getAttribute('data-item');
            const data = itemData[itemKey];

            if(data) {
                displayTitle.textContent = data.title;
                displayRarity.textContent = data.rarity;
                displayLevel.textContent = data.level;
                displayDesc.textContent = data.desc;
            }
        });
    });

    // ==========================================
    // 4. OPTION 4: TYPEWRITER SIMULATOR FOR LOGS
    // ==========================================
    const missionText = "Successfully streamlined complex identity architecture environments for onboarding and offboarding procedures. Managed production administrative operations within modern sprint frameworks while designing automation sequences for system tasks and local image environments.";

    function startMissionLogs() {
        const targetContainer = document.getElementById('mission-current-text');
        let index = 0;

        function typeCharacter() {
            if (index < missionText.length) {
                targetContainer.innerHTML += missionText.charAt(index);
                index++;
                setTimeout(typeCharacter, 15); // Controls the speed of character parsing
            }
        }
        typeCharacter();
    }
});