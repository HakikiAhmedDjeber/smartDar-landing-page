import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

class HeroSplit extends React.Component {
  state = {
    videoModalActive: false,
  };

  openVideoModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  };

  closeVideoModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  };

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "hero section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "hero-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const splitClasses = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top"
    );

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <div className={splitClasses}>
              <div className="split-item">
                <div className="hero-content split-item-content center-content-mobile reveal-from-top">
                  <h1 className="mt-0 mb-16">Smart Dar</h1>
                  <p className="mt-0 mb-32">
                    Experience the future of living with 100% Algerian
                    technology, designed to seamlessly integrate into your
                    lifestyle and deliver unparalleled convenience and security.
                  </p>
                </div>
                <div className="hero-figure split-item-image split-item-image-fill illustration-element-01 reveal-from-bottom">
                  <a
                    data-video="https://www.youtube.com/embed/0EZShVexKzI"
                    href="#0"
                    aria-controls="video-modal"
                    onClick={this.openVideoModal}
                  >
                    <Image
                      src={require("./../../assets/images/hero.png")}
                      alt="Hero"
                      width={528}
                      height={396}
                    />
                  </a>
                </div>
                <Modal
                  id="video-modal"
                  show={this.state.videoModalActive}
                  handleClose={this.closeVideoModal}
                  video="https://www.youtube.com/embed/0EZShVexKzI"
                  videoTag="iframe"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

HeroSplit.propTypes = propTypes;
HeroSplit.defaultProps = defaultProps;

export default HeroSplit;
