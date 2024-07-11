import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Tabs, { TabList, Tab, TabPanel } from "./../elements/Tabs";
import Image from "../elements/Image";

const iconUrls = {
  board:
    "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/microchip.svg",
  tablet:
    "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/tablet.svg",
  globe:
    "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/globe.svg",
  prototype:
    "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/cubes.svg",
  wally:
    "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/person-chalkboard.svg",
};

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

class FeaturesTabs extends React.Component {
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
      "features-tabs section center-content",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "features-tabs-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const sectionHeader = {
      title: "Our Gallery: Designed with You in Mind",
      paragraph:
        "Explore our collection of innovative solutions, crafted to elevate your home experience. Discover the perfect blend of technology and design, meticulously curated to bring you the best in smart home automation.",
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <Tabs active="tab-e">
              <TabList>
                <Tab tabId="tab-e">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={iconUrls.wally}
                      alt="Tab icon 01"
                      className="icon-tab"
                    />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    with el-wally
                  </div>
                </Tab>
                <Tab tabId="tab-a">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={iconUrls.prototype}
                      alt="Tab icon 01"
                      className="icon-tab"
                    />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Prototype
                  </div>
                </Tab>
                <Tab tabId="tab-b">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={iconUrls.globe}
                      alt="Tab icon 02"
                      className="icon-tab"
                    />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Global Work
                  </div>
                </Tab>
                <Tab tabId="tab-c">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={iconUrls.board}
                      alt="Tab icon 03"
                      className="icon-tab"
                    />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Our Board
                  </div>
                </Tab>
                <Tab tabId="tab-d">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={iconUrls.tablet}
                      alt="Tab icon 04"
                      className="icon-tab"
                    />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Monitoring Screen
                  </div>
                </Tab>
              </TabList>
              <TabPanel id="tab-e">
                <Image
                  className="has-shadow"
                  src={require("./../../assets/gallery/wally.jpg")}
                  alt="Features tabs image 00"
                  width={896}
                  height={504}
                />
              </TabPanel>
              <TabPanel id="tab-a">
                <Image
                  className="has-shadow"
                  src={require("./../../assets/gallery/prototype.jpg")}
                  alt="Features tabs image 01"
                  width={896}
                  height={504}
                />
              </TabPanel>
              <TabPanel id="tab-b">
                <Image
                  className="has-shadow"
                  src={require("./../../assets/gallery/full_screen.jpg")}
                  alt="Features tabs image 02"
                  width={896}
                  height={504}
                />
              </TabPanel>
              <TabPanel id="tab-c">
                <Image
                  className="has-shadow"
                  src={require("./../../assets/gallery/board.jpg")}
                  alt="Features tabs image 03"
                  width={896}
                  height={504}
                />
              </TabPanel>
              <TabPanel id="tab-d">
                <Image
                  className="has-shadow"
                  src={require("./../../assets/gallery/tablet.jpg")}
                  alt="Features tabs image 04"
                  width={896}
                  height={504}
                />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesTabs.propTypes = propTypes;
FeaturesTabs.defaultProps = defaultProps;

export default FeaturesTabs;
