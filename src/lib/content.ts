export type Category = {
  title: string;
  slug: string;
  description: string;
};

export type ArticleSection = {
  level?: 2 | 3;
  heading: string;
  body: string;
};

export type Article = {
  type: "article";
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  date: string;
  updatedAt: string;
  readingTime: string;
  excerpt: string;
  coverImage: string;
  coverAlt: string;
  heroImage?: string;
  sections: ArticleSection[];
};

export type Note = {
  type: "note";
  slug: string;
  title: string;
  category: "Uygulamadan Notlar";
  excerpt: string;
  readingTime: string;
};

export const siteUrl = "https://omerfarukozdemir.av.tr";

export const siteConfig = {
  contact: {
    officeName: "ofo ofis",
    phone: "+90 553 506 05 68",
    email: "av.omerfarukozdmr@gmail.com",
    address: "Mustafa Kemal, 2127. Cd No:11/A, 06510 Çankaya/Ankara",
    workingHours: "Hafta içi 09.00 - 18.00",
    mapUrl:
      "https://www.google.com/maps/place/39%C2%B054'44.4%22N+32%C2%B046'03.0%22E/@39.9122279,32.7675166,21z/data=!4m5!3m4!4b1!8m2!3d39.912327!4d32.767506?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D",
    mapEmbedUrl:
      "https://www.google.com/maps?q=39.912327,32.767506&z=19&output=embed",
  }
};

