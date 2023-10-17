const posts = [
  {
    src: "https://picsum.photos/seed/2/320/200",
    date: new Date("2023-10-02:00:00.000Z"), // YYYY-MM-DDTHH:mm:ss.sssZ is the ISO 8601 format
    title: "How to design a usable landing page",
    brief:
      "This article provides valuable insights and tips on creating an engaging and effective landing page that keeps visitors hooked and encourages them to take desired actions.",
    link: "https://www.google.com/search?q=landing+page",
    tags: ["Design", "Coding", "HTML"],
  },
  {
    src: "https://picsum.photos/seed/3/320/200",
    date: new Date("2023-10-05:00:00.000Z"),
    title: "The Art of Color Theory in Web Design",
    brief:
      "Learn how understanding color theory can significantly impact the visual appeal and user experience of your web designs. Discover tips for selecting and combining colors effectively.",
    link: "https://www.google.com/search?q=color+theory",
    tags: ["Design", "Web Development", "Color Theory"],
  },
  {
    src: "https://picsum.photos/seed/4/320/200",
    date: new Date("2023-10-10:00:00.000Z"),
    title: "Optimizing Website Performance for Speed",
    brief:
      "Explore techniques and strategies to enhance your website's performance, ensuring faster loading times and a smoother user experience. Speed matters in today's digital landscape.",
    link: "https://www.google.com/search?q=web+performance",
    tags: ["Web Development", "Performance Optimization"],
  },
  {
    src: "https://picsum.photos/seed/5/320/200",
    date: new Date("2023-10-15:00:00.000Z"),
    title: "Creating Engaging User Interfaces: Best Practices",
    brief:
      "Delve into the principles and best practices of designing captivating user interfaces that keep users engaged and enhance overall usability. Discover key design elements and strategies.",
    link: "https://www.google.com/search?q=ui+design",
    tags: ["Design", "User Interface", "UI/UX"],
  },
  {
    src: "https://picsum.photos/seed/6/320/200",
    date: new Date("2023-10-20:00:00.000Z"),
    title: "Mastering Responsive Web Design",
    brief:
      "Uncover the essential techniques and tools needed to design websites that look great and function seamlessly across various devices and screen sizes. Responsive design is crucial in today's multi-device world.",
    link: "https://www.google.com/search?q=responsive+web+design",
    tags: ["Design", "Web Development", "Responsive Design"],
  },
];

const section = document.querySelector("#posts");
const lists = document.createElement("div");
for (const post of posts) {
  const list = document.createElement("div");
  list.classList.add("list");
  const img = document.createElement("img");
  img.src = post.src;
  const date = document.createElement("div");
  date.classList.add("date");
  date.textContent = post.date.toDateString();
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = post.title;
  const brief = document.createElement("div");
  brief.classList.add("brief");
  brief.textContent = post.brief;
  const link = document.createElement("a");
  link.classList.add("link");
  link.href = post.link;
  link.textContent = "Read More";
  const tags = document.createElement("div");
  tags.classList.add("tags");
  for (const tag of post.tags) {
    const span = document.createElement("span");
    span.textContent = tag + " ";
    tags.appendChild(span);
  }
  list.appendChild(img);
  list.appendChild(date);
  list.appendChild(title);
  list.appendChild(brief);
  list.appendChild(link);
  list.appendChild(tags);
  lists.appendChild(list);
}
section.appendChild(lists);
