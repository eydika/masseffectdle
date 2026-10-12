// ============================================================
// 1. DAILY PUZZLE
// ============================================================

function getTodayKey() {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, "0");
    const day = String(now.getUTCDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function formatDate(date) {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function getDailyCharacter(dateKey) {
    let hash = 0;

    for (const char of dateKey) {
        hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
    }

    return characters[hash % characters.length];
}

const todayKey = getTodayKey();

const requestedDateKey =
    new URLSearchParams(window.location.search).get("date");

const activeDateKey =
    requestedDateKey &&
    /^\d{4}-\d{2}-\d{2}$/.test(requestedDateKey) &&
    requestedDateKey < todayKey
        ? requestedDateKey
        : todayKey;

const secretCharacter = getDailyCharacter(activeDateKey);


// ============================================================
// 2. DOM ELEMENTS
// ============================================================

// Main game
const input = document.getElementById("guessInput");
const container = document.getElementById("guessesContainer");
const dropdown = document.getElementById("characterDropdown");
const guessCounter = document.getElementById("guessCounter");
const resultsTable = document.getElementById("resultsTable");
const statusPanels = document.querySelector(".status-panels");

// Hints
const debutHint = document.getElementById("debutHint");
const letterHint = document.getElementById("letterHint");

// Victory panel
const victoryPanel = document.getElementById("victoryPanel");
const victoryName = document.getElementById("victoryName");
const victoryMessage = document.getElementById("victoryMessage");
const shareResultButton = document.getElementById("shareResultButton");
const playAgainButton = document.getElementById("playAgainButton");

// Modal elements
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const closeModalButton = document.getElementById("closeModalButton");

// Modal navigation
const statisticsButton = document.getElementById("statisticsButton");
const readMeButton = document.getElementById("readMeButton");
const howToPlayButton = document.getElementById("howToPlayButton");
const archiveButton = document.getElementById("archiveButton");

// Modal content
const statisticsContent = document.getElementById("statisticsContent");
const readMeContent = document.getElementById("readMeContent");
const howToPlayContent = document.getElementById("howToPlayContent");
const archiveContent = document.getElementById("archiveContent");

// Statistics display
const gamesPlayedDisplay = document.getElementById("gamesPlayed");
const winPercentageDisplay = document.getElementById("winPercentage");
const currentStreakDisplay = document.getElementById("currentStreak");
const bestScoreDisplay = document.getElementById("bestScore");
const distributionRows = document.getElementById("distributionRows");
document.getElementById("characterCount").textContent = characters.length;

// Archive
const archiveList = document.getElementById("archiveList");


// ============================================================
// 3. GAME STATE
// ============================================================

let totalGuesses = 0;
let highlightedIndex = -1;

const guessedCharacters = new Set();

guessCounter.textContent =
    `${totalGuesses} guesses · ${characters.length} characters in the database`;


// ============================================================
// 4. STATISTICS AND LOCAL STORAGE
// ============================================================

const STATS_KEY = "massEffectdleStats";

function loadStats() {
    const defaults = {
        gamesPlayed: 0,
        wins: 0,
        bestScore: null,
        guessDistribution: [0, 0, 0, 0, 0, 0, 0],
        winDates: [],
        completedByDate: {}
    };

    try {
        const saved = JSON.parse(localStorage.getItem(STATS_KEY));

        if (!saved || typeof saved !== "object") {
            return defaults;
        }

        return {
            ...defaults,
            ...saved,

            guessDistribution:
                Array.isArray(saved.guessDistribution) &&
                saved.guessDistribution.length === 7
                    ? saved.guessDistribution
                    : defaults.guessDistribution,

            winDates: Array.isArray(saved.winDates)
                ? saved.winDates
                : [],

            completedByDate:
                saved.completedByDate &&
                typeof saved.completedByDate === "object"
                    ? saved.completedByDate
                    : {}
        };
    } catch {
        return defaults;
    }
}

let stats = loadStats();

function saveStats() {
    try {
        localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    } catch (error) {
        console.warn(
            "Could not save Mass Effectdle statistics.",
            error
        );
    }
}

function recordWin(guesses, dateKey = activeDateKey) {
    // Never count the same puzzle twice.
    if (stats.completedByDate[dateKey] !== undefined) {
        return;
    }

    stats.gamesPlayed++;
    stats.wins++;

    stats.bestScore = stats.bestScore === null
        ? guesses
        : Math.min(stats.bestScore, guesses);

    const bucket = Math.min(guesses, 7) - 1;
    stats.guessDistribution[bucket]++;

    // Only today's puzzle affects the daily streak.
    if (dateKey === todayKey && !stats.winDates.includes(todayKey)) {
        stats.winDates.push(todayKey);
    }

    stats.completedByDate[dateKey] = guesses;

    saveStats();
}

function getCurrentStreak() {
    const dates = new Set(stats.winDates);
    const cursor = new Date(`${todayKey}T00:00:00Z`);

    // If today's puzzle isn't solved, yesterday may still count.
    if (!dates.has(todayKey)) {
        cursor.setUTCDate(cursor.getUTCDate() - 1);
    }

    let streak = 0;

    while (dates.has(formatDate(cursor))) {
        streak++;
        cursor.setUTCDate(cursor.getUTCDate() - 1);
    }

    return streak;
}

function renderStatistics() {
    gamesPlayedDisplay.textContent = stats.gamesPlayed;

    const winRate = stats.gamesPlayed === 0
        ? 0
        : Math.round((stats.wins / stats.gamesPlayed) * 100);

    winPercentageDisplay.textContent = winRate;
    currentStreakDisplay.textContent = getCurrentStreak();
    bestScoreDisplay.textContent = stats.bestScore ?? "—";

    distributionRows.innerHTML = "";

    const currentResult = stats.completedByDate[todayKey];
    const highestCount = Math.max(1, ...stats.guessDistribution);

    stats.guessDistribution.forEach((count, index) => {
        const label = index === 6 ? ">" : String(index + 1);

        const row = document.createElement("div");
        row.className = "distribution-row";

        // Guess number
        const number = document.createElement("span");
        number.className = "distribution-label";
        number.textContent = label;

        // Distribution bar
        const bar = document.createElement("div");
        bar.className = "distribution-bar";

        if (
            currentResult !== undefined &&
            Math.min(currentResult, 7) - 1 === index
        ) {
            bar.classList.add("today");
        }

        const width = count === 0
            ? 0
            : Math.max(26, (count / highestCount) * 100);

        bar.style.width = `${width}%`;

        // Number of times this score occurred
        const countLabel = document.createElement("span");
        countLabel.className = "distribution-count";
        countLabel.textContent = count;

        row.append(number, bar, countLabel);
        distributionRows.appendChild(row);
    });
}


// ============================================================
// 5. MODAL WINDOWS
// ============================================================

function openModal(title, content) {
    modalTitle.textContent = title;

    // Hide every modal section before opening the selected one.
    statisticsContent.hidden = true;
    readMeContent.hidden = true;
    howToPlayContent.hidden = true;
    archiveContent.hidden = true;

    content.hidden = false;
    modalOverlay.hidden = false;

    // Highlight the active navigation button.
    statisticsButton.classList.toggle(
        "active",
        content === statisticsContent
    );

    readMeButton.classList.toggle(
        "active",
        content === readMeContent
    );

    howToPlayButton.classList.toggle(
        "active",
        content === howToPlayContent
    );

    archiveButton.classList.toggle(
        "active",
        content === archiveContent
    );

    if (content === statisticsContent) {
        renderStatistics();
    }

    closeModalButton.focus();
}

function closeModal() {
    modalOverlay.hidden = true;

    statisticsButton.classList.remove("active");
    readMeButton.classList.remove("active");
    howToPlayButton.classList.remove("active");
    archiveButton.classList.remove("active");
}

// Open each modal section.
statisticsButton.addEventListener("click", () => {
    openModal("STATISTICS", statisticsContent);
});

readMeButton.addEventListener("click", () => {
    openModal("READ ME", readMeContent);
});

howToPlayButton.addEventListener("click", () => {
    openModal("HOW TO PLAY", howToPlayContent);
});

archiveButton.addEventListener("click", () => {
    openModal("GAME ARCHIVE", archiveContent);
    renderArchive();
});

// Close using the close button.
closeModalButton.addEventListener("click", closeModal);

// Close by clicking the dark background.
modalOverlay.addEventListener("click", event => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

// Close using Escape.
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modalOverlay.hidden) {
        closeModal();
    }
});


