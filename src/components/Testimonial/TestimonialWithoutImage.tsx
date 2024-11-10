function TestimonialWithoutImage({
    companyLogo,
    text,
    name,
    company,
    title,
    // children,
}: {
    companyLogo: string,
    text: string,
    name: string,
    company: string,
    title: string,
    // children: React.ReactNode,
}) {
    return (
        <div className="testimonial-without-image">
            <img
                className="company-logo-image"
                src={companyLogo}
                alt={`The logo of ${company}`} />
            <div className="testimonial-text-container">
                <p className=" testimonial-text">{text}</p>
            </div>
            <div className="testimonial-name-company-title-container">
                <p className="testimonial-name">{name}</p>
                <p className="testimonial-slash"> / </p>
                <p className="testimonial-company-title">{`${ company}, ${title}`}</p>
            </div>
            {/* {children} */}
        </div>
    )
}

export default TestimonialWithoutImage
