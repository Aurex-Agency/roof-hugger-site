export function captureReferralCode() {
  try {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref && ref.trim() !== "") {
      sessionStorage.setItem("referral_code", ref.trim());
    }
  } catch (e) {
    // sessionStorage unavailable — ignore
  }
}

export function getReferralCode(): string {
  try {
    if (typeof window === "undefined") return "";
    return sessionStorage.getItem("referral_code") || "";
  } catch (e) {
    return "";
  }
}
