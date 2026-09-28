import { SectionHeader } from "../common";
import CertificateCard from "./CertificateCard";
import { certificates } from "../../constants/certificates";

const Certificates = () => {
    return (
        <section id="certificates">
            <SectionHeader title="CERTIFICATES" meta={`${certificates.length} CERTIFICATES`} />

            <div className="flex flex-col gap-6 mb-12">
                {certificates.map((cert) => (
                    <CertificateCard key={cert.id} certificate={cert} />
                ))}
            </div>
        </section>
    );
};

export default Certificates;