export const aboutSections = [
  {
    title: "Hakkımda",
    paragraphs: [
      "Av. Ömer Faruk Özdemir, hukuki meselelerin yalnızca mevzuat hükümleriyle değil; olayın bütünlüğü, delillerin niteliği, yargılama pratiği ve doğru stratejiyle birlikte değerlendirilmesi gerektiğini benimseyen bir hukukçudur.",
      "Hukuki uyuşmazlıklarda her dosyanın kendi koşulları içinde ele alınması gerektiğine inanır. Bu doğrultuda hukukun teknik yapısını, anlaşılır bir anlatım ve uygulamaya dönük bir bakış açısıyla değerlendirmeye önem verir.",
      "Bu internet sitesi, hukuk alanındaki yazıların, mesleki değerlendirmelerin ve uygulamadan hareketle oluşturulan notların paylaşılması amacıyla hazırlanmış kişisel bir hukuk platformudur.",
    ],
  },
  {
    title: "Eğitim",
    paragraphs: [
      "Ömer Faruk Özdemir, lisans eğitimini öncelikle Gazi Üniversitesi İktisadi ve İdari Bilimler Fakültesi Maliye Bölümünde tamamlamıştır. Maliye alanındaki eğitimi; ekonomik yönü bulunan hukuki uyuşmazlıkların, alacak ilişkilerinin, tazminat taleplerinin ve mali sonuç doğuran süreçlerin değerlendirilmesinde çok yönlü bir bakış açısı kazandırmıştır.",
      "Bu eğitimin ardından Süleyman Demirel Üniversitesi Hukuk Fakültesinden mezun olmuş ve hukuk mesleğine, maliye ile hukuk disiplinlerini birlikte değerlendirebileceği bir akademik altyapı üzerinde adım atmıştır.",
      "Akademik çalışmalarını sürdüren Özdemir, Atatürk Üniversitesi’nde İktisat Politikası alanında yüksek lisans eğitimine devam etmektedir. Hukuk, maliye ve iktisat politikası alanlarını bir araya getiren bu süreç; hukuki meseleleri yalnızca normatif yönüyle değil, ekonomik ve toplumsal sonuçlarıyla birlikte değerlendirebilmesine katkı sağlamaktadır.",
    ],
  },
  {
    title: "Mesleki Yaklaşım",
    paragraphs: [
      "Hukuki sürecin doğru yönetilmesi, yalnızca dava açmak veya dilekçe sunmaktan ibaret değildir. Her uyuşmazlıkta öncelikle olay örgüsünün doğru kurulması, taraf beyanlarının dikkatle değerlendirilmesi, delillerin hukuki anlamının belirlenmesi ve sürecin muhtemel sonuçlarının öngörülmesi gerekir.",
      "Bu yaklaşım çerçevesinde hukuki meseleler; somut olayın özellikleri, mevcut deliller, süreler, usuli imkânlar ve yargılama pratiği dikkate alınarak ele alınır. Amaç, hukuki süreci karmaşık ve anlaşılmaz bir yapı olmaktan çıkararak açık, ölçülü ve takip edilebilir bir zeminde değerlendirmektir.",
      "Ceza hukuku, iş hukuku, icra ve alacak hukuku, kira hukuku, tazminat hukuku, miras ve taşınmaz uyuşmazlıkları gibi alanlarda her dosyanın kendine özgü koşulları bulunduğu kabul edilir. Bu nedenle değerlendirmeler, genel kabullerden ziyade somut olayın delilleri ve uygulanabilir hukuki yolları üzerinden yapılır.",
      "Mesleki yaklaşımın temelinde; güçlü dilekçe dili, dosyaya özgü strateji, delil merkezli değerlendirme, yargılama sürecinin özenli takibi ve hukuki bilginin anlaşılır biçimde aktarılması yer alır.",
    ],
  },
  {
    title: "Bu Site Hakkında",
    paragraphs: [
      "Bu site, kişisel bir hukuk platformu olarak hazırlanmıştır. Temel amacı; hukuk alanındaki yazıları, mesleki değerlendirmeleri, uygulamada karşılaşılan sorunlara ilişkin notları ve hukuki süreçlere dair açıklamaları okuyucularla paylaşmaktır.",
      "Burada yer alan içerikler, yalnızca belirli hukuk alanlarında genel bilgi vermek amacıyla değil; aynı zamanda hukuki meselelerin nasıl değerlendirilmesi gerektiğine ilişkin bir bakış açısı sunmak için kaleme alınmaktadır. Bu nedenle yazılar, klasik ve yüzeysel bilgilendirme metinlerinden ziyade, uygulamaya dönük, delil ve süreç odaklı hukuki değerlendirmeler olarak tasarlanmaktadır.",
      "Sitede ceza hukuku, iş hukuku, icra hukuku, kira hukuku, tazminat hukuku, miras hukuku ve taşınmaz uyuşmazlıkları başta olmak üzere çeşitli alanlarda yazılar yayımlanması amaçlanmaktadır. Bunun yanında “uygulamadan notlar” niteliğindeki içeriklerle; ifade alma süreci, delil değerlendirmesi, bilirkişi raporlarına itiraz, icra takiplerinde açıklama kısmının önemi ve dava dilekçesinde olay örgüsünün kurulması gibi pratik konulara da yer verilecektir.",
      "Bu internet sitesi, bir hukuk bürosu tanıtım sayfasından ziyade; hukuk alanındaki düşüncelerin, mesleki yaklaşımın ve uygulamaya dönük yazıların paylaşılması amacıyla oluşturulmuş kişisel bir yayın alanıdır.",
      "Sitede yer alan tüm yazılar genel bilgilendirme ve hukuki değerlendirme amacı taşır. Her hukuki uyuşmazlık; somut koşulları, delilleri, süreleri ve tarafların durumu dikkate alınarak ayrıca değerlendirilmelidir. Bu nedenle burada yer alan içerikler, somut olay özelinde hukuki danışmanlık yerine geçmez.",
    ],
  },
];

