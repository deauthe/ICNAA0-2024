import { Accomodation, HowToReach } from "../components";

export default function AccomodationPage() {
  return (
    <>
      <div className="mt-16 md:grid px-4 gap-4 mx-auto md:grid-cols-2">
        <Accomodation />
        <HowToReach />
      </div>
      <div className="w-5/6 mx-auto my-4 border p-2 border-slate-600 rounded-md md:h-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2285.2535557765686!2d76.5268596221171!3d31.707584300663637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d5487e12c4a1%3A0x395f92d3a202a7d0!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1720203756471!5m2!1sen!2sin"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
}
