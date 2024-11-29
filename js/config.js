let respecConfig = {

  // Config parameters
  useLogo: true,
  useLabel: true,
  license: "cc0",
  specStatus: "DEF",
  specType: "IM",
  pubDomain: "ronl",

  // shortName = Repository name as is
  shortName: "Wetsanalyse",
  publishDate: "2024-11-29",
  publishVersion: "1.0.8",

  previousPublishVersion: "1.0.7",
  previousPublishDate: "2024-10-07",
  previousMaturity: "DEF",
  title: "Wetsanalyse met het juridisch analyseschema",
  subtitle:
    "Voor een werkbare uitvoering van wetgeving met ICT",

  // Content
  content: {
    "H1-Inleiding": "informative",
    "H2-JAS": "",
    "H3-Kader": ""
  },
  editors: [
    {
    name: "Mariette Lokin",
    mailto: "mariette@hooghiemstra-en-partners.nl",
    company: "Hooghiemstra & Partners",
    companyURL: "https://hooghiemstra-en-partners.nl",
    },
    {
    name: "Steven Gort",
    mailto: "steven.gort@ictu.nl",
    company: "ICTU",
    companyURL: "http://www.ictu.nl",
  }],
  authors: [
    {
      name: "Anouschka Ausems",
      url: "https://belastingdienst.nl",
    },
    {
      name: "John Bulles",
      url: "https://pna-group.com/",
    },
    {
      name: "Mariette Lokin",
      url: "https://hooghiemstra-en-partners.nl",
    }
  ],
  github: "https://github.com/MinBZK/wetsanalyse/",

  // References & footnotes
  localBiblio: {
    HOHFELD_1: {
      title: "Some Fundamental Conceptions as Applied in Judicial Reasoning",
      href: "https://openyls.law.yale.edu/bitstream/handle/20.500.13051/11079/05_23YaleLJ16_1913_1914_.pdf?sequence=2",
      publisher: "Yale Law Journal (23) 1913, afl. 1, p. 16-59",
      },
      HOHFELD_2: {
        title: "Fundamental Legal Conceptions as Applied in Judicial Reasoning",
        href: "https://openyls.law.yale.edu/bitstream/handle/20.500.13051/3864/Fundamental_Legal_Conceptions_as_Applied_in_Judicial_Reasoning.pdf?sequence=2",
        publisher: "Yale Law Journal (26) 1917, afl. 8, p. 710-770.",
      },
      BLKAMER: {
        title: "Een kapstok voor herleidbare wet- en regelgeving voor dienstverlening",
        href: "https://wendbarewetsuitvoering.pleio.nl/attachment/1dddbb91-8f6b-4bca-9b4f-5e3d4a19efef",
        publisher: "Harrie van Houtum (Business KnowHow Services) et al",
      },
      NLSBB: {
        href: "https://docs.geostandaarden.nl/nl-sbb/nl-sbb/",
        title: "NL-SBB - Standaard voor het beschrijven van begrippen",
        authors: [
          "Geonovum Standaard - versie ter vaststelling.",
        ],
        date: "16 april 2024",
      },
    },

  // Create PDF and link to file in header (optional):
  alternateFormats: [
    {
        label: "pdf",
        uri: "https://regels.overheid.nl/standaarden/wetsanalyse/pdf",
    },
  ],
};