export const articleCategories: Category[] = [
  {
    title: "Ceza Hukuku",
    slug: "ceza-hukuku",
    description: "Soruşturma, kovuşturma, ifade, savunma ve delil değerlendirmesi.",
  },
  {
    title: "İş Hukuku",
    slug: "is-hukuku",
    description: "Fesih, işe iade, işçilik alacakları ve arabuluculuk süreçleri.",
  },
  {
    title: "İcra ve Alacak Hukuku",
    slug: "icra-ve-alacak-hukuku",
    description: "Alacak takibi, itiraz, tahsilat ve borç ilişkileri.",
  },
  {
    title: "Kira Hukuku",
    slug: "kira-hukuku",
    description: "Tahliye, kira tespiti, uyarlama ve sözleşme uyuşmazlıkları.",
  },
  {
    title: "Tazminat Hukuku",
    slug: "tazminat-hukuku",
    description: "Maddi ve manevi tazminat taleplerine ilişkin değerlendirmeler.",
  },
  {
    title: "Miras ve Taşınmaz Hukuku",
    slug: "miras-ve-tasinmaz-hukuku",
    description: "Miras paylaşımı, taşınmaz uyuşmazlıkları ve tapu süreçleri.",
  },
  {
    title: "Hukukî Değerlendirmeler",
    slug: "hukuki-degerlendirmeler",
    description: "Güncel hukuki gelişmeler ve mesleki değerlendirme yazıları.",
  },
];

export const categories = articleCategories;

