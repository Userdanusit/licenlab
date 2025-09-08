// FB profile id from your message
export const FB_PROFILE_URL = "https://www.facebook.com/profile.php?id=61579837796070";

// On button click: copy message then open FB profile in new tab
export async function chatOnFacebook(message: string) {
  try {
    await navigator.clipboard.writeText(message + "\n(คัดลอกให้อัตโนมัติ วางในแชทได้เลย)");
  } catch {}
  window.open(FB_PROFILE_URL, "_blank", "noopener,noreferrer");
}
