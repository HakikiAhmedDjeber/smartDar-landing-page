import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

class News extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "news section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "news-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

    const sectionHeader = {
      title: "Explore Our Company's Functionalities",
      paragraph: "",
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader
              data={sectionHeader}
              className="center-content reveal-from-bottom"
            />
            <div className={tilesClasses}>
              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner has-shadow">
                  <figure className="news-item-image m-0">
                    <Image
                      src={require("./../../assets/images/consultation.jpg")}
                      alt="News 01"
                      width={344}
                      height={194}
                    />
                  </figure>
                  <div className="news-item-content">
                    <div className="news-item-body">
                      <h3 className="news-item-title h4 mt-0 mb-8">
                        Consultation and Customization
                      </h3>
                      <p className="mb-16 text-sm">
                        We offer personalized consultations to design customized
                        smart home solutions tailored to your lifestyle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay="200"
              >
                <div className="tiles-item-inner has-shadow">
                  <figure className="news-item-image m-0">
                    <Image
                      src={require("./../../assets/images/setup.jpg")}
                      alt="News 02"
                      width={344}
                      height={194}
                    />
                  </figure>
                  <div className="news-item-content">
                    <div className="news-item-body">
                      <h3 className="news-item-title h4 mt-0 mb-8">
                        Installation and Setup
                      </h3>
                      <p className="mb-16 text-sm">
                        Installation and setup of smartDar systems typically
                        involve straightforward processes designed to minimize
                        complexity for users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay="400"
              >
                <div className="tiles-item-inner has-shadow">
                  <figure className="news-item-image m-0">
                    <Image
                      src={require("./../../assets/images/maintaine.jpg")}
                      alt="News 03"
                      width={344}
                      height={194}
                    />
                  </figure>
                  <div className="news-item-content">
                    <div className="news-item-body">
                      <h3 className="news-item-title h4 mt-0 mb-8">
                        Maintenance and Technical Support
                      </h3>
                      <p className="mb-16 text-sm">
                        Support and maintenance for smartDar systems are crucial
                        for ensuring continued functionality and user
                        satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

News.propTypes = propTypes;
News.defaultProps = defaultProps;

export default News;
