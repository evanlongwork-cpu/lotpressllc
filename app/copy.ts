export const SITE_TITLE =
  "Lotpress — sampled US large-cap for advisers who keep the account";

export const STANDFIRST =
  "Sampled US large-cap for advisers who keep the account.";

export const COVER = "You still sign the tickets.";

export const LEAD = `Lotpress is construction software for investment advisers who intend to remain adviser of record. It produces a sampled US large-cap book, either around a concentrated holding the client will not sell, or in place of handing a managed large-cap account to an outside manager. Client assets remain at the custodian. Lotpress does not exercise investment discretion, hold client funds or securities, or place orders. It writes an order file and a one-page record. The adviser reviews both, signs, and enters the orders. The first file is built for Charles Schwab.`;

export const CONTACT_EMAIL = "evan@lotpressllc.com";

export const FOOTER =
  "Lotpress. Software. The adviser signs. Assets remain at the custodian. Not an offer of advisory services.";

export const HOW_IT_WORKS_STEPS = [
  "The adviser sends holdings.",
  "An order file and a one-page record come back for review.",
  "The adviser enters the orders at Schwab.",
] as const;

export const CUSTODY_FACTS = [
  "The adviser of record does not change. Lotpress does not take investment discretion.",
  "Client assets remain at the custodian. Lotpress does not hold client funds or securities.",
  "Lotpress does not place orders. It writes an order file and a one-page record; the adviser reviews, signs, and enters the orders. The first file is built for Charles Schwab.",
] as const;
