import "./service.css";
import ServiceCardComponent from "./ServiceCardComponent";

export default function Service() {
  return (
    <>
      <div className="service">
        <div className="wrapper">
          <div className="v-shack-left">
            <div className="title">
              Want you to boost your business growth? Solution is here.
            </div>
            <div className="paragraph">
              We provide various services to make your business grow and get
              bigger. Your satisfaction is our first priority.
            </div>
          </div>
          <div className="v-shack-right">
            <div className="h-stack-top">
              <ServiceCardComponent
                count="01"
                title="Web Content"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet."
              />
              <ServiceCardComponent
                count="02"
                title="Branding"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              />
            </div>
            <div className="h-stack-bottom">
              <ServiceCardComponent
                count="03"
                title="SEO Consultancy"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              />
              <ServiceCardComponent
                count="04"
                title="Market Analysis"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
