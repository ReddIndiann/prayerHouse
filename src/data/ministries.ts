export type Ministry = {
  slug: string
  name: string
  tagline: string
  description: string
  image: string
  focus: string[]
}

export const ministries: Ministry[] = [
  {
    slug: 'youth-ministry',
    name: 'Youth Ministry',
    tagline: 'Raising a generation that knows God',
    description:
      'A place for young people to grow in faith, build real friendships and discover the gifts God has placed in them. We meet to study the Word, pray and serve together.',
    image: '/images/ministry-youth.webp',
    focus: ['Discipleship', 'Friendship', 'Purpose'],
  },
  {
    slug: 'service-to-the-lord',
    name: 'Service to the Lord',
    tagline: 'Serving with joy, not duty',
    description:
      'Behind every Sunday gathering is a team that serves quietly and faithfully. From setup to hospitality, this ministry makes room for people to meet with God.',
    image: '/images/ministry-service.webp',
    focus: ['Hospitality', 'Service', 'Faithfulness'],
  },
  {
    slug: 'ushering-ministry',
    name: 'Ushering Ministry',
    tagline: 'The first welcome, the lasting impression',
    description:
      'Our ushers are the first faces you meet and the hands that help everything run smoothly. They carry the warmth of the house and make sure nobody stands alone.',
    image: '/images/ministry-ushering.webp',
    focus: ['Welcome', 'Order', 'Care'],
  },
  {
    slug: 'music-ministry',
    name: 'Music Ministry',
    tagline: 'Ministering to the Lord in song',
    description:
      'Our choir and musicians rehearse weekly to lead the congregation into worship. It is ministry before it is performance — preparation to minister to the Lord.',
    image: '/images/ministry-music.webp',
    focus: ['Worship', 'Excellence', 'Unity'],
  },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Prayer House welcomed me warmly, and I immediately felt at home. Every Sunday, the Word meets me exactly where I am.',
    name: 'Precious Osei',
    role: 'Member',
  },
  {
    quote:
      'Thank you Prayer House family for welcoming me, sharing the Good News with me and being a constant source of encouragement.',
    name: 'Merlin Fenina',
    role: 'Member',
  },
]
