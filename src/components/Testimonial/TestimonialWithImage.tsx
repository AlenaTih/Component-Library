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
            <img
                className="testimonial-image"
                src={image}
                alt={`An image of ${name}`} />
            <p>{text}</p>
            <p>{name}</p>
            <p>{`${company}, ${title}`}</p>
            {/* {children} */}
        </div>
    )
}

export default TestimonialWithImage
