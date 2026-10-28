export type Sermon = {
  id: string
  title: string
  speaker: string
  category: 'Sunday Service' | 'Destiny Hour' | 'Thanksgiving'
  videoId: string
  featured?: boolean
}

export const sermons: Sermon[] = [
  {
    id: 'stop-watching-the-wind',
    title: 'Stop Watching the Wind, Start Sowing Your Seed',
    speaker: 'Rev. Nana Yaw Aikins',
    category: 'Thanksgiving',
    videoId: '5aJI0elkCUg',
    featured: true,
  },
  {
    id: 'worship-service',
    title: 'Worship Service',
    speaker: 'Rev. Nana Yaw Aikins',
    category: 'Sunday Service',
    videoId: 'TvSd8Grq3b4',
  },
  {
    id: 'sunday-service-jim-adombila',
    title: 'Sunday Service',
    speaker: 'Pastor Jim Adombila',
    category: 'Sunday Service',
    videoId: 'JlRKD1QMbzo',
  },
  {
    id: 'sacrifice-for-the-next-generation-2',
    title: 'Sacrifice for the Next Generation (Part 2)',
    speaker: 'Rev. Nana Yaw Aikins',
    category: 'Sunday Service',
    videoId: 'rw8aYgp0fkY',
  },
  {
    id: 'covenant-keeping-god',
    title: 'Covenant Keeping God — Ministration Session',
    speaker: 'Rev. Nana Yaw Aikins',
    category: 'Sunday Service',
    videoId: '0XUfS57wgNk',
  },
  {
    id: 'sacrifice-for-the-next-generation',
    title: 'Sacrifice for the Next Generation',
    speaker: 'Rev. Nana Yaw Aikins',
    category: 'Sunday Service',
    videoId: '42diXZqDsP8',
  },
  {
    id: 'kingdom-burdens-2',
    title: 'Kingdom Burdens Produce Kingdom Action (Part 2)',
    speaker: 'Rev. Nana Yaw Aikins',
    category: 'Destiny Hour',
    videoId: 'MR1cLGK9_9Q',
  },
  {
    id: 'out-of-time',
    title: 'We’re Out of Time',
    speaker: 'Rev. Nana Yaw Aikins',
    category: 'Sunday Service',
    videoId: 'A1i_AUHeMBc',
  },
  {
    id: 'kingdom-burdens-1',
    title: 'Kingdom Burdens Produce Kingdom Action',
    speaker: 'Rev. Nana Yaw Aikins',
    category: 'Destiny Hour',
    videoId: '6Q4_nKMn0Ns',
  },
  {
    id: 'stronger-together',
    title: 'Stronger Together',
    speaker: 'Rev. Nana Yaw Aikins',
    category: 'Sunday Service',
    videoId: 'BuIL9MSmN2Y',
  },
  {
    id: 'destiny-hour-charles-mensah',
    title: 'Destiny Hour',
    speaker: 'Pastor Charles Mensah',
    category: 'Destiny Hour',
    videoId: 'WX8ow-GWjuw',
  },
  {
    id: 'provoking-love-2',
    title: 'Provoking Love, Inspiring Good Works (Part 2)',
    speaker: 'Rev. Nana Yaw Aikins',
    category: 'Sunday Service',
    videoId: 'e7cT11XFvb8',
  },
  {
    id: 'destiny-hour-nana-yaw-aikins',
    title: 'Destiny Hour',
    speaker: 'Rev. Nana Yaw Aikins',
    category: 'Destiny Hour',
    videoId: 'V33gALZ-8ZI',
  },
  {
    id: 'provoking-love',
    title: 'Provoking Love, Inspiring Good Works',
    speaker: 'Rev. Nana Yaw Aikins',
    category: 'Sunday Service',
    videoId: 'sLc3f2mDMoo',
  },
  {
    id: 'dry-bones-come-alive',
    title: 'Dry Bones Come Alive',
    speaker: 'Maddy Aikins',
    category: 'Sunday Service',
    videoId: 'Gm5B852FfV0',
  },
]

export const youtubeThumb = (videoId: string) =>
  `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

export const youtubeWatch = (videoId: string) =>
  `https://www.youtube.com/watch?v=${videoId}`

