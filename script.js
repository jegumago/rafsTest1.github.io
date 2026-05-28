document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 0. GATEKEEPER MODE SELECTION MATRIX
    // ==========================================
    const gatekeeperScreen = document.getElementById('gatekeeper-screen');
    const gateHrBtn = document.getElementById('gate-hr-btn');
    const gateTechBtn = document.getElementById('gate-tech-btn');
    const bootScreen = document.getElementById('boot-screen');
    const mainUi = document.getElementById('main-ui');

    if (gateHrBtn && gatekeeperScreen) {
        gateHrBtn.addEventListener('click', () => {
            gatekeeperScreen.classList.add('hidden');
            if (mainUi) {
                mainUi.classList.remove('hidden');
                revealSectionsSequentially();
            }
            const hrToggleBtn = document.getElementById('hr-mode-btn');
            if (hrToggleBtn && !isHrMode) {
                hrToggleBtn.click();
            }
        });
    }

    if (gateTechBtn && gatekeeperScreen) {
        gateTechBtn.addEventListener('click', () => {
            gatekeeperScreen.classList.add('hidden');
            if (bootScreen) {
                bootScreen.classList.remove('hidden');
                printBootLine();
            }
        });
    }

    // ==========================================
    // 0.5 PAGE RESET TRIGGER (RELOAD PAGE)
    // ==========================================
    const resetPageBtn = document.getElementById('reset-page-btn');
    if (resetPageBtn) {
        resetPageBtn.addEventListener('click', () => {
            window.location.reload();
        });
    }

    // ==========================================
    // 1. TERMINAL BOOT SEQUENCE ENGINE WITH BYPASS
    // ==========================================
    const bootLines = [
        "Initializing MARTÍNEZ_CORE security handshake...",
        "Loading access control matrices... DONE",
        "Target profile located: JESÚS MARTÍNEZ // DEVOPS_SPEC",
        "Syncing skills database assets...",
        "Bypassing enterprise network firewalls... SUCCESS",
        "Loading log databases... DATA RETRIEVED (LOCKED)",
        "Handshake complete. Terminal connection stable."
    ];

    const bootLog = document.getElementById('boot-log');
    const skipBootBtn = document.getElementById('skip-boot-btn');
    let lineIndex = 0;
    let bootComplete = false;
    let bootTimeout;

    function printBootLine() {
        if (lineIndex < bootLines.length) {
            const p = document.createElement('p');
            p.textContent = `> ${bootLines[lineIndex]}`;
            if (bootLog) bootLog.appendChild(p);
            if (bootScreen) bootScreen.scrollTop = bootScreen.scrollHeight;
            lineIndex++;
            bootTimeout = setTimeout(printBootLine, 200);
        } else {
            const prompt = document.createElement('p');
            prompt.className = "blink-prompt";
            prompt.textContent = ">>> PRESS [ENTER] TO ACCESS USER_DECK_";
            if (bootLog) bootLog.appendChild(prompt);
            if (bootScreen) bootScreen.scrollTop = bootScreen.scrollHeight;
            bootComplete = true;
        }
    }

    if (skipBootBtn) {
        skipBootBtn.addEventListener('click', () => {
            clearTimeout(bootTimeout);
            bootComplete = false;
            if (bootScreen) bootScreen.classList.add('hidden');
            if (mainUi) {
                mainUi.classList.remove('hidden');
                const sections = document.querySelectorAll('.staggered-reveal');
                sections.forEach(s => s.classList.add('visible'));
            }
        });
    }

    window.addEventListener('keydown', function handleInitialEnter(e) {
        if (bootComplete && e.key === 'Enter') {
            window.removeEventListener('keydown', handleInitialEnter);
            bootComplete = false; 
            
            const blinker = document.querySelector('.blink-prompt');
            if (blinker) blinker.remove();

            const loginContainer = document.getElementById('login-prompt');
            if (!loginContainer) return;

            loginContainer.innerHTML = `
                <p>> ATTENTION: UNKNOWN NODE DETECTED ON NET_GRID.</p>
                <div class="terminal-input-line">
                    <span>ENTER USER_AGENT IDENTIFICATION:</span>
                    <input type="text" id="agent-input" class="terminal-input" autocomplete="off" autofocus>
                </div>
            `;

            const agentInput = document.getElementById('agent-input');
            if (agentInput) agentInput.focus();

            agentInput.addEventListener('keydown', (inputEvent) => {
                if (inputEvent.key === 'Enter' && agentInput.value.trim() !== "") {
                    const agentName = agentInput.value.trim().toUpperCase();
                    agentInput.disabled = true;
                    
                    const sequenceDiv = document.createElement('div');
                    sequenceDiv.style.marginTop = "15px";
                    sequenceDiv.innerHTML = `
                        <p>> GREETINGS, AGENT // <span style="color:#fff;">${agentName}</span></p>
                        <p>TARGET_ID RECOVERY: <span style="color:#fff;">jegumago</span></p>
                        <p>ACCESS_KEY: <span id="pass-matrix" style="color:var(--accent-critical);">[ ACCESS_DENIED ]</span></p>
                    `;
                    loginContainer.appendChild(sequenceDiv);

                    const passMatrix = document.getElementById('pass-matrix');
                    let crackAttempts = 0;
                    const matrixChars = "0123456789ABCDEF!@#$";
                    
                    const crackInterval = setInterval(() => {
                        if (crackAttempts < 10) {
                            let randomHash = "";
                            for(let i=0; i<8; i++) {
                                randomHash += matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
                            }
                            passMatrix.textContent = `[ BYPASS_TRY: ${randomHash} ]`;
                            crackAttempts++;
                        } else {
                            clearInterval(crackInterval);
                            passMatrix.textContent = "[ ACCESS_GRANTED // TOKENS_VALIDATED ]";
                            passMatrix.style.color = "var(--accent-neon)";
                            initializeLoadingBar(loginContainer);
                        }
                    }, 90);
                }
            });
        }
    });

    function initializeLoadingBar(container) {
        const loadWrapper = document.createElement('div');
        loadWrapper.className = "loading-bar-container";
        loadWrapper.innerHTML = `<p>> INITIALIZING DECK ENVIRONMENT DECRYPTION...</p><p id="progress-text">[░░░░░░░░░░░░░░░░░░░░] 0%</p>`;
        container.appendChild(loadWrapper);

        const progressText = document.getElementById('progress-text');
        let currentProgress = 0;
        const totalBars = 20;

        const loadInterval = setInterval(() => {
            if (currentProgress <= 100) {
                const filledCount = Math.round((currentProgress / 100) * totalBars);
                const emptyCount = totalBars - filledCount;
                const barString = "█".repeat(filledCount) + "░".repeat(emptyCount);
                progressText.textContent = `[${barString}] ${currentProgress}%`;
                currentProgress += 5;
            } else {
                clearInterval(loadInterval);
                progressText.style.color = "var(--accent-neon)";
                
                const secureLaunch = document.createElement('p');
                secureLaunch.style.color = "var(--accent-neon)";
                secureLaunch.textContent = ">>> ENVIRONMENT RENDER SUCCESSFUL. BREAKING SHIELD.";
                container.appendChild(secureLaunch);

                setTimeout(() => {
                    if (bootScreen) bootScreen.classList.add('hidden');
                    if (mainUi) {
                        mainUi.classList.remove('hidden');
                        revealSectionsSequentially();
                    }
                }, 800);
            }
        }, 60);
    }

    function revealSectionsSequentially() {
        const sections = document.querySelectorAll('.staggered-reveal');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('visible');
            }, index * 250);
        });
    }

    // ==========================================
    // 2. CORE OVERCLOCK TOGGLE
    // ==========================================
    const overclockBtn = document.getElementById('overclock-btn');
    const statusText = document.getElementById('sys-status-text');

    if (overclockBtn) {
        overclockBtn.addEventListener('click', () => {
            document.body.classList.toggle('overclocked');
            if (document.body.classList.contains('overclocked')) {
                if (statusText) statusText.textContent = "OVERCLOCKED // UNSTABLE";
                overclockBtn.textContent = "RESTORE_DEFAULT";
            } else {
                if (statusText) statusText.textContent = "NOMINAL";
                overclockBtn.textContent = "CORE_OVERCLOCK";
            }
        });
    }

    // ==========================================
    // 2.5 ACCESSIBILITY & UTILITY CONTROLS
    // ==========================================
    const toggleFontBtn = document.getElementById('toggle-font-btn');
    const toggleThemeBtn = document.getElementById('toggle-theme-btn');

    if (toggleFontBtn) {
        toggleFontBtn.addEventListener('click', () => {
            document.body.classList.toggle('readable-font');
            toggleFontBtn.textContent = document.body.classList.contains('readable-font') ? "[ TT_TERMINAL_FONT ]" : "[ AA_READABLE_FONT ]";
        });
    }

    if (toggleThemeBtn) {
        toggleThemeBtn.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast-mode');
            toggleThemeBtn.textContent = document.body.classList.contains('high-contrast-mode') ? "[ COLOR_MATRIX: ULTRA_MATRIX ]" : "[ COLOR_MATRIX: DEFAULT ]";
        });
    }

    // ==========================================
    // 2.6 HR MODE / CORPORATE CV TRANSLATION ENGINE
    // ==========================================
    const hrModeBtn = document.getElementById('hr-mode-btn');
    let isHrMode = false;

    const corporateTranslation = {
        cyber: {
            hrBtn: "[ SWITCH TO STANDARD CV ]",
            subtitle: "> Application Specialist // DevOps & Cloud // System Administration",
contact: 'LOC: CDMX // LANG: EN_ADV, ES_NAT // NET_LINK: <a href="https://www.linkedin.com/in/jesusmartinezg95/" target="_blank">linkedin.com/in/jesusmartinezg95/</a>',            sec0Title: "[00] SYSTEM_METRICS",
            lblExp: "EXP_LEVEL", lblZone: "ZONE_DB", lblStatus: "SYS_STATUS",
            sec1Title: "[01] HARDWARE_INVENTORY (SKILLS)",
            sec1Desc: "Select an item slot to extract technical metadata and sub-tools.",
            lblRarity: "RARITY: ", lblLevel: "SKILL_LEVEL: ",
            sec2Title: "[02] CONTRACT_LOG (EXPERIENCE_HISTORY)"
        },
        corporate: {
            hrBtn: "[ SWITCH TO HACKER MODE ]",
            subtitle: "Application Specialist & Systems Administrator (DevOps / Cloud Integration)",
            contact: 'Location: Mexico City | Languages: Fluent English, Native Spanish | LinkedIn: <a href="https://www.linkedin.com/in/jesusmartinezg95/" target="_blank">linkedin.com/in/jesusmartinezg95/</a>',            
            sec0Title: "PROFESSIONAL SUMMARY & METRICS",
            lblExp: "TOTAL EXPERIENCE", lblZone: "LOCATION", lblStatus: "AVAILABILITY",
            sec1Title: "CORE TECHNICAL COMPETENCIES (SKILLS)",
            sec1Desc: "Click on any technology profile asset below to view administrative experience details.",
            lblRarity: "EXPERIENCE LEVEL: ", lblLevel: "PROFICIENCY: ",
            sec2Title: "PROFESSIONAL WORK HISTORY"
        }
    };

    const enhancedItemData = {
        jira: {
            cyberTitle: "Jira_Cloud.cfg", corporateTitle: "Atlassian Jira Cloud Management",
            cyberRarity: "LEGENDARY", corporateRarity: "Expert / Advanced",
            cyberLevel: "ADVANCED ADMIN", corporateLevel: "Enterprise Administrator",
            cyberDesc: "Leads global instance governance. Manages compound cross-functional project boards, workflow transition conditions, permission schemes, and filters for engineering teams.",
            corporateDesc: "Senior-level Atlassian administration footprint. Responsible for architecture governance, designing complex custom workflows, screen layouts, advanced permission schemes, filters, and cross-functional Agile boards."
        },
        linux: {
            cyberTitle: "Linux_Core.bin", corporateTitle: "Linux Systems Administration",
            cyberRarity: "EPIC", corporateRarity: "Strong Practitioner",
            cyberLevel: "SYSADMIN LEVEL", corporateLevel: "Operating Systems Specialist",
            cyberDesc: "Proficient administrative kernel foundation. Handles environment access, file permissions configurations, system services control, and standalone server environments.",
            corporateDesc: "Experienced in managing enterprise Red Hat Enterprise Linux (RHEL) and Ubuntu Server environments. Proficient with user access management, standard shell utilities, file permissions, and system services monitoring."
        },
        automation: {
            cyberTitle: "Automation.sh", corporateTitle: "Infrastructure Automation & Scripting",
            cyberRarity: "EPIC", corporateRarity: "Strong Practitioner",
            cyberLevel: "88% SYNC", corporateLevel: "Intermediate to Advanced",
            cyberDesc: "Constructs custom Bash orchestration scripts and idempotent Ansible configuration playbooks to deploy application servers automatically and eliminate operational drag.",
            corporateDesc: "Focuses on minimizing manual intervention by developing modular shell scripts (Bash) and writing declarative Ansible playbooks to provision and configure remote environments consistently."
        },
        identity: {
            cyberTitle: "IAM_Access.key", corporateTitle: "Identity & Access Management (IAM)",
            cyberRarity: "RARE", corporateRarity: "Intermediate",
            cyberLevel: "ENTERPRISE PRO", corporateLevel: "Enterprise Security Operations",
            cyberDesc: "Enforces full secure user lifecycles. Administers Active Directory, OKTA, PingID, and RSA tokens to safely govern provisioning, offboarding, and application group mapping.",
            corporateDesc: "Manages complete corporate user lifecycles including secure onboarding and offboarding procedures. Proficient with enterprise identity providers such as Active Directory, Okta, PingID, and RSA access tokens."
        },
        cloud: {
            cyberTitle: "Cloud_Dev.env", corporateTitle: "Cloud Infrastructure (AWS & IaC)",
            cyberRarity: "RARE", corporateRarity: "Familiar / Growing",
            cyberLevel: "IN PROGRESS", corporateLevel: "Active Learning Path",
            cyberDesc: "Currently sharpening modern delivery patterns. Spinning up modular EC2 compute cells, secure S3 spaces, IAM security configurations, and coding baseline Terraform logic.",
            corporateDesc: "Actively training and expanding into modern cloud architectures. Hands-on experience creating core Amazon Web Services components like EC2 instances, S3 storage buckets, IAM roles, and basic Terraform configurations."
        },
        infra: {
            cyberTitle: "Endpoint_Mgmt.sys", corporateTitle: "Enterprise Endpoint Infrastructure",
            cyberRarity: "COMMON", corporateRarity: "Foundational",
            cyberLevel: "95% COMPLIANT", corporateLevel: "Legacy Systems Expert",
            cyberDesc: "Managed global enterprise architecture delivery pipelines using tools like SCCM, Citrix hypervisors, InTune profile suites, and ServiceNow SLA monitors.",
            corporateDesc: "Background managing enterprise application delivery pipelines and remote workstations using systems management tools including Microsoft SCCM, Citrix infrastructure, Intune profiles, and ServiceNow tracking platforms."
        }
    };

    if (hrModeBtn) {
        hrModeBtn.addEventListener('click', () => {
            isHrMode = !isHrMode;
            const mode = isHrMode ? 'corporate' : 'cyber';

            if (isHrMode) {
                document.body.classList.add('readable-font');
                document.body.classList.add('high-contrast-mode');
                if (toggleFontBtn) toggleFontBtn.textContent = "[ TT_TERMINAL_FONT ]";
                if (toggleThemeBtn) toggleThemeBtn.textContent = "[ COLOR_MATRIX: DEFAULT ]";
                
                const decryptAllBtn = document.getElementById('decrypt-all-btn');
                if (decryptAllBtn) decryptAllBtn.click();
            } else {
                document.body.classList.remove('readable-font');
                document.body.classList.remove('high-contrast-mode');
                if (toggleFontBtn) toggleFontBtn.textContent = "[ AA_READABLE_FONT ]";
                if (toggleThemeBtn) toggleThemeBtn.textContent = "[ COLOR_MATRIX: DEFAULT ]";
            }

            hrModeBtn.textContent = corporateTranslation[mode].hrBtn;
            document.getElementById('cv-subtitle').textContent = corporateTranslation[mode].subtitle;
            document.getElementById('cv-contact').innerHTML = corporateTranslation[mode].contact;
            document.getElementById('sec0-title').textContent = corporateTranslation[mode].sec0Title;
            document.getElementById('lbl-exp').textContent = corporateTranslation[mode].lblExp;
            document.getElementById('lbl-zone').textContent = corporateTranslation[mode].lblZone;
            document.getElementById('lbl-status').textContent = corporateTranslation[mode].lblStatus;
            document.getElementById('sec1-title').textContent = corporateTranslation[mode].sec1Title;
            document.getElementById('sec1-desc').textContent = corporateTranslation[mode].sec1Desc;
            document.getElementById('sec2-title').textContent = corporateTranslation[mode].sec2Title;

            const statusText = document.getElementById('sys-status-text');
            if (statusText) statusText.textContent = isHrMode ? "AVAILABLE / ACTIVE" : "NOMINAL";

            const slots = document.querySelectorAll('.inv-slot');
            slots.forEach(slot => {
                const itemKey = slot.getAttribute('data-item');
                if (enhancedItemData[itemKey]) {
                    slot.textContent = isHrMode ? enhancedItemData[itemKey].corporateTitle : enhancedItemData[itemKey].cyberTitle;
                }
            });

            const activeSlot = document.querySelector('.inv-slot.active');
            if (activeSlot) {
                const itemKey = activeSlot.getAttribute('data-item');
                refreshDisplayBlock(itemKey, mode);
            }
        });
    }

    function refreshDisplayBlock(itemKey, mode) {
        const data = enhancedItemData[itemKey];
        if (!data) return;
        
        document.getElementById('item-title').textContent = isHrMode ? data.corporateTitle : data.cyberTitle;
        document.getElementById('lbl-rarity').innerHTML = corporateTranslation[mode].lblRarity + `<span class="text-accent" id="item-rarity">${isHrMode ? data.corporateRarity : data.cyberRarity}</span>`;
        document.getElementById('lbl-level').innerHTML = corporateTranslation[mode].lblLevel + `<span id="item-level">${isHrMode ? data.corporateLevel : data.cyberLevel}</span>`;
        document.getElementById('item-desc').textContent = isHrMode ? data.corporateDesc : data.cyberDesc;
    }

    const inventorySlots = document.querySelectorAll('.inv-slot');
    inventorySlots.forEach(slot => {
        slot.addEventListener('click', (e) => {
            inventorySlots.forEach(s => s.classList.remove('active'));
            e.target.classList.add('active');
            const itemKey = e.target.getAttribute('data-item');
            const mode = isHrMode ? 'corporate' : 'cyber';
            refreshDisplayBlock(itemKey, mode);
        });
    });

    // ==========================================
    // 3. TRANSACTION LOG DECRYPTION ENGINE
    // ==========================================
    const experienceDatabase = {
        "role-tideworks": `
            <div class="terminal-experience-box">
                <div class="experience-header">
                    <span class="role-title">Application Specialist // Tideworks</span>
                    <span class="role-date">2022 - PRESENT</span>
                </div>
                <div class="experience-metadata">
                    <span class="tag-accent">CORE_DECK</span>
                    <span class="tag-divider">//</span>
                    <span class="tag-secondary">REMOTE</span>
                </div>
                <hr class="box-divider">
                <div class="experience-content">
                    <div class="decryption-status-line">
                        <span class="status-indicator-dot"></span>
                        <span class="status-text">[ ACCESS GRANTED ]</span>
                    </div>
                    <div class="company-log-block">
                        <span class="company-name">Company: TIDEWORKS //</span>
                        <ul class="clean-log-bullets">
                            <li>Leads enterprise Jira Cloud administration blueprints across global engineering segments.</li>
                            <li>Preserves complete user lifecycle security maps across Active Directory nodes and integrated developer tool licenses.</li>
                            <li>Manages automated sprint lifecycle schedules, backlog filters, and deploys SSH logic to decrease manual infrastructure routines.</li>
                        </ul>
                    </div>
                </div>
            </div>`,
        
        "role-tcs": `
            <div class="terminal-experience-box">
                <div class="experience-header">
                    <span class="role-title">Assistant Systems Engineer L1.5 // TCS</span>
                    <span class="role-date">2020 - 2022</span>
                </div>
                <div class="experience-metadata">
                    <span class="tag-accent">INFRA_DECK</span>
                    <span class="tag-divider">//</span>
                    <span class="tag-secondary">GLOBAL_ENTERPRISE</span>
                </div>
                <hr class="box-divider">
                <div class="experience-content">
                    <div class="decryption-status-line">
                        <span class="status-indicator-dot"></span>
                        <span class="status-text">[ ACCESS GRANTED ]</span>
                    </div>
                    <div class="company-log-block">
                        <span class="company-name">Company: TATA CONSULTANCY SERVICES //</span>
                        <ul class="clean-log-bullets">
                            <li>Dispatched Tier 2 infrastructure core engineering across wide industrial enterprise networks.</li>
                            <li>Controlled secure authentication keys via Active Directory, RSA tokens, PingID, and secure VPN portals.</li>
                            <li>Deployed application layers over corporate pools via SCCM arrays, virtualized Citrix platforms, and InTune profiles.</li>
                        </ul>
                    </div>
                </div>
            </div>`,
        
        "role-mahindra": `
            <div class="terminal-experience-box">
                <div class="experience-header">
                    <span class="role-title">Tech Support Level I // Tech Mahindra</span>
                    <span class="role-date">2019 - 2020</span>
                </div>
                <div class="experience-metadata">
                    <span class="tag-accent">VM_DECK</span>
                    <span class="tag-divider">//</span>
                    <span class="tag-secondary">TELEPHONY_MONITOR</span>
                </div>
                <hr class="box-divider">
                <div class="experience-content">
                    <div class="decryption-status-line">
                        <span class="status-indicator-dot"></span>
                        <span class="status-text">[ ACCESS GRANTED ]</span>
                    </div>
                    <div class="company-log-block">
                        <span class="company-name">Company: TECH MAHINDRA //</span>
                        <ul class="clean-log-bullets">
                            <li>Governed ongoing stability matrix across isolated Windows architectures, Citrix sandbox clusters, core Mainframe access links, and Cisco routing networks.</li>
                            <li>Identified critical platform blockages and escalated infrastructure incidents inside ServiceNow grids while producing compliance metrics logs.</li>
                        </ul>
                    </div>
                </div>
            </div>`,
        
        "role-compucom": `
            <div class="terminal-experience-box">
                <div class="experience-header">
                    <span class="role-title">Service Experience // Compucom</span>
                    <span class="role-date">2019 - 2019</span>
                </div>
                <div class="experience-metadata">
                    <span class="tag-accent">ENDPOINT_DECK</span>
                    <span class="tag-divider">//</span>
                    <span class="tag-secondary">TRAINING_NODES</span>
                </div>
                <hr class="box-divider">
                <div class="experience-content">
                    <div class="decryption-status-line">
                        <span class="status-indicator-dot"></span>
                        <span class="status-text">[ ACCESS GRANTED ]</span>
                    </div>
                    <div class="company-log-block">
                        <span class="company-name">Company: COMPUCOM //</span>
                        <ul class="clean-log-bullets">
                            <li>Administered unified hardware support layers across multi-architecture nodes including Windows, iOS, and Android endpoints.</li>
                            <li>Generated internal knowledge assets and conducted interactive team training blueprints regarding Active Directory operations, Citrix frameworks, OKTA mapping, and SCCM usage.</li>
                        </ul>
                    </div>
                </div>
            </div>`
    };

    const decryptButtons = document.querySelectorAll('.action-decrypt');
    const decryptAllBtn = document.getElementById('decrypt-all-btn');

    function decryptLog(btn, targetId, instant = false) {
        const logContainer = document.getElementById(targetId);
        const fullText = experienceDatabase[targetId];
        if (!logContainer || !fullText) return;

        if (btn) {
            btn.textContent = "[ ACCESS GRANTED ]";
            btn.classList.add('decrypted');
        }
        logContainer.classList.remove('encrypted');

        if (instant) {
            logContainer.innerHTML = fullText;
        } else {
            logContainer.innerHTML = "";
            let scrambleCount = 0;
            const characters = "XX//$$##@@0110_?!";
            
            function runScramble() {
                if (scrambleCount < 8) {
                    let temporaryScramble = "";
                    for(let i=0; i<20; i++) {
                        temporaryScramble += characters.charAt(Math.floor(Math.random() * characters.length));
                    }
                    logContainer.textContent = temporaryScramble;
                    scrambleCount++;
                    setTimeout(runScramble, 30);
                } else {
                    logContainer.innerHTML = fullText;
                }
            }
            runScramble();
        }
    }

    decryptButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const targetId = e.target.getAttribute('data-target');
            decryptLog(e.target, targetId, false);
        });
    });

    if (decryptAllBtn) {
        decryptAllBtn.addEventListener('click', () => {
            decryptButtons.forEach(button => {
                const targetId = button.getAttribute('data-target');
                decryptLog(null, targetId, true);
            });
            decryptAllBtn.textContent = "[ ALL_LOGS_DECRYPTED ]";
            decryptAllBtn.style.borderColor = "var(--accent-neon)";
            decryptAllBtn.style.color = "var(--accent-neon)";
        });
    }
});