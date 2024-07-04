const Accomodation = () => {
    return (
        <div id="accomodation" className="w-11/12 md:w-full mx-auto my-3 border border-primary rounded-md p-3">
            <h3 className="text-xl font-bold">Accomodation</h3>
            <p>Limited accommodation to participants may be provided in Satpura Hostel, NIT Hamirpur, on sharing, self-payment and FCFS basis.
            For details regarding charges, booking accommodation, etc., please contact {" "}
                <a href="mailto:wardensatpura@nith.ac.in" className="underline">
                    wardensatpura@nith.ac.in
                </a>
            </p>
            <p className="font-semibold text-md my-2">Some of the hotel options nearest to the Institute are as follows:</p>
            <ul className="list-inside list-decimal">
                <li>
                    Hotel Hamir: Ph: <a href="tel:01972 222608">01972 222608</a>. or visit their{" "}
                    <a className="underline font-medium" href="http://hptdc.in/index.php/the-hamir-hamirpur/">website</a>
                </li>
                <li>
                    Hotel Chopra Residency: Ph: <a href="tel:+91 98164 69849">+91 98164 69849</a> | <a href="tel:+01972 225816">01972 225816</a>
                </li>
            </ul>
        </div>
    )
}
 
export default Accomodation;