export const articles: Article[] = [
  {
    type: "article",
    slug: "ise-iade-davasinda-sureler",
    title: "İşe İade Davasında Süreler ve Fesih Sürecinin Değerlendirilmesi",
    category: "İş Hukuku",
    categorySlug: "is-hukuku",
    date: "10 Mayıs 2026",
    updatedAt: "12 Mayıs 2026",
    readingTime: "7 dk okuma",
    excerpt:
      "İşe iade sürecinde fesih bildirimi, arabuluculuk başvurusu ve dava açma sürelerinin birlikte değerlendirilmesi gerekir.",
    coverImage: "/images/articles/ise-iade-davasinda-sureler.png",
    coverAlt: "İşe iade davası ve fesih süreci hakkında temsili görsel",
    heroImage: "/images/articles/ise-iade-davasinda-sureler-hero.png",
    sections: [
      {
        heading: "Fesih Süreci Nedir?",
        body:
          "İş sözleşmesinin sona erdirilmesi, yalnızca taraflardan birinin irade açıklamasıyla sınırlı değildir. Bildirimin yazılı yapılması, gerekçenin açık gösterilmesi ve somut olayın özelliklerine göre geçerli nedenin bulunup bulunmadığı ayrıca incelenir.",
      },
      {
        level: 3,
        heading: "Fesih Bildirimi",
        body:
          "Fesih bildirimi, işçinin hangi nedenle işten çıkarıldığını anlayabileceği açıklıkta olmalıdır. Belirsiz veya sonradan değiştirilen gerekçeler yargılama aşamasında ayrıca tartışma konusu olabilir.",
      },
      {
        level: 3,
        heading: "Savunma Alma Yükümlülüğü",
        body:
          "İşçinin davranışı veya verimi gerekçe gösteriliyorsa, bazı durumlarda savunma alınmadan yapılan fesih geçersizlik riski taşıyabilir. Bu nedenle fesih öncesi usul dikkatle değerlendirilmelidir.",
      },
      {
        heading: "İşe İade Davasında Süreler",
        body:
          "İşe iade taleplerinde süreler hak kaybı doğurabilecek niteliktedir. Fesih bildiriminin tebliğ tarihi, arabuluculuğa başvuru ve dava açma takviminin başlangıç noktasıdır.",
      },
      {
        level: 3,
        heading: "Arabuluculuk Başvurusu",
        body:
          "Dava açmadan önce arabuluculuk yoluna başvurulması zorunludur. Başvuru süresi ve son tutanak tarihi, dava açma süresi bakımından birlikte takip edilmelidir.",
      },
      {
        level: 3,
        heading: "Dava Açma Süresi",
        body:
          "Arabuluculuk sürecinin anlaşmama ile sona ermesi halinde dava süresi ayrıca işlemeye başlar. Sürenin kaçırılması, talebin esasına girilmeden reddedilmesine neden olabilir.",
      },
    ],
  },
  {
    type: "article",
    slug: "kira-sozlesmesinde-tahliye-yollari",
    title: "Kira Sözleşmesinde Tahliye Yolları Nasıl Değerlendirilir?",
    category: "Kira Hukuku",
    categorySlug: "kira-hukuku",
    date: "8 Mayıs 2026",
    updatedAt: "11 Mayıs 2026",
    readingTime: "6 dk okuma",
    excerpt:
      "Tahliye taahhüdü, ihtiyaç nedeniyle tahliye ve temerrüt süreçleri farklı koşullara ve takvimlere bağlıdır.",
    coverImage: "/images/articles/kira-sozlesmesinde-tahliye-yollari.png",
    coverAlt: "Kira sözleşmesi ve tahliye süreci hakkında temsili görsel",
    sections: [
      {
        heading: "Tahliye Sebebinin Belirlenmesi",
        body:
          "Kira ilişkisinde tahliye talebinin hangi hukuki sebebe dayandığı ilk aşamada belirlenmelidir. İhtiyaç, temerrüt, tahliye taahhüdü veya sözleşme süresinin sona ermesi birbirinden farklı sonuçlar doğurur.",
      },
      {
        level: 3,
        heading: "Tahliye Taahhüdü",
        body:
          "Tahliye taahhüdünün geçerliliği, düzenlenme tarihi, serbest irade ve kiralananın tesliminden sonraki süreç gibi ölçütlerle birlikte değerlendirilir.",
      },
      {
        heading: "Dava ve Arabuluculuk Süreci",
        body:
          "Kira uyuşmazlıklarında bazı talepler bakımından arabuluculuk dava şartı olarak karşımıza çıkar. Başvurunun kapsamı ve tutanak içeriği sonraki dava sürecini etkileyebilir.",
      },
    ],
  },
  {
    type: "article",
    slug: "ceza-sorusturmasinda-ifade",
    title: "Ceza Soruşturmasında İfade Aşamasında Dikkat Edilmesi Gerekenler",
    category: "Ceza Hukuku",
    categorySlug: "ceza-hukuku",
    date: "5 Mayıs 2026",
    updatedAt: "9 Mayıs 2026",
    readingTime: "5 dk okuma",
    excerpt:
      "İfade aşaması, dosyanın ilerleyen safhalarını etkileyebilen kritik bir süreçtir; haklar ve usul birlikte ele alınmalıdır.",
    coverImage: "/images/articles/ceza-sorusturmasinda-ifade.png",
    coverAlt: "Ceza soruşturmasında ifade aşamasını temsil eden koyu tonlu görsel",
    sections: [
      {
        heading: "İfade Aşamasının Önemi",
        body:
          "Soruşturma aşamasında verilen ifade, dosyanın yönünü etkileyebilir. Bu nedenle isnadın kapsamı, mevcut deliller ve susma hakkı dahil tüm usuli haklar birlikte değerlendirilmelidir.",
      },
      {
        heading: "Müdafi Yardımından Yararlanma",
        body:
          "Şüpheli veya sanık sıfatıyla ifade veren kişinin müdafi yardımından yararlanması, beyanların hukuki sonuçlarını anlaması bakımından önem taşır.",
      },
      {
        level: 3,
        heading: "Tutanak Kontrolü",
        body:
          "İfade sonunda tutanak dikkatle okunmalı, beyanla uyuşmayan kısımlar varsa düzeltilmesi talep edilmelidir.",
      },
    ],
  },
  {
    type: "article",
    slug: "icra-takibine-itiraz",
    title: "İcra Takibine İtiraz Edildiğinde Süreç Nasıl İlerler?",
    category: "İcra ve Alacak Hukuku",
    categorySlug: "icra-ve-alacak-hukuku",
    date: "1 Mayıs 2026",
    updatedAt: "6 Mayıs 2026",
    readingTime: "6 dk okuma",
    excerpt:
      "Borçlu itirazı, takibin durması ve alacaklının başvurabileceği yollar bakımından sistemli değerlendirme gerektirir.",
    coverImage: "/images/articles/icra-takibine-itiraz.png",
    coverAlt: "İcra ve alacak takibi sürecine ilişkin temsili görsel",
    sections: [
      {
        heading: "İtirazın Takibe Etkisi",
        body:
          "İlamsız icra takibinde süresinde yapılan itiraz, takibi kural olarak durdurur. Bundan sonra alacaklının itirazın iptali veya itirazın kaldırılması gibi yolları değerlendirmesi gerekir.",
      },
      {
        heading: "Alacaklının Başvuru Yolları",
        body:
          "Başvurulacak yol, alacağın dayanağına ve eldeki belgelere göre değişir. Yazılı belge, sözleşme, fatura veya cari hesap kayıtları sürecin yönünü belirleyebilir.",
      },
    ],
  },
  {
    type: "article",
    slug: "miras-paylasiminda-tasinmazlar",
    title: "Miras Paylaşımında Taşınmazların Hukukî Durumu",
    category: "Miras ve Taşınmaz Hukuku",
    categorySlug: "miras-ve-tasinmaz-hukuku",
    date: "28 Nisan 2026",
    updatedAt: "4 Mayıs 2026",
    readingTime: "8 dk okuma",
    excerpt:
      "Miras kalan taşınmazlarda pay oranları, tapu kayıtları ve ortaklığın giderilmesi seçenekleri birlikte incelenir.",
    coverImage: "/images/articles/miras-paylasiminda-tasinmazlar.png",
    coverAlt: "Miras ve taşınmaz hukukunu temsil eden sade görsel",
    sections: [
      {
        heading: "Miras Paylarının Belirlenmesi",
        body:
          "Mirasçılık belgesi, mirasçıların pay oranlarını gösterir. Ancak taşınmazların fiili kullanımı, terekeye dahil olup olmadığı ve önceki tasarruflar ayrıca değerlendirilmelidir.",
      },
      {
        heading: "Ortaklığın Giderilmesi",
        body:
          "Paylı veya elbirliği mülkiyetinde anlaşma sağlanamıyorsa ortaklığın giderilmesi davası gündeme gelebilir. Satış veya aynen taksim seçenekleri somut olaya göre incelenir.",
      },
    ],
  },
  {
    type: "article",
    slug: "manevi-tazminat-degerlendirmesi",
    title: "Manevi Tazminat Taleplerinde Değerlendirme Ölçütleri",
    category: "Tazminat Hukuku",
    categorySlug: "tazminat-hukuku",
    date: "24 Nisan 2026",
    updatedAt: "30 Nisan 2026",
    readingTime: "5 dk okuma",
    excerpt:
      "Manevi tazminat, olayın ağırlığı, tarafların durumu ve hakkaniyet ölçütleriyle birlikte ele alınır.",
    coverImage: "/images/articles/manevi-tazminat-degerlendirmesi.png",
    coverAlt: "Tazminat hukuku değerlendirmesini temsil eden temsili görsel",
    sections: [
      {
        heading: "Manevi Zarar Kavramı",
        body:
          "Manevi zarar, kişinin yaşadığı elem, üzüntü ve kişilik değerlerindeki ihlal ile ilişkilidir. Talep miktarı belirlenirken olayın özellikleri ve hakkaniyet ilkesi birlikte dikkate alınır.",
      },
      {
        heading: "İspat ve Deliller",
        body:
          "Manevi tazminat taleplerinde olayın gerçekleşme biçimi, tarafların kusur durumu ve ihlalin ağırlığı dosyadaki delillerle ortaya konulmalıdır.",
      },
    ],
  },
];

