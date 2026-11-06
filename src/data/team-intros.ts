// Intro videos sent in inspection booking confirmations ("Here's a quick hello
// from the person coming out"). These pages are linked from SMS only: they are
// noindex and kept out of the sitemap (see prerender.js).
//
// Files live in the Shurden's Roofing GHL media library. They are 720x1280
// H.264/AAC MP4s converted from the original iPhone recordings.
const MEDIA = "https://assets.cdn.filesafe.space/QpLtWVK3YfPZ7e1MRBtO/media";

export type TeamIntro = {
  slug: string;
  name: string;
  firstName: string;
  video: string;
  poster: string;
};

export const teamIntros: TeamIntro[] = [
  {
    slug: "garrett",
    name: "Garrett Shurden",
    firstName: "Garrett",
    video: `${MEDIA}/6aed5b0a0c8a41402c0ab997.mp4`,
    poster: `${MEDIA}/6aed5b0a31d623e532e7592c.jpg`,
  },
  {
    slug: "shannon",
    name: "Shannon Blackwell",
    firstName: "Shannon",
    video: `${MEDIA}/6aed5b21fb31f444f2636936.mp4`,
    poster: `${MEDIA}/6aed5b3542ff25478ce7ed1b.jpg`,
  },
];

export const findTeamIntro = (slug: string | undefined) => teamIntros.find((t) => t.slug === slug);