export type PodcastEpisode = {
  title: string
  speaker: string
  src: string
}

const MP3 = 'https://www.prayerhousechurch.com/wp-content/uploads'

export const podcastEpisodes: PodcastEpisode[] = [
  {
    title: 'Appointed Time',
    speaker: 'Rev. Nana Yaw Aikins',
    src: `${MP3}/2020/11/Rev.-Nana-Yaw-Aikins-Appointed-Time.mp3`,
  },
  {
    title: 'It’s Your Choice',
    speaker: 'Rev. Nana Yaw Aikins',
    src: `${MP3}/2020/10/Its-Your-Choice.mp3`,
  },
  {
    title: 'Why God Picks the Second',
    speaker: 'Rev. Nana Yaw Aikins',
    src: `${MP3}/2020/10/Why-God-pick-the-second.mp3`,
  },
  {
    title: 'Building God’s Kingdom',
    speaker: 'Rev. Nana Yaw Aikins',
    src: `${MP3}/2020/10/Building-Gods-Kingdom.mp3`,
  },
  {
    title: 'No More Silence',
    speaker: 'Rev. Nana Yaw Aikins',
    src: `${MP3}/2020/11/Rev.-Nana-Yaw-Aikins-–-No-More-Silence.mp3`,
  },
  {
    title: 'The Distinct Spirit — Part 1',
    speaker: 'Rev. Nana Yaw Aikins',
    src: `${MP3}/2020/11/Rev.-Nana-Yaw-Aikins-–-The-Distinct-Spirit-Part-1.mp3`,
  },
  {
    title: 'The Distinct Spirit — Part 2',
    speaker: 'Rev. Nana Yaw Aikins',
    src: `${MP3}/2020/11/Rev.-Nana-Yaw-Aikins-–-The-Distinct-Spirit-Part-2.mp3`,
  },
  {
    title: 'Give It All',
    speaker: 'Rev. Nana Yaw Aikins',
    src: `${MP3}/2020/11/Rev.-Nana-Yaw-Aikins-–-Give-it-all.mp3`,
  },
  {
    title: 'Divine Power',
    speaker: 'Rev. Nana Yaw Aikins',
    src: `${MP3}/2020/11/Rev.-Nana-Yaw-Aikins-–-Divine-Power.mp3`,
  },
  {
    title: 'Don’t Stop Till You Get There',
    speaker: 'Rev. Nana Yaw Aikins',
    src: `${MP3}/2020/11/Rev.-Nana-Yaw-Aikins-–-Dont-Stop-Till-You-Get-There.mp3`,
  },
  {
    title: 'Thought Pattern — Part 1',
    speaker: 'Rev. Nana Yaw Aikins',
    src: `${MP3}/2020/11/Rev.-Nana-Yaw-Aikins-–-Thought-Pattern.mp3`,
  },
  {
    title: 'Thought Pattern — Part 2',
    speaker: 'Rev. Nana Yaw Aikins',
    src: `${MP3}/2020/11/Rev.-Nana-Yaw-Aikins-–-Thought-Pattern-Part-2.mp3`,
  },
  {
    title: 'The Importance of Women',
    speaker: 'Rev. Nana Yaw Aikins',
    src: `${MP3}/2020/11/Rev.-Nana-Yaw-Aikins-–-The-Importance-of-Women-Mothers-Day.mp3`,
  },
  {
    title: 'How to Flourish',
    speaker: 'Rev. Nana Yaw Aikins',
    src: `${MP3}/2021/02/Rev.-Nana-Yaw-Aikins-–-How-to-flourish.mp3`,
  },
  {
    title: 'You Are Priceless',
    speaker: 'Rev. Nana Yaw Aikins',
    src: `${MP3}/2021/04/Rev.-Nana-Yaw-Aikins-–-You-Are-Priceless.mp3`,
  },
  {
    title: 'What Shall We Eat?',
    speaker: 'Rev. Nana Yaw Aikins',
    src: `${MP3}/2020/11/Rev.-Nana-Yaw-Aikins-–-What-Shall-We-Eat.mp3`,
  },
]
