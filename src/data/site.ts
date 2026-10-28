export const site = {
  name: 'Prayer House Church',
  city: 'Düsseldorf',
  tagline: 'A house of prayer for all nations',
  founded: 1997,
  description:
    'Prayer House Church is an open, friendly family in Düsseldorf with balanced spiritual and social activities — equipping the body of Christ for the second coming of our Lord Jesus Christ.',
  mission:
    'Our mission is to bring people to church by working hard through evangelism and to provide an exciting, God-honouring environment for worship.',
  vision:
    'Our vision is to empower people with knowledge through God’s word; to teach them to deploy their God-given talents while positively impacting their generation.',
  address: {
    street: 'Carl-Severing-Straße 4',
    zip: '40595',
    city: 'Düsseldorf',
    country: 'Deutschland',
  },
  phone: '+49 172 2632526',
  phoneHref: 'tel:+491722632526',
  email: 'contact@prayerhousechurch.com',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Carl-Severing-Stra%C3%9Fe+4+40595+D%C3%BCsseldorf',
  mapEmbed:
    'https://maps.google.com/maps?q=Carl-Severing-Stra%C3%9Fe%204%2C%2040595%20D%C3%BCsseldorf&t=&z=15&ie=UTF8&iwloc=&output=embed',
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/prayerhousechurchde/' },
    { label: 'Instagram', href: 'https://www.instagram.com/prayerhousechurchde/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@prayerhousechurchde' },
    { label: 'X', href: 'https://twitter.com/prayerhousede/' },
  ],
  giveUrl: 'https://www.prayerhousechurch.com/give/',
  storeUrl: 'https://store.prayerhousechurch.com',
} as const

export type ServiceTime = {
  day: string
  title: string
  time: string
  description: string
  note?: string
}

export const serviceTimes: ServiceTime[] = [
  {
    day: 'Sunday',
    title: 'Word Ministration',
    time: '11:00 – 13:00',
    description:
      'Our main gathering: worship, the undiluted Word of God and fellowship around a shared meal.',
    note: 'One service only until December 2026',
  },
  {
    day: 'Tuesday',
    title: 'Bible Study',
    time: '20:00 – 21:00',
    description: 'Study the undiluted Word of God together, midweek, in a relaxed setting.',
  },
  {
    day: 'Friday',
    title: 'Destiny Hour',
    time: '19:30 – 21:00',
    description: 'A head-on collision with the Holy Spirit and your destiny.',
  },
  {
    day: 'Saturday',
    title: 'Choir Rehearsal',
    time: '13:00 – 15:00',
    description: 'Preparation to minister to the Lord through music and song.',
  },
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Ministries', to: '/ministries' },
  { label: 'Messages', to: '/messages' },
  { label: 'Contact', to: '/contact' },
]

export const resourceLinks = [
  { label: 'Weekly Activities', to: '/weekly-activities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'New Converts', to: '/new-converts' },
  { label: 'Give', to: '/give' },
]

export const stats = [
  { value: '1997', label: 'Founded in Düsseldorf' },
  { value: '29', label: 'Years of ministry' },
  { value: '4', label: 'Ministries serving' },
  { value: '1', label: 'Family in Christ' },
]

export const values = [
  {
    icon: 'community',
    title: 'Our Community',
    body: 'We heartily welcome everyone to join us for fellowship — a warm, open family where every person is known and loved.',
    to: '/about',
    link: 'Meet the family',
  },
  {
    icon: 'vision',
    title: 'Our Vision',
    body: 'To empower people with knowledge through God’s word, teaching them to deploy their God-given talents and impact their generation.',
    to: '/about',
    link: 'Read our vision',
  },
  {
    icon: 'mission',
    title: 'Our Mission',
    body: 'To bring people to church through evangelism and to provide an exciting, God-honouring environment for worship.',
    to: '/ministries',
    link: 'Find your place',
  },
]

export const notice = {
  title: 'Change in service schedule',
  body: 'Due to railway construction, we hold one service only at 11:00 from 30 August through December 2026.',
  cta: 'See service times',
  to: '/weekly-activities',
}
