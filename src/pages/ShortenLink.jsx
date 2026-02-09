import LinkSelector from "../components/LinkSelector";

const ShortenLink = () => {
    return (
        <div className="dropableArea text-center pt-5">
            <div className="text-secondary fw-bolder display-6 ">Your Link Goes Here</div>
            <div className="text-muted fs-6 mb-3">Type or paste your long URL here</div>
            <div className="col-10 col-md-6 mx-auto">
                <LinkSelector />
            </div>
        </div>    

    )
}
export default ShortenLink;