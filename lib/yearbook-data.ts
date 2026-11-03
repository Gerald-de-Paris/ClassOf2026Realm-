// Edit this file to add your real class members, memories and milestones.
// Put original photographs in public/images/ and reference the filename below.
// Use simple filenames without spaces, e.g. class-portrait-01.jpg.

export type Person = {
  id: string;
  name: string;
  tagline: string;
  bio: string;
  image: string;
};

export const people: Person[] = [
  { id: "student-one", name: "Student One", tagline: "Curious mind · Big dreams", bio: "A sample profile. Replace this with a short biography, interests, favourite Seeta memory or a message for the class.", image: "/images/student-01.jpg" },
  { id: "student-two", name: "Student Two", tagline: "Creative spirit · Kind heart", bio: "A sample profile. Add a few personal details that the student is happy to share in the yearbook.", image: "/images/student-02.jpg" },
  { id: "student-three", name: "Student Three", tagline: "Team player · Future leader", bio: "A sample profile. Keep the bio warm, positive and concise, and make sure the person has approved the details.", image: "/images/student-03.jpg" },
  { id: "student-four", name: "Student Four", tagline: "Always asking why", bio: "A sample profile. Replace with approved details and the student's original photograph.", image: "/images/student-04.jpg" },
  { id: "student-five", name: "Student Five", tagline: "Making every moment count", bio: "A sample profile. Add a favourite memory or a note about what comes next after Seeta.", image: "/images/student-05.jpg" },
  { id: "student-six", name: "Student Six", tagline: "Ready for the next chapter", bio: "A sample profile. Replace with the student's own details and full-resolution photo.", image: "/images/student-06.jpg" }
];

export type Memory = { title: string; category: string; caption: string; image: string };

export const memories: Memory[] = [
  { title: "The days between classes", category: "Everyday moments", caption: "The ordinary moments that somehow became our favourites.", image: "/images/memory-01.jpg" },
  { title: "Our people, our place", category: "Friendship", caption: "A reminder that school was always about more than lessons.", image: "/images/memory-02.jpg" },
  { title: "The big day", category: "Celebrations", caption: "A milestone worth remembering together.", image: "/images/memory-03.jpg" },
  { title: "Learning together", category: "School life", caption: "The challenges and small wins that helped us grow.", image: "/images/memory-04.jpg" },
  { title: "The team spirit", category: "Activities", caption: "Showing up, cheering each other on, and being part of something.", image: "/images/memory-05.jpg" },
  { title: "Before we say goodbye", category: "Farewell", caption: "One last collection of moments from our Seeta chapter.", image: "/images/memory-06.jpg" }
];

export const milestones = [
  { year: "YEAR 1", title: "The beginning", description: "New faces, unfamiliar classrooms, and the first friendships that started to feel like home." },
  { year: "YEAR 2", title: "Finding our feet", description: "We discovered our strengths, found our people, and started building traditions of our own." },
  { year: "YEAR 3", title: "Growing together", description: "More responsibilities, bigger challenges, and memories that brought the class closer." },
  { year: "FINAL", title: "The final bell", description: "A proud ending to our Seeta years — and the beginning of university, new goals and new stories." }
];
