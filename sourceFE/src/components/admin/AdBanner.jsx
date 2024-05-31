const AdBanner = (props) => {
    return (
        <section className="py-5 px-4 relative w-[1080px]">
            <div className="absolute inset-0 w-full h-[50px]" style={{ background: "linear-gradient(137.92deg, rgba(192, 132, 252, 0) 20.43%, rgba(232, 121, 249, 0.26) 49.66%, rgba(204, 171, 238, 0) 92.38%)" }}>
            <div className="relative  max-w-screen-xl mx-auto px-4 justify-center items-center gap-12 ">
                <div className="flex-1 max-w-lg px-4">
                    <h3 className="text-3xl font-bold">
                        {props.name}
                    </h3>
                </div>
            </div>
            </div>
        </section>
    )
}
export default AdBanner