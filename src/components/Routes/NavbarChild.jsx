import React from "react";

const NavbarChild = () => {
  let nav = [
    {
      label: "Books",
      data: [
        {
          label: "BESTSELLERS",
          child: [
            "B&N Top 100",
            "NY Times Bestsellers",
            "30% Off Bestsellers",
            "All Bestsellers",
          ],
        },
        {
          label: "CUSTOMER FAVORITES",
          child: ["New Releases", "Coming Soon", "Signed Books"],
        },
        {
          label: "WE RECOMMEND",
          child: [
            "The Best Books of the Year 2022",
            "B&N Book of the Year",
            "B&N Discover Prize",
            "B&N Monthly Picks",
            "B&N Bookseller Picks",
            "B&N Book Club",
            "B&N Discover Pick",
          ],
        },
      ],
    },
    {
      label: "Fiction",
      data: [
        {
          label: "BESTSELLERS",
          child: [
            "B&N Top 100",
            "NY Times Bestsellers",
            "30% Off Bestsellers",
            "All Bestsellers",
          ],
        },
        {
          label: "SHOP FICTION",
          child: [
            "Fiction Bestsellers",
            "Fiction New Realease",
            "Fiction Coming Soon",
            "Signed Books",
            "Signed Books",
          ],
        },
        {
          label: "BROWSE",
          child: [
            "Audiobooks",
            "Best Books of the Year",
            "Black Voices",
            "Book Awards",
            "B&N Bookseller Picks",
            "B&N Book Club",
            "B&N Discover Pick",
          ],
        },
      ],
    },
    {
      label: "Nonfiction",
      data: [
        {
          label: "BESTSELLERS",
          child: ["B&N Top 100", "NY Times Bestsellers", "All Bestsellers"],
        },
        {
          label: "SHOP NONFICTION",
          child: [
            "Nonfiction Bestsellers",
            "Nonfiction New Realease",
            "Nonfiction Coming Soon",
            "Signed Books",
            "Up to 30% Off Nonfiction",
          ],
        },
        {
          label: "SUBJECT (A-M)",
          child: [
            "Activity & Game Books",
            "Art, Architecture & Photography",
            "Astrology & Tarot",
            "Bibles & Christian Living",
            "Biography",
            "Business Books",
            "Cookbooks, Food & Wine",
            "Crafts & Hobbies",
            "Current Affairs & Politics",
            "Diet, Health & Fitness",
            "History",
            "Home & Garden",
            "Humor",
            "Music, Film & Performing Arts",
          ],
        },
        {
          label: "SUBJECT (N-W)",
          child: [
            "Nature",
            "New Age & Alternative Beliefs",
            "Philosophy",
            "Psychology",
            "Religion",
            "Role-Playing & Fantasy Games",
            "Science & Technology",
            "Self-Help & Relationships",
            "Social Sciences",
            "Sports",
            "Study Aids & Test Prep",
            "Travel",
            "True Crime",
            "Women's Studies",
          ],
        },
      ],
    },
    {
      label: "eBooks",
      data: [
        {
          label: "BESTSELLERS",
          child: [
            "eBook Top 100",
            "Indie Top 100",
            "NY Times Bestsellers",
            "All Bestsellers",
          ],
        },
        {
          label: "CUSTOMER FAVORITES",
          child: [
            "NOOK Daily Find",
            "New Releases",
            "Coming Soon",
            "eBook Deals",
            "eBook Bundles",
            "B&N Bookseller Picks",
            "Free eBooks",
            "The Jim Henson eBook Collection",
          ],
        },
        {
          label: "FICTION",
          child: [
            "General Fiction",
            "Graphic Novels & Comics",
            "Historical Fiction",
            "Horror",
            "Literary Fiction",
            "Manga",
            "Mystery & Crime",
            "Poetry",
            "Romance",
            "Sci-Fi & Fantasy",
            "Thrillers",
          ],
        },
      ],
    },
    {
      label: "Audiobooks",
      data: [
        {
          label: "BESTSELLERS",
          child: [
            "Audiobook Bestsellers",
            "NY Times Bestsellers",
            "30% Off Audiobooks Bestsellers",
          ],
        },
        {
          label: "CUSTOMER FAVORITES",
          child: [
            "NOOK Daily Find",
            "New Releases",
            "Coming Soon",
            "eBook Deals",
            "eBook Bundles",
            "B&N Bookseller Picks",
            "Free eBooks",
            "The Jim Henson eBook Collection",
          ],
        },
        {
          label: "FICTION",
          child: [
            "General Fiction",
            "Graphic Novels & Comics",
            "Historical Fiction",
            "Horror",
            "Literary Fiction",
            "Manga",
            "Mystery & Crime",
            "Poetry",
            "Romance",
            "Sci-Fi & Fantasy",
            "Thrillers",
          ],
        },
      ],
    },
    {
      label: "Teens & YA",
      data: [
        {
          label: "BESTSELLERS",
          child: [
            "Audiobook Bestsellers",
            "NY Times Bestsellers",
            "30% Off Audiobooks Bestsellers",
          ],
        },
        {
          label: "CUSTOMER FAVORITES",
          child: [
            "NOOK Daily Find",
            "New Releases",
            "Coming Soon",
            "eBook Deals",
            "eBook Bundles",
            "B&N Bookseller Picks",
            "Free eBooks",
            "The Jim Henson eBook Collection",
          ],
        },
        {
          label: "FICTION",
          child: [
            "General Fiction",
            "Graphic Novels & Comics",
            "Historical Fiction",
            "Horror",
            "Literary Fiction",
            "Manga",
            "Mystery & Crime",
            "Poetry",
            "Romance",
            "Sci-Fi & Fantasy",
            "Thrillers",
          ],
        },
      ],
    },
    {
      label: "Kids",
      data: [
        {
          label: "BESTSELLERS",
          child: [
            "Audiobook Bestsellers",
            "NY Times Bestsellers",
            "30% Off Audiobooks Bestsellers",
          ],
        },
        {
          label: "CUSTOMER FAVORITES",
          child: [
            "NOOK Daily Find",
            "New Releases",
            "Coming Soon",
            "eBook Deals",
            "eBook Bundles",
            "B&N Bookseller Picks",
            "Free eBooks",
            "The Jim Henson eBook Collection",
          ],
        },
        {
          label: "FICTION",
          child: [
            "General Fiction",
            "Graphic Novels & Comics",
            "Historical Fiction",
            "Horror",
            "Literary Fiction",
            "Manga",
            "Mystery & Crime",
            "Poetry",
            "Romance",
            "Sci-Fi & Fantasy",
            "Thrillers",
          ],
        },
      ],
    },
    {
      label: "Toy & Games",
      data: [
        {
          label: "BESTSELLERS",
          child: [
            "Audiobook Bestsellers",
            "NY Times Bestsellers",
            "30% Off Audiobooks Bestsellers",
          ],
        },
        {
          label: "CUSTOMER FAVORITES",
          child: [
            "NOOK Daily Find",
            "New Releases",
            "Coming Soon",
            "eBook Deals",
            "eBook Bundles",
            "B&N Bookseller Picks",
            "Free eBooks",
            "The Jim Henson eBook Collection",
          ],
        },
        {
          label: "FICTION",
          child: [
            "General Fiction",
            "Graphic Novels & Comics",
            "Historical Fiction",
            "Horror",
            "Literary Fiction",
            "Manga",
            "Mystery & Crime",
            "Poetry",
            "Romance",
            "Sci-Fi & Fantasy",
            "Thrillers",
          ],
        },
      ],
    },
  ];

  return nav;
};

export default NavbarChild;
