/* Storage adapter kept separate so a shared API can replace localStorage later. */
function createLocalStorageVisitorCounter(options = {}) {
    const key = options.key || 'wazza-links-visitor-counter';
    const startingCount = Number.isSafeInteger(options.startingCount) ? options.startingCount : 11235;
    const now = options.now || (() => new Date());

    function today() {
        const date = now();
        return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
            .map((part) => String(part).padStart(2, '0'))
            .join('-');
    }

    function read() {
        try {
            const saved = JSON.parse(window.localStorage.getItem(key));
            if (saved && Number.isSafeInteger(saved.count) && saved.count >= startingCount) {
                return saved;
            }
        } catch (error) {
            // Private browsing or disabled storage should not break the page.
        }
        return { count: startingCount, lastVisit: null };
    }

    function recordVisit() {
        const state = read();
        const visitDate = today();
        if (state.lastVisit !== visitDate) {
            state.count += 1;
            state.lastVisit = visitDate;
            try {
                window.localStorage.setItem(key, JSON.stringify(state));
            } catch (error) {
                // The current visit is still displayed if storage is unavailable.
            }
        }
        return state.count;
    }

    return { recordVisit };
}

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('visitorCount');
    if (!display) return;

    const counter = createLocalStorageVisitorCounter({
        key: 'wazza-links-visitor-counter',
        startingCount: 11235
    });
    display.textContent = counter.recordVisit().toLocaleString('en-US');
});
