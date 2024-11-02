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
            <p>{text}</p>
            <p>{name}</p>
            <p>{`${company}, ${title}`}</p>
            {/* {children} */}
        </div>
    )
}

export default TestimonialWithoutImage
