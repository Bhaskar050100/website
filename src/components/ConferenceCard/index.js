import './index.css'

const ConferenceCard = (props) => {
    const {details} = props
    const {imageUrl,imageAltText,conferenceHeading,conferenceContent,websiteLink} = details
    console.log(details)
    return (
        <li className='each-card col-10 col-sm-8 col-md-6 col-lg-4'>
            <div className='inner-card shadow'>
                <img src={imageUrl} alt={imageAltText} className='card-image' />
                <div className='card-inner-cont'>
                    <h1 className='conference-card-head'>{conferenceHeading}</h1>
                    <p className='conference-card-para'>{conferenceContent}</p>
                    <a href={websiteLink} target='_blank' rel='noopener noreferrer'>Read more</a>
                </div>
            </div>    
        </li>
    )
}
export default ConferenceCard