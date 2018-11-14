function getSites() {
  const sites = [
    {
      name: "PHPTravels en_US",
      url: "https://www.phptravels.net/en",
      navLinks: "li.go-right > a",
      blogLinkText: "BLOG",
      offersLinkText: "OFFERS"
    },
    {
      name: "PHPTravels fr_FR",
      url: "https://www.phptravels.net/fr",
      navLinks: "li.go-right > a",
      blogLinkText: "BLOG",
      offersLinkText: "DES OFFRES"
    },
    {
      name: "PHPTravels ru_RU",
      url: "https://www.phptravels.net/ru",
      navLinks: "li.go-right > a",
      blogLinkText: "БЛОГ",
      offersLinkText: "OFFERS"
    },
    {
      name: "PHPTravels ar_SA",
      url: "https://www.phptravels.net/ar",
      navLinks: "li.go-right > a",
      blogLinkText: "مقالات",
      offersLinkText: "عروض"
    }
  ];

  return sites;
}

export { getSites };
