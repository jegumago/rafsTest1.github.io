document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. TERMINAL BOOT SEQUENCE ENGINE WITH ENTER INTERACTION
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
    const bootScreen = document.getElementById('boot-screen');
    const mainUi = document.getElementById('main-ui');
    let lineIndex = 0;
    let bootComplete = false;

    function printBootLine() {
        if (lineIndex < bootLines.length) {
            const p = document.createElement('p');
            p.textContent = `> ${bootLines[lineIndex]}`;
            bootLog.appendChild(p);
            bootScreen.scrollTop = bootScreen.scrollHeight;
            lineIndex++;
            setTimeout(printBootLine, 200);
        } else {
            // Create the flashing interaction prompt
            const prompt = document.createElement('p');
            prompt.className = "blink-prompt";
            prompt.textContent = ">>> PRESS [ENTER] TO ACCESS USER_DECK_";
            bootLog.appendChild(prompt);
            bootScreen.scrollTop = bootScreen.scrollHeight;
            
            // Enable the keyboard intercept
            bootComplete = true;
        }
    }
    printBootLine();

    // Global event listener waiting for the Enter key to initiate the login bridge
    window.addEventListener('keydown', function handleInitialEnter(e) {
        if (bootComplete && e.key === 'Enter') {
            window.removeEventListener('keydown', handleInitialEnter); // Remove listener to avoid conflict
            bootComplete = false; 
            
            const blinker = document.querySelector('.blink-prompt');
            if (blinker) blinker.remove();

            const loginContainer = document.getElementById('login-prompt');
            if (!loginContainer) return;

            // --- Phase 1: Request User Identity Input ---
            loginContainer.innerHTML = `
                <p>> ATTENTION: UNKNOWN NODE DETECTED ON NET_GRID.</p>
                <div class="terminal-input-line">
                    <span>ENTER USER_AGENT IDENTIFICATION:</span>
                    <input type="text" id="agent-input" class="terminal-input" autocomplete="off" autofocus>
                </div>
            `;

            // Auto-focus the input box for immediate typing
            const agentInput = document.getElementById('agent-input');
            if (agentInput) agentInput.focus();

            // Listen for the second Enter press inside the input field
            agentInput.addEventListener('keydown', (inputEvent) => {
                if (inputEvent.key === 'Enter' && agentInput.value.trim() !== "") {
                    const agentName = agentInput.value.trim().toUpperCase();
                    
                    // Freeze the field and lock interaction
                    agentInput.disabled = true;
                    
                    // --- Phase 2: Brute-Force Password Simulation ---
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
                            
                            // --- Phase 3: Incrementing Loading Bar Module ---
                            initializeLoadingBar(loginContainer);
                        }
                    }, 90);
                }
            });
        }
    });

    // Simulated Loading Progress Bar Function
    function initializeLoadingBar(container) {
        const loadWrapper = document.createElement('div');
        loadWrapper.className = "loading-bar-container";
        loadWrapper.innerHTML = `<p>> INITIALIZING DECK ENVIRONMENT DECRYPTION...</p><p id="progress-text">[░░░░░░░░░░░░░░░░░░░░] 0%</p>`;
        container.appendChild(loadWrapper);

        const progressText = document.getElementById('progress-text');
        let currentProgress = 0;
        const totalBars = 20; // Width of our block bar segment

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

                // Transition viewport fade and run the staggered section reveals
                setTimeout(() => {
                    bootScreen.classList.add('hidden');
                    mainUi.classList.remove('hidden');
                    
                    // Trigger cascading section reveal
                    revealSectionsSequentially();
                }, 800);
            }
        }, 60);
    }

    // New cascading layout animation engine
    function revealSectionsSequentially() {
        const sections = document.querySelectorAll('.staggered-reveal');
        
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('visible');
            }, index * 450); // Each section builds exactly 450ms after the previous one finishes
        });
    }

    // ==========================================
    // 2. CORE OVERCLOCK TOGGLE MECHANISM
    // ==========================================
    const overclockBtn = document.getElementById('overclock-btn');
    const statusText = document.getElementById('sys-status-text');

    overclockBtn.addEventListener('click', () => {
        document.body.classList.toggle('overclocked');
        if (document.body.classList.contains('overclocked')) {
            statusText.textContent = "OVERCLOCKED // UNSTABLE";
            overclockBtn.textContent = "RESTORE_DEFAULT";
        } else {
            statusText.textContent = "NOMINAL";
            overclockBtn.textContent = "CORE_OVERCLOCK";
        }
    });

    // ==========================================
    // 3. ACTUAL RESUME INVENTORY DATA
    // ==========================================
    const itemData = {
        jira: {
            title: "Jira_Cloud.cfg",
            rarity: "LEGENDARY",
            level: "ADVANCED ADMIN",
            desc: "Leads global instance governance. Manages compound cross-functional project boards, workflow transition conditions, permission schemes, and filters for engineering teams."
        },
        linux: {
            title: "Linux_Core.bin (Ubuntu/RHEL)",
            rarity: "EPIC",
            level: "SYSADMIN LEVEL",
            desc: "Proficient administrative kernel foundation. Handles environment access, file permissions configurations, system services control, and standalone server environments."
        },
        automation: {
            title: "Automation.sh (Ansible/Bash)",
            rarity: "EPIC",
            level: "88% SYNC",
            desc: "Constructs custom Bash orchestration scripts and idempotent Ansible configuration playbooks to deploy application servers automatically and eliminate operational drag."
        },
        identity: {
            title: "IAM_Access.key (AD/OKTA)",
            rarity: "RARE",
            level: "ENTERPRISE PRO",
            desc: "Enforces full secure user lifecycles. Administers Active Directory, OKTA, PingID, and RSA tokens to safely govern provisioning, offboarding, and application group mapping."
        },
        cloud: {
            title: "Cloud_Dev.env (AWS/Terraform)",
            rarity: "RARE",
            level: "IN PROGRESS",
            desc: "Currently sharpening modern delivery patterns. Spinning up modular EC2 compute cells, secure S3 spaces, IAM security configurations, and coding baseline Terraform logic."
        },
        infra: {
            title: "Endpoint_Mgmt.sys (SCCM/Citrix)",
            rarity: "COMMON",
            level: "95% COMPLIANT",
            desc: "Managed global enterprise architecture delivery pipelines using tools like SCCM, Citrix hypervisors, InTune profile suites, and ServiceNow SLA monitors."
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
    // 4. MANUAL TRIGGER CLOCK DECRYPTION ENGINE
    // ==========================================
    const experienceDatabase = {
        "role-tideworks": "OPERATION: TIDEWORKS // Leads enterprise Jira Cloud administration blueprints across global engineering segments. Preserves complete user lifecycle security maps across Active Directory nodes and integrated developer tool licenses. Manages automated sprint lifecycle schedules, backlog filters, and deploys SSH logic to decrease manual infrastructure routines.",
        "role-tcs": "OPERATION: TATA CONSULTANCY SERVICES // Dispatched Tier 2 infrastructure core engineering across wide industrial enterprise networks. Controlled secure authentication keys (Active Directory, RSA tokens, PingID, VPN portals) and deployed application layers over corporate pools via SCCM arrays, virtualized Citrix platforms, and InTune profiles.",
        "role-mahindra": "OPERATION: TECH MAHINDRA // Governed ongoing stability matrix across isolated Windows architectures, Citrix sandbox clusters, core Mainframe access links, and Cisco routing networks. Identified critical platform blockages and escalated infrastructure incidents inside ServiceNow grids while producing compliance metrics logs.",
        "role-compucom": "OPERATION: COMPUCOM // Administered unified hardware support layers across multi-architecture nodes (Windows, iOS, Android endpoints). Generated internal knowledge assets and conducted interactive team training blueprints regarding Active Directory operations, Citrix frameworks, OKTA mapping, and SCCM usage."
    };

    const decryptButtons = document.querySelectorAll('.btn-decrypt');

    decryptButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const btn = e.target;
            const targetId = btn.getAttribute('data-target');
            const logContainer = document.getElementById(targetId);
            const fullText = experienceDatabase[targetId];

            if (!logContainer || !fullText) return;

            // Mark button as activated
            btn.textContent = "[ ACCESS GRANTED ]";
            btn.classList.add('decrypted');
            logContainer.classList.remove('encrypted');
            logContainer.innerHTML = "";

            // Scrambler character animation sequence before text displays
            let scrambleCount = 0;
            const characters = "XX//$$##@@0110_?!";
            
            function runScramble() {
                if (scrambleCount < 10) {
                    let temporaryScramble = "";
                    for(let i=0; i<30; i++) {
                        temporaryScramble += characters.charAt(Math.floor(Math.random() * characters.length));
                    }
                    logContainer.textContent = temporaryScramble;
                    scrambleCount++;
                    setTimeout(runScramble, 40);
                } else {
                    // Scramble done! Start typewriter output
                    logContainer.textContent = "";
                    let charIndex = 0;
                    
                    function typeCharacter() {
                        if (charIndex < fullText.length) {
                            logContainer.innerHTML += fullText.charAt(charIndex);
                            charIndex++;
                            setTimeout(typeCharacter, 10); // Swift crisp typewriter speeds
                        }
                    }
                    typeCharacter();
                }
            }
            runScramble();
        });
    });
});