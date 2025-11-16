import ExploreBtn from "@/components/ExploreBtn";

const Home = () => {
    return (
            <section>
                <h1 className="text-center">Events you can't miss!</h1>
                <p className="text-center mt-5">Hackathons, Meetups, Conferences</p>
                <ExploreBtn />

                <div className="mt-20 space-y-7">
                    <h3>Featured Events</h3>
                    <ul className="events">
                        {[1,2,3,4,5].map((event)=>(
                            <li key={event}>Event {event}</li>
                        ))}
                    </ul>
                </div>

            </section>

    )
}
export default Home