export const notes: Note[] = [
  {
    type: "note",
    slug: "durusma-oncesi-savunma-hazirligi",
    title: "Duruşma Öncesi Savunma Hazırlığında Nelere Bakılmalı?",
    category: "Uygulamadan Notlar",
    excerpt:
      "Duruşma öncesinde dosya kapsamı, deliller, beyanlar ve usulî ihtimaller bakımından yapılabilecek hazırlıklara ilişkin mesleki notlar.",
    readingTime: "5 dk okuma",
  },
  {
    type: "note",
    slug: "bilirkisi-raporuna-itirazda-eksik-inceleme",
    title: "Bilirkişi Raporuna İtirazda Eksik İnceleme Nasıl Tespit Edilir?",
    category: "Uygulamadan Notlar",
    excerpt:
      "Bilirkişi raporlarında eksik inceleme, hatalı varsayım ve denetime elverişlilik bakımından dikkat edilebilecek noktalar.",
    readingTime: "6 dk okuma",
  },
  {
    type: "note",
    slug: "ceza-dosyasinda-tanik-beyanlari",
    title: "Ceza Dosyasında Tanık Beyanları Nasıl Değerlendirilir?",
    category: "Uygulamadan Notlar",
    excerpt:
      "Tanık beyanlarının tutarlılığı, dosya kapsamıyla uyumu ve savunma stratejisine etkisi üzerine kısa değerlendirmeler.",
    readingTime: "5 dk okuma",
  },
  {
    type: "note",
    slug: "is-davalarinda-fesih-bildiriminin-onemi",
    title: "İş Davalarında Fesih Bildiriminin Önemi",
    category: "Uygulamadan Notlar",
    excerpt:
      "Fesih bildiriminin gerekçe, tarih, usul ve ispat bakımından dava sürecine etkisine ilişkin uygulama notları.",
    readingTime: "5 dk okuma",
  },
  {
    type: "note",
    slug: "icra-takibinde-aciklama-kismi",
    title: "İcra Takibinde Açıklama Kısmı Neden Önemlidir?",
    category: "Uygulamadan Notlar",
    excerpt:
      "Takip talebindeki açıklama bölümünün alacağın dayanağı, kapsamı ve itiraz sonrası süreç bakımından taşıdığı önem.",
    readingTime: "4 dk okuma",
  },
  {
    type: "note",
    slug: "tazminat-davalarinda-zararin-ispati",
    title: "Tazminat Davalarında Zararın İspatı ve Bilirkişi Raporu",
    category: "Uygulamadan Notlar",
    excerpt:
      "Zarar kalemlerinin somutlaştırılması, delillendirilmesi ve bilirkişi raporlarının denetlenmesine ilişkin kısa notlar.",
    readingTime: "6 dk okuma",
  },
  {
    type: "note",
    slug: "arabuluculuk-surecine-hazirlik",
    title: "Arabuluculuk Sürecine Hazırlıkta Dikkat Edilmesi Gerekenler",
    category: "Uygulamadan Notlar",
    excerpt:
      "Arabuluculuk görüşmesine giderken taleplerin, belgelerin ve müzakere sınırlarının hazırlanmasına dair notlar.",
    readingTime: "5 dk okuma",
  },
  {
    type: "note",
    slug: "dilekce-dilinde-ikna-ve-gerekcelendirme",
    title: "Dilekçe Dilinde İkna ve Hukuki Gerekçelendirme",
    category: "Uygulamadan Notlar",
    excerpt:
      "Dilekçede olay anlatımı, hukuki nitelendirme ve talep sonucunun açık kurulmasına ilişkin mesleki gözlemler.",
    readingTime: "5 dk okuma",
  },
];

export const searchableContent = [...articles, ...notes];

export function getCategoryBySlug(slug?: string | null) {
  return categories.find((category) => category.slug === slug);
}

export function getArticlesByCategory(slug?: string | null) {
  if (!slug) {
    return articles;
  }

  return articles.filter((article) => article.categorySlug === slug);
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRecentArticles(limit = 4) {
  return articles.slice(0, limit);
}

export function getRelatedArticles(article: Article, limit = 3) {
  return articles
    .filter(
      (item) => item.slug !== article.slug && item.categorySlug === article.categorySlug,
    )
    .concat(articles.filter((item) => item.slug !== article.slug))
    .filter((item, index, list) => list.findIndex((entry) => entry.slug === item.slug) === index)
    .slice(0, limit);
}
