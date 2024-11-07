function TestimonialWithImage({
    image,
    text,
    name,
    company,
    title,
    // children,
}: {
    image: string,
    text: string,
    name: string,
    company: string,
    title: string,
    // children: React.ReactNode,
}) {
    return (
        <div className="testimonial-with-image">
            <div className="testimonial-image-container">
                <img
                    className="testimonial-image"
                    src={image}
                    alt={`An image of ${name}`} />
            </div>
            <div className="testimonial-text-container">
                <p className="testimonial-text">{text}</p>
                <p className="testimonial-name">{name}</p>
                <p className="testimonial-company-title">{`${company}, ${title}`}</p>
            </div>
            {/* {children} */}
        </div>
    )
}

export default TestimonialWithImage
