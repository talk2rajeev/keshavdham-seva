export type Locale = "en" | "hi";
export type PageKey = "home" | "about" | "services" | "contact";

export const locales: Locale[] = ["en", "hi"];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  hi: "हिन्दी"
};

export const localePath: Record<Locale, string> = {
  en: "/",
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
      about: "About",
      services: "Services",
      contact: "Contact"
    },
    common: {
      donate: "Donate",
      donateNow: "Donate Now",
      learnMore: "Learn More",
      readMore: "Read More",
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
      artOfStillness: "The Art of Stillness",
      artOfStillnessDescription:
        "Yoga and meditation bring Internal Stillness, fostering an Inner Harmony that dissolves stress and anchors the soul in Tranquility. Through this Presence, you cultivate the Self-Mastery required to radiate unshakable Confidence.",
      supportHomeless: "Support for the Homeless",
      supportHomelessDescription:
        "Providing shelter, warm meals, and a pathway to a dignified life for those in need through community-driven relief programs.",
      testimonialEyebrow: "Community Voices",
      testimonialsTitle: "Stories of Trust and Transformation"
    },
    aboutPage: {
      title: "Our Mission: Harmony for the Soul, Service for the World",
      intro:
        'At Keshavdham Seva, we believe that true wellness is a journey from the chaos of the external world to the sanctuary of the inner self. Rooted in the sacred spirit of "Nar Sewa Narayan Sewa" (Service to Humanity is Service to God), our center serves as a beacon of hope and healing in the heart of Vrindavan.',
      subheading:
        "We have established a Center of Excellence dedicated to the following core pillars of well-being and social service:",
      closing:
        "Whether you are seeking relief from the pressures of modern life or a deeper connection to your spiritual roots, Keshavdham Seva provides the peaceful environment and expert guidance necessary to restore Inner Harmony and reclaim your natural state of peace.",
      pillars: {
        yogaTitle: "Yoga",
        yogaBody:
          "We offer traditional Yogic practices, including Asanas and Pranayama, designed to align the physical body with the internal systems, promoting vitality and long-term health.",
        meditationTitle: "Meditation",
        meditationBody:
          "Our guided meditation sessions focus on cultivating Internal Stillness and Presence, allowing individuals to anchor their souls in a state of lasting Tranquility.",
        anxietyTitle: "Anxiety Management",
        anxietyBody:
          "Through specialized relaxation techniques, naturopathy, and spiritual counseling, we provide holistic tools to dissolve stress and manage anxiety, fostering the Self-Mastery needed for unshakable Confidence.",
        sevaTitle: "Humanitarian Seva",
        sevaBody:
          "Beyond individual healing, we are committed to community upliftment through Support for the Homeless, providing Education to the Underprivileged, and the compassionate care of cattle in our Gaushala."
      }
    },
    servicesPage: {
      title: "Services Rooted in Care and Inner Balance",
      intro:
        "Each Keshavdham Seva initiative is designed to restore dignity, strengthen the spirit, and extend practical support where it is needed most.",
      items: {
        wellnessTitle: "Yoga, Meditation and Anxiety Management",
        wellnessBody:
          "A restorative wellness stream that combines breathwork, guided stillness, and calming practices to help people regain balance, confidence, and emotional resilience.",
        homelessTitle: "Support for the Homeless",
        homelessBody:
          "We provide relief with shelter assistance, meals, and compassionate human support so vulnerable individuals can move toward a more dignified life.",
        educationTitle: "Education to the Underprivileged",
        educationBody:
          "Our education efforts create safer pathways for children through value-based learning, mentorship, and opportunities for long-term growth.",
        gaushalaTitle: "Gaushala",
        gaushalaBody:
          "We care for cattle with reverence and responsibility, maintaining a protected space that reflects both compassion and traditional stewardship."
      }
    },
    contactPage: {
      title: "Contact Keshavdham Seva",
      intro:
        "Reach out to us for seva, volunteering, partnerships, support inquiries, or to learn more about our work in Vrindavan."
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
    stillnessCarousel: {
      previous: "Previous slide",
      next: "Next slide"
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
      about: "परिचय",
      services: "सेवाएं",
      contact: "संपर्क"
    },
    common: {
      donate: "दान करें",
      donateNow: "अभी दान करें",
      learnMore: "और जानें",
      readMore: "और पढ़ें",
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
      artOfStillness: "स्थिरता की कला",
      artOfStillnessDescription:
        "योग और ध्यान आंतरिक स्थिरता लाते हैं, जो भीतरी सामंजस्य का निर्माण करते हुए तनाव को मिटाते हैं और आत्मा को शांति में स्थिर करते हैं। इसी सजग उपस्थिति के माध्यम से आप वह आत्म-नियंत्रण विकसित करते हैं जो अडिग आत्मविश्वास के रूप में प्रकट होता है।",
      supportHomeless: "बेसहारा लोगों को सहायता",
      supportHomelessDescription:
        "सामुदायिक राहत कार्यक्रमों के माध्यम से जरूरतमंदों को आश्रय, गर्म भोजन और एक गरिमापूर्ण जीवन का मार्ग प्रदान करना।",
      testimonialEyebrow: "समुदाय की आवाज़",
      testimonialsTitle: "विश्वास और परिवर्तन की कहानियाँ"
    },
    aboutPage: {
      title: "हमारा मिशन: आत्मा के लिए सामंजस्य, विश्व के लिए सेवा",
      intro:
        'केशवधाम सेवा में हमारा विश्वास है कि सच्चा कल्याण बाहरी संसार के कोलाहल से आंतरिक आत्मिक शरण तक की यात्रा है। "नर सेवा नारायण सेवा" की पवित्र भावना से प्रेरित होकर, हमारा केंद्र वृंदावन के हृदय में आशा और उपचार का एक प्रकाशस्तंभ है।',
      subheading:
        "हमने उत्कृष्टता का एक केंद्र स्थापित किया है, जो कल्याण और सामाजिक सेवा के निम्नलिखित मूल स्तंभों के लिए समर्पित है:",
      closing:
        "चाहे आप आधुनिक जीवन के दबावों से राहत चाहते हों या अपनी आध्यात्मिक जड़ों से गहरा संबंध, केशवधाम सेवा आपको वह शांत वातावरण और विशेषज्ञ मार्गदर्शन प्रदान करता है जो भीतरी सामंजस्य को पुनर्स्थापित करने और आपकी स्वाभाविक शांति को पुनः पाने के लिए आवश्यक है।",
      pillars: {
        yogaTitle: "योग",
        yogaBody:
          "हम पारंपरिक योगिक पद्धतियाँ, जिनमें आसन और प्राणायाम शामिल हैं, उपलब्ध कराते हैं ताकि शरीर और आंतरिक तंत्र में संतुलन बने, ऊर्जा बढ़े और दीर्घकालिक स्वास्थ्य को समर्थन मिले।",
        meditationTitle: "ध्यान",
        meditationBody:
          "हमारे निर्देशित ध्यान सत्र आंतरिक स्थिरता और सजग उपस्थिति को विकसित करते हैं, जिससे व्यक्ति अपनी आत्मा को दीर्घकालिक शांति में स्थिर कर सके।",
        anxietyTitle: "चिंता प्रबंधन",
        anxietyBody:
          "विशेष विश्राम तकनीकों, प्राकृतिक चिकित्सा और आध्यात्मिक परामर्श के माध्यम से हम तनाव को कम करने और चिंता को संभालने के लिए समग्र साधन प्रदान करते हैं।",
        sevaTitle: "मानवीय सेवा",
        sevaBody:
          "व्यक्तिगत उपचार से आगे बढ़कर, हम बेसहारा लोगों की सहायता, वंचितों की शिक्षा और गौशाला में करुणामय सेवा के माध्यम से सामुदायिक उत्थान के लिए समर्पित हैं।"
      }
    },
    servicesPage: {
      title: "सेवाएं जो करुणा और आंतरिक संतुलन में निहित हैं",
      intro:
        "केशवधाम सेवा की प्रत्येक पहल गरिमा को पुनर्स्थापित करने, आत्मबल को मजबूत करने और जहाँ आवश्यकता हो वहाँ सार्थक सहयोग पहुँचाने के लिए बनाई गई है।",
      items: {
        wellnessTitle: "योग, ध्यान और चिंता प्रबंधन",
        wellnessBody:
          "यह समग्र कल्याण धारा श्वास, ध्यान और शांतिपूर्ण अभ्यासों को जोड़ती है ताकि लोग संतुलन, आत्मविश्वास और भावनात्मक स्थिरता पुनः प्राप्त कर सकें।",
        homelessTitle: "बेसहारा लोगों को सहायता",
        homelessBody:
          "हम आश्रय सहयोग, भोजन और संवेदनशील मानवीय सहारा उपलब्ध कराते हैं ताकि जरूरतमंद लोग अधिक गरिमापूर्ण जीवन की ओर बढ़ सकें।",
        educationTitle: "वंचितों को शिक्षा",
        educationBody:
          "हमारे शैक्षिक प्रयास मूल्य-आधारित शिक्षा, मार्गदर्शन और अवसरों के माध्यम से बच्चों के लिए सुरक्षित और उज्ज्वल भविष्य का मार्ग बनाते हैं।",
        gaushalaTitle: "गौशाला",
        gaushalaBody:
          "हम करुणा और पारंपरिक उत्तरदायित्व के साथ गौवंश की सेवा करते हैं और उनके लिए एक संरक्षित, सम्मानपूर्ण वातावरण बनाए रखते हैं।"
      }
    },
    contactPage: {
      title: "केशवधाम सेवा से संपर्क करें",
      intro:
        "सेवा, स्वयंसेवा, सहभागिता, सहायता या हमारे वृंदावन स्थित कार्यों के बारे में अधिक जानने के लिए हमसे संपर्क करें।"
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
    stillnessCarousel: {
      previous: "पिछली स्लाइड",
      next: "अगली स्लाइड"
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

export function getPagePath(locale: Locale, page: PageKey) {
  if (locale === "en") {
    switch (page) {
      case "home":
        return "/";
      case "about":
        return "/about/";
      case "services":
        return "/services/";
      case "contact":
        return "/contact/";
    }
  }

  switch (page) {
    case "home":
      return "/hi/";
    case "about":
      return "/hi/about/";
    case "services":
      return "/hi/services/";
    case "contact":
      return "/hi/contact/";
  }
}
