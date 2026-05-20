export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "best-travel-memory-app-for-people-who-collect-places",
    title: "Best Travel Memory App for People Who Collect Places",
    description:
      "A calm guide to choosing a travel memory app for private maps, visited cities, countries, and personal place archives.",
    eyebrow: "Travel memory app",
    intro:
      "The best travel memory app is not always the one with the most features. For people who collect places quietly, the right app should help each city, country, and saved destination feel considered, private, and easy to return to.",
    sections: [
      {
        title: "Look for memory, not noise",
        body:
          "Many travel products are built around planning, booking, recommendations, or public sharing. RICORTU is different in spirit: it treats travel history as a private archive. The important question is not where to go next, but which places have become part of your life."
      },
      {
        title: "Your map should belong to you",
        body:
          "A personal travel map should make visited cities and countries visible without turning them into a performance. It should be calm enough to hold small notes, dates, and future places without pushing you toward a public profile."
      },
      {
        title: "Why RICORTU fits this category",
        body:
          "RICORTU is designed for collecting places: cities visited, countries remembered, and destinations saved for later. It is not a travel guide, navigation app, social network, or GPS tracker. It is a private atlas for people who want their world to slowly light up."
      }
    ]
  },
  {
    slug: "how-to-build-a-personal-travel-map",
    title: "How to Build a Personal Travel Map of the Places You've Been",
    description:
      "Learn how to build a personal travel map that records visited cities, countries, and meaningful travel memories without becoming a public feed.",
    eyebrow: "Personal travel map",
    intro:
      "A personal travel map is a way to see your life through place. It can show where you studied, where you returned, where you changed, and which cities still feel close even years later.",
    sections: [
      {
        title: "Start with the places that matter",
        body:
          "Do not begin by trying to recreate every route. Begin with the cities and countries that still have weight. Add the place, a rough date, and one quiet note. That is enough to make the map personal."
      },
      {
        title: "Separate visited places from future places",
        body:
          "A useful atlas makes a clear distinction between memory and intention. Visited places belong to your archive. Future destinations belong to your wishlist. Keeping them separate helps the map stay honest."
      },
      {
        title: "Keep the map private by default",
        body:
          "The strongest travel memories are often not public. A private travel journal app or personal travel map should let you share only when you choose, and remain valuable even if no one else sees it."
      }
    ]
  },
  {
    slug: "visited-cities-tracker-better-way-to-remember-travels",
    title: "Visited Cities Tracker: A Better Way to Remember Your Travels",
    description:
      "A visited cities tracker can become more meaningful when it works as a private travel archive instead of a checklist or social profile.",
    eyebrow: "Visited cities tracker",
    intro:
      "A visited cities tracker can be more than a checklist. Used well, it becomes a private record of movement, memory, and the places that quietly shaped your life.",
    sections: [
      {
        title: "Track cities as memories, not trophies",
        body:
          "Counting visited cities can be satisfying, but the count is not the whole story. A better tracker leaves room for why the city mattered: a season abroad, a first trip alone, a return, or a street you still remember."
      },
      {
        title: "Connect cities to countries and time",
        body:
          "A strong travel archive connects each city to its country, date, and personal context. Over time, this turns scattered trips into a personal atlas rather than a loose list."
      },
      {
        title: "Choose privacy over performance",
        body:
          "RICORTU is built around the idea that travel history does not need to become a feed. Your visited cities tracker can stay private, calm, and useful as a record for you."
      }
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