// ============================================================
// 6. VICTORY SCREEN
// ============================================================

function showVictory() {
    recordWin(totalGuesses, activeDateKey);
    renderStatistics();

    victoryName.textContent = secretCharacter.name;

    victoryMessage.textContent =
        `Solved in ${totalGuesses} guess${totalGuesses === 1 ? "" : "es"}.`;

    victoryPanel.hidden = false;
    statusPanels.classList.add("hidden");

    input.closest(".input-section").hidden = true;
    guessCounter.hidden = true;
    input.disabled = true;

    // Share the result.
    shareResultButton.onclick = async () => {
        const result =
            `MASS EFFECTDLE\n` +
            `Solved in ${totalGuesses} guess${totalGuesses === 1 ? "" : "es"}!\n` +
            `Character: ${secretCharacter.name}\n`;

        try {
            await navigator.clipboard.writeText(result);

            shareResultButton.textContent = "RESULT COPIED!";

            setTimeout(() => {
                shareResultButton.textContent = "SHARE RESULT";
            }, 2000);
        } catch (error) {
            // Fallback for browsers that block clipboard access.
            window.prompt("Copy your result:", result);
        }
    };

    // Return to today's puzzle or open the archive.
    playAgainButton.textContent = "PLAY PREVIOUS DAYS";

    playAgainButton.onclick = () => {
        openModal("GAME ARCHIVE", archiveContent);
        renderArchive();
    };

    victoryPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// ============================================================
// 7. GUESS COMPARISONS
// ============================================================

function compareValue(guess, answer) {
    return guess === answer ? "correct" : "wrong";
}

function compareNumber(guess, answer, tolerance) {
    if (guess === answer) {
        return "correct";
    }

    if (Math.abs(guess - answer) <= tolerance) {
        return "close";
    }

    return "wrong";
}

function compareAffiliations(guess, answer) {
    if (guess === answer) {
        return "correct";
    }

    const guessedAffiliations = guess
        .split(",")
        .map(affiliation => affiliation.trim().toLowerCase());

    const answerAffiliations = answer
        .split(",")
        .map(affiliation => affiliation.trim().toLowerCase());

    const sharesAffiliation = guessedAffiliations.some(
        affiliation => answerAffiliations.includes(affiliation)
    );

    return sharesAffiliation ? "close" : "wrong";
}

function createCell(text, status) {
    const cell = document.createElement("div");
    cell.className = `cell ${status}`;
    cell.innerText = text;

    return cell;
}


// ============================================================
// 8. SUBMITTING GUESSES
// ============================================================

function submitGuess() {
    const userGuessText = input.value.trim().toLowerCase();

    const guessedChar = characters.find(
        character => character.name.toLowerCase() === userGuessText
    );

    // Ignore empty or invalid guesses.
    if (!guessedChar) {
        return;
    }

    // Prevent duplicate guesses.
    const alreadyGuessed = [...container.children].some(
        row => row.dataset.character === guessedChar.name
    );

    if (alreadyGuessed) {
        input.value = "";
        return;
    }

    totalGuesses++;

    resultsTable.classList.remove("no-guesses");

    // Reveal the debut title after the second guess.
    if (totalGuesses >= 2) {
        debutHint.textContent = secretCharacter.debutTitle;
        debutHint.classList.add("hint-revealed");
        debutHint.closest(".status-panel").classList.add("hint-revealed");
    }

    // Reveal the first letter after the fifth guess.
    if (totalGuesses >= 5) {
        letterHint.textContent =
            secretCharacter.name.charAt(0).toUpperCase();

        letterHint.classList.add("hint-revealed");
        letterHint.closest(".status-panel").classList.add("hint-revealed");
    }

    guessCounter.textContent =
        `${totalGuesses} guess${totalGuesses === 1 ? "" : "es"} · ` +
        `${characters.length} characters in the database`;

    const newRow = document.createElement("div");
    newRow.className = "row";
    newRow.dataset.character = guessedChar.name;

    // Name
    newRow.appendChild(
        createCell(
            guessedChar.name,
            compareValue(guessedChar.name, secretCharacter.name)
        )
    );

    // Gender
    newRow.appendChild(
        createCell(
            guessedChar.gender,
            compareValue(guessedChar.gender, secretCharacter.gender)
        )
    );

    // Race
    newRow.appendChild(
        createCell(
            guessedChar.race,
            compareValue(guessedChar.race, secretCharacter.race)
        )
    );

    // Affiliation
    newRow.appendChild(
        createCell(
            guessedChar.affiliation,
            compareAffiliations(
                guessedChar.affiliation,
                secretCharacter.affiliation
            )
        )
    );

    // Debut year, including directional hint.
    let yearHint = guessedChar.year;

    if (guessedChar.year < secretCharacter.year) {
        yearHint += " ▲";
    } else if (guessedChar.year > secretCharacter.year) {
        yearHint += " ▼";
    }

    newRow.appendChild(
        createCell(
            yearHint,
            compareNumber(guessedChar.year, secretCharacter.year, 3)
        )
    );

    // Appearance count, including directional hint.
    let gameHint = guessedChar.appearances;

    if (guessedChar.appearances < secretCharacter.appearances) {
        gameHint += " ▲";
    } else if (guessedChar.appearances > secretCharacter.appearances) {
        gameHint += " ▼";
    }

    newRow.appendChild(
        createCell(
            gameHint,
            compareNumber(
                guessedChar.appearances,
                secretCharacter.appearances,
                1
            )
        )
    );

    // Newest guesses appear first.
    container.insertBefore(newRow, container.firstChild);

    guessedCharacters.add(guessedChar.name);

    // Reset the input and autocomplete dropdown.
    input.value = "";
    dropdown.innerHTML = "";
    highlightedIndex = -1;

    // Check for victory.
    if (guessedChar.name === secretCharacter.name) {
        showVictory();
    }
}


// ============================================================
// 9. AUTOCOMPLETE DROPDOWN
// ============================================================

function updateDropdown() {
    const query = input.value.trim().toLowerCase();

    dropdown.innerHTML = "";
    highlightedIndex = -1;

    if (!query) {
        return;
    }

    const matches = characters.filter(character =>
        character.name.toLowerCase().includes(query) &&
        !guessedCharacters.has(character.name)
    ).sort((a, b) => a.name.localeCompare(b.name));

    matches.forEach(character => {
        const option = document.createElement("div");
        option.className = "character-option";
        option.textContent = character.name;

        // Select and submit a character by clicking its name.
        option.addEventListener("mousedown", event => {
            event.preventDefault();

            input.value = character.name;
            dropdown.innerHTML = "";

            submitGuess();
        });

        dropdown.appendChild(option);
    });
}

function highlightOption(index) {
    const options = dropdown.querySelectorAll(".character-option");

    options.forEach(option => {
        option.classList.remove("highlighted");
    });

    if (options.length === 0) {
        highlightedIndex = -1;
        return;
    }

    highlightedIndex = (index + options.length) % options.length;

    options[highlightedIndex].classList.add("highlighted");

    options[highlightedIndex].scrollIntoView({
        block: "nearest"
    });
}

// Update suggestions while typing.
input.addEventListener("input", updateDropdown);

// Keyboard controls for the dropdown.
input.addEventListener("keydown", event => {
    const options = dropdown.querySelectorAll(".character-option");

    if (event.key === "ArrowDown" && options.length) {
        event.preventDefault();
        highlightOption(highlightedIndex + 1);
    } else if (event.key === "ArrowUp" && options.length) {
        event.preventDefault();

        highlightOption(
            highlightedIndex <= 0
                ? options.length - 1
                : highlightedIndex - 1
        );
    } else if (event.key === "Enter") {
        event.preventDefault();

        if (highlightedIndex >= 0 && options[highlightedIndex]) {
            input.value = options[highlightedIndex].textContent;
        }

        submitGuess();
        dropdown.innerHTML = "";
    } else if (event.key === "Escape") {
        dropdown.innerHTML = "";
        highlightedIndex = -1;
    }
});

// Close suggestions when clicking outside the input section.
document.addEventListener("click", event => {
    if (!event.target.closest(".input-section")) {
        dropdown.innerHTML = "";
    }
});


// ============================================================
// 10. DAILY PUZZLE ARCHIVE
// ============================================================

function renderArchive() {
    archiveList.innerHTML = "";

    // Show the previous 30 puzzles, newest first.
    const cursor = new Date(`${todayKey}T00:00:00Z`);

    for (let i = 1; i <= 30; i++) {
        cursor.setUTCDate(cursor.getUTCDate() - 1);

        const dateKey = formatDate(cursor);
        const completed =
            stats.completedByDate[dateKey] !== undefined;

        const entry = document.createElement("button");
        entry.className = "archive-entry";
        entry.disabled = completed;

        // Puzzle date
        const dateLabel = document.createElement("span");

        dateLabel.textContent = new Date(
            `${dateKey}T00:00:00Z`
        ).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            timeZone: "UTC"
        });

        // Puzzle status
        const statusLabel = document.createElement("span");
        statusLabel.className = "archive-status";
        statusLabel.textContent = completed ? "COMPLETED" : "PLAY";

        entry.append(dateLabel, statusLabel);

        // Completed puzzles cannot be replayed.
        if (!completed) {
            entry.addEventListener("click", () => {
                window.location.search = `?date=${dateKey}`;
            });
        }

        archiveList.appendChild(entry);
    }
}


// ============================================================
// 11. RESTORE A COMPLETED PUZZLE
// ============================================================

// Restore the result if this puzzle was already completed.
const previousResult = stats.completedByDate[activeDateKey];

if (previousResult !== undefined) {
    totalGuesses = previousResult;
    showVictory();
}