/**
 * Build a WhatsApp click-to-chat link from a stored contact number.
 *
 * Profile numbers are captured with a country code (e.g. "+91 9876543210",
 * enforced in the profile form), but wa.me wants digits only ("919876543210").
 * Returns null when there aren't enough digits to be a usable number, so
 * callers can simply omit the link rather than render a broken one.
 */
export function whatsAppLink(contactNo?: string | null): string | null {
  if (!contactNo) return null;
  const digits = contactNo.replace(/\D/g, "");
  return digits.length >= 10 ? `https://wa.me/${digits}` : null;
}
