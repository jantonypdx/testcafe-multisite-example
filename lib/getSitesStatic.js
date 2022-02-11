function getSites() {
  const sites = [
    {
      name: "PHPTravels en_US",
      url: "https://www.phptravels.net/lang-en",
      navLinks: "div.main-menu-content li > a",
      blogLinkText: "Blog",
      offersLinkText: "Offers"
    },
    {
      name: "PHPTravels fr_FR",
      url: "https://www.phptravels.net/lang-fr",
      navLinks: "div.main-menu-content li > a",
      blogLinkText: "Blog",
      offersLinkText: "Offres"
    },
    {
      name: "PHPTravels ru_RU",
      url: "https://www.phptravels.net/lang-ru",
      navLinks: "div.main-menu-content li > a",
      blogLinkText: "Блог",
      offersLinkText: "Предложения"
    },
    {
      name: "PHPTravels ar_SA",
      url: "https://www.phptravels.net/lang-ar",
      navLinks: "div.main-menu-content li > a",
      blogLinkText: "مدونة",
      offersLinkText: "العروض"
    }
  ];

  return sites;
}

export { getSites };
