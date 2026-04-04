const FORM_ENDPOINT = "https://formsubmit.co/ajax/travis@aurapathai.com";

export async function captureEmail(email: string, source: string) {
  // Save to localStorage as backup
  try {
    const emails = JSON.parse(localStorage.getItem("claudeoc_emails") || "[]");
    emails.push({ email, source, date: new Date().toISOString() });
    localStorage.setItem("claudeoc_emails", JSON.stringify(emails));
  } catch {
    // silent
  }

  // Send to email via formsubmit.co (free, no signup)
  try {
    await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        source,
        _subject: `ClaudeOC: New ${source} signup — ${email}`,
        _template: "table",
      }),
    });
  } catch {
    // silent — localStorage backup already captured
  }
}
