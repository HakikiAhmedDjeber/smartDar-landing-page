import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

// URLs to Font Awesome icons
const iconUrls = {
  automatedLighting:
    "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/lightbulb.svg",
  centralizedControl:
    "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/tablet.svg",
  lightingAutomation:
    "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/bolt.svg",
  garageManagement:
    "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/warehouse.svg",
  energyEfficiency:
    "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/leaf.svg",
  mobileConvenience:
    "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/mobile.svg",
};

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

class FeaturesTiles extends React.Component {
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
      "features-tiles section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "features-tiles-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

    const sectionHeader = {
      title: "",
      paragraph: "",
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={iconUrls.automatedLighting}
                        alt="Features tile icon 01"
                        className="icon-style"
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Automated Lighting</h4>
                    <p className="m-0 text-sm">
                      Control your lights remotely using your smartphone. Set
                      schedules, create ambiance, and save energy effortlessly.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
                data-reveal-delay="100"
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={iconUrls.centralizedControl}
                        alt="Features tile icon 02"
                        className="icon-style"
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Centralized Control</h4>
                    <p className="m-0 text-sm">
                      Control your home via tablet and mobile apps—manage lamp
                      and garage electricity.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
                data-reveal-delay="200"
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={iconUrls.lightingAutomation}
                        alt="Features tile icon 03"
                        className="icon-style"
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Lighting Automation</h4>
                    <p className="m-0 text-sm">
                      Remotely adjust lighting using your tablet or phone. Set
                      schedules, create ambiance, and save energy effortlessly.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
                data-reveal-delay="300"
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={iconUrls.garageManagement}
                        alt="Features tile icon 04"
                        className="icon-style"
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Garage Management</h4>
                    <p className="m-0 text-sm">
                      Control garage doors and monitor their status from
                      anywhere. Securely manage access and receive alerts.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
                data-reveal-delay="400"
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={iconUrls.energyEfficiency}
                        alt="Features tile icon 05"
                        className="icon-style"
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Energy Efficiency</h4>
                    <p className="m-0 text-sm">
                      Optimize electricity usage for lamps and garage. Save
                      energy by intelligently managing power flow.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
                data-reveal-delay="500"
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={iconUrls.mobileConvenience}
                        alt="Features tile icon 06"
                        className="icon-style"
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Mobile Convenience</h4>
                    <p className="m-0 text-sm">
                      Access your smart home features conveniently via your
                      phone. Turn lights on/off and operate the garage with
                      ease.
                    </p>
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

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
