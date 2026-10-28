export type Leader = {
  name: string
  role: string
  image: string
  bio: string
  fullBio: string[]
}

export const leaders: Leader[] = [
  {
    name: 'Rev. Nana Yaw Aikins',
    role: 'Senior Pastor',
    image: '/images/pastor-nana.webp',
    bio: 'Senior pastor of Prayer House Church Düsseldorf, a church in Düsseldorf-Garath.',
    fullBio: [
      'Rev. Nana Yaw Aikins is the senior pastor of Prayer House Church Düsseldorf, a church located in Düsseldorf-Garath. He is a graduate and a teacher of the Word.',
      'Together with his wife, he founded Prayer House Church in 1997 after a season of apprenticeship under various spiritual leaders — a foundation of spiritual growth, discipline and leadership development.',
      'His teaching is practical and Christ-centred, with a heart for seeing people discover their gifts, develop them and deploy them for the glory of God.',
    ],
  },
  {
    name: 'Pastor Charles Mensah',
    role: 'Pastor',
    image: '/images/pastor-charles.webp',
    bio: 'A man of prayer whose dedication to the things of God is spectacular.',
    fullBio: [
      'Pastor Charles Mensah serves as a pastor at Prayer House Church, carrying a strong ministry of prayer and intercession.',
      'He is known for his dedication to the things of God and his commitment to seeing believers grow in intimacy with the Holy Spirit.',
      'He leads the Destiny Hour on Fridays — a gathering described as a head-on collision with the Holy Spirit and your destiny.',
    ],
  },
  {
    name: 'Maddy Aikins',
    role: 'Leader',
    image: '/images/maddy.webp',
    bio: 'An inspiration to this generation, with a passion for the things of God.',
    fullBio: [
      'Maddy Aikins is an inspiration to this generation. Her passion for the things of God propels others never to give up on their faith.',
      'She serves the church family with warmth and conviction, and her faith is a quiet encouragement to everyone around her.',
    ],
  },
]
