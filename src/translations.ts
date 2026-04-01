export type Language = 'en' | 'si';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      services: 'Services',
      portfolio: 'Portfolio',
      process: 'Process',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Premium Software Engineering Company | Turning Ideas into',
      accent: 'Scalable Digital Systems',
      cta_portfolio: 'Our Portfolio',
      cta_partner: 'Partner With Us',
    },
    skills: {
      title: 'Expertise',
      subtitle: 'Forging the Future with',
      accent: 'Modern Tech',
    },
    services: {
      title: 'Our Services',
      subtitle: 'High-Performance',
      accent: 'Solutions',
      items: [
        { title: 'Custom Web Applications', desc: 'High-performance, scalable web solutions built with modern frameworks.' },
        { title: 'E-commerce Platforms', desc: 'Robust online stores with seamless payment integrations and UX focus.' },
        { title: 'SaaS Development', desc: 'End-to-end software as a service products with multi-tenant architecture.' },
        { title: 'Mobile Apps', desc: 'Native-feel cross-platform mobile experiences for iOS and Android.' },
        { title: 'API Development', desc: 'Secure, well-documented RESTful and GraphQL APIs for your ecosystem.' },
        { title: 'AI Integration', desc: 'Leveraging LLMs and machine learning to automate and enhance workflows.' },
        { title: 'DevOps & Cloud', desc: 'Optimized infrastructure using Docker, Kubernetes, and AWS/GCP.' },
        { title: 'Maintenance & Support', desc: 'Continuous monitoring, optimization, and technical support for peak performance.' }
      ]
    },
    portfolio: {
      title: 'Our Work',
      subtitle: 'Featured',
      accent: 'Projects',
      scroll: 'Scroll to explore more',
      items: [
        { title: 'SaaS Dashboard', category: 'Web App' },
        { title: 'E-commerce Platform', category: 'E-commerce' },
        { title: 'AI Chatbot', category: 'AI Integration' },
        { title: 'Mobile App', category: 'Mobile' },
        { title: 'Cloud Infrastructure', category: 'DevOps' },
        { title: 'GraphQL API', category: 'Backend' }
      ]
    },
    about: {
      title: 'About Us',
      subtitle: 'Architects of',
      accent: 'Digital Worlds',
      years: 'Years of\nExcellence',
      projects: 'Global Projects',
      clients: 'Enterprise Clients',
      p1: 'At ESYSTEMLK, we are a collective of elite software engineers and designers dedicated to building high-performance, scalable systems that push the boundaries of what\'s possible on the web.',
      p2: 'With over 8 years of industry leadership, we\'ve partnered with international enterprises and local innovators in Sri Lanka, delivering everything from complex SaaS platforms to cutting-edge AI integrations.',
      p3: 'Our philosophy combines engineering precision with creative strategy. We don\'t just build software; we architect digital ecosystems that drive global business growth and provide exceptional user experiences.',
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Flexible Plans for',
      accent: 'Your Business',
      items: [
        { name: 'Basic', price: 'Contact Us', features: ['Single Page Website', 'Responsive Design', '1 Week Support', 'Basic SEO'] },
        { name: 'Professional', price: 'Contact Us', features: ['Multi-page Website', 'E-commerce Ready', '1 Month Support', 'Advanced SEO', 'API Integration'] },
        { name: 'Enterprise', price: 'Contact Us', features: ['Custom Software Solution', 'SaaS Development', '1 Year Maintenance', 'Cloud Infrastructure', '24/7 Support'] }
      ]
    },
    blog: {
      title: 'Our Insights',
      subtitle: 'Tech',
      accent: 'Knowledge',
      items: [
        { title: 'The Future of Web Development in 2024', date: 'March 15, 2024' },
        { title: 'How AI is Transforming Business Workflows', date: 'February 28, 2024' },
        { title: 'Building Scalable Systems for Global Growth', date: 'January 10, 2024' }
      ]
    },
    process: {
      title: 'Our Process',
      subtitle: 'How We',
      accent: 'Work',
      steps: [
        { title: 'Discovery', desc: 'We dive deep into your business goals, target audience, and technical requirements to build a solid foundation.' },
        { title: 'Design', desc: 'Our designers create intuitive, high-fidelity prototypes that focus on user experience and brand identity.' },
        { title: 'Development', desc: 'Our engineers build your system using cutting-edge technologies, ensuring scalability, security, and performance.' },
        { title: 'Deployment', desc: 'We launch your product with rigorous testing and provide ongoing support to ensure long-term success.' }
      ]
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Common',
      accent: 'Questions',
      items: [
        { q: 'How long does a typical project take?', a: 'Timelines vary based on complexity. A standard web application usually takes 4-8 weeks, while complex SaaS platforms can take 3-6 months.' },
        { q: 'What technologies do you use?', a: 'We specialize in React, Next.js, Node.js, TypeScript, Laravel, and Python. We choose the best stack based on your specific needs.' },
        { q: 'Do you provide post-launch support?', a: 'Yes, we offer various maintenance and support packages to ensure your system remains secure, updated, and high-performing.' },
        { q: 'How do you handle project pricing?', a: 'We offer both fixed-price contracts for well-defined projects and time-and-materials models for more flexible, evolving requirements.' }
      ]
    },
    stats: {
      items: [
        { label: 'Projects Delivered', value: '150+' },
        { label: 'Global Clients', value: '500+' },
        { label: 'Years Experience', value: '8+' },
        { label: 'Code Quality', value: '99%' }
      ]
    },
    testimonials: {
      title: 'Success Stories',
      subtitle: 'What Our',
      accent: 'Clients Say',
      items: [
        { name: 'John Smith', role: 'CEO, TechFlow', text: 'ESYSTEMLK transformed our legacy system into a modern SaaS powerhouse. Their engineering precision is unmatched.' },
        { name: 'Sarah Perera', role: 'Founder, EcoLanka', text: 'The team delivered our e-commerce platform ahead of schedule. The UX is incredible and our sales have doubled.' },
        { name: 'Michael Chen', role: 'CTO, GlobalLogistics', text: 'Exceptional API architecture. They understood our complex requirements and built a highly scalable solution.' }
      ]
    },
    cta: {
      title: 'Ready to Build Your Digital Future?',
      subtitle: 'Let\'s collaborate to create something extraordinary.',
      button: 'Start Your Project'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Start Your',
      accent: 'Digital Journey',
      name: 'Full Name',
      email: 'Email Address',
      subject: 'Subject',
      message: 'Your Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message Sent Successfully!',
      callUs: 'Call Us',
      location: 'Location',
      social: 'Social',
      whatsappBtn: 'Chat on WhatsApp'
    },
    footer: {
      tagline: 'Architecting the digital future with precision and innovation.',
      links: 'Quick Links',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved.',
    }
  },
  si: {
    nav: {
      home: 'මුල් පිටුව',
      skills: 'නිපුණතා',
      services: 'සේවා',
      portfolio: 'ව්‍යාපෘති',
      process: 'ක්‍රියාවලිය',
      testimonials: 'පාරිභෝගික අදහස්',
      faq: 'නිතර අසන ප්‍රශ්න',
      about: 'අප ගැන',
      contact: 'සම්බන්ධ වන්න',
    },
    hero: {
      subtitle: 'ප්‍රමුඛ පෙළේ මෘදුකාංග ඉංජිනේරු සමාගම | ඔබේ අදහස්',
      accent: 'වර්ධනය කළ හැකි ඩිජිටල් පද්ධති බවට පත් කිරීම',
      cta_portfolio: 'අපගේ ව්‍යාපෘති',
      cta_partner: 'අප සමඟ එක්වන්න',
    },
    skills: {
      title: 'විශේෂඥතාව',
      subtitle: 'අනාගතය හැඩගස්වන්නේ',
      accent: 'නවීන තාක්ෂණයෙන්',
    },
    services: {
      title: 'අපගේ සේවාවන්',
      subtitle: 'ඉහළ කාර්යසාධනයක් සහිත',
      accent: 'විසඳුම්',
      items: [
        { title: 'අභිරුචි වෙබ් යෙදුම්', desc: 'නවීන තාක්ෂණික රාමු (Frameworks) භාවිතයෙන් නිපදවන ඉහළ කාර්යසාධනයක් සහිත වෙබ් විසඳුම්.' },
        { title: 'ඊ-වාණිජ්‍ය වේදිකා', desc: 'ආරක්ෂිත ගෙවීම් ක්‍රම සහ විශිෂ්ට පරිශීලක අත්දැකීමක් (UX) සහිත මාර්ගගත වෙළඳසැල්.' },
        { title: 'SaaS සංවර්ධනය', desc: 'බහු-පරිශීලක ගෘහ නිර්මාණ ශිල්පය සහිත සේවාවක් ලෙස මෘදුකාංග (SaaS) නිෂ්පාදන.' },
        { title: 'ජංගම යෙදුම්', desc: 'iOS සහ Android සඳහා ස්වදේශීය අත්දැකීමක් ලබා දෙන උසස් ජංගම යෙදුම්.' },
        { title: 'API සංවර්ධනය', desc: 'ඔබේ පද්ධති සඳහා ආරක්ෂිත සහ විධිමත් ලෙස ලේඛනගත කළ RESTful සහ GraphQL API.' },
        { title: 'AI ඒකාබද්ධ කිරීම', desc: 'වැඩ ප්‍රවාහයන් ස්වයංක්‍රීය කිරීමට සහ වැඩිදියුණු කිරීමට LLMs සහ AI තාක්ෂණය භාවිතා කිරීම.' },
        { title: 'DevOps සහ Cloud', desc: 'Docker, Kubernetes, සහ AWS/GCP භාවිතයෙන් ප්‍රශස්ත කළ වලාකුළු යටිතල පහසුකම්.' },
        { title: 'නඩත්තුව සහ සහාය', desc: 'උපරිම කාර්ය සාධනය සඳහා අඛණ්ඩ අධීක්ෂණය, ප්‍රශස්තකරණය සහ තාක්ෂණික සහාය.' }
      ]
    },
    portfolio: {
      title: 'අපගේ නිර්මාණ',
      subtitle: 'විශේෂිත',
      accent: 'ව්‍යාපෘති',
      scroll: 'වැඩිදුර ගවේෂණය කිරීමට පහළට යන්න',
      items: [
        { title: 'SaaS උපකරණ පුවරුව', category: 'වෙබ් යෙදුම' },
        { title: 'ඊ-වාණිජ්‍ය වේදිකාව', category: 'ඊ-වාණිජ්‍යය' },
        { title: 'AI චැට්බොට්', category: 'AI ඒකාබද්ධ කිරීම' },
        { title: 'ජංගම යෙදුම', category: 'ජංගම' },
        { title: 'වලාකුළු යටිතල පහසුකම්', category: 'DevOps' },
        { title: 'GraphQL API', category: 'පසුබිම් පද්ධති' }
      ]
    },
    about: {
      title: 'අප ගැන',
      subtitle: 'ඩිජිටල් ලෝකයේ',
      accent: 'ගෘහ නිර්මාණ ශිල්පීන්',
      years: 'විශිෂ්ටත්වයේ\nවසර',
      projects: 'ගෝලීය ව්‍යාපෘති',
      clients: 'විශාල සේවාදායකයින්',
      p1: 'ESYSTEMLK හි දී, අපි වෙබ් තාක්ෂණයේ සීමාවන් පුළුල් කරන ඉහළ කාර්යසාධනයක් සහිත, ඕනෑම මට්ටමකට වර්ධනය කළ හැකි පද්ධති ගොඩනැගීම සඳහා කැප වූ දක්ෂ මෘදුකාංග ඉංජිනේරුවන් සහ නිර්මාණකරුවන්ගේ කණ්ඩායමකි.',
      p2: 'වසර 8 කට වැඩි කර්මාන්ත පළපුරුද්දක් සමඟින්, අපි ජාත්‍යන්තර සමාගම් සහ ශ්‍රී ලංකාවේ නවෝත්පාදකයින් සමඟ එක්ව සංකීර්ණ SaaS වේදිකාවල සිට අති නවීන AI ඒකාබද්ධ කිරීම් දක්වා සාර්ථකව නිම කර ඇත.',
      p3: 'අපගේ දර්ශනය වන්නේ නිර්මාණාත්මක උපාය මාර්ග සමඟ ඉංජිනේරු නිරවද්‍යතාවය ඒකාබද්ධ කිරීමයි. අපි මෘදුකාංග ගොඩනඟන්නේ පමණක් නොව, ගෝලීය ව්‍යාපාරික වර්ධනයට සහ සුවිශේෂී පරිශීලක අත්දැකීම් ලබා දෙන ඩිජිටල් පරිසර පද්ධති නිර්මාණය කරමු.',
    },
    pricing: {
      title: 'මිල ගණන්',
      subtitle: 'ඔබේ ව්‍යාපාරයට',
      accent: 'ගැලපෙන පැකේජ',
      items: [
        { name: 'මූලික (Basic)', price: 'අමතන්න', features: ['තනි පිටුවක වෙබ් අඩවිය', 'ප්‍රතිචාරාත්මක නිර්මාණය', 'සති 1ක සහාය', 'මූලික SEO'] },
        { name: 'වෘත්තීය (Professional)', price: 'අමතන්න', features: ['බහු පිටු වෙබ් අඩවිය', 'ඊ-වාණිජ්‍ය හැකියාව', 'මාස 1ක සහාය', 'උසස් SEO', 'API ඒකාබද්ධ කිරීම'] },
        { name: 'ව්‍යවසාය (Enterprise)', price: 'අමතන්න', features: ['අභිරුචි මෘදුකාංග විසඳුම්', 'SaaS සංවර්ධනය', 'වසරක නඩත්තුව', 'වලාකුළු යටිතල පහසුකම්', '24/7 සහාය'] }
      ]
    },
    blog: {
      title: 'අපගේ ලිපි',
      subtitle: 'තාක්ෂණික',
      accent: 'දැනුම',
      items: [
        { title: '2024 දී වෙබ් සංවර්ධනයේ අනාගතය', date: '2024 මාර්තු 15' },
        { title: 'AI ඔබේ ව්‍යාපාරයට උදව් කරන්නේ කෙසේද?', date: '2024 පෙබරවාරි 28' },
        { title: 'පරිමාණ කළ හැකි පද්ධති ගොඩනැගීම', date: '2024 ජනවාරි 10' }
      ]
    },
    process: {
      title: 'අපගේ ක්‍රියාවලිය',
      subtitle: 'අපි වැඩ කරන',
      accent: 'ආකාරය',
      steps: [
        { title: 'ගවේෂණය', desc: 'අපි ඔබේ ව්‍යාපාරික අරමුණු, ඉලක්කගත ප්‍රේක්ෂකයින් සහ තාක්ෂණික අවශ්‍යතා පිළිබඳව ගැඹුරින් සොයා බලමු.' },
        { title: 'නිර්මාණය', desc: 'අපගේ නිර්මාණකරුවන් පරිශීලක අත්දැකීම් සහ සන්නාම අනන්‍යතාවය කෙරෙහි අවධානය යොමු කරන මූලාකෘති නිර්මාණය කරයි.' },
        { title: 'සංවර්ධනය', desc: 'අපගේ ඉංජිනේරුවන් නවීන තාක්ෂණය භාවිතා කරමින් ඔබේ පද්ධතිය ඉහළ ප්‍රමිතියෙන් යුතුව ගොඩනඟයි.' },
        { title: 'නියුක්ත කිරීම', desc: 'අපි දැඩි පරීක්ෂණ සමඟ ඔබේ නිෂ්පාදනය දියත් කරන අතර අඛණ්ඩ තාක්ෂණික සහාය ලබා දෙන්නෙමු.' }
      ]
    },
    faq: {
      title: 'නිතර අසන ප්‍රශ්න',
      subtitle: 'පොදු',
      accent: 'විමසීම්',
      items: [
        { q: 'සාමාන්‍ය ව්‍යාපෘතියක් සඳහා කොපමණ කාලයක් ගතවේද?', a: 'ව්‍යාපෘතියේ සංකීර්ණත්වය මත කාලසීමාවන් වෙනස් වේ. සාමාන්‍ය වෙබ් යෙදුමක් සඳහා සති 4-8 ක් ද, සංකීර්ණ SaaS වේදිකාවක් සඳහා මාස 3-6 ක් ද ගත විය හැක.' },
        { q: 'ඔබ භාවිතා කරන තාක්ෂණයන් මොනවාද?', a: 'අපි ප්‍රධාන වශයෙන් React, Next.js, Node.js, TypeScript, Laravel, සහ Python භාවිතා කරමු. ඔබේ අවශ්‍යතාවයට වඩාත්ම ගැලපෙන තාක්ෂණය අපි තෝරා ගනිමු.' },
        { q: 'දියත් කිරීමෙන් පසු සහාය ලබා දෙනවාද?', a: 'ඔව්, ඔබේ පද්ධතිය ආරක්ෂිතව, යාවත්කාලීනව සහ ඉහළ කාර්යසාධනයකින් පවත්වා ගැනීමට අපි නඩත්තු පැකේජ ලබා දෙන්නෙමු.' },
        { q: 'ව්‍යාපෘති සඳහා මිල නියම කරන්නේ කෙසේද?', a: 'අපි ස්ථාවර මිල ගිවිසුම් (Fixed-price) සහ නම්‍යශීලී කාලය සහ ද්‍රව්‍ය (Time-and-materials) මත පදනම් වූ ක්‍රම දෙකම භාවිතා කරමු.' }
      ]
    },
    stats: {
      items: [
        { label: 'නිම කළ ව්‍යාපෘති', value: '150+' },
        { label: 'ගෝලීය සේවාදායකයින්', value: '500+' },
        { label: 'වසරක පළපුරුද්ද', value: '8+' },
        { label: 'කේතයේ ගුණාත්මකභාවය', value: '99%' }
      ]
    },
    testimonials: {
      title: 'සාර්ථක කථා',
      subtitle: 'අපගේ සේවාදායකයින්',
      accent: 'පවසන දේ',
      items: [
        { name: 'ජෝන් ස්මිත්', role: 'ප්‍රධාන විධායක නිලධාරී, TechFlow', text: 'ESYSTEMLK අපගේ පැරණි පද්ධතිය නවීන SaaS බලවේගයක් බවට පත් කළේය. ඔවුන්ගේ ඉංජිනේරු නිරවද්‍යතාවය අසමසමයි.' },
        { name: 'සාරා පෙරේරා', role: 'නිර්මාතෘ, EcoLanka', text: 'කණ්ඩායම නියමිත වේලාවට පෙර අපගේ ඊ-වාණිජ්‍ය වේදිකාව ලබා දුන්නේය. පරිශීලක අත්දැකීම (UX) ඇදහිය නොහැකි අතර අපගේ විකුණුම් දෙගුණ වී ඇත.' },
        { name: 'මයිකල් චෙන්', role: 'ප්‍රධාන තාක්ෂණ නිලධාරී, GlobalLogistics', text: 'සුවිශේෂී API ගෘහ නිර්මාණ ශිල්පය. ඔවුන් අපගේ සංකීර්ණ අවශ්‍යතා මැනවින් අවබෝධ කරගෙන ඉහළ මට්ටමේ විසඳුමක් ගොඩනැගුවා.' }
      ]
    },
    cta: {
      title: 'ඔබේ ඩිජිටල් අනාගතය ගොඩනැගීමට සූදානම්ද?',
      subtitle: 'සුවිශේෂී දෙයක් නිර්මාණය කිරීමට අපි එක්වෙමු.',
      button: 'ඔබේ ව්‍යාපෘතිය ආරම්භ කරන්න'
    },
    contact: {
      title: 'සම්බන්ධ වන්න',
      subtitle: 'ඔබේ ඩිජිටල් ගමන',
      accent: 'ආරම්භ කරන්න',
      name: 'සම්පූර්ණ නම',
      email: 'විද්‍යුත් තැපෑල',
      subject: 'විෂය',
      message: 'ඔබේ පණිවිඩය',
      send: 'පණිවිඩය යවන්න',
      sending: 'යවමින් පවතී...',
      success: 'පණිවිඩය සාර්ථකව යවන ලදී!',
      callUs: 'අප අමතන්න',
      location: 'ස්ථානය',
      social: 'සමාජ මාධ්‍ය',
      whatsappBtn: 'WhatsApp හරහා අමතන්න'
    },
    footer: {
      tagline: 'නිරවද්‍යතාවය සහ නවෝත්පාදනය සමඟ ඩිජිටල් අනාගතය නිර්මාණය කිරීම.',
      links: 'ඉක්මන් සබැඳි',
      legal: 'නීතිමය',
      privacy: 'පෞද්ගලිකත්ව ප්‍රතිපත්තිය',
      terms: 'සේවා කොන්දේසි',
      rights: 'සියලුම හිමිකම් ඇවිරිණි.',
    }
  }
};
