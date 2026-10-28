export type GalleryImage = {
  src: string
  alt: string
  caption: string
  span?: 'tall' | 'wide'
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/images/worship.webp',
    alt: 'Congregation worshipping during a Sunday service at Prayer House Church',
    caption: 'Sunday worship',
    span: 'wide',
  },
  {
    src: '/images/community.webp',
    alt: 'Members of Prayer House Church gathered together after service',
    caption: 'One family',
    span: 'tall',
  },
  {
    src: '/images/church.webp',
    alt: 'The Prayer House Church building in Düsseldorf-Garath',
    caption: 'Our home in Garath',
  },
  {
    src: '/images/feature-word.webp',
    alt: 'A member reading the Word during a service',
    caption: 'The Word, unadulterated',
  },
  {
    src: '/images/ministry-youth.webp',
    alt: 'Young people praising during a youth ministry gathering',
    caption: 'Youth ministry',
  },
  {
    src: '/images/feature-partnership.webp',
    alt: 'Two members in conversation after a church service',
    caption: 'Fellowship',
    span: 'tall',
  },
  {
    src: '/images/ministry-music.webp',
    alt: 'Music ministry leading worship',
    caption: 'Music ministry',
  },
  {
    src: '/images/feature-order.webp',
    alt: 'A congregation standing in prayer',
    caption: 'Order in worship',
  },
  {
    src: '/images/ministry-ushering.webp',
    alt: 'Ushers welcoming people at the church entrance',
    caption: 'A warm welcome',
  },
  {
    src: '/images/feature-ministry.webp',
    alt: 'Members serving together at a church event',
    caption: 'Service to the Lord',
  },
  {
    src: '/images/ministry-service.webp',
    alt: 'Church members singing during worship',
    caption: 'Hearts lifted',
  },
  {
    src: '/images/new-converts.webp',
    alt: 'A new member celebrating a decision of faith',
    caption: 'Welcome home',
  },
]
