import ConferenceCard from '../ConferenceCard'
import './index.css'

const conferencesDetails = [
    {
      id: 1,
      imageUrl: 'https://res.cloudinary.com/drlhpyjlf/image/upload/v1693060145/Untitled_design_rya19t.png',
      imageAltText: 'I-DIAS logo',
      conferenceHeading: 'I-DIAS Conferences',
      conferenceContent: 'The idea of providing an ideal platform for good healthcare system has resulted in drawing a meeting place that would allow exchange of information, ideas sharing and proposals for new collaborations: A unique forum, ranging from new conceptualized sessions to innovative talks, Exposure to other professionals may motivate younger professionals to improve their performance.',
      websiteLink: 'https://idias.org/'
    },
    {
      id: 2,
      imageUrl: 'https://res.cloudinary.com/drlhpyjlf/image/upload/v1693060558/Untitled_design_hhoamr.jpg',
      imageAltText: 'WYN logo',
      conferenceHeading: 'WYN Conferences',
      conferenceContent: 'WYN Conferences is an evolving network to prove “Great Minds Talk Ideas”. We organize variable international conferences by covering Medical, Health Sciences, Life Sciences, Physical Sciences, Engineering, Social Sciences, and Business. To serve millions of scientists and scholars we collaborate with great minds to talk about their innovative ideas.',
      websiteLink: 'https://www.wynconferences.com/home'
    },
    {
      id: 3,
      imageUrl: 'https://res.cloudinary.com/drlhpyjlf/image/upload/v1693060738/Untitled_design_cmeshs.png',
      imageAltText: 'Prosummits logo',
      conferenceHeading: 'Prosummits Conferences',
      conferenceContent: 'Welcome to our Virtual Prosummits, where we celebrate historic milestones in Women’s Rights, Mental Health, Cancer Research, Artificial Intelligence, Entrepreneurship, Autism & Behavioural Sciences, and more! Join us for an inspiring and empowering online event featuring diverse speakers, thought leaders, and experts from around the world.',
      websiteLink: 'https://prosummits.org/'
    },
]

const Conferences = () => {
    return (
        <div className='row' id='Conferences'>
          <h1 className='text-center mt-5 mb-2'>Conference Details</h1>
            <ul className="conference-cards">
                {conferencesDetails.map(each => (
                    <ConferenceCard details={each} key={each.id} />
                ))}    
            </ul>
        </div>
    )
}
export default Conferences