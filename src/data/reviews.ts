export interface Review {
  quote: string;
  name: string;
}

// Real customer reviews. Shared between the homepage marquee and the
// per-city pages so the same genuine testimonials appear site-wide.
export const reviews: Review[] = [
  {
    quote:
      "Shurden did a seamless job from start to finish when I was informed there was hail damage to my roof while doing some remodeling. They worked quickly with my insurance company and contractor to get a quote, schedule their crew, and start and finish the job in a timely way. They are very efficient and also cleaned the site after finishing as if they were never there.",
    name: "Natalie Morgan",
  },
  {
    quote:
      "Really pleased with their response to my call for re-roofing my three buildings. It was less than a week and a half after I called. Their crew was on site with the required quoted materials and their work crew was really efficient. They cleaned up very well too.",
    name: "Scotty Allen",
  },
  {
    quote:
      "Incredible service! Good, hardworking folks that got the job done quickly and efficiently. The day they came to start on our roof, we had to go out of town for a family funeral. We left before they arrived and returned at the end of the day and they were done. The roof looks amazing and it's like no one was ever here. Exceptional and unmatched service. Highly recommend!",
    name: "Brittany McCool",
  },
  {
    quote:
      "I have a beautiful new roof, thanks to Josh Shurden. He did all the things he said, called to keep me posted, and was always there when he said he would be. He worked in a very professional manner and did a very good job. It was a pleasure to have him for this project.",
    name: 'Alice "Cotton" Swords, West Point, MS',
  },
  {
    quote:
      "Shurden's Roofing does great work and is there when he says he will be. Josh is a Christian man and keeps his word.",
    name: "Shelia R.",
  },
];
