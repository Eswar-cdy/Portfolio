export interface Chapter {
  id: string;
  title: string;
  slug: string;
  description: string;
}

export const chapters: Chapter[] = [
  {
    id: "introduction",
    title: "Introduction: Seeds of Change",
    slug: "introduction",
    description: "The beginning of MicroHarvest and the meeting of three visionaries with complementary expertise."
  },
  {
    id: "chapter1",
    title: "Chapter 1: Germination (2015)",
    slug: "germination",
    description: "The founding of MicroHarvest and the early challenges faced by the three co-founders."
  },
  {
    id: "chapter2",
    title: "Chapter 2: First Shoots (2016)",
    slug: "first-shoots",
    description: "MicroHarvest's initial growth and the development of their unique approach to microgreens cultivation."
  },
  {
    id: "chapter3",
    title: "Chapter 3: Growing Pains (2016-2017)",
    slug: "growing-pains",
    description: "The challenges of scaling operations while maintaining quality and the tensions between the founders."
  },
  {
    id: "chapter4",
    title: "Chapter 4: The Root System (2017)",
    slug: "root-system",
    description: "Building organizational foundations and establishing systems for sustainable growth."
  },
  {
    id: "chapter5",
    title: "Chapter 5: Branching Out (2018)",
    slug: "branching-out",
    description: "Expanding into new markets and product categories while staying true to core values."
  },
  {
    id: "chapter6",
    title: "Chapter 6: The Drought (2018-2019)",
    slug: "drought",
    description: "Navigating financial challenges and strategic recalibration during difficult times."
  },
  {
    id: "chapter7",
    title: "Chapter 7: Cross-Pollination (2019)",
    slug: "cross-pollination",
    description: "Forming strategic partnerships and exchanging ideas across different sectors."
  },
  {
    id: "chapter8",
    title: "Chapter 8: The Harvest (2020)",
    slug: "harvest",
    description: "Adapting to the pandemic and reaping the benefits of previous investments and decisions."
  },
  {
    id: "chapter9",
    title: "Chapter 9: Seasonal Changes (2020-2021)",
    slug: "seasonal-changes",
    description: "Navigating market transformations and personal transitions during unprecedented times."
  },
  {
    id: "chapter10",
    title: "Chapter 10: Full Bloom (2021-2022)",
    slug: "full-bloom",
    description: "Reaching maturity as an organization with scientific validation and healthcare partnerships."
  },
  {
    id: "conclusion",
    title: "Conclusion: Seeds of the Future",
    slug: "conclusion",
    description: "Reflecting on MicroHarvest's journey and its implications for nutrition and food systems."
  }
];
