export const CONTACT = {
  email: "travis@aurapathai.com",
  phone: "(734) 476-3021",
  linkedin: "https://linkedin.com/in/travcjohnson",
  whatsapp: "https://chat.whatsapp.com/DBipvDRd2oNIcdF6m5CnzK",
  luma: "https://lu.ma/claudeoc",
  lumaFirstEvent: "https://luma.com/kjwrri63",
} as const;

/**
 * Shared accent color mappings used across components.
 * Centralizes the mapping between accent names and their Tailwind classes.
 */
export const ACCENT_COLORS: Record<
  string,
  { dot: string; border: string; text: string }
> = {
  clay: { dot: "bg-clay", border: "border-clay/30", text: "text-clay" },
  sky: { dot: "bg-sky", border: "border-sky/30", text: "text-sky" },
  olive: { dot: "bg-olive", border: "border-olive/30", text: "text-olive" },
};
