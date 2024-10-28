import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AdvisorSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[85%]">
        <h2 className="text-2xl my-4 mt-0 md:text-5xl font-bold dark:text-white text-center mb-[30px]">Our Advisor</h2>
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-center lg:text-center">
            <Link
              href="https://harbert.auburn.edu/directory/pankush-kalgotra.html"
              className="text-primary hover:text-primary-dark hover:text-gray-600 transition-colors relative inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr. Pankush Kalgotra
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-transform transform scale-x-0 hover:scale-x-100 origin-left"></span>
            </Link>
          </h3>
          <p className="text-gray-600 text-[17px] text-justify leading-relaxed">
            We are proud to have <b>Dr. Pankush Kalgotra</b> as an advisor at Proton DataLabs. Dr. Kalgotra is an Assistant Professor at Auburn University, specializing in healthcare analytics, network science, and the intersection of neuroimaging and information systems.
          </p>
          <p className="text-gray-600 text-[17px] text-justify leading-relaxed">
            His extensive research, which has been widely published and cited in leading academic journals, brings invaluable expertise to our team. With a PhD in Management Science and Information Systems, Dr. Kalgotra&apos;s guidance enhances our ability to provide cutting-edge AI, data science, and business intelligence solutions to small and mid-sized companies.
          </p>
          <p className="text-gray-600 text-[17px] text-justify leading-relaxed">
            Dr. Kalgotra&apos;s deep knowledge of healthcare analytics and innovative data approaches aligns perfectly with our mission of delivering tailored tech solutions that empower businesses to unlock growth and thrive in today&apos;s fast-paced digital landscape. His strategic insight continues to help us shape innovative and impactful solutions for our clients.
          </p>
        </div>
      </div>
    </section>
  );
}
