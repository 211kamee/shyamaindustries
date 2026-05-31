import { Phone, Mail, MapPin, Instagram, FacebookIcon } from "lucide-react";
import { CONTACT_INFO } from "@/data/siteContent";

export function ContactSection() {
  return (
    <section
      className="flex justify-center items-center border-t border-destructive bg-accent"
      id="contact"
    >
      <div className="w-full p-12 flex gap-6 justify-center not-xl:flex-col">
        <img
          src="icons/hello.svg"
          className="max-h-96 xl:w-1/2 object-contain xl:object-right "
        />
        <div className="xl:w-1/2 flex flex-col justify-center not-xl:items-center xl:p-4 gap-8">
          <h2 className="text-3xl font-bold font-dsc">Contact us</h2>
          <p className="not-xl:text-center">
            Interest in our products? <br /> Feel free to reach us for
            ordering our products, and any sales related inquiry.
          </p>
          <span>We look forward to hearing from you!</span>
          <a
            href={`${CONTACT_INFO.map}`}
            className="flex items-start gap-2 not-xl:flex-col not-xl:items-center not-xl:text-center"
          >
            <MapPin className="shrink-0 mt-1" />
            <span>{CONTACT_INFO.address}</span>
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-start gap-2 not-xl:flex-col not-xl:items-center not-xl:text-center"
          >
            <Mail className="shrink-0 mt-1" />
            <span>{CONTACT_INFO.email}</span>
          </a>
          <a
            href={`${CONTACT_INFO.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 not-xl:flex-col not-xl:items-center not-xl:text-center"
          >
            <Instagram className="shrink-0 mt-1" />
            <span>{"@shyama_industries"}</span>
          </a>
          <a
            href={`${CONTACT_INFO.facebook}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 not-xl:flex-col not-xl:items-center not-xl:text-center"
          >
            <FacebookIcon className="shrink-0 mt-1" />
            <span>{"Shyama Industries"}</span>
          </a>
          {
            (CONTACT_INFO.phone).map((e) => <a
              href={`tel:${e}`}
              className="flex items-start gap-2 not-xl:flex-col not-xl:items-center not-xl:text-center relative"
            >
              <img
                src="icons/callUs.svg"
                alt=""
                className="absolute left-3/6 xl:left-1/6 top-full"
              />
              <Phone className="shrink-0 mt-1" />
              <span>{e}</span>
            </a>)
          }

        </div>
      </div>
    </section>
  );
}
