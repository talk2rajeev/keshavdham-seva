export type Locale = "en" | "hi";

export const locales: Locale[] = ["en", "hi"];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  hi: "हिन्दी"
};

export const localePath: Record<Locale, string> = {
  en: "/en/",
  hi: "/hi/"
};

export const translations = {
  en: {
    siteTitle: "Keshavdham Seva and Adhyatam Trust",
    siteDescription:
      "Keshavdham Seva and Adhyatam Trust is a compassionate nonprofit dedicated to homeless support, gaushala care, natural healing, yoga, and education for the underprivileged, working to restore dignity, spiritual well-being, and hope through transparent community service and meaningful social impact.",
    brand: "Keshavdham Seva",
    trustName: "Keshavdham Seva and Adhyatam Trust",
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact"
    },
    common: {
      donate: "Donate",
      donateNow: "Donate Now",
      learnMore: "Learn More",
      more: "View More",
      joinMission: "Join Our Mission",
      language: "Language"
    },
    hero: {
      eyebrow: "Dignified Compassion",
      description:
        "Dedicated to restoring dignity, health, and spiritual peace through the timeless wisdom of ancient traditions and modern compassion."
    },
    stats: {
      livesTouched: "Lives Touched",
      cowsSheltered: "Cows Sheltered",
      sevaProjects: "Seva Projects",
      transparency: "Transparency"
    },
    sections: {
      sacredInitiatives: "Sacred Initiatives",
      compassionInAction: "Compassion in Action",
      supportHomeless: "Support for the Homeless",
      supportHomelessDescription:
        "Providing shelter, warm meals, and a pathway to a dignified life for those in need through community-driven relief programs.",
      testimonialEyebrow: "Community Voices",
      testimonialsTitle: "Stories of Trust and Transformation"
    },
    cards: {
      yogaTitle: "Natural Healing & Yoga",
      yogaBody:
        "Traditional wellness practices and yoga for physical and emotional rejuvenation, helping people reconnect body, mind, and spirit.",
      gaushalaTitle: "Gaushala",
      gaushalaBody:
        "Compassionate care for cows in a protected sanctuary that honors traditional values while promoting everyday animal welfare.",
      educationTitle: "Education to Unprivileged",
      educationBody:
        "Value-based education for children that blends modern learning with spiritual grounding and character formation."
    },
    donate: {
      title: "Be the Change You Seek",
      body:
        "Your contribution, no matter how small, fuels our mission to bring light into the lives of those living in darkness. Every donor receives a detailed impact report.",
      note: "Tax-exempt under Section 80G of the Income Tax Act."
    },
    testimonials: {
      previous: "Previous",
      next: "Next",
      items: [
        {
          name: "Ramesh Sharma",
          age: "42",
          occupation: "Daily Wage Worker",
          comment:
            "Keshavdham Seva helped my family during a difficult season with food, dignity, and genuine care."
        },
        {
          name: "Sunita Devi",
          age: "36",
          occupation: "School Teacher",
          comment:
            "Their education support gave children in our area confidence, discipline, and a brighter path forward."
        },
        {
          name: "Mahesh Verma",
          age: "51",
          occupation: "Local Shopkeeper",
          comment:
            "What stands out most is the transparency. You can see how every effort is rooted in service."
        },
        {
          name: "Kavita Joshi",
          age: "29",
          occupation: "Yoga Volunteer",
          comment:
            "The healing and yoga sessions create a peaceful space where people feel seen, restored, and encouraged."
        },
        {
          name: "Anil Gupta",
          age: "47",
          occupation: "Community Donor",
          comment:
            "Supporting this trust feels meaningful because their work reaches people, animals, and families with compassion."
        }
      ]
    },
    footer: {
      about:
        "A non-profit trust dedicated to selfless service, spiritual nourishment, and the upliftment of the underprivileged.",
      quickLinks: "Quick Links",
      aboutUs: "About Us",
      ourProjects: "Our Projects",
      annualReports: "Annual Reports",
      volunteer: "Volunteer",
      contactUs: "Contact Us",
      copyright: "© 2024 Keshavdham Seva and Adhyatam Trust. All rights reserved."
    }
  },
  hi: {
    siteTitle: "Keshavdham Seva and Adhyatam Trust",
    siteDescription:
      "Keshavdham Seva and Adhyatam Trust is a compassionate nonprofit dedicated to homeless support, gaushala care, natural healing, yoga, and education for the underprivileged, working to restore dignity, spiritual well-being, and hope through transparent community service and meaningful social impact.",
    brand: "केशवधाम सेवा",
    trustName: "केशवधाम सेवा एवं अध्यात्म ट्रस्ट",
    nav: {
      home: "होम",
      services: "सेवाएं",
      about: "परिचय",
      contact: "संपर्क"
    },
    common: {
      donate: "दान करें",
      donateNow: "अभी दान करें",
      learnMore: "और जानें",
      more: "और देखें",
      joinMission: "हमारे मिशन से जुड़ें",
      language: "भाषा"
    },
    hero: {
      eyebrow: "गरिमामय करुणा",
      description:
        "प्राचीन परंपराओं के शाश्वत ज्ञान और आधुनिक करुणा के माध्यम से सम्मान, स्वास्थ्य और आध्यात्मिक शांति को पुनर्स्थापित करने के लिए समर्पित।"
    },
    stats: {
      livesTouched: "लाभान्वित जीवन",
      cowsSheltered: "संरक्षित गौवंश",
      sevaProjects: "सेवा परियोजनाएं",
      transparency: "पारदर्शिता"
    },
    sections: {
      sacredInitiatives: "पवित्र पहल",
      compassionInAction: "कर्म में करुणा",
      supportHomeless: "बेसहारा लोगों को सहायता",
      supportHomelessDescription:
        "सामुदायिक राहत कार्यक्रमों के माध्यम से जरूरतमंदों को आश्रय, गर्म भोजन और एक गरिमापूर्ण जीवन का मार्ग प्रदान करना।",
      testimonialEyebrow: "समुदाय की आवाज़",
      testimonialsTitle: "विश्वास और परिवर्तन की कहानियाँ"
    },
    cards: {
      yogaTitle: "प्राकृतिक चिकित्सा और योग",
      yogaBody:
        "शारीरिक और भावनात्मक कायाकल्प के लिए पारंपरिक कल्याण पद्धतियां और योग, जो लोगों को शरीर, मन और आत्मा से पुनः जुड़ने में मदद करते हैं।",
      gaushalaTitle: "गौशाला",
      gaushalaBody:
        "एक सुरक्षित अभयारण्य में गायों की करुणामय देखभाल, जो रोजमर्रा के पशु कल्याण को बढ़ावा देते हुए पारंपरिक मूल्यों का सम्मान करती है।",
      educationTitle: "वंचितों को शिक्षा",
      educationBody:
        "बच्चों के लिए मूल्य-आधारित शिक्षा जो आधुनिक शिक्षण के साथ आध्यात्मिक आधार और चरित्र निर्माण का मेल कराती है।"
    },
    donate: {
      title: "वह परिवर्तन बनें जो आप देखना चाहते हैं",
      body:
        "आपका योगदान, चाहे कितना भी छोटा क्यों न हो, अंधकार में रहने वालों के जीवन में प्रकाश लाने के हमारे मिशन को शक्ति देता है। प्रत्येक दाता को एक विस्तृत प्रभाव रिपोर्ट (Impact Report) प्राप्त होती है।",
      note: "आयकर अधिनियम की धारा 80G के तहत कर मुक्त।"
    },
    testimonials: {
      previous: "पिछला",
      next: "अगला",
      items: [
        {
          name: "रमेश शर्मा",
          age: "42",
          occupation: "दैनिक वेतन कर्मी",
          comment:
            "केशवधाम सेवा ने कठिन समय में मेरे परिवार को भोजन, सम्मान और सच्ची देखभाल देकर संभाला।"
        },
        {
          name: "सुनीता देवी",
          age: "36",
          occupation: "विद्यालय शिक्षिका",
          comment:
            "इनकी शिक्षा सहायता ने हमारे क्षेत्र के बच्चों में आत्मविश्वास, अनुशासन और बेहतर भविष्य की आशा जगाई।"
        },
        {
          name: "महेश वर्मा",
          age: "51",
          occupation: "स्थानीय दुकानदार",
          comment:
            "सबसे खास बात इनकी पारदर्शिता है। हर प्रयास में सच्ची सेवा का भाव साफ दिखाई देता है।"
        },
        {
          name: "कविता जोशी",
          age: "29",
          occupation: "योग स्वयंसेवक",
          comment:
            "योग और हीलिंग सत्र लोगों को एक शांत स्थान देते हैं जहाँ वे स्वयं को संभला हुआ और प्रेरित महसूस करते हैं।"
        },
        {
          name: "अनिल गुप्ता",
          age: "47",
          occupation: "समुदाय दाता",
          comment:
            "इस ट्रस्ट का समर्थन करना सार्थक लगता है क्योंकि इनकी करुणामयी सेवा लोगों, पशुओं और परिवारों तक पहुँचती है।"
        }
      ]
    },
    footer: {
      about:
        "एक गैर-लाभकारी ट्रस्ट जो निस्वार्थ सेवा, आध्यात्मिक पोषण और वंचितों के उत्थान के लिए समर्पित है।",
      quickLinks: "त्वरित लिंक",
      aboutUs: "हमारे बारे में",
      ourProjects: "हमारी परियोजनाएं",
      annualReports: "वार्षिक रिपोर्ट",
      volunteer: "स्वयंसेवक बनें",
      contactUs: "संपर्क करें",
      copyright: "© 2024 केशवधाम सेवा एवं अध्यात्म ट्रस्ट। सर्वाधिकार सुरक्षित।"
    }
  }
